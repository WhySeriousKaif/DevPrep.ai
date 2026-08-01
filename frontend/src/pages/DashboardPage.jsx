import { useNavigate } from "react-router";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import {
  useActiveSessions,
  useCreateSession,
  useMyRecentSessions,
} from "../hooks/useSessions";
import { PlusIcon, UsersIcon, TrophyIcon } from "lucide-react";

import { PageShell, PageHeader, Panel } from "../components/layout/PageShell";
import WelcomeSection from "../components/WelcomeSection";
import ActiveSessions from "../components/ActiveSessions";
import RecentSessions from "../components/RecentSessions";
import CreateSessionModal from "../components/CreateSessionModal";

function DashboardPage() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [roomConfig, setRoomConfig] = useState({
    title: "",
    role: "Software Engineer",
    duration: 60,
    questions: [],
    difficulty: "mixed",
  });

  const createSessionMutation = useCreateSession();
  const { data: activeSessionsData, isLoading: loadingActiveSessions } =
    useActiveSessions();
  const { data: recentSessionsData, isLoading: loadingRecentSessions } =
    useMyRecentSessions();

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
          setRoomConfig({
            title: "",
            role: "Software Engineer",
            duration: 60,
            questions: [],
            difficulty: "mixed",
          });
          navigate(`/session/${data.session._id}`);
        },
      },
    );
  };

  const activeSessions = activeSessionsData?.sessions || [];
  const recentSessions = recentSessionsData?.sessions || [];

  const isUserInSession = (session) =>
    user?.id &&
    (session.host?.clerkId === user.id ||
      session.participant?.clerkId === user.id);

  return (
    <>
      <PageShell className="max-w-[1180px] mx-auto">
        <PageHeader
          icon={<UsersIcon className="size-4 text-primary" />}
          title="Dashboard"
          subtitle="Sessions, stats, and quick actions"
          action={
            <button
              onClick={() => setShowCreateModal(true)}
              className="btn btn-primary btn-sm rounded-lg gap-1.5 px-3 h-8 min-h-0 text-xs font-semibold"
            >
              <PlusIcon className="size-3.5" />
              New Session
            </button>
          }
        />

        {/* Top strip: welcome + inline stats + profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
          <Panel className="lg:col-span-4 flex items-center px-6 py-6 min-h-[170px]">
            <WelcomeSection />
          </Panel>

          <Panel className="lg:col-span-4 flex flex-col sm:flex-row items-center justify-around gap-5 px-6 py-6 min-h-[170px]">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-2">
                <UsersIcon className="size-4" />
                <span className="text-3xl sm:text-4xl font-black text-white">
                  {activeSessions.length}
                </span>
              </div>
              <p className="text-sm uppercase tracking-wider text-base-content/50">
                Active
              </p>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-secondary mb-2">
                <TrophyIcon className="size-4" />
                <span className="text-3xl sm:text-4xl font-black text-white">
                  {recentSessions.length}
                </span>
              </div>
              <p className="text-sm uppercase tracking-wider text-base-content/50">
                Total
              </p>
            </div>
          </Panel>

          <Panel className="lg:col-span-4 flex items-center gap-4 px-6 py-6">
            <img
              src={user?.imageUrl}
              alt=""
              className="size-10 rounded-2xl object-cover border border-white/10"
            />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white truncate">
                {user?.fullName}
              </p>
              <p className="text-[11px] text-base-content/50">Welcome back</p>
            </div>
          </Panel>
        </div>

        {/* Main: live sessions + recent */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
          <div className="xl:col-span-6 min-h-[420px]">
            <ActiveSessions
              sessions={activeSessions}
              isLoading={loadingActiveSessions}
              isUserInSession={isUserInSession}
            />
          </div>
          <div className="xl:col-span-6 min-h-[420px]">
            <RecentSessions
              sessions={recentSessions}
              isLoading={loadingRecentSessions}
            />
          </div>
        </div>
      </PageShell>

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
