import { CODING_PROBLEMS } from "../data/codingProblems.js";

// @desc    List all curated coding problems (trimmed fields, for the recruiter question-picker)
// @route   GET /api/problems
export const getAllProblems = async (req, res) => {
  try {
    const list = CODING_PROBLEMS.map(({ id, title, difficulty, topic }) => ({ id, title, difficulty, topic }));
    res.status(200).json({ success: true, problems: list });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get full content for one problem (for solving)
// @route   GET /api/problems/:id
export const getProblemById = async (req, res) => {
  try {
    const problem = CODING_PROBLEMS.find((p) => p.id === req.params.id);
    if (!problem) {
      return res.status(404).json({ success: false, message: "Problem not found" });
    }
    res.status(200).json({ success: true, problem });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
