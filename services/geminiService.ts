import { GoogleGenAI, Type } from "@google/genai";
import { GenerateSyllabusResponse, EnrichedServiceContent } from "../types";

const apiKey = process.env.API_KEY || ''; 

const ai = new GoogleGenAI({ apiKey });

export const generateSyllabus = async (courseTitle: string, context: string): Promise<GenerateSyllabusResponse | null> => {
  if (!apiKey) {
    console.warn("API Key is missing. Mocking response.");
    return mockSyllabus(courseTitle);
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Create a comprehensive, 4-week workshop syllabus for a course titled "${courseTitle}". 
      Context: ${context}.
      The audience is Enterprise B2B professionals in the Middle East and Global markets. 
      Focus on international compliance, strategic alignment, and high-trust architecture suited for these regions.
      Return strictly a JSON object describing the weeks and topics.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            weeks: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  topics: { 
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  }
                }
              }
            }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as GenerateSyllabusResponse;
    }
    return null;

  } catch (error) {
    console.error("Gemini API Error (Syllabus):", error);
    return mockSyllabus(courseTitle);
  }
};

export const generateServiceContent = async (title: string, description: string): Promise<EnrichedServiceContent | null> => {
  if (!apiKey) {
    return mockContent(title);
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate web page content for a B2B service titled "${title}". 
      Description: ${description}.
      Context: This is for a high-trust global consultancy with physical presence in the Middle East through alliance partners, and global reach across North America, Europe, APAC, and Latin America.
      
      1. Write a compelling "Why this matters now" paragraph (max 80 words) focusing on business value, sovereignty, and urgency in the current market.
      2. List 4 specific, high-impact bullet point benefits.
      3. Define the ideal target audience in one sentence.

      Return strictly JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            whyItMatters: { type: Type.STRING },
            benefits: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            audience: { type: Type.STRING }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as EnrichedServiceContent;
    }
    return null;

  } catch (error) {
    console.error("Gemini API Error (Content):", error);
    return mockContent(title);
  }
};

// Mocks
const mockSyllabus = (title: string): GenerateSyllabusResponse => ({
  weeks: [
    { title: "Foundations & Global Compliance", topics: [`Introduction to ${title}`, "Core Concepts", "International Regulatory Standards"] },
    { title: "Advanced Techniques", topics: ["Deep Dive Methodologies", "Enterprise Tooling", "Practical Workshops"] },
    { title: "Strategic Implementation", topics: ["Scaling in Enterprise Sectors", "Risk Management", "Performance Metrics"] },
    { title: "Future Trends & Capstone", topics: ["AI Integration", "Case Studies (Global)", "Final Assessment"] }
  ]
});

const mockContent = (title: string): EnrichedServiceContent => ({
  whyItMatters: `In the current global digital landscape, ${title} is critical for maintaining competitive advantage and sovereignty. Organizations that adopt this early will see significant improvements in efficiency and regulatory compliance across borders.`,
  benefits: [
    "Increase operational efficiency by 25%",
    "Ensure 100% regulatory compliance",
    "Accelerate team velocity",
    "Enhance product quality"
  ],
  audience: "CTOs, QA Managers, and Enterprise Technical Leads."
});