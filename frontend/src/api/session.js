import { axiosInstance } from "../lib/axios";

export const sessionApi = {
  createSession: async (data) => {
    const response = await axiosInstance.post("/session", data);
    return response.data;
  },

  getActiveSessions: async () => {
    const response = await axiosInstance.get("/session/active-sessions");
    return response.data;
  },
  getMyRecentSessions: async () => {
    const response = await axiosInstance.get("/session/my-recent-sessions");
    return response.data;
  },

  getSessionById: async (id) => {
    const response = await axiosInstance.get(`/session/${id}`);
    return response.data;
  },

  joinSession: async (id) => {
    const response = await axiosInstance.post(`/session/${id}/join`);
    return response.data;
  },
  startSession: async (id) => {
    const response = await axiosInstance.post(`/session/${id}/start`);
    return response.data;
  },
  endSession: async (id) => {
    const response = await axiosInstance.post(`/session/${id}/end`);
    return response.data;
  },
  getStreamToken: async () => {
    const response = await axiosInstance.get(`/chat/token`);
    return response.data;
  },
};