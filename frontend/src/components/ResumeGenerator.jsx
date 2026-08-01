import { useEffect, useRef, useState } from "react";
import {
  ArrowLeftIcon,
  DownloadIcon,
  SparklesIcon,
  Loader2Icon,
  FileTextIcon,
  MessagesSquareIcon,
  EyeIcon,
  X,
} from "lucide-react";
import toast from "react-hot-toast";
import { resumeBuilderApi } from "../api/resumeBuilder";

const PAGE_OPTIONS = [1, 2, 3];

function base64ToBlobUrl(base64) {
  const byteChars = atob(base64);
  const bytes = new Uint8Array(byteChars.length);
  for (let i = 0; i < byteChars.length; i++) bytes[i] = byteChars.charCodeAt(i);
  const blob = new Blob([bytes], { type: "application/pdf" });
  return URL.createObjectURL(blob);
}

function ResumeGenerator({ data, setData, onBack }) {
  const [loading, setLoading] = useState(false);
  const [chatLoading, setChatLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [pageCount, setPageCount] = useState(null);
  const [fitsTarget, setFitsTarget] = useState(null);
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [assistantMessage, setAssistantMessage] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const pdfUrlRef = useRef(null);

  useEffect(() => {
    return () => {
      if (pdfUrlRef.current) URL.revokeObjectURL(pdfUrlRef.current);
    };
  }, []);

  const setPdf = (url) => {
    if (pdfUrlRef.current) URL.revokeObjectURL(pdfUrlRef.current);
    pdfUrlRef.current = url;
    setPdfUrl(url);
  };

  const generate = async () => {
    setLoading(true);
    try {
      const res = await resumeBuilderApi.generate(data, data.targetPages);
      setPdf(base64ToBlobUrl(res.pdfBase64));
      setPageCount(res.pageCount);
      setFitsTarget(res.fitsTarget);
      setData((prev) => ({
        ...prev,
        ...res.resumeData,
        targetPages: prev.targetPages,
        template: prev.template,
      }));
      if (res.fitsTarget) {
        toast.success(
          `Generated — fits in ${res.pageCount} page${res.pageCount > 1 ? "s" : ""}`,
        );
      } else {
        toast.error(
          `Couldn't fully fit within ${data.targetPages} page(s) — it's ${res.pageCount} pages`,
        );
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Couldn't generate the resume right now",
      );
    } finally {
      setLoading(false);
    }
  };

  const sendChat = async () => {
    if (!chatInput.trim()) {
      toast.error("Tell Gemini what to improve in your resume");
      return;
    }

    setChatLoading(true);
    try {
      const response = await resumeBuilderApi.chat(data, chatInput.trim());
      if (response.success) {
        setData(response.resumeData || data);
        setPdf(base64ToBlobUrl(response.pdfBase64));
        setPageCount(response.pageCount);
        setFitsTarget(response.fitsTarget);
        setAssistantMessage(
          response.assistantMessage || "Gemini updated your resume.",
        );
        setChatHistory((prev) => [
          ...prev,
          { role: "user", text: chatInput.trim() },
          {
            role: "assistant",
            text: response.assistantMessage || "Gemini updated your resume.",
          },
        ]);
        setChatInput("");
      } else {
        toast.error(
          response.message || "Gemini couldn't update the resume right now",
        );
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Couldn't chat with Gemini right now",
      );
    } finally {
      setChatLoading(false);
    }
  };

  const downloadName =
    (data.name || "resume").trim().replace(/\s+/g, "_").toLowerCase() + ".pdf";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(420px,40%)_minmax(0,60%)] gap-6 items-start">
      {/* Left panel: controls */}
      <div className="glass-panel rounded-3xl p-5 space-y-5 border-white/5">
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-xl border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2 text-sm font-medium"
        >
          <ArrowLeftIcon className="size-4" />
          Back to Editor
        </button>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-white ml-1">
            Target Length
          </label>
          <div className="flex gap-2">
            {PAGE_OPTIONS.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setData((prev) => ({ ...prev, targetPages: n }))}
                className={`flex-1 py-3 rounded-xl border text-sm font-semibold transition-all ${
                  data.targetPages === n
                    ? "bg-primary text-white border-primary"
                    : "border-white/10 text-white/60 hover:bg-white/5"
                }`}
              >
                {n} Page{n > 1 ? "s" : ""}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={generate}
          disabled={loading}
          className="w-full px-5 py-3.5 btn-primary rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/40 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
        >
          {loading ? (
            <Loader2Icon className="size-4 animate-spin" />
          ) : (
            <SparklesIcon className="size-4" />
          )}
          {loading ? "Generating..." : "Generate Resume"}
        </button>

        {pageCount !== null && (
          <p
            className={`text-xs ${fitsTarget ? "text-success" : "text-warning"}`}
          >
            {fitsTarget
              ? `Fits in ${pageCount} page${pageCount > 1 ? "s" : ""}.`
              : `Couldn't fully fit within ${data.targetPages} page(s) — currently ${pageCount} pages after compression. Consider trimming a section manually.`}
          </p>
        )}

        {pdfUrl && (
          <>
            <a
              href={pdfUrl}
              download={downloadName}
              className="w-full px-5 py-3.5 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-sm font-medium"
            >
              <DownloadIcon className="size-4" />
              Download PDF
            </a>
            <button
              type="button"
              onClick={() => setPreviewOpen(true)}
              className="w-full px-5 py-3.5 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm font-medium"
            >
              <EyeIcon className="size-4" />
              Open Full Preview
            </button>
          </>
        )}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-2 mb-3">
            <MessagesSquareIcon className="size-5 text-primary" />
            <div>
              <p className="text-sm font-semibold text-white">
                Talk with Gemini
              </p>
              <p className="text-xs text-base-content/60">
                Request resume edits and refresh the preview instantly.
              </p>
            </div>
          </div>

          <textarea
            rows={4}
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Make my resume more concise / focus on backend / improve ATS keywords..."
            className="w-full resize-none rounded-2xl bg-slate-950/80 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-primary focus:ring-2 focus:ring-primary/20"
          />

          <button
            type="button"
            onClick={sendChat}
            disabled={chatLoading}
            className="mt-3 w-full px-4 py-3 rounded-xl bg-secondary text-white font-semibold text-sm transition-all hover:bg-secondary/80 disabled:opacity-50"
          >
            {chatLoading ? (
              <span className="inline-flex items-center gap-2">
                <Loader2Icon className="size-4 animate-spin" />
                Updating with Gemini...
              </span>
            ) : (
              "Send to Gemini"
            )}
          </button>

          {assistantMessage && (
            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-sm text-base-content/70">
              <p className="font-semibold text-white mb-2">Gemini says:</p>
              <p>{assistantMessage}</p>
            </div>
          )}
        </div>
      </div>

      {/* Right panel: live PDF preview */}
      <div className="glass-panel rounded-3xl overflow-hidden border-white/5 min-h-[720px] flex items-center justify-center">
        {pdfUrl ? (
          <iframe
            title="Resume preview"
            src={pdfUrl}
            className="w-full min-h-[75vh]"
          />
        ) : (
          <div className="text-center py-24 px-6 text-white/40">
            <FileTextIcon className="size-10 mx-auto mb-3" />
            <p className="text-sm">
              Click "Generate Resume" to compile your PDF preview.
            </p>
          </div>
        )}
      </div>
      {previewOpen && pdfUrl && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-[1400px] h-[calc(100vh-4rem)] rounded-3xl overflow-hidden bg-slate-950 shadow-2xl">
            <button
              type="button"
              onClick={() => setPreviewOpen(false)}
              className="absolute top-4 right-4 z-10 rounded-full bg-black/70 p-3 text-white hover:bg-black/90 transition"
            >
              <X className="size-5" />
            </button>
            <iframe
              title="Full resume preview"
              src={pdfUrl}
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ResumeGenerator;
