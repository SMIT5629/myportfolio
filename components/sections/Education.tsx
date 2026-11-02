import React from "react";
import { GraduationCap, Calendar, MapPin, BookOpen, Award, CheckCircle2 } from "lucide-react";
import { education } from "@/data/education";
import SectionHeading from "@/components/ui/SectionHeading";

export function Education() {
  // Display latest education first (reverse chronological order)
  const timelineData = [...education].sort(
    (a, b) => parseInt(b.graduationYear || "0", 10) - parseInt(a.graduationYear || "0", 10)
  );

  return (
    <section id="education" className="relative py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="pointer-events-none absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[130px] dark:bg-emerald-500/20" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-teal-500/20 blur-[130px] dark:bg-teal-500/20" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 04. ACADEMICS"
          title="Education & Foundations"
          subtitle="Academic milestones, core coursework, and foundational problem-solving disciplines."
        />

        <div className="relative border-l-2 border-emerald-500/30 pl-6 sm:pl-8 ml-3 sm:ml-4 space-y-10">
          {timelineData.map((item) => (
            <div key={item.id} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-emerald-500/20 dark:bg-slate-900">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </div>

              {/* Academic Card */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800/90 dark:bg-slate-900/60 transition-all duration-300 hover:border-emerald-500/40">
                {/* Header Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                      <GraduationCap size={16} />
                      <span>{item.badge || "Education"}</span>
                    </span>

                    {item.currentStatus && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 dark:text-slate-400 border-l border-slate-200 pl-2 ml-1 dark:border-slate-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {item.currentStatus}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {/* Score Badge */}
                    {item.score && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono font-semibold text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/15 dark:text-emerald-300">
                        <Award size={13} className="text-emerald-500" />
                        <span>Score: {item.score}</span>
                      </span>
                    )}

                    {/* Timeline Years */}
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-mono font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      <Calendar size={13} />
                      <span>
                        {item.startYear ? `${item.startYear} - ${item.graduationYear}` : item.graduationYear}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Program Details */}
                <div className="mt-5 space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {item.degree} {item.field ? `in ${item.field}` : ""}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300">
                    {item.college}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1 font-mono">
                    <MapPin size={12} className="text-emerald-500" />
                    {item.location}
                  </p>
                  {item.description && (
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Coursework Matrix */}
                {item.modules && item.modules.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 mb-3.5">
                      <BookOpen size={15} className="text-emerald-500" />
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold">
                        Core Subjects & Concepts
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {item.modules.map((mod) => (
                        <div
                          key={mod.title}
                          className="rounded-lg border border-slate-100 bg-slate-50/70 p-3 dark:border-slate-800/80 dark:bg-slate-800/40"
                        >
                          <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                            <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                            <span className="truncate">{mod.title}</span>
                          </p>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-snug">
                            {mod.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
