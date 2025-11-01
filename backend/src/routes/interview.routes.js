import express from "express";
import { protectRoute } from "../middlewares/protectroute.js";
import {
  createInterview,
  getMyInterviews,
  getInterviewById,
  getCallStatus,
  updateInterview,
  endInterview,
  startInterview,
  submitInterview,
  getRecording,
  getVapiConnection,
} from "../controllers/interview.controller.js";
import { handleVapiWebhook } from "../controllers/webhook.controller.js";

const router = express.Router();

// Webhook endpoint (no auth required - VAPI calls it)
router.post("/webhook", handleVapiWebhook);

// Static routes first
router.post("/create", protectRoute, createInterview);
router.get("/my-interviews", protectRoute, getMyInterviews);

// Specific dynamic routes (must come before generic :id route)
router.get("/:id/call-status", protectRoute, getCallStatus);
router.get("/:id/vapi-connection", protectRoute, getVapiConnection);
router.get("/:id/recording", protectRoute, getRecording);
router.post("/:id/start", protectRoute, startInterview);
router.post("/:id/submit", protectRoute, submitInterview);
router.post("/:id/end", protectRoute, endInterview);

// Generic routes last (catch-all for :id)
router.get("/:id", protectRoute, getInterviewById);
router.patch("/:id", protectRoute, updateInterview);

export default router;
