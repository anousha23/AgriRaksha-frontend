import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  console.error("ERROR: Gemini API key not found. Please set VITE_GEMINI_API_KEY in your .env file");
}

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "You are 'Bodhi,' a friendly and knowledgeable AI assistant for Indian farmers. " +
    "Provide helpful, concise, and accurate information and advice on agricultural topics " +
    "like crop management, soil health, and pest control. Do not access real-time data. " +
    "Always be encouraging, clear, and easy to understand.",
});

export async function getGeminiResponse(userMessage) {
  if (!userMessage || !userMessage.trim()) return "Please enter a message.";

  try {
    const result = await model.generateContent(userMessage);

    if (!result?.response?.text) {
      console.warn("⚠️ Gemini returned an empty response.");
      return "Sorry, I couldn’t generate a response right now.";
    }

    return result.response.text();
  } catch (error) {
    console.error("🛑 Gemini API error:", error);
    return "⚠️ Sorry, I couldn’t get a response right now.";
  }
}
