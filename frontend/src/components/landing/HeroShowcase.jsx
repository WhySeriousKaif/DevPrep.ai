import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  VideoIcon,
  MicIcon,
  ListChecksIcon,
  FileTextIcon,
  MessageSquareIcon,
  SparklesIcon,
  CheckIcon,
} from "lucide-react";
import { cn } from "../../lib/utils";

const TABS = [
  { key: "live", label: "Live Sessions", icon: VideoIcon, colorClass: "text-primary" },
  { key: "ai", label: "AI Interview", icon: MicIcon, colorClass: "text-secondary" },
  { key: "blind75", label: "Blind 75", icon: ListChecksIcon, colorClass: "text-accent" },
  { key: "resume", label: "Resume", icon: FileTextIcon, colorClass: "text-primary" },
];

const TRANSCRIPT = [
  { who: "AI", text: "Tell me about a challenging bug you fixed recently." },
  { who: "You", text: "I traced a race condition in our checkout flow..." },
  { who: "AI", text: "Great — how did you confirm the root cause?" },
];

const BLIND75_CATEGORIES = [
  { label: "Arrays & Hashing", done: true },
  { label: "Two Pointers", done: true },
  { label: "Trees & Graphs", done: true },
  { label: "Dynamic Programming", done: false },
];

const RESUME_BULLETS = [
  "Led migration to microservices, reducing latency 40%",
  "Shipped React Native app to 50k+ downloads",
  "Mentored 4 junior engineers through onboarding",
];

const RING_CIRCUMFERENCE = 2 * Math.PI * 40;

function ProgressRing({ progress, colorClass, children }) {
  return (
    <div className="relative size-32 shrink-0">
      <svg viewBox="0 0 100 100" className="size-32 -rotate-90">
        <circle cx="50" cy="50" r="40" strokeWidth="7" fill="none" className="stroke-white/10" />
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
          className={colorClass}
          stroke="currentColor"
          strokeDasharray={RING_CIRCUMFERENCE}
          initial={{ strokeDashoffset: RING_CIRCUMFERENCE }}
          animate={{ strokeDashoffset: RING_CIRCUMFERENCE * (1 - progress) }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}

function LivePanel() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-error/15 border border-error/30 text-xs font-bold text-error">
          <motion.span
            className="size-2 rounded-full bg-error"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          LIVE
        </div>
        <span className="text-sm text-base-content/40 font-mono">02:14</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[
          { initials: "AK", name: "Alex K.", from: "from-primary", to: "to-secondary" },
          { initials: "SM", name: "Sam M.", from: "from-secondary", to: "to-accent" },
        ].map((p) => (
          <div key={p.name} className="glass-card rounded-xl border border-white/10 p-5 flex flex-col items-center gap-3">
            <div className="relative">
              <motion.div
                className={cn("absolute -inset-2 rounded-full bg-gradient-to-br opacity-40 blur-sm", p.from, p.to)}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
              <div className={cn("relative size-16 rounded-full bg-gradient-to-br flex items-center justify-center text-sm font-bold text-white", p.from, p.to)}>
                {p.initials}
              </div>
            </div>
            <span className="text-sm font-medium text-base-content/70">{p.name}</span>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-card rounded-xl border border-white/10 p-4 flex items-center gap-3"
      >
        <MessageSquareIcon className="size-5 text-secondary shrink-0" />
        <p className="text-sm text-base-content/60 truncate">Sam M.: "Let's walk through the two-pointer approach"</p>
      </motion.div>
    </div>
  );
}

function AiPanel() {
  const [bars] = useState(() => Array.from({ length: 16 }, () => 25 + Math.random() * 75));

  return (
    <div className="space-y-5">
      <div className="glass-card rounded-xl border border-white/10 p-5 flex items-end gap-1.5 h-20">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-full bg-gradient-to-t from-secondary to-primary"
            animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.3}%`] }}
            transition={{ duration: 0.9 + (i % 4) * 0.15, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="space-y-2.5">
        {TRANSCRIPT.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.35 }}
            className="flex gap-3"
          >
            <span className={cn("text-xs font-bold shrink-0 w-8", line.who === "AI" ? "text-secondary" : "text-primary")}>
              {line.who}
            </span>
            <p className="text-sm text-base-content/65 leading-relaxed">{line.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-xs text-secondary font-medium"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <SparklesIcon className="size-3.5" />
        Score 8.7 / 10
      </motion.div>
    </div>
  );
}

function Blind75Panel() {
  return (
    <div className="flex items-center gap-7">
      <ProgressRing progress={0.62} colorClass="text-accent">
        <span className="text-2xl font-black">47</span>
        <span className="text-xs text-base-content/40 -mt-0.5">/ 75</span>
      </ProgressRing>

      <div className="flex-1 space-y-3">
        {BLIND75_CATEGORIES.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.15 }}
            className="flex items-center gap-2.5"
          >
            <div
              className={cn(
                "size-5 rounded-full flex items-center justify-center shrink-0",
                cat.done ? "bg-accent text-white" : "border border-white/15"
              )}
            >
              {cat.done && <CheckIcon className="size-3" />}
            </div>
            <span className={cn("text-sm", cat.done ? "text-base-content/70" : "text-base-content/35")}>
              {cat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ResumePanel() {
  return (
    <div className="flex items-center gap-7">
      <ProgressRing progress={0.89} colorClass="text-primary">
        <span className="text-2xl font-black">89</span>
        <span className="text-xs text-base-content/40 -mt-0.5">ATS</span>
      </ProgressRing>

      <div className="flex-1 space-y-3">
        {RESUME_BULLETS.map((bullet, i) => (
          <motion.p
            key={bullet}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.2 }}
            className="text-sm text-base-content/65 leading-relaxed"
          >
            <span className="text-primary">•</span> {bullet}
          </motion.p>
        ))}
        <motion.span
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-xs text-primary font-medium"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <SparklesIcon className="size-3.5" />
          AI Optimized
        </motion.span>
      </div>
    </div>
  );
}

const PANELS = {
  live: LivePanel,
  ai: AiPanel,
  blind75: Blind75Panel,
  resume: ResumePanel,
};

export function HeroShowcase() {
  const [activeKey, setActiveKey] = useState(TABS[0].key);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentIndex = TABS.findIndex((t) => t.key === activeKey);
      setActiveKey(TABS[(currentIndex + 1) % TABS.length].key);
    }, 4200);
    return () => clearTimeout(timeout);
  }, [activeKey]);

  const ActivePanel = PANELS[activeKey];

  return (
    <div className="glass-panel rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-8 pt-7">
        <div className="flex items-center gap-2.5">
          <div className="size-3.5 rounded-full bg-error/80" />
          <div className="size-3.5 rounded-full bg-warning/80" />
          <div className="size-3.5 rounded-full bg-success/80" />
        </div>
        <span className="text-xs uppercase font-bold tracking-widest text-base-content/40">
          DevPrep.ai
        </span>
      </div>

      <div className="flex gap-1.5 px-6 pt-6">
        {TABS.map((tab) => {
          const isActive = tab.key === activeKey;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveKey(tab.key)}
              className="relative flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-colors"
            >
              {isActive && (
                <motion.div
                  layoutId="heroTabPill"
                  className="absolute inset-0 rounded-lg glass-card border border-white/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <tab.icon className={cn("relative z-10 size-4", isActive ? tab.colorClass : "text-base-content/40")} />
              <span className={cn("relative z-10 hidden sm:inline", isActive ? "text-base-content" : "text-base-content/40")}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="p-8 min-h-[340px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <ActivePanel />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
