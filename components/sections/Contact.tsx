"use client";

import React, { useState, useTransition } from "react";
import { Mail, MapPin, Send, Check, Copy, AlertCircle, CheckCircle2, MessageSquare, Loader2 } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { sendContactMessage, ContactFormState } from "@/app/actions";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialLinks from "@/components/ui/SocialLinks";

const initialFormState: ContactFormState = {
  success: false,
  message: "",
};

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [state, setState] = useState<ContactFormState>(initialFormState);
  const [isPending, startTransition] = useTransition();

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      try {
        const result = await sendContactMessage(state, formData);
        setState(result);
        if (result.success) {
          form.reset();
        }
      } catch {
        setState({
          success: false,
          message: "Something went wrong. Please try again later.",
        });
      }
    });
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28">
      {/* Background radial accent */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 05. GET IN TOUCH"
          title="Let's Build Something Resilient"
          subtitle="Currently open to backend developer opportunities, internships, and technical collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800/90 dark:bg-slate-900/60 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold block mb-2">
                  Direct Inquiries
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Have an opportunity or question?
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Feel free to send a message via the form or email me directly. I am always happy
                  to discuss engineering roles, tech stacks, or backend systems.
                </p>
              </div>

              {/* Email Card with Copy button */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400 shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[11px] font-mono text-slate-600 dark:text-slate-400">
                        PRIMARY EMAIL
                      </p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400 truncate block transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-emerald-500/40 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-emerald-400 shrink-0 transition-all cursor-pointer"
                  >
                    {copiedEmail ? (
                      <Check size={14} className="text-emerald-500" />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="mt-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                    Copied email to clipboard!
                  </p>
                )}
              </div>

              {/* Location & Status strip */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 shrink-0">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-slate-600 dark:text-slate-400 block">
                      LOCATION
                    </span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400 shrink-0">
                    <CheckCircle2 size={15} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-slate-600 dark:text-slate-400 block">
                      STATUS
                    </span>
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">
                      {personalInfo.availability}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 block mb-2.5">
                  Social Channels
                </span>
                <SocialLinks showLabels={true} iconSize={15} />
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800/90 dark:bg-slate-900/60">
              <div className="flex items-center gap-2 pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
                <MessageSquare size={17} className="text-emerald-500" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
              </div>

              {/* Feedback Alert */}
              {state.message && (
                <div
                  className={`mb-6 flex items-start gap-3 rounded-xl p-4 text-xs sm:text-sm ${state.success
                      ? "border border-emerald-500/30 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-950/40 dark:text-emerald-300"
                      : "border border-rose-500/30 bg-rose-50 text-rose-800 dark:border-rose-500/30 dark:bg-rose-950/40 dark:text-rose-300"
                    }`}
                >
                  {state.success ? (
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle size={18} className="text-rose-500 shrink-0 mt-0.5" />
                  )}
                  <span>{state.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300"
                    >
                      Your Name <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Jane Doe"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-emerald-500 dark:focus:bg-slate-900 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300"
                    >
                      Your Email <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. jane@company.com"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-emerald-500 dark:focus:bg-slate-900 transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300"
                  >
                    Subject <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="e.g. Backend Developer Opportunity / Collaboration"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-emerald-500 dark:focus:bg-slate-900 transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300"
                  >
                    Message <span className="text-emerald-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-emerald-500 dark:focus:bg-slate-900 transition-all resize-y"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-500 hover:shadow-md hover:shadow-emerald-500/25 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400 cursor-pointer"
                >
                  {isPending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
