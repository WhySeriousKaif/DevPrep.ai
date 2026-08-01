export const initialResumeData = {
  name: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  leetcode: "",
  codeforces: "",
  codechef: "",
  summary: "",
  skills: "",
  skillCategories: null, // [{ name: "Languages", skills: [...] }] once AI-categorized
  experience: [],
  projects: [],
  education: [],
  achievements: [],
  volunteering: [],
  targetPages: 1,
  template: "modern-professional",
};

export const RESUME_STEPS = [
  { id: 1, title: "Personal Info" },
  { id: 2, title: "Summary" },
  { id: 3, title: "Skills" },
  { id: 4, title: "Experience" },
  { id: 5, title: "Projects" },
  { id: 6, title: "Education" },
  { id: 7, title: "Achievements" },
  { id: 8, title: "Volunteering" },
];

export const emptyExperience = () => ({
  company: "",
  role: "",
  duration: "",
  description: "",
  bullets: [],
});

export const emptyProject = () => ({
  name: "",
  techStack: "",
  github: "",
  duration: "",
  description: "",
  bullets: [],
});

export const emptyEducation = () => ({
  school: "",
  degree: "",
  branch: "",
  cgpa: "",
  duration: "",
});

export const emptyVolunteering = () => ({
  role: "",
  organization: "",
  duration: "",
  location: "",
  description: "",
  bullets: [],
});
