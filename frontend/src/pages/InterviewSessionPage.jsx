import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router";
import { PhoneOffIcon, PhoneIcon, LoaderIcon, Play, Pause } from "lucide-react";
import Navbar from "../components/Navbar";
import VapiInterviewRecorder from "../components/VapiInterviewRecorder";
import { interviewApi } from "../api/interview";
import toast from "react-hot-toast";

function InterviewSessionPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [interview, setInterview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isStarting, setIsStarting] = useState(false);

  useEffect(() => {
    fetchInterview();
  }, [id]);

  const fetchInterview = useCallback(async () => {
    try {
      const response = await interviewApi.getInterviewById(id);
      if (response.success) {
        setInterview(response.interview);
      }
    } catch (error) {
      // console.error("Error fetching interview:", error);
      toast.error("Failed to load interview");
    } finally {
      setLoading(false);
    }
  }, [id]);

  const handleStartInterview = async () => {
    setIsStarting(true);
    try {
      const response = await interviewApi.startInterview(id);
      if (response.success) {
        setInterview(response.interview);
        toast.success("Interview started!");
      }
    } catch (error) {
      // console.error("Error starting interview:", error);
      toast.error("Failed to start interview");
    } finally {
      setIsStarting(false);
    }
  };

  const handleComplete = async (data) => {
    try {
      const response = await interviewApi.submitInterview(id, data);
      if (response.success) {
        // Navigate to results page
        navigate(`/interview/${id}/results`);
      }
      return response;
    } catch (error) {
      // console.error("Error submitting interview:", error);
      toast.error("Failed to submit interview");
      throw error;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200">
        <Navbar />
        <div className="container mx-auto px-4 py-12 flex items-center justify-center">
          <LoaderIcon className="size-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (!interview) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200">
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div className="bg-base-100 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Interview Not Found</h2>
            <button
              onClick={() => navigate("/dashboard")}
              className="btn btn-primary"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
        {/* Interview Info */}
        <div className="bg-base-100 rounded-2xl shadow-xl p-6 md:p-8 border border-primary/20 mb-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
                {interview.role}
              </h2>
              <p className="text-base-content/70">
                {interview.interviewType} Interview • {interview.experience} years experience
              </p>
            </div>
            <div className="badge badge-primary badge-lg">
              {interview.status}
            </div>
          </div>

          {interview.topicsToFocus && interview.topicsToFocus.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-2">Topics:</h3>
              <div className="flex flex-wrap gap-2">
                {interview.topicsToFocus.map((topic, index) => (
                  <span
                    key={index}
                    className="badge badge-outline badge-primary"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          {interview.description && (
            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-2">Description:</h3>
              <p className="text-base-content/70">{interview.description}</p>
            </div>
          )}
        </div>

        {/* Interview Interface */}
        <div className="bg-base-100 rounded-2xl shadow-xl p-8 border border-primary/20">
          {interview.status === "pending" && (
            <div className="text-center py-12">
              <div className="size-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <PhoneIcon className="size-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Ready to Start</h3>
              <p className="text-base-content/70 mb-6">
                When you click start, recording will begin automatically. 
                {interview.vapiCallId ? " The AI interviewer will connect via VAPI." : " Make sure your microphone is ready."}
              </p>
              <button
                onClick={handleStartInterview}
                disabled={isStarting}
                className="btn btn-primary btn-lg gap-2"
              >
                {isStarting ? (
                  <>
                    <LoaderIcon className="size-5 animate-spin" />
                    Starting...
                  </>
                ) : (
                  <>
                    <Play className="size-5" />
                    Start Interview
                  </>
                )}
              </button>
            </div>
          )}

          {interview.status === "in-progress" && (
            <div>
              <VapiInterviewRecorder 
                interview={interview} 
                interviewId={id}
                onComplete={handleComplete} 
              />
              <div className="mt-4 p-4 bg-info/10 border border-info/20 rounded-xl">
                <p className="text-sm text-info">
                  <strong>Note:</strong> Recording started automatically. Speak clearly into your microphone. 
                  The AI interviewer will ask questions through VAPI.
                </p>
              </div>
            </div>
          )}

          {(interview.status === "completed" || interview.status === "analyzing") && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-2">
                {interview.status === "analyzing" ? "Analyzing Interview..." : "Interview Completed"}
              </h3>
              <p className="text-base-content/70 mb-6">
                {interview.status === "analyzing"
                  ? "Your interview is being analyzed by AI. This may take a few moments."
                  : "Your interview has been completed. View your results and feedback."}
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => navigate(`/interview/${id}/results`)}
                  className="btn btn-primary btn-lg"
                >
                  {interview.status === "analyzing" ? "View Results (Analyzing...)" : "View Results"}
                </button>
                {interview.status === "analyzing" && (
                  <div className="loading loading-spinner loading-md text-primary"></div>
                )}
              </div>
            </div>
          )}

          {interview.status === "cancelled" && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-2">Interview Cancelled</h3>
              <p className="text-base-content/70 mb-6">
                This interview session has been cancelled.
              </p>
              <button
                onClick={() => navigate("/ai-interview")}
                className="btn btn-primary btn-lg"
              >
                Start New Interview
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InterviewSessionPage;
