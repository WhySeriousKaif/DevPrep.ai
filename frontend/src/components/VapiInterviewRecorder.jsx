import React, { useState, useRef, useEffect } from "react";
import { PhoneOffIcon, Square, LoaderIcon } from "lucide-react";
import toast from "react-hot-toast";
import { interviewApi } from "../api/interview";
import { connectToVapiCall } from "../lib/vapi";

// VAPI WebRTC integration for browser
function VapiInterviewRecorder({ interview, interviewId, onComplete }) {
  const [isConnected, setIsConnected] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [recordingTime, setRecordingTime] = useState(0);
  
  const vapiConnectionRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioContextRef = useRef(null);
  const combinedStreamRef = useRef(null);
  const vapiAudioRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);
  
  // Speech Recognition for user's side
  const recognitionRef = useRef(null);
  const userTranscriptRef = useRef("");
  const vapiTranscriptRef = useRef("");

  useEffect(() => {
    // Initialize Speech Recognition
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onresult = (event) => {
        let finalTranscript = "";
        let interimTranscript = "";
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + " ";
          } else {
            interimTranscript += transcript;
          }
        }
        
        if (finalTranscript) {
          userTranscriptRef.current += finalTranscript;
        }
        
        // Update transcript with both final and interim
        const combined = (vapiTranscriptRef.current + " " + userTranscriptRef.current + interimTranscript).trim();
        setTranscript(combined);
      };

      recognitionRef.current.onerror = (event) => {
        // console.error("Speech recognition error:", event.error);
        if (event.error === "not-allowed") {
          toast.error("Microphone permission denied. Please allow microphone access.");
        } else if (event.error === "no-speech") {
          // This is normal, just means no speech detected yet
          // console.log("No speech detected yet");
        }
      };

      recognitionRef.current.onend = () => {
        // Auto-restart if still recording
        if (isRecording && recognitionRef.current) {
          try {
            recognitionRef.current.start();
          } catch (e) {
            // Already started or error
            // console.log("Recognition restart:", e);
          }
        }
      };
    } else {
      // console.warn("Speech Recognition API not available in this browser");
      toast("Live transcript may not work. Please use Chrome/Edge for best experience.", { icon: "⚠️" });
    }

    return () => {
      if (recognitionRef.current && isRecording) {
        recognitionRef.current.stop();
      }
    };
  }, [isRecording]);

  // Poll for VAPI transcript updates from backend (webhook)
  useEffect(() => {
    if (isConnected && interviewId) {
      const fetchTranscript = async () => {
        try {
          const response = await interviewApi.getInterviewById(interviewId);
          if (response.success && response.interview.transcript) {
            // Update VAPI transcript
            vapiTranscriptRef.current = response.interview.transcript || "";
            
            // Combine transcripts
            const combined = (vapiTranscriptRef.current + " " + userTranscriptRef.current).trim();
            setTranscript(combined);
          }
        } catch (error) {
          // console.error("Error fetching transcript:", error);
        }
      };

      const interval = setInterval(fetchTranscript, 2000); // Poll every 2 seconds
      return () => clearInterval(interval);
    }
  }, [isConnected, interviewId]);

  const startInterview = async () => {
    try {
      // console.log("[VapiInterviewRecorder] Starting interview:", interviewId);
      // console.log("[VapiInterviewRecorder] Current interview:", interview);
      
      // Start the interview session
      let response;
      try {
        response = await interviewApi.startInterview(interviewId);
        // console.log("[VapiInterviewRecorder] Start interview response:", response);
      } catch (apiError) {
        // console.error("[VapiInterviewRecorder] API call error:", apiError);
        // console.error("[VapiInterviewRecorder] Error response data:", apiError.response?.data);
        throw apiError; // Re-throw to be caught by outer catch
      }
      
      if (!response.success) {
        const errorMsg = response.message || response.error || "Failed to start interview";
        // console.error("[VapiInterviewRecorder] Start failed:", errorMsg, response);
        throw new Error(errorMsg);
      }

      // Get assistantId from backend or environment (simplified like DentWise)
      let assistantId = null;
      
      // First try environment variable (fastest, like DentWise)
      assistantId = import.meta.env.VITE_VAPI_ASSISTANT_ID || null;
      if (assistantId) {
        // console.log("[VapiInterviewRecorder] ✅ Using assistantId from environment:", assistantId);
      } else {
        // Fallback to backend if env var not set
        try {
          // console.log("[VapiInterviewRecorder] Fetching VAPI assistant ID from backend");
          const vapiResponse = await interviewApi.getVapiConnection(interviewId);
          if (vapiResponse.success && vapiResponse.assistantId) {
            assistantId = vapiResponse.assistantId;
            // console.log("[VapiInterviewRecorder] ✅ Got assistantId from backend:", assistantId);
          } else {
            // console.warn("[VapiInterviewRecorder] No assistantId in backend response");
          }
        } catch (error) {
          // console.warn("[VapiInterviewRecorder] Failed to get assistantId from backend:", error);
          // console.warn("[VapiInterviewRecorder] Error details:", error.response?.data || error.message);
          // This is OK - we can proceed without VAPI if needed
        }
      }

      // Connect to VAPI WebRTC using assistantId (simplified like DentWise: vapi.start(assistantId))
      if (assistantId) {
        try {
          // console.log("[VapiInterviewRecorder] Connecting to VAPI with assistantId:", assistantId);
          
          const connection = await connectToVapiCall(
            assistantId,
            // Handle incoming VAPI audio stream
            (audioStream) => {
              // console.log("[VapiInterviewRecorder] VAPI audio stream received:", audioStream);
              
              if (!audioStream) {
                // console.warn("[VapiInterviewRecorder] No audio stream provided");
                return;
              }

              // Create Audio element to play VAPI audio
              const audio = new Audio();
              
              // Handle MediaStream
              if (audioStream instanceof MediaStream) {
                audio.srcObject = audioStream;
                // console.log("[VapiInterviewRecorder] Using MediaStream for audio playback");
              } else {
                // console.warn("[VapiInterviewRecorder] Unknown audio stream type:", typeof audioStream);
                return;
              }
              
              audio.autoplay = true;
              audio.volume = 1.0;
              vapiAudioRef.current = audio;
              
              // Play audio (user interaction may be required for autoplay)
              audio.play().then(() => {
                // console.log("[VapiInterviewRecorder] ✅ VAPI audio playing successfully!");
                toast.success("AI interviewer is speaking!");
              }).catch((err) => {
                // console.error("[VapiInterviewRecorder] ❌ Error playing VAPI audio:", err);
                toast.error("Click anywhere to enable audio playback");
                
                // Try to play on user interaction
                const playOnInteraction = () => {
                  audio.play().then(() => {
                    // console.log("[VapiInterviewRecorder] ✅ Audio started after user interaction");
                    toast.success("Audio enabled!");
                    document.removeEventListener('click', playOnInteraction);
                    document.removeEventListener('touchstart', playOnInteraction);
                  }).catch(e => {
                    // console.error("[VapiInterviewRecorder] Still can't play:", e);
                  });
                };
                document.addEventListener('click', playOnInteraction, { once: true });
                document.addEventListener('touchstart', playOnInteraction, { once: true });
              });

              // Create combined stream for recording (user + VAPI)
              if (connection?.userStream && audioStream instanceof MediaStream) {
                createCombinedRecording(audioStream, connection.userStream);
              }
            },
            // Handle VAPI transcript updates
            (vapiTranscript) => {
              if (vapiTranscript && vapiTranscript.trim()) {
                // console.log("[VapiInterviewRecorder] ✅ New VAPI transcript:", vapiTranscript);
                // Append to VAPI transcript with proper spacing
                vapiTranscriptRef.current = (vapiTranscriptRef.current + " " + vapiTranscript).trim();
                // Combine both transcripts for display
                const combined = (vapiTranscriptRef.current + "\n\n[You]: " + userTranscriptRef.current).trim();
                setTranscript(combined);
              }
            }
          );

          vapiConnectionRef.current = connection;
          // console.log("[VapiInterviewRecorder] ✅ VAPI connection established");
          toast.success("Connected to AI interviewer!");
        } catch (error) {
          // console.error("[VapiInterviewRecorder] ❌ VAPI WebRTC connection failed:", error);
          const errorMsg = error.message || "Unknown error";
          // console.error("[VapiInterviewRecorder] Error details:", errorMsg);
          
          // Check if it's a configuration error
          if (errorMsg.includes("not configured") || errorMsg.includes("VITE_VAPI")) {
            toast.error("VAPI not configured. Please set VITE_VAPI_API_KEY in your environment variables.", { duration: 5000 });
          } else {
            toast("VAPI connection failed: " + errorMsg + ". Recording will continue.", { icon: "⚠️" });
          }
        }
      } else {
        const apiKeyAvailable = !!import.meta.env.VITE_VAPI_API_KEY;
        // console.warn("[VapiInterviewRecorder] Missing VAPI configuration:", {
        //   hasAssistantId: !!assistantId,
        //   hasApiKey: apiKeyAvailable,
        // });
        
        if (!apiKeyAvailable) {
          toast.error("VAPI API key not found. Please set VITE_VAPI_API_KEY in your .env file.", { duration: 5000 });
        } else if (!assistantId) {
          toast.error("VAPI Assistant ID not found. Please check your backend configuration.", { duration: 5000 });
        } else {
          toast("VAPI not configured. Recording will continue without AI interviewer.", { icon: "⚠️" });
        }
      }

      // Start recording user's audio automatically
      // If VAPI connected, combined stream will be used
      await startRecording();

      // Start speech recognition for user transcript
      if (recognitionRef.current) {
        try {
          recognitionRef.current.start();
        } catch (e) {
          // console.log("Recognition already started:", e);
        }
      }

      setIsConnected(true);
      setIsRecording(true);
      toast.success("Interview started! Recording automatically...");
      } catch (error) {
        // console.error("[VapiInterviewRecorder] Error starting interview:", error);
      
      // Show detailed error message from backend
      let errorMessage = "Failed to start interview";
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      // If interview is already in progress, update state
      if (error.response?.data?.currentStatus === "in-progress") {
        setIsConnected(true);
        setIsRecording(true);
        toast("Interview is already in progress. Resuming...", { icon: "ℹ️" });
        return;
      }
      
      // Log full error details for debugging
        // console.error("[VapiInterviewRecorder] Full error response:", error.response?.data);
      toast.error(errorMessage);
    }
  };

  // Create combined audio stream for recording (user + VAPI)
  const createCombinedRecording = async (vapiStream, userStream) => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      audioContextRef.current = audioContext;

      // Get source nodes
      const vapiSource = audioContext.createMediaStreamSource(vapiStream);
      const userSource = audioContext.createMediaStreamSource(userStream);

      // Create destination for mixed audio
      const destination = audioContext.createMediaStreamDestination();
      
      // Connect sources to destination (mixes both streams)
      vapiSource.connect(destination);
      userSource.connect(destination);

      combinedStreamRef.current = destination.stream;

      // Update media recorder to use combined stream
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
        mediaRecorderRef.current.stop();
      }

      const mediaRecorder = new MediaRecorder(destination.stream, {
        mimeType: "audio/webm",
      });

      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.start(1000);
      // console.log("Combined recording started (user + VAPI)");
    } catch (error) {
      // console.error("Error creating combined recording:", error);
    }
  };

  const startRecording = async () => {
    try {
      let streamToRecord = null;

      // Use combined stream if available (VAPI + user), otherwise just user
      if (combinedStreamRef.current) {
        streamToRecord = combinedStreamRef.current;
      } else {
        // Get user's microphone for recording (if not already got from VAPI connection)
        let userStream = vapiConnectionRef.current?.userStream;
        
        if (!userStream) {
          userStream = await navigator.mediaDevices.getUserMedia({
            audio: {
              echoCancellation: true,
              noiseSuppression: true,
              autoGainControl: true,
              sampleRate: 48000,
            },
          });

          // Store for later use if VAPI connects
          if (vapiConnectionRef.current) {
            vapiConnectionRef.current.userStream = userStream;
          }
        }
        
        streamToRecord = userStream;
      }

      // Only create new recorder if we don't have one or it's stopped
      if (!mediaRecorderRef.current || mediaRecorderRef.current.state === "inactive") {
        const mediaRecorder = new MediaRecorder(streamToRecord, {
          mimeType: "audio/webm",
        });

        mediaRecorderRef.current = mediaRecorder;
        chunksRef.current = [];

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            chunksRef.current.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          // console.log("Recording stopped");
        };

        mediaRecorder.start(1000); // Collect data every second
      }

      setIsRecording(true);

      // Start timer if not already started
      if (!timerRef.current) {
        timerRef.current = setInterval(() => {
          setRecordingTime((prev) => prev + 1);
        }, 1000);
      }
    } catch (error) {
      // console.error("Error starting recording:", error);
      toast.error("Failed to access microphone. Please grant permission.");
      throw error;
    }
  };

  const stopInterview = async () => {
    try {
      // Stop recording
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
        mediaRecorderRef.current.stop();
      }

      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }

      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      // Get final recording
      const blob = new Blob(chunksRef.current, { type: "audio/webm" });

      // Convert to base64
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Audio = reader.result.split(",")[1];

        // Get final transcript (combine VAPI + user)
        const finalTranscript = transcript.trim() || 
          (vapiTranscriptRef.current + " " + userTranscriptRef.current).trim();

        // Submit interview
        await onComplete({
          transcript: finalTranscript,
          recordingBase64: base64Audio,
          duration: recordingTime,
        });
      };
      reader.readAsDataURL(blob);

      // Cleanup after a moment
      setTimeout(() => {
        cleanup();
      }, 1000);

      setIsRecording(false);
      setIsConnected(false);
    } catch (error) {
      // console.error("Error stopping interview:", error);
      toast.error("Error stopping interview");
    }
  };

  const cleanup = () => {
    // Close VAPI connection
    if (vapiConnectionRef.current) {
      vapiConnectionRef.current.close();
      vapiConnectionRef.current = null;
    }

    // Stop VAPI audio
    if (vapiAudioRef.current) {
      vapiAudioRef.current.pause();
      vapiAudioRef.current.srcObject = null;
      vapiAudioRef.current = null;
    }

    // Stop combined stream
    if (combinedStreamRef.current) {
      combinedStreamRef.current.getTracks().forEach((track) => track.stop());
      combinedStreamRef.current = null;
    }

    // Close audio context
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }

    // Stop timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // Stop speech recognition
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Auto-start when component mounts if interview is in-progress
  useEffect(() => {
    if (interview?.status === "in-progress" && !isConnected && !isRecording) {
      startInterview();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interview?.status]); // Only depend on status to avoid infinite loops

  if (!isConnected && !isRecording) {
    return (
      <div className="text-center py-12">
        <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
        <p className="text-base-content/70">
          Initializing interview and connecting to AI interviewer...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Interview Status */}
      <div className="bg-base-100 rounded-2xl p-6 border border-primary/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">Interview in Progress</h3>
            <p className="text-sm text-base-content/70">
              Recording automatically • AI interviewer is speaking
            </p>
          </div>
          <div className="text-2xl font-mono font-bold text-primary">
            {formatTime(recordingTime)}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-1 bg-base-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-error rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Recording...</span>
            </div>
          </div>

          <button
            onClick={stopInterview}
            className="btn btn-error btn-lg gap-2"
          >
            <Square className="size-5" />
            End Interview
          </button>
        </div>
      </div>

      {/* Live Transcript */}
      <div className="bg-base-100 rounded-2xl p-6 border border-primary/20">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Live Transcript</h3>
          {transcript && (
            <span className="badge badge-primary badge-sm">
              {transcript.split(" ").filter(w => w.trim()).length} words
            </span>
          )}
        </div>
        <div className="bg-base-200 rounded-xl p-4 min-h-[200px] max-h-[400px] overflow-y-auto custom-scrollbar">
          <p className="text-sm text-base-content/80 whitespace-pre-wrap leading-relaxed">
            {transcript || (
              <span className="text-base-content/50 italic">
                Transcript will appear here as the conversation progresses...
                <br />
                <span className="text-xs mt-2 block">
                  AI: [Will appear when AI speaks]
                  <br />
                  You: [Will appear when you speak]
                </span>
              </span>
            )}
          </p>
        </div>
        <div className="flex items-center gap-4 mt-3 text-xs text-base-content/60">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>Listening...</span>
          </div>
          {recognitionRef.current && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-info rounded-full"></div>
              <span>Speech recognition active</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VapiInterviewRecorder;

