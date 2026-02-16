// Piston API is now restricted (white-list only).
// using Judge0 as a fallback for code execution.

const JUDGE0_API = "https://ce.judge0.com";

// Judge0 Language IDs
const LANGUAGE_MAPPING = {
  javascript: { id: 63, version: "Node.js 12.14.0" },
  python: { id: 71, version: "Python 3.8.1" },
  java: { id: 62, version: "Java (OpenJDK 13.0.1)" },
};

/**
 * @param {string} language - programming language
 * @param {string} code - source code to executed
 * @returns {Promise<{success:boolean, output?:string, error?: string}>}
 */
export async function executeCode(language, code) {
  try {
    const langConfig = LANGUAGE_MAPPING[language];

    if (!langConfig) {
      return {
        success: false,
        error: `Unsupported language: ${language}`,
      };
    }

    // Judge0 expects the entry class to be "Main" for Java if no filename is provided
    if (language === "java" && code.includes("class")) {
      // Replace "public class XYZ" or "class XYZ" with "public class Main"
      // This handles both "class Solution" and "public class Solution"
      code = code.replace(/(public\s+)?class\s+(\w+)/, "public class Main");
    }

    const response = await fetch(`${JUDGE0_API}/submissions?base64_encoded=false&wait=true`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source_code: code,
        language_id: langConfig.id,
      }),
    });

    if (!response.ok) {
      return {
        success: false,
        error: `HTTP error! status: ${response.status}`,
      };
    }

    const data = await response.json();

    // Map Judge0 response to match Piston's format expected by the UI
    // Judge0 keys: stdout, stderr, compile_output
    const output = data.stdout || "";
    const stderr = data.stderr || data.compile_output || "";

    if (stderr) {
      return {
        success: false, // UI might treat this as an error state
        output: output,
        error: stderr,
      };
    }

    return {
      success: true,
      output: output || "No output",
    };
  } catch (error) {
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
    };
  }
}

// Helper kept for compatibility if needed elsewhere
function getFileExtension(language) {
  const extensions = {
    javascript: "js",
    python: "py",
    java: "java",
  };

  return extensions[language] || "txt";
}
