import { useNavigate } from "react-router";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import {
  useActiveSessions,
  useCreateSession,
  useMyRecentSessions,
} from "../hooks/useSessions";
import { PlusIcon, UsersIcon, TrophyIcon, ZapIcon } from "lucide-react";

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

        {/* ── Top strip: Welcome (wide) + stacked stat cards + profile ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">

          {/* Welcome card — spans 5 cols, taller to show personality */}
          <Panel className="lg:col-span-5 flex items-center px-7 py-7 min-h-[160px]">
            <div className="flex items-center gap-5 w-full">
              <img
                src={user?.imageUrl}
                alt=""
                className="size-14 rounded-2xl object-cover border border-white/10 shrink-0"
              />
              <WelcomeSection />
            </div>
          </Panel>

          {/* Two stat cards stacked vertically — spans 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Active Sessions stat */}
            <Panel className="flex items-center gap-4 px-6 py-4 flex-1">
              <div className="rounded-2xl bg-primary/10 p-3 shrink-0">
                <ZapIcon className="size-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-2xl font-black text-white leading-none">
                  {activeSessions.length}
                </p>
                <p className="text-xs uppercase tracking-widest text-base-content/50 mt-1">
                  Active Sessions
                </p>
              </div>
            </Panel>

            {/* Total Sessions stat */}
            <Panel className="flex items-center gap-4 px-6 py-4 flex-1">
              <div className="rounded-2xl bg-secondary/10 p-3 shrink-0">
                <TrophyIcon className="size-5 text-secondary" />
              </div>
              <div className="min-w-0">
                <p className="text-2xl font-black text-white leading-none">
                  {recentSessions.length}
                </p>
                <p className="text-xs uppercase tracking-widest text-base-content/50 mt-1">
                  Total Sessions
                </p>
              </div>
            </Panel>
          </div>

          {/* Profile card — spans 3 cols */}
          <Panel className="lg:col-span-3 flex flex-col justify-center gap-3 px-6 py-6">
            <div className="flex items-center gap-3">
              <div className="size-2 rounded-full bg-success animate-pulse shrink-0" />
              <span className="text-xs text-success font-semibold uppercase tracking-widest">
                Online
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-white truncate">
                {user?.fullName}
              </p>
              <p className="text-xs text-base-content/50 truncate mt-0.5">
                {user?.primaryEmailAddress?.emailAddress}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <UsersIcon className="size-3.5 text-base-content/30" />
              <span className="text-[11px] text-base-content/40">
                {activeSessions.length > 0
                  ? `In ${activeSessions.length} live session${activeSessions.length > 1 ? "s" : ""}`
                  : "Not in any session"}
              </span>
            </div>
          </Panel>
        </div>

        {/* ── Main content: Live Sessions (65%) + Past Sessions (35%) ── */}
        <div className="grid grid-cols-1 xl:grid-cols-[65fr_35fr] gap-4">
          {/* Live Sessions — wider, more prominent */}
          <div className="h-[420px]">
            <ActiveSessions
              sessions={activeSessions}
              isLoading={loadingActiveSessions}
              isUserInSession={isUserInSession}
            />
          </div>

          {/* Past Sessions — compact cards, fixed height, scrolls internally */}
          <div className="h-[420px]">
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
