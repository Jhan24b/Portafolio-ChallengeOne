"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { User, GraduationCap, Briefcase, Mail } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Sidebar() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("about");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const sections = [
    { id: "about", icon: User, labelKey: "nav.about" },

    { id: "experience", icon: Briefcase, labelKey: "nav.projects" },
    { id: "formacion", icon: GraduationCap, labelKey: "nav.formation" }
    // { id: "contact", icon: Mail, labelKey: "nav.contact" }
  ];

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const viewportCenter = window.innerHeight / 2;

        let closest = sections[0].id;
        let minDiff = Infinity;

        sections.forEach(({ id }) => {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            const sectionMiddle = rect.top + rect.height / 2;
            const diff = Math.abs(sectionMiddle - viewportCenter);
            if (diff < minDiff) {
              minDiff = diff;
              closest = id;
            }
          }
        });

        setActiveSection(closest);
      }, 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed left-3 md:left-6 top-1/2 -translate-y-1/2 z-40 w-12 glass rounded-full py-3 px-1.5 shadow-2xl border border-white/20 dark:border-white/10 transition-all duration-300 flex flex-col items-center gap-2 font-sans">
      {sections.map((section) => {
        const Icon = section.icon;
        const isActive = activeSection === section.id;
        const isHovered = hoveredSection === section.id;
        return (
          <div
            key={section.id}
            className="relative flex items-center justify-center"
            onMouseEnter={() => setHoveredSection(section.id)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <Link
              href={`#${section.id}`}
              className={`group flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-primary/15 text-primary dark:bg-cerulean-blue-500/20 dark:text-cerulean-blue-400 shadow-sm"
                  : "text-muted-foreground hover:bg-astronaut-50/50 dark:hover:bg-astronaut-950/20 hover:text-astronaut-950 dark:hover:text-white"
              }`}
            >
              <Icon
                className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                  isActive ? "scale-105" : ""
                }`}
              />
            </Link>

            {isActive && (
              <div className="absolute -left-1.5 w-1 h-5 rounded-full bg-cerulean-blue-500 shadow-[0_0_6px_rgba(14,165,233,0.6)]"></div>
            )}

            <div className="hidden md:block absolute left-full ml-3 top-1/2 -translate-y-1/2 pointer-events-none z-50">
              <div
                className={`bg-astronaut-950 dark:bg-astronaut-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-xl border border-white/10 whitespace-nowrap transition-all duration-200 ${
                  isHovered
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-2"
                }`}
              >
                {t(section.labelKey)}
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
