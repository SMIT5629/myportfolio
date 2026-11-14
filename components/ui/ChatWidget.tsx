"use client";

// src/components/ChatWidget.tsx
import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X, Loader2 } from "lucide-react";
import { personalInfo } from "@/data/personal";

type Msg = { role: "user" | "assistant"; content: string };

const firstName = personalInfo.name.split(" ")[0];

const SUGGESTIONS = [
    "What projects have you built?",
    "What's your tech stack?",
    "Tell me about your education",
    "How can I contact you?",
];

export function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Msg[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Lets any button on the page open the chat: window.dispatchEvent(new Event("open-chat"))
    useEffect(() => {
        const openChat = () => setOpen(true);
        window.addEventListener("open-chat", openChat);
        return () => window.removeEventListener("open-chat", openChat);
    }, []);

    useEffect(() => {
        if (open) inputRef.current?.focus();
    }, [open]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    const setLastAssistant = (content: string) =>
        setMessages((m) => {
            const copy = [...m];
            copy[copy.length - 1] = { role: "assistant", content };
            return copy;
        });

    async function send(text: string) {
        const question = text.trim();
        if (!question || loading) return;

        const next: Msg[] = [...messages, { role: "user", content: question }];
        setMessages([...next, { role: "assistant", content: "" }]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: next }),
            });

            if (!res.ok || !res.body) {
                setLastAssistant((await res.text()) || "Sorry, something went wrong. Please try again.");
                return;
            }

            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let answer = "";
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                answer += decoder.decode(value, { stream: true });
                setLastAssistant(answer);
            }
        } catch {
            setLastAssistant("Sorry, something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    if (!open) {
        return (
            <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label={`Ask ${firstName}'s AI assistant`}
                className="fixed bottom-4 right-4 z-[10000] flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-emerald-500 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400 sm:bottom-6 sm:right-6 cursor-pointer"
            >
                <MessageCircle size={18} />
                <span className="hidden sm:inline">Ask {firstName}&apos;s AI</span>
            </button>
        );
    }

    return (
        <div
            role="dialog"
            aria-label={`Chat with ${firstName}'s AI assistant`}
            className="fixed bottom-4 right-4 z-[10000] flex h-[32rem] max-h-[75vh] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-950 sm:bottom-6 sm:right-6 sm:w-96"
        >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-800">
                <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Ask {firstName}&apos;s AI</p>
                    <p className="font-mono text-[11px] text-slate-500">AI assistant · answers from {firstName}&apos;s info</p>
                </div>
                <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close chat"
                    className="rounded-md p-1.5 text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-white cursor-pointer"
                >
                    <X size={18} />
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4 text-sm">
                {messages.length === 0 && (
                    <>
                        <p className="max-w-[85%] rounded-xl bg-slate-100 px-3 py-2 leading-6 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                            Hi! I&apos;m an AI assistant. Ask me anything about {firstName}&apos;s projects, skills, or education.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                            {SUGGESTIONS.map((s) => (
                                <button
                                    key={s}
                                    type="button"
                                    onClick={() => send(s)}
                                    className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 transition-colors hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-800 dark:text-slate-400 dark:hover:text-emerald-400 cursor-pointer"
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </>
                )}

                {messages.map((m, i) => (
                    <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                        <p
                            className={`max-w-[85%] whitespace-pre-wrap rounded-xl px-3 py-2 leading-6 ${m.role === "user"
                                    ? "bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950"
                                    : "bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300"
                                }`}
                        >
                            {m.content || (loading && i === messages.length - 1 ? <Loader2 size={16} className="animate-spin" /> : "")}
                        </p>
                    </div>
                ))}
                <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    send(input);
                }}
                className="flex items-center gap-2 border-t border-slate-200 p-3 dark:border-slate-800"
            >
                <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    maxLength={500}
                    placeholder="Ask a question..."
                    className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-transparent px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-800 dark:text-white dark:placeholder:text-slate-600"
                />
                <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    aria-label="Send message"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white transition-colors hover:bg-emerald-500 disabled:opacity-50 dark:bg-emerald-500 dark:text-slate-950 cursor-pointer"
                >
                    <Send size={15} />
                </button>
            </form>
        </div>
    );
}

export default ChatWidget;