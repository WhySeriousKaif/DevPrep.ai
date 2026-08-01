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
      <div className="glass-panel rounded-3xl border border-white/5 h-full">
        <div className="px-5 py-5 flex items-center gap-4 border-b border-white/5">
          <Clock className="size-5 text-accent" />
          <h2 className="text-base sm:text-lg font-bold text-white uppercase tracking-wide">
            Past Sessions
          </h2>
        </div>

        <div className="p-5">
          {isLoading ? (
            <div className="flex justify-center py-8">
              <Loader className="size-5 animate-spin text-primary" />
            </div>
          ) : sessions.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sessions.map((session) => (
                <button
                  key={session._id}
                  type="button"
                  onClick={() => {
                    setSelectedSession(session);
                    setModalOpen(true);
                  }}
                  className="text-left p-5 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-colors min-h-[170px]"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <Code2 className="size-6 text-primary shrink-0 mt-0.5" />
                    <p className="text-base sm:text-lg font-semibold text-white truncate flex-1">
                      {session.problem}
                    </p>
                    <span
                      className={`badge badge-md border-0 shrink-0 ${getDifficultyBadgeClass(session.difficulty)}`}
                    >
                      {session.difficulty}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base text-base-content/60 pl-5">
                    <span className="flex items-center gap-1">
                      <Clock className="size-2.5" />
                      {formatDistanceToNow(new Date(session.createdAt), {
                        addSuffix: true,
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="size-2.5" />
                      {session.participant ? 2 : 1}
                    </span>
                  </div>
                </button>
              ))}
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
