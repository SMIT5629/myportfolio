import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://smitpatel.dev"),
  title: "Smit Patel | Backend Developer",
  description:
    "Portfolio of Smit Patel — Aspiring Backend Developer pursuing Information Technology. Specializing in Node.js, Express, REST APIs, Database Architecture, and System Design.",
  keywords: [
    "Smit Patel",
    "Backend Developer",
    "Node.js",
    "Express.js",
    "REST APIs",
    "MongoDB",
    "Developer Portfolio",
  ],
  authors: [{ name: "Smit Patel", url: "https://github.com/SMIT5629" }],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Smit Patel | Backend Developer",
    description:
      "Aspiring Backend Developer building scalable web applications, REST APIs, and distributed systems.",
    type: "website",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-(--background) text-(--foreground) antialiased transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
