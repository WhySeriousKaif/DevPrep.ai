function ScoreRing({ score = 0, size = 120, strokeWidth = 10 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - Math.max(0, Math.min(100, score)) / 100);

  const colorClass = score > 75 ? "text-success" : score >= 50 ? "text-warning" : "text-error";
  const label = score > 75 ? "Strong" : score >= 50 ? "Average" : "Needs Work";

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} strokeWidth={strokeWidth} className="stroke-white/10 fill-none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={`fill-none stroke-current transition-all duration-700 ${colorClass}`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-black text-white">{score}</span>
        <span className={`text-[10px] font-semibold uppercase tracking-wide ${colorClass}`}>{label}</span>
      </div>
    </div>
  );
}

export default ScoreRing;
