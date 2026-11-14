import React from "react";
import { education } from "@/data/education";
import SectionHeading from "@/components/ui/SectionHeading";

/* Version A: plain timeline. A thin line with dots, text only. */
export function Education() {
  const timelineData = [...education].sort(
    (a, b) => parseInt(b.graduationYear || "0", 10) - parseInt(a.graduationYear || "0", 10)
  );

  return (
    <section id="education" className="relative py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="pointer-events-none absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[130px] dark:bg-emerald-500/20" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-teal-500/20 blur-[130px] dark:bg-teal-500/20" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 04. ACADEMICS"
          title="Education"
          subtitle="Where I've studied and what I've picked up along the way."
        />

        <div className="ml-2 max-w-3xl space-y-12 border-l border-slate-300 pl-8 dark:border-slate-700">
          {timelineData.map((item) => (
            <div key={item.id} className="relative">
              <span className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />

              <p className="font-mono text-sm text-emerald-600 dark:text-emerald-400">
                {item.startYear ? `${item.startYear} – ${item.graduationYear}` : item.graduationYear}
                {item.currentStatus ? <span className="text-slate-500"> · {item.currentStatus}</span> : null}
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                {item.degree} {item.field ? `in ${item.field}` : ""}
              </h3>
              <p className="mt-1 text-base text-slate-700 dark:text-slate-300">
                {item.college}
                {item.location ? <span className="text-slate-500"> · {item.location}</span> : null}
              </p>
              {item.score && (
                <p className="mt-1 font-mono text-sm text-slate-600 dark:text-slate-400">Score: {item.score}</p>
              )}

              {item.description && (
                <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-400">{item.description}</p>
              )}

              {item.modules && item.modules.length > 0 && (
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {item.modules.map((m) => m.title).join("  ·  ")}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;