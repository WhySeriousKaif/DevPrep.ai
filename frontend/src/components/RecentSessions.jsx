import { Code2, Clock, Users, Trophy, Loader } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";
import { formatDistanceToNow } from "date-fns";

function RecentSessions({ sessions, isLoading }) {
  return (
    <div className="glass-panel rounded-3xl transition-all duration-200">
      <div className="p-5">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 bg-gradient-to-br from-accent to-secondary rounded-xl shadow-lg shadow-accent/20">
            <Clock className="size-5 text-white" />
          </div>
          <h2 className="text-base font-bold text-white tracking-wide uppercase">Your Past Sessions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {isLoading ? (
            <div className="col-span-full flex items-center justify-center py-12">
              <Loader className="size-6 animate-spin text-primary" />
            </div>
          ) : sessions.length > 0 ? (
            sessions.map((session) => (
              <div
                key={session._id}
                className={`relative bg-white/5 border ${session.status === "active"
                    ? "border-success/20 hover:border-success/40 bg-success/5"
                    : "border-white/5 hover:border-primary/20 hover:bg-white/10"
                  } rounded-2xl transition-all duration-200 hover:shadow-md group`}
              >
                {session.status === "active" && (
                  <div className="absolute top-3 right-3">
                    <div className="badge badge-success badge-xs gap-1 border-0">
                      <div className="size-1 bg-white rounded-full animate-pulse" />
                      ACTIVE
                    </div>
                  </div>
                )}

                <div className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`size-10 rounded-xl flex items-center justify-center shadow-inner flex-shrink-0 border border-white/5 ${session.status === "active"
                          ? "bg-gradient-to-br from-success/20 to-success/10"
                          : "bg-gradient-to-br from-primary/20 to-secondary/20"
                        }`}
                    >
                      <Code2 className={`size-5 ${session.status === 'active' ? 'text-success' : 'text-primary'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm text-white mb-1 truncate group-hover:text-primary transition-colors">{session.problem}</h3>
                      <span
                        className={`badge badge-xs border-0 font-medium ${getDifficultyBadgeClass(session.difficulty)}`}
                      >
                        {session.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-[10px] text-base-content/50 mb-3 font-medium uppercase tracking-wide">
                    <div className="flex items-center gap-1.5">
                      <Clock className="size-3" />
                      <span>
                        {formatDistanceToNow(new Date(session.createdAt), {
                          addSuffix: true,
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="size-3" />
                      <span>
                        {session.participant ? "2" : "1"} participant
                        {session.participant ? "s" : ""}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="text-[10px] font-bold text-base-content/30 uppercase">Completed</span>
                    <span className="text-[10px] text-base-content/30 font-mono">
                      {new Date(session.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="size-12 mx-auto mb-3 bg-gradient-to-br from-white/5 to-white/0 rounded-full flex items-center justify-center border border-white/5">
                <Trophy className="size-5 text-base-content/20" />
              </div>
              <p className="text-sm font-bold text-white mb-1">No sessions yet</p>
              <p className="text-xs text-base-content/40">Start your coding journey today!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecentSessions;
