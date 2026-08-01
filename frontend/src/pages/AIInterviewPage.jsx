import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { MicIcon, SparklesIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import { interviewApi } from "../api/interview";
import toast from "react-hot-toast";

function AIInterviewPage() {
  const navigate = useNavigate();
  const [isCreating, setIsCreating] = useState(false);
  const [pastInterviews, setPastInterviews] = useState([]);
  const [loadingPastInterviews, setLoadingPastInterviews] = useState(true);
  const [formData, setFormData] = useState({
    role: "",
    experience: "",
    interviewType: "technical",
    topicsToFocus: "",
    description: "",
    questionCount: 8,
  });

  const loadPastInterviews = async () => {
    setLoadingPastInterviews(true);
    try {
      const response = await interviewApi.getMyInterviews();
      if (response.success) {
        setPastInterviews(response.interviews || []);
      }
    } catch (error) {
      console.error("Error fetching past interviews:", error);
    } finally {
      setLoadingPastInterviews(false);
    }
  };

  useEffect(() => {
    loadPastInterviews();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.role || !formData.experience || !formData.topicsToFocus) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsCreating(true);
    try {
      // Convert topicsToFocus string to array
      const topicsArray = formData.topicsToFocus
        .split(",")
        .map((topic) => topic.trim())
        .filter((topic) => topic.length > 0);

      const parsedExperience = parseInt(formData.experience, 10);

      const interviewData = {
        role: formData.role,
        // `|| 1` here would silently turn a genuine "0 years" into "1 years"
        // since 0 is falsy in JS — only fall back for a truly invalid/non-numeric input.
        experience: Number.isNaN(parsedExperience) ? 1 : parsedExperience,
        interviewType: formData.interviewType,
        topicsToFocus: topicsArray,
        description: formData.description,
        questionCount: formData.questionCount,
      };

      const response = await interviewApi.createInterview(interviewData);

      if (response.success) {
        toast.success("Interview session created successfully!");
        // Navigate to interview session
        navigate(`/interview/${response.interview._id}`);
      } else {
        toast.error(response.message || "Failed to create interview");
      }
    } catch (error) {
      console.error("Error creating interview:", error);
      toast.error(
        error.response?.data?.message || "Failed to create interview session",
      );
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white relative overflow-hidden">
      {/* BACKGROUND BLOBS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-float-delayed" />
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      <Navbar />

      <div className="mx-auto px-4 md:px-6 py-8 relative z-10 max-w-[1100px]">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="text-3xl md:text-4xl font-black mb-0 tracking-tight">AI Interview Assistant</h1>
          <p className="text-lg text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            Prepare for your next interview with our intelligent AI interviewer.
            Get real-time feedback and detailed performance analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="space-y-6 w-full">
            {/* Interview Setup Form */}
            <div className="glass-panel rounded-3xl p-4 md:p-5 relative overflow-hidden border-white/5 shadow-2xl min-h-[640px]">
              {/* Decorative gradients */}
              <div className="absolute top-0 right-0 w-52 h-52 bg-primary/10 blur-[70px] -z-10" />
              <div className="absolute bottom-0 left-0 w-52 h-52 bg-secondary/10 blur-[70px] -z-10" />

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Role Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="role"
                      className="text-sm font-semibold text-white ml-1"
                    >
                      Role / Position <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      placeholder="e.g., Frontend Developer"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder:text-white/20"
                      required
                    />
                  </div>

                  {/* Experience Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="experience"
                      className="text-sm font-semibold text-white ml-1"
                    >
                      Years of Experience <span className="text-error">*</span>
                    </label>
                    <input
                      type="number"
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="e.g., 2"
                      min="0"
                      max="50"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder:text-white/20"
                      required
                    />
                  </div>
                </div>

                {/* Interview Type */}
                <div className="space-y-2">
                  <label
                    htmlFor="interviewType"
                    className="text-sm font-semibold text-white ml-1"
                  >
                    Interview Type <span className="text-error">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="interviewType"
                      name="interviewType"
                      value={formData.interviewType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white appearance-none cursor-pointer hover:bg-white/10"
                      required
                    >
                      <option value="technical" className="bg-base-200">
                        Technical Interview
                      </option>
                      <option value="behavioral" className="bg-base-200">
                        Behavioral Interview
                      </option>
                      <option value="mixed" className="bg-base-200">
                        Mixed (Technical + Behavioral)
                      </option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                      <svg
                        className="size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Number of Questions */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white ml-1">
                    Number of Questions
                  </label>
                  <div className="flex gap-2">
                    {[5, 8, 12].map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, questionCount: n }))
                        }
                        className={`flex-1 py-2 rounded-2xl border text-sm font-semibold transition-all ${
                          formData.questionCount === n
                            ? "bg-primary text-white border-primary"
                            : "border-white/10 text-white/60 hover:bg-white/5"
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Topics to Focus */}
                <div className="space-y-2">
                  <label
                    htmlFor="topicsToFocus"
                    className="text-sm font-semibold text-white ml-1"
                  >
                    Topics to Focus On <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="topicsToFocus"
                    name="topicsToFocus"
                    value={formData.topicsToFocus}
                    onChange={handleInputChange}
                    placeholder="e.g., React, Node.js, System Design..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder:text-white/20"
                    required
                  />
                  <p className="text-xs text-white/40 ml-1">
                    Enter topics separated by commas
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label
                    htmlFor="description"
                    className="text-sm font-semibold text-white ml-1"
                  >
                    Additional Context (Optional)
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Add any specific areas you'd like to focus on..."
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder:text-white/20 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isCreating}
                  className="w-full px-4 py-2.5 btn-primary rounded-xl text-white font-bold text-sm shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed mt-3"
                >
                  {isCreating ? (
                    <>
                      <div className="loading loading-spinner text-white"></div>
                      <span>Setting up your interview...</span>
                    </>
                  ) : (
                    <>
                      <SparklesIcon className="size-5" />
                      <span>Start AI Interview</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Real-time Feedback",
                  desc: "Get instant feedback on your answers during the interview",
                  icon: (
                    <div className="size-2 bg-success rounded-full animate-pulse" />
                  ),
                },
                {
                  title: "Customized Questions",
                  desc: "Questions tailored to your role and experience level",
                  icon: (
                    <div className="size-2 bg-primary rounded-full animate-pulse" />
                  ),
                },
                {
                  title: "Practice Anytime",
                  desc: "Practice your interview skills at your own pace",
                  icon: (
                    <div className="size-2 bg-secondary rounded-full animate-pulse" />
                  ),
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card p-3 rounded-3xl hover:bg-white/5 border border-white/5 min-h-[110px]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {item.icon}
                    <h3 className="font-semibold text-white text-sm">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-base text-base-content/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-6 border border-white/10 bg-slate-950/80 shadow-2xl shadow-black/20 min-h-[640px]">
            <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-5">
              <div>
                <h2 className="text-xl font-bold text-white">
                  Your AI Interview History
                </h2>
                <p className="text-sm text-base-content/60">
                  All your interview sessions are stored for this account.
                  Reopen past sessions or review completed results anytime.
                </p>
              </div>
              <button
                type="button"
                onClick={loadPastInterviews}
                className="btn btn-sm btn-outline text-white border-white/10 hover:bg-white/5"
              >
                Refresh History
              </button>
            </div>

            {loadingPastInterviews ? (
              <div className="flex items-center justify-center py-10">
                <div className="loading loading-spinner text-white"></div>
              </div>
            ) : pastInterviews.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-white/10 p-8 text-center text-base-content/60">
                No AI interview sessions found yet. Your first setup will appear
                here once you create it.
              </div>
            ) : (
              <div className="space-y-4">
                {pastInterviews.map((interview) => (
                  <div
                    key={interview._id}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <p className="text-base font-semibold text-white">
                          {interview.role}
                        </p>
                        <p className="text-sm text-base-content/60">
                          {interview.interviewType} • {interview.experience}{" "}
                          years
                        </p>
                      </div>
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${
                          interview.status === "completed"
                            ? "bg-success/20 text-success"
                            : interview.status === "in-progress"
                              ? "bg-primary/20 text-primary"
                              : interview.status === "pending"
                                ? "bg-secondary/20 text-secondary"
                                : "bg-white/10 text-white/80"
                        }`}
                      >
                        {interview.status}
                      </span>
                    </div>

                    {interview.topicsToFocus?.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {interview.topicsToFocus.map((topic, idx) => (
                          <span
                            key={idx}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-base-content/70"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-5 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => navigate(`/interview/${interview._id}`)}
                        className="btn btn-sm btn-outline text-white border-white/10 hover:bg-white/5"
                      >
                        Open Session
                      </button>
                      {interview.status === "completed" && (
                        <button
                          type="button"
                          onClick={() =>
                            navigate(`/interview/${interview._id}/results`)
                          }
                          className="btn btn-sm btn-primary text-white"
                        >
                          View Results
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIInterviewPage;
