import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { PROBLEMS } from "../data/problems";
import { ChevronRightIcon, Code2Icon, BrainCircuitIcon, CheckCircleIcon } from "lucide-react"; // Added CheckCircleIcon
import { getDifficultyBadgeClass } from "../lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";

function ProblemsPage() {
  const { getToken } = useAuth();
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const problems = Object.values(PROBLEMS);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axiosInstance.get("/user/me");
        setUserProfile(res.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [getToken]); // Dependency on getToken ensures auth is ready

  const solvedProblemIds = userProfile?.solvedProblems || [];

  const easyProblemsCount = problems.filter((p) => p.difficulty === "Easy").length;
  const mediumProblemsCount = problems.filter((p) => p.difficulty === "Medium").length;
  const hardProblemsCount = problems.filter((p) => p.difficulty === "Hard").length;

  const solvedEasy = problems.filter((p) => p.difficulty === "Easy" && solvedProblemIds.includes(p.id)).length;
  const solvedMedium = problems.filter((p) => p.difficulty === "Medium" && solvedProblemIds.includes(p.id)).length;
  const solvedHard = problems.filter((p) => p.difficulty === "Hard" && solvedProblemIds.includes(p.id)).length;
  const totalSolved = solvedProblemIds.length;


  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="loading loading-spinner loading-lg text-primary"></div>
          <p className="animate-pulse text-base-content/60">Loading problems...</p>
        </div>
      </div>
    )
  }

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

        {/* PROGRESS DASHBOARD */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Total Solved", value: totalSolved, total: problems.length, color: "text-white", bg: "bg-white/5", border: "border-white/10" },
            { label: "Easy", value: solvedEasy, total: easyProblemsCount, color: "text-success", bg: "bg-success/5", border: "border-success/10" },
            { label: "Medium", value: solvedMedium, total: mediumProblemsCount, color: "text-warning", bg: "bg-warning/5", border: "border-warning/10" },
            { label: "Hard", value: solvedHard, total: hardProblemsCount, color: "text-error", bg: "bg-error/5", border: "border-error/10" }
          ].map((stat, idx) => (
            <div key={idx} className={`glass-card p-5 rounded-3xl border ${stat.border} ${stat.bg} flex flex-col items-center justify-center relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className={`text-4xl font-black ${stat.color} mb-1 relative z-10`}>{stat.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-base-content/50 relative z-10 mb-2">{stat.label}</div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-black/20 rounded-full overflow-hidden relative z-10 max-w-[80%]">
                <div
                  className={`h-full rounded-full ${stat.color.replace('text-', 'bg-')} transition-all duration-1000 ease-out`}
                  style={{ width: `${(stat.value / (stat.total || 1)) * 100}%` }}
                />
              </div>
              <div className="text-[10px] text-base-content/40 mt-1 relative z-10">
                {stat.value} / {stat.total}
              </div>
            </div>
          ))}
        </div>

        {/* PROBLEMS LIST */}
        <div className="grid gap-4">
          {problems.map((problem) => {
            const isSolved = solvedProblemIds.includes(problem.id);

            return (
              <Link
                key={problem.id}
                to={`/problem/${problem.id}`}
                className={`group glass-card p-0 rounded-2xl transition-all duration-300 border hover:scale-[1.01] active:scale-[0.99] relative overflow-hidden ${isSolved ? 'border-success/20 bg-success/5' : 'border-white/5'
                  }`}
              >
                {isSolved && (
                  <div className="absolute top-0 right-0 p-4 z-10">
                    <div className="badge badge-success gap-1 font-bold border-0 shadow-lg shadow-success/20">
                      <CheckCircleIcon className="size-3" />
                      Solved
                    </div>
                  </div>
                )}

                <div className="p-6 flex items-center justify-between gap-6">
                  {/* LEFT SIDE */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-4">
                      <div className={`size-12 rounded-xl flex items-center justify-center border transition-colors ${isSolved ? 'bg-success/10 border-success/20' : 'bg-gradient-to-br from-primary/10 to-secondary/10 border-white/5 group-hover:border-primary/20'
                        }`}>
                        {isSolved ? (
                          <CheckCircleIcon className="size-6 text-success" />
                        ) : (
                          <Code2Icon className="size-6 text-primary group-hover:text-white transition-colors" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h2 className={`text-xl font-bold transition-colors truncate ${isSolved ? 'text-success' : 'text-white group-hover:text-primary'
                            }`}>
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
                    <span className={`text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300 ${isSolved ? 'text-success' : 'text-primary'}`}>
                      {isSolved ? 'Practice Again' : 'Solve Challenge'}
                    </span>
                    <div className={`size-10 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:rotate-[-45deg] ${isSolved ? 'bg-success text-white' : 'bg-white/5 group-hover:bg-primary group-hover:text-white'
                      }`}>
                      <ChevronRightIcon className="size-5" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default ProblemsPage;
