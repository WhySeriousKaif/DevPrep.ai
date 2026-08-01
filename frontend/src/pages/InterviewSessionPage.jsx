import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router";
import { PhoneOffIcon, PhoneIcon, LoaderIcon, Play, Pause, SparklesIcon } from "lucide-react";
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
        // No toast here — VapiInterviewRecorder mounts next and shows its own,
        // more specific feedback once it actually attempts the Vapi connection.
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
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-12 flex items-center justify-center">
          <LoaderIcon className="size-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (!interview) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div className="glass-panel rounded-2xl p-8 text-center max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-white">Interview Not Found</h2>
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
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 md:px-6 py-12 max-w-5xl">
        {/* Interview Info */}
        <div className="glass-panel rounded-3xl p-8 mb-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <SparklesIcon className="size-48 text-primary" />
          </div>

          <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-3">
                <div className="size-1.5 rounded-full bg-primary animate-pulse" />
                AI Interview Session
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">
                {interview.role}
              </h2>
              <p className="text-base-content/60 text-lg">
                <span className="capitalize">{interview.interviewType}</span> Interview • {interview.experience} years experience
              </p>
            </div>
            <div className={`badge badge-lg py-4 px-6 text-sm font-bold border-0 ${interview.status === 'completed' ? 'bg-success/20 text-success' :
                interview.status === 'in-progress' ? 'bg-primary/20 text-primary animate-pulse' :
                  'bg-white/10 text-white'
              }`}>
              {interview.status.toUpperCase()}
            </div>
          </div>

          {(interview.topicsToFocus?.length > 0 || interview.description) && (
            <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-white/5 relative z-10">
              {interview.topicsToFocus?.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-3">Focus Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {interview.topicsToFocus.map((topic, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-base-content/80 hover:bg-white/10 transition-colors"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {interview.description && (
                <div>
                  <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-3">Context</h3>
                  <p className="text-base-content/70 leading-relaxed text-sm">{interview.description}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Interview Interface */}
        <div className="glass-panel rounded-3xl p-1 border border-white/10 bg-black/20 backdrop-blur-xl min-h-[500px] flex flex-col relative">

          {interview.status === "pending" && (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 md:p-12">
              <div className="relative mb-8 group">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="size-32 bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center relative z-10 border border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <PhoneIcon className="size-12 text-primary group-hover:text-white transition-colors" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-3">Ready to Start?</h3>
              <p className="text-base-content/60 max-w-md mx-auto mb-10 text-lg">
                Click start to begin the conversation. The AI interviewer is ready to evaluate your skills.
              </p>

              <button
                onClick={handleStartInterview}
                disabled={isStarting}
                className="group relative px-8 py-4 bg-primary text-white font-bold text-lg rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:hover:scale-100"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />
                <div className="relative flex items-center gap-3">
                  {isStarting ? (
                    <>
                      <LoaderIcon className="size-5 animate-spin" />
                      <span>Connecting VAPI...</span>
                    </>
                  ) : (
                    <>
                      <Play className="size-5 fill-current" />
                      <span>Start Interview Session</span>
                    </>
                  )}
                </div>
              </button>
            </div>
          )}

          {interview.status === "in-progress" && (
            <div className="flex-1 flex flex-col">
              <VapiInterviewRecorder
                interview={interview}
                interviewId={id}
                onComplete={handleComplete}
              />
            </div>
          )}

          {(interview.status === "completed" || interview.status === "analyzing") && (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 md:p-12">
              <div className="mb-6">
                <div className="size-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SparklesIcon className="size-10 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {interview.status === "analyzing" ? "Analyzing Performance..." : "Interview Completed"}
                </h3>
                <p className="text-base-content/60 max-w-md mx-auto">
                  {interview.status === "analyzing"
                    ? "Our AI is currently reviewing your answers to provide detailed feedback. This usually takes less than a minute."
                    : "Great job! Your interview results and detailed feedback are ready."}
                </p>
              </div>

              <button
                onClick={() => navigate(`/interview/${id}/results`)}
                className="btn btn-primary btn-lg rounded-xl gap-3 shadow-lg shadow-primary/20"
              >
                {interview.status === "analyzing" ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    View Results (Processing)
                  </>
                ) : (
                  <>
                    <span>View Detailed Report</span>
                    <SparklesIcon className="size-5" />
                  </>
                )}
              </button>
            </div>
          )}

          {interview.status === "cancelled" && (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <div className="size-20 bg-base-200 rounded-full flex items-center justify-center mb-6">
                <PhoneOffIcon className="size-8 text-base-content/40" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Interview Cancelled</h3>
              <p className="text-base-content/60 mb-8 max-w-md mx-auto">
                This interview session has been cancelled. You can start a new session anytime.
              </p>
              <button
                onClick={() => navigate("/ai-interview")}
                className="btn btn-outline border-white/10 text-white hover:bg-white/5 hover:border-white/20"
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
