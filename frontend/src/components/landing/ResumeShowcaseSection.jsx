import { SparklesIcon, ArrowRightIcon } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import { ResumeBuilderAnimation } from "./ResumeBuilderAnimation";
import { ResumeAnalyzerAnimation } from "./ResumeAnalyzerAnimation";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export function ResumeShowcaseSection() {
  return (
    <section id="resume" className="max-w-7xl mx-auto px-4 py-24 relative scroll-mt-24">
      <div className="text-center mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs font-medium text-secondary mb-6 border border-white/5">
          <SparklesIcon className="size-3.5" />
          <span>Resume tools powered by Gemini AI</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-black mb-6">
          Build & Analyze Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
            Resume
          </span>
        </h2>
        <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
          Create an ATS-friendly resume step by step, then upload it for instant scoring,
          gap analysis, and actionable recommendations — all tailored for tech roles.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 relative z-10 mb-10">
        <ResumeBuilderAnimation />
        <ResumeAnalyzerAnimation />
      </div>

      <div className="text-center relative z-10">
        <SignInButton mode="modal">
          <HoverBorderGradient
            containerClassName="rounded-full mx-auto"
            className="bg-gradient-to-r from-primary to-secondary text-white flex items-center gap-2 px-6 py-2.5 text-sm font-semibold"
          >
            Try Resume Tools Free
            <ArrowRightIcon className="size-4" />
          </HoverBorderGradient>
        </SignInButton>
      </div>
    </section>
  );
}
