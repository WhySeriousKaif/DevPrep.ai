import Navbar from "../Navbar";
import { cn } from "../../lib/utils";

export const PageBackground = (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:48px_48px]" />
    <div className="absolute top-0 -left-4 size-96 bg-primary opacity-20 blur-[100px] animate-float" />
    <div className="absolute bottom-0 -right-4 size-96 bg-secondary opacity-20 blur-[100px] animate-float-delayed" />
  </div>
);

export function PageShell({ children, className }) {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-white relative overflow-hidden">
      {PageBackground}
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
