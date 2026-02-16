import { Code2Icon, LoaderIcon, PlusIcon, XIcon } from "lucide-react";
import { PROBLEMS } from "../data/problems";

function CreateSessionModal({
  isOpen,
  onClose,
  roomConfig,
  setRoomConfig,
  onCreateRoom,
  isCreating,
}) {
  const problems = Object.values(PROBLEMS);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-2xl glass-panel rounded-3xl p-6 md:p-8 animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors text-white/50 hover:text-white"
        >
          <XIcon className="size-5" />
        </button>

        <h3 className="font-black text-2xl mb-2 text-white">Create New Session</h3>
        <p className="text-base-content/60 mb-6">Start a collaborative coding session</p>

        <div className="space-y-6">
          {/* PROBLEM SELECTION */}
          <div className="space-y-2">
            <label className="label px-0">
              <span className="label-text font-semibold text-white">Select Problem</span>
              <span className="label-text-alt text-error">*</span>
            </label>

            <select
              className="select w-full bg-white/5 border-white/10 text-white focus:outline-none focus:border-primary/50"
              value={roomConfig.problem}
              onChange={(e) => {
                const selectedProblem = problems.find((p) => p.title === e.target.value);
                setRoomConfig({
                  difficulty: selectedProblem.difficulty,
                  problem: e.target.value,
                });
              }}
            >
              <option value="" disabled className="bg-base-300">
                Choose a coding problem...
              </option>

              {problems.map((problem) => (
                <option key={problem.id} value={problem.title} className="bg-base-300 text-base-content">
                  {problem.title} ({problem.difficulty})
                </option>
              ))}
            </select>
          </div>

          {/* ROOM SUMMARY */}
          {roomConfig.problem && (
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-start gap-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Code2Icon className="size-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-white mb-1">Session Details</p>
                <div className="text-sm text-base-content/70 space-y-1">
                  <p>
                    Problem: <span className="font-semibold text-primary">{roomConfig.problem}</span>
                  </p>
                  <p>
                    Max Participants: <span className="font-semibold">2 (1-on-1 session)</span>
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
            disabled={isCreating || !roomConfig.problem}
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

