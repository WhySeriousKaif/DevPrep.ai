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
} from "lucide-react";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import ScoreRing from "../components/ScoreRing";
import { resumeAnalyzerApi } from "../api/resumeAnalyzer";

const TAG_STYLES = {
  success: "bg-success/10 text-success border-success/20",
  warning: "bg-warning/10 text-warning border-warning/20",
  error: "bg-error/10 text-error border-error/20",
  primary: "bg-primary/10 text-primary border-primary/20",
};

const TEXT_COLOR = {
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
  primary: "text-primary",
};

function TagList({ icon, title, items, color }) {
  if (!items?.length) return null;
  return (
    <div className="glass-card rounded-2xl p-5 border border-white/5">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h3 className="text-sm font-bold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span key={i} className={`px-3 py-1.5 rounded-lg border text-xs font-medium ${TAG_STYLES[color]}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ListSection({ title, items }) {
  if (!items?.length) return null;
  return (
    <div className="glass-card rounded-2xl p-5 border border-white/5">
      <h3 className="text-sm font-bold text-white mb-3">{title}</h3>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="text-xs text-white/60 flex gap-2">
            <span className="text-primary shrink-0">&bull;</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ResumeAnalyzerPage() {
  const [loading, setLoading] = useState(true);
  const [analyzing, setAnalyzing] = useState(false);
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [showUpload, setShowUpload] = useState(false);

  useEffect(() => {
    resumeAnalyzerApi
      .getMyAnalysis()
      .then((res) => setData(res.data))
      .catch(() => setShowUpload(true))
      .finally(() => setLoading(false));
  }, []);

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a PDF resume");
      return;
    }
    setAnalyzing(true);
    try {
      const res = await resumeAnalyzerApi.upload(file);
      setData(res.data);
      setShowUpload(false);
      setFile(null);
      toast.success("Resume analyzed!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Couldn't analyze that resume");
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-float-delayed" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      <Navbar />

      <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl mb-6 shadow-2xl shadow-primary/10 border border-white/5">
            <FileSearchIcon className="size-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            <span className="neon-text-primary text-white">Resume</span> Analyzer
          </h1>
          <p className="text-lg text-base-content/60 max-w-xl mx-auto">
            Upload your resume and get an ATS score built for tech roles — strengths, gaps, and what to fix.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2Icon className="size-8 animate-spin text-primary" />
          </div>
        ) : showUpload || !data ? (
          <div className="glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden border-white/5 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[80px] -z-10" />

            <label className="block cursor-pointer">
              <input
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0] || null)}
              />
              <div
                className={`rounded-2xl border-2 border-dashed p-12 text-center transition-all ${
                  file ? "border-primary/50 bg-primary/5" : "border-white/15 hover:border-white/30 hover:bg-white/5"
                }`}
              >
                <UploadCloudIcon className="size-10 mx-auto mb-4 text-white/40" />
                <p className="text-white font-medium">{file ? file.name : "Click to upload your resume"}</p>
                <p className="text-xs text-white/40 mt-2">PDF only &middot; max 20MB</p>
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
            <div className="glass-panel rounded-3xl p-8 border-white/5 shadow-2xl flex flex-col sm:flex-row items-center gap-6">
              <ScoreRing score={data.score} />
              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-white/60 text-sm mb-1">
                  <UserIcon className="size-4" />
                  {data.name || "Candidate"}
                </div>
                {data.suggestedRole && (
                  <p className="text-lg font-bold text-white">Best fit: {data.suggestedRole}</p>
                )}
                {data.summary && <p className="text-sm text-white/60 mt-2">{data.summary}</p>}
              </div>
              <button
                type="button"
                onClick={() => setShowUpload(true)}
                className="px-4 py-2 rounded-xl border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2 text-sm font-medium shrink-0"
              >
                <RefreshCwIcon className="size-4" />
                Re-upload
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TagList
                icon={<ThumbsUpIcon className={`size-4 ${TEXT_COLOR.success}`} />}
                title="Strengths"
                items={data.strengths}
                color="success"
              />
              <TagList
                icon={<AlertTriangleIcon className={`size-4 ${TEXT_COLOR.warning}`} />}
                title="Weaknesses"
                items={data.weaknesses}
                color="warning"
              />
              <TagList
                icon={<ZapIcon className={`size-4 ${TEXT_COLOR.error}`} />}
                title="Missing Skills"
                items={data.missingSkills}
                color="error"
              />
              <TagList
                icon={<TrendingUpIcon className={`size-4 ${TEXT_COLOR.primary}`} />}
                title="Recommendations"
                items={data.recommendations}
                color="primary"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ListSection title="Detected Skills" items={data.skills} />
              <ListSection title="Education" items={data.education} />
              <ListSection title="Experience" items={data.experience} />
              <ListSection title="Projects" items={data.projects} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumeAnalyzerPage;
