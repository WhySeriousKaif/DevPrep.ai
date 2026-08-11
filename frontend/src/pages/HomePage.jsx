import { Link } from "react-router";
import {
  ArrowRightIcon,
  BarChart3Icon,
  BrainCircuitIcon,
  CheckIcon,
  Code2Icon,
  FileSearchIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  ListChecksIcon,
  MicIcon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
  MessageSquareIcon,
  ClockIcon,
  StarIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import { ResumeShowcaseSection } from "../components/landing/ResumeShowcaseSection";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { HeroShowcase } from "../components/landing/HeroShowcase";

const FEATURE_PILLS = [
  { label: "Live Video Sessions", icon: <VideoIcon className="size-3.5 text-secondary shrink-0" /> },
  { label: "AI Voice Interviews", icon: <MicIcon className="size-3.5 text-secondary shrink-0" /> },
  { label: "Blind 75 Tracker", icon: <ListChecksIcon className="size-3.5 text-secondary shrink-0" /> },
  { label: "Resume Builder", icon: <FileTextIcon className="size-3.5 text-secondary shrink-0" /> },
  { label: "ATS Analyzer", icon: <FileSearchIcon className="size-3.5 text-secondary shrink-0" /> },
  { label: "Real-time Code Sync", icon: <Code2Icon className="size-3.5 text-secondary shrink-0" /> },
];

const FEATURES = [
  {
    icon: <UsersIcon className="size-7 text-primary" />,
    tag: "Collaborative",
    title: "Live Coding Sessions",
    desc: "Host or join pair-programming interviews with HD video, in-session chat, and a shared Monaco editor. Pick from 28 curated problems, run code against test cases, and sync changes in real time.",
    highlights: ["HD video & chat", "28 coding problems", "Host controls & timer"],
  },
  {
    icon: <MicIcon className="size-7 text-secondary" />,
    tag: "AI Powered",
    title: "Voice Mock Interviews",
    desc: "Practice technical, behavioral, or mixed interviews with a voice AI interviewer. Customize role, experience, topics, and question count — then get a Gemini-powered score and detailed feedback.",
    highlights: ["Voice AI via Vapi", "Live transcript", "Score & recommendations"],
  },
  {
    icon: <BrainCircuitIcon className="size-7 text-accent" />,
    tag: "LeetCode",
    title: "Blind 75 Tracker",
    desc: "Work through the 75 most-asked interview questions, grouped by category. Track overall progress, mark problems solved, star items for revision, and jump straight to LeetCode or video solutions.",
    highlights: ["Progress by category", "Search & filter", "Revision bookmarks"],
  },
  {
    icon: <FileTextIcon className="size-7 text-primary" />,
    tag: "Resume",
    title: "Resume Builder",
    desc: "Build an ATS-friendly resume in an 8-step wizard — personal info, experience, projects, education, and more. Refine bullets with AI, organize skills, preview live, and download a polished PDF.",
    highlights: ["8-step wizard", "AI refine & ATS boost", "PDF download"],
  },
  {
    icon: <FileSearchIcon className="size-7 text-secondary" />,
    tag: "Resume",
    title: "Resume Analyzer",
    desc: "Upload your resume PDF and get an ATS score tailored for tech roles. See strengths, gaps, missing skills, and actionable recommendations — all powered by Gemini analysis.",
    highlights: ["ATS score ring", "Strengths & gaps", "Parsed resume data"],
  },
  {
    icon: <LayoutDashboardIcon className="size-7 text-accent" />,
    tag: "Dashboard",
    title: "Session Hub",
    desc: "Your home base for interview prep. Create new live sessions, browse active rooms to join, review past session summaries, and keep track of your activity at a glance.",
    highlights: ["Create & join sessions", "Past session history", "Quick stats"],
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Sign up free",
    desc: "Create your account in seconds with secure Clerk authentication.",
  },
  {
    step: "02",
    title: "Pick your path",
    desc: "Start a live session, launch an AI voice interview, grind Blind 75, or polish your resume.",
  },
  {
    step: "03",
    title: "Practice & perform",
    desc: "Code together on video, talk through problems with AI, or track your LeetCode progress.",
  },
  {
    step: "04",
    title: "Review & improve",
    desc: "Get session summaries, AI feedback scores, ATS analysis, and actionable next steps.",
  },
];

const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Live Coding Sessions", href: "#features" },
      { label: "AI Voice Interviews", href: "#features" },
      { label: "Blind 75 Tracker", href: "#features" },
      { label: "Resume Tools", href: "#features" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Sign Up", action: "signin" },
      { label: "Log In", action: "signin" },
      { label: "Dashboard", action: "signin" },
    ],
  },
];

function HomePage() {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToResume = () => {
    document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white overflow-hidden">
      {/* BACKGROUND GRID + GLOW BLOBS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 -left-4 size-96 bg-primary opacity-20 blur-[100px] animate-float" />
        <div className="absolute bottom-0 -right-4 size-96 bg-secondary opacity-20 blur-[100px] animate-float-delayed" />
      </div>

      {/* NAVBAR */}
      <nav className="glass-panel sticky top-4 z-50 mx-auto max-w-7xl rounded-2xl my-4 border border-white/10">
        <div className="px-6 py-3 flex items-center justify-between">
          <Link to={"/"} className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="DevPrep.ai"
              className="size-11 rounded-xl shadow-lg group-hover:shadow-primary/50 group-hover:scale-110 transition-all duration-300"
            />
            <div className="flex flex-col">
              <span className="font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-wide">
                DevPrep.ai
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-base-content/50">Code Together</span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollToResume}
              className="btn btn-ghost btn-sm hidden sm:inline-flex"
            >
              Resume
            </button>
            <button
              onClick={scrollToFeatures}
              className="btn btn-ghost btn-sm hidden sm:inline-flex"
            >
              Features
            </button>
            <button
              onClick={scrollToHowItWorks}
              className="btn btn-ghost btn-sm hidden sm:inline-flex"
            >
              How It Works
            </button>
            <SignInButton mode="modal">
              <button className="btn btn-primary btn-sm rounded-xl px-6 neon-border">
                <span>Login</span>
                <ArrowRightIcon className="size-4" />
              </button>
            </SignInButton>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20 relative">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium text-secondary animate-fade-in-up border border-white/5">
              <ZapIcon className="size-4 fill-current" />
              <span>All-in-one interview prep platform</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight">
              Master Your <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent neon-text-primary">
                Technical Interview
              </span>
            </h1>

            <div className="relative max-w-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/10 to-transparent rounded-2xl blur-xl -z-10" />
              <div className="relative glass-panel p-6 rounded-2xl border border-white/10 overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary via-secondary to-accent" />
                <span
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-6xl font-black text-white/[0.08] leading-none select-none"
                >
                  {"{"}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-6xl font-black text-white/[0.08] leading-none select-none"
                >
                  {"}"}
                </span>
                <p className="relative text-sm text-base-content/75 leading-relaxed px-8">
                  DevPrep.ai brings together{" "}
                  <span className="text-base-content font-semibold">live pair-programming sessions</span>,{" "}
                  <span className="text-base-content font-semibold">AI voice mock interviews</span>,{" "}
                  <span className="text-base-content font-semibold">Blind 75 progress tracking</span>, and{" "}
                  <span className="text-base-content font-semibold">resume tools</span> — everything you
                  need to land your next role.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {FEATURE_PILLS.map(({ label, icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-1.5 bg-base-100/50 rounded-lg border border-white/5 text-xs font-medium text-base-content/80 hover:border-primary/30 hover:bg-base-100/70 transition-colors"
                >
                  {icon}
                  {label}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <SignInButton mode="modal">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  className="bg-gradient-to-r from-primary to-secondary text-white flex items-center gap-2 px-6 py-3 text-sm font-semibold min-w-[180px] justify-center"
                >
                  Start Practicing
                  <ArrowRightIcon className="size-5" />
                </HoverBorderGradient>
              </SignInButton>

              <button
                onClick={scrollToFeatures}
                className="btn glass-panel btn-lg min-w-[180px] hover:bg-white/5 border border-white/10"
              >
                Explore Features
                <ArrowRightIcon className="size-5 text-secondary" />
              </button>
            </div>
          </div>

          {/* Hero showcase — auto-rotating live product preview */}
          <div className="relative perspective-1000 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl blur-2xl -z-10 group-hover:blur-3xl transition-all duration-500" />

            <HeroShowcase />

            <div className="absolute -left-6 top-16 glass-card p-3 rounded-xl z-20 animate-float-delayed hidden lg:block border border-white/10">
              <MessageSquareIcon className="size-6 text-secondary" />
            </div>
            <div className="absolute -right-6 bottom-16 glass-card p-3 rounded-xl z-20 animate-float hidden lg:block border border-white/10">
              <BarChart3Icon className="size-6 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* RESUME SHOWCASE — animated builder & analyzer */}
      <ResumeShowcaseSection />

      {/* FEATURES SECTION */}
      <div id="features" className="max-w-7xl mx-auto px-4 py-24 relative scroll-mt-24">
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs font-medium text-primary mb-6 border border-white/5">
            <SparklesIcon className="size-3.5" />
            <span>Everything in one platform</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Built for Every Stage of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Interview Prep
            </span>
          </h2>
          <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
            From live coding with a partner to solo AI voice practice, LeetCode grinding,
            and resume polish — DevPrep.ai covers the full pipeline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="glass-card p-7 rounded-3xl hover:bg-base-100/50 group border border-white/5 flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="size-14 bg-gradient-to-br from-base-100 to-base-200 rounded-2xl border border-white/5 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-base-content/40 px-2 py-1 rounded-md bg-white/5 border border-white/5">
                  {feature.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-base-content/60 leading-relaxed text-sm mb-5 flex-1">
                {feature.desc}
              </p>
              <ul className="space-y-2">
                {feature.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-base-content/70">
                    <CheckIcon className="size-3.5 text-success shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CAPABILITY STRIP */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="glass-panel rounded-3xl border border-white/10 p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Code2Icon className="size-5 text-primary" />, title: "Monaco Editor", desc: "JS, Python & Java with run & test" },
              { icon: <ClockIcon className="size-5 text-secondary" />, title: "Timed Sessions", desc: "30–90 min interviews with auto-end" },
              { icon: <StarIcon className="size-5 text-accent" />, title: "Revision Tracking", desc: "Star Blind 75 problems to revisit" },
              { icon: <SparklesIcon className="size-5 text-primary" />, title: "Gemini AI", desc: "Interview feedback & resume analysis" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="size-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-bold text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-base-content/50">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div id="how-it-works" className="max-w-7xl mx-auto px-4 py-24 relative scroll-mt-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">
            How It <span className="text-secondary">Works</span>
          </h2>
          <p className="text-base-content/60 max-w-xl mx-auto">
            Go from sign-up to interview-ready in four simple steps.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS.map((item, idx) => (
            <div key={item.step} className="relative">
              {idx < HOW_IT_WORKS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-white/10 to-transparent" />
              )}
              <div className="glass-card p-6 rounded-2xl border border-white/5 h-full">
                <div className="text-2xl font-black text-primary/40 mb-3">{item.step}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-base-content/60 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
          <div className="relative glass-panel p-10 lg:p-14 text-center">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Ready to start preparing?
            </h2>
            <p className="text-base-content/60 max-w-lg mx-auto mb-8">
              Join DevPrep.ai and access live coding sessions, AI voice interviews,
              Blind 75 tracking, and resume tools — all free to get started.
            </p>
            <SignInButton mode="modal">
              <HoverBorderGradient
                containerClassName="rounded-full mx-auto"
                className="bg-gradient-to-r from-primary to-secondary text-white flex items-center gap-2 px-8 py-3 text-sm font-semibold"
              >
                Get Started Free
                <ArrowRightIcon className="size-5" />
              </HoverBorderGradient>
            </SignInButton>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="glass-panel mt-12 relative z-10 border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 pt-14 pb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
            <div className="col-span-2 sm:col-span-3 lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="DevPrep.ai" className="size-7 rounded-md" />
                <span className="font-semibold text-base">DevPrep.ai</span>
              </div>
              <p className="text-sm text-base-content/50 leading-relaxed max-w-xs">
                Your all-in-one platform for cracking technical interviews — live coding
                sessions, AI voice interviews, Blind 75 tracking, and resume tools.
              </p>
              <p className="text-xs text-base-content/30">
                &copy; 2026 DevPrep.ai. All rights reserved.
              </p>
            </div>

            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-base-content/40 mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-2.5">
                  {column.links.map((link) =>
                    link.action === "signin" ? (
                      <li key={link.label}>
                        <SignInButton mode="modal">
                          <button className="text-sm text-base-content/60 hover:text-primary transition-colors">
                            {link.label}
                          </button>
                        </SignInButton>
                      </li>
                    ) : (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm text-base-content/60 hover:text-primary transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Oversized watermark */}
        <div
          aria-hidden="true"
          className="select-none pointer-events-none text-center font-black leading-[0.8] whitespace-nowrap bg-gradient-to-b from-white/[0.07] to-white/0 bg-clip-text text-transparent -mb-2 sm:-mb-4 lg:-mb-8"
          style={{ fontSize: "clamp(3rem, 16vw, 13rem)" }}
        >
          DevPrep.ai
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
