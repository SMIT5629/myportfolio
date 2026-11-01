import React from "react";
import { GraduationCap, MapPin, Sparkles, CheckCircle2, Server, Database, Code2 } from "lucide-react";
import { personalInfo } from "@/data/personal";
import SectionHeading from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 01. ABOUT ME"
          title="Engineering Backends with Precision & Purpose"
          subtitle="A look into my background, academic foundation, and approach to software development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Personal Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800/90 dark:bg-slate-900/60">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Who I Am & What Drives Me
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  {personalInfo.introduction}
                </p>
                <p>
                  My engineering journey began with a curiosity for how data moves across networks
                  and how robust server-side systems power smooth, responsive client experiences.
                  I believe that well-architected APIs, structured databases, and clean code are the
                  unsung backbone of every great digital product.
                </p>
                <p>
                  Currently based in <strong className="text-slate-900 dark:text-slate-200">{personalInfo.location}</strong>,
                  I am actively refining my skills in distributed computing, serverless architectures, and
                  production-grade backend design while completing my undergraduate degree.
                </p>
              </div>

              {/* Engineering Principles */}
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/80">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3">
                  My Core Engineering Principles
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="flex items-start gap-2 rounded-lg bg-slate-50 p-3 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60">
                    <Server size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        Reliable APIs
                      </p>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                        Clean REST standards & structured schemas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 rounded-lg bg-slate-50 p-3 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60">
                    <Database size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        Smart Data
                      </p>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                        Optimized queries, indexing & caching.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 rounded-lg bg-slate-50 p-3 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60">
                    <Code2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        Readable Code
                      </p>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                        Modular, self-documenting & testable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Details & Interests */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Spotlight Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-slate-800/90 dark:bg-slate-900/60">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-semibold">
                  <GraduationCap size={15} />
                  Academic Snapshot
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  {personalInfo.education.graduationYear}
                </span>
              </div>

              <div className="mt-4 space-y-1">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {personalInfo.education.degree} in {personalInfo.education.field}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {personalInfo.education.college}
                </p>
              </div>

              <div className="mt-4 rounded-lg bg-slate-50 p-3.5 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60">
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  Key Coursework Focus:
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[
                    "Data Structures & Algorithms",
                    "Database Management Systems",
                    "Object Oriented Programming",
                    "Operating Systems",
                    "Computer Networks",
                  ].map((course) => (
                    <span
                      key={course}
                      className="inline-flex items-center rounded bg-white px-2 py-0.5 text-[11px] font-mono text-slate-600 border border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Areas of Interest Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-slate-800/90 dark:bg-slate-900/60">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3 flex items-center gap-1.5 font-semibold">
                <Sparkles size={14} className="text-emerald-500" />
                Areas of Interest
              </h4>

              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300 transition-colors hover:border-emerald-500/40 hover:text-emerald-600 dark:hover:text-emerald-400"
                  >
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    {interest}
                  </span>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin size={13} className="text-emerald-500" />
                  {personalInfo.location}
                </span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400">
                  {personalInfo.availability}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
