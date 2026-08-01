import Resume from "../models/resume.model.js";
import { extractPdfText } from "../utils/pdfText.js";
import { analyzeResumeForTech } from "../utils/geminiResume.js";

export const uploadAndAnalyzeResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "A PDF resume is required" });
    }

    const extractedText = await extractPdfText(req.file.buffer);
    if (!extractedText || !extractedText.trim()) {
      return res.status(400).json({ success: false, message: "Couldn't extract any text from that PDF" });
    }

    const analysis = await analyzeResumeForTech(extractedText);

    const resume = await Resume.findOneAndUpdate(
      { user: req.user._id },
      { user: req.user._id, fileName: req.file.originalname, extractedText, ...analysis },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.status(200).json({ success: true, data: resume });
  } catch (error) {
    console.error("Error analyzing resume:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getMyResumeAnalysis = async (req, res) => {
  try {
    const resume = await Resume.findOne({ user: req.user._id });
    if (!resume) {
      return res.status(404).json({ success: false, message: "No resume analysis found" });
    }
    res.status(200).json({ success: true, data: resume });
  } catch (error) {
    console.error("Error fetching resume analysis:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
