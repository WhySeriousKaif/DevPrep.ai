import Interview from "../models/interview.model.js";
import { ENV } from "../libs/env.js";
import { analyzeInterview } from "../utils/gemini.js";
import { buildInterviewPrompt } from "../utils/interviewPrompt.js";

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
    const { role, experience, interviewType, topicsToFocus, description, questionCount } = req.body;
    const userId = req.user._id;

    // Validate required fields
    if (!role || !experience || !topicsToFocus || topicsToFocus.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Role, experience, and topics are required",
      });
    }

    const clampedQuestionCount = Math.min(15, Math.max(3, Number(questionCount) || 8));

    // Create interview record in database. The actual Vapi call is created
    // client-side (frontend calls /vapi-connection to get assistantOverrides,
    // then starts the Web SDK call directly) — no need to pre-create a call here.
    const interview = await Interview.create({
      user: userId,
      role,
      experience,
      interviewType: interviewType || "technical",
      topicsToFocus: Array.isArray(topicsToFocus) ? topicsToFocus : [topicsToFocus],
      description: description || "",
      questionCount: clampedQuestionCount,
      status: "pending",
    });

    res.status(201).json({
      success: true,
      message: "Interview session created successfully.",
      interview,
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

    // Compute the assistant overrides fresh from this interview's own data
    // every time, so the live call always matches what was actually configured
    // at setup (role/experience/topics/description/questionCount) — no separate
    // pre-created Vapi call to fetch or fall out of sync with.
    const assistantOverrides = buildInterviewPrompt({
      role: interview.role,
      experience: interview.experience,
      interviewType: interview.interviewType,
      topicsToFocus: interview.topicsToFocus,
      description: interview.description,
      questionCount: interview.questionCount,
    });

    res.status(200).json({
      success: true,
      assistantId: VAPI_ASSISTANT_ID,
      assistantOverrides,
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
