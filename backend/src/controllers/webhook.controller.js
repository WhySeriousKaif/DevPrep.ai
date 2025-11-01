// Webhook handler for VAPI call events
import Interview from "../models/interview.model.js";

export const handleVapiWebhook = async (req, res) => {
  try {
    const event = req.body;
    
    console.log("VAPI Webhook received:", event.type);

    // VAPI sends various event types
    switch (event.type) {
      case "transcript":
        // Update transcript in database
        if (event.interviewId || event.metadata?.interviewId) {
          const interviewId = event.metadata?.interviewId || event.interviewId;
          const interview = await Interview.findById(interviewId);
          
          if (interview) {
            // Append transcript (VAPI sends incremental updates)
            const newTranscript = event.transcript || event.text || "";
            interview.transcript = (interview.transcript || "") + " " + newTranscript;
            await interview.save();
            console.log("Transcript updated for interview:", interviewId);
          }
        }
        break;

      case "call-ended":
      case "call.completed":
        // Call ended - mark interview as ready for submission
        if (event.interviewId || event.metadata?.interviewId) {
          const interviewId = event.metadata?.interviewId || event.interviewId;
          const interview = await Interview.findById(interviewId);
          
          if (interview && interview.status === "in-progress") {
            // Don't auto-complete, let user submit manually
            console.log("VAPI call ended for interview:", interviewId);
          }
        }
        break;

      case "function-call":
        // Function calls from assistant
        console.log("Function call:", event.functionCall);
        break;

      default:
        console.log("Unhandled VAPI event type:", event.type);
    }

    // Always return 200 to acknowledge receipt
    res.status(200).json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    res.status(500).json({ error: error.message });
  }
};

