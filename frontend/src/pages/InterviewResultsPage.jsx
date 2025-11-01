import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router";
import { Play, Pause, ArrowLeft, Trophy, AlertTriangle, TrendingUp, FileText } from "lucide-react";
import Navbar from "../components/Navbar";
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
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-warning";
    return "text-error";
  };

  const getScoreBadgeColor = (score) => {
    if (score >= 80) return "badge-success";
    if (score >= 60) return "badge-warning";
    return "badge-error";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200">
        <Navbar />
        <div className="container mx-auto px-4 py-12 flex items-center justify-center">
          <div className="loading loading-spinner loading-lg text-primary"></div>
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
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-6xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => navigate(`/interview/${id}`)}
            className="btn btn-ghost gap-2"
          >
            <ArrowLeft className="size-4" />
            Back to Interview
          </button>
          <div className="badge badge-primary badge-lg">{interview.status}</div>
        </div>

        {/* Score Card */}
        <div className="bg-base-100 rounded-2xl shadow-xl p-8 border border-primary/20 mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Trophy className={`size-16 ${getScoreColor(score)}`} />
            </div>
            <h2 className="text-3xl font-bold mb-2">{interview.role}</h2>
            <p className="text-base-content/70 mb-6">
              {interview.interviewType} Interview • {interview.experience} years experience
            </p>
            
            {interview.status === "analyzing" ? (
              <div className="py-8">
                <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
                <p className="text-lg">AI is analyzing your interview...</p>
                <p className="text-sm text-base-content/70 mt-2">This may take a few moments</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className={`stat bg-base-200 rounded-xl p-6 ${getScoreBadgeColor(score)}`}>
                    <div className="stat-title">Overall Score</div>
                    <div className={`stat-value text-6xl ${getScoreColor(score)}`}>{score}</div>
                    <div className="stat-desc">out of 100</div>
                  </div>
                </div>

                {analysis.summary && (
                  <div className="bg-base-200 rounded-xl p-6 text-left">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <FileText className="size-5" />
                      Summary
                    </h3>
                    <p className="text-base-content/80">{analysis.summary}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Recording Player */}
        {audioUrl && interview.status === "completed" && (
          <div className="bg-base-100 rounded-2xl shadow-xl p-6 border border-primary/20 mb-6">
            <h3 className="text-lg font-semibold mb-4">Interview Recording</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlayback}
                className={`btn btn-circle btn-lg ${
                  isPlaying ? "btn-error" : "btn-primary"
                }`}
              >
                {isPlaying ? (
                  <Pause className="size-6" />
                ) : (
                  <Play className="size-6" />
                )}
              </button>
              <div className="flex-1">
                <p className="text-sm text-base-content/70">
                  {isPlaying ? "Playing..." : "Click to replay your interview"}
                </p>
                {interview.duration > 0 && (
                  <p className="text-xs text-base-content/60 mt-1">
                    Duration: {Math.floor(interview.duration / 60)}:
                    {(interview.duration % 60).toString().padStart(2, "0")}
                  </p>
                )}
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Strengths */}
            {analysis.strengths && analysis.strengths.length > 0 && (
              <div className="bg-base-100 rounded-2xl shadow-xl p-6 border border-success/20">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Trophy className="size-5 text-success" />
                  Strengths
                </h3>
                <ul className="space-y-2">
                  {analysis.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span className="text-base-content/80">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Mistakes */}
            {analysis.mistakes && analysis.mistakes.length > 0 && (
              <div className="bg-base-100 rounded-2xl shadow-xl p-6 border border-error/20">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="size-5 text-error" />
                  Areas to Improve
                </h3>
                <ul className="space-y-2">
                  {analysis.mistakes.map((mistake, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-error mt-1">!</span>
                      <span className="text-base-content/80">{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Improvements */}
            {analysis.improvements && analysis.improvements.length > 0 && (
              <div className="bg-base-100 rounded-2xl shadow-xl p-6 border border-warning/20 md:col-span-2">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="size-5 text-warning" />
                  Recommendations for Improvement
                </h3>
                <ul className="space-y-2">
                  {analysis.improvements.map((improvement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-warning mt-1">→</span>
                      <span className="text-base-content/80">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Detailed Feedback */}
        {analysis.detailedFeedback && interview.status === "completed" && (
          <div className="bg-base-100 rounded-2xl shadow-xl p-6 border border-primary/20 mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FileText className="size-5" />
              Detailed Feedback
            </h3>
            <div className="prose prose-sm max-w-none">
              <p className="text-base-content/80 whitespace-pre-wrap">
                {analysis.detailedFeedback}
              </p>
            </div>
          </div>
        )}

        {/* Transcript */}
        {interview.transcript && interview.status === "completed" && (
          <div className="bg-base-100 rounded-2xl shadow-xl p-6 border border-primary/20">
            <h3 className="text-lg font-semibold mb-4">Full Transcript</h3>
            <div className="bg-base-200 rounded-xl p-4 max-h-[400px] overflow-y-auto">
              <p className="text-sm text-base-content/80 whitespace-pre-wrap">
                {interview.transcript}
              </p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => navigate("/ai-interview")}
            className="btn btn-primary"
          >
            Start New Interview
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="btn btn-ghost"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default InterviewResultsPage;

