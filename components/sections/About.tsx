import React from "react";
import { personalInfo } from "@/data/personal";
import SectionHeading from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-5 md:gap-16">
          {/* Left: heading */}
          <div className="md:col-span-2">
            <SectionHeading
              badge="// 01. ABOUT ME"
              title="A bit about me"
              subtitle="Backend developer, still a student, and happiest when I'm building something to see how it works."
            />
          </div>

          {/* Right: text, left-aligned with a thin divider */}
          <div className="space-y-6 text-left text-base leading-8 text-slate-600 dark:text-slate-400 md:col-span-3 md:border-l md:border-slate-200 md:pl-10 dark:md:border-slate-800">
            <p>{personalInfo.introduction}</p>

            <p>
              I got into this because I was curious how networks and backends actually work. These days I mostly
              build APIs and databases, and I try to keep the code clean enough that I can come back to it later
              without wincing.
            </p>

            <p>
              I&apos;m based in{" "}
              <span className="font-medium text-slate-900 dark:text-slate-200">{personalInfo.location}</span>, doing
              my {personalInfo.education.degree} in {personalInfo.education.field} at{" "}
              {personalInfo.education.college} ({personalInfo.education.graduationYear}). Outside of classes I&apos;m
              digging into distributed systems, serverless, and what it takes to run a backend in production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;