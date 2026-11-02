"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Check,
  BadgeCheck,
  FileDown,
  Sparkles,
} from "lucide-react";
import { personalInfo } from "@/data/personal";

interface ProfilePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

const PHOTOS = [
  {
    src: "/images/pfp2.jpg",
    alt: "Smit Patel - Profile Portrait 2",
    tagline: "Building scalable web solutions & REST APIs",
  },
];

export function ProfilePreviewModal({
  isOpen,
  onClose,
  initialIndex = 0,
}: ProfilePreviewModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(148);
  const [saved, setSaved] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Synchronize initial index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Handle Escape key to close & body scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev === 0 ? PHOTOS.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev === PHOTOS.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  const handleNext = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev === PHOTOS.length - 1 ? 0 : prev + 1));
    },
    []
  );

  const handlePrev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev === 0 ? PHOTOS.length - 1 : prev - 1));
    },
    []
  );

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (liked) {
      setLiked(false);
      setLikesCount((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikesCount((prev) => prev + 1);
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.origin);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  if (!isOpen) return null;

  const currentPhoto = PHOTOS[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Profile Picture Preview"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-md transition-all duration-200"
    >
      {/* Modal Dialog Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col w-full max-w-lg sm:max-w-xl overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950 text-slate-100 shadow-2xl transition-transform duration-200"
      >
        {/* Instagram Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 px-4 py-3 bg-slate-900/90 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            {/* Story-ring avatar */}
            <div className="relative p-[2px] rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-emerald-300">
              <div className="relative h-9 w-9 overflow-hidden rounded-full border border-slate-950">
                <Image
                  src="/images/pfp1.jpg"
                  alt={personalInfo.name}
                  fill
                  sizes="36px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold tracking-tight text-white">
                  smit.dev
                </span>
                <BadgeCheck size={16} className="text-emerald-400 shrink-0" />
                <span className="text-[11px] font-mono text-emerald-400/90 ml-1 rounded bg-emerald-500/10 px-1.5 py-0.2">
                  Developer
                </span>
              </div>
              <p className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                <span>{personalInfo.name}</span>
                <span>•</span>
                <span>{personalInfo.location}</span>
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close profile preview"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors cursor-pointer"
          >
            <X size={17} />
          </button>
        </div>

        {/* Image Display Area with Carousel */}
        <div className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden bg-black flex items-center justify-center">
          <Image
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            fill
            priority
            sizes="(max-width: 640px) 100vw, 576px"
            className="object-cover object-center transition-all duration-300 select-none"
          />


          {/* Carousel Indicator Pill */}
          <div className="absolute top-3 right-3 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-mono text-white/90 backdrop-blur-md border border-white/10">
            {currentIndex + 1} / {PHOTOS.length}
          </div>

          {/* Pagination Dots at bottom of image */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 backdrop-blur-md">
            {PHOTOS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to photo ${idx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx
                    ? "w-5 bg-emerald-400"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Instagram Action Icons */}
        <div className="p-4 space-y-3 bg-slate-950">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Like Button */}
              <button
                type="button"
                onClick={handleLike}
                aria-label="Like photo"
                className={`flex items-center gap-1.5 text-xs font-semibold transition-transform active:scale-125 cursor-pointer ${
                  liked ? "text-rose-500" : "text-slate-300 hover:text-white"
                }`}
              >
                <Heart
                  size={22}
                  className={`transition-colors ${
                    liked ? "fill-rose-500 text-rose-500" : ""
                  }`}
                />
              </button>

              {/* Message / Contact Button */}
              <a
                href="#contact"
                onClick={() => onClose()}
                aria-label="Send message"
                className="text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle size={21} />
              </a>

              {/* Share / Copy Link */}
              <button
                type="button"
                onClick={handleShare}
                aria-label="Share profile"
                className="text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                {copiedLink ? (
                  <Check size={20} className="text-emerald-400" />
                ) : (
                  <Share2 size={20} />
                )}
              </button>
            </div>

            {/* Bookmark / Save */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSaved(!saved);
              }}
              aria-label="Save post"
              className={`transition-colors cursor-pointer ${
                saved ? "text-emerald-400" : "text-slate-300 hover:text-white"
              }`}
            >
              <Bookmark
                size={21}
                className={saved ? "fill-emerald-400 text-emerald-400" : ""}
              />
            </button>
          </div>

          {/* Likes count & copied notification */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-200">
            <span>{likesCount} likes</span>
            {copiedLink && (
              <span className="text-[11px] font-mono text-emerald-400 animate-fade-in">
                Profile link copied!
              </span>
            )}
          </div>

          {/* Caption */}
          <div className="space-y-1 text-xs text-slate-300 leading-relaxed">
            <p>
              <span className="font-bold text-white mr-1.5">smit.dev</span>
              {personalInfo.introduction.slice(0, 160)}...
            </p>
            <p className="font-mono text-[11px] text-emerald-400">
              #backend #nodejs #restapi #developer 
            </p>
          </div>

          {/* Quick Action Footer buttons */}
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
            >
              <FileDown size={14} />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={() => onClose()}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition-colors"
            >
              <Sparkles size={13} />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePreviewModal;
