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
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="size-16 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
              <MicIcon className="size-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
            AI Interview
          </h1>
          <p className="text-base-content/70 text-lg">
            Prepare for your next interview with our AI-powered interview assistant
          </p>
        </div>

        {/* Interview Setup Form */}
        <div className="bg-base-100 rounded-2xl shadow-xl p-6 md:p-8 border border-primary/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Input */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-semibold text-base-content mb-2"
              >
                Role / Position <span className="text-error">*</span>
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                placeholder="e.g., Frontend Developer, Data Scientist, Software Engineer"
                className="w-full px-4 py-3 rounded-xl bg-base-200 border border-base-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
            </div>

            {/* Experience Input */}
            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-semibold text-base-content mb-2"
              >
                Years of Experience <span className="text-error">*</span>
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="e.g., 2, 5, 10"
                min="0"
                max="50"
                className="w-full px-4 py-3 rounded-xl bg-base-200 border border-base-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
            </div>

            {/* Interview Type */}
            <div>
              <label
                htmlFor="interviewType"
                className="block text-sm font-semibold text-base-content mb-2"
              >
                Interview Type <span className="text-error">*</span>
              </label>
              <select
                id="interviewType"
                name="interviewType"
                value={formData.interviewType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-base-200 border border-base-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                required
              >
                <option value="technical">Technical Interview</option>
                <option value="behavioral">Behavioral Interview</option>
                <option value="mixed">Mixed (Technical + Behavioral)</option>
              </select>
            </div>

            {/* Topics to Focus */}
            <div>
              <label
                htmlFor="topicsToFocus"
                className="block text-sm font-semibold text-base-content mb-2"
              >
                Topics to Focus On <span className="text-error">*</span>
              </label>
              <input
                type="text"
                id="topicsToFocus"
                name="topicsToFocus"
                value={formData.topicsToFocus}
                onChange={handleInputChange}
                placeholder="e.g., React, JavaScript, Node.js, Algorithms (comma-separated)"
                className="w-full px-4 py-3 rounded-xl bg-base-200 border border-base-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
              <p className="text-xs text-base-content/60 mt-1">
                Enter topics separated by commas
              </p>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-base-content mb-2"
              >
                Additional Context (Optional)
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Add any additional context or specific areas you'd like to focus on..."
                rows="4"
                className="w-full px-4 py-3 rounded-xl bg-base-200 border border-base-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isCreating}
              className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCreating ? (
                <>
                  <div className="loading loading-spinner loading-sm"></div>
                  <span>Creating Interview...</span>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-base-100 rounded-xl p-4 border border-primary/20">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircleIcon className="size-5 text-success" />
              <h3 className="font-semibold text-base-content">Real-time Feedback</h3>
            </div>
            <p className="text-sm text-base-content/70">
              Get instant feedback on your answers during the interview
            </p>
          </div>

          <div className="bg-base-100 rounded-xl p-4 border border-primary/20">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircleIcon className="size-5 text-success" />
              <h3 className="font-semibold text-base-content">Customized Questions</h3>
            </div>
            <p className="text-sm text-base-content/70">
              Questions tailored to your role and experience level
            </p>
          </div>

          <div className="bg-base-100 rounded-xl p-4 border border-primary/20">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircleIcon className="size-5 text-success" />
              <h3 className="font-semibold text-base-content">Practice Anytime</h3>
            </div>
            <p className="text-sm text-base-content/70">
              Practice your interview skills at your own pace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIInterviewPage;
