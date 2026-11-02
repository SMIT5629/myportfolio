"use client";

import React, { useState } from "react";
import { FolderGit2 } from "lucide-react";
import { projects } from "@/data/projects";
import { personalInfo } from "@/data/personal";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { GithubIcon } from "@/components/ui/SocialLinks";

export function Project() {
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    "All",
    "Full Stack Development",
    "Backend Development",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-20 lg:py-28">
      <div className="pointer-events-none absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[130px] dark:bg-emerald-500/20" />
<div className="pointer-events-none absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-teal-500/20 blur-[130px] dark:bg-teal-500/20" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 03. FEATURED WORK"
          title="Projects & Applications"
          subtitle="Real-world applications and Mini Projects built with React, Node.js, Express, MongoDB, Ejs RESTful APIs, and real-time communications."
        />

        {/* Filter Categories */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isSelected = filter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-emerald-600 text-white shadow-sm dark:bg-emerald-500 dark:text-slate-950 font-semibold"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-emerald-500/40 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400 dark:hover:border-emerald-500/40 dark:hover:text-emerald-400"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <span className="text-xs font-mono text-slate-600 dark:text-slate-400">
            Showing {filteredProjects.length} of {projects.length} projects
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub Repository Banner */}
        <div className="mt-14 rounded-2xl border border-slate-200/90 bg-gradient-to-r from-emerald-50/50 via-white to-slate-50/50 p-6 sm:p-8 dark:border-slate-800/90 dark:from-emerald-950/20 dark:via-slate-900/40 dark:to-slate-950/40">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">
                <FolderGit2 size={15} />
                <span>Open Source Repositories</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Interested in exploring more code & experiments?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
                Browse my GitHub to inspect code architecture, commit history, backend services, and active side projects.
              </p>
            </div>

            <a
              href={personalInfo.socials.find((s) => s.name === "GitHub")?.url || "https://github.com/SMIT5629"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-emerald-600 dark:bg-white dark:text-slate-950 dark:hover:bg-emerald-400 shrink-0"
            >
              <GithubIcon size={16} />
              <span>Visit GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
