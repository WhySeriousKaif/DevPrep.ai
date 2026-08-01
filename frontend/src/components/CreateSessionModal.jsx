import { Code2Icon, LoaderIcon, PlusIcon, XIcon } from "lucide-react";
import { useAllProblems } from "../hooks/useProblems";
import { useState } from "react";

function CreateSessionModal({
  isOpen,
  onClose,
  roomConfig,
  setRoomConfig,
  onCreateRoom,
  isCreating,
}) {
  const { data: problemsData, isLoading } = useAllProblems();
  const problems = problemsData?.problems || [];

  const [search, setSearch] = useState("");

  // Filter problems based on search query
  const filteredProblems = problems.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.difficulty.toLowerCase().includes(search.toLowerCase())
  );

  if (!isOpen) return null;

  const handleToggleQuestion = (problemId) => {
    setRoomConfig((prev) => {
      const isSelected = prev.questions.includes(problemId);
      if (isSelected) {
        return { ...prev, questions: prev.questions.filter((id) => id !== problemId) };
      } else {
        return { ...prev, questions: [...prev.questions, problemId] };
      }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl p-6 md:p-8 animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors text-white/50 hover:text-white"
        >
          <XIcon className="size-5" />
        </button>

        <h3 className="font-black text-2xl mb-2 text-white">Create New Session</h3>
        <p className="text-base-content/60 mb-6">Start a collaborative live coding interview</p>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="label px-0 text-white font-semibold">Title</label>
              <input
                type="text"
                className="input w-full bg-white/5 border-white/10 text-white"
                placeholder="e.g. Technical Interview"
                value={roomConfig.title}
                onChange={(e) => setRoomConfig({ ...roomConfig, title: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <label className="label px-0 text-white font-semibold">Role</label>
              <input
                type="text"
                className="input w-full bg-white/5 border-white/10 text-white"
                placeholder="e.g. Software Engineer"
                value={roomConfig.role}
                onChange={(e) => setRoomConfig({ ...roomConfig, role: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="label px-0 text-white font-semibold">Duration (Minutes)</label>
              <select
                className="select w-full bg-white/5 border-white/10 text-white"
                value={roomConfig.duration}
                onChange={(e) => setRoomConfig({ ...roomConfig, duration: parseInt(e.target.value) })}
              >
                <option value={30} className="bg-base-300">30 Minutes</option>
                <option value={45} className="bg-base-300">45 Minutes</option>
                <option value={60} className="bg-base-300">60 Minutes</option>
                <option value={90} className="bg-base-300">90 Minutes</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="label px-0 text-white font-semibold">Overall Difficulty</label>
              <select
                className="select w-full bg-white/5 border-white/10 text-white"
                value={roomConfig.difficulty}
                onChange={(e) => setRoomConfig({ ...roomConfig, difficulty: e.target.value })}
              >
                <option value="easy" className="bg-base-300">Easy</option>
                <option value="medium" className="bg-base-300">Medium</option>
                <option value="hard" className="bg-base-300">Hard</option>
                <option value="mixed" className="bg-base-300">Mixed</option>
              </select>
            </div>
          </div>

          {/* PROBLEM SELECTION */}
          <div className="space-y-2">
            <label className="label px-0">
              <span className="label-text font-semibold text-white">Select Questions</span>
              <span className="label-text-alt text-error">*</span>
            </label>

            {isLoading ? (
              <div className="p-4 flex justify-center text-white/50"><LoaderIcon className="animate-spin" /></div>
            ) : (
              <>
                {/* Search Input */}
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Search problems..."
                    className="input w-full bg-white/5 border-white/10 text-white"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                {/* Problem List */}
                <div className="h-48 overflow-y-auto bg-white/5 border border-white/10 rounded-xl p-2 space-y-1">
                  {filteredProblems.map((problem) => (
                    <label key={problem.id} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm checkbox-primary"
                        checked={roomConfig.questions.includes(problem.id)}
                        onChange={() => handleToggleQuestion(problem.id)}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium text-sm truncate">{problem.title}</span>
                          <span className="text-xs opacity-60 ml-2">{problem.difficulty}</span>
                        </div>
                        <p className="text-xs text-base-content/60 truncate">{problem.topic}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </>
            )}
            <p className="text-xs text-base-content/60 mt-1">
              Selected: {roomConfig.questions.length} question(s)
            </p>
          </div>

          {/* ROOM SUMMARY */}
          {roomConfig.questions.length > 0 && (
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-start gap-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Code2Icon className="size-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-white mb-1">Session Details</p>
                <div className="text-sm text-base-content/70 space-y-1">
                  <p>
                    Questions: <span className="font-semibold text-primary">{roomConfig.questions.length} Selected</span>
                  </p>
                  <p>
                    Duration: <span className="font-semibold">{roomConfig.duration} Minutes</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3 justify-end mt-8">
          <button
            className="btn btn-ghost hover:bg-white/10"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="btn btn-primary gap-2 shadow-lg shadow-primary/20 px-8"
            onClick={(e) => {
              e.preventDefault();
              if (!isCreating) onCreateRoom();
            }}
            disabled={isCreating || roomConfig.questions.length === 0}
            type="button"
          >
            {isCreating ? (
              <LoaderIcon className="size-5 animate-spin" />
            ) : (
              <PlusIcon className="size-5" />
            )}

            {isCreating ? "Creating..." : "Create Session"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateSessionModal;
