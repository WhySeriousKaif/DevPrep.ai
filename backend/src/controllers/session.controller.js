import { chatClient, streamClient } from "../libs/stream.js";
import Session from "../models/session.model.js";

export async function createSession(req, res) {
  try {

    const { title, role, duration, questions, difficulty } = req.body;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    if (!questions || questions.length === 0 || !difficulty) {
      return res.status(400).json({ message: "Questions array and difficulty are required" });
    }

    // generate a unique call id for stream video
    const callId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    // create session in db
    const session = await Session.create({
      title,
      role,
      duration,
      questions,
      difficulty,
      host: userId,
      callId,
      status: "pending", // Wait for host to start the interview
    });

    // create stream video call (if Stream is configured)
    // create stream video call (if Stream is configured)
    try {
      if (streamClient) {
        await streamClient.video.call("default", callId).getOrCreate({
          data: {
            created_by_id: clerkId,
            custom: { problem, difficulty, sessionId: session._id.toString() },
          },
        });
      }
    } catch (streamError) {
      console.error("⚠️ Stream video call creation failed:", streamError.message);
      // Continue execution - don't fail the whole session creation
    }

    // chat messaging (if Stream is configured)
    try {
      if (chatClient) {
        const channel = chatClient.channel("messaging", callId, {
          name: `${title || "Coding"} Session`,
          created_by_id: clerkId,
          members: [clerkId],
        });
        await channel.create();
      }
    } catch (chatError) {
      console.error("⚠️ Stream chat creation failed:", chatError.message);
    }

    res.status(201).json({ session });
  } catch (error) {
    console.log("Error in createSession controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getActiveSessions(_, res) {
  try {
    const sessions = await Session.find({ status: { $in: ["active", "pending"] } })
      .populate("host", "name profileImage email clerkId")
      .populate("participant", "name profileImage email clerkId")
      .sort({ createdAt: -1 })
      .limit(20);

    res.status(200).json({ sessions });
  } catch (error) {
    console.log("Error in getActiveSessions controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getMyRecentSessions(req, res) {
  try {
    const userId = req.user._id;

    // get sessions where user is either host or participant
    const sessions = await Session.find({
      status: "completed",
      $or: [{ host: userId }, { participant: userId }],
    })
      .sort({ createdAt: -1 })
      .limit(20);

    res.status(200).json({ sessions });
  } catch (error) {
    console.log("Error in getMyRecentSessions controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getSessionById(req, res) {
  try {
    const { id } = req.params;

    const session = await Session.findById(id)
      .populate("host", "name email profileImage clerkId")
      .populate("participant", "name email profileImage clerkId");

    if (!session) return res.status(404).json({ message: "Session not found" });

    res.status(200).json({ session });
  } catch (error) {
    console.log("Error in getSessionById controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function joinSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    if (session.status === "completed") {
      return res.status(400).json({ message: "Cannot join a completed session" });
    }

    if (session.host.toString() === userId.toString()) {
      return res.status(400).json({ message: "Host cannot join their own session as participant" });
    }

    // check if session is already full - has a participant
    if (session.participant) return res.status(409).json({ message: "Session is full" });

    session.participant = userId;
    await session.save();

    // Add participant to chat channel (if Stream is configured)
    if (chatClient) {
      const channel = chatClient.channel("messaging", session.callId);
      await channel.addMembers([clerkId]);
    } else {
      console.warn("⚠️ Stream chatClient not initialized. Participant not added to chat.");
    }

    res.status(200).json({ session });
  } catch (error) {
    console.log("Error in joinSession controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function startSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    // check if user is the host
    if (session.host.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Only the host can start the session" });
    }

    if (session.status === "active") {
      return res.status(400).json({ message: "Session is already active" });
    }

    if (session.status === "completed") {
      return res.status(400).json({ message: "Session is already completed" });
    }

    session.status = "active";
    session.startTime = new Date();
    await session.save();

    res.status(200).json({ session, message: "Session started successfully" });
  } catch (error) {
    console.log("Error in startSession controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function endSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    // check if user is the host
    if (session.host.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Only the host can end the session" });
    }

    // check if session is already completed
    if (session.status === "completed") {
      return res.status(400).json({ message: "Session is already completed" });
    }

    // delete stream video call (if Stream is configured)
    if (streamClient) {
      const call = streamClient.video.call("default", session.callId);
      await call.delete({ hard: true });
    } else {
      console.warn("⚠️ Stream streamClient not initialized. Video call not deleted.");
    }

    // delete stream chat channel (if Stream is configured)
    if (chatClient) {
      const channel = chatClient.channel("messaging", session.callId);
      await channel.delete();
    } else {
      console.warn("⚠️ Stream chatClient not initialized. Chat channel not deleted.");
    }

    session.status = "completed";
    await session.save();

    res.status(200).json({ session, message: "Session ended successfully" });
  } catch (error) {
    console.log("Error in endSession controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}