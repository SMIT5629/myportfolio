"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sun, Moon, Menu, X, FileDown } from "lucide-react";
import { personalInfo } from "@/data/personal";
import ProfilePreviewModal from "@/components/ui/ProfilePreviewModal";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrolled, setScrolled] = useState(false);

  // Initialize theme on client mount
  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section
      const sections = ["contact", "education", "projects", "skills", "about", "hero"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme toggle handler (NO page refresh)
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand & Profile Picture */}
          <div className="flex items-center gap-3">
            {/* Circular Profile Picture with Instagram preview trigger */}
            <button
              type="button"
              onClick={() => setProfileModalOpen(true)}
              aria-label="View profile picture"
              title="Click to view profile picture"
              className="group relative flex h-9 w-9 items-center justify-center rounded-full p-[2px] transition-transform duration-200 hover:scale-105 cursor-pointer ring-2 ring-emerald-500/40 hover:ring-emerald-500 dark:ring-emerald-500/50 dark:hover:ring-emerald-400"
            >
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/images/pfp1.jpg"
                  alt="Smit Patel"
                  fill
                  sizes="36px"
                  priority
                  className="object-cover object-center"
                />
              </div>
              {/* Online pulse indicator */}
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-950" />
            </button>

            {/* Brand Logo Link */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="group flex items-center gap-1.5 font-mono text-sm font-semibold tracking-tight text-slate-900 dark:text-white"
            >
              <span className="text-base font-bold">smit</span>
              <span className="text-emerald-500 font-bold">.dev</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-slate-200/80 bg-white/60 p-1 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60 shadow-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-emerald-500 text-white shadow-sm dark:bg-emerald-500 dark:text-slate-950 font-semibold"
                      : "text-slate-600 hover:text-emerald-600 hover:bg-slate-100/70 dark:text-slate-400 dark:hover:text-emerald-400 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right CTA Group */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-all duration-200 hover:border-emerald-500/50 hover:bg-emerald-50/50 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-400 cursor-pointer"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun size={17} className="text-emerald-400 transition-transform hover:rotate-45" />
                ) : (
                  <Moon size={17} className="text-slate-700 transition-transform hover:-rotate-12" />
                )
              ) : (
                <span className="h-4 w-4" />
              )}
            </button>

            {/* Resume Download CTA */}
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition-all duration-200 hover:bg-emerald-500 hover:text-white dark:border-emerald-500/40 dark:bg-emerald-500/15 dark:text-emerald-400 dark:hover:bg-emerald-500 dark:hover:text-slate-950"
            >
              <FileDown size={14} />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 md:hidden dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 cursor-pointer"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="border-b border-slate-200 bg-white/95 px-4 pt-3 pb-5 backdrop-blur-xl md:hidden dark:border-slate-800 dark:bg-slate-950/95 shadow-lg">
            <div className="flex flex-col gap-1.5">
              {/* Profile Card in Mobile Menu */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setProfileModalOpen(true);
                }}
                className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-left mb-2 cursor-pointer"
              >
                <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-emerald-500/40 shrink-0">
                  <Image
                    src="/images/pfp1.jpg"
                    alt="Smit Patel"
                    fill
                    sizes="40px"
                    className="object-cover object-center"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    {personalInfo.name}
                  </p>
                  <p className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                    Tap to view photo
                  </p>
                </div>
              </button>

              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400 font-semibold"
                        : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    )}
                  </a>
                );
              })}

              <div className="mt-2 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-white shadow-sm dark:text-slate-950"
                >
                  <FileDown size={14} />
                  <span>Download Resume</span>
                </a>

                <span className="text-xs font-mono text-slate-600 dark:text-slate-400">
                  {personalInfo.availability}
                </span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Instagram-Style Profile Preview Modal */}
      <ProfilePreviewModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
      />
    </>
  );
}

export default Navbar;
