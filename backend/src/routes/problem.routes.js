import express from "express";
import { protectRoute } from "../middlewares/protectroute.js";
import { getAllProblems, getProblemById } from "../controllers/problem.controller.js";

const router = express.Router();

router.get("/", protectRoute, getAllProblems);
router.get("/:id", protectRoute, getProblemById);

export default router;
