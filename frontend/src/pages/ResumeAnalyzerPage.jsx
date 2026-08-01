import { useEffect, useState } from "react";
import {
  FileSearchIcon,
  UploadCloudIcon,
  Loader2Icon,
  RefreshCwIcon,
  UserIcon,
  ThumbsUpIcon,
  AlertTriangleIcon,
  ZapIcon,
  TrendingUpIcon,
  CheckCircle2Icon,
  ChevronDownIcon,
  BookOpenIcon,
  UsersIcon,
} from "lucide-react";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import ScoreRing from "../components/ScoreRing";
import { resumeAnalyzerApi } from "../api/resumeAnalyzer";

function ResumeAnalyzerPage() {
  const [loading, setLoading] = useState(true);
  const [analyzing, setAnalyzing] = useState(false);
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [showUpload, setShowUpload] = useState(false);
  const RESUME_CACHE_KEY = "devprep.resumeAnalysis";

  useEffect(() => {
    const cached = localStorage.getItem(RESUME_CACHE_KEY);
    if (cached) {
      try {
        setData(JSON.parse(cached));
        setShowUpload(false);
      } catch (error) {
        // ignore invalid cache
      }
    }

    const loadAnalysis = async () => {
      try {
        const res = await resumeAnalyzerApi.getMyAnalysis();
        setData(res.data);
        localStorage.setItem(RESUME_CACHE_KEY, JSON.stringify(res.data));
        setShowUpload(false);
      } catch (error) {
        const cachedOnFail = localStorage.getItem(RESUME_CACHE_KEY);
        if (cachedOnFail) {
          try {
            setData(JSON.parse(cachedOnFail));
            setShowUpload(false);
            toast("Loaded your last resume analysis from browser cache.");
          } catch (cacheError) {
            setShowUpload(true);
          }
        } else {
          setShowUpload(true);
        }
      } finally {
        setLoading(false);
      }
    };

    loadAnalysis();
  }, []);

  const strengths = (data?.strengths || []).map((item, index) => {
    const title =
      typeof item === "string" ? item : item.title || item.issue || "Strength";
    const summary =
      typeof item === "string"
        ? item
        : item.summary ||
        item.description ||
        "This strength boosts your resume relevance.";
    const detail =
      typeof item === "string"
        ? `Example: Turn this into a stronger bullet by explaining the impact, such as “Improved deployment speed by 30% using automated CI/CD pipelines.”`
        : item.detail ||
        item.explanation ||
        `This shows why “${title}” is a strong signal for recruiters and ATS matching.`;
    return { id: index, title, summary, detail };
  });

  const weaknesses = (data?.weaknesses || []).map((item, index) => {
    const title =
      typeof item === "string" ? item : item.title || item.issue || "Weakness";
    const summary =
      typeof item === "string"
        ? item
        : item.reason ||
        item.explanation ||
        "This area may reduce your resume impact if left vague.";
    const fix =
      typeof item === "string"
        ? `Example: Rewrite this as a result-driven statement, for example “Led feature rollouts that improved system stability by 25%.”`
        : item.suggestedFix ||
        item.fix ||
        `Example: Rewrite “${title}” using concrete results, tools, and role-focused language.`;
    return { id: index, title, summary, fix };
  });

  const careerMatches = data?.careerMatch ||
    data?.careerMatches || [
      { title: "Backend Developer", score: 92 },
      { title: "Full Stack", score: 89 },
      { title: "Software Engineer", score: 85 },
      { title: "DevOps", score: 72 },
      { title: "AI Engineer", score: 65 },
    ];

  const atsBreakdown = data?.ats ||
    data?.atsBreakdown || {
    Formatting: 86,
    Keywords: 79,
    Projects: 92,
    Experience: 88,
    Skills: 84,
    Education: 90,
  };

  const roadmapItems = data?.improvementRoadmap ||
    data?.improvement || [
      {
        priority: "High Priority",
        task: "Clarify technical accomplishments",
        impact: "Higher ATS visibility",
        time: "15 min",
      },
      {
        priority: "Medium Priority",
        task: "Strengthen project metrics",
        impact: "Better recruiter appeal",
        time: "20 min",
      },
      {
        priority: "Low Priority",
        task: "Add relevant keywords",
        impact: "Improved role match",
        time: "10 min",
      },
    ];

  const keywordGroups = [
    {
      label: "Present",
      items: data?.skills || [],
      style: "bg-success/10 text-success border-success/20",
    },
    {
      label: "Needs Improvement",
      items: weaknesses.slice(0, 6).map((item) => item.title),
      style: "bg-warning/10 text-warning border-warning/20",
    },
    {
      label: "Missing",
      items: data?.missingSkills || [],
      style: "bg-white/10 text-base-content border-white/10",
    },
  ];

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a PDF resume");
      return;
    }
    setAnalyzing(true);
    try {
      const res = await resumeAnalyzerApi.upload(file);
      setData(res.data);
      localStorage.setItem(RESUME_CACHE_KEY, JSON.stringify(res.data));
      setShowUpload(false);
      setFile(null);
      toast.success("Resume analyzed!");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Couldn't analyze that resume",
      );
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-float-delayed" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,0,0,1) 70%, transparent 100%)",
          }}
        />
      </div>

      <Navbar />

      <div className="mx-auto px-4 md:px-6 py-10 relative z-10 max-w-[1100px]">
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-black mb-0 tracking-tight">Resume Analyzer</h1>
          <p className="text-base text-base-content/60 max-w-2xl mx-auto">Upload your resume and get an ATS score built for tech roles — strengths, gaps, and what to fix.</p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2Icon className="size-8 animate-spin text-primary" />
          </div>
        ) : showUpload || !data ? (
          <div className="glass-panel rounded-4xl p-6 md:p-8 relative overflow-hidden border border-white/10 bg-slate-950/75 shadow-2xl shadow-primary/20 backdrop-blur-xl">
            <div className="absolute top-0 right-0 w-52 h-52 bg-primary/10 blur-[70px] -z-10" />
            <div className="absolute bottom-0 left-0 w-52 h-52 bg-secondary/10 blur-[70px] -z-10" />

            <label className="block cursor-pointer">
              <input
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0] || null)}
              />
              <div
                className={`rounded-2xl border-2 border-dashed p-8 text-center transition-all ${file
                  ? "border-primary/50 bg-primary/5"
                  : "border-white/15 hover:border-white/30 hover:bg-white/5"
                  }`}
              >
                <UploadCloudIcon className="size-10 mx-auto mb-4 text-white/40" />
                <p className="text-white font-medium">
                  {file ? file.name : "Click to upload your resume"}
                </p>
                <p className="text-xs text-white/40 mt-2">
                  PDF only &middot; max 20MB
                </p>
              </div>
            </label>

            <button
              type="button"
              onClick={handleUpload}
              disabled={!file || analyzing}
              className="w-full mt-6 px-6 py-4 btn-primary rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {analyzing ? (
                <>
                  <Loader2Icon className="size-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <FileSearchIcon className="size-5" />
                  Analyze Resume
                </>
              )}
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="glass-panel rounded-4xl p-6 md:p-7 border border-white/10 bg-slate-950/80 shadow-2xl shadow-primary/20 backdrop-blur-xl flex flex-col lg:flex-row items-center gap-5">
              <div className="flex-1 flex flex-col items-center lg:items-start gap-4">
                <div className="flex items-center justify-center rounded-3xl bg-slate-900/60 px-4 py-3 border border-white/10 gap-3">
                  <ScoreRing score={data.score} />
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-[0.35em] text-base-content/50">
                      ATS score
                    </p>
                    <p className="text-lg font-semibold text-white">
                      Resume performance
                    </p>
                  </div>
                </div>
                <div className="w-full text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-white/60 text-sm mb-1">
                    <UserIcon className="size-4" />
                    {data.name || "Candidate"}
                  </div>
                  {data.suggestedRole && (
                    <p className="text-lg font-bold text-white">
                      Best fit: {data.suggestedRole}
                    </p>
                  )}
                  {data.summary && (
                    <p className="text-sm text-white/70 mt-2 max-w-2xl">
                      {data.summary}
                    </p>
                  )}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowUpload(true)}
                className="px-4 py-3 rounded-3xl border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2 text-sm font-semibold shrink-0"
              >
                <RefreshCwIcon className="size-4" />
                Re-upload
              </button>
            </div>

            <div className="grid gap-4 xl:grid-cols-[1.2fr_0.95fr] items-start">
              <div className="space-y-4">
                <div className="glass-panel rounded-4xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-primary/10 order-2">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-base-content/50">
                        Strengths
                      </p>
                      <h2 className="text-2xl font-bold text-white">
                        Resume highlights
                      </h2>
                    </div>
                    <ThumbsUpIcon className="size-6 text-success" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {strengths.map((strength) => (
                      <div
                        key={strength.id}
                        className="rounded-4xl border border-white/10 bg-slate-900/80 p-5 shadow-sm"
                      >
                        <div className="flex items-start gap-4">
                          <span className="rounded-3xl bg-success/10 p-3 text-success shadow-inner">
                            <CheckCircle2Icon className="size-5" />
                          </span>
                          <div className="flex-1">
                            <p className="font-semibold text-white">
                              {strength.title}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-base-content/60">
                              {strength.summary}
                            </p>
                          </div>
                        </div>
                        <details className="mt-4 rounded-3xl bg-slate-950/70 p-4 text-sm text-base-content/60">
                          <summary className="cursor-pointer flex items-center gap-2 font-semibold text-primary">
                            Learn more
                            <ChevronDownIcon className="size-4" />
                          </summary>
                          <p className="mt-3 text-white/80">
                            {strength.detail}
                          </p>
                        </details>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-panel rounded-4xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-primary/10 order-1">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-base-content/50">
                        Weaknesses
                      </p>
                      <h2 className="text-2xl font-bold text-white">
                        Priority checklist
                      </h2>
                    </div>
                    <BookOpenIcon className="size-6 text-primary" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {roadmapItems.map((item, index) => (
                      <div
                        key={index}
                        className="rounded-4xl border border-white/10 bg-slate-900/80 p-4"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <span className="text-sm text-base-content/60">
                            {item.priority}
                          </span>
                          <span
                            className={`rounded-full px-3 py-1 text-[11px] font-semibold ${item.priority?.includes("High")
                              ? "bg-error/10 text-error"
                              : item.priority?.includes("Medium")
                                ? "bg-warning/10 text-warning"
                                : "bg-success/10 text-success"
                              }`}
                          >
                            {item.priority}
                          </span>
                        </div>
                        <p className="mt-3 text-base font-semibold text-white">
                          {item.task}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-3 text-sm text-base-content/60">
                          <span>{item.impact || "Expected impact"}</span>
                          <span>{item.time || "Estimated time"}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-4">
                  <div className="glass-panel rounded-4xl border border-white/5 bg-white/5 p-6 shadow-2xl">
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-base-content/50">
                          Weaknesses
                        </p>
                        <h2 className="text-xl font-bold text-white">
                          What to improve
                        </h2>
                      </div>
                      <AlertTriangleIcon className="size-5 text-warning" />
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {weaknesses.map((weakness) => (
                        <div
                          key={weakness.id}
                          className="rounded-3xl border border-white/10 bg-slate-950/60 p-5"
                        >
                          <div className="flex items-start gap-3">
                            <span className="rounded-2xl bg-warning/10 p-3 text-warning">
                              <AlertTriangleIcon className="size-4" />
                            </span>
                            <div className="flex-1">
                              <p className="font-semibold text-white">
                                {weakness.title}
                              </p>
                              <p className="mt-2 text-sm leading-6 text-base-content/60">
                                {weakness.summary}
                              </p>
                            </div>
                          </div>
                          <details className="mt-4 rounded-3xl bg-white/5 p-4 text-sm text-base-content/60">
                            <summary className="cursor-pointer flex items-center gap-2 font-semibold text-white">
                              Suggested fix
                              <ChevronDownIcon className="size-4" />
                            </summary>
                            <p className="mt-3">{weakness.fix}</p>
                          </details>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="glass-panel rounded-4xl border border-white/5 bg-white/5 p-6 shadow-2xl">
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-base-content/50">
                          Career match
                        </p>
                        <h2 className="text-xl font-bold text-white">
                          Role alignment
                        </h2>
                      </div>
                      <ZapIcon className="size-5 text-primary" />
                    </div>
                    <div className="space-y-4">
                      {careerMatches.map((match, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between text-sm text-base-content/60">
                            <span>{match.title}</span>
                            <span className="font-semibold text-white">
                              {match.score}%
                            </span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full bg-primary transition-all"
                              style={{ width: `${match.score}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass-panel rounded-4xl border border-white/5 bg-white/5 p-6 shadow-2xl">
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-base-content/50">
                          ATS breakdown
                        </p>
                        <h2 className="text-xl font-bold text-white">
                          Resume checklist
                        </h2>
                      </div>
                      <TrendingUpIcon className="size-5 text-secondary" />
                    </div>
                    <div className="space-y-4">
                      {Object.entries(atsBreakdown).map(([key, value]) => (
                        <div key={key} className="space-y-2">
                          <div className="flex items-center justify-between text-sm text-base-content/60">
                            <span>{key}</span>
                            <span className="font-semibold text-white">
                              {value}%
                            </span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full bg-secondary transition-all"
                              style={{ width: `${value}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass-panel rounded-4xl border border-white/5 bg-white/5 p-6 shadow-2xl">
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-base-content/50">
                          Keyword analysis
                        </p>
                        <h2 className="text-xl font-bold text-white">
                          Skills map
                        </h2>
                      </div>
                      <UsersIcon className="size-5 text-primary" />
                    </div>
                    <div className="divide-y divide-white/5">
                      {keywordGroups.map((group) => (
                        <div key={group.label} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                          <p className="w-24 shrink-0 text-xs uppercase tracking-[0.3em] text-base-content/40 pt-1">
                            {group.label}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {group.items.length > 0 ? (
                              group.items.slice(0, 12).map((tag, index) => (
                                <span
                                  key={index}
                                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${group.style}`}
                                >
                                  {tag}
                                </span>
                              ))
                            ) : (
                              <span className="text-xs text-base-content/40 italic">None detected</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

      export default ResumeAnalyzerPage;
