import Editor from "@monaco-editor/react";
import { Loader2Icon, PlayIcon, SparklesIcon, Maximize2Icon, Minimize2Icon } from "lucide-react";
import { LANGUAGE_CONFIG } from "../data/problems";

function CodeEditorPanel({
  selectedLanguage,
  code,
  isRunning,
  onLanguageChange,
  onCodeChange,
  onRunCode,
  isMaximized,
  onToggleMaximize,
}) {
  return (
    <div className="h-full bg-base-100/50 backdrop-blur-md flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
        <div className="flex items-center gap-3">
          <div className="bg-white/10 p-1.5 rounded-lg">
            <img
              src={LANGUAGE_CONFIG[selectedLanguage].icon}
              alt={LANGUAGE_CONFIG[selectedLanguage].name}
              className="size-5"
            />
          </div>
          <select
            className="select select-sm bg-black/20 border-white/10 text-white focus:outline-none focus:border-primary/50"
            value={selectedLanguage}
            onChange={onLanguageChange}
          >
            {Object.entries(LANGUAGE_CONFIG).map(([key, lang]) => (
              <option key={key} value={key} className="bg-base-300">
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="btn btn-primary btn-sm gap-2 shadow-lg shadow-primary/20 hover:scale-105 transition-all"
            disabled={isRunning}
            onClick={onRunCode}
          >
            {isRunning ? (
              <>
                <Loader2Icon className="size-4 animate-spin" />
                Running...
              </>
            ) : (
              <>
                <PlayIcon className="size-4 fill-current" />
                Run Code
              </>
            )}
          </button>

          {onToggleMaximize && (
            <button
              onClick={onToggleMaximize}
              title={isMaximized ? "Restore layout" : "Maximize editor"}
              className="btn btn-ghost btn-sm btn-square text-base-content/50 hover:text-primary hover:bg-primary/10"
            >
              {isMaximized ? <Minimize2Icon className="size-4" /> : <Maximize2Icon className="size-4" />}
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 relative group">
        <Editor
          height={"100%"}
          language={LANGUAGE_CONFIG[selectedLanguage].monacoLang}
          value={code}
          onChange={onCodeChange}
          theme="vs-dark"
          options={{
            fontSize: 15,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            minimap: { enabled: false },
            padding: { top: 15, bottom: 15 },
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            fontLigatures: true,
            cursorBlinking: "smooth",
            smoothScrolling: true,
            contextmenu: true,
            roundedSelection: true,
          }}
          className="bg-transparent"
        />
        {/* Glow effect for editor focus or activity could go here */}
      </div>
    </div>
  );
}
export default CodeEditorPanel;
