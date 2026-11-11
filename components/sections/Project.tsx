"use client";

import React, { useState } from "react";
import { FolderGit2 } from "lucide-react";
import { projects } from "@/data/projects";
import { personalInfo } from "@/data/personal";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { GithubIcon } from "@/components/ui/SocialLinks";

type Theme = "aurora" | "glass" | "terminal" | "brutalist" | "minimal" | "neon";

// Change this one line to switch styles
const THEME: Theme = "glass";

const categories = ["All", "Full Stack Development", "Backend Development", "Frontend Development", "Mini Projects", "Other"];

type ThemeDef = {
  section: string;
  blobs: React.ReactNode;
  filterOn: string;
  filterOff: string;
  filterBase: string;
  count: string;
  card: string; // wrapper around each ProjectCard
  banner: string;
  bannerEyebrow: string;
  bannerTitle: string;
  bannerText: string;
  bannerBtn: string;
};

const blob = (pos: string, color: string) => (
  <div
    className={`pointer-events-none absolute h-[500px] w-[500px] rounded-full blur-[130px] ${pos} ${color}`}
  />
);

// Wrapper strips the inner card's own border/bg/shadow so the theme controls them.
const strip = "[&>*]:!border-0 [&>*]:!bg-transparent [&>*]:!shadow-none [&>*]:!rounded-none";

const THEMES: Record<Theme, ThemeDef> = {
  // Soft emerald/teal glow (your current look)
  aurora: {
    section: "",
    blobs: (
      <>
        {blob("top-1/3 -left-40", "bg-emerald-500/20")}
        {blob("top-1/3 -right-40", "bg-teal-500/20")}
      </>
    ),
    filterBase: "rounded-lg",
    filterOn: "bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950 font-semibold",
    filterOff:
      "border border-slate-200 bg-white text-slate-600 hover:border-emerald-500/40 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400",
    count: "text-slate-600 dark:text-slate-400",
    card: `overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60 ${strip}`,
    banner:
      "rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-50/50 via-white to-slate-50/50 dark:border-slate-800 dark:from-emerald-950/20 dark:via-slate-900/40 dark:to-slate-950/40",
    bannerEyebrow: "text-emerald-600 dark:text-emerald-400",
    bannerTitle: "text-slate-900 dark:text-white",
    bannerText: "text-slate-600 dark:text-slate-400",
    bannerBtn:
      "rounded-lg bg-slate-900 text-white hover:bg-emerald-600 dark:bg-white dark:text-slate-950 dark:hover:bg-emerald-400",
  },

  // Frosted translucent cards over colorful blobs
  glass: {
    section: "",
    blobs: (
      <>
        {blob("top-10 left-1/4", "bg-fuchsia-500/25")}
        {blob("top-1/2 right-0", "bg-sky-500/25")}
        {blob("bottom-0 left-0", "bg-emerald-400/20")}
      </>
    ),
    filterBase: "rounded-full backdrop-blur",
    filterOn: "bg-white/80 text-slate-900 shadow-md ring-1 ring-white/60 dark:bg-white/15 dark:text-white dark:ring-white/20",
    filterOff:
      "bg-white/30 text-slate-700 ring-1 ring-white/40 hover:bg-white/50 dark:bg-white/5 dark:text-slate-300 dark:ring-white/10 dark:hover:bg-white/10",
    count: "text-slate-700 dark:text-slate-300",
    card: `overflow-hidden rounded-3xl bg-white/40 ring-1 ring-white/60 shadow-lg backdrop-blur-xl transition hover:bg-white/60 dark:bg-white/5 dark:ring-white/10 dark:hover:bg-white/10 ${strip}`,
    banner:
      "rounded-3xl bg-white/40 ring-1 ring-white/60 backdrop-blur-xl dark:bg-white/5 dark:ring-white/10",
    bannerEyebrow: "text-sky-600 dark:text-sky-300",
    bannerTitle: "text-slate-900 dark:text-white",
    bannerText: "text-slate-700 dark:text-slate-300",
    bannerBtn:
      "rounded-full bg-slate-900/90 text-white backdrop-blur hover:bg-slate-900 dark:bg-white/90 dark:text-slate-950",
  },

  // Hacker console: black, green, square, monospace
  terminal: {
    section: "bg-slate-950 font-mono",
    blobs: null,
    filterBase: "rounded-none font-mono",
    filterOn: "bg-green-400 text-black font-bold",
    filterOff: "border border-green-500/40 text-green-400 hover:bg-green-500/10",
    count: "text-green-400/80",
    card: `overflow-hidden rounded-none border border-green-500/40 bg-black text-green-300 transition hover:border-green-400 hover:shadow-[0_0_0_1px_rgba(74,222,128,0.6)] ${strip}`,
    banner: "rounded-none border border-dashed border-green-500/50 bg-black",
    bannerEyebrow: "text-green-400",
    bannerTitle: "text-green-300",
    bannerText: "text-green-500/80",
    bannerBtn: "rounded-none bg-green-400 text-black hover:bg-green-300",
  },

  // Thick borders, hard offset shadows, flat color
  brutalist: {
    section: "bg-amber-50 dark:bg-zinc-900",
    blobs: null,
    filterBase: "rounded-none border-2 border-black font-bold dark:border-white",
    filterOn: "bg-black text-amber-300 shadow-[3px_3px_0_0_#fbbf24] dark:bg-amber-300 dark:text-black",
    filterOff: "bg-white text-black hover:bg-amber-200 dark:bg-zinc-800 dark:text-white",
    count: "font-bold text-black dark:text-white",
    card: `overflow-hidden rounded-none border-2 border-black bg-white shadow-[6px_6px_0_0_#000] transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#000] dark:border-white dark:bg-zinc-800 dark:shadow-[6px_6px_0_0_#fff] ${strip}`,
    banner: "rounded-none border-2 border-black bg-amber-300 shadow-[6px_6px_0_0_#000]",
    bannerEyebrow: "text-black",
    bannerTitle: "text-black",
    bannerText: "text-black/80",
    bannerBtn: "rounded-none border-2 border-black bg-white text-black shadow-[3px_3px_0_0_#000] hover:bg-black hover:text-white",
  },

  // Quiet, monochrome, hairlines, no glow
  minimal: {
    section: "",
    blobs: null,
    filterBase: "rounded-none border-b-2 px-1 pb-1 bg-transparent",
    filterOn: "border-slate-900 text-slate-900 dark:border-white dark:text-white font-semibold",
    filterOff: "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white",
    count: "text-slate-500",
    card: `overflow-hidden rounded-md border border-slate-200 bg-transparent transition hover:border-slate-900 dark:border-slate-800 dark:hover:border-white ${strip}`,
    banner: "rounded-md border-y border-slate-200 dark:border-slate-800",
    bannerEyebrow: "text-slate-500",
    bannerTitle: "text-slate-900 dark:text-white",
    bannerText: "text-slate-500",
    bannerBtn: "rounded-md border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-slate-950",
  },

  // Dark, violet/cyan glowing edges
  neon: {
    section: "bg-slate-950",
    blobs: (
      <>
        {blob("top-1/4 -left-40", "bg-violet-600/30")}
        {blob("top-1/2 -right-40", "bg-cyan-500/25")}
      </>
    ),
    filterBase: "rounded-lg",
    filterOn: "bg-gradient-to-r from-violet-500 to-cyan-400 text-slate-950 font-semibold shadow-[0_0_18px_rgba(139,92,246,0.6)]",
    filterOff: "border border-violet-500/30 text-slate-300 hover:border-cyan-400/60 hover:text-cyan-300",
    count: "text-cyan-300/80",
    card: `overflow-hidden rounded-2xl border border-violet-500/30 bg-slate-900/70 text-slate-200 transition hover:border-cyan-400/70 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] ${strip}`,
    banner: "rounded-2xl border border-violet-500/30 bg-gradient-to-r from-violet-950/50 to-cyan-950/40",
    bannerEyebrow: "text-cyan-300",
    bannerTitle: "text-white",
    bannerText: "text-slate-300",
    bannerBtn: "rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 text-slate-950 hover:opacity-90",
  },
};

export function Project({ theme = THEME }: { theme?: Theme }) {
  const [filter, setFilter] = useState<string>("All");
  const t = THEMES[theme];

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const github =
    personalInfo.socials.find((s) => s.name === "GitHub")?.url ||
    "https://github.com/SMIT5629";

  return (
    <section id="projects" className={`relative overflow-hidden py-20 lg:py-28 ${t.section}`}>
      {t.blobs}

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
                className={`cursor-pointer px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${t.filterBase} ${
                  filter === cat ? t.filterOn : t.filterOff
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className={`text-xs font-mono ${t.count}`}>
            Showing {filtered.length} of {projects.length} projects
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filtered.map((project) => (
            <div key={project.id} className={t.card}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className={`mt-14 p-6 sm:p-8 ${t.banner}`}>
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <div className="space-y-1.5">
              <div className={`inline-flex items-center gap-1.5 text-xs font-mono font-medium ${t.bannerEyebrow}`}>
                <FolderGit2 size={15} />
                <span>Open Source Repositories</span>
              </div>
              <h3 className={`text-lg font-bold sm:text-xl ${t.bannerTitle}`}>
                Interested in exploring more code & experiments?
              </h3>
              <p className={`max-w-xl text-xs sm:text-sm ${t.bannerText}`}>
                Browse my GitHub to inspect code architecture, commit history, backend services, and active side projects.
              </p>
            </div>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex shrink-0 items-center gap-2 px-5 py-2.5 text-xs font-semibold shadow-sm transition-all ${t.bannerBtn}`}
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