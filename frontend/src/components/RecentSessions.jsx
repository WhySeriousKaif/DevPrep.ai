import { Code2, Clock, Users, Trophy, Loader } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";
import { formatDistanceToNow } from "date-fns";

function RecentSessions({ sessions, isLoading }) {
  return (
    <div className="bg-base-100/80 backdrop-blur-sm border border-accent/10 hover:border-accent/20 rounded-xl transition-all duration-200">
      <div className="p-4 md:p-5">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="p-2 bg-gradient-to-br from-accent/90 to-secondary/90 rounded-lg shadow-sm">
            <Clock className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-base-content">Your Past Sessions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {isLoading ? (
            <div className="col-span-full flex items-center justify-center py-12">
              <Loader className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : sessions.length > 0 ? (
            sessions.map((session) => (
              <div
                key={session._id}
                className={`relative bg-base-200/50 border ${
                  session.status === "active"
                    ? "border-success/20 hover:border-success/40 bg-success/5"
                    : "border-base-300/50 hover:border-primary/20"
                } rounded-lg transition-all duration-200 hover:shadow-sm`}
              >
                {session.status === "active" && (
                  <div className="absolute top-2.5 right-2.5">
                    <div className="badge badge-success badge-xs gap-1">
                      <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
                      ACTIVE
                    </div>
                  </div>
                )}

                <div className="p-3 md:p-4">
                  <div className="flex items-start gap-2.5 md:gap-3 mb-3">
                    <div
                      className={`w-10 h-10 md:w-11 md:h-11 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 ${
                        session.status === "active"
                          ? "bg-gradient-to-br from-success/90 to-success/70"
                          : "bg-gradient-to-br from-primary/90 to-secondary/90"
                      }`}
                    >
                      <Code2 className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm md:text-base mb-1.5 truncate">{session.problem}</h3>
                      <span
                        className={`badge badge-xs ${getDifficultyBadgeClass(session.difficulty)}`}
                      >
                        {session.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs md:text-sm text-base-content/50 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>
                        {formatDistanceToNow(new Date(session.createdAt), {
                          addSuffix: true,
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      <span>
                        {session.participant ? "2" : "1"} participant
                        {session.participant ? "s" : ""}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2.5 border-t border-base-300/50">
                    <span className="text-xs font-medium text-base-content/50 uppercase">Completed</span>
                    <span className="text-xs text-base-content/40">
                      {new Date(session.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-xl flex items-center justify-center">
                <Trophy className="w-7 h-7 text-accent/40" />
              </div>
              <p className="text-base font-medium text-base-content/60 mb-1">No sessions yet</p>
              <p className="text-xs text-base-content/40">Start your coding journey today!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecentSessions;
