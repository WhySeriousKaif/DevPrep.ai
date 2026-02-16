import { getDifficultyBadgeClass } from "../lib/utils";
import { BrainCircuitIcon } from "lucide-react";

function ProblemDescription({ problem, currentProblemId, onProblemChange, allProblems }) {
  return (
    <div className="h-full overflow-y-auto bg-base-100/50 backdrop-blur-md custom-scrollbar">
      {/* HEADER SECTION */}
      <div className="p-6 border-b border-white/5 sticky top-0 bg-base-100/80 backdrop-blur-xl z-20">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <BrainCircuitIcon className="size-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white">{problem.title}</h1>
              <p className="text-xs text-base-content/60 font-medium tracking-wider uppercase mt-1">{problem.category}</p>
            </div>
          </div>
          <span className={`badge badge-lg border-0 font-bold ${getDifficultyBadgeClass(problem.difficulty)}`}>
            {problem.difficulty}
          </span>
        </div>

        {/* Problem selector */}
        <div className="mt-4">
          <select
            className="select select-sm w-full bg-white/5 border-white/10 text-base-content focus:border-primary/50"
            value={currentProblemId}
            onChange={(e) => onProblemChange(e.target.value)}
          >
            {allProblems.map((p) => (
              <option key={p.id} value={p.id} className="bg-base-300">
                {p.title} - {p.difficulty}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* PROBLEM DESC */}
        <div className="prose prose-sm max-w-none text-base-content/90">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <div className="w-1 h-6 bg-primary rounded-full" />
            Description
          </h3>
          <div className="text-base leading-relaxed pl-3 border-l-2 border-white/5">
            <p>{problem.description.text}</p>
            {problem.description.notes.map((note, idx) => (
              <p key={idx} className="text-base-content/80 italic">
                Note: {note}
              </p>
            ))}
          </div>
        </div>

        {/* EXAMPLES SECTION */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-secondary rounded-full" />
            Examples
          </h3>
          <div className="space-y-4">
            {problem.examples.map((example, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl border border-white/5 overflow-hidden">
                <div className="px-4 py-2 border-b border-white/5 bg-white/5 flex items-center gap-2">
                  <span className="badge badge-sm badge-primary">Case {idx + 1}</span>
                </div>
                <div className="p-4 space-y-3 font-mono text-sm">
                  <div className="grid grid-cols-[60px_1fr] gap-2">
                    <span className="text-base-content/50">Input:</span>
                    <span className="text-white">{example.input}</span>
                  </div>
                  <div className="grid grid-cols-[60px_1fr] gap-2">
                    <span className="text-base-content/50">Output:</span>
                    <span className="text-success">{example.output}</span>
                  </div>
                  {example.explanation && (
                    <div className="grid grid-cols-[60px_1fr] gap-2 pt-2 border-t border-white/5 mt-2">
                      <span className="text-base-content/50">Details:</span>
                      <span className="text-base-content/70 italic font-sans">{example.explanation}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONSTRAINTS */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-accent rounded-full" />
            Constraints
          </h3>
          <div className="bg-white/5 rounded-xl p-4 border border-white/5">
            <ul className="space-y-3 text-sm font-mono text-base-content/80">
              {problem.constraints.map((constraint, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>{constraint}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemDescription;
