import { XIcon, ClockIcon, UsersIcon, LayersIcon, Code2Icon, CalendarIcon } from "lucide-react";
import { useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { getDifficultyBadgeClass } from "../lib/utils";

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

  const questions = session.questionDetails || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-lg glass-panel border border-white/10 rounded-3xl overflow-hidden max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/5 flex items-start justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="size-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <Code2Icon className="size-5 text-primary" />
            </div>
            <div className="min-w-0">
              <h3 className="font-black text-lg text-white truncate">{session.title || "Coding Interview"}</h3>
              <p className="text-xs text-base-content/50 flex items-center gap-1.5">
                <CalendarIcon className="size-3" />
                {formatDistanceToNow(new Date(session.createdAt), { addSuffix: true })}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="btn btn-ghost btn-sm btn-square shrink-0 text-base-content/50 hover:text-white"
          >
            <XIcon className="size-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 overflow-y-auto custom-scrollbar">
          {/* Stat chips */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex flex-col items-center gap-1 text-center">
              <UsersIcon className="size-4 text-primary" />
              <span className="text-xs font-semibold text-white">{session.role || "—"}</span>
              <span className="text-[10px] uppercase tracking-wide text-base-content/40">Role</span>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex flex-col items-center gap-1 text-center">
              <ClockIcon className="size-4 text-secondary" />
              <span className="text-xs font-semibold text-white">{session.duration} min</span>
              <span className="text-[10px] uppercase tracking-wide text-base-content/40">Duration</span>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex flex-col items-center gap-1 text-center">
              <LayersIcon className="size-4 text-accent" />
              <span className={`badge badge-xs border-0 ${getDifficultyBadgeClass(session.difficulty)}`}>
                {session.difficulty}
              </span>
              <span className="text-[10px] uppercase tracking-wide text-base-content/40 mt-0.5">Difficulty</span>
            </div>
          </div>

          {/* Questions */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-base-content/50 mb-2.5">
              Questions {questions.length > 0 && `(${questions.length})`}
            </p>
            {questions.length > 0 ? (
              <ul className="space-y-2">
                {questions.map((q, idx) => (
                  <li
                    key={q.id || idx}
                    className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl px-4 py-3"
                  >
                    <span className="size-5 rounded-full bg-primary/10 text-primary text-[11px] font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-white/90 flex-1 truncate">{q.title}</span>
                    <span className={`badge badge-xs border-0 shrink-0 ${getDifficultyBadgeClass(q.difficulty)}`}>
                      {q.difficulty}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-base-content/40">No question details available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastSessionModal;
