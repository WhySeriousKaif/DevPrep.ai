import { useNavigate } from "react-router";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { useActiveSessions, useCreateSession, useMyRecentSessions } from "../hooks/useSessions";
import { PlusIcon } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

import Navbar from "../components/Navbar";
import WelcomeSection from "../components/WelcomeSection";
import ActiveSessions from "../components/ActiveSessions";
import RecentSessions from "../components/RecentSessions";
import CreateSessionModal from "../components/CreateSessionModal";
import StatsCards from "../components/StatsCards";

function DashboardPage() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [roomConfig, setRoomConfig] = useState({ title: "", role: "Software Engineer", duration: 60, questions: [], difficulty: "mixed" });

  const createSessionMutation = useCreateSession();

  const { data: activeSessionsData, isLoading: loadingActiveSessions } = useActiveSessions();
  const { data: recentSessionsData, isLoading: loadingRecentSessions } = useMyRecentSessions();

  const handleCreateRoom = () => {
    if (!roomConfig.questions || roomConfig.questions.length === 0) return;

    createSessionMutation.mutate(
      {
        title: roomConfig.title || "Technical Interview",
        role: roomConfig.role,
        duration: roomConfig.duration,
        questions: roomConfig.questions,
        difficulty: roomConfig.difficulty,
      },
      {
        onSuccess: (data) => {
          setShowCreateModal(false);
          setRoomConfig({ title: "", role: "Software Engineer", duration: 60, questions: [], difficulty: "mixed" });
          navigate(`/session/${data.session._id}`);
        },
      }
    );
  };

  const activeSessions = activeSessionsData?.sessions || [];
  const recentSessions = recentSessionsData?.sessions || [];

  const isUserInSession = (session) => {
    if (!user.id) return false;
    return session.host?.clerkId === user.id || session.participant?.clerkId === user.id;
  };

  return (
    <>
      <div className="min-h-screen selection:bg-primary selection:text-white relative overflow-hidden font-sans">
        <Navbar />

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">

          {/* BENTO GRID LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(120px,auto)] md:auto-rows-[160px]">

            {/* 1. WELCOME SECTION (2x1) */}
            <div className="col-span-1 md:col-span-2 glass-panel p-6 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <div className="size-32 bg-primary/30 rounded-full blur-3xl"></div>
              </div>
              <WelcomeSection />
            </div>

            {/* 2. STATS CARDS (1x1 each or combined) - REUSING STATSCARDS FOR NOW BUT WRAPPED */}
            <div className="col-span-1 md:col-span-1 md:row-span-2">
              <StatsCards
                activeSessionsCount={activeSessions.length}
                recentSessionsCount={recentSessions.length}
              />
            </div>

            {/* 3. QUICK ACTION (1x1) */}
            <div className="col-span-1 md:col-span-1">
              <button
                onClick={() => setShowCreateModal(true)}
                className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-3xl p-6 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-primary/20"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full gap-3">
                  <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                    <PlusIcon className="size-8 text-white" />
                  </div>
                  <span className="font-bold text-white text-lg">New Session</span>
                </div>
              </button>
            </div>

            {/* 4. ACTIVE SESSIONS (2x2) */}
            <div className="col-span-1 md:col-span-2 md:row-span-2 row-span-2">
              <ActiveSessions
                sessions={activeSessions}
                isLoading={loadingActiveSessions}
                isUserInSession={isUserInSession}
              />
            </div>

            {/* 5. PROFILE / INFO (1x1) */}
            <div className="col-span-1 glass-panel p-6 rounded-3xl flex flex-col items-center justify-center gap-3 border border-white/5 md:row-span-1">
              <div className="size-16 rounded-full p-1 bg-gradient-to-tr from-primary/30 to-secondary/30">
                <img src={user?.imageUrl} alt="Profile" className="w-full h-full rounded-full object-cover border-2 border-white/10" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm text-white">{user?.fullName}</p>
                <p className="text-xs text-base-content/50">Free Plan</p>
              </div>
            </div>

          </div>

          {/* RECENT SESSIONS (Full Width) */}
          <div className="mt-8">
            <RecentSessions sessions={recentSessions} isLoading={loadingRecentSessions} />
          </div>

        </div>
      </div>

      <CreateSessionModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        roomConfig={roomConfig}
        setRoomConfig={setRoomConfig}
        onCreateRoom={handleCreateRoom}
        isCreating={createSessionMutation.isPending}
      />
    </>
  );
}

export default DashboardPage;
