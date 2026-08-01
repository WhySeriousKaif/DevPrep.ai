import { useState } from "react";
import { PlusIcon, Trash2Icon, SparklesIcon, Loader2Icon } from "lucide-react";
import toast from "react-hot-toast";
import { resumeBuilderApi } from "../api/resumeBuilder";
import {
  emptyEducation,
  emptyExperience,
  emptyProject,
  emptyVolunteering,
} from "../data/resumeInitialData";

const inputClass =
  "w-full px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white text-sm placeholder:text-white/30";

function Field({ label, ...props }) {
  return (
    <div className="space-y-2">
      <label className="text-base font-semibold text-white ml-1">{label}</label>
      <input {...props} className={inputClass} />
    </div>
  );
}

function Area({ label, ...props }) {
  return (
    <div className="space-y-2">
      <label className="text-base font-semibold text-white ml-1">{label}</label>
      <textarea {...props} className={`${inputClass} resize-none`} />
    </div>
  );
}

function EntryCard({ onRemove, children }) {
  return (
    <div className="relative glass-card rounded-2xl p-4 border border-white/5 space-y-3">
      <button
        type="button"
        onClick={onRemove}
        className="absolute top-3 right-3 text-white/40 hover:text-error transition-colors"
        aria-label="Remove entry"
      >
        <Trash2Icon className="size-4" />
      </button>
      {children}
    </div>
  );
}

function AddButton({ onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full py-3 rounded-2xl border border-dashed border-white/15 text-white/70 hover:text-white hover:border-primary/50 hover:bg-white/5 transition-all flex items-center justify-center gap-3 text-sm font-semibold"
    >
      <PlusIcon className="size-4" />
      {label}
    </button>
  );
}

const REFINE_MODES = [
  { mode: "polish", label: "Refine with AI" },
  { mode: "shorten", label: "Shorten" },
  { mode: "ats", label: "ATS Boost" },
];

// Sends a raw description off to Gemini and turns it into polished resume bullets.
function RefineBullets({ title, role, description, bullets, onRefined }) {
  const [loadingMode, setLoadingMode] = useState(null);

  const refine = async (mode) => {
    if (!description || !description.trim()) {
      toast.error("Add a description first");
      return;
    }
    setLoadingMode(mode);
    try {
      const res = await resumeBuilderApi.refineDescription({
        title,
        role,
        description,
        mode,
      });
      onRefined(res.bullets || []);
      toast.success("Refined with AI");
    } catch (err) {
      toast.error(err.response?.data?.message || "Couldn't refine right now");
    } finally {
      setLoadingMode(null);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {REFINE_MODES.map(({ mode, label }) => (
          <button
            key={mode}
            type="button"
            onClick={() => refine(mode)}
            disabled={loadingMode !== null}
            className="px-4 py-2.5 rounded-2xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all flex items-center gap-2 text-sm font-semibold disabled:opacity-50"
          >
            {loadingMode === mode ? (
              <Loader2Icon className="size-3.5 animate-spin" />
            ) : (
              <SparklesIcon className="size-3.5" />
            )}
            {mode === "polish" && bullets?.length ? "Re-refine with AI" : label}
          </button>
        ))}
      </div>
      {bullets?.length > 0 && (
        <ul className="space-y-2 pl-1">
          {bullets.map((b, i) => (
            <li key={i} className="text-sm text-white/70 flex gap-3">
              <span className="text-primary shrink-0">&bull;</span>
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function PersonalInfoStep({ data, update }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Field
        label="Full Name"
        placeholder="e.g., Rahul Sharma"
        value={data.name}
        onChange={(e) => update("name", e.target.value)}
      />
      <Field
        label="Email"
        type="email"
        placeholder="e.g., rahul@example.com"
        value={data.email}
        onChange={(e) => update("email", e.target.value)}
      />
      <Field
        label="Phone"
        placeholder="e.g., +91 98765 43210"
        value={data.phone}
        onChange={(e) => update("phone", e.target.value)}
      />
      <Field
        label="LinkedIn URL"
        placeholder="linkedin.com/in/username"
        value={data.linkedin}
        onChange={(e) => update("linkedin", e.target.value)}
      />
      <Field
        label="GitHub URL"
        placeholder="github.com/username"
        value={data.github}
        onChange={(e) => update("github", e.target.value)}
      />
      <Field
        label="LeetCode (optional)"
        placeholder="leetcode.com/u/username"
        value={data.leetcode}
        onChange={(e) => update("leetcode", e.target.value)}
      />
      <Field
        label="Codeforces (optional)"
        placeholder="codeforces.com/profile/username"
        value={data.codeforces}
        onChange={(e) => update("codeforces", e.target.value)}
      />
      <Field
        label="CodeChef (optional)"
        placeholder="codechef.com/users/username"
        value={data.codechef}
        onChange={(e) => update("codechef", e.target.value)}
      />
    </div>
  );
}

function SummaryStep({ data, update }) {
  return (
    <Area
      label="Professional Summary"
      placeholder="Leave empty to skip this section"
      rows="6"
      value={data.summary}
      onChange={(e) => update("summary", e.target.value)}
    />
  );
}

function SkillsStep({ data, update }) {
  const [loading, setLoading] = useState(false);

  const organize = async () => {
    if (!data.skills || !data.skills.trim()) {
      toast.error("Add some skills first");
      return;
    }
    setLoading(true);
    try {
      const res = await resumeBuilderApi.categorizeSkills(data.skills);
      update("skillCategories", res.categories || []);
      toast.success("Skills organized with AI");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Couldn't organize skills right now",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Area
          label="Skills"
          placeholder="e.g., React, Node.js, MongoDB, Tailwind CSS"
          rows="4"
          value={data.skills}
          onChange={(e) => {
            update("skills", e.target.value);
            update("skillCategories", null);
          }}
        />
        <p className="text-xs text-white/40 ml-1">
          Enter skills separated by commas
        </p>
      </div>

      <button
        type="button"
        onClick={organize}
        disabled={loading}
        className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all flex items-center gap-2 text-xs font-semibold disabled:opacity-50"
      >
        {loading ? (
          <Loader2Icon className="size-3.5 animate-spin" />
        ) : (
          <SparklesIcon className="size-3.5" />
        )}
        {data.skillCategories?.length
          ? "Re-organize with AI"
          : "Organize into categories with AI"}
      </button>

      {data.skillCategories?.length > 0 && (
        <div className="space-y-2">
          {data.skillCategories.map((cat, i) => (
            <div key={i} className="text-xs">
              <span className="font-semibold text-white">{cat.name}: </span>
              <span className="text-white/60">{cat.skills.join(", ")}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ExperienceStep({ data, setData }) {
  const update = (i, field, value) => {
  const transform = (text) => text.replace(/^\-\s*/gm, "• ");
  const newValue = field === "description" ? transform(value) : value;
  setData((prev) => ({
    ...prev,
    experience: prev.experience.map((entry, idx) =>
      idx === i ? { ...entry, [field]: newValue } : entry,
    ),
  }));
};
  const add = () =>
    setData((prev) => ({
      ...prev,
      experience: [...prev.experience, emptyExperience()],
    }));
  const remove = (i) =>
    setData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, idx) => idx !== i),
    }));

  return (
    <div className="space-y-4">
      {data.experience.length === 0 && (
        <p className="text-sm text-white/40">
          No experience added yet, click below to add.
        </p>
      )}
      {data.experience.map((exp, i) => (
        <EntryCard key={i} onRemove={() => remove(i)}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Field
              label="Company"
              placeholder="e.g., Acme Corp"
              value={exp.company}
              onChange={(e) => update(i, "company", e.target.value)}
            />
            <Field
              label="Role"
              placeholder="e.g., Backend Developer"
              value={exp.role}
              onChange={(e) => update(i, "role", e.target.value)}
            />
            <Field
              label="Duration"
              placeholder="e.g., Jan 2023 - Present"
              value={exp.duration}
              onChange={(e) => update(i, "duration", e.target.value)}
            />
          </div>
          <Area
            label="Description"
            placeholder="What did you work on? Write it however you like, we'll polish it."
            rows="3"
            value={exp.description}
            onChange={(e) => update(i, "description", e.target.value)}
          />
          <RefineBullets
            title={exp.company}
            role={exp.role}
            description={exp.description}
            bullets={exp.bullets}
            onRefined={(bullets) => update(i, "bullets", bullets)}
          />
        </EntryCard>
      ))}
      <AddButton label="Add Experience" onClick={add} />
    </div>
  );
}

function ProjectsStep({ data, setData }) {
  const update = (i, field, value) => {
  const transform = (text) => text.replace(/^\-\s*/gm, "• ");
  const newValue = field === "description" ? transform(value) : value;
  setData((prev) => ({
    ...prev,
    projects: prev.projects.map((entry, idx) =>
      idx === i ? { ...entry, [field]: newValue } : entry,
    ),
  }));
};
  const add = () =>
    setData((prev) => ({
      ...prev,
      projects: [...prev.projects, emptyProject()],
    }));
  const remove = (i) =>
    setData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, idx) => idx !== i),
    }));

  return (
    <div className="space-y-4">
      {data.projects.length === 0 && (
        <p className="text-sm text-white/40">
          No project added yet, click below to add.
        </p>
      )}
      {data.projects.map((proj, i) => (
        <EntryCard key={i} onRemove={() => remove(i)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field
              label="Project Name"
              placeholder="e.g., DevPrep.ai"
              value={proj.name}
              onChange={(e) => update(i, "name", e.target.value)}
            />
            <Field
              label="Tech Stack"
              placeholder="e.g., React, Express, MongoDB"
              value={proj.techStack}
              onChange={(e) => update(i, "techStack", e.target.value)}
            />
            <Field
              label="GitHub Link"
              placeholder="github.com/username/repo"
              value={proj.github}
              onChange={(e) => update(i, "github", e.target.value)}
            />
            <Field
              label="Duration (optional)"
              placeholder="e.g., Jun 2025"
              value={proj.duration}
              onChange={(e) => update(i, "duration", e.target.value)}
            />
          </div>
          <Area
            label="Description"
            placeholder="What does this project do? Write it however you like, we'll polish it."
            rows="3"
            value={proj.description}
            onChange={(e) => update(i, "description", e.target.value)}
          />
          <RefineBullets
            title={proj.name}
            role="project"
            description={proj.description}
            bullets={proj.bullets}
            onRefined={(bullets) => update(i, "bullets", bullets)}
          />
        </EntryCard>
      ))}
      <AddButton label="Add Project" onClick={add} />
    </div>
  );
}

function EducationStep({ data, setData }) {
  const update = (i, field, value) =>
    setData((prev) => ({
      ...prev,
      education: prev.education.map((entry, idx) =>
        idx === i ? { ...entry, [field]: value } : entry,
      ),
    }));
  const add = () =>
    setData((prev) => ({
      ...prev,
      education: [...prev.education, emptyEducation()],
    }));
  const remove = (i) =>
    setData((prev) => ({
      ...prev,
      education: prev.education.filter((_, idx) => idx !== i),
    }));

  return (
    <div className="space-y-4">
      {data.education.length === 0 && (
        <p className="text-sm text-white/40">
          No education added yet, click below to add.
        </p>
      )}
      {data.education.map((edu, i) => (
        <EntryCard key={i} onRemove={() => remove(i)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field
              label="School / University"
              placeholder="e.g., IIT Delhi"
              value={edu.school}
              onChange={(e) => update(i, "school", e.target.value)}
            />
            <Field
              label="Duration"
              placeholder="e.g., Aug 2024 - Present"
              value={edu.duration}
              onChange={(e) => update(i, "duration", e.target.value)}
            />
            <Field
              label="Degree"
              placeholder="e.g., B.Tech"
              value={edu.degree}
              onChange={(e) => update(i, "degree", e.target.value)}
            />
            <Field
              label="Branch"
              placeholder="e.g., Computer Science"
              value={edu.branch}
              onChange={(e) => update(i, "branch", e.target.value)}
            />
            <Field
              label="CGPA / Percentage"
              placeholder="e.g., 8.7"
              value={edu.cgpa}
              onChange={(e) => update(i, "cgpa", e.target.value)}
            />
          </div>
        </EntryCard>
      ))}
      <AddButton label="Add Education" onClick={add} />
    </div>
  );
}

function AchievementsStep({ data, setData }) {
  const update = (i, value) =>
    setData((prev) => ({
      ...prev,
      achievements: prev.achievements.map((a, idx) => (idx === i ? value : a)),
    }));
  const add = () =>
    setData((prev) => ({ ...prev, achievements: [...prev.achievements, ""] }));
  const remove = (i) =>
    setData((prev) => ({
      ...prev,
      achievements: prev.achievements.filter((_, idx) => idx !== i),
    }));

  return (
    <div className="space-y-3">
      {data.achievements.length === 0 && (
        <p className="text-sm text-white/40">
          No achievements added yet, click below to add.
        </p>
      )}
      {data.achievements.map((a, i) => (
        <div key={i} className="flex items-center gap-2">
          <input
            value={a}
            placeholder="e.g., LeetCode: 250+ problems solved (Arrays, Trees, Graphs, DP)"
            onChange={(e) => update(i, e.target.value)}
            className={inputClass}
          />
          <button
            type="button"
            onClick={() => remove(i)}
            className="text-white/40 hover:text-error transition-colors shrink-0"
            aria-label="Remove entry"
          >
            <Trash2Icon className="size-4" />
          </button>
        </div>
      ))}
      <div className="flex flex-col gap-3">
        <AddButton label="Add Achievement" onClick={add} />
        <div className="flex flex-col gap-3">
          <AddButton label="Add Achievement" onClick={add} />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={async () => {
                const updatedAchievements = await resumeBuilderApi.chat(
                  data,
                  "Convert these resume achievements into polished bullet points for an achievements section, based on the current resume and the user's strengths.",
                );
                if (
                  updatedAchievements.success &&
                  Array.isArray(updatedAchievements.resumeData.achievements)
                ) {
                  setData((prev) => ({
                    ...prev,
                    achievements: updatedAchievements.resumeData.achievements,
                  }));
                  toast.success("Achievements polished with Gemini");
                } else {
                  toast.error("Could not refine achievements with Gemini");
                }
              }}
              className="flex-1 py-3 rounded-2xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all text-sm font-semibold"
            >
              Gemini Bullets
            </button>
            <button
              type="button"
              onClick={async () => {
                const updatedAchievements = await resumeBuilderApi.chat(
                  data,
                  "Convert these resume achievements into polished bullet points for an achievements section, based on the current resume and the user's strengths.",
                );
                if (
                  updatedAchievements.success &&
                  Array.isArray(updatedAchievements.resumeData.achievements)
                ) {
                  setData((prev) => ({
                    ...prev,
                    achievements: updatedAchievements.resumeData.achievements,
                  }));
                  toast.success("Achievements polished with Gemini");
                } else {
                  toast.error("Could not refine achievements with Gemini");
                }
              }}
              className="flex-1 py-3 rounded-2xl bg-secondary/10 border border-secondary/30 text-secondary hover:bg-secondary/20 transition-all text-sm font-semibold"
            >
              Refine with Gemini
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function VolunteeringStep({ data, setData }) {
  const update = (i, field, value) =>
    setData((prev) => ({
      ...prev,
      volunteering: prev.volunteering.map((entry, idx) =>
        idx === i ? { ...entry, [field]: value } : entry,
      ),
    }));
  const add = () =>
    setData((prev) => ({
      ...prev,
      volunteering: [...prev.volunteering, emptyVolunteering()],
    }));
  const remove = (i) =>
    setData((prev) => ({
      ...prev,
      volunteering: prev.volunteering.filter((_, idx) => idx !== i),
    }));

  return (
    <div className="space-y-4">
      {data.volunteering.length === 0 && (
        <p className="text-sm text-white/40">
          No volunteering added yet, click below to add.
        </p>
      )}
      {data.volunteering.map((vol, i) => (
        <EntryCard key={i} onRemove={() => remove(i)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field
              label="Role / Position"
              placeholder="e.g., Mess Committee Lead"
              value={vol.role}
              onChange={(e) => update(i, "role", e.target.value)}
            />
            <Field
              label="Organization"
              placeholder="e.g., Scaler School of Technology"
              value={vol.organization}
              onChange={(e) => update(i, "organization", e.target.value)}
            />
            <Field
              label="Duration"
              placeholder="e.g., May 2026 - Present"
              value={vol.duration}
              onChange={(e) => update(i, "duration", e.target.value)}
            />
          </div>
          <Area
            label="Description"
            placeholder="What did you do in this role? Write it however you like, we'll polish it."
            rows="3"
            value={vol.description}
            onChange={(e) => update(i, "description", e.target.value)}
          />
          <RefineBullets
            title={vol.organization}
            role={vol.role}
            description={vol.description}
            bullets={vol.bullets}
            onRefined={(bullets) => update(i, "bullets", bullets)}
          />
        </EntryCard>
      ))}
      <AddButton label="Add Volunteering" onClick={add} />
    </div>
  );
}

function ResumeFormStep({ step, data, setData }) {
  const update = (field, value) =>
    setData((prev) => ({ ...prev, [field]: value }));

  if (step === 1) return <PersonalInfoStep data={data} update={update} />;
  if (step === 2) return <SummaryStep data={data} update={update} />;
  if (step === 3) return <SkillsStep data={data} update={update} />;
  if (step === 4) return <ExperienceStep data={data} setData={setData} />;
  if (step === 5) return <ProjectsStep data={data} setData={setData} />;
  if (step === 6) return <EducationStep data={data} setData={setData} />;
  if (step === 7) return <AchievementsStep data={data} setData={setData} />;
  if (step === 8) return <VolunteeringStep data={data} setData={setData} />;

  return null;
}

export default ResumeFormStep;
