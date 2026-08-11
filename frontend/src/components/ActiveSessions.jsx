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
    <div className="glass-panel rounded-3xl h-full flex flex-col overflow-hidden border border-white/5">
      <div className="px-5 py-5 flex items-center justify-between border-b border-white/5 shrink-0">
        <div className="flex items-center gap-4">
          <ZapIcon className="size-5 text-primary" />
          <h2 className="text-base sm:text-lg font-bold text-white uppercase tracking-wide">
            Live Sessions
          </h2>
        </div>
        <span className="text-sm sm:text-base font-semibold text-success bg-success/10 px-4 py-2 rounded-full border border-success/20">
          {sessions.length} active
        </span>
      </div>

      <div className="space-y-4 overflow-y-auto p-5 flex-1 custom-scrollbar">
        {isLoading ? (
          <div className="flex justify-center py-10">
            <LoaderIcon className="size-6 animate-spin text-primary" />
          </div>
        ) : sessions.length > 0 ? (
          sessions.map((session) => {
            const questions = session.questionDetails || [];
            const primaryTitle = questions[0]?.title || session.title || "Coding Interview";
            const extraCount = questions.length - 1;

            return (
            <div
              key={session._id}
              className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <Code2Icon className="size-4 text-primary shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-white truncate">
                    {primaryTitle}
                    {extraCount > 0 && (
                      <span className="text-base-content/40 font-normal"> +{extraCount} more</span>
                    )}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-base-content/50">
                    <span className="flex items-center gap-0.5">
                      <CrownIcon className="size-2.5 text-warning" />
                      {session.host?.name}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <UsersIcon className="size-2.5" />
                      {session.participant ? "2/2" : "1/2"}
                    </span>
                    <span
                      className={`badge badge-xs border-0 ${getDifficultyBadgeClass(session.difficulty)}`}
                    >
                      {session.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              {session.participant && !isUserInSession(session) ? (
                <span className="text-sm text-base-content/40 shrink-0">
                  Full
                </span>
              ) : (
                <Link
                  to={`/session/${session._id}`}
                  className="btn btn-primary btn-sm rounded-xl h-10 min-h-0 px-4 text-sm gap-2 shrink-0"
                >
                  {isUserInSession(session) ? "Rejoin" : "Join"}
                  <ArrowRightIcon className="size-3" />
                </Link>
              )}
            </div>
            );
          })
        ) : (
          <div className="text-center py-8">
            <SparklesIcon className="size-5 text-primary/40 mx-auto mb-2" />
            <p className="text-xs font-medium text-white">No active sessions</p>
            <p className="text-[10px] text-base-content/40">
              Create one to get started
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ActiveSessions;
