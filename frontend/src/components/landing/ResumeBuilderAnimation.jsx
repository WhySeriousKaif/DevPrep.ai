import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileTextIcon, SparklesIcon, Wand2Icon } from "lucide-react";
import { BackgroundGradient } from "../ui/background-gradient";
import { StepProgress } from "../ui/step-progress";

const BUILD_STEPS = [
  { text: "Personal info & summary" },
  { text: "Skills & experience" },
  { text: "Projects & education" },
  { text: "AI refine bullets" },
  { text: "Generate PDF preview" },
];

const RESUME_LINES = [
  { label: "Name", value: "Alex Chen", delay: 0 },
  { label: "Role", value: "Software Engineer", delay: 0.3 },
  { label: "Summary", value: "Full-stack developer with 3+ years building scalable web apps...", delay: 0.6 },
  { label: "Experience", value: "• Led migration to microservices, reducing latency 40%", delay: 0.9 },
  { label: "Skills", value: "React · Node.js · Python · AWS · System Design", delay: 1.2 },
];

export function ResumeBuilderAnimation() {
  const [aiPulse, setAiPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setAiPulse((p) => !p), 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <BackgroundGradient containerClassName="rounded-3xl" className="rounded-[22px] bg-[#0f172a] p-6 h-full">
      <div className="flex items-center gap-2 mb-5">
        <div className="size-9 rounded-xl bg-primary/20 flex items-center justify-center">
          <FileTextIcon className="size-5 text-primary" />
        </div>
        <div>
          <p className="text-sm font-bold text-white">Resume Builder</p>
          <p className="text-[11px] text-base-content/50">8-step wizard · AI-powered</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <p className="text-[10px] uppercase font-bold tracking-widest text-base-content/40 mb-3">
            Building progress
          </p>
          <StepProgress steps={BUILD_STEPS} duration={2000} />
        </div>

        <div className="relative">
          <div className="glass-card rounded-xl border border-white/10 p-4 min-h-[220px] overflow-hidden">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
              <span className="text-[10px] font-mono text-base-content/40">resume.pdf</span>
              <AnimatePresence mode="wait">
                {aiPulse ? (
                  <motion.span
                    key="ai"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-1 text-[10px] text-secondary font-medium"
                  >
                    <Wand2Icon className="size-3" />
                    AI refining...
                  </motion.span>
                ) : (
                  <motion.span
                    key="preview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-[10px] text-success font-medium"
                  >
                    Live preview
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-2.5">
              {RESUME_LINES.map((line) => (
                <motion.div
                  key={line.label}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: line.delay, duration: 0.4 }}
                >
                  <p className="text-[9px] uppercase tracking-wider text-primary/70 font-bold">{line.label}</p>
                  <p className="text-xs text-base-content/70 leading-relaxed">{line.value}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/20 border border-primary/30 text-[10px] text-primary font-medium"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <SparklesIcon className="size-3" />
              ATS Boost
            </motion.div>
          </div>
        </div>
      </div>
    </BackgroundGradient>
  );
}
