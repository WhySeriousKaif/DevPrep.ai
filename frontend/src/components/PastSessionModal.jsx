import { XIcon } from "lucide-react";
import { useEffect } from "react";

function PastSessionModal({ isOpen, onClose, session }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!isOpen || !session) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-2xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 glass-panel">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors text-white/50 hover:text-white"
        >
          <XIcon className="size-5" />
        </button>
        <h3 className="font-black text-2xl mb-2 text-white">Session Summary</h3>
        <div className="space-y-4">
          <p className="text-white"><strong>Title:</strong> {session.title}</p>
          <p className="text-white"><strong>Role:</strong> {session.role}</p>
          <p className="text-white"><strong>Duration:</strong> {session.duration} minutes</p>
          <p className="text-white"><strong>Difficulty:</strong> {session.difficulty}</p>
          <div>
            <p className="text-white font-semibold mb-1">Questions:</p>
            <ul className="list-disc list-inside text-white/80">
              {session.questions && session.questions.map((q, idx) => (
                <li key={idx}>{q.title} ({q.difficulty})</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastSessionModal;
