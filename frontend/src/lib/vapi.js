// VAPI Web SDK Integration for Browser
// Simplified version matching DentWise working implementation

// Suppress VAPI SDK console warnings
const originalWarn = console.warn;
console.warn = (...args) => {
  // Filter out VAPI SDK's harmless warnings
  if (args[0]?.includes?.('Ignoring settings for browser- or platform-unsupported input processor')) {
    return; // Don't log this warning
  }
  originalWarn.apply(console, args);
};

import Vapi from "@vapi-ai/web";

// Get API key from environment (Vite uses VITE_ prefix, not NEXT_PUBLIC_)
const apiKey = import.meta.env.VITE_VAPI_API_KEY;

// Initialize Vapi with API key, or create a mock instance if not configured
export const vapi = apiKey ? new Vapi(apiKey) : {
  start: () => Promise.reject(new Error("Vapi not configured")),
  stop: () => {},
  on: () => vapi,
  off: () => vapi,
};

/**
 * Initialize and connect to VAPI call using Web SDK
 * Simplified version - just start with assistantId
 * IMPORTANT: Event listeners are on the vapi instance, NOT the call object!
 */
export async function connectToVapiCall(assistantId, onAudioStream, onTranscript) {
  try {
    // console.log("[VAPI] Connecting with assistantId:", assistantId);
    
    // Check if VAPI is configured
    if (!apiKey) {
      throw new Error("VAPI API key not configured. Please set VITE_VAPI_API_KEY in your environment variables.");
    }

    if (!assistantId) {
      throw new Error("Assistant ID is required");
    }

    // Set up event handlers on the VAPI instance BEFORE starting the call
    // This matches DentWise pattern - events come from vapi instance, not call object
    // console.log("[VAPI] Setting up event handlers on vapi instance...");
    
    const cleanupHandlers = [];

    // Handle call-start event
    const handleCallStart = () => {
      // console.log("[VAPI] ✅ Call started");
    };
    vapi.on("call-start", handleCallStart);
    cleanupHandlers.push(() => vapi.off("call-start", handleCallStart));

    // Handle call-end event
    const handleCallEnd = () => {
      // console.log("[VAPI] Call ended");
    };
    vapi.on("call-end", handleCallEnd);
    cleanupHandlers.push(() => vapi.off("call-end", handleCallEnd));

    // Handle speech-start event
    const handleSpeechStart = () => {
      // console.log("[VAPI] ✅ AI started speaking");
    };
    vapi.on("speech-start", handleSpeechStart);
    cleanupHandlers.push(() => vapi.off("speech-start", handleSpeechStart));

    // Handle speech-end event
    const handleSpeechEnd = () => {
      // console.log("[VAPI] AI stopped speaking");
    };
    vapi.on("speech-end", handleSpeechEnd);
    cleanupHandlers.push(() => vapi.off("speech-end", handleSpeechEnd));

    // Handle message/transcript events (matching DentWise pattern)
    const handleMessage = (messageEvent) => {
      // Only log important events, not every message
      if (messageEvent?.type === "transcript") {
        if (messageEvent?.transcriptType === "final") {
          // console.log("[VAPI] ✅ Final transcript:", messageEvent.transcript);
          if (onTranscript) {
            onTranscript(messageEvent.transcript);
          }
        } else if (messageEvent?.transcriptType === "partial") {
          // Only log partial transcripts occasionally (not every update)
          // These are real-time updates, too verbose to log all
          // if (Math.random() < 0.1) { // Log 10% of partial transcripts
          //   console.log("[VAPI] Partial transcript update...");
          // }
        }
      } else if (messageEvent?.type === "speech-update" && messageEvent?.status === "started") {
        // console.log("[VAPI] 🎤 AI started speaking");
      } else if (messageEvent?.type === "speech-update" && messageEvent?.status === "stopped") {
        // console.log("[VAPI] 🎤 AI stopped speaking");
      }
      // Don't log other message types to reduce console noise
    };
    vapi.on("message", handleMessage);
    cleanupHandlers.push(() => vapi.off("message", handleMessage));

    // Listen for audio stream events - VAPI may emit audio/stream events
    const handleAudioStream = (stream) => {
      // console.log("[VAPI] ✅ Audio stream event received:", stream);
      if (stream && onAudioStream) {
        if (stream instanceof MediaStream) {
          onAudioStream(stream);
        } else if (stream.stream instanceof MediaStream) {
          onAudioStream(stream.stream);
        }
      }
    };
    // Try multiple event names VAPI might use for audio
    vapi.on("audio", handleAudioStream);
    cleanupHandlers.push(() => vapi.off("audio", handleAudioStream));
    
    vapi.on("stream", handleAudioStream);
    cleanupHandlers.push(() => vapi.off("stream", handleAudioStream));

    // Handle errors
    const handleError = (error) => {
      // console.error("[VAPI] Call error:", error);
    };
    vapi.on("error", handleError);
    cleanupHandlers.push(() => vapi.off("error", handleError));

    // Try to get audio stream - VAPI SDK may provide it through various means
    // Check if vapi instance has audio-related properties
    if (vapi.remoteStream && onAudioStream) {
      // console.log("[VAPI] ✅ Found remoteStream on vapi instance");
      onAudioStream(vapi.remoteStream);
    }

    // console.log("[VAPI] Starting call with assistantId:", assistantId);
    
    // Start the call - VAPI SDK handles WebRTC connection
    // This matches the DentWise pattern: vapi.start(assistantId)
    // Note: The call object returned may not have event methods
    const callResult = await vapi.start(assistantId);
    // console.log("[VAPI] ✅ Call started successfully");
    // Reduced logging - only log if debugging is needed
    // if (process.env.NODE_ENV === "development") {
    //   console.log("[VAPI] Call result type:", typeof callResult);
    //   if (callResult) {
    //     console.log("[VAPI] Call result keys:", Object.keys(callResult));
    //   }
    // }

    // Check if call result has audio stream
    if (callResult?.remoteStream && onAudioStream) {
      // console.log("[VAPI] ✅ Found remoteStream on call result");
      onAudioStream(callResult.remoteStream);
    }

    // Poll for remoteStream on vapi instance (VAPI SDK may set it after connection)
    // Check multiple times as WebRTC connection takes time
    let checkCount = 0;
    const maxChecks = 10;
    const checkInterval = setInterval(() => {
      checkCount++;
      // Only log every 3rd check to reduce noise
      // if (checkCount % 3 === 0) {
      //   console.log(`[VAPI] Checking for audio stream (attempt ${checkCount}/${maxChecks})`);
      // }
      
      // Check vapi instance properties
      if (vapi.remoteStream && onAudioStream) {
        // console.log("[VAPI] ✅ Found remoteStream on vapi instance");
        onAudioStream(vapi.remoteStream);
        clearInterval(checkInterval);
      } else if (vapi.remoteAudioStream && onAudioStream) {
        // console.log("[VAPI] ✅ Found remoteAudioStream on vapi instance");
        onAudioStream(vapi.remoteAudioStream);
        clearInterval(checkInterval);
      }
      
      if (checkCount >= maxChecks) {
        // console.warn("[VAPI] ⚠️ Could not find audio stream after multiple checks");
        clearInterval(checkInterval);
      }
    }, 500); // Check every 500ms
    
    // Clean up interval on cleanup
    cleanupHandlers.push(() => clearInterval(checkInterval));

    // Get user's microphone stream for combined recording
    const userStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
        sampleRate: 48000,
      },
    });

    return {
      vapi, // Return vapi instance for cleanup
      callResult, // Return call result if needed
      userStream,
      cleanup: () => {
        // Clean up event listeners
        cleanupHandlers.forEach(cleanup => cleanup());
        // Stop the call
        if (vapi && vapi.stop) {
          vapi.stop();
        }
        // Stop user stream
        if (userStream) {
          userStream.getTracks().forEach((track) => track.stop());
        }
      },
      close: () => {
        // Clean up event listeners
        cleanupHandlers.forEach(cleanup => cleanup());
        // Stop the call
        if (vapi && vapi.stop) {
          vapi.stop();
        }
        // Stop user stream
        if (userStream) {
          userStream.getTracks().forEach((track) => track.stop());
        }
      },
    };
  } catch (error) {
    // console.error("[VAPI] Error connecting to VAPI:", error);
    throw error;
  }
}
