import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    interviewType: {
      type: String,
      enum: ["technical", "behavioral", "mixed"],
      default: "technical",
    },
    topicsToFocus: {
      type: [String],
      default: [],
    },
    description: {
      type: String,
      default: "",
    },
    questionCount: {
      type: Number,
      default: 8,
    },
    vapiCallId: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed", "cancelled", "analyzing"],
      default: "pending",
    },
    transcript: {
      type: String,
      default: "",
    },
    recordingUrl: {
      type: String,
      default: "",
    },
    recordingBlob: {
      type: Buffer,
      default: null,
    },
    analysis: {
      score: {
        type: Number,
        default: 0,
      },
      strengths: {
        type: [String],
        default: [],
      },
      mistakes: {
        type: [String],
        default: [],
      },
      improvements: {
        type: [String],
        default: [],
      },
      summary: {
        type: String,
        default: "",
      },
      detailedFeedback: {
        type: String,
        default: "",
      },
    },
    feedback: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },
    duration: {
      type: Number, // in seconds
      default: 0,
    },
    startedAt: {
      type: Date,
      default: null,
    },
    endedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

const Interview = mongoose.model("Interview", interviewSchema);

export default Interview;
