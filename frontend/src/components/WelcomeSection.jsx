import { useUser } from "@clerk/clerk-react";
import { ArrowRightIcon, ZapIcon } from "lucide-react";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();

  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight">
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{user?.firstName || "there"}!</span>
            <span className="inline-block animate-wave ml-2">👋</span>
          </h1>
          <p className="text-base md:text-lg text-base-content/60">
            Ready to crush your next interview? You've got this.
          </p>
        </div>
        <button
          onClick={onCreateSession}
          className="group px-6 py-4 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
        >
          <div className="flex items-center gap-3">
            <div className="p-1 bg-white/20 rounded-lg">
              <ZapIcon className="w-5 h-5 fill-current" />
            </div>
            <span>Start New Session</span>
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default WelcomeSection;
