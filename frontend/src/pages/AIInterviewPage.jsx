import React, { useState } from "react";
import { useNavigate } from "react-router";
import { MicIcon, SparklesIcon, XIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import { interviewApi } from "../api/interview";
import toast from "react-hot-toast";

function AIInterviewPage() {
  const navigate = useNavigate();
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    role: "",
    experience: "",
    interviewType: "technical",
    topicsToFocus: "",
    description: "",
  });

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

      const interviewData = {
        role: formData.role,
        experience: parseInt(formData.experience) || 1,
        interviewType: formData.interviewType,
        topicsToFocus: topicsArray,
        description: formData.description,
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
        error.response?.data?.message || "Failed to create interview session"
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
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      <Navbar />

      <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl mb-6 shadow-2xl shadow-primary/10 border border-white/5">
            <MicIcon className="size-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            <span className="neon-text-primary text-white">AI Interview</span> Assistant
          </h1>
          <p className="text-lg text-base-content/60 max-w-xl mx-auto">
            Prepare for your next interview with our intelligent AI interviewer. Get real-time feedback and detailed performance analytics.
          </p>
        </div>

        {/* Interview Setup Form */}
        <div className="glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden border-white/5 shadow-2xl">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[80px] -z-10" />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Role Input */}
              <div className="space-y-2">
                <label htmlFor="role" className="text-sm font-semibold text-white ml-1">
                  Role / Position <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  placeholder="e.g., Frontend Developer"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder:text-white/20"
                  required
                />
              </div>

              {/* Experience Input */}
              <div className="space-y-2">
                <label htmlFor="experience" className="text-sm font-semibold text-white ml-1">
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
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder:text-white/20"
                  required
                />
              </div>
            </div>

            {/* Interview Type */}
            <div className="space-y-2">
              <label htmlFor="interviewType" className="text-sm font-semibold text-white ml-1">
                Interview Type <span className="text-error">*</span>
              </label>
              <div className="relative">
                <select
                  id="interviewType"
                  name="interviewType"
                  value={formData.interviewType}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white appearance-none cursor-pointer hover:bg-white/10"
                  required
                >
                  <option value="technical" className="bg-base-200">Technical Interview</option>
                  <option value="behavioral" className="bg-base-200">Behavioral Interview</option>
                  <option value="mixed" className="bg-base-200">Mixed (Technical + Behavioral)</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            {/* Topics to Focus */}
            <div className="space-y-2">
              <label htmlFor="topicsToFocus" className="text-sm font-semibold text-white ml-1">
                Topics to Focus On <span className="text-error">*</span>
              </label>
              <input
                type="text"
                id="topicsToFocus"
                name="topicsToFocus"
                value={formData.topicsToFocus}
                onChange={handleInputChange}
                placeholder="e.g., React, Node.js, System Design..."
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder:text-white/20"
                required
              />
              <p className="text-xs text-white/40 ml-1">
                Enter topics separated by commas
              </p>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-semibold text-white ml-1">
                Additional Context (Optional)
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Add any specific areas you'd like to focus on..."
                rows="4"
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder:text-white/20 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isCreating}
              className="w-full px-6 py-4 btn-primary rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
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

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "Real-time Feedback",
              desc: "Get instant feedback on your answers during the interview",
              icon: <div className="size-2 bg-success rounded-full animate-pulse" />
            },
            {
              title: "Customized Questions",
              desc: "Questions tailored to your role and experience level",
              icon: <div className="size-2 bg-primary rounded-full animate-pulse" />
            },
            {
              title: "Practice Anytime",
              desc: "Practice your interview skills at your own pace",
              icon: <div className="size-2 bg-secondary rounded-full animate-pulse" />
            }
          ].map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl hover:bg-white/5 border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h3 className="font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-sm text-base-content/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AIInterviewPage;
