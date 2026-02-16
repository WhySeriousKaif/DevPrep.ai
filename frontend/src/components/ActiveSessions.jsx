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
    <div className="glass-panel rounded-3xl h-full transition-all duration-200 flex flex-col overflow-hidden">
      <div className="p-5 pb-0 flex-none">
        {/* HEADERS SECTION */}
        <div className="flex items-center justify-between mb-4">
          {/* TITLE AND ICON */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-lg shadow-primary/20">
              <ZapIcon className="size-4 text-white" />
            </div>
            <h2 className="text-base font-bold text-white tracking-wide uppercase">Live Sessions</h2>
          </div>

          <div className="flex items-center gap-2 px-2 py-1 bg-success/10 border border-success/20 rounded-full">
            <div className="size-1.5 bg-success rounded-full animate-pulse" />
            <span className="text-[10px] font-bold text-success uppercase">{sessions.length} active</span>
          </div>
        </div>
      </div>

      {/* SESSIONS LIST */}
      <div className="space-y-3 overflow-y-auto custom-scrollbar p-5 pt-0 flex-1">
        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <LoaderIcon className="size-6 animate-spin text-primary" />
          </div>
        ) : sessions.length > 0 ? (
          sessions.map((session) => (
            <div
              key={session._id}
              className="group bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 rounded-xl transition-all duration-300 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="flex items-center justify-between gap-3 p-3">
                {/* LEFT SIDE */}
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="relative size-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-white/5 group-hover:scale-105 transition-transform flex-none">
                    <Code2Icon className="size-5 text-primary group-hover:text-white transition-colors" />
                    <div className="absolute -top-1 -right-1 size-2.5 bg-success rounded-full border-2 border-base-100" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="font-bold text-sm text-white truncate group-hover:text-primary transition-colors">{session.problem}</h3>
                      <span
                        className={`badge badge-xs border-0 font-medium ${getDifficultyBadgeClass(
                          session.difficulty
                        )}`}
                      >
                        {session.difficulty}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-[10px] text-base-content/50 uppercase font-medium">
                      <div className="flex items-center gap-1">
                        <CrownIcon className="size-3 text-warning" />
                        <span className="truncate max-w-[80px]">{session.host?.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <UsersIcon className="size-3" />
                        <span>{session.participant ? "2/2" : "1/2"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {session.participant && !isUserInSession(session) ? (
                  <button className="btn btn-disabled btn-xs text-[10px] opacity-50">Full</button>
                ) : (
                  <Link
                    to={`/session/${session._id}`}
                    className="btn btn-primary btn-xs rounded-lg gap-1 shadow-lg shadow-primary/20 hover:shadow-primary/40 group-hover:scale-105 text-[10px] h-8 min-h-0 px-3 uppercase tracking-wider"
                  >
                    <span className="font-bold">{isUserInSession(session) ? "Rejoin" : "Join"}</span>
                    <ArrowRightIcon className="size-3" />
                  </Link>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 px-4 glass-card rounded-xl border-dashed border-2 border-white/5 h-full flex flex-col items-center justify-center">
            <div className="size-12 mb-3 bg-white/5 rounded-full flex items-center justify-center animate-pulse">
              <SparklesIcon className="size-6 text-primary/40" />
            </div>
            <p className="text-sm font-bold text-white mb-1">No active sessions</p>
            <p className="text-xs text-base-content/50">Be the first to create one!</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default ActiveSessions;
