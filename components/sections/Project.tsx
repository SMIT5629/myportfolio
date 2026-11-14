"use client";

import React, { useState } from "react";
import { FolderGit2, ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { personalInfo } from "@/data/personal";
import SectionHeading from "@/components/ui/SectionHeading";
import { GithubIcon } from "@/components/ui/SocialLinks";

const categories = [
  "All",
  "Full Stack Development",
  "Backend Development",
  "Frontend Development",
  "Mini Projects",
  "Other",
];

type ProjectFields = {
  title?: string;
  name?: string;
  description?: string;
  desc?: string;
  tech?: string[];
  technologies?: string[];
  tags?: string[];
  stack?: string[];
  github?: string;
  githubUrl?: string;
  repo?: string;
  repository?: string;
  repoUrl?: string;
  live?: string;
  liveUrl?: string;
  demo?: string;
  demoUrl?: string;
  link?: string;
};

// Field names are guessed with fallbacks; adjust if your data/projects.ts differs.
function getFields(p?: Partial<ProjectFields> | null) {
  const project = p ?? {};

  return {
    title: project.title ?? project.name ?? "Untitled Project",
    description: project.description ?? project.desc ?? "No description available.",
    tags: (project.tech ?? project.technologies ?? project.tags ?? project.stack ?? []) as string[],
    repo: project.github ?? project.githubUrl ?? project.repo ?? project.repository ?? project.repoUrl,
    live: project.live ?? project.liveUrl ?? project.demo ?? project.demoUrl ?? project.link,
  };
}

function WindowCard({ project }: { project: unknown }) {
  const { title, description, tags, repo, live } = getFields(project as Partial<ProjectFields> | null);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950/80 dark:hover:border-emerald-500/40">
      {/* window dots */}
      <div className="flex items-center gap-2 border-b border-slate-200 px-5 py-4 dark:border-slate-800">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        {/* title + arrow */}
        <div className="mb-4 flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title}`}
              className="text-slate-400 transition group-hover:text-emerald-500"
            >
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>

        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>

        {/* tags pinned to bottom so all cards align */}
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-slate-200 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-slate-600 dark:border-slate-800 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* footer links */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-sm font-medium dark:border-slate-800">
          {repo ? (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-600 transition hover:text-emerald-500 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              <GithubIcon size={16} />
              Repository
            </a>
          ) : (
            <span />
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-600 transition hover:text-emerald-500 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              Live Demo
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Project() {
  const [filter, setFilter] = useState<string>("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const github =
    personalInfo.socials.find((s) => s.name === "GitHub")?.url ||
    "https://github.com/SMIT5629";

  return (
    <section id="projects" className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-teal-500/20 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 03. FEATURED WORK"
          title="Projects & Applications"
          subtitle="Real-world applications and Mini Projects built with React, Node.js, Express, MongoDB, Ejs RESTful APIs, and real-time communications."
        />

        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`cursor-pointer rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                  filter === cat
                    ? "bg-emerald-600 font-semibold text-white dark:bg-emerald-500 dark:text-slate-950"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-emerald-500/40 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="font-mono text-xs text-slate-600 dark:text-slate-400">
            Showing {filtered.length} of {projects.length} projects
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <WindowCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-50/50 via-white to-slate-50/50 p-6 dark:border-slate-800 dark:from-emerald-950/20 dark:via-slate-900/40 dark:to-slate-950/40 sm:p-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <FolderGit2 size={15} />
                <span>Open Source Repositories</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
                Interested in exploring more code & experiments?
              </h3>
              <p className="max-w-xl text-xs text-slate-600 dark:text-slate-400 sm:text-sm">
                Browse my GitHub to inspect code architecture, commit history, backend services, and active side projects.
              </p>
            </div>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-emerald-600 dark:bg-white dark:text-slate-950 dark:hover:bg-emerald-400"
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