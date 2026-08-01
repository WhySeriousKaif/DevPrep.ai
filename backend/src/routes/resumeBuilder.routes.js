import express from "express";
import { protectRoute } from "../middlewares/protectroute.js";
import {
  refineDescription,
  categorizeSkills,
  generateResume,
  compilePreview,
} from "../controllers/resumeBuilder.controller.js";

const router = express.Router();

router.post("/refine-description", protectRoute, refineDescription);
router.post("/categorize-skills", protectRoute, categorizeSkills);
router.post("/generate", protectRoute, generateResume);
router.post("/compile", protectRoute, compilePreview);

export default router;
