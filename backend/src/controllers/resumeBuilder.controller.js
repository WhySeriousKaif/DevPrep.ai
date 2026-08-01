import {
  refineResumeBullets,
  categorizeResumeSkills,
  enhanceResume,
  compressResume,
  sanitizeEnhancedResume,
} from "../utils/geminiResume.js";
import { renderModernProfessional } from "../latex/templates/modernProfessional.js";
import { compileLatex } from "../latex/compile.js";

const MAX_COMPRESS_ATTEMPTS = 2;

// Only one template exists today; keeping this as a lookup makes adding a
// second template later a one-line addition instead of a refactor.
const renderTemplate = (resumeData) => renderModernProfessional(resumeData);

const compileResumeData = (resumeData) => compileLatex(renderTemplate(resumeData));

export const refineDescription = async (req, res) => {
  try {
    const { title, role, description, mode } = req.body;
    if (!description || !description.trim()) {
      return res.status(400).json({ success: false, message: "Description is required" });
    }

    const bullets = await refineResumeBullets({ title, role, description, mode });
    res.status(200).json({ success: true, bullets });
  } catch (error) {
    console.error("Error refining resume description:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const categorizeSkills = async (req, res) => {
  try {
    const { skills } = req.body;
    if (!skills || !skills.trim()) {
      return res.status(400).json({ success: false, message: "Skills are required" });
    }

    const categories = await categorizeResumeSkills(skills);
    res.status(200).json({ success: true, categories });
  } catch (error) {
    console.error("Error categorizing resume skills:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Full pipeline: AI-polish the whole resume, compile to PDF, and compress
// with follow-up AI passes until it fits the requested page budget (or we
// give up after a couple of tries and return the closest result we have).
export const generateResume = async (req, res) => {
  try {
    const { resumeData, targetPages = 1 } = req.body;
    if (!resumeData || typeof resumeData !== "object") {
      return res.status(400).json({ success: false, message: "resumeData is required" });
    }

    const enhanced = await enhanceResume(resumeData, targetPages);
    let finalData = sanitizeEnhancedResume(enhanced, resumeData);

    let { pdfBuffer, pageCount } = await compileResumeData(finalData);

    let attempts = 0;
    while (pageCount > targetPages && attempts < MAX_COMPRESS_ATTEMPTS) {
      const compressed = await compressResume(finalData, pageCount, targetPages);
      finalData = sanitizeEnhancedResume(compressed, finalData);
      ({ pdfBuffer, pageCount } = await compileResumeData(finalData));
      attempts += 1;
    }

    res.status(200).json({
      success: true,
      pdfBase64: pdfBuffer.toString("base64"),
      pageCount,
      fitsTarget: pageCount <= targetPages,
      resumeData: finalData,
    });
  } catch (error) {
    console.error("Error generating resume:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Compile-only, no AI call — used for fast live-preview refreshes after a
// per-field regenerate or manual edit.
export const compilePreview = async (req, res) => {
  try {
    const { resumeData } = req.body;
    if (!resumeData || typeof resumeData !== "object") {
      return res.status(400).json({ success: false, message: "resumeData is required" });
    }

    const { pdfBuffer, pageCount } = await compileResumeData(resumeData);
    res.status(200).json({ success: true, pdfBase64: pdfBuffer.toString("base64"), pageCount });
  } catch (error) {
    console.error("Error compiling resume:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
