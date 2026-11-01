"use client";

import React, { useState } from "react";
import { ArrowDown, FileDown, Terminal, Check, Copy, Sparkles, Layers, Database, Cpu } from "lucide-react";
import { personalInfo } from "@/data/personal";
import SocialLinks from "@/components/ui/SocialLinks";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copySnippet = () => {
    navigator.clipboard.writeText("git clone https://github.com/SMIT5629/spotify-clone.git");
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
          {/* Left Column: Hero Copy */}
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

            {/* Main Title & Role */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono font-semibold tracking-wider text-emerald-600 dark:text-emerald-400">
                HELLO WORLD, I AM
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

            {/* Introduction snippet */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              Passionate about engineering reliable backends, designing clean RESTful APIs,
              and working behind the scenes with databases and systems logic. Focused on creating
              performant, scalable, and recruiter-ready software.
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
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Socials Link Row */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 block mb-2">
                Connect With Me
              </span>
              <SocialLinks showLabels={true} iconSize={16} />
            </div>
          </div>

          {/* Right Column: Interactive Backend Terminal Console */}
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
                  <span>smit@backend-node: ~/api</span>
                </div>
                <button
                  type="button"
                  onClick={copySnippet}
                  aria-label="Copy shell snippet"
                  className="rounded p-1 text-slate-400 hover:text-emerald-500 transition-colors cursor-pointer"
                >
                  {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Terminal Code Body */}
              <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto bg-slate-950 text-slate-200 rounded-b-lg">
                <div className="flex items-center justify-between text-slate-400 pb-2 mb-2 border-b border-slate-800 text-[11px]">
                  <span>// System Architecture Telemetry</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ONLINE: 200 OK
                  </span>
                </div>

                <p className="text-slate-400">
                  <span className="text-emerald-400 font-bold">$</span> node server.js
                </p>
                <p className="text-slate-400 mt-1">
                  [info] Initializing REST API services...
                </p>
                <p className="text-emerald-400">
                  [db] Connected to MongoDB cluster (replica set)
                </p>
                <p className="text-teal-400">
                  [auth] JWT bearer authentication middleware ready
                </p>
                <p className="text-slate-300">
                  [routes] Registered: /api/v1/projects, /api/v1/auth
                </p>

                {/* Code Preview Block */}
                <div className="my-3 rounded border border-slate-800 bg-slate-900/90 p-3 text-[11px]">
                  <p className="text-emerald-400">
                    <span className="text-teal-300">app</span>.get(
                    <span className="text-amber-300">&quot;/api/v1/status&quot;</span>, (req, res) =&gt; &#123;
                  </p>
                  <p className="pl-4 text-slate-300">
                    res.status(<span className="text-emerald-400">200</span>).json(&#123;
                  </p>
                  <p className="pl-8 text-slate-400">
                    engineer: <span className="text-amber-300">&quot;Smit Patel&quot;</span>,
                  </p>
                  <p className="pl-8 text-slate-400">
                    role: <span className="text-amber-300">&quot;Backend Developer&quot;</span>,
                  </p>
                  <p className="pl-8 text-slate-400">
                    focus: [<span className="text-amber-300">&quot;REST APIs&quot;</span>, <span className="text-amber-300">&quot;Microservices&quot;</span>, <span className="text-amber-300">&quot;Databases&quot;</span>],
                  </p>
                  <p className="pl-8 text-slate-400">
                    status: <span className="text-emerald-400">&quot;Ready for hire&quot;</span>
                  </p>
                  <p className="pl-4 text-slate-300">&#125;);</p>
                  <p className="text-emerald-400">&#125;);</p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-center">
                  <div className="rounded bg-slate-900/60 p-2">
                    <p className="text-[10px] text-slate-400">RESPONSE</p>
                    <p className="text-xs font-bold text-emerald-400 mt-0.5">&lt; 18ms</p>
                  </div>
                  <div className="rounded bg-slate-900/60 p-2">
                    <p className="text-[10px] text-slate-400">UPTIME</p>
                    <p className="text-xs font-bold text-emerald-400 mt-0.5">99.98%</p>
                  </div>
                  <div className="rounded bg-slate-900/60 p-2">
                    <p className="text-[10px] text-slate-400">ENDPOINTS</p>
                    <p className="text-xs font-bold text-teal-400 mt-0.5">RESTful</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Feature Pillars beneath terminal */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white/60 p-2.5 dark:border-slate-800/80 dark:bg-slate-900/40">
                <Layers size={16} className="text-emerald-500 shrink-0" />
                <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300 truncate">
                  REST & APIs
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white/60 p-2.5 dark:border-slate-800/80 dark:bg-slate-900/40">
                <Database size={16} className="text-emerald-500 shrink-0" />
                <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300 truncate">
                  SQL & NoSQL
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white/60 p-2.5 dark:border-slate-800/80 dark:bg-slate-900/40">
                <Cpu size={16} className="text-emerald-500 shrink-0" />
                <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300 truncate">
                  Systems Design
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
