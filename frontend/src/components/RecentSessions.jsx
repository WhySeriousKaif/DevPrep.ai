import { Code2, Clock, Users, Trophy, Loader } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import PastSessionModal from "./PastSessionModal";

function RecentSessions({ sessions, isLoading }) {
  const [selectedSession, setSelectedSession] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="glass-panel rounded-3xl h-full flex flex-col overflow-hidden border border-white/5">
        <div className="px-5 py-5 flex items-center gap-4 border-b border-white/5 shrink-0">
          <Clock className="size-5 text-accent" />
          <h2 className="text-base sm:text-lg font-bold text-white uppercase tracking-wide">
            Past Sessions
          </h2>
        </div>

        <div className="p-4 flex-1 overflow-y-auto custom-scrollbar">
          {isLoading ? (
            <div className="flex justify-center py-8">
              <Loader className="size-5 animate-spin text-primary" />
            </div>
          ) : sessions.length > 0 ? (
            <div className="flex flex-col gap-2.5">
              {sessions.map((session) => {
                const questions = session.questionDetails || [];
                const primaryTitle = questions[0]?.title || session.title || "Coding Interview";
                const extraCount = questions.length - 1;

                return (
                <button
                  key={session._id}
                  type="button"
                  onClick={() => {
                    setSelectedSession(session);
                    setModalOpen(true);
                  }}
                  className="text-left p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-colors w-full"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <Code2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-white truncate flex-1">
                      {primaryTitle}
                      {extraCount > 0 && (
                        <span className="text-white/40 font-normal"> +{extraCount} more</span>
                      )}
                    </p>
                    <span
                      className={`badge badge-sm border-0 shrink-0 ${getDifficultyBadgeClass(session.difficulty)}`}
                    >
                      {session.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-base-content/50 pl-7">
                    <span className="flex items-center gap-1">
                      <Clock className="size-2.5" />
                      {formatDistanceToNow(new Date(session.createdAt), {
                        addSuffix: true,
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="size-2.5" />
                      {session.participant ? 2 : 1} player{session.participant ? "s" : ""}
                    </span>
                  </div>
                </button>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8">
              <Trophy className="size-5 text-base-content/20 mx-auto mb-2" />
              <p className="text-xs font-medium text-white">No sessions yet</p>
              <p className="text-[10px] text-base-content/40">
                Start your coding journey
              </p>
            </div>
          )}
        </div>
      </div>

      {modalOpen && selectedSession && (
        <PastSessionModal
          isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setSelectedSession(null);
          }}
          session={selectedSession}
        />
      )}
    </>
  );
}

export default RecentSessions;
