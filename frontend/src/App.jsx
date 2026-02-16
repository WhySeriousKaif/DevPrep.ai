import { useAuth, useUser } from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import { setupAxiosInterceptors } from "./lib/axios";

import { Toaster } from "react-hot-toast";
import DashboardPage from "./pages/DashboardPage";
import ProblemPage from "./pages/ProblemPage";
import ProblemsPage from "./pages/ProblemsPage";
import SessionPage from "./pages/SessionPage";
import AIInterviewPage from "./pages/AIInterviewPage";
import InterviewSessionPage from "./pages/InterviewSessionPage";
import InterviewResultsPage from "./pages/InterviewResultsPage";

function App() {
  const { isSignedIn, isLoaded } = useUser();
  const { getToken } = useAuth();

  useEffect(() => {
    // Inject the getToken function into our Axios interceptor
    // This allows axios.js to fetch the current session token for every request
    setupAxiosInterceptors(getToken);
  }, [getToken]);

  // this will get rid of the flickering effect
  if (!isLoaded) return null;

  return (
    <>
      <Routes>
        <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />} />
        <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />} />

        <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
        <Route path="/problem/:id" element={isSignedIn ? <ProblemPage /> : <Navigate to={"/"} />} />
        <Route path="/session/:id" element={isSignedIn ? <SessionPage /> : <Navigate to={"/"} />} />
        <Route path="/ai-interview" element={isSignedIn ? <AIInterviewPage /> : <Navigate to={"/"} />} />
        <Route path="/interview/:id" element={isSignedIn ? <InterviewSessionPage /> : <Navigate to={"/"} />} />
        <Route path="/interview/:id/results" element={isSignedIn ? <InterviewResultsPage /> : <Navigate to={"/"} />} />
      </Routes>

      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
}

export default App;