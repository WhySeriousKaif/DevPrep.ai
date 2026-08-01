import { axiosInstance } from "../lib/axios";

export const resumeAnalyzerApi = {
  upload: async (file) => {
    const formData = new FormData();
    formData.append("resume", file);
    const response = await axiosInstance.post("/resume-analyzer/upload", formData);
    return response.data;
  },

  getMyAnalysis: async () => {
    const response = await axiosInstance.get("/resume-analyzer/me");
    return response.data;
  },
};
