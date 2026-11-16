"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Bot, LoaderCircle, MessageCircle, RotateCcw, Send, X } from "lucide-react";

type Source = { title: string; href?: string };
type Message = { role: "user" | "assistant"; content: string; sources?: Source[] };

const starterQuestions = [
  "What projects has Smit built?",
  "What is Smit studying?",
  "How can I contact Smit?",
];

export default function PortfolioChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, pending]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function sendMessage(suggested?: string, event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    const content = (suggested ?? input).trim();
    if (!content || pending) return;

    const nextMessages: Message[] = [...messages, { role: "user", content }];
    const conversation = nextMessages.slice(-12);
    setMessages(nextMessages);
    setInput("");
    setError("");
    setPending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: conversation.map(({ role, content: text }) => ({ role, content: text })) }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Couldn’t send that message.");
      setMessages((current) => [...current, { role: "assistant", content: data.answer, sources: data.sources }]);
    } catch (sendError) {
      setError(sendError instanceof Error ? sendError.message : "Couldn’t send that message. Try again.");
    } finally {
      setPending(false);
    }
  }

  function startNewChat() {
    if (pending) return;
    setMessages([]);
    setInput("");
    setError("");
    inputRef.current?.focus();
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7">
      {open && (
        <section
          aria-label="Ask Smit's portfolio assistant"
          className="mb-3 flex h-[min(560px,calc(100dvh-110px))] w-[min(390px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-950/20 dark:border-slate-700 dark:bg-slate-950"
        >
          <header className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"><Bot size={21} /></div>
              <div>
                <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Ask about Smit</h2>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400"><span className="size-1.5 rounded-full bg-emerald-500" />Portfolio assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button type="button" onClick={startNewChat} disabled={pending} aria-label="Start a new chat" title="Start a new chat" className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-40 dark:hover:bg-slate-800 dark:hover:text-white"><RotateCcw size={17} /></button>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"><X size={18} /></button>
            </div>
          </header>

          <div className="flex-1 space-y-4 overflow-y-auto p-4" aria-live="polite">
            {messages.length === 0 && (
              <div className="pt-3">
                <div className="mb-5 max-w-[90%] rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-3 text-sm leading-6 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                  Hey! I can help you explore Smit&apos;s background, skills, education, and projects. What would you like to know?
                </div>
                <p className="mb-2 text-xs font-medium text-slate-500">TRY ASKING</p>
                <div className="flex flex-col items-start gap-2">
                  {starterQuestions.map((question) => (
                  <button key={question} type="button" onClick={() => void sendMessage(question)} className="rounded-full border border-slate-200 px-3 py-2 text-left text-xs text-slate-600 transition hover:border-emerald-400 hover:text-emerald-700 dark:border-slate-700 dark:text-slate-300 dark:hover:text-emerald-300">{question}</button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "user" ? "rounded-br-sm bg-emerald-600 text-white" : "rounded-bl-sm bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300"}`}>
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  {message.sources && message.sources.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5 border-t border-slate-200/70 pt-2 dark:border-slate-700">
                      {message.sources.map((source) => (
                        <a key={`${source.title}-${source.href}`} href={source.href} target={source.href?.startsWith("http") ? "_blank" : undefined} rel={source.href?.startsWith("http") ? "noreferrer" : undefined} className="rounded-full bg-white/80 px-2 py-1 text-[10px] font-medium leading-4 text-emerald-700 hover:underline dark:bg-slate-800 dark:text-emerald-300">{source.title}</a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {pending && <div className="flex items-center gap-2 text-xs text-slate-500"><LoaderCircle size={15} className="animate-spin" />Looking through the portfolio…</div>}
            {error && <div role="alert" className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs leading-5 text-rose-700 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-300">{error}</div>}
            <div ref={endRef} />
          </div>

          <form onSubmit={(event) => void sendMessage(undefined, event)} className="border-t border-slate-200 p-3 dark:border-slate-800">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 focus-within:border-emerald-500 dark:border-slate-700 dark:bg-slate-900">
              <input ref={inputRef} value={input} onChange={(event) => setInput(event.target.value)} maxLength={2000} placeholder="Ask a question…" aria-label="Your question" className="min-w-0 flex-1 bg-transparent py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white" />
              <button type="submit" disabled={!input.trim() || pending} aria-label="Send message" className="grid size-8 shrink-0 place-items-center rounded-lg bg-emerald-600 text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-40"><Send size={15} /></button>
            </div>
            <p className="mt-2 text-center text-[10px] text-slate-400">Answers are based on information in this portfolio.</p>
          </form>
        </section>
      )}

      <button type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close portfolio chat" : "Open portfolio chat"} aria-expanded={open} className="ml-auto flex h-14 items-center gap-2 rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white shadow-lg shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-emerald-500">
        {open ? <X size={20} /> : <MessageCircle size={20} />}
        <span>{open ? "Close" : "Ask me"}</span>
      </button>
    </div>
  );
}
