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
    <div className="lg:col-span-2 bg-base-100/80 backdrop-blur-sm border border-primary/10 hover:border-primary/20 rounded-xl h-full transition-all duration-200">
      <div className="p-4 md:p-5">
        {/* HEADERS SECTION */}
        <div className="flex items-center justify-between mb-5">
          {/* TITLE AND ICON */}
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-gradient-to-br from-primary/90 to-secondary/90 rounded-lg shadow-sm">
              <ZapIcon className="size-4 text-white" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-base-content">Live Sessions</h2>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-success/10 rounded-lg">
            <div className="size-1.5 bg-success rounded-full" />
            <span className="text-xs md:text-sm font-medium text-success">{sessions.length} active</span>
          </div>
        </div>

        {/* SESSIONS LIST */}
        <div className="space-y-2.5 max-h-[450px] overflow-y-auto pr-1">
          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <LoaderIcon className="size-8 animate-spin text-primary" />
            </div>
          ) : sessions.length > 0 ? (
            sessions.map((session) => (
              <div
                key={session._id}
                className="bg-base-200/50 border border-base-300/50 hover:border-primary/30 hover:bg-base-200/70 rounded-lg transition-all duration-200"
              >
                <div className="flex items-center justify-between gap-3 md:gap-4 p-3 md:p-4">
                  {/* LEFT SIDE */}
                  <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                    <div className="relative size-11 md:size-12 rounded-lg bg-gradient-to-br from-primary/90 to-secondary/90 flex items-center justify-center shadow-sm flex-shrink-0">
                      <Code2Icon className="size-5 md:size-6 text-white" />
                      <div className="absolute -top-0.5 -right-0.5 size-3 bg-success rounded-full border-2 border-base-100" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <h3 className="font-semibold text-base md:text-lg truncate">{session.problem}</h3>
                        <span
                          className={`badge badge-xs md:badge-sm ${getDifficultyBadgeClass(
                            session.difficulty
                          )}`}
                        >
                          {session.difficulty.slice(0, 1).toUpperCase() +
                            session.difficulty.slice(1)}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-base-content/60 flex-wrap">
                        <div className="flex items-center gap-1">
                          <CrownIcon className="size-3.5" />
                          <span className="font-medium truncate max-w-[120px]">{session.host?.name}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <UsersIcon className="size-3.5" />
                          <span>{session.participant ? "2/2" : "1/2"}</span>
                        </div>
                        {session.participant && !isUserInSession(session) ? (
                          <span className="badge badge-error badge-xs">FULL</span>
                        ) : (
                          <span className="badge badge-success badge-xs">OPEN</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {session.participant && !isUserInSession(session) ? (
                    <button className="btn btn-disabled btn-xs md:btn-sm text-xs">Full</button>
                  ) : (
                    <Link to={`/session/${session._id}`} className="btn btn-primary btn-xs md:btn-sm gap-1.5 text-xs">
                      <span>{isUserInSession(session) ? "Rejoin" : "Join"}</span>
                      <ArrowRightIcon className="size-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <SparklesIcon className="w-8 h-8 text-primary/40" />
              </div>
              <p className="text-base font-medium text-base-content/60 mb-1">No active sessions</p>
              <p className="text-xs text-base-content/40">Be the first to create one!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ActiveSessions;
