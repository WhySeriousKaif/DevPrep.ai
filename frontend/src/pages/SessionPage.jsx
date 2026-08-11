import { useUser } from "@clerk/clerk-react";
import { useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router";
import { useEndSession, useJoinSession, useSessionById, useStartSession } from "../hooks/useSessions";
import { useProblemById, useAllProblems } from "../hooks/useProblems";
import { executeCode } from "../lib/piston";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { getDifficultyBadgeClass } from "../lib/utils";
import {
  Loader2Icon,
  LogOutIcon,
  PhoneOffIcon,
  PlayIcon,
  CheckCircle2Icon,
  ArrowLeftIcon,
  Maximize2Icon,
  Minimize2Icon,
} from "lucide-react";
import CodeEditorPanel from "../components/CodeEditorPanel";
import OutputPanel from "../components/OutputPanel";

import useStreamClient from "../hooks/useStreamClient";
import { StreamCall, StreamVideo } from "@stream-io/video-react-sdk";
import VideoCallUI from "../components/VideoCallUI";

function SessionPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useUser();
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const { data: sessionData, isLoading: loadingSession, refetch } = useSessionById(id);
  const joinSessionMutation = useJoinSession();
  const endSessionMutation = useEndSession();
  const startSessionMutation = useStartSession();
  const { data: allProblemsData } = useAllProblems();

  const session = sessionData?.session;
  const isHost = session?.host?.clerkId === user?.id;
  const isParticipant = session?.participant?.clerkId === user?.id;

  const { call, channel, chatClient, isInitializingCall, streamClient } = useStreamClient(
    session,
    loadingSession,
    isHost,
    isParticipant
  );

  // Which panel (if any) is expanded to fill the whole workspace: "problem" | "video" | "editor" | "output"
  const [maximized, setMaximized] = useState(null);
  const toggleMaximize = (key) => setMaximized((prev) => (prev === key ? null : key));

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const activeProblemId = session?.questions?.[activeQuestionIndex];
  
  const { data: activeProblemData } = useProblemById(activeProblemId);
  const problemData = activeProblemData?.problem;

  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  // Store code per problem and language: { [problemId]: { [lang]: code } }
  const [codes, setCodes] = useState({});

  const code = codes[activeProblemId]?.[selectedLanguage] ?? problemData?.starterCode?.[selectedLanguage] ?? "";

  // Timer logic
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (session?.status === "active" && session?.startTime) {
      const interval = setInterval(() => {
        const elapsed = (Date.now() - new Date(session.startTime).getTime()) / 1000;
        const remaining = Math.max(0, session.duration * 60 - elapsed);
        setTimeLeft(remaining);
        
        if (remaining === 0 && isHost && session.status !== "completed") {
          handleEndSession();
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [session?.status, session?.startTime, session?.duration, isHost]);

  const formatTime = (seconds) => {
    if (seconds === null) return "--:--";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // auto-join session if user is not already a participant and not the host
  useEffect(() => {
    if (!session || !user || loadingSession) return;
    if (isHost || isParticipant) return;
    joinSessionMutation.mutate(id, { onSuccess: refetch });
  }, [session, user, loadingSession, isHost, isParticipant, id]);

  // redirect the "participant" when session ends
  useEffect(() => {
    if (!session || loadingSession) return;
    if (session.status === "completed") navigate("/dashboard");
  }, [session, loadingSession, navigate]);

  // Initialize code when problem loads
  useEffect(() => {
    if (problemData && activeProblemId) {
      setCodes((prev) => {
        if (!prev[activeProblemId]) {
          return {
            ...prev,
            [activeProblemId]: { ...problemData.starterCode }
          };
        }
        return prev;
      });
    }
  }, [problemData, activeProblemId]);

  // Real-time Code and State Sync
  useEffect(() => {
    if (!channel) return;

    const handleCodeChange = (event) => {
      if (event.user.id === user.id) return;
      const { problemId, language, code: newCode } = event.data;
      if (problemId && language && newCode !== undefined) {
        setCodes((prev) => ({
          ...prev,
          [problemId]: {
            ...prev[problemId],
            [language]: newCode
          }
        }));
      }
    };

    const handleLanguageSync = (event) => {
      if (event.user.id === user.id) return;
      const newLang = event.data?.language;
      if (newLang) {
        setSelectedLanguage(newLang);
      }
    };

    const handleQuestionSync = (event) => {
      if (event.user.id === user.id) return;
      const index = event.data?.index;
      if (index !== undefined) {
        setActiveQuestionIndex(index);
        setOutput(null);
      }
    };

    channel.on("code-change", handleCodeChange);
    channel.on("language-change", handleLanguageSync);
    channel.on("question-change", handleQuestionSync);

    return () => {
      channel.off("code-change", handleCodeChange);
      channel.off("language-change", handleLanguageSync);
      channel.off("question-change", handleQuestionSync);
    };
  }, [channel, user]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    setOutput(null);

    if (channel) {
      channel.sendEvent({
        type: "language-change",
        data: { language: newLang },
      });
    }
  };

  const handleCodeUpdate = (value) => {
    setCodes((prev) => ({
      ...prev,
      [activeProblemId]: {
        ...prev[activeProblemId],
        [selectedLanguage]: value
      }
    }));

    if (channel) {
      channel.sendEvent({
        type: "code-change",
        data: { problemId: activeProblemId, language: selectedLanguage, code: value },
      });
    }
  };

  const handleChangeQuestion = (index) => {
    setActiveQuestionIndex(index);
    setOutput(null);
    if (channel) {
      channel.sendEvent({
        type: "question-change",
        data: { index },
      });
    }
  };

  const normalizeOutput = (output) => {
    return output
      .trim()
      .split("\n")
      .map((line) =>
        line.trim().replace(/\[\s+/g, "[").replace(/\s+\]/g, "]").replace(/\s*,\s*/g, ",")
      )
      .filter((line) => line.length > 0)
      .join("\n");
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);

    const result = await executeCode(selectedLanguage, code);
    
    // Check against expected test cases if they exist
    if (result.success && problemData?.testCases?.[selectedLanguage]) {
      const expectedLines = problemData.testCases[selectedLanguage];
      const actualLines = result.output.trim().split("\n").filter(l => l.length > 0);
      
      let passed = true;
      let expectedStr = expectedLines.join("\n");
      
      if (normalizeOutput(result.output) !== normalizeOutput(expectedStr)) {
        passed = false;
      }

      setOutput({
        ...result,
        success: passed,
        expectedStr
      });
    } else {
      setOutput(result);
    }
    
    setIsRunning(false);
  };

  const handleEndSession = () => {
    if (confirm("Are you sure you want to end this session? All participants will be notified.")) {
      endSessionMutation.mutate(id, { onSuccess: () => navigate("/dashboard") });
    }
  };

  const handleStartSession = () => {
    startSessionMutation.mutate(id, { onSuccess: refetch });
  };

  const renderProblemPanel = () => (
    <div className="h-full flex flex-col bg-base-200">
      <div className="flex items-center justify-between px-4 py-2 border-b border-base-300 bg-base-300/40">
        <span className="text-xs font-bold uppercase tracking-wide text-base-content/50">Question</span>
        <button
          onClick={() => toggleMaximize("problem")}
          title={maximized === "problem" ? "Restore layout" : "Maximize question"}
          className="btn btn-ghost btn-xs btn-square text-base-content/50 hover:text-primary hover:bg-primary/10"
        >
          {maximized === "problem" ? <Minimize2Icon className="size-3.5" /> : <Maximize2Icon className="size-3.5" />}
        </button>
      </div>

      {/* Question Tabs */}
      {session?.questions?.length > 1 && (
        <div className="flex overflow-x-auto bg-base-300 custom-scrollbar border-b border-base-100">
          {session.questions.map((qId, idx) => {
            const title = allProblemsData?.problems?.find(p => p.id === qId)?.title || `Question ${idx + 1}`;
            return (
              <button
                key={idx}
                onClick={() => isHost && handleChangeQuestion(idx)}
                className={`px-4 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                  activeQuestionIndex === idx
                    ? "border-primary text-primary bg-base-200"
                    : "border-transparent text-base-content/50 hover:bg-base-200/50"
                } ${!isHost && activeQuestionIndex !== idx ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={!isHost && activeQuestionIndex !== idx}
              >
                {title}
              </button>
            )
          })}
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {problemData ? (
          <>
            <div className="flex items-start justify-between mb-2">
              <h2 className="text-2xl font-bold text-base-content">{problemData.title}</h2>
              <span className={`badge ${getDifficultyBadgeClass(problemData.difficulty)}`}>
                {problemData.difficulty}
              </span>
            </div>

            <div className="bg-base-100 rounded-xl shadow-sm p-5 border border-base-300">
              <div className="space-y-3 text-base leading-relaxed">
                <p className="text-base-content/90">{problemData.description?.text}</p>
                {problemData.description?.notes?.map((note, idx) => (
                  <p key={idx} className="text-base-content/90 font-medium bg-warning/10 p-2 rounded text-warning">
                    Note: {note}
                  </p>
                ))}
              </div>
            </div>

            {problemData.examples?.length > 0 && (
              <div className="bg-base-100 rounded-xl shadow-sm p-5 border border-base-300 space-y-4">
                <h3 className="text-lg font-bold text-base-content">Examples</h3>
                {problemData.examples.map((example, idx) => (
                  <div key={idx} className="bg-base-200 rounded-lg p-4 font-mono text-sm space-y-1.5">
                    <div className="flex gap-2">
                      <span className="text-primary font-bold min-w-[70px]">Input:</span>
                      <span>{example.input}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-secondary font-bold min-w-[70px]">Output:</span>
                      <span>{example.output}</span>
                    </div>
                    {example.explanation && (
                      <div className="pt-2 border-t border-base-300 mt-2 text-base-content/60 font-sans text-xs">
                        <span className="font-semibold">Explanation:</span> {example.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {problemData.constraints?.length > 0 && (
              <div className="bg-base-100 rounded-xl shadow-sm p-5 border border-base-300">
                <h3 className="text-lg font-bold mb-3 text-base-content">Constraints</h3>
                <ul className="space-y-1 text-base-content/90">
                  {problemData.constraints.map((constraint, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <code className="text-sm bg-base-200 px-1.5 rounded">{constraint}</code>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <div className="flex justify-center items-center h-full"><Loader2Icon className="animate-spin text-primary opacity-50" /></div>
        )}
      </div>
    </div>
  );

  const renderVideoPanel = () => (
    <div className="h-full bg-base-200 p-4 overflow-hidden flex flex-col border-t border-base-300 relative">
      <button
        onClick={() => toggleMaximize("video")}
        title={maximized === "video" ? "Restore layout" : "Maximize video"}
        className="absolute top-3 right-3 z-10 btn btn-ghost btn-xs btn-square bg-base-100/60 text-base-content/60 hover:text-primary hover:bg-primary/10"
      >
        {maximized === "video" ? <Minimize2Icon className="size-3.5" /> : <Maximize2Icon className="size-3.5" />}
      </button>

      {isInitializingCall ? (
        <div className="h-full flex items-center justify-center">
          <div className="text-center">
            <Loader2Icon className="w-12 h-12 mx-auto animate-spin text-primary mb-4" />
            <p className="text-lg">Connecting to video call...</p>
          </div>
        </div>
      ) : !streamClient || !call ? (
        <div className="h-full flex items-center justify-center">
          <div className="card bg-base-100 shadow-xl max-w-md">
            <div className="card-body items-center text-center">
              <PhoneOffIcon className="w-12 h-12 text-error mb-2" />
              <h2 className="card-title">Connection Failed</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full rounded-xl overflow-hidden shadow-lg border border-base-300">
          <StreamVideo client={streamClient}>
            <StreamCall call={call}>
              <VideoCallUI chatClient={chatClient} channel={channel} />
            </StreamCall>
          </StreamVideo>
        </div>
      )}
    </div>
  );

  if (loadingSession) return <div className="h-screen flex items-center justify-center bg-base-100"><Loader2Icon className="animate-spin text-primary size-8"/></div>;

  return (
    <div className="h-screen bg-base-100 flex flex-col">
      {/* Session Header */}
      <div className="bg-base-200 border-b border-base-300 px-6 py-3 flex items-center justify-between z-10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            title="Back to dashboard"
            className="btn btn-ghost btn-sm btn-square text-base-content/60 hover:text-primary hover:bg-primary/10"
          >
            <ArrowLeftIcon className="size-4" />
          </button>
          <h1 className="text-xl font-bold text-base-content">{session?.title || "Coding Interview"}</h1>
          <span className="badge badge-primary">{session?.role}</span>
        </div>
        
        <div className="flex items-center gap-6">
          {session?.status === "pending" && (
            <div className="flex items-center gap-3">
              <span className="text-warning font-semibold text-sm animate-pulse">Waiting to start...</span>
              {isHost && (
                <button onClick={handleStartSession} className="btn btn-primary btn-sm gap-2" disabled={startSessionMutation.isPending}>
                  {startSessionMutation.isPending ? <Loader2Icon className="size-4 animate-spin"/> : <PlayIcon className="size-4"/>}
                  Start Interview
                </button>
              )}
            </div>
          )}

          {session?.status === "active" && (
            <div className="flex items-center gap-2 bg-base-300 px-4 py-1.5 rounded-lg border border-base-100 shadow-inner">
              <span className="text-xs uppercase font-bold text-base-content/50">Time Remaining</span>
              <span className={`font-mono text-lg font-bold ${timeLeft < 300 ? 'text-error animate-pulse' : 'text-success'}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
          )}

          {isHost && session?.status === "active" && (
            <button onClick={handleEndSession} className="btn btn-error btn-sm gap-2" disabled={endSessionMutation.isPending}>
              {endSessionMutation.isPending ? <Loader2Icon className="size-4 animate-spin"/> : <LogOutIcon className="size-4"/>}
              End Session
            </button>
          )}
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex-1 relative">
        {session?.status === "pending" && !isHost && (
          <div className="absolute inset-0 z-50 bg-base-100/80 backdrop-blur-md flex flex-col items-center justify-center">
            <Loader2Icon className="size-12 animate-spin text-primary mb-4" />
            <h2 className="text-2xl font-bold">Waiting for Host</h2>
            <p className="text-base-content/60 mt-2">The interview will begin shortly.</p>
          </div>
        )}

        {maximized ? (
          <div className="h-full">
            {maximized === "problem" && renderProblemPanel()}
            {maximized === "video" && renderVideoPanel()}
            {maximized === "editor" && (
              <CodeEditorPanel
                selectedLanguage={selectedLanguage}
                code={code}
                isRunning={isRunning}
                onLanguageChange={handleLanguageChange}
                onCodeChange={handleCodeUpdate}
                onRunCode={handleRunCode}
                isMaximized
                onToggleMaximize={() => toggleMaximize("editor")}
              />
            )}
            {maximized === "output" && (
              <OutputPanel
                output={output}
                expectedOutput={output?.expectedStr}
                isMaximized
                onToggleMaximize={() => toggleMaximize("output")}
              />
            )}
          </div>
        ) : (
          <PanelGroup direction="horizontal">
            {/* LEFT PANEL - PROBLEM & VIDEO */}
            <Panel defaultSize={30} minSize={20} maxSize={50}>
              <PanelGroup direction="vertical">
                <Panel defaultSize={60} minSize={20}>
                  {renderProblemPanel()}
                </Panel>

                <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

                <Panel defaultSize={40} minSize={20}>
                  {renderVideoPanel()}
                </Panel>
              </PanelGroup>
            </Panel>

            <PanelResizeHandle className="w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize" />

            {/* RIGHT PANEL - CODE EDITOR */}
            <Panel defaultSize={70} minSize={30}>
              <PanelGroup direction="vertical">
                <Panel defaultSize={70} minSize={30}>
                  <CodeEditorPanel
                    selectedLanguage={selectedLanguage}
                    code={code}
                    isRunning={isRunning}
                    onLanguageChange={handleLanguageChange}
                    onCodeChange={handleCodeUpdate}
                    onRunCode={handleRunCode}
                    isMaximized={false}
                    onToggleMaximize={() => toggleMaximize("editor")}
                  />
                </Panel>

                <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

                <Panel defaultSize={30} minSize={15}>
                  <OutputPanel
                    output={output}
                    expectedOutput={output?.expectedStr}
                    isMaximized={false}
                    onToggleMaximize={() => toggleMaximize("output")}
                  />
                </Panel>
              </PanelGroup>
            </Panel>
          </PanelGroup>
        )}
      </div>
    </div>
  );
}

export default SessionPage;
