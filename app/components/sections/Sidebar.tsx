"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { User, GraduationCap, Briefcase, Mail } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Sidebar() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("about");

  const sections = [
    { id: "about", icon: User, labelKey: "nav.about" },
    { id: "formacion", icon: GraduationCap, labelKey: "nav.formation" },
    { id: "experience", icon: Briefcase, labelKey: "nav.projects" },
    { id: "contact", icon: Mail, labelKey: "nav.contact" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Detect active section in the central area of screen
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <nav className="fixed left-3 md:left-6 top-1/2 -translate-y-1/2 z-40 w-12 md:w-56 glass rounded-full md:rounded-[2rem] py-4 md:py-6 px-1.5 md:px-3 shadow-2xl border border-white/20 dark:border-white/10 transition-all duration-300 flex flex-col gap-2 font-sans">
      {sections.map((section) => {
        const Icon = section.icon;
        const isActive = activeSection === section.id;
        return (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className={`group flex items-center justify-center md:justify-start gap-3.5 p-3 rounded-full md:rounded-xl transition-all duration-300 relative ${
              isActive
                ? "bg-primary/15 text-primary dark:bg-cerulean-blue-500/20 dark:text-cerulean-blue-400 font-bold shadow-sm"
                : "text-muted-foreground hover:bg-astronaut-50/50 dark:hover:bg-astronaut-950/20 hover:text-astronaut-950 dark:hover:text-white"
            }`}
          >
            <Icon 
              className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                isActive ? "scale-105" : ""
              }`} 
            />
            
            <span className="hidden md:block text-xs uppercase tracking-widest transition-all duration-300">
              {t(section.labelKey)}
            </span>
            
            {/* Tooltip for mobile view */}
            <span className="md:hidden absolute left-14 bg-astronaut-950 dark:bg-astronaut-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-xl whitespace-nowrap z-50 border border-white/10">
              {t(section.labelKey)}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
