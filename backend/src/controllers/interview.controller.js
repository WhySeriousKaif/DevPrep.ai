import Interview from "../models/interview.model.js";
import { ENV } from "../libs/env.js";
import { analyzeInterview } from "../utils/gemini.js";

const VAPI_API_KEY = ENV.VAPI_API_KEY;
const VAPI_ASSISTANT_ID = ENV.VAPI_ASSISTANT_ID;
const VAPI_BASE_URL = ENV.VAPI_BASE_URL || "https://api.vapi.ai";

// Helper function to call VAPI API
const vapiRequest = async (endpoint, method = "GET", data = null) => {
  try {
    const options = {
      
      method,
      headers: {
        Authorization: `Bearer ${VAPI_API_KEY}`,
        "Content-Type": "application/json",
      },
    };

    if (data && (method === "POST" || method === "PATCH" || method === "PUT")) {
      options.body = JSON.stringify(data);
    }

    // // console.log(`[VAPI Request] ${method} ${VAPI_BASE_URL}${endpoint}`);
    // if (data) {
    //   // console.log("[VAPI Request Data]", JSON.stringify(data, null, 2));
    // }

    const response = await fetch(`${VAPI_BASE_URL}${endpoint}`, options);
    
    const responseText = await response.text();
    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch (e) {
      responseData = { rawResponse: responseText };
    }
    
    if (!response.ok) {
      // // console.error("[VAPI Error Response]", {
      //   status: response.status,
      //   statusText: response.statusText,
      //   data: responseData,
      // });
      throw new Error(
        responseData.message || 
        responseData.error?.message || 
        `HTTP error! status: ${response.status} - ${response.statusText}`
      );
    }

    // // console.log("[VAPI Success Response]", responseData);
    return responseData;
  } catch (error) {
    // // console.error("[VAPI API Error Details]:", {
    //   message: error.message,
    //   endpoint: `${VAPI_BASE_URL}${endpoint}`,
    //   method,
    // });
    throw error;
  }
};

// @desc    Create a new AI interview session
// @route   POST /api/interview/create
// @access  Private
export const createInterview = async (req, res) => {
  try {
    const { role, experience, interviewType, topicsToFocus, description } = req.body;
    const userId = req.user._id;

    // Validate required fields
    if (!role || !experience || !topicsToFocus || topicsToFocus.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Role, experience, and topics are required",
      });
    }

    // Create interview record in database
    const interview = await Interview.create({
      user: userId,
      role,
      experience,
      interviewType: interviewType || "technical",
      topicsToFocus: Array.isArray(topicsToFocus) ? topicsToFocus : [topicsToFocus],
      description: description || "",
      status: "pending",
    });

    // Generate comprehensive system message for VAPI
    const systemMessage = `You are an experienced technical interviewer conducting a ${interviewType || "technical"} interview for the position of ${role}.

CANDIDATE BACKGROUND:
- Role Applied For: ${role}
- Years of Experience: ${experience} years
- Interview Type: ${interviewType || "technical"}
- Topics to Focus On: ${topicsToFocus.join(", ")}
${description ? `- Additional Context: ${description}` : ""}

YOUR ROLE:
1. Conduct a professional, structured interview
2. Ask clear, relevant questions based on the candidate's experience level
3. Probe deeper on technical concepts related to: ${topicsToFocus.join(", ")}
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

    // Generate first message
    const firstMessage = interviewType === "behavioral" 
      ? `Hello! Thank you for taking the time today. I'm calling to conduct your behavioral interview for the ${role} position. I'll be asking you about your past experiences, how you've handled various situations, and your approach to teamwork and problem-solving. We should take about 20-30 minutes. Are you ready to begin?`
      : interviewType === "mixed"
      ? `Hello! Thank you for taking the time today. I'm calling to conduct your interview for the ${role} position. This will be a combination of technical and behavioral questions, focusing on ${topicsToFocus.slice(0, 3).join(", ")}. We'll discuss both your technical skills and your past experiences. We should take about 25-35 minutes. Are you ready to begin?`
      : `Hello! Thank you for taking the time today. I'm calling to conduct your technical interview for the ${role} position. I'll be asking you questions about ${topicsToFocus.slice(0, 3).join(", ")} and your ${experience} years of experience. We should take about 20-30 minutes. Are you ready to begin?`;

    // Create VAPI call for web (using WebRTC)
    let vapiCallId = "";
    let vapiError = null;
    
    // Check if VAPI credentials are configured
    // // console.log("[createInterview] Checking VAPI configuration:", {
    //   hasApiKey: !!VAPI_API_KEY,
    //   hasAssistantId: !!VAPI_ASSISTANT_ID,
    //   apiKeyLength: VAPI_API_KEY?.length || 0,
    // });
    
    if (!VAPI_API_KEY || !VAPI_ASSISTANT_ID) {
      // // console.warn("[createInterview] ⚠️ VAPI not configured - missing API key or Assistant ID");
      // // console.warn("[createInterview] VAPI_API_KEY:", VAPI_API_KEY ? "SET (hidden)" : "NOT SET");
      // // console.warn("[createInterview] VAPI_ASSISTANT_ID:", VAPI_ASSISTANT_ID || "NOT SET");
      vapiError = "VAPI_API_KEY or VAPI_ASSISTANT_ID not configured";
    } else {
      try {
        // Create VAPI call with serverUrl for web integration
        // Note: For production, use your actual backend URL
        const webhookUrl = `${ENV.CLIENT_URL || "http://localhost:3001"}/api/interview/webhook`;
        const vapiCallData = {
          assistantId: VAPI_ASSISTANT_ID,
          serverUrl: webhookUrl, // Webhook for transcript updates
          assistantOverrides: {
            systemMessage: systemMessage,
            firstMessage: firstMessage,
            voice: {
              provider: "11labs",
              voiceId: "21m00Tcm4TlvDq8ikWAM", // Default voice, can be changed
            },
          },
          customer: {
            number: `web_${userId}`, // Web identifier
          },
          // Enable WebRTC for browser connection
          client: {
            type: "webrtc", // Request WebRTC connection for browser
          },
          metadata: {
            interviewId: interview._id.toString(),
            userId: userId.toString(),
            role: role,
            experience: experience.toString(),
            interviewType: interviewType,
            topics: topicsToFocus.join(", "),
          },
        };

        // // console.log("[createInterview] Creating VAPI call for web:", {
        //   assistantId: VAPI_ASSISTANT_ID,
        //   hasApiKey: !!VAPI_API_KEY,
        //   webhookUrl,
        //   metadata: vapiCallData.metadata,
        // });

        const vapiCall = await vapiRequest("/call", "POST", vapiCallData);
        // // console.log("[createInterview] VAPI call response:", JSON.stringify(vapiCall, null, 2));

        // Try multiple possible fields for call ID
        vapiCallId = vapiCall.id || vapiCall.callId || vapiCall.call?.id || "";
        
        if (vapiCallId && vapiCallId.trim() !== '') {
          interview.vapiCallId = vapiCallId;
          await interview.save();
          // // console.log("[createInterview] ✅ VAPI call created successfully:", vapiCallId);
        } else {
          // // console.error("[createInterview] ❌ VAPI call response missing call ID. Full response:", vapiCall);
          throw new Error("VAPI call created but no call ID returned in response");
        }
      } catch (error) {
        // // console.error("[createInterview] ❌ Error creating VAPI call:", error);
        // // console.error("[createInterview] Error details:", {
        //   message: error.message,
        //   stack: error.stack,
        //   response: error.response || 'No response',
        // });
        vapiError = error.message || "Failed to create VAPI call";
        // Continue without failing the interview creation
      }
    }

    res.status(201).json({
      success: true,
      message: vapiError ? "Interview created but VAPI call failed. Check configuration." : "Interview session created successfully.",
      interview,
      vapiCallId,
      error: vapiError || null,
    });
  } catch (error) {
    // // console.error("Error in createInterview:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create interview session",
      error: error.message,
    });
  }
};

// @desc    Get all interviews for the logged-in user
// @route   GET /api/interview/my-interviews
// @access  Private
export const getMyInterviews = async (req, res) => {
  try {
    const userId = req.user._id;

    const interviews = await Interview.find({ user: userId })
      .sort({ createdAt: -1 })
      .limit(50);

    res.status(200).json({
      success: true,
      interviews,
    });
  } catch (error) {
    // console.error("Error in getMyInterviews:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch interviews",
      error: error.message,
    });
  }
};

// @desc    Get interview by ID
// @route   GET /api/interview/:id
// @access  Private
export const getInterviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const interview = await Interview.findOne({
      _id: id,
      user: userId,
    });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }

    res.status(200).json({
      success: true,
      interview,
    });
  } catch (error) {
    // console.error("Error in getInterviewById:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch interview",
      error: error.message,
    });
  }
};

// @desc    Get VAPI call status
// @route   GET /api/interview/:id/call-status
// @access  Private
export const getCallStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const interview = await Interview.findOne({
      _id: id,
      user: userId,
    });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }

    if (!interview.vapiCallId) {
      return res.status(400).json({
        success: false,
        message: "No VAPI call ID found for this interview",
      });
    }

    // Fetch call status from VAPI
    let callStatus = null;
    try {
      callStatus = await vapiRequest(`/call/${interview.vapiCallId}`);
    } catch (vapiError) {
      // console.error("Error fetching VAPI call status:", vapiError);
    }

    res.status(200).json({
      success: true,
      interview,
      callStatus,
    });
  } catch (error) {
    // console.error("Error in getCallStatus:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch call status",
      error: error.message,
    });
  }
};

// @desc    Update interview (e.g., when call ends)
// @route   PATCH /api/interview/:id
// @access  Private
export const updateInterview = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const { status, transcript, feedback, duration } = req.body;

    const interview = await Interview.findOne({
      _id: id,
      user: userId,
    });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }

    // Update fields
    if (status) interview.status = status;
    if (transcript) interview.transcript = transcript;
    if (feedback) interview.feedback = feedback;
    if (duration) interview.duration = duration;

    await interview.save();

    res.status(200).json({
      success: true,
      message: "Interview updated successfully",
      interview,
    });
  } catch (error) {
    // console.error("Error in updateInterview:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update interview",
      error: error.message,
    });
  }
};

// @desc    Start interview session and get VAPI WebRTC details
// @route   POST /api/interview/:id/start
// @access  Private
export const startInterview = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    // console.log(`[startInterview] Starting interview ${id} for user ${userId}`);

    const interview = await Interview.findOne({
      _id: id,
      user: userId,
    });

    if (!interview) {
      // console.log(`[startInterview] Interview ${id} not found for user ${userId}`);
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }

    // console.log(`[startInterview] Current interview status: ${interview.status}`);

    // If already in-progress, allow resuming (don't block)
    if (interview.status === "in-progress") {
      // console.log(`[startInterview] Interview already in-progress - allowing resume`);
      // Don't return error - allow resume by returning the interview
      // Frontend will handle resuming the connection
    }

    if (interview.status === "completed") {
      // console.log(`[startInterview] Interview already completed`);
      return res.status(400).json({
        success: false,
        message: "Interview is already completed",
        currentStatus: interview.status,
      });
    }

    // Get VAPI call details for WebRTC connection (if exists)
    let vapiCallData = null;
    if (interview.vapiCallId) {
      try {
        // console.log(`[startInterview] Fetching VAPI call: ${interview.vapiCallId}`);
        vapiCallData = await vapiRequest(`/call/${interview.vapiCallId}`);
        // console.log(`[startInterview] VAPI call fetched successfully`);
      } catch (error) {
        // console.error("[startInterview] Error fetching VAPI call:", error);
        // Don't fail if VAPI call fetch fails - might be created later
      }
    } else {
      // console.log("[startInterview] No VAPI call ID found, interview will proceed without VAPI connection");
    }

    // Update status to in-progress
    // console.log("[startInterview] Updating interview status to in-progress");
    interview.status = "in-progress";
    interview.startedAt = new Date();
    
    try {
      await interview.save();
      // console.log("[startInterview] Interview saved successfully");
    } catch (saveError) {
      // console.error("[startInterview] Error saving interview:", saveError);
      return res.status(400).json({
        success: false,
        message: "Failed to update interview status",
        error: saveError.message,
        details: saveError.errors || saveError,
      });
    }

    res.status(200).json({
      success: true,
      message: "Interview started successfully",
      interview: {
        _id: interview._id,
        status: interview.status,
        startedAt: interview.startedAt,
        vapiCallId: interview.vapiCallId,
      },
      vapiCall: vapiCallData,
    });
  } catch (error) {
    // console.error("[startInterview] Unexpected error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to start interview",
      error: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
};

// @desc    Get VAPI WebRTC connection details and create client token
// @route   GET /api/interview/:id/vapi-connection
// @access  Private
export const getVapiConnection = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    // console.log(`[getVapiConnection] Request received for interview ${id}, user ${userId}`);

    const interview = await Interview.findOne({
      _id: id,
      user: userId,
    });

    if (!interview) {
      // console.log(`[getVapiConnection] Interview ${id} not found for user ${userId}`);
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }

    // For web SDK, we can return assistantId even without a call
    // The frontend can start a new call directly with assistantId
    if (!interview.vapiCallId || interview.vapiCallId.trim() === '') {
      // console.log(`[getVapiConnection] Interview ${id} found but no vapiCallId - returning assistantId for web SDK`);
      // Still return success with assistantId for web SDK to start new call
      return res.status(200).json({
        success: true,
        vapiCall: null,
        callId: null,
        assistantId: VAPI_ASSISTANT_ID, // Include assistant ID for web SDK to start new call
        // Include API key for frontend (should be public key, not secret)
        // Note: In production, use VAPI's public key mechanism
        apiKey: VAPI_API_KEY,
        message: "No existing call found, but assistantId provided for web SDK to start new call",
      });
    }

    // Get VAPI call details (if call exists)
    let vapiCall = null;
    try {
      vapiCall = await vapiRequest(`/call/${interview.vapiCallId}`);
    } catch (error) {
      // console.warn(`[getVapiConnection] Could not fetch call details:`, error.message);
      // Still return assistantId even if call fetch fails
    }

    // For browser WebRTC, VAPI provides client connection details
    // The call object should contain WebRTC SDP offer/answer details
    res.status(200).json({
      success: true,
      vapiCall,
      callId: interview.vapiCallId,
      assistantId: VAPI_ASSISTANT_ID, // Include assistant ID for web SDK
      // Include API key for frontend (should be public key, not secret)
      // Note: In production, use VAPI's public key mechanism
      apiKey: VAPI_API_KEY,
    });
  } catch (error) {
    // console.error("[getVapiConnection] Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get VAPI connection details",
      error: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
};

// @desc    Upload recording and transcript
// @route   POST /api/interview/:id/submit
// @access  Private
export const submitInterview = async (req, res) => {
  try {
    const { id } = req.params;
    const { transcript, recordingBase64, duration } = req.body;
    const userId = req.user._id;

    const interview = await Interview.findOne({
      _id: id,
      user: userId,
    });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }

    if (interview.status !== "in-progress") {
      return res.status(400).json({
        success: false,
        message: "Interview is not in progress",
      });
    }

    // Update interview with transcript and recording
    interview.transcript = transcript || "";
    interview.duration = duration || 0;
    interview.endedAt = new Date();
    
    // Store recording as base64 (or upload to cloud storage)
    if (recordingBase64) {
      // Convert base64 to buffer for storage
      const recordingBuffer = Buffer.from(recordingBase64, "base64");
      interview.recordingBlob = recordingBuffer;
    }

    interview.status = "completed";
    await interview.save();

    // Start AI analysis in background
    analyzeInterviewAsync(interview._id.toString()).catch((err) => {
      // console.error("Background analysis error:", err);
    });

    res.status(200).json({
      success: true,
      message: "Interview submitted successfully. Analysis will be available shortly.",
      interview,
    });
  } catch (error) {
    // console.error("Error in submitInterview:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit interview",
      error: error.message,
    });
  }
};

// Background function to analyze interview
async function analyzeInterviewAsync(interviewId) {
  try {
    const interview = await Interview.findById(interviewId);
    if (!interview || !interview.transcript) {
      // console.error("Interview not found or no transcript");
      return;
    }

    interview.status = "analyzing";
    await interview.save();

    // Analyze using Gemini
    const analysis = await analyzeInterview(
      interview.transcript,
      interview.role,
      interview.experience,
      interview.topicsToFocus,
      interview.interviewType
    );

    // Update interview with analysis
    interview.analysis = analysis;
    interview.status = "completed";
    await interview.save();

    // console.log("Interview analysis completed:", interviewId);
  } catch (error) {
    // console.error("Error analyzing interview:", error);
    const interview = await Interview.findById(interviewId);
    if (interview) {
      interview.status = "completed";
      await interview.save();
    }
  }
}

// @desc    Get interview recording
// @route   GET /api/interview/:id/recording
// @access  Private
export const getRecording = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const interview = await Interview.findOne({
      _id: id,
      user: userId,
    });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }

    if (!interview.recordingBlob) {
      return res.status(404).json({
        success: false,
        message: "Recording not found",
      });
    }

    // Convert buffer to base64 for response
    const recordingBase64 = interview.recordingBlob.toString("base64");

    res.status(200).json({
      success: true,
      recording: recordingBase64,
    });
  } catch (error) {
    // console.error("Error in getRecording:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get recording",
      error: error.message,
    });
  }
};

// @desc    End/Cancel interview
// @route   POST /api/interview/:id/end
// @access  Private
export const endInterview = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const interview = await Interview.findOne({
      _id: id,
      user: userId,
    });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }

    // Update interview status
    interview.status = interview.status === "in-progress" ? "completed" : "cancelled";
    interview.endedAt = new Date();
    await interview.save();

    res.status(200).json({
      success: true,
      message: "Interview ended successfully",
      interview,
    });
  } catch (error) {
    // console.error("Error in endInterview:", error);
    res.status(500).json({
      success: false,
      message: "Failed to end interview",
      error: error.message,
    });
  }
};
