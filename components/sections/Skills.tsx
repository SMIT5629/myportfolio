"use client";

import React, { useState } from "react";
import {
  Code,
  Server,
  Database,
  Terminal,
  Layers,
  Layout,
  Wrench,
  CheckCircle,
} from "lucide-react";
import { skills } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...skills.map((s) => s.category)];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming Languages":
        return <Code size={18} className="text-emerald-500" />;
      case "Backend Development":
        return <Server size={18} className="text-emerald-500" />;
      case "Databases & Caching":
        return <Database size={18} className="text-emerald-500" />;
      case "DevOps & Tools":
        return <Wrench size={18} className="text-emerald-500" />;
      case "Frontend Development":
        return <Layout size={18} className="text-emerald-500" />;
      case "Core Competencies":
        return <Layers size={18} className="text-emerald-500" />;
      default:
        return <Terminal size={18} className="text-emerald-500" />;
    }
  };

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="relative py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 02. SKILLS"
          title="Technical Stack & Expertise"
          subtitle="Comprehensive overview of programming languages, server frameworks, database systems, and developer tooling."
        />

        {/* Filter Tabs */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
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

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((cat) => (
            <div
              key={cat.category}
              className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:border-emerald-500/40 hover:shadow-md dark:border-slate-800/90 dark:bg-slate-900/60"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 dark:bg-emerald-500/15">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {cat.category}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400">
                      {cat.items.length} skills
                    </span>
                  </div>
                </div>

                {/* Skill Items List */}
                <div className="mt-4 space-y-3.5">
                  {cat.items.map((item) => (
                    <div key={item.name} className="group">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {item.name}
                        </span>
                        <span className="font-mono text-[11px] text-slate-600 dark:text-slate-400">
                          {item.level}/10
                        </span>
                      </div>

                      {/* Progress Track */}
                      <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden dark:bg-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 transition-all duration-500 ease-out dark:from-emerald-500 dark:to-teal-400 group-hover:opacity-100 opacity-90"
                          style={{ width: `${item.level * 10}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag strip */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-400">
                <span>Proficiency scale</span>
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                  <CheckCircle size={11} /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
