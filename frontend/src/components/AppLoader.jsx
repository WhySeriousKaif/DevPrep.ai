function AppLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-float-delayed" />
      </div>

      <div className="flex flex-col items-center gap-5">
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-secondary blur-xl opacity-60 animate-pulse" />
          <img
            src="/logo.png"
            alt="DevPrep.ai"
            className="relative size-16 rounded-2xl shadow-2xl animate-pulse"
          />
        </div>
        <span className="font-black text-lg bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-wide">
          DevPrep.ai
        </span>
        <div className="loading loading-spinner loading-sm text-primary/70" />
      </div>
    </div>
  );
}

export default AppLoader;
