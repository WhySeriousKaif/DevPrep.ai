// Gemini AI integration for interview analysis
import { ENV } from "../libs/env.js";

const GEMINI_API_KEY = ENV.GEMINI_API_KEY || "";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent";

// Alternative: gemini-1.5-flash or gemini-1.5-pro
const GEMINI_MODEL = "gemini-2.0-flash-exp";

/**
 * Analyze interview transcript and generate feedback
 */
export const analyzeInterview = async (transcript, role, experience, topics, interviewType) => {
  if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  const prompt = `You are an expert interview evaluator analyzing a ${interviewType} interview transcript.

INTERVIEW DETAILS:
- Role: ${role}
- Candidate Experience: ${experience} years
- Topics Covered: ${topics.join(", ")}
- Interview Type: ${interviewType}

TRANSCRIPT:
${transcript}

TASK:
Analyze this interview transcript and provide a comprehensive evaluation. Return your analysis as a JSON object with the following structure:

{
  "score": <number between 0-100>,
  "strengths": ["strength1", "strength2", "strength3"],
  "mistakes": ["mistake1", "mistake2", "mistake3"],
  "improvements": ["improvement1", "improvement2", "improvement3"],
  "summary": "A brief 2-3 sentence summary of overall performance",
  "detailedFeedback": "Comprehensive feedback covering technical knowledge, communication skills, problem-solving approach, and areas for improvement. Be specific and constructive."
}

EVALUATION CRITERIA:
1. Technical Knowledge: Depth and accuracy of technical answers
2. Communication: Clarity, articulation, and ability to explain concepts
3. Problem Solving: Approach to solving technical problems
4. Experience Alignment: Whether answers match stated experience level
5. Interview Performance: Overall confidence and professionalism

IMPORTANT:
- Score should reflect overall performance (0-100)
- Be constructive and specific in feedback
- Highlight both strengths and areas for improvement
- Focus on actionable improvements
- Consider the candidate's ${experience} years of experience when evaluating

Return ONLY valid JSON, no additional text.`;

  try {
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;
    
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();

    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      throw new Error("Invalid response from Gemini API");
    }

    const responseText = data.candidates[0].content.parts[0].text.trim();

    // Extract JSON from response (might have markdown code blocks)
    let jsonText = responseText;
    if (responseText.includes("```json")) {
      jsonText = responseText.split("```json")[1].split("```")[0].trim();
    } else if (responseText.includes("```")) {
      jsonText = responseText.split("```")[1].split("```")[0].trim();
    }

    const analysis = JSON.parse(jsonText);

    // Validate analysis structure
    if (!analysis.score && analysis.score !== 0) {
      throw new Error("Invalid analysis: missing score");
    }

    return {
      score: Math.max(0, Math.min(100, analysis.score || 0)),
      strengths: Array.isArray(analysis.strengths) ? analysis.strengths : [],
      mistakes: Array.isArray(analysis.mistakes) ? analysis.mistakes : [],
      improvements: Array.isArray(analysis.improvements) ? analysis.improvements : [],
      summary: analysis.summary || "",
      detailedFeedback: analysis.detailedFeedback || "",
    };
  } catch (error) {
    console.error("Error analyzing interview with Gemini:", error);
    throw error;
  }
};

