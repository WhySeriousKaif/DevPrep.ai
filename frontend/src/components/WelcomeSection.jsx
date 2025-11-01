import { useUser } from "@clerk/clerk-react";
import { ArrowRightIcon, SparklesIcon, ZapIcon } from "lucide-react";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();

  return (
    <div className="relative overflow-hidden border-b border-base-300/50">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/90 to-secondary/90 flex items-center justify-center shadow-sm">
                <SparklesIcon className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Welcome back, {user?.firstName || "there"}!
              </h1>
            </div>
            <p className="text-base md:text-lg text-base-content/50 ml-13 md:ml-13">
              Ready to level up your coding skills?
            </p>
          </div>
          <button
            onClick={onCreateSession}
            className="group px-6 py-3 md:px-8 md:py-3.5 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-2.5">
              <ZapIcon className="w-5 h-5" />
              <span>Create Session</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
