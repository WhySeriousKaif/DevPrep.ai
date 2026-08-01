import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
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
import {
  BLIND75_CATEGORIES,
  BLIND75_ALL,
  leetcodeUrl,
  youtubeSearchUrl,
} from "../data/blind75";
import { PageShell, PageHeader, Panel } from "../components/layout/PageShell";

const DIFFICULTY_OPTIONS = ["All", "Easy", "Medium", "Hard"];

function ProblemsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [solvedIds, setSolvedIds] = useState([]);
  const [revisionIds, setRevisionIds] = useState([]);
  const [expanded, setExpanded] = useState(
    () => new Set(BLIND75_CATEGORIES.slice(0, 2).map((c) => c.name)),
  );
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
    setSolvedIds((prev) =>
      wasSolved ? prev.filter((id) => id !== problemId) : [...prev, problemId],
    );
    try {
      await userApi.toggleSolved(problemId);
    } catch {
      setSolvedIds((prev) =>
        wasSolved
          ? [...prev, problemId]
          : prev.filter((id) => id !== problemId),
      );
      toast.error("Couldn't update — try again");
    }
  };

  const toggleRevision = async (problemId) => {
    const wasMarked = revisionIds.includes(problemId);
    setRevisionIds((prev) =>
      wasMarked ? prev.filter((id) => id !== problemId) : [...prev, problemId],
    );
    try {
      await userApi.toggleRevision(problemId);
    } catch {
      setRevisionIds((prev) =>
        wasMarked
          ? [...prev, problemId]
          : prev.filter((id) => id !== problemId),
      );
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
          (!query || p.name.toLowerCase().includes(query)),
      ),
    })).filter((cat) => cat.problems.length > 0);
  }, [search, difficulty]);

  const easyTotal = BLIND75_ALL.filter((p) => p.difficulty === "Easy").length;
  const mediumTotal = BLIND75_ALL.filter(
    (p) => p.difficulty === "Medium",
  ).length;
  const hardTotal = BLIND75_ALL.filter((p) => p.difficulty === "Hard").length;
  const easySolved = BLIND75_ALL.filter(
    (p) => p.difficulty === "Easy" && solvedIds.includes(p.id),
  ).length;
  const mediumSolved = BLIND75_ALL.filter(
    (p) => p.difficulty === "Medium" && solvedIds.includes(p.id),
  ).length;
  const hardSolved = BLIND75_ALL.filter(
    (p) => p.difficulty === "Hard" && solvedIds.includes(p.id),
  ).length;
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
      <PageShell className="flex items-center justify-center min-h-[60vh]">
        <div className="loading loading-spinner loading-md text-primary" />
      </PageShell>
    );
  }

  return (
    <PageShell>
      <PageHeader
        icon={<BrainCircuitIcon className="size-4 text-primary" />}
        title="Blind 75 Problems"
        subtitle={`${totalSolved}/${BLIND75_ALL.length} solved · ${overallPct}% complete`}
        action={
          <button
            type="button"
            onClick={handleRandomProblem}
            className="btn btn-ghost btn-sm h-8 min-h-0 text-xs gap-1.5 border border-white/10"
          >
            <ShuffleIcon className="size-3.5" />
            Random
          </button>
        }
      />

      <div className="mx-auto w-full max-w-[1240px] grid grid-cols-1 xl:grid-cols-12 gap-5">
        {/* Sidebar: filters + progress */}
        <div className="xl:col-span-4 space-y-4">
          <Panel padding="p-6" className="min-h-0">
            <p className="text-base uppercase tracking-wider text-base-content/40 mb-4">
              Progress
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="relative size-14 shrink-0">
                <svg width={56} height={56} className="-rotate-90">
                  <circle
                    cx={28}
                    cy={28}
                    r={22}
                    strokeWidth={5}
                    className="stroke-white/10 fill-none"
                  />
                  <circle
                    cx={28}
                    cy={28}
                    r={22}
                    strokeWidth={5}
                    strokeDasharray={2 * Math.PI * 22}
                    strokeDashoffset={2 * Math.PI * 22 * (1 - overallPct / 100)}
                    strokeLinecap="round"
                    className="fill-none stroke-primary"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-black text-white">
                  {overallPct}%
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-primary to-secondary"
                    style={{ width: `${overallPct}%` }}
                  />
                </div>
                <div className="flex flex-wrap gap-3 mt-3 text-sm">
                  <span className="text-success">
                    E {easySolved}/{easyTotal}
                  </span>
                  <span className="text-warning">
                    M {mediumSolved}/{mediumTotal}
                  </span>
                  <span className="text-error">
                    H {hardSolved}/{hardTotal}
                  </span>
                </div>
              </div>
            </div>
          </Panel>

          <Panel padding="p-5 space-y-4">
            <p className="text-base uppercase tracking-wider text-base-content/40">
              Filters
            </p>
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-white/30" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full pl-8 pr-3 py-3 text-sm rounded-2xl bg-white/5 border border-white/10 focus:border-primary text-white placeholder:text-white/30"
              />
            </div>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full px-5 py-3 text-base rounded-2xl bg-white/5 border border-white/10 text-white cursor-pointer"
            >
              {DIFFICULTY_OPTIONS.map((d) => (
                <option key={d} value={d} className="bg-base-200">
                  {d === "All" ? "All Difficulties" : d}
                </option>
              ))}
            </select>
          </Panel>
        </div>

        {/* Main problem list */}
        <div className="xl:col-span-8 space-y-3">
          {filteredCategories.map((cat) => {
            const isOpen = expanded.has(cat.name);
            const catSolved = cat.problems.filter((p) =>
              solvedIds.includes(p.id),
            ).length;

            return (
              <Panel key={cat.name} padding="p-0" className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleCategory(cat.name)}
                  className="w-full flex items-center justify-between gap-3 px-3 py-2.5 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {isOpen ? (
                      <ChevronDownIcon className="size-4 text-white/50 shrink-0" />
                    ) : (
                      <ChevronRightIcon className="size-4 text-white/50 shrink-0" />
                    )}
                    <span className="text-lg font-semibold text-white truncate">
                      {cat.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="hidden sm:block w-20 h-1 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{
                          width: `${(catSolved / cat.problems.length) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-sm text-white/50">
                      {catSolved}/{cat.problems.length}
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
                          className={`flex items-center gap-3 px-4 py-3 border-b border-white/5 last:border-0 hover:bg-white/5 text-sm ${
                            isSolved ? "bg-success/5" : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isSolved}
                            onChange={() => toggleSolved(problem.id)}
                            className="checkbox checkbox-xs checkbox-primary shrink-0"
                          />
                          <a
                            href={leetcodeUrl(problem.id)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 min-w-0 truncate font-semibold ${
                              isSolved
                                ? "text-success"
                                : "text-white hover:text-primary"
                            }`}
                          >
                            {problem.name}
                          </a>
                          <a
                            href={youtubeSearchUrl(problem.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 text-white/30 hover:text-error shrink-0"
                          >
                            <YoutubeIcon className="size-3.5" />
                          </a>
                          <button
                            type="button"
                            onClick={() => toggleRevision(problem.id)}
                            className={`p-2.5 shrink-0 ${isMarked ? "text-warning" : "text-white/30 hover:text-warning"}`}
                          >
                            <StarIcon
                              className={`size-4 ${isMarked ? "fill-warning" : ""}`}
                            />
                          </button>
                          <a
                            href={leetcodeUrl(problem.id)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-white/30 hover:text-white shrink-0"
                          >
                            <ExternalLinkIcon className="size-4" />
                          </a>
                          <span
                            className={`badge badge-sm border-0 shrink-0 ${getDifficultyBadgeClass(problem.difficulty)}`}
                          >
                            {problem.difficulty[0]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </Panel>
            );
          })}

          {filteredCategories.length === 0 && (
            <Panel className="text-center text-white/40 text-sm py-8">
              No problems match your search/filter.
            </Panel>
          )}
        </div>
      </div>
    </PageShell>
  );
}

export default ProblemsPage;
