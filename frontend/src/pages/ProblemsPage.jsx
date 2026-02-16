import { Link } from "react-router";
import Navbar from "../components/Navbar";

import { PROBLEMS } from "../data/problems";
import { ChevronRightIcon, Code2Icon, BrainCircuitIcon, TrophyIcon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemsPage() {
  const problems = Object.values(PROBLEMS);

  const easyProblemsCount = problems.filter((p) => p.difficulty === "Easy").length;
  const mediumProblemsCount = problems.filter((p) => p.difficulty === "Medium").length;
  const hardProblemsCount = problems.filter((p) => p.difficulty === "Hard").length;

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white relative overflow-hidden">
      {/* BACKGROUND BLOBS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-float-delayed" />
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        {/* HEADER */}
        <div className="mb-10 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[100px] -z-10" />

          <div className="inline-block p-4 rounded-3xl bg-white/5 border border-white/10 mb-6 backdrop-blur-md shadow-2xl">
            <BrainCircuitIcon className="size-12 text-primary" />
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Practice <span className="neon-text-primary text-white">Problems</span>
          </h1>
          <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
            Sharpen your coding skills with our curated collection of algorithm challenges.
            Level up your expertise one problem at a time.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Total", value: problems.length, color: "text-white", bg: "bg-white/5", border: "border-white/10" },
            { label: "Easy", value: easyProblemsCount, color: "text-success", bg: "bg-success/5", border: "border-success/10" },
            { label: "Medium", value: mediumProblemsCount, color: "text-warning", bg: "bg-warning/5", border: "border-warning/10" },
            { label: "Hard", value: hardProblemsCount, color: "text-error", bg: "bg-error/5", border: "border-error/10" }
          ].map((stat, idx) => (
            <div key={idx} className={`glass-card p-4 rounded-2xl border ${stat.border} ${stat.bg} flex flex-col items-center justify-center`}>
              <div className={`text-3xl font-black ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-base-content/50">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* PROBLEMS LIST */}
        <div className="grid gap-4">
          {problems.map((problem) => (
            <Link
              key={problem.id}
              to={`/problem/${problem.id}`}
              className="group glass-card p-0 rounded-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 border border-white/5"
            >
              <div className="p-6 flex items-center justify-between gap-6">
                {/* LEFT SIDE */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border border-white/5 group-hover:border-primary/20 transition-colors">
                      <Code2Icon className="size-6 text-primary group-hover:text-white transition-colors" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h2 className="text-xl font-bold text-white group-hover:text-primary transition-colors truncate">
                          {problem.title}
                        </h2>
                        <span className={`badge badge-sm font-bold border-0 ${getDifficultyBadgeClass(problem.difficulty)}`}>
                          {problem.difficulty.toUpperCase()}
                        </span>
                        <span className="text-xs text-base-content/40 font-medium px-2 py-0.5 rounded-full bg-white/5">
                          {problem.category}
                        </span>
                      </div>
                      <p className="text-sm text-base-content/60 line-clamp-2 group-hover:text-base-content/80 transition-colors">
                        {problem.description.text}
                      </p>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                    Solve Challenge
                  </span>
                  <div className="size-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-[-45deg]">
                    <ChevronRightIcon className="size-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProblemsPage;
