import { axiosInstance } from "../lib/axios";

export const resumeBuilderApi = {
  refineDescription: async ({ title, role, description, mode }) => {
    const response = await axiosInstance.post(
      "/resume-builder/refine-description",
      {
        title,
        role,
        description,
        mode,
      },
    );
    return response.data;
  },

  categorizeSkills: async (skills) => {
    const response = await axiosInstance.post(
      "/resume-builder/categorize-skills",
      { skills },
    );
    return response.data;
  },

  generate: async (resumeData, targetPages) => {
    const response = await axiosInstance.post("/resume-builder/generate", {
      resumeData,
      targetPages,
    });
    return response.data;
  },

  compile: async (resumeData) => {
    const response = await axiosInstance.post("/resume-builder/compile", {
      resumeData,
    });
    return response.data;
  },

  chat: async (resumeData, message) => {
    const response = await axiosInstance.post("/resume-builder/chat", {
      resumeData,
      message,
    });
    return response.data;
  },
};
