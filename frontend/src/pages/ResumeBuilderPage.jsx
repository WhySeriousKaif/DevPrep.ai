import { useState } from "react";
import { FileTextIcon, EyeIcon, ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import ResumeFormStep from "../components/ResumeFormStep";
import ResumeGenerator from "../components/ResumeGenerator";
import { initialResumeData, RESUME_STEPS } from "../data/resumeInitialData";

function ResumeBuilderPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState(initialResumeData);
  const [showPreview, setShowPreview] = useState(false);

  const totalSteps = RESUME_STEPS.length;
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white relative overflow-hidden">
      {/* BACKGROUND BLOBS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-float-delayed" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      <Navbar />

      <div className={`container mx-auto px-4 md:px-6 py-12 relative z-10 ${showPreview ? "max-w-6xl" : "max-w-4xl"}`}>
        {!showPreview && (
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl mb-6 shadow-2xl shadow-primary/10 border border-white/5">
              <FileTextIcon className="size-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              <span className="neon-text-primary text-white">Resume</span> Builder
            </h1>
            <p className="text-lg text-base-content/60 max-w-xl mx-auto">
              Build a clean, ATS-friendly resume step by step — no design skills required.
            </p>
          </div>
        )}

        {showPreview ? (
          <ResumeGenerator data={data} setData={setData} onBack={() => setShowPreview(false)} />
        ) : (
          <>
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                {RESUME_STEPS.map((s) => (
                  <span
                    key={s.id}
                    className={`text-xs font-semibold hidden sm:block ${
                      s.id === currentStep ? "text-primary" : "text-white/30"
                    }`}
                  >
                    {s.title}
                  </span>
                ))}
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-white/40 mt-2 sm:hidden">
                Step {currentStep} of {totalSteps} — {RESUME_STEPS[currentStep - 1].title}
              </p>
            </div>

            {/* Form card */}
            <div className="glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden border-white/5 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] -z-10" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[80px] -z-10" />

              <ResumeFormStep step={currentStep} data={data} setData={setData} />

              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
                  disabled={currentStep === 1}
                  className="px-5 py-3 rounded-xl border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2 text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ArrowLeftIcon className="size-4" />
                  Previous
                </button>

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((s) => Math.min(totalSteps, s + 1))}
                    className="px-5 py-3 btn-primary rounded-xl text-white font-bold text-sm flex items-center gap-2 shadow-lg hover:shadow-primary/40 transition-all hover:scale-[1.02]"
                  >
                    Next
                    <ArrowRightIcon className="size-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowPreview(true)}
                    className="px-5 py-3 btn-primary rounded-xl text-white font-bold text-sm flex items-center gap-2 shadow-lg hover:shadow-primary/40 transition-all hover:scale-[1.02]"
                  >
                    <EyeIcon className="size-4" />
                    Preview Resume
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ResumeBuilderPage;
