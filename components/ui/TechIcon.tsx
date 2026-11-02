import React from "react";

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function TechIcon({ name, size = 18, className = "" }: TechIconProps) {
  const normalized = name.toLowerCase().trim();

  // JavaScript
  if (normalized.includes("javascript") || normalized === "js") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
      >
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M6.5 17.5c.5.8 1.4 1.3 2.5 1.3 1.5 0 2.5-.8 2.5-2.5v-6.5h-2.2v6.5c0 .6-.3.9-.8.9-.4 0-.8-.2-1-.6l-1 1zm8.3.1c.9.5 2 1 3.4 1 2.3 0 3.8-1.2 3.8-3.3 0-1.9-1.2-2.7-2.9-3.4-1.2-.5-1.7-.9-1.7-1.6 0-.6.5-1.1 1.4-1.1.9 0 1.6.3 2.1.8l1.2-1.3c-.8-.7-1.9-1.1-3.3-1.1-2.2 0-3.6 1.3-3.6 3.1 0 1.8 1.1 2.6 2.8 3.3 1.3.5 1.8.9 1.8 1.7 0 .7-.6 1.2-1.6 1.2-1.1 0-2-.5-2.7-1.2l-1.4 1.2z"
          fill="#000000"
        />
      </svg>
    );
  }

  // TypeScript
  if (normalized.includes("typescript") || normalized === "ts") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
      >
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          d="M5 8.5h6.5v2h-2.1v7H7.1v-7H5v-2zm8.5 7.7c.7.4 1.6.7 2.6.7 1.6 0 2.6-.8 2.6-2.1 0-1.2-.8-1.8-2-2.3-.9-.4-1.3-.7-1.3-1.2 0-.5.4-.8 1.1-.8.7 0 1.3.2 1.8.6l.8-1.4c-.7-.5-1.6-.8-2.6-.8-1.7 0-2.8.9-2.8 2.3 0 1.2.8 1.8 2 2.3.9.4 1.3.7 1.3 1.2 0 .5-.5.9-1.2.9-.8 0-1.6-.3-2.1-.8l-.8 1.3z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // Python
  if (normalized.includes("python")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className={`shrink-0 ${className}`}
      >
        <path
          d="M11.87 2c-5.07 0-4.75 2.19-4.75 2.19l.01 2.27h4.84v.69H5.16S2 6.78 2 11.87c0 5.08 2.76 4.9 2.76 4.9h1.65v-2.31s-.09-2.76 2.71-2.76h4.66s2.61.04 2.61-2.55V4.64S16.94 2 11.87 2zm-2.6 1.48a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92z"
          fill="#3776AB"
        />
        <path
          d="M12.13 22c5.07 0 4.75-2.19 4.75-2.19l-.01-2.27h-4.84v-.69h6.81S22 17.22 22 12.13c0-5.08-2.76-4.9-2.76-4.9h-1.65v2.31s.09 2.76-2.71 2.76H10.22s-2.61-.04-2.61 2.55v4.51S7.06 22 12.13 22zm2.6-1.48a.96.96 0 1 1 0-1.92.96.96 0 0 1 0 1.92z"
          fill="#FFD438"
        />
      </svg>
    );
  }

  // Java
  if (normalized.includes("java") && !normalized.includes("script")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
      >
        <path
          d="M8.8 17.2c-.2.1 2.5 1.1 5.9.1 1.7-.5 3.3-.3 3.3-.3s-1.3.8-3.4 1.1c-3.6.5-6.5-.4-5.8-.9z"
          fill="#E76F00"
        />
        <path
          d="M8.2 14.8c-.3.1 3.2 1.3 7.6.2 1.8-.4 2.4-.2 2.4-.2s-1 .6-2.6.8c-4.4.6-8-.3-7.4-.8z"
          fill="#5382A1"
        />
        <path
          d="M12.2 2.5c1.4 1.6-1.1 3.8-1.1 3.8s3.4-1.9 2.1-4c-1-1.6-2.8-2.3-1-2.3 2.4 0 5 3.2 2.6 6.5-1.9 2.7-4.4 3.7-4.4 5.9 0 0 .5-.9 1.8-1.5 1.4-.7 3.3-.9 3.3-2.6 0-1.8-1.5-2.8-1.5-2.8s1.6.4 2 1.9c.5 1.8-.6 3.4-2.2 4.3-2 1.2-2.9 2.2-2.9 3.7 0 0 .3-.9 1.6-1.5 2.1-1 4.5.3 4.5 2.4 0 2.5-3.3 3.5-6 3.5-3.9 0-6.1-1.6-4.5-4 1.5-2.2 3.6-2.6 4.3-4.5.9-2.3-.6-3.8-1-5.4-.5-1.9.4-4 2.4-5.4z"
          fill="#E76F00"
        />
        <path
          d="M18.8 18.5c-.8.5-3.5 1.1-6.8 1.1-3.6 0-6-.6-6.7-1.1-.3-.2.3-.5 1.4-.6 1.4-.1 2.2-.1 4.8.1 3.1.2 5.5.1 6.5-.2.5-.1.8.3.8.7z"
          fill="#5382A1"
        />
      </svg>
    );
  }

  // C Language
  if (normalized === "c") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 17.5c-4.14 0-7.5-3.36-7.5-7.5S7.86 4.5 12 4.5c2.14 0 4.07.89 5.45 2.33l-2.07 2.07C14.49 7.97 13.3 7.5 12 7.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5c1.3 0 2.49-.47 3.38-1.4l2.07 2.07C16.07 18.61 14.14 19.5 12 19.5z"
          fill="#00599C"
        />
      </svg>
    );
  }

  // HTML / HTML5
  if (normalized.includes("html")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className={`shrink-0 ${className}`}
      >
        <path d="M3 2l1.6 18.4L12 23l7.4-2.6L21 2H3z" fill="#E34F26" />
        <path d="M12 3.8v17.4l5.9-2.1L19.2 3.8H12z" fill="#EF652A" />
        <path
          d="M12 7.8H7.3l.3 3.4H12V7.8zm0 5.4H9.4l.2 2.6L12 16.5v-2.3l-1.3-.4-.1-1.3H12v-.9z"
          fill="#EBEBEB"
        />
        <path
          d="M12 7.8h4.7l-.4 5.4h-4.3v-.9h3.3l.2-2.5H12V7.8zm0 7.8v-.9l2.4-.7.2-2.4H12v-.9h3.6l-.4 4.5-3.2.9z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // CSS / CSS3
  if (normalized.includes("css") && !normalized.includes("tailwind")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className={`shrink-0 ${className}`}
      >
        <path d="M3 2l1.6 18.4L12 23l7.4-2.6L21 2H3z" fill="#1572B6" />
        <path d="M12 3.8v17.4l5.9-2.1L19.2 3.8H12z" fill="#33A9DC" />
        <path
          d="M12 7.8H7.3l.3 3.4H12V7.8zm0 5.4H9.4l.2 2.6L12 16.5v-2.3l-1.3-.4-.1-1.3H12v-.9z"
          fill="#EBEBEB"
        />
        <path
          d="M12 7.8h4.7l-.4 5.4h-4.3v-.9h3.3l.2-2.5H12V7.8zm0 7.8v-.9l2.4-.7.2-2.4H12v-.9h3.6l-.4 4.5-3.2.9z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // React.js / React
  if (normalized.includes("react")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
      >
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          transform="rotate(60 12 12)"
          stroke="#61DAFB"
          strokeWidth="1.5"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          transform="rotate(120 12 12)"
          stroke="#61DAFB"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      </svg>
    );
  }

  // Next.js
  if (normalized.includes("next")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
      >
        <circle cx="12" cy="12" r="11" fill="#000000" />
        <path
          d="M15.5 16.8L9.2 8.5H7.5v7h1.6V11l5.5 7.3c.3-.5.6-1 .9-1.5zm.9-2.3V8.5h-1.6v4.3l1.6 1.7z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes("tailwind")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
      >
        <path
          d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-1.3 2.1-1.8 3.5-1.5 1 .3 1.8 1.1 2.6 1.9 1.4 1.4 3 3 6.4 3 2.4 0 3.9-1.2 4.5-3.6-1 1.3-2.1 1.8-3.5 1.5-1-.3-1.8-1.1-2.6-1.9-1.4-1.4-3-3-6.4-3zm-6 6c-2.4 0-3.9 1.2-4.5 3.6 1-1.3 2.1-1.8 3.5-1.5 1 .3 1.8 1.1 2.6 1.9 1.4 1.4 3 3 6.4 3 2.4 0 3.9-1.2 4.5-3.6-1 1.3-2.1 1.8-3.5 1.5-1-.3-1.8-1.1-2.6-1.9-1.4-1.4-3-3-6.4-3z"
          fill="#38BDF8"
        />
      </svg>
    );
  }

  // Node.js
  if (normalized.includes("node")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
      >
        <path
          d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z"
          fill="#5FA04E"
          opacity="0.2"
        />
        <path
          d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z"
          stroke="#5FA04E"
          strokeWidth="1.8"
        />
        <path
          d="M12 7.5c1.8 0 3.2 1.2 3.2 2.8 0 1.2-.8 2.2-2 2.6l2.3 3.6h-2.2l-1.9-3h-.9v3H9v-9h3zm-.7 4.2c.8 0 1.5-.5 1.5-1.3s-.7-1.3-1.5-1.3h-1v2.6h1z"
          fill="#5FA04E"
        />
      </svg>
    );
  }

  // Express.js
  if (normalized.includes("express")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
      >
        <rect width="24" height="24" rx="5" fill="#18181B" />
        <text
          x="12"
          y="16"
          fontSize="11"
          fontWeight="bold"
          fontFamily="system-ui"
          textAnchor="middle"
          fill="#FFFFFF"
        >
          ex
        </text>
      </svg>
    );
  }

  // REST APIs
  if (normalized.includes("rest") || normalized.includes("api")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#10B981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`shrink-0 ${className}`}
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M7 8h2" />
        <path d="M7 12h4" />
        <circle cx="16" cy="10" r="1" fill="#10B981" />
      </svg>
    );
  }

  // WebSockets
  if (normalized.includes("socket")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
      >
        <circle cx="12" cy="12" r="10" fill="#010101" />
        <path
          d="M13 2.5L6.5 12.5H12L11 21.5L17.5 11.5H12L13 2.5Z"
          fill="#E535AB"
        />
      </svg>
    );
  }

  // JWT Authentication
  if (normalized.includes("jwt") || normalized.includes("auth")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
      >
        <circle cx="12" cy="12" r="10" stroke="#FB015B" strokeWidth="2" />
        <path
          d="M12 7v5l3 3"
          stroke="#D63AFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="3" fill="#00B9F1" />
      </svg>
    );
  }

  // SQL
  if (normalized === "sql") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00758F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`shrink-0 ${className}`}
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  }

  // MongoDB
  if (normalized.includes("mongo")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
      >
        <path
          d="M12 1.5s-6 6.8-6 11.7c0 4.8 3.5 8.8 6 9.3 2.5-.5 6-4.5 6-9.3 0-4.9-6-11.7-6-11.7z"
          fill="#47A248"
        />
        <path
          d="M12 2.5v19.7c.3 0 .7-.1 1-.2 2.3-.6 5-4.2 5-8.8 0-4.5-5.2-10.3-6-10.7z"
          fill="#499D4A"
        />
        <path
          d="M12 22.5c-.3 0-.6-.1-.9-.2-2.3-.6-5.1-4.2-5.1-8.8 0-4.5 5.2-10.3 6-10.7v19.7z"
          fill="#3FA037"
        />
        <path d="M12 18v4.5" stroke="#FFFFFF" strokeWidth="1" />
      </svg>
    );
  }

  // MySQL
  if (normalized.includes("mysql")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
      >
        <rect width="24" height="24" rx="4" fill="#00758F" />
        <path
          d="M5 16.5c2-2.5 5-4 8-4s5 2 6 3.5M7 9c1-1 2.5-1.5 4-1.5s3 .5 4 1.5"
          stroke="#F29111"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="9" cy="11" r="1.2" fill="#FFFFFF" />
      </svg>
    );
  }

  // Redis
  if (normalized.includes("redis")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
      >
        <path
          d="M21 9.5l-9 4.5-9-4.5 9-4.5 9 4.5z"
          fill="#DC382D"
        />
        <path
          d="M3 13l9 4.5 9-4.5"
          stroke="#DC382D"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M3 16.5l9 4.5 9-4.5"
          stroke="#A8201A"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // PostgreSQL
  if (normalized.includes("postgres")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
      >
        <rect width="24" height="24" rx="4" fill="#336791" />
        <path
          d="M12 6c-3 0-5 2-5 5 0 2.5 1.5 4 3 4.5v3.5l3-2v-1.5c1.5-.5 3-2 3-4.5 0-3-2-5-4-5z"
          fill="#FFFFFF"
        />
        <circle cx="10.5" cy="10" r="1" fill="#336791" />
      </svg>
    );
  }

  // Git
  if (normalized === "git") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
      >
        <path
          d="M21.6 10.9L13.1 2.4a1.8 1.8 0 0 0-2.5 0L8.8 4.2l3.2 3.2a2.1 2.1 0 0 1 2.7 2.7l3.1 3.1a2.1 2.1 0 1 1-1.3 1.2l-2.9-2.9v4.3a2.1 2.1 0 1 1-1.8 0V11a2.1 2.1 0 0 1-1.2-2.7L7.4 5.6 2.4 10.6a1.8 1.8 0 0 0 0 2.5l8.5 8.5c.7.7 1.8.7 2.5 0l8.2-8.2a1.8 1.8 0 0 0 0-2.5z"
          fill="#F05032"
        />
      </svg>
    );
  }

  // GitHub
  if (normalized.includes("github")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
      >
        <circle cx="12" cy="12" r="11" fill="#24292E" />
        <path
          d="M12 5C8.13 5 5 8.13 5 12c0 3.09 2.01 5.71 4.79 6.64.35.06.48-.15.48-.34v-1.33c-1.95.42-2.36-.83-2.36-.83-.32-.81-.78-1.02-.78-1.02-.64-.44.05-.43.05-.43.7.05 1.07.72 1.07.72.63 1.07 1.64.76 2.04.58.06-.45.24-.76.44-.94-1.55-.18-3.18-.78-3.18-3.45 0-.76.27-1.38.72-1.87-.07-.18-.31-.89.07-1.85 0 0 .58-.19 1.91.71A6.65 6.65 0 0 1 12 7.7c.59.01 1.18.08 1.74.24 1.33-.9 1.91-.71 1.91-.71.38.96.14 1.67.07 1.85.45.49.72 1.11.72 1.87 0 2.68-1.63 3.27-3.19 3.44.25.22.47.64.47 1.29v1.92c0 .19.13.41.48.34A7.003 7.003 0 0 0 19 12c0-3.87-3.13-7-7-7z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // Docker
  if (normalized.includes("docker")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
      >
        <path
          d="M22.5 10.5c-.3-.2-1.7-.8-3.5-.1-.2-.8-.7-1.6-1.5-2.2l-.7.6c.6.5 1 1.2 1.1 1.9-1.2.6-2.5.6-3.4.4-.1-.5-.2-1-.4-1.5H3.5C2.1 12 2 15 5 17.5c3.2 2.7 8.5 2.5 12.5 0 3-1.9 4.5-4.5 5-7zM8.5 6.5h2v2h-2v-2zm3 0h2v2h-2v-2zm-6 3h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2z"
          fill="#2496ED"
        />
      </svg>
    );
  }

  // Kubernetes
  if (normalized.includes("kubernetes") || normalized === "k8s") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
      >
        <path
          d="M12 2l8 4.6v9.2L12 22l-8-4.6V6.6L12 2z"
          fill="#326CE5"
        />
        <circle cx="12" cy="12" r="4.5" fill="#FFFFFF" />
        <path
          d="M12 9v6M9 12h6M9.5 9.5l5 5M14.5 9.5l-5 5"
          stroke="#326CE5"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  // Postman
  if (normalized.includes("postman")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`shrink-0 ${className}`}
      >
        <circle cx="12" cy="12" r="11" fill="#FF6C37" />
        <path
          d="M7 11.5l10-4-4 10-1.8-4.2L7 11.5z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // Data Structures & Algorithms
  if (
    normalized.includes("structure") ||
    normalized.includes("algorithm") ||
    normalized.includes("dsa")
  ) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`shrink-0 ${className}`}
      >
        <circle cx="12" cy="5" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="18" r="3" />
        <line x1="10" y1="7.5" x2="7.5" y2="15.5" />
        <line x1="14" y1="7.5" x2="16.5" y2="15.5" />
      </svg>
    );
  }

  // Object-Oriented Programming
  if (normalized.includes("object") || normalized.includes("oop")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#EC4899"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`shrink-0 ${className}`}
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    );
  }

  // Database Management Systems / DBMS
  if (normalized.includes("database management") || normalized.includes("dbms")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#06B6D4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`shrink-0 ${className}`}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    );
  }

  // Fallback generic code chip
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#10B981"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${className}`}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export default TechIcon;

