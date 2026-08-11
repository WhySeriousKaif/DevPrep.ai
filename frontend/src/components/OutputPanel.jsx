import { TerminalIcon, AlertTriangleIcon, CheckCircleIcon, Maximize2Icon, Minimize2Icon } from "lucide-react";

function OutputPanel({ output, expectedOutput, isMaximized, onToggleMaximize }) {
  return (
    <div className="h-full bg-base-100/50 backdrop-blur-md flex flex-col">
      <div className="px-4 py-3 border-b border-white/5 bg-white/5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <TerminalIcon className="size-4 text-base-content/50" />
          <span className="font-semibold text-sm text-base-content/70">Console Output</span>
        </div>

        {onToggleMaximize && (
          <button
            onClick={onToggleMaximize}
            title={isMaximized ? "Restore layout" : "Maximize console"}
            className="btn btn-ghost btn-sm btn-square text-base-content/50 hover:text-primary hover:bg-primary/10"
          >
            {isMaximized ? <Minimize2Icon className="size-4" /> : <Maximize2Icon className="size-4" />}
          </button>
        )}
      </div>

      <div className="flex-1 overflow-auto p-4 custom-scrollbar font-mono text-sm">
        {output === null ? (
          <div className="h-full flex flex-col items-center justify-center text-base-content/30">
            <TerminalIcon className="size-8 mb-2 opacity-50" />
            <p>Run your code to see output</p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Expected Output Section */}
            {expectedOutput && (
              <div className="bg-base-300/30 rounded-xl p-4 border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase font-bold text-base-content/60">Expected Output</span>
                </div>
                <pre className="whitespace-pre-wrap text-base-content/80 text-sm">{expectedOutput}</pre>
              </div>
            )}

            {/* User Output Section */}
            {output.success ? (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-success mb-2">
                  <CheckCircleIcon className="size-4" />
                  <span className="font-bold">Your Output</span>
                </div>
                <div className="bg-black/30 rounded-xl p-4 border border-white/5 text-base-content/90">
                  <pre className="whitespace-pre-wrap">{output.output}</pre>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-error mb-2">
                  <AlertTriangleIcon className="size-4" />
                  <span className="font-bold">Execution Failed</span>
                </div>
                {output.output && (
                  <div className="bg-black/30 rounded-xl p-4 border border-white/5 text-base-content/70 opacity-50 mb-4">
                    <div className="text-xs uppercase font-bold text-base-content/40 mb-1">Standard Output</div>
                    <pre className="whitespace-pre-wrap">{output.output}</pre>
                  </div>
                )}
                <div className="bg-error/10 rounded-xl p-4 border border-error/20 text-error">
                  <div className="text-xs uppercase font-bold text-error/60 mb-1">Error Log</div>
                  <pre className="whitespace-pre-wrap">{output.error}</pre>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default OutputPanel;
