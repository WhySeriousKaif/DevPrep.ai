import { axiosInstance } from "../lib/axios";

export const interviewApi = {
  createInterview: async (data) => {
    const response = await axiosInstance.post("/interview/create", data);
    return response.data;
  },

  getMyInterviews: async () => {
    const response = await axiosInstance.get("/interview/my-interviews");
    return response.data;
  },

  getInterviewById: async (id) => {
    const response = await axiosInstance.get(`/interview/${id}`);
    return response.data;
  },

  getCallStatus: async (id) => {
    const response = await axiosInstance.get(`/interview/${id}/call-status`);
    return response.data;
  },

  updateInterview: async (id, data) => {
    const response = await axiosInstance.patch(`/interview/${id}`, data);
    return response.data;
  },

  endInterview: async (id) => {
    const response = await axiosInstance.post(`/interview/${id}/end`);
    return response.data;
  },

  startInterview: async (id) => {
    const response = await axiosInstance.post(`/interview/${id}/start`);
    return response.data;
  },

  submitInterview: async (id, data) => {
    const response = await axiosInstance.post(`/interview/${id}/submit`, data);
    return response.data;
  },

  getRecording: async (id) => {
    const response = await axiosInstance.get(`/interview/${id}/recording`);
    return response.data;
  },

  getVapiConnection: async (id) => {
    const response = await axiosInstance.get(`/interview/${id}/vapi-connection`);
    return response.data;
  },
};
