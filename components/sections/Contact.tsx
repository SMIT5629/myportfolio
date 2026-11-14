"use client";

import React, { useState, useTransition } from "react";
import { Send, Check, Copy, Loader2 } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { sendContactMessage, ContactFormState } from "@/app/actions";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialLinks from "@/components/ui/SocialLinks";

const initialFormState: ContactFormState = {
  success: false,
  message: "",
};

const inputClass =
  "w-full rounded-lg border border-slate-200 bg-transparent px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-800 dark:text-white dark:placeholder:text-slate-600 transition-all";

const labelClass = "mb-1.5 block font-mono text-xs text-slate-600 dark:text-slate-400";

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

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 05. GET IN TOUCH"
          title="Let's talk"
          subtitle="Looking for backend roles and internships, and happy to chat about projects too."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: details */}
          <div className="space-y-8 text-left lg:col-span-5">
            <p className="text-base leading-8 text-slate-600 dark:text-slate-400">
              Use the form or email me directly. I&apos;m happy to talk about roles, tech stacks, or anything
              backend.
            </p>

            <div>
              <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-slate-500">Email</h3>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="truncate text-base font-medium text-slate-900 transition-colors hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400"
                >
                  {personalInfo.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="shrink-0 rounded-md border border-slate-200 p-1.5 text-slate-500 transition-colors hover:border-emerald-500/40 hover:text-emerald-600 dark:border-slate-800 dark:hover:text-emerald-400 cursor-pointer"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>
              {copiedEmail && <p className="mt-2 font-mono text-xs text-emerald-600 dark:text-emerald-400">Copied.</p>}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-slate-500">Location</h3>
                <p className="text-base text-slate-700 dark:text-slate-300">{personalInfo.location}</p>
              </div>
              <div>
                <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-slate-500">Status</h3>
                <p className="text-base text-emerald-600 dark:text-emerald-400">{personalInfo.availability}</p>
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-500">Elsewhere</h3>
              <SocialLinks showLabels={true} iconSize={15} />
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            {state.message && (
              <p
                className={`mb-6 rounded-lg border px-4 py-3 text-sm ${
                  state.success
                    ? "border-emerald-500/30 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300"
                    : "border-rose-500/30 bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300"
                }`}
              >
                {state.message}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Name
                  </label>
                  <input type="text" id="name" name="name" required placeholder="Your name" className={inputClass} />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={labelClass}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="What's this about?"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className={`${inputClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400 sm:w-auto cursor-pointer"
              >
                {isPending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Send message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;