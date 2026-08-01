import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileSearchIcon, UploadCloudIcon, AlertTriangleIcon, ThumbsUpIcon } from "lucide-react";
import { BackgroundGradient } from "../ui/background-gradient";
import { StepProgress } from "../ui/step-progress";

const ANALYSIS_STEPS = [
  { text: "Uploading resume PDF" },
  { text: "Extracting text content" },
  { text: "Running ATS analysis" },
  { text: "Scoring for tech roles" },
  { text: "Generating recommendations" },
];

const STRENGTHS = ["React & TypeScript", "System Design", "Open Source"];
const GAPS = ["Kubernetes", "GraphQL", "Leadership bullets"];

function AnimatedScoreRing({ targetScore = 87 }) {
  const [score, setScore] = useState(0);
  const size = 100;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - score / 100);

  useEffect(() => {
    let frame;
    let start;
    const duration = 2000;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setScore(Math.round(progress * targetScore));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    setScore(0);
    const delay = setTimeout(() => {
      frame = requestAnimationFrame(animate);
    }, 300);

    return () => {
      clearTimeout(delay);
      cancelAnimationFrame(frame);
    };
  }, [targetScore]);

  const colorClass = score > 75 ? "text-success" : score >= 50 ? "text-warning" : "text-error";

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} strokeWidth={strokeWidth} className="stroke-white/10 fill-none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={`fill-none stroke-current transition-all duration-100 ${colorClass}`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-black text-white">{score}</span>
        <span className="text-[9px] font-semibold uppercase tracking-wide text-base-content/50">ATS Score</span>
      </div>
    </div>
  );
}

export function ResumeAnalyzerAnimation() {
  const [phase, setPhase] = useState("upload");

  useEffect(() => {
    let timers = [];

    const cycle = () => {
      setPhase("upload");
      timers.push(setTimeout(() => setPhase("analyzing"), 3500));
      timers.push(setTimeout(() => setPhase("results"), 6500));
    };

    cycle();
    const interval = setInterval(cycle, 11000);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <BackgroundGradient containerClassName="rounded-3xl" className="rounded-[22px] bg-[#0f172a] p-6 h-full">
      <div className="flex items-center gap-2 mb-5">
        <div className="size-9 rounded-xl bg-secondary/20 flex items-center justify-center">
          <FileSearchIcon className="size-5 text-secondary" />
        </div>
        <div>
          <p className="text-sm font-bold text-white">Resume Analyzer</p>
          <p className="text-[11px] text-base-content/50">ATS scoring · Gemini AI</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {phase === "upload" && (
          <motion.div
            key="upload"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center justify-center py-8 border border-dashed border-white/10 rounded-xl bg-white/[0.02]"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="size-16 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-4"
            >
              <UploadCloudIcon className="size-8 text-secondary" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="glass-card px-4 py-2 rounded-lg border border-white/10 flex items-center gap-3"
            >
              <div className="size-8 rounded bg-error/20 flex items-center justify-center text-[10px] font-bold text-error">
                PDF
              </div>
              <div>
                <p className="text-xs font-medium text-white">Alex_Chen_Resume.pdf</p>
                <p className="text-[10px] text-base-content/40">248 KB · Uploading...</p>
              </div>
            </motion.div>
            <div className="mt-4 h-1 w-48 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-secondary to-primary rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        )}

        {(phase === "analyzing" || phase === "results") && (
          <motion.div
            key="analysis"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid md:grid-cols-2 gap-5"
          >
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-base-content/40 mb-3">
                {phase === "analyzing" ? "Analyzing..." : "Analysis complete"}
              </p>
              <StepProgress steps={ANALYSIS_STEPS} duration={800} loop={false} />
            </div>

            <div className="space-y-3">
              {phase === "results" ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex justify-center mb-2"
                  >
                    <AnimatedScoreRing targetScore={87} />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-card rounded-xl p-3 border border-white/5"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <ThumbsUpIcon className="size-3.5 text-success" />
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider">Strengths</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {STRENGTHS.map((tag, i) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="px-2 py-0.5 rounded-md text-[10px] bg-success/10 text-success border border-success/20"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="glass-card rounded-xl p-3 border border-white/5"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangleIcon className="size-3.5 text-warning" />
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider">Missing Skills</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {GAPS.map((tag, i) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          className="px-2 py-0.5 rounded-md text-[10px] bg-warning/10 text-warning border border-warning/20"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </>
              ) : (
                <div className="flex items-center justify-center py-8">
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="size-2.5 rounded-full bg-secondary"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </BackgroundGradient>
  );
}
