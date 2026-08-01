import { ENV } from "../libs/env.js";
import { LANGUAGE_JUDGE0_MAP } from "../data/codingProblems.js";

const JUDGE0_BASE_URL = ENV.JUDGE0_BASE_URL || "https://ce.judge0.com";
const JUDGE0_API_KEY = ENV.JUDGE0_API_KEY || "";

const judge0Headers = () => {
  const headers = { "Content-Type": "application/json" };
  // Only relevant if a paid/authenticated Judge0 instance (e.g. RapidAPI) is
  // configured later — the public ce.judge0.com instance needs no key.
  if (JUDGE0_API_KEY) headers["X-RapidAPI-Key"] = JUDGE0_API_KEY;
  return headers;
};

/**
 * Runs a candidate's whole-program submission once via Judge0, then compares
 * its stdout line-by-line against the problem's expected output lines — each
 * line is one test case's verdict, not just one aggregate pass/fail.
 */
export async function executeAgainstTestCases({ language, code, expectedLines }) {
  const langConfig = LANGUAGE_JUDGE0_MAP[language];
  if (!langConfig) {
    throw new Error(`Unsupported language: ${language}`);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  let response;
  try {
    response = await fetch(`${JUDGE0_BASE_URL}/submissions?base64_encoded=false&wait=true`, {
      method: "POST",
      headers: judge0Headers(),
      body: JSON.stringify({ source_code: code, language_id: langConfig.id }),
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Judge0 error: ${response.status} - ${text}`);
  }

  const data = await response.json();
  const stdout = data.stdout || "";
  const stderr = data.stderr || data.compile_output || "";

  if (stderr) {
    return {
      success: false,
      error: stderr,
      output: stdout,
      results: expectedLines.map((expected, index) => ({ index, expected, actual: null, passed: false })),
      testsPassed: 0,
      testsTotal: expectedLines.length,
    };
  }

  const actualLines = stdout
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const results = expectedLines.map((expected, index) => {
    const actual = actualLines[index] ?? "";
    return { index, expected, actual, passed: actual === expected };
  });

  return {
    success: true,
    error: null,
    output: stdout,
    results,
    testsPassed: results.filter((r) => r.passed).length,
    testsTotal: expectedLines.length,
  };
}
