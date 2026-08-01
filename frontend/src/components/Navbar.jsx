import { Link, useLocation } from "react-router";
import { BookOpenIcon, LayoutDashboardIcon, SparklesIcon, MicIcon, FileTextIcon, FileSearchIcon } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="glass-panel sticky top-4 z-50 mx-auto max-w-7xl rounded-2xl my-4 border border-white/10">
      <div className="px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="group flex items-center gap-3"
        >
          <div className="size-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
            <SparklesIcon className="size-6 text-white group-hover:scale-110 transition-transform" />
          </div>

          <div className="flex flex-col">
            <span className="font-black text-lg bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-wide">
              DevPrep.ai
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-base-content/50">Code Together</span>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          {/* PROBLEMS PAGE LINK */}
          <Link
            to={"/problems"}
            className={`px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium flex items-center gap-2
              ${isActive("/problems")
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "hover:bg-white/5 text-base-content/70 hover:text-white"
              }
              `}
          >
            <BookOpenIcon className="size-4" />
            <span className="hidden sm:inline">Problems</span>
          </Link>

          {/* AI INTERVIEW PAGE LINK */}
          <Link
            to={"/ai-interview"}
            className={`px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium flex items-center gap-2
              ${isActive("/ai-interview") || isActive("/interview/")
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "hover:bg-white/5 text-base-content/70 hover:text-white"
              }
              `}
          >
            <MicIcon className="size-4" />
            <span className="hidden sm:inline">AI Interview</span>
          </Link>

          {/* RESUME BUILDER PAGE LINK */}
          <Link
            to={"/resume-builder"}
            className={`px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium flex items-center gap-2
              ${isActive("/resume-builder")
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "hover:bg-white/5 text-base-content/70 hover:text-white"
              }
              `}
          >
            <FileTextIcon className="size-4" />
            <span className="hidden sm:inline">Resume Builder</span>
          </Link>

          {/* RESUME ANALYZER PAGE LINK */}
          <Link
            to={"/resume-analyzer"}
            className={`px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium flex items-center gap-2
              ${isActive("/resume-analyzer")
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "hover:bg-white/5 text-base-content/70 hover:text-white"
              }
              `}
          >
            <FileSearchIcon className="size-4" />
            <span className="hidden sm:inline">Resume Analyzer</span>
          </Link>

          {/* DASHBOARD PAGE LINK */}
          <Link
            to={"/dashboard"}
            className={`px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium flex items-center gap-2
              ${isActive("/dashboard")
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "hover:bg-white/5 text-base-content/70 hover:text-white"
              }
              `}
          >
            <LayoutDashboardIcon className="size-4" />
            <span className="hidden sm:inline">Dashboard</span>
          </Link>

          <div className="ml-4 pl-4 border-l border-white/10">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "size-9 border-2 border-primary/20",
                }
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
