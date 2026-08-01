import { useEffect, useState } from "react";
import {
  FileTextIcon,
  EyeIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  MessagesSquareIcon,
} from "lucide-react";
import { PageShell, PageHeader } from "../components/layout/PageShell";
import ResumeFormStep from "../components/ResumeFormStep";
import ResumeGenerator from "../components/ResumeGenerator";
import { initialResumeData, RESUME_STEPS } from "../data/resumeInitialData";


function ResumeBuilderPage() {
  const RESUME_DRAFT_KEY = "devprep.resumeDraft";
  const RESUME_STEP_KEY = "devprep.resumeStep";

  const [currentStep, setCurrentStep] = useState(() => {
    if (typeof window === "undefined") return 1;
    const storedStep = window.localStorage.getItem(RESUME_STEP_KEY);
    const parsedStep = Number(storedStep);
    return Number.isInteger(parsedStep) && parsedStep >= 1
      ? Math.min(parsedStep, RESUME_STEPS.length)
      : 1;
  });

  const [data, setData] = useState(() => {
    if (typeof window === "undefined") return initialResumeData;
    try {
      const stored = window.localStorage.getItem(RESUME_DRAFT_KEY);
      return stored ? JSON.parse(stored) : initialResumeData;
    } catch (error) {
      return initialResumeData;
    }
  });

  const [showPreview, setShowPreview] = useState(false);

  const totalSteps = RESUME_STEPS.length;
  const progress = (currentStep / totalSteps) * 100;

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(RESUME_DRAFT_KEY, JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(RESUME_STEP_KEY, String(currentStep));
  }, [currentStep]);

  return (
    <PageShell className="max-w-[960px] mx-auto">
      <PageHeader
        icon={<FileTextIcon className="size-4 text-primary" />}
        title="Resume Builder"
        subtitle="Build a clean, ATS-friendly resume step by step — no design skills required."
      />

        {showPreview ? (
          <ResumeGenerator
            data={data}
            setData={setData}
            onBack={() => setShowPreview(false)}
          />
        ) : (
          <>
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3 gap-4 flex-wrap">
                {RESUME_STEPS.map((s) => (
                  <span
                    key={s.id}
                    className={`text-sm font-semibold hidden sm:inline ${
                      s.id === currentStep ? "text-primary" : "text-white/30"
                    }`}
                  >
                    {s.title}
                  </span>
                ))}
              </div>
              <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-primary to-secondary transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-white/40 mt-2 sm:hidden">
                Step {currentStep} of {totalSteps} —{" "}
                {RESUME_STEPS[currentStep - 1].title}
              </p>
            </div>

            {/* Form card */}
            <div className="glass-panel rounded-3xl p-5 md:p-6 relative overflow-hidden border-white/5 shadow-2xl">
              <div className="absolute top-0 right-0 w-52 h-52 bg-primary/10 blur-[70px] -z-10" />
              <div className="absolute bottom-0 left-0 w-52 h-52 bg-secondary/10 blur-[70px] -z-10" />

              <ResumeFormStep
                step={currentStep}
                data={data}
                setData={setData}
              />

              <div className="flex flex-col sm:flex-row items-center justify-between mt-6 pt-5 border-t border-white/5 gap-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
                  disabled={currentStep === 1}
                  className="px-5 py-3 rounded-2xl border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-all flex items-center gap-3 text-sm font-semibold disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ArrowLeftIcon className="size-4" />
                  Previous
                </button>

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentStep((s) => Math.min(totalSteps, s + 1))
                    }
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
    </PageShell>
  );
}

export default ResumeBuilderPage;
