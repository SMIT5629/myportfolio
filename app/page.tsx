"use client"
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Project from "@/components/sections/Project";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import PortfolioChat from "@/components/ui/PortfolioChat";
import { FallingLeaves } from "falling-leaves/react"


export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col selection:bg-emerald-500 selection:text-white">
      <Navbar />

      <main className="flex-1 w-full">
        <FallingLeaves
          fullScreen={true}
          shapes={["maple"]}
           colors={["#15803d", "#16a34a", "#22c55e", "#4ade80"]}
          count={15} />
        <Hero />
        <About />
        <Skills />
        <Project />
        <Education />
        <Contact />
      </main>

      <Footer />
      <PortfolioChat />
    </div>
  );
}
