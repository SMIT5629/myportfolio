"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Terminal, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialLinks";

export interface ProjectData {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  features?: string[];
  github?: string;
  live?: string;
  status?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: ProjectData;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5 dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-emerald-500/40 dark:hover:shadow-emerald-500/10">
      <div>
        {/* Card Top: Preview Window */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 border-b border-slate-200/70 dark:bg-slate-950/60 dark:border-slate-800/60">
          {project.image && !imgError ? (
            <div className="relative h-full w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                onError={() => setImgError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ) : (
            /* Sleek architectural code preview placeholder when image is pending */
            <div className="relative flex h-full w-full flex-col justify-between p-4 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2 dark:border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <span className="text-[11px] text-slate-600 dark:text-slate-400">
                  {project.category}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 py-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
                  <Terminal size={24} />
                </div>
                <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                  {project.title}
                </p>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 max-w-[240px]">
                  {project.technologies.slice(0, 3).join(" • ")}
                </p>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {project.status || "Deployed"}
                </span>
                <span>REST API Ready</span>
              </div>
            </div>
          )}

          {/* Status Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            {project.status && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-2.5 py-0.5 text-[11px] font-medium text-white shadow-sm backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                {project.status}
              </span>
            )}
            {project.featured && (
              <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-50/90 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700 shadow-sm backdrop-blur-md dark:border-emerald-500/40 dark:bg-emerald-950/80 dark:text-emerald-300">
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 md:p-6">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">
              {project.category}
            </span>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.description}
          </p>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 dark:border-slate-800/80">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Key Highlights
              </span>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 truncate">
                    <CheckCircle2
                      size={12}
                      className="text-emerald-500 shrink-0"
                    />
                    <span className="truncate">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-mono text-slate-700 dark:border-slate-800 dark:bg-slate-800/70 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800/80 dark:bg-slate-900/40">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 transition-colors hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
          >
            <GithubIcon size={15} />
            <span>Source Code</span>
          </a>
        ) : (
          <span />
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition-all hover:bg-emerald-500 hover:text-white dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500 dark:hover:text-slate-950"
          >
            <span>Live Demo</span>
            <ExternalLink size={13} />
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
