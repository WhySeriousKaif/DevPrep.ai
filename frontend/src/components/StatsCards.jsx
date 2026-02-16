import { TrophyIcon, UsersIcon } from "lucide-react";

function StatsCards({ activeSessionsCount, recentSessionsCount }) {
  return (
    <div className="lg:col-span-1 grid grid-cols-1 gap-6 h-full">
      {/* Active Count */}
      <div className="glass-panel p-6 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 border border-white/5">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <UsersIcon className="size-20 text-primary transform rotate-12" />
        </div>

        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
            <UsersIcon className="size-6 text-primary" />
          </div>
          <div className="badge badge-primary badge-sm animate-pulse bg-primary/20 text-primary border-primary/20">Live</div>
        </div>

        <div className="text-4xl font-black text-white mb-1 neon-text-primary relative z-10">
          {activeSessionsCount}
        </div>
        <div className="text-sm text-base-content/60 font-medium relative z-10">Active Sessions</div>
      </div>

      {/* Recent Count */}
      <div className="glass-panel p-6 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 border border-white/5">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <TrophyIcon className="size-20 text-secondary transform -rotate-12" />
        </div>

        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="p-3 bg-secondary/10 rounded-2xl border border-secondary/20">
            <TrophyIcon className="size-6 text-secondary" />
          </div>
        </div>

        <div className="text-4xl font-black text-white mb-1 relative z-10" style={{ textShadow: "0 0 10px rgba(6, 182, 212, 0.5)" }}>
          {recentSessionsCount}
        </div>
        <div className="text-sm text-base-content/60 font-medium relative z-10">Total Sessions</div>
      </div>
    </div>
  );
}

export default StatsCards;
