import { Link } from "react-router";
import { useState, useEffect } from "react";
import {
  ArrowRightIcon,
  CheckIcon,
  Code2Icon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
  TerminalIcon,
  CpuIcon
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white overflow-hidden">
      {/* BACKGROUND BLOBS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-float-delayed" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      {/* NAVBAR */}
      <nav className="glass-panel sticky top-4 z-50 mx-auto max-w-7xl rounded-2xl my-4 border border-white/10">
        <div className="px-6 py-3 flex items-center justify-between">
          {/* LOGO */}
          <Link
            to={"/"}
            className="flex items-center gap-3 group"
          >
            <div className="size-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
              <SparklesIcon className="size-6 text-white group-hover:scale-110 transition-transform" />
            </div>

            <div className="flex flex-col">
              <span className="font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-wide">
                DevPrep.ai
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-base-content/50">Code Together</span>
            </div>
          </Link>

          {/* AUTH BTN */}
          <SignInButton mode="modal">
            <button className="btn btn-primary btn-sm rounded-xl px-6 neon-border">
              <span>Login</span>
              <ArrowRightIcon className="size-4" />
            </button>
          </SignInButton>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium text-secondary animate-fade-in-up border border-white/5">
              <ZapIcon className="size-4 fill-current" />
              <span>Next-Gen AI Interviews</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight">
              Master Your <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent neon-text-primary">
                Technical Interview
              </span>
            </h1>

            <p className="text-sm text-base-content/70 leading-relaxed max-w-xl glass-panel p-6 rounded-2xl border-l-4 border-primary border-y border-r border-white/5">
              Experience the future of interview prep with our AI-powered platform.
              Real-time code collaboration, voice-enabled AI mock interviews, and
              instant performance analytics.
            </p>

            {/* FEATURE PILLS */}
            <div className="flex flex-wrap gap-3">
              {['Live Video', 'Context Aware AI', 'Monaco Editor'].map((feat, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-base-100/50 rounded-lg border border-white/5 text-sm font-medium text-base-content/80">
                  <CheckIcon className="size-4 text-success" />
                  {feat}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <SignInButton mode="modal">
                <button className="btn btn-primary btn-lg min-w-[180px] shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all">
                  Start Practicing
                  <ArrowRightIcon className="size-5" />
                </button>
              </SignInButton>

              <button className="btn glass-panel btn-lg min-w-[180px] hover:bg-white/5 border border-white/10">
                <VideoIcon className="size-5 text-secondary" />
                Watch Demo
              </button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 p-4 glass-panel rounded-2xl max-w-lg border border-white/5">
              <div className="text-center">
                <div className="text-2xl font-black text-primary">10k+</div>
                <div className="text-xs text-base-content/50 uppercase font-bold tracking-wider">Users</div>
              </div>
              <div className="text-center border-x border-white/5">
                <div className="text-2xl font-black text-secondary">50k+</div>
                <div className="text-xs text-base-content/50 uppercase font-bold tracking-wider">Sessions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-accent">99%</div>
                <div className="text-xs text-base-content/50 uppercase font-bold tracking-wider">Success</div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative perspective-1000 group">
            {/* Decorative glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl blur-2xl -z-10 group-hover:blur-3xl transition-all duration-500" />

            <img
              src="/hero.png"
              alt="AI Platform Interface"
              className="w-full relative z-10 rounded-3xl border border-white/10 shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] hover:rotate-y-2 animate-float"
              style={{ transformStyle: 'preserve-3d' }}
            />

            {/* Floating UI Elements (Decoration) */}
            <div className="absolute -left-8 top-20 glass-card p-4 rounded-xl z-20 animate-float-delayed hidden lg:block border border-white/10">
              <Code2Icon className="size-8 text-secondary mb-2" />
              <div className="h-2 w-24 bg-white/10 rounded-full mb-2" />
              <div className="h-2 w-16 bg-white/10 rounded-full" />
            </div>

            <div className="absolute -right-8 bottom-20 glass-card p-4 rounded-xl z-20 animate-float hidden lg:block border border-white/10">
              <TerminalIcon className="size-8 text-primary mb-2" />
              <div className="h-2 w-20 bg-white/10 rounded-full mb-2" />
              <div className="h-2 w-12 bg-white/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-24 relative">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Excellence</span>
          </h2>
          <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
            Our platform combines cutting-edge AI with professional developer tools
            to simulate the most realistic interview environment possible.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {[
            {
              icon: <VideoIcon className="size-8 text-primary" />,
              title: "HD Video Call",
              desc: "Low-latency, crystal clear video/audio powered by Stream.io for seamless communication."
            },
            {
              icon: <Code2Icon className="size-8 text-secondary" />,
              title: "Live Code Editor",
              desc: "Monaco-based editor with syntax highlighting, autocomplete, and multi-language support."
            },
            {
              icon: <CpuIcon className="size-8 text-accent" />,
              title: "AI Mock Interviews",
              desc: "Get instant, detailed feedback on your code quality, optimization, and communication skills."
            }
          ].map((feature, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl hover:bg-base-100/50 group border border-white/5">
              <div className="size-16 bg-gradient-to-br from-base-100 to-base-200 rounded-2xl border border-white/5 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-base-content/60 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="glass-panel mt-12 py-8 relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-base-content/60">
            <SparklesIcon className="size-4 text-primary" />
            <span className="font-semibold">DevPrep.ai</span>
          </div>
          <p className="text-sm text-base-content/40">
            &copy; 2026 DevPrep.ai. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-base-content/40">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default HomePage;
