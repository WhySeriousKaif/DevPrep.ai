// Builds the system prompt, first message, and voice config Vapi should use
// for a given interview. Single source of truth — used both when creating an
// interview and when the frontend actually connects to the live call, so the
// two never drift apart.
export function buildInterviewPrompt({ role, experience, interviewType, topicsToFocus, description, questionCount = 8 }) {
  const type = interviewType || "technical";
  const topics = topicsToFocus.join(", ");

  const systemMessage = `You are an experienced technical interviewer conducting a ${type} interview for the position of ${role}.

CANDIDATE BACKGROUND:
- Role Applied For: ${role}
- Years of Experience: ${experience} years
- Interview Type: ${type}
- Topics to Focus On: ${topics}
- Target Number of Questions: ask approximately ${questionCount} substantive questions covering the listed topics, adjusting depth/difficulty as you go — prioritize quality follow-ups over rushing to hit the count.
${description ? `- Additional Context: ${description}` : ""}

YOUR ROLE:
1. Conduct a professional, structured interview
2. Ask clear, relevant questions based on the candidate's experience level
3. Probe deeper on technical concepts related to: ${topics}
4. Listen carefully to responses and ask follow-up questions when needed
5. Provide brief, constructive feedback after key answers
6. Keep the interview conversational but focused
7. Allow the candidate time to think before responding

INTERVIEW STRUCTURE:
- Start with a brief introduction and set expectations
- Begin with easier questions and gradually increase difficulty
- For technical interviews, ask about specific technologies, problem-solving, and coding concepts
- For behavioral interviews, ask about past experiences, challenges, and teamwork
- End by asking if the candidate has any questions

COMMUNICATION STYLE:
- Be friendly and professional
- Speak clearly and at a moderate pace
- Use natural, conversational language
- Don't rush the candidate
- Acknowledge good answers positively
- If an answer is incomplete, ask clarifying questions

IMPORTANT:
- Do NOT provide answers or hints - let the candidate demonstrate their knowledge
- Focus on understanding their thought process
- Note areas of strength and areas for improvement
- Keep track of key points discussed for feedback`;

  // Roughly 3.5 minutes per question, so the estimate scales with how many
  // questions were actually requested instead of a flat "20-30 minutes".
  // A single number ("about 28 minutes") rather than a hyphenated range
  // ("24-32 minutes") — TTS reads hyphenated ranges awkwardly, and the
  // resulting garbled speech then transcribes back into nonsense digits.
  const estimatedMinutes = Math.round(questionCount * 3.5);
  const durationText = `about ${estimatedMinutes} minutes`;

  const firstMessage =
    type === "behavioral"
      ? `Hello! Thank you for taking the time today. I'm calling to conduct your behavioral interview for the ${role} position. I'll be asking you about your past experiences, how you've handled various situations, and your approach to teamwork and problem-solving. We should take ${durationText}. Are you ready to begin?`
      : type === "mixed"
      ? `Hello! Thank you for taking the time today. I'm calling to conduct your interview for the ${role} position. This will be a combination of technical and behavioral questions, focusing on ${topicsToFocus.slice(0, 3).join(", ")}. We'll discuss both your technical skills and your past experiences. We should take ${durationText}. Are you ready to begin?`
      : `Hello! Thank you for taking the time today. I'm calling to conduct your technical interview for the ${role} position. I'll be asking you questions about ${topicsToFocus.slice(0, 3).join(", ")} and your ${experience} years of experience. We should take ${durationText}. Are you ready to begin?`;

  return {
    firstMessage,
    // No voice override: the Vapi dashboard assistant is configured with its
    // own built-in "Elliot" voice (provider: "vapi"), not ElevenLabs — the org
    // has no 11labs credential connected, so overriding to an 11labs voiceId
    // here would make the call fail. Confirmed directly from the assistant's
    // dashboard config; letting it fall through to the assistant's own voice
    // avoids that entirely.
    //
    // Vapi's AssistantOverrides has no flat "systemMessage" field (confirmed
    // against @vapi-ai/web's type definitions) — the system prompt has to go
    // through model.messages instead. Provider confirmed as "openai" (GPT-4o)
    // from the assistant's dashboard config.
    model: {
      provider: "openai",
      model: "gpt-4o",
      messages: [{ role: "system", content: systemMessage }],
    },
    // Redundant fallback: if the assistant's own dashboard prompt is written
    // with Liquid placeholders (e.g. "{{ role }}"), this substitutes them.
    // Harmless no-op if it isn't.
    variableValues: {
      role,
      experience,
      interviewType: type,
      topics,
      description: description || "",
      questionCount,
    },
  };
}
