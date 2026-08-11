import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router";
import { Play, Pause, ArrowLeft, Trophy, AlertTriangle, TrendingUp, FileText, CheckCircle, SparklesIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import { PageBackground } from "../components/layout/PageShell";
import { interviewApi } from "../api/interview";
import toast from "react-hot-toast";

function InterviewResultsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [interview, setInterview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    fetchInterview();
  }, [id]);

  useEffect(() => {
    // Poll for analysis if still analyzing
    if (interview?.status === "analyzing") {
      const interval = setInterval(() => {
        fetchInterview();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [interview?.status]);

  const fetchInterview = async () => {
    try {
      const response = await interviewApi.getInterviewById(id);
      if (response.success) {
        setInterview(response.interview);

        // Load recording if available
        if (response.interview.status === "completed" && !audioUrl) {
          loadRecording();
        }
      }
    } catch (error) {
      console.error("Error fetching interview:", error);
      toast.error("Failed to load interview results");
    } finally {
      setLoading(false);
    }
  };

  const loadRecording = async () => {
    try {
      const response = await interviewApi.getRecording(id);
      if (response.success && response.recording) {
        // Convert base64 to blob URL
        const binaryString = atob(response.recording);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        const blob = new Blob([bytes], { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
      }
    } catch (error) {
      console.error("Error loading recording:", error);
      // Recording might not be available, that's okay
    }
  };

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const getScoreColor = (score) => {
    if (score >= 80) return "text-success drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]";
    if (score >= 60) return "text-warning drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]";
    return "text-error drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]";
  };

  if (loading) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {PageBackground}
        <Navbar />
        <div className="container mx-auto px-4 py-12 flex items-center justify-center">
          <div className="loading loading-spinner loading-lg text-primary"></div>
        </div>
      </div>
    );
  }

  if (!interview) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {PageBackground}
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div className="glass-panel rounded-2xl p-8 text-center max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-white">Interview Not Found</h2>
            <button onClick={() => navigate("/dashboard")} className="btn btn-primary">
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  const analysis = interview.analysis || {};
  const score = analysis.score || 0;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {PageBackground}
      <Navbar />

      <div className="container mx-auto px-4 md:px-6 py-12 max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate(`/dashboard`)}
            className="btn btn-ghost gap-2 text-base-content/70 hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Back to Dashboard
          </button>

          <div className="flex items-center gap-3">
            <span className="text-sm text-base-content/60">Status:</span>
            <div className={`badge badge-lg border-0 font-bold ${interview.status === 'completed' ? 'bg-success/20 text-success' : 'bg-primary/20 text-primary'
              }`}>
              {interview.status.toUpperCase()}
            </div>
          </div>
        </div>

        {/* Score Card */}
        <div className="glass-panel rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden text-center border-primary/20">
          <div className="absolute inset-0 bg-primary/5 blur-3xl -z-10" />

          <h2 className="text-3xl font-black text-white mb-2">{interview.role}</h2>
          <p className="text-base-content/60 mb-8 max-w-xl mx-auto">
            <span className="capitalize">{interview.interviewType}</span> Interview • {interview.experience} years experience
          </p>

          {interview.status === "analyzing" ? (
            <div className="py-12">
              <div className="loading loading-spinner loading-lg text-primary mb-6"></div>
              <h3 className="text-xl font-bold text-white mb-2">Analyzing Performance</h3>
              <p className="text-base-content/60">Our AI is reviewing your answers. This may take a few moments...</p>
            </div>
          ) : (
            <div className="relative inline-block mb-8">
              {/* Circular Progress or Just Big Score */}
              <div className="relative z-10">
                <div className={`text-8xl font-black ${getScoreColor(score)} mb-2`}>{score}</div>
                <div className="text-sm font-bold uppercase tracking-widest text-base-content/50">Overall Score</div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full blur-2xl -z-10" />
            </div>
          )}

          {analysis.summary && (
            <div className="glass-card p-6 text-left max-w-3xl mx-auto border-white/5 bg-white/5">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <SparklesIcon className="size-5 text-yellow-400" />
                Executive Summary
              </h3>
              <p className="text-base-content/80 leading-relaxed text-lg">{analysis.summary}</p>
            </div>
          )}
        </div>

        {/* Recording Player */}
        {audioUrl && interview.status === "completed" && (
          <div className="glass-panel rounded-2xl p-6 mb-8 flex items-center gap-6">
            <button
              onClick={togglePlayback}
              className={`btn btn-circle btn-lg shadow-lg ${isPlaying ? "btn-error shadow-error/20" : "btn-primary shadow-primary/20"
                } transition-all hover:scale-105`}
            >
              {isPlaying ? (
                <Pause className="size-6 fill-current" />
              ) : (
                <Play className="size-6 fill-current ml-1" />
              )}
            </button>

            <div className="flex-1">
              <h3 className="font-bold text-white mb-1">Session Recording</h3>
              <p className="text-sm text-base-content/60">
                {isPlaying ? "Playing audio..." : "Listen to your interview session"}
              </p>
              {interview.duration > 0 && (
                <div className="mt-2 text-xs font-mono text-base-content/40 bg-black/20 px-2 py-1 rounded inline-block">
                  {Math.floor(interview.duration / 60)}:{(interview.duration % 60).toString().padStart(2, "0")}
                </div>
              )}
            </div>
            <audio
              ref={audioRef}
              src={audioUrl}
              onEnded={() => setIsPlaying(false)}
              className="hidden"
            />
          </div>
        )}

        {/* Analysis Details */}
        {interview.status === "completed" && analysis && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Strengths */}
            {analysis.strengths && analysis.strengths.length > 0 && (
              <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-success">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="size-5 text-success" />
                  Key Strengths
                </h3>
                <ul className="space-y-3">
                  {analysis.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-3 text-base-content/80">
                      <div className="mt-1.5 size-1.5 rounded-full bg-success flex-shrink-0" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Mistakes */}
            {analysis.mistakes && analysis.mistakes.length > 0 && (
              <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-error">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <AlertTriangle className="size-5 text-error" />
                  Areas for Improvement
                </h3>
                <ul className="space-y-3">
                  {analysis.mistakes.map((mistake, index) => (
                    <li key={index} className="flex items-start gap-3 text-base-content/80">
                      <div className="mt-1.5 size-1.5 rounded-full bg-error flex-shrink-0" />
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Improvements */}
            {analysis.improvements && analysis.improvements.length > 0 && (
              <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-warning md:col-span-2">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="size-5 text-warning" />
                  Actionable Recommendations
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {analysis.improvements.map((improvement, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 text-base-content/90">
                      <div className="mt-1 size-1.5 rounded-full bg-warning flex-shrink-0" />
                      <span>{improvement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Detailed Feedback */}
        {analysis.detailedFeedback && interview.status === "completed" && (
          <div className="glass-panel rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <FileText className="size-6 text-primary" />
              Detailed Feedback Analysis
            </h3>
            <div className="prose prose-invert max-w-none text-base-content/80">
              <p className="whitespace-pre-wrap leading-relaxed">
                {analysis.detailedFeedback}
              </p>
            </div>
          </div>
        )}

        {/* Transcript */}
        {interview.transcript && interview.status === "completed" && (
          <div className="glass-panel rounded-2xl p-6">
            <div className="collapse collapse-arrow bg-base-200/50 backdrop-blur-sm rounded-xl">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium text-white">
                View Full Transcript
              </div>
              <div className="collapse-content">
                <div className="p-4 bg-black/30 rounded-xl max-h-[400px] overflow-y-auto custom-scrollbar font-mono text-sm text-base-content/70 whitespace-pre-wrap leading-relaxed border border-white/5">
                  {interview.transcript}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/ai-interview")}
            className="btn btn-primary btn-lg rounded-full px-8 shadow-xl shadow-primary/20 hover:scale-105 transition-all"
          >
            Start New Interview
          </button>
        </div>

      </div>
    </div>
  );
}

export default InterviewResultsPage;

