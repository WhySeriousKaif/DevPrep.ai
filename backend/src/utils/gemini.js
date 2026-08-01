// Gemini AI integration for interview analysis
// Uses the shared aiClient which tries Gemini first and falls back to OpenAI.
import { callAI } from "./aiClient.js";

/**
 * Analyze interview transcript and generate feedback
 */
export const analyzeInterview = async (transcript, role, experience, topics, interviewType) => {
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
    const analysis = await callAI(prompt, { maxOutputTokens: 2048, temperature: 0.7 });

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
    console.error("Error analyzing interview:", error);
    throw error;
  }
};
