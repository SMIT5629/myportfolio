import React from "react";
import { GraduationCap, Calendar, MapPin, BookOpen, Award, CheckCircle2 } from "lucide-react";
import { personalInfo } from "@/data/personal";
import SectionHeading from "@/components/ui/SectionHeading";

export function Education() {
  const { degree, field, college, graduationYear } = personalInfo.education;

  const coreModules = [
    { title: "Data Structures & Algorithms", desc: "Arrays, Trees, Graphs, Sorting & Complexity Analysis" },
    { title: "Database Management Systems", desc: "Relational Modeling, Normalization, SQL Queries & Indexing" },
    { title: "Object-Oriented Programming", desc: "Polymorphism, Inheritance, Design Patterns in Java & C++" },
    { title: "Computer Networks", desc: "TCP/IP, HTTP/HTTPS, OSI Model, Socket Programming" },
    { title: "Operating Systems", desc: "Process Scheduling, Memory Management & Multithreading" },
    { title: "Web Engineering", desc: "Client-Server Architecture, REST APIs & Responsive Interfaces" },
  ];

  return (
    <section id="education" className="relative py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 04. ACADEMICS"
          title="Education & Foundations"
          subtitle="Theoretical computer science foundation combined with practical software engineering coursework."
        />

        <div className="relative border-l-2 border-emerald-500/30 pl-6 sm:pl-8 ml-3 sm:ml-4 space-y-10">
          {/* Timeline Item */}
          <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-emerald-500/20 dark:bg-slate-900">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </div>

            {/* Academic Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800/90 dark:bg-slate-900/60">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  <GraduationCap size={16} />
                  <span>Undergraduate Program</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-mono font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                    <Calendar size={13} />
                    <span>Graduating {graduationYear}</span>
                  </span>
                </div>
              </div>

              {/* Program Details */}
              <div className="mt-5 space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {degree} in {field}
                </h3>
                <p className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300">
                  {college}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1 font-mono">
                  <MapPin size={12} className="text-emerald-500" />
                  Bhavnagar, Gujarat, India
                </p>
              </div>

              {/* Coursework Matrix */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={16} className="text-emerald-500" />
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold">
                    Core Coursework & Concepts
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {coreModules.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-lg border border-slate-100 bg-slate-50/70 p-3.5 dark:border-slate-800/80 dark:bg-slate-800/40"
                    >
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                        <span className="truncate">{item.title}</span>
                      </p>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
