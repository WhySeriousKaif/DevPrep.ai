import { TrophyIcon, UsersIcon } from "lucide-react";



function StatsCards({ activeSessionsCount, recentSessionsCount }) {
  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Active Count */}
      <div className="glass-panel p-5 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 border border-white/5 flex-1 flex flex-col justify-center">
        <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
          <UsersIcon className="size-16 text-primary transform rotate-12" />
        </div>

        <div className="flex items-center justify-between mb-2 relative z-10">
          <div className="p-2 bg-primary/10 rounded-xl border border-primary/20">
            <UsersIcon className="size-5 text-primary" />
          </div>
          <div className="badge badge-primary badge-xs animate-pulse bg-primary/20 text-primary border-primary/20 px-2 py-2">Live</div>
        </div>

        <div className="text-3xl font-black text-white mb-0.5 neon-text-primary relative z-10">
          {activeSessionsCount}
        </div>
        <div className="text-xs text-base-content/60 font-medium relative z-10 uppercase tracking-wider">Active Sessions</div>
      </div>

      {/* Recent Count */}
      <div className="glass-panel p-5 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 border border-white/5 flex-1 flex flex-col justify-center">
        <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
          <TrophyIcon className="size-16 text-secondary transform -rotate-12" />
        </div>

        <div className="flex items-center justify-between mb-2 relative z-10">
          <div className="p-2 bg-secondary/10 rounded-xl border border-secondary/20">
            <TrophyIcon className="size-5 text-secondary" />
          </div>
        </div>

        <div className="text-3xl font-black text-white mb-0.5 relative z-10" style={{ textShadow: "0 0 10px rgba(6, 182, 212, 0.5)" }}>
          {recentSessionsCount}
        </div>
        <div className="text-xs text-base-content/60 font-medium relative z-10 uppercase tracking-wider">Total Sessions</div>
      </div>
    </div>
  );
}

export default StatsCards;
