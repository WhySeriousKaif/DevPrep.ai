// VAPI Web SDK Integration for Browser

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
 * Initialize and connect to VAPI call using Web SDK.
 *
 * Vapi's Web SDK (built on Daily.co) plays the assistant's voice
 * automatically once the call connects — there's no "audio"/"stream" event
 * to listen for (those don't exist in the SDK). What we do need to handle
 * ourselves: `vapi.start()` resolves to `null` (not a rejected promise) when
 * the call fails to start, and Vapi emits a `call-start-failed` event with
 * the reason — both must be checked, or a failed call silently looks like
 * a successful one with no audio.
 */
export async function connectToVapiCall(assistantId, assistantOverrides, onAudioStream, onTranscript) {
  if (!apiKey) {
    throw new Error("VAPI API key not configured. Please set VITE_VAPI_API_KEY in your environment variables.");
  }
  if (!assistantId) {
    throw new Error("Assistant ID is required");
  }

  const cleanupHandlers = [];
  let startFailure = null;

  const handleCallStart = () => {};
  vapi.on("call-start", handleCallStart);
  cleanupHandlers.push(() => vapi.off("call-start", handleCallStart));

  const handleCallEnd = () => {};
  vapi.on("call-end", handleCallEnd);
  cleanupHandlers.push(() => vapi.off("call-end", handleCallEnd));

  const handleSpeechStart = () => {};
  vapi.on("speech-start", handleSpeechStart);
  cleanupHandlers.push(() => vapi.off("speech-start", handleSpeechStart));

  const handleSpeechEnd = () => {};
  vapi.on("speech-end", handleSpeechEnd);
  cleanupHandlers.push(() => vapi.off("speech-end", handleSpeechEnd));

  const handleMessage = (messageEvent) => {
    if (messageEvent?.type === "transcript" && messageEvent?.transcriptType === "final") {
      onTranscript?.(messageEvent.transcript);
    }
  };
  vapi.on("message", handleMessage);
  cleanupHandlers.push(() => vapi.off("message", handleMessage));

  const handleCallStartFailed = (event) => {
    startFailure = event;
    console.error("[VAPI] call-start-failed:", event);
  };
  vapi.on("call-start-failed", handleCallStartFailed);
  cleanupHandlers.push(() => vapi.off("call-start-failed", handleCallStartFailed));

  const handleError = (error) => {
    console.error("[VAPI] error event:", error);
  };
  vapi.on("error", handleError);
  cleanupHandlers.push(() => vapi.off("error", handleError));

  // Grabs the assistant's remote audio track (via the underlying Daily call
  // object) purely so we can mix it into our own local recording — Vapi/Daily
  // already plays it out loud automatically, independent of this.
  const attachRemoteAudioTrack = () => {
    const daily = vapi.getDailyCallObject?.();
    if (!daily || !onAudioStream) return;
    const participants = daily.participants();
    const remote = Object.values(participants || {}).find((p) => !p.local);
    if (remote?.audioTrack) {
      onAudioStream(new MediaStream([remote.audioTrack]));
    }
  };
  vapi.on("daily-participant-updated", attachRemoteAudioTrack);
  cleanupHandlers.push(() => vapi.off("daily-participant-updated", attachRemoteAudioTrack));

  const cleanupAll = () => cleanupHandlers.forEach((fn) => fn());

  let callResult;
  try {
    callResult = await vapi.start(assistantId, assistantOverrides);
  } catch (error) {
    cleanupAll();
    throw error;
  }

  if (!callResult) {
    // call-start-failed can arrive slightly after vapi.start() resolves to
    // null — give it a brief window so the real reason is available instead
    // of always falling back to the generic message.
    if (!startFailure) {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
    cleanupAll();
    const reason = startFailure?.error || startFailure?.message || JSON.stringify(startFailure) || null;
    console.error("[VAPI] Full call-start-failed payload:", startFailure);
    throw new Error(
      reason
        ? `Vapi call failed to start: ${reason}`
        : "Vapi call failed to start (no error details from Vapi — check the browser console and Vapi dashboard Logs tab for this attempt)."
    );
  }

  attachRemoteAudioTrack();

  // Reuse the microphone track Daily/Vapi already captured for the call
  // itself, instead of requesting a second independent getUserMedia() stream
  // for local recording. Two concurrent mic captures on the same device is
  // what triggered the "KrispSDK is duplicated" warning and, very likely, the
  // call getting ejected a few seconds in.
  const daily = vapi.getDailyCallObject?.();
  const localAudioTrack = daily?.participants?.()?.local?.audioTrack;

  let userStream = null;
  let ownsUserStream = false;

  if (localAudioTrack) {
    userStream = new MediaStream([localAudioTrack]);
  } else {
    // Fallback only if Daily's own track isn't available for some reason.
    userStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
        sampleRate: 48000,
      },
    });
    ownsUserStream = true;
  }

  const closeConnection = () => {
    cleanupAll();
    if (vapi && vapi.stop) {
      vapi.stop();
    }
    // Only stop tracks we independently requested — Daily's own track is
    // torn down by vapi.stop() above, stopping it ourselves would be wrong.
    if (ownsUserStream && userStream) {
      userStream.getTracks().forEach((track) => track.stop());
    }
  };

  return {
    vapi,
    callResult,
    userStream,
    cleanup: closeConnection,
    close: closeConnection,
  };
}
