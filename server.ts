import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

// Load local environment variables in case they exist
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Gemini SDK with telemetry header
const getGenAI = (): GoogleGenAI => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("WARNING: GEMINI_API_KEY is not defined in the environment variables.");
  }
  return new GoogleGenAI({
    apiKey: apiKey || "",
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

// ==========================================
// API Endpoints
// ==========================================

// Endpoint: GeM Case & Procurement Dispute Analyzer
app.post("/api/gemini/analyze", async (req, res) => {
  try {
    const { category, text, tenderId } = req.body;

    if (!text || text.trim().length === 0) {
      res.status(400).json({ error: "No document text or case material was provided." });
      return;
    }

    const ai = getGenAI();
    const prompt = `
      Case Category: ${category}
      Tender ID or Incident Reference: ${tenderId || "Not provided"}
      
      Raw Dispute Text or SCN Allegations or Bid Requirements:
      """
      ${text}
      """
    `;

    const systemInstruction = `
      You are a distinguished Senior Advocate of India and Leading Counsel specializing in Administrative Law, Public Procurement, and Government e-Marketplace (GeM) disputes before the High Court of Delhi and the Supreme Court of India.
      
      Analyze the provided case material, show-cause allegations, or bid-disqualification grounds. Act as the counsel formulating the defense strategy for the client (who is a bidder, OEM, or MSME). 
      Identify valid statutory grounds, provisions from the General Financial Rules (GFR) 2017, statutory notifications from the Ministry of MSME, Ministry of Finance (MoF), MeitY, and the current GeM General Terms and Conditions (GTC), Special Terms and Conditions (STC), or Incident Management Policy (IMP).
      
      Provide your analysis in the specified JSON format. Make your arguments firm, professional, and grounded in Indian jurisprudence (e.g., citing the right to a personal hearing under W.P.(C)-IPD 9/2024, or proportionality tests under Indian law, or specific GFR rules).
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.2, // Keep it precise and disciplined
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["summary", "strengths", "legislativeGrounds", "rebuttals", "actionSteps", "notes"],
          properties: {
            summary: {
              type: Type.STRING,
              description: "A clear, 2-3 sentence overview identifying the core legal conflict, the buyer's actions, and the procedural standing."
            },
            strengths: {
              type: Type.ARRAY,
              description: "High-level procedural and substantive strengths of the client's position to defeat the disqualification or moratorium.",
              items: { type: Type.STRING }
            },
            legislativeGrounds: {
              type: Type.ARRAY,
              description: "Specific citations from Indian procurement regulations or High Court judgements that strongly counter the buyer's action.",
              items: {
                type: Type.OBJECT,
                required: ["citation", "application"],
                properties: {
                  citation: { type: Type.STRING, description: "The legal provision, GFR rule, circular, or case law (e.g., GFR 170(i), CEO Circular 22/2024, W.P.(C) 9/2024)." },
                  application: { type: Type.STRING, description: "How this specific rule blocks or reverses the buyer's decision." }
                }
              }
            },
            rebuttals: {
              type: Type.ARRAY,
              description: "Point-by-point defense statements addressing each allegation or reason given by the buyer.",
              items: {
                type: Type.OBJECT,
                required: ["claim", "counterclaim", "draftParagraph"],
                properties: {
                  claim: { type: Type.STRING, description: "The buyer's allegation, rejection reason, or system flag." },
                  counterclaim: { type: Type.STRING, description: "The specific factual or regulatory rebuttal." },
                  draftParagraph: { type: Type.STRING, description: "A formal, legally drafted rebuttal paragraph the client can copy/paste directly into their official GeM portal representation." }
                }
              }
            },
            actionSteps: {
              type: Type.ARRAY,
              description: "Next immediate tactical steps for the business to protect their eligibility, on-portal and off-portal.",
              items: { type: Type.STRING }
            },
            notes: {
              type: Type.STRING,
              description: "The Law Firm-level strategic counsel note on potential risk areas or additional documentation to gather."
            }
          }
        }
      }
    });

    const report = JSON.parse(response.text || "{}");
    res.json(report);
  } catch (error: any) {
    console.error("Error analyzing disputes via Gemini:", error);
    res.status(500).json({ error: error.message || "An error occurred during case analysis." });
  }
});

// Endpoint: Counsel Enquiry Briefing Generator
app.post("/api/gemini/enquiry", async (req, res) => {
  try {
    const { name, company, email, phone, practiceArea, description } = req.body;

    if (!description || description.trim().length === 0) {
      res.status(400).json({ error: "Please enter a brief description of your matter." });
      return;
    }

    const ai = getGenAI();
    const prompt = `
      Create an internal legal brief summarizing this incoming intake form details:
      
      Client Details:
      - Name: ${name || "Anonymous"} 
      - Entity/Company: ${company || "Not provided"}
      - Contact: ${email || "Not provided"} / ${phone || "Not provided"}
      - Selected Practice Area: ${practiceArea || "General Practice"}
      
      Enquiry Description:
      """
      ${description}
      """
    `;

    const systemInstruction = `
      You are Advocate Aditya Saraswat's AI Legal Clerk.
      Process the incoming lead and draft an elegant, internal-only Case Intake Brief in Markdown.
      The brief must include:
      1. Case Primacy: Actionability assessment (is there a hard deadline, like a 10-day SCN limit, or impending bid opening?).
      2. Regulatory Landscape: What Indian statutory domains or ministries this touches (e.g. Ministry of MSME, DPIIT, MeitY, Central/State Procuring entity).
      3. Suggested Consultation Strategy: 2-3 specific legal questions Aditya should ask the client in their initial 30-minute consultation.
      
      Do not address the client directly. Write this strictly for Advocate Aditya Saraswat. Keep the tone professional, objective, and clear.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.3,
      }
    });

    res.json({
      success: true,
      brief: response.text || "Internal briefing generation failed."
    });
  } catch (error: any) {
    console.error("Error generating counsel briefing:", error);
    res.status(500).json({ error: error.message || "An error occurred while generating the briefing." });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// ==========================================
// Vite Dev & Production Static Middleware
// ==========================================
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Setting up Vite development middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Serving static production assets...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
}

setupServer();
