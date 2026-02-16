import User from "../models/user.model.js";

// Get current user profile with solved problems
export const getUserProfile = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId).select("-password"); // Exclude password if it existed (though we use Clerk)

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error in getUserProfile:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Mark a problem as solved
export const markProblemSolved = async (req, res) => {
    try {
        const userId = req.user._id;
        const { problemId } = req.body;

        if (!problemId) {
            return res.status(400).json({ message: "Problem ID is required" });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if already solved
        if (!user.solvedProblems.includes(problemId)) {
            user.solvedProblems.push(problemId);
            await user.save();
        }

        res.status(200).json({
            message: "Problem marked as solved",
            solvedProblems: user.solvedProblems
        });
    } catch (error) {
        console.error("Error in markProblemSolved:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
