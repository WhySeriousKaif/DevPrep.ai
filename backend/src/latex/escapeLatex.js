const LATEX_ESCAPES = {
  "\\": "\\textbackslash{}",
  "{": "\\{",
  "}": "\\}",
  $: "\\$",
  "&": "\\&",
  "#": "\\#",
  "%": "\\%",
  _: "\\_",
  "~": "\\textasciitilde{}",
  "^": "\\textasciicircum{}",
};

// Escapes LaTeX special characters in user-supplied text. Every field that
// ends up in the compiled document must go through this first.
export const escapeLatex = (input) => {
  if (input === null || input === undefined) return "";
  return String(input).replace(/[\\{}$&#%_~^]/g, (ch) => LATEX_ESCAPES[ch]);
};
