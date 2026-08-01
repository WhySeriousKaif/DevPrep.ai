import { useUser } from "@clerk/clerk-react";

function WelcomeSection() {
  const { user } = useUser();

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold text-white">
        Hello,{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
          {user?.firstName || "Dev"}
        </span>
      </h2>
      <p className="text-sm text-base-content/50 mt-1">
        Ready to code? You&apos;re about to level up your skills.
      </p>
    </div>
  );
}

export default WelcomeSection;
