// Gemini AI integration for resume builder (bullet refinement + skill categorization)
// Uses the shared aiClient which tries Gemini first and falls back to OpenAI.
import { callAI } from "./aiClient.js";


const REFINE_MODE_RULES = {
  polish: "Produce 2-4 concise, achievement-oriented bullet points.",
  shorten:
    "Produce at most 2 bullet points, as tight and concise as possible while keeping the key achievement.",
  ats: "Produce 2-4 bullet points that front-load keywords and quantifiable metrics, optimized for ATS keyword scanning.",
};

/**
 * Turn a raw, unstructured description of a project/experience/volunteering entry
 * into concise, achievement-oriented resume bullet points. `mode` controls the
 * style: "polish" (default), "shorten", or "ats".
 */
export const refineResumeBullets = async ({
  title,
  role,
  description,
  mode = "polish",
}) => {
  const context = [role, title].filter(Boolean).join(" ");
  const modeRule = REFINE_MODE_RULES[mode] || REFINE_MODE_RULES.polish;
  const prompt = `You are an expert resume writer. Rewrite the following raw, informal description of ${
    context ? `"${context}"` : "a resume entry"
  } into resume bullet points.

RAW DESCRIPTION:
${description}

GOAL: ${modeRule}

RULES:
- Each bullet starts with a strong past-tense action verb (unless it's an ongoing role, then present tense).
- Quantify impact only where the raw text implies numbers, scale, or metrics; never invent numbers that aren't implied.
- Keep each bullet under 160 characters.
- No first-person pronouns, no markdown formatting, no trailing periods.
- Base the bullets only on what's in the raw description — do not invent tools, outcomes, or responsibilities.

Return ONLY valid JSON in this exact shape: {"bullets": ["...", "..."]}`;

  const result = await callAI(prompt);
  if (!Array.isArray(result.bullets) || result.bullets.length === 0) {
    throw new Error("Invalid refinement response");
  }
  return result.bullets;
};

/**
 * Group a messy, free-form list of skills into labeled categories for the
 * resume's "Technical Skills" section.
 */
export const categorizeResumeSkills = async (skillsText) => {
  const prompt = `You are organizing a resume's technical skills into categories for a "Technical Skills" section.

RAW SKILLS (comma or line separated, may be messy or unordered):
${skillsText}

Group these into sensible categories. Prefer these category names when they fit: "Languages", "Backend & Frameworks", "AI & Data", "Frontend", "Cloud & DevOps", "System Design (HLD)", "Core Concepts". If a skill doesn't fit any of those, create a short, appropriate category name, or use "Other". Do not drop any skill, and do not invent skills that were not listed. Preserve each skill's original wording/casing.

Return ONLY valid JSON in this exact shape: {"categories": [{"name": "Languages", "skills": ["Java", "Python"]}, ...]}, ordered with the most foundational categories first, and omit any category that would be empty.`;

  const result = await callAI(prompt);
  if (!Array.isArray(result.categories)) {
    throw new Error("Invalid categorization response");
  }
  return result.categories;
};

const PAGE_BUDGET_GUIDANCE = {
  1: "This must fit on a SINGLE page. Be aggressive: 1-2 bullets per project/experience, keep only the strongest 3-4 projects, keep the summary to one sentence or omit it, keep achievements to 2-3 lines total.",
  2: "This should fit on about two pages. Use 2-3 bullets per project/experience and keep descriptions tight.",
  3: "This can use up to three pages. Use 3-4 bullets per project/experience with full detail, but still avoid redundancy.",
};

const RESUME_JSON_CONTRACT = `The resume is a JSON object with this exact shape (keep the exact same keys):
{
  "name": string, "email": string, "phone": string, "location": string,
  "linkedin": string, "github": string, "leetcode": string, "codeforces": string, "codechef": string,
  "summary": string,
  "skills": string (comma-separated),
  "skillCategories": [{"name": string, "skills": [string]}] or null,
  "experience": [{"company": string, "role": string, "duration": string, "description": string, "bullets": [string]}],
  "projects": [{"name": string, "techStack": string, "github": string, "duration": string, "description": string, "bullets": [string]}],
  "education": [{"school": string, "degree": string, "branch": string, "cgpa": string, "location": string, "duration": string}],
  "achievements": [string],
  "volunteering": [{"role": string, "organization": string, "duration": string, "location": string, "description": string, "bullets": [string]}]
}`;

/**
 * Polish the ENTIRE resume in one pass: fix grammar/spelling everywhere, tighten
 * wording, and proactively size the content to the user's chosen page budget.
 * Returns the raw (unsanitized) model output — callers should run it through
 * sanitizeEnhancedResume before trusting it.
 */
export const enhanceResume = async (resumeData, targetPages = 1) => {
  const guidance = PAGE_BUDGET_GUIDANCE[targetPages] || PAGE_BUDGET_GUIDANCE[1];
  const prompt = `You are an expert resume editor. Improve the ENTIRE resume below: fix grammar and spelling everywhere, tighten wording, remove redundancy, and make it read professionally and consistently. For every experience/project/volunteering entry, produce a polished "bullets" array (use its existing "bullets" if present, otherwise its "description") — do not invent facts, tools, or outcomes that aren't implied by the existing content.

PAGE BUDGET: The user wants this resume to fit in about ${targetPages} page(s). ${guidance}
You may shorten sections, trim bullet counts, condense the summary, or drop the least important/least impactful entries entirely if that's what it takes to respect the page budget — prioritize the strongest, most quantified content.

${RESUME_JSON_CONTRACT}

CURRENT RESUME DATA:
${JSON.stringify(resumeData)}

Return ONLY the updated JSON object with the exact same shape as above — no markdown, no explanation, no extra keys.`;

  return callAI(prompt, { maxOutputTokens: 8192 });
};

/**
 * Used by the fit loop when a compiled resume is still longer than the user's
 * chosen page budget: cuts it down further. Same output contract as enhanceResume.
 */
export const compressResume = async (
  resumeData,
  currentPageCount,
  targetPages,
) => {
  const prompt = `You are an expert resume editor. This resume currently compiles to ${currentPageCount} page(s), but the user wants it to fit in ${targetPages} page(s). Cut it down further: reduce bullet counts per entry (prefer 1-2 over 3+), tighten wording, condense or remove the summary if needed, and drop the least important/least impactful projects, experience entries, or achievements entirely if necessary. Preserve the strongest, most quantified, most relevant content. Do not invent facts.

${RESUME_JSON_CONTRACT}

CURRENT RESUME DATA:
${JSON.stringify(resumeData)}

Return ONLY the updated JSON object with the exact same shape as above — no markdown, no explanation, no extra keys.`;

  return callAI(prompt, { maxOutputTokens: 8192 });
};

export const chatResumeData = async (resumeData, message) => {
  const prompt = `You are an expert resume assistant. The user wants to edit or improve their resume based on this message:

USER REQUEST:
${message}

Use the current resume JSON below. Apply the user's request to the resume content, updating or refining the resume data as needed. Do not invent facts or add information that isn't implied by the existing content. Keep the output in the exact same JSON shape.

${RESUME_JSON_CONTRACT}

CURRENT RESUME DATA:
${JSON.stringify(resumeData)}

Return ONLY the updated JSON object with the exact same shape as above. No markdown, no explanation, no extra keys.`;

  return callAI(prompt, { maxOutputTokens: 8192 });
};

const asString = (v, fallback = "") => (typeof v === "string" ? v : fallback);
const asStringArray = (v) =>
  Array.isArray(v) ? v.filter((s) => typeof s === "string") : [];

const sanitizeEntry = (entry, keys) => {
  const out = {};
  for (const key of keys) {
    out[key] =
      key === "bullets"
        ? asStringArray(entry?.bullets)
        : asString(entry?.[key]);
  }
  return out;
};

/**
 * Defensively merges Gemini's whole-resume output back onto the original data:
 * any field the model returned in an unexpected shape falls back to the
 * original value instead of corrupting the resume.
 */
export const sanitizeEnhancedResume = (enhanced, original) => {
  if (!enhanced || typeof enhanced !== "object") return original;

  const scalarFields = [
    "name",
    "email",
    "phone",
    "location",
    "linkedin",
    "github",
    "leetcode",
    "codeforces",
    "codechef",
    "summary",
    "skills",
  ];
  const sanitized = { ...original };

  for (const field of scalarFields) {
    if (typeof enhanced[field] === "string" && enhanced[field].trim()) {
      sanitized[field] = enhanced[field];
    }
  }

  if (Array.isArray(enhanced.skillCategories)) {
    sanitized.skillCategories = enhanced.skillCategories
      .filter((c) => c && typeof c.name === "string" && Array.isArray(c.skills))
      .map((c) => ({ name: c.name, skills: asStringArray(c.skills) }));
  }

  if (Array.isArray(enhanced.experience)) {
    sanitized.experience = enhanced.experience.map((e) =>
      sanitizeEntry(e, [
        "company",
        "role",
        "duration",
        "description",
        "bullets",
      ]),
    );
  }
  if (Array.isArray(enhanced.projects)) {
    sanitized.projects = enhanced.projects.map((p) =>
      sanitizeEntry(p, [
        "name",
        "techStack",
        "github",
        "duration",
        "description",
        "bullets",
      ]),
    );
  }
  if (Array.isArray(enhanced.education)) {
    sanitized.education = enhanced.education.map((e) =>
      sanitizeEntry(e, [
        "school",
        "degree",
        "branch",
        "cgpa",
        "location",
        "duration",
      ]),
    );
  }
  if (Array.isArray(enhanced.volunteering)) {
    sanitized.volunteering = enhanced.volunteering.map((v) =>
      sanitizeEntry(v, [
        "role",
        "organization",
        "duration",
        "location",
        "description",
        "bullets",
      ]),
    );
  }
  if (Array.isArray(enhanced.achievements)) {
    sanitized.achievements = asStringArray(enhanced.achievements);
  }

  return sanitized;
};

/**
 * Analyze a resume's raw extracted text for tech/software-engineering roles:
 * ATS score, strengths, weaknesses, missing skills, a suggested role, and
 * concrete recommendations.
 */
export const analyzeResumeForTech = async (resumeText) => {
  const prompt = `You are an expert ATS (Applicant Tracking System) resume analyzer specializing in software engineering and technology roles (backend, frontend, full-stack, data, DevOps, etc.).

Analyze the resume text below and extract/evaluate it. Judge it the way a tech recruiter and an ATS parser both would: depth and relevance of technical skills, quality and impact of projects (quantifiable results, real technologies, not just buzzwords), clarity of experience descriptions, presence of a GitHub/portfolio link, keyword coverage for the candidate's apparent target role, and overall ATS-parseability (standard section headers, no dense tables/graphics assumed, consistent formatting cues in the text).

RESUME TEXT:
${resumeText}

Return ONLY valid JSON in this exact shape:
{
  "name": string,
  "email": string,
  "phone": string,
  "summary": string (2-3 sentence professional summary of this candidate),
  "skills": [string],
  "projects": [string] (short one-line descriptions of notable projects found),
  "education": [string],
  "experience": [string] (short one-line descriptions of notable work experience found),
  "strengths": [string],
  "weaknesses": [string],
  "missingSkills": [string] (skills/technologies this candidate should learn or add, given their apparent target role),
  "suggestedRole": string (the specific tech role this resume best fits, e.g. "Backend Developer"),
  "recommendations": [string] (concrete, actionable improvements),
  "score": number (0-100 overall ATS/quality score)
}

RULES:
- Base everything only on what's actually in the resume text — do not invent employers, schools, or metrics that aren't present.
- If a field genuinely isn't present in the resume, use an empty string or empty array rather than guessing.
- Every field must exist. Return no markdown, no explanation, no extra keys.`;

  const result = await callAI(prompt, { maxOutputTokens: 4096 });

  return {
    name: asString(result.name),
    email: asString(result.email),
    phone: asString(result.phone),
    summary: asString(result.summary),
    skills: asStringArray(result.skills),
    projects: asStringArray(result.projects),
    education: asStringArray(result.education),
    experience: asStringArray(result.experience),
    strengths: asStringArray(result.strengths),
    weaknesses: asStringArray(result.weaknesses),
    missingSkills: asStringArray(result.missingSkills),
    suggestedRole: asString(result.suggestedRole),
    recommendations: asStringArray(result.recommendations),
    score:
      typeof result.score === "number"
        ? Math.max(0, Math.min(100, Math.round(result.score)))
        : 0,
  };
};
