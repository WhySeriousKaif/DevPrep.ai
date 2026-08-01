import { axiosInstance } from "../lib/axios";

export const userApi = {
  getMe: async () => {
    const response = await axiosInstance.get("/user/me");
    return response.data;
  },

  toggleSolved: async (problemId) => {
    const response = await axiosInstance.post("/user/toggle-solved", { problemId });
    return response.data;
  },

  toggleRevision: async (problemId) => {
    const response = await axiosInstance.post("/user/toggle-revision", { problemId });
    return response.data;
  },
};
