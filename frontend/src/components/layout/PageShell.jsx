import Navbar from "../Navbar";
import { cn } from "../../lib/utils";

const BG = (
  <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
    <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-primary/15 rounded-full blur-[80px] animate-float" />
    <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-secondary/15 rounded-full blur-[80px] animate-float-delayed" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[3rem_3rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
  </div>
);

export function PageShell({ children, className }) {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-white relative overflow-hidden">
      {BG}
      <Navbar />
      <div
        className={cn(
          "w-full max-w-[1180px] mx-auto px-3 sm:px-4 lg:px-5 py-3 sm:py-4 relative z-10",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function PageHeader({ icon, title, subtitle, action, badge }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
      <div className="flex items-center gap-2.5 min-w-0">
        <div className="size-8 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
          {icon}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="text-base sm:text-lg font-bold text-white truncate">
              {title}
            </h1>
            {badge}
          </div>
          {subtitle && (
            <p className="text-[11px] sm:text-xs text-base-content/50 truncate">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function Panel({ children, className, padding = "p-4" }) {
  return (
    <div
      className={cn(
        "glass-panel rounded-xl border border-white/5",
        padding,
        className,
      )}
    >
      {children}
    </div>
  );
}
