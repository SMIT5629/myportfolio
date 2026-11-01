"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Terminal } from "lucide-react";
import { personalInfo } from "@/data/personal";
import SocialLinks from "@/components/ui/SocialLinks";

export function Footer() {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(href.replace("#", ""));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-slate-200/80 bg-white/50 backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-950/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Left Column: Brand & Tagline */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400 font-mono text-xs">
                <Terminal size={14} />
              </span>
              <span className="font-mono text-sm font-bold tracking-tight text-slate-900 dark:text-white">
                {personalInfo.name}
              </span>
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                — {personalInfo.role}
              </span>
            </div>
            <p className="max-w-md text-xs text-slate-600 dark:text-slate-400 font-mono italic">
              &quot;{personalInfo.tagline}&quot;
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-slate-600 dark:text-slate-400">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personalInfo.availability}</span>
              <span>•</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Center Column: Quick Navigation */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Column: Socials & Back to Top */}
          <div className="flex items-center justify-between gap-4 md:justify-end">
            <SocialLinks iconSize={16} />

            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Back to top"
              className="group flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-all hover:border-emerald-500/50 hover:bg-emerald-50 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-400 cursor-pointer"
            >
              <ArrowUp
                size={16}
                className="transition-transform duration-200 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-8 border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:border-slate-800/60 dark:text-slate-400">
          <p>© {year} Smit Patel. Built with Next.js & Tailwind CSS.</p>
          <p className="flex items-center gap-1 font-mono text-[11px]">
            <span>Crafted for high performance & clean code</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
