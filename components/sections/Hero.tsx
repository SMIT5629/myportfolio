"use client";

import React, { useState } from "react";
import { ArrowDown, FileDown, Terminal, Check, Copy, Layers, Database, Cpu } from "lucide-react";
import { personalInfo } from "@/data/personal";
import SocialLinks from "@/components/ui/SocialLinks";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copySnippet = () => {
    navigator.clipboard.writeText("git clone https://github.com/SMIT5629/");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glow accents */}
      <div className="pointer-events-none absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/15" />
      <div className="pointer-events-none absolute bottom-1/4 -right-48 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl dark:bg-teal-500/10" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-medium text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{personalInfo.availability}</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span>{personalInfo.location}</span>
            </div>

            {/* Name & Role */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                Hi, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {personalInfo.name}
              </h1>
              <div className="flex items-center gap-2 pt-1">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-400">
                  {personalInfo.role}
                </span>
                <span className="text-xs sm:text-sm font-mono px-2 py-0.5 rounded border border-slate-200 bg-slate-100 text-slate-600 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400">
                  IT &apos;27
                </span>
              </div>
            </div>

            {/* Tagline */}
            <blockquote className="rounded-lg border-l-2 border-emerald-500 bg-slate-100/70 p-3.5 text-xs sm:text-sm font-mono italic text-slate-700 dark:bg-slate-900/60 dark:text-slate-300 max-w-xl">
              &quot;{personalInfo.tagline}&quot;
            </blockquote>

            {/* Intro */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              I build the backend side of things: REST APIs, databases, and the server logic behind them. I&apos;m
              still a student, and I learn most by building projects and fixing what breaks.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-500 hover:shadow-md hover:shadow-emerald-500/20 active:scale-95 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowDown size={15} />
              </button>

              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-emerald-500 hover:bg-emerald-50/50 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-emerald-500 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-400"
              >
                <FileDown size={15} />
                <span>Resume</span>
              </a>

              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 rounded-lg border border-transparent px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 cursor-pointer"
              >
                <span>Get in touch</span>
              </button>
            </div>

            {/* Socials */}
            <div className="pt-2">
              <SocialLinks showLabels={true} iconSize={16} />
            </div>
          </div>

          {/* Right Column: terminal */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-slate-200/90 bg-white/90 p-1 shadow-xl backdrop-blur-xl dark:border-slate-800/90 dark:bg-slate-900/90">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-2.5 dark:border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-slate-500 dark:text-slate-400">
                  <Terminal size={12} className="text-emerald-500" />
                  <span>smit@portfolio: ~</span>
                </div>
                <button
                  type="button"
                  onClick={copySnippet}
                  aria-label="Copy git clone command"
                  className="rounded p-1 text-slate-400 hover:text-emerald-500 transition-colors cursor-pointer"
                >
                  {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto bg-slate-950 text-slate-200 rounded-b-lg">
                <p className="text-slate-400">
                  <span className="text-emerald-400 font-bold">$</span> git clone https://github.com/SMIT5629/
                </p>
                <p className="text-slate-500 mt-1">
                  <span className="text-emerald-400 font-bold">$</span> cat me.ts
                </p>

                <div className="my-3 rounded border border-slate-800 bg-slate-900/90 p-3 text-[11px] leading-6">
                  <p className="text-slate-300">
                    <span className="text-emerald-400">const</span> me = &#123;
                  </p>
                  <div className="pl-4 text-slate-400">
                    <p>
                      name: <span className="text-amber-300">&quot;{personalInfo.name}&quot;</span>,
                    </p>
                    <p>
                      role: <span className="text-amber-300">&quot;{personalInfo.role}&quot;</span>,
                    </p>
                    <p>
                      backend: [<span className="text-amber-300">&quot;Node.js&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;Express&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;WebSockets&quot;</span>],
                    </p>
                    <p>
                      databases: [<span className="text-amber-300">&quot;MongoDB&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;PostgreSQL&quot;</span>],
                    </p>
                    <p>
                      frontend: [<span className="text-amber-300">&quot;TypeScript&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;React&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;Next.js&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;Tailwind&quot;</span>],
                    </p>
                    <p>
                      status: <span className="text-emerald-400">&quot;{personalInfo.availability}&quot;</span>
                    </p>
                  </div>
                  <p className="text-slate-300">&#125;;</p>
                </div>

                <p className="text-slate-500">
                  <span className="text-emerald-400 font-bold">$</span>{" "}
                  <span className="inline-block h-3 w-1.5 translate-y-0.5 animate-pulse bg-emerald-400" />
                </p>
              </div>
            </div>

            {/* Three small tags under the terminal */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white/60 p-2.5 dark:border-slate-800/80 dark:bg-slate-900/40">
                <Layers size={16} className="text-emerald-500 shrink-0" />
                <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300 truncate">
                  Node &amp; Express
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white/60 p-2.5 dark:border-slate-800/80 dark:bg-slate-900/40">
                <Database size={16} className="text-emerald-500 shrink-0" />
                <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300 truncate">
                  MongoDB &amp; Postgres
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white/60 p-2.5 dark:border-slate-800/80 dark:bg-slate-900/40">
                <Cpu size={16} className="text-emerald-500 shrink-0" />
                <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300 truncate">
                  React &amp; Next.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;