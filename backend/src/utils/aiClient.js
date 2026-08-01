/**
 * aiClient.js
 *
 * Single entry-point for all AI text-generation calls in the backend.
 *
 * Strategy:
 *   1. Try Gemini (free, default).
 *   2. On any recoverable error (429, 5xx, timeout, quota, …) fall back to OpenAI.
 *   3. If both fail, throw so the caller can surface an error to the frontend.
 *
 * Callers always receive a parsed JSON object — the same shape they would have
 * gotten from the previous direct `callGemini` helper.
 */

import { ENV } from "../libs/env.js";

// ─── Constants ───────────────────────────────────────────────────────────────

const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

const OPENAI_MODEL = "gpt-4o-mini"; // cheap + capable — ideal fallback
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

// HTTP status codes that warrant a fallback rather than an immediate hard-fail
const FALLBACK_STATUS_CODES = new Set([429, 500, 502, 503, 504]);

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Strip optional markdown fences from a model response. */
function stripMarkdown(text) {
  let t = text.trim();
  if (t.includes("```json")) {
    t = t.split("```json")[1].split("```")[0].trim();
  } else if (t.includes("```")) {
    t = t.split("```")[1].split("```")[0].trim();
  }
  return t;
}

/** Parse JSON from a model response string, throwing a readable error on failure. */
function parseJSON(text, modelName) {
  try {
    return JSON.parse(stripMarkdown(text));
  } catch {
    throw new Error(`${modelName} returned malformed JSON — please try again`);
  }
}

// ─── Gemini call ─────────────────────────────────────────────────────────────

async function callGemini(prompt, { maxOutputTokens = 2048, temperature = 0.4 } = {}) {
  const apiKey = ENV.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is not configured");

  const url = `${GEMINI_API_URL}?key=${apiKey}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature,
        topK: 40,
        topP: 0.95,
        maxOutputTokens,
        // Disable hidden thinking tokens so structured-JSON output isn't starved.
        thinkingConfig: { thinkingBudget: 0 },
      },
    }),
    signal: AbortSignal.timeout(60_000), // 60-second hard timeout
  });

  if (!response.ok) {
    const body = await response.text();
    const err = new Error(`Gemini API error: ${response.status} - ${body}`);
    err.status = response.status;
    throw err;
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    const finishReason = data?.candidates?.[0]?.finishReason;
    const err = new Error(
      finishReason === "MAX_TOKENS"
        ? "Gemini response was cut off (ran out of tokens) — try a shorter description"
        : "Invalid response from Gemini API",
    );
    err.status = 500;
    throw err;
  }

  return parseJSON(text, "Gemini");
}

// ─── OpenAI call ─────────────────────────────────────────────────────────────

async function callOpenAI(prompt, { maxOutputTokens = 2048, temperature = 0.4 } = {}) {
  const apiKey = ENV.OPENAI_API_KEY;
  if (!apiKey) throw new Error("OPENAI_API_KEY is not configured — cannot fall back to OpenAI");

  const response = await fetch(OPENAI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature,
      max_tokens: maxOutputTokens,
      response_format: { type: "json_object" }, // enforce JSON output
    }),
    signal: AbortSignal.timeout(60_000),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`OpenAI API error: ${response.status} - ${body}`);
  }

  const data = await response.json();
  const text = data?.choices?.[0]?.message?.content;
  if (!text) throw new Error("Invalid response from OpenAI API");

  return parseJSON(text, "OpenAI");
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * callAI(prompt, options)
 *
 * Tries Gemini first; falls back to OpenAI on recoverable errors.
 * Always resolves to a parsed JSON object.
 *
 * @param {string} prompt
 * @param {{ maxOutputTokens?: number, temperature?: number }} options
 * @returns {Promise<object>}
 */
export async function callAI(prompt, options = {}) {
  // ── 1. Try Gemini ──────────────────────────────────────────────────────────
  try {
    const result = await callGemini(prompt, options);
    console.log("[AI] ✅ Gemini responded successfully");
    return result;
  } catch (geminiError) {
    const status = geminiError.status;
    const isRecoverable =
      FALLBACK_STATUS_CODES.has(status) ||
      geminiError.name === "TimeoutError" ||
      /quota|rate.?limit|unavailable|overloaded/i.test(geminiError.message);

    if (!isRecoverable) {
      // Hard failures (e.g. malformed JSON, missing API key) — don't waste
      // an OpenAI call, just surface the error immediately.
      console.error("[AI] ❌ Gemini hard failure — not falling back:", geminiError.message);
      throw geminiError;
    }

    console.warn(
      `[AI] ⚠️  Gemini failed (${geminiError.message}) — falling back to OpenAI`,
    );
  }

  // ── 2. Fall back to OpenAI ─────────────────────────────────────────────────
  try {
    const result = await callOpenAI(prompt, options);
    console.log("[AI] ✅ OpenAI fallback responded successfully");
    return result;
  } catch (openAIError) {
    console.error("[AI] ❌ OpenAI fallback also failed:", openAIError.message);
    throw new Error(
      "Both Gemini and OpenAI are currently unavailable. Please try again in a moment.",
    );
  }
}
