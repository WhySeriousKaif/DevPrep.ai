import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import {
  BrainCircuitIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
  YoutubeIcon,
  StarIcon,
  ExternalLinkIcon,
  ShuffleIcon,
} from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";
import { userApi } from "../api/user";
import { BLIND75_CATEGORIES, BLIND75_ALL, leetcodeUrl, youtubeSearchUrl } from "../data/blind75";

const DIFFICULTY_OPTIONS = ["All", "Easy", "Medium", "Hard"];

function ProblemsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [solvedIds, setSolvedIds] = useState([]);
  const [revisionIds, setRevisionIds] = useState([]);
  const [expanded, setExpanded] = useState(() => new Set());
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");

  useEffect(() => {
    userApi
      .getMe()
      .then((user) => {
        setSolvedIds(user.solvedProblems || []);
        setRevisionIds(user.revisionProblems || []);
      })
      .catch(() => toast.error("Couldn't load your progress"))
      .finally(() => setIsLoading(false));
  }, []);

  const toggleCategory = (name) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const toggleSolved = async (problemId) => {
    const wasSolved = solvedIds.includes(problemId);
    setSolvedIds((prev) => (wasSolved ? prev.filter((id) => id !== problemId) : [...prev, problemId]));
    try {
      await userApi.toggleSolved(problemId);
    } catch {
      setSolvedIds((prev) => (wasSolved ? [...prev, problemId] : prev.filter((id) => id !== problemId)));
      toast.error("Couldn't update — try again");
    }
  };

  const toggleRevision = async (problemId) => {
    const wasMarked = revisionIds.includes(problemId);
    setRevisionIds((prev) => (wasMarked ? prev.filter((id) => id !== problemId) : [...prev, problemId]));
    try {
      await userApi.toggleRevision(problemId);
    } catch {
      setRevisionIds((prev) => (wasMarked ? [...prev, problemId] : prev.filter((id) => id !== problemId)));
      toast.error("Couldn't update — try again");
    }
  };

  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();
    return BLIND75_CATEGORIES.map((cat) => ({
      ...cat,
      problems: cat.problems.filter(
        (p) =>
          (difficulty === "All" || p.difficulty === difficulty) &&
          (!query || p.name.toLowerCase().includes(query))
      ),
    })).filter((cat) => cat.problems.length > 0);
  }, [search, difficulty]);

  const easyTotal = BLIND75_ALL.filter((p) => p.difficulty === "Easy").length;
  const mediumTotal = BLIND75_ALL.filter((p) => p.difficulty === "Medium").length;
  const hardTotal = BLIND75_ALL.filter((p) => p.difficulty === "Hard").length;
  const easySolved = BLIND75_ALL.filter((p) => p.difficulty === "Easy" && solvedIds.includes(p.id)).length;
  const mediumSolved = BLIND75_ALL.filter((p) => p.difficulty === "Medium" && solvedIds.includes(p.id)).length;
  const hardSolved = BLIND75_ALL.filter((p) => p.difficulty === "Hard" && solvedIds.includes(p.id)).length;
  const totalSolved = solvedIds.length;
  const overallPct = Math.round((totalSolved / BLIND75_ALL.length) * 100);

  const handleRandomProblem = () => {
    const pool = filteredCategories.flatMap((c) => c.problems);
    if (pool.length === 0) {
      toast.error("No problems match your current filters");
      return;
    }
    const pick = pool[Math.floor(Math.random() * pool.length)];
    toast.success(`Picked: ${pick.name}`);
    window.open(leetcodeUrl(pick.id), "_blank", "noopener,noreferrer");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="loading loading-spinner loading-lg text-primary"></div>
          <p className="animate-pulse text-base-content/60">Loading problems...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-float-delayed" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        {/* HEADER */}
        <div className="glass-panel rounded-3xl p-6 md:p-8 mb-6 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <BrainCircuitIcon className="size-8 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-white">
                  Blind 75 <span className="neon-text-primary text-white">LeetCode Problems</span>
                </h1>
                <p className="text-sm text-base-content/60 mt-1">
                  The 75 most-asked interview questions, curated and tracked.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleRandomProblem}
              className="px-4 py-2.5 rounded-xl border border-white/10 text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2 text-sm font-medium shrink-0"
            >
              <ShuffleIcon className="size-4" />
              Random Problem
            </button>
          </div>

          {/* Search + Difficulty filter */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-white/30" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search problems..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder:text-white/20"
              />
            </div>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white cursor-pointer"
            >
              {DIFFICULTY_OPTIONS.map((d) => (
                <option key={d} value={d} className="bg-base-200">
                  {d === "All" ? "All Difficulties" : d}
                </option>
              ))}
            </select>
          </div>

          {/* Overall progress */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-white/5">
            <div className="relative size-20 shrink-0 flex items-center justify-center overflow-visible">
              <svg width={80} height={80} className="-rotate-90">
                <circle cx={40} cy={40} r={34} strokeWidth={8} className="stroke-white/10 fill-none" />
                <circle
                  cx={40}
                  cy={40}
                  r={34}
                  strokeWidth={8}
                  strokeDasharray={2 * Math.PI * 34}
                  strokeDashoffset={2 * Math.PI * 34 * (1 - overallPct / 100)}
                  strokeLinecap="round"
                  className="fill-none stroke-primary transition-all duration-700"
                />
              </svg>
              <span className="absolute text-lg font-black text-white">{overallPct}%</span>
            </div>

            <div className="flex-1 w-full">
              <p className="text-sm text-white/60 mb-1">
                Overall Progress — <span className="text-white font-bold">{totalSolved} / {BLIND75_ALL.length}</span>
              </p>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-700"
                  style={{ width: `${overallPct}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm shrink-0">
              <span className="flex items-center gap-1.5 text-success">
                <span className="size-2 rounded-full bg-success" /> Easy {easySolved}/{easyTotal}
              </span>
              <span className="flex items-center gap-1.5 text-warning">
                <span className="size-2 rounded-full bg-warning" /> Medium {mediumSolved}/{mediumTotal}
              </span>
              <span className="flex items-center gap-1.5 text-error">
                <span className="size-2 rounded-full bg-error" /> Hard {hardSolved}/{hardTotal}
              </span>
            </div>
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="space-y-3">
          {filteredCategories.map((cat) => {
            const isOpen = expanded.has(cat.name);
            const catSolved = cat.problems.filter((p) => solvedIds.includes(p.id)).length;

            return (
              <div key={cat.name} className="glass-panel rounded-2xl border border-white/5 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleCategory(cat.name)}
                  className="w-full flex items-center justify-between gap-4 p-5 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {isOpen ? (
                      <ChevronDownIcon className="size-4 text-white/50" />
                    ) : (
                      <ChevronRightIcon className="size-4 text-white/50" />
                    )}
                    <span className="font-bold text-white">{cat.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="hidden sm:block w-32 h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${(catSolved / cat.problems.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-white/40 font-medium">
                      {catSolved} / {cat.problems.length}
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-white/5">
                    {cat.problems.map((problem) => {
                      const isSolved = solvedIds.includes(problem.id);
                      const isMarked = revisionIds.includes(problem.id);
                      return (
                        <div
                          key={problem.id}
                          className={`flex items-center gap-4 px-5 py-3.5 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors ${
                            isSolved ? "bg-success/5" : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isSolved}
                            onChange={() => toggleSolved(problem.id)}
                            className="checkbox checkbox-sm checkbox-primary shrink-0"
                          />

                          <a
                            href={leetcodeUrl(problem.id)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 min-w-0 flex items-center gap-2 text-sm font-medium truncate transition-colors ${
                              isSolved ? "text-success" : "text-white hover:text-primary"
                            }`}
                          >
                            <span className="truncate">{problem.name}</span>
                            <ExternalLinkIcon className="size-3.5 shrink-0 opacity-40" />
                          </a>

                          <a
                            href={youtubeSearchUrl(problem.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Video solution"
                            className="shrink-0 p-1.5 rounded-lg text-white/40 hover:text-error hover:bg-white/5 transition-colors"
                          >
                            <YoutubeIcon className="size-4" />
                          </a>

                          <button
                            type="button"
                            onClick={() => toggleRevision(problem.id)}
                            title="Mark for revision"
                            className={`shrink-0 p-1.5 rounded-lg transition-colors ${
                              isMarked ? "text-warning" : "text-white/30 hover:text-warning hover:bg-white/5"
                            }`}
                          >
                            <StarIcon className={`size-4 ${isMarked ? "fill-warning" : ""}`} />
                          </button>

                          <span
                            className={`badge badge-sm font-bold border-0 shrink-0 ${getDifficultyBadgeClass(
                              problem.difficulty
                            )}`}
                          >
                            {problem.difficulty.toUpperCase()}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {filteredCategories.length === 0 && (
            <div className="glass-panel rounded-2xl p-10 text-center text-white/40">
              No problems match your search/filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProblemsPage;
