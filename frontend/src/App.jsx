import "./App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ProblemPage from "./pages/Problem";
import { Navigate } from "react-router";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

function App() {
  const {isSignedIn} = useUser();
  return (
    <>
      <h1 className="text-red-500 font-bold underline">welcome</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/problems" element={isSignedIn ? <ProblemPage /> : <Navigate to="/" />} />
      </Routes>
      <Toaster position="top-right" toastOptions={{
        success: {
          duration: 3000,
        },
        error: {
          duration: 3000,
        },
      }} />
    </>
  );
}

export default App;
