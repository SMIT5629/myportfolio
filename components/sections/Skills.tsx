"use client";

import React, { useMemo, useState } from "react";
import { Code, Server, Database, Terminal, Layers, Layout, Wrench } from "lucide-react";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import TechIcon from "@/components/ui/TechIcon";

type ProjectLike = {
  tech?: string[];
  technologies?: string[];
  tags?: string[];
  stack?: string[];
  title?: string;
  name?: string;
};

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
const projectTags = (p: ProjectLike): string[] => (p.tech ?? p.technologies ?? p.tags ?? p.stack ?? []) as string[];
const projectTitle = (p: ProjectLike): string => p.title ?? p.name ?? "Untitled";
const matches = (skill: string, tag: string) => {
  const a = norm(skill);
  const b = norm(tag);
  return a === b || (a.length > 3 && (b.includes(a) || a.includes(b)));
};

const tierOf = (level: number) => (level >= 8 ? "Core" : level >= 5 ? "Proficient" : "Familiar");

const icons: Record<string, React.ReactNode> = {
  "Programming Languages": <Code size={18} />,
  "Backend Development": <Server size={18} />,
  "Databases & Caching": <Database size={18} />,
  "DevOps & Tools": <Wrench size={18} />,
  "Frontend Development": <Layout size={18} />,
  "Core Competencies": <Layers size={18} />,
};

export function Skills() {
  const [active, setActive] = useState<string>(skills[0]?.category);
  const current = skills.find((s) => s.category === active) ?? skills[0];

  const usedIn = useMemo(
    () => (name: string) =>
      (projects as ProjectLike[])
        .filter((p) => projectTags(p).some((t) => matches(name, t)))
        .map(projectTitle),
    []
  );

  return (
    <section id="skills" className="relative bg-slate-50/50 py-20 dark:bg-slate-950/40 lg:py-28">
      <div className="pointer-events-none absolute top-0 -left-20 h-[400px] w-[400px] rounded-full bg-emerald-500/15 blur-[100px] dark:bg-emerald-500/20" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 02. SKILLS"
          title="Technical Stack & Expertise"
          subtitle="Languages, frameworks, databases, and tooling I use to build and ship full-stack applications."
        />

        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {skills.map((cat) => {
              const on = cat.category === current.category;
              return (
                <button
                  key={cat.category}
                  type="button"
                  onClick={() => setActive(cat.category)}
                  className={`flex shrink-0 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all lg:shrink ${
                    on
                      ? "border-emerald-500/50 bg-emerald-500/10 font-semibold text-slate-900 dark:text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-emerald-500/30 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400"
                  }`}
                >
                  <span className={on ? "text-emerald-500" : "text-slate-400"}>
                    {icons[cat.category] ?? <Terminal size={18} />}
                  </span>
                  <span className="whitespace-nowrap lg:whitespace-normal">{cat.category}</span>
                  <span className="ml-auto font-mono text-[11px] text-slate-500">{cat.items.length}</span>
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950/80 sm:p-8">
            <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{current.category}</h3>
              <span className="font-mono text-xs text-slate-500">{current.items.length} skills</span>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {current.items.map((item) => {
                const used = usedIn(item.name);
                const tier = tierOf(item.level);
                return (
                  <div
                    key={item.name}
                    className="group rounded-xl border border-slate-200 p-4 transition-all hover:-translate-y-0.5 hover:border-emerald-500/40 dark:border-slate-800"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <TechIcon name={item.name} size={30} />
                      <span
                        className={`font-mono text-[10px] uppercase tracking-wider ${
                          tier === "Core" ? "text-emerald-500" : "text-slate-500"
                        }`}
                      >
                        {tier}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.name}</p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      {used.length ? `Used in ${used.length} project${used.length > 1 ? "s" : ""}` : "\u00A0"}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;