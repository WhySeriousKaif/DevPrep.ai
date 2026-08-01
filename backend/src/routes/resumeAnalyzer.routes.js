import express from "express";
import { protectRoute } from "../middlewares/protectroute.js";
import { uploadResumePdf } from "../middlewares/resumeUpload.middleware.js";
import { uploadAndAnalyzeResume, getMyResumeAnalysis } from "../controllers/resumeAnalyzer.controller.js";

const router = express.Router();

router.post("/upload", protectRoute, uploadResumePdf.single("resume"), uploadAndAnalyzeResume);
router.get("/me", protectRoute, getMyResumeAnalysis);

export default router;
