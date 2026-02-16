import {
  ArrowRightIcon,
  Code2Icon,
  CrownIcon,
  SparklesIcon,
  UsersIcon,
  ZapIcon,
  LoaderIcon,
} from "lucide-react";
import { Link } from "react-router";
import { getDifficultyBadgeClass } from "../lib/utils";

function ActiveSessions({ sessions, isLoading, isUserInSession }) {
  return (
    <div className="lg:col-span-2 glass-panel rounded-2xl h-full transition-all duration-200">
      <div className="p-5">
        {/* HEADERS SECTION */}
        <div className="flex items-center justify-between mb-6">
          {/* TITLE AND ICON */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg shadow-primary/20">
              <ZapIcon className="size-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white tracking-wide">Live Sessions</h2>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 bg-success/10 border border-success/20 rounded-full">
            <div className="size-2 bg-success rounded-full animate-pulse" />
            <span className="text-xs font-medium text-success">{sessions.length} active</span>
          </div>
        </div>

        {/* SESSIONS LIST */}
        <div className="space-y-3 max-h-[450px] overflow-y-auto custom-scrollbar pr-2">
          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <LoaderIcon className="size-8 animate-spin text-primary" />
            </div>
          ) : sessions.length > 0 ? (
            sessions.map((session) => (
              <div
                key={session._id}
                className="group bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-center justify-between gap-4 p-4">
                  {/* LEFT SIDE */}
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="relative size-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-white/5 group-hover:scale-105 transition-transform">
                      <Code2Icon className="size-6 text-primary group-hover:text-white transition-colors" />
                      <div className="absolute -top-1 -right-1 size-3 bg-success rounded-full border-2 border-base-100" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-bold text-lg text-white truncate group-hover:text-primary transition-colors">{session.problem}</h3>
                        <span
                          className={`badge badge-sm border-0 font-medium ${getDifficultyBadgeClass(
                            session.difficulty
                          )}`}
                        >
                          {session.difficulty.slice(0, 1).toUpperCase() +
                            session.difficulty.slice(1)}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-base-content/60">
                        <div className="flex items-center gap-1.5">
                          <CrownIcon className="size-3.5 text-warning" />
                          <span className="font-medium truncate max-w-[120px]">{session.host?.name}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <UsersIcon className="size-3.5" />
                          <span>{session.participant ? "2/2" : "1/2"}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {session.participant && !isUserInSession(session) ? (
                    <button className="btn btn-disabled btn-sm text-xs opacity-50">Full</button>
                  ) : (
                    <Link
                      to={`/session/${session._id}`}
                      className="btn btn-primary btn-sm rounded-lg gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 group-hover:scale-105"
                    >
                      <span className="font-semibold">{isUserInSession(session) ? "Rejoin" : "Join"}</span>
                      <ArrowRightIcon className="size-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 px-6 glass-card rounded-xl border-dashed border-2 border-white/5">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/5 rounded-full flex items-center justify-center animate-pulse">
                <SparklesIcon className="w-8 h-8 text-primary/40" />
              </div>
              <p className="text-base font-medium text-white mb-1">No active sessions</p>
              <p className="text-sm text-base-content/50">Be the first to create one and start coding!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ActiveSessions;
