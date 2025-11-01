import { TrophyIcon, UsersIcon } from "lucide-react";

function StatsCards({ activeSessionsCount, recentSessionsCount }) {
  return (
    <div className="lg:col-span-1 grid grid-cols-1 gap-3 md:gap-4">
      {/* Active Count */}
      <div className="bg-base-100/80 backdrop-blur-sm border border-primary/10 hover:border-primary/20 rounded-xl p-4 md:p-5 transition-all duration-200 hover:shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 bg-primary/5 rounded-lg">
            <UsersIcon className="w-5 h-5 text-primary" />
          </div>
          <div className="badge badge-primary badge-sm text-xs">Live</div>
        </div>
        <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{activeSessionsCount}</div>
        <div className="text-xs md:text-sm text-base-content/50 font-medium">Active Sessions</div>
      </div>

      {/* Recent Count */}
      <div className="bg-base-100/80 backdrop-blur-sm border border-secondary/10 hover:border-secondary/20 rounded-xl p-4 md:p-5 transition-all duration-200 hover:shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 bg-secondary/5 rounded-lg">
            <TrophyIcon className="w-5 h-5 text-secondary" />
          </div>
        </div>
        <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">{recentSessionsCount}</div>
        <div className="text-xs md:text-sm text-base-content/50 font-medium">Total Sessions</div>
      </div>
    </div>
  );
}

export default StatsCards;
