import { useUser } from "@clerk/clerk-react";

function WelcomeSection() {
  const { user } = useUser();

  return (
    <div className="h-full flex flex-col justify-center">
      <h1 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">
        Hello, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{user?.firstName || "Dev"}</span>
        <span className="inline-block animate-wave ml-2">👋</span>
      </h1>
      <p className="text-sm text-base-content/60 font-medium">
        Ready to code? You've got this.
      </p>
    </div>
  );
}

export default WelcomeSection;
