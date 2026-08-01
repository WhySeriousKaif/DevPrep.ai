import { escapeLatex } from "../escapeLatex.js";

const PREAMBLE = String.raw`\documentclass[letterpaper,10.5pt]{article}

\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage[usenames,dvipsnames]{color}
\usepackage{amssymb}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}

\pagestyle{fancy}
\fancyhf{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

\addtolength{\oddsidemargin}{-0.6in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1.2in}
\addtolength{\topmargin}{-0.8in}
\addtolength{\textheight}{1.6in}

\urlstyle{same}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

\titleformat{\section}{\vspace{-4pt}\scshape\raggedright\large}{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]

\newcommand{\resumeItem}[1]{\item[\textbullet]\small{#1 \vspace{-2pt}}}

\newcommand{\resumeSubheading}[4]{
  \vspace{-2pt}\item
    \begin{tabular*}{0.98\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small#4} \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeProjectHeading}[2]{
    \item
    \begin{tabular*}{0.98\textwidth}{l@{\extracolsep{\fill}}r}
      \small#1 & #2 \\
    \end{tabular*}\vspace{-7pt}
}

% Project heading with an optional tech-stack line on the second row
% so the title and tech stack never overlap.
\newcommand{\resumeProjectHeadingTwo}[3]{
    \item
    \begin{tabular*}{0.98\textwidth}{l@{\extracolsep{\fill}}r}
      \small#1 & #2 \\
      \multicolumn{2}{l}{\small\textit{#3}} \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.15in, label={}]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
\newcommand{\resumeItemListStart}{\begin{itemize}[leftmargin=0.15in]}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}

\begin{document}
`;

const esc = escapeLatex;

// Mirrors ResumePreview.jsx's fallback: if AI-refined bullets aren't
// available yet, roughly split the raw description into bullet points.
const fallbackBullets = (text) => {
  if (!text) return [];
  return text
    .split(/\n+|(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
};

const href = (url, label) => {
  if (!url) return esc(label);
  const cleanUrl = /^https?:\/\//i.test(url) ? url : `https://${url}`;
  return `\\href{${esc(cleanUrl)}}{\\underline{${esc(label)}}}`;
};

const itemList = (bullets) => {
  if (!bullets?.length) return "";
  return [
    "\\resumeItemListStart",
    ...bullets.map((b) => `\\resumeItem{${esc(b)}}`),
    "\\resumeItemListEnd",
  ].join("\n");
};

const section = (title, body) => {
  if (!body || !body.trim()) return "";
  return `\\section{${esc(title)}}\n${body}\n`;
};

function buildHeader(data) {
  const name = esc(data.name || "Your Name");
  // Wrap phone in \mbox so a leading + is processed as plain text, not as
  // a math-mode operator. Use $|$ (not \|) as the separator — \| is
  // \Vert (math only) and causes "Missing $ inserted" in text mode.
  const contactParts = [
    data.phone && `\\mbox{${esc(data.phone)}}`,
    data.email && href(`mailto:${data.email}`, data.email),
    data.linkedin && href(data.linkedin, "LinkedIn"),
    data.github && href(data.github, "GitHub"),
    data.leetcode && href(data.leetcode, "LeetCode"),
    data.codeforces && href(data.codeforces, "Codeforces"),
    data.codechef && href(data.codechef, "CodeChef"),
  ].filter(Boolean);

  return `\\begin{center}
    \\textbf{\\Huge \\scshape ${name}} \\vspace{1pt}\\\\
    \\small ${contactParts.join(" $|$ ")}
  \\end{center}
`;
}


function buildEducation(education) {
  if (!education?.length) return "";
  const rows = education.map((edu) => {
    const subtitle = [edu.degree, edu.branch]
      .filter(Boolean)
      .join(edu.degree && edu.branch ? " in " : "");
    const bullets = edu.cgpa ? [`CGPA: ${edu.cgpa}`] : [];
    return [
      `\\resumeSubheading{${esc(edu.school || "School / University")}}{${esc(edu.duration)}}{${esc(subtitle)}}{${esc(edu.location)}}`,
      bullets.length ? itemList(bullets) : "",
    ]
      .filter(Boolean)
      .join("\n");
  });
  return `\\resumeSubHeadingListStart\n${rows.join("\n")}\n\\resumeSubHeadingListEnd`;
}

function buildProjects(projects) {
  if (!projects?.length) return "";
  const rows = projects.map((proj) => {
    const titleText = proj.github
      ? href(proj.github, proj.name || "Project")
      : esc(proj.name || "Project");
    const heading = `\\textbf{${titleText}}`;
    // Prepare bullets, ensuring any leading dash is replaced with a dot
    const rawBullets = proj.bullets?.length
      ? proj.bullets
      : fallbackBullets(proj.description);
    const bullets = rawBullets.map((b) => b.replace(/^\-\s*/, "• "));

    // Use \resumeProjectHeadingTwo (title + tech stack in one tabular) when
    // a tech stack is present — this avoids the overlap caused by the
    // \vspace{-7pt} at the end of \resumeProjectHeading pulling the external
    // tech-stack line up into the title row.
    const projectLine = proj.techStack
      ? `\\resumeProjectHeadingTwo{${heading}}{${esc(proj.duration)}}{Tech Stack: ${esc(proj.techStack)}}`
      : `\\resumeProjectHeading{${heading}}{${esc(proj.duration)}}`;

    return [
      projectLine,
      bullets.length
        ? `\\resumeItemListStart\n${bullets.map((b) => `\\resumeItem{${esc(b)}}`).join("\n")}\n\\resumeItemListEnd`
        : "",
    ]
      .filter(Boolean)
      .join("\n");
  });
  return `\\resumeSubHeadingListStart\n${rows.join("\n")}\n\\resumeSubHeadingListEnd`;
}

function buildExperience(experience) {
  if (!experience?.length) return "";
  const rows = experience.map((exp) => {
    const bullets = exp.bullets?.length
      ? exp.bullets
      : fallbackBullets(exp.description);
    return [
      `\\resumeSubheading{${esc(exp.role || "Role")}}{${esc(exp.duration)}}{${esc(exp.company)}}{}`,
      bullets.length
        ? `\\resumeItemListStart\n${bullets.map((b) => `\\resumeItem{${esc(b)}}`).join("\n")}\n\\resumeItemListEnd`
        : "",
    ]
      .filter(Boolean)
      .join("\n");
  });
  return `\\resumeSubHeadingListStart\n${rows.join("\n")}\n\\resumeSubHeadingListEnd`;
}

function buildVolunteering(volunteering) {
  if (!volunteering?.length) return "";
  const rows = volunteering.map((vol) => {
    const bullets = vol.bullets?.length
      ? vol.bullets
      : fallbackBullets(vol.description);
    return [
      `\\resumeSubheading{${esc(vol.role || "Role")}}{${esc(vol.duration)}}{${esc(vol.organization)}}{${esc(vol.location)}}`,
      bullets.length
        ? `\\resumeItemListStart\n${bullets.map((b) => `\\resumeItem{${esc(b)}}`).join("\n")}\n\\resumeItemListEnd`
        : "",
    ]
      .filter(Boolean)
      .join("\n");
  });
  return `\\resumeSubHeadingListStart\n${rows.join("\n")}\n\\resumeSubHeadingListEnd`;
}

function buildSkills(data) {
  const rawSkillsList = (data.skills || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (!data.skillCategories?.length && rawSkillsList.length === 0) return "";

  if (data.skillCategories?.length) {
    const lines = data.skillCategories.map(
      (cat) =>
        `     \\textbf{${esc(cat.name)}}{: ${esc(cat.skills.join(", "))}} \\\\`,
    );
    return `\\begin{itemize}[leftmargin=0.15in, label={}]\n    \\small{\\item{\n${lines.join("\n")}\n    }}\n\\end{itemize}`;
  }

  return `\\small{${esc(rawSkillsList.join(", "))}}`;
}

function buildAchievements(achievements) {
  const list = (achievements || []).filter(Boolean);
  if (!list.length) return "";
  return itemList(list);
}

export function renderModernProfessional(data) {
  const parts = [
    buildHeader(data),
    data.summary
      ? section("Professional Summary", `\\small{${esc(data.summary)}}`)
      : "",
    section("Education", buildEducation(data.education)),
    section("Projects", buildProjects(data.projects)),
    section("Work Experience", buildExperience(data.experience)),
    section("Technical Skills", buildSkills(data)),
    section("Achievements", buildAchievements(data.achievements)),
    section("Volunteering", buildVolunteering(data.volunteering)),
  ].filter(Boolean);

  return `${PREAMBLE}\n${parts.join("\n")}\n\\end{document}\n`;
}
