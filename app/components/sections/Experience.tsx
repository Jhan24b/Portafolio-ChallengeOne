"use client";

import { useView } from "@/lib/ViewContext";
import { useLanguage } from "@/lib/LanguageContext";
import { CONFIG } from "@/lib/config";
import CardExperience from "./CardExperience";
import CardExperienceDesktop from "./CardExperienceDesktop";
import { useState } from "react";
import { Project } from "@/types";

import CardExperienceData from "./CardExperienceData";

function renderProjects(projects: Project[], view: string) {
  return projects.map((proyecto, idx) => {
    const type = idx % 2 === 0 ? "card" : "cardinverted";
    if (view === 'dataEngineer') {
      return <CardExperienceData key={idx} card={{ type, ...proyecto }} />;
    }
    return <CardExperience key={idx} card={{ type, ...proyecto }} />;
  });
}

function renderProjectsDesktop(projects: Project[], view: string) {
  return projects.map((proyecto, idx) => {
    const type = idx % 2 === 0 ? "cardD" : "cardinvertedD";
    if (view === 'dataEngineer') {
      return <CardExperienceData key={idx} card={{ type, ...proyecto }} />;
    }
    return <CardExperienceDesktop key={idx} card={{ type, ...proyecto }} />;
  });
}

export default function Experience() {
  const { view } = useView();
  const { language, t } = useLanguage();
  const data = CONFIG[language][view];
  const [filter, setFilter] = useState("");

  const filteredProjects =
    filter === ""
      ? data.projects
      : data.projects.filter((proy) => proy.role === filter);

  return (
    <section id="experience" className="relative">
      <div className="max-w-6xl mx-auto text-center my-16 md:my-24 flex flex-col gap-10 pb-4">
        <h2 className="text-foreground font-black text-5xl md:text-7xl mb-4 tracking-tighter uppercase leading-none">
          {t("experience.title")}
        </h2>
        
        {data.desktopProjects.length > 0 && (
          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h3 className="text-2xl font-semibold text-muted-foreground italic">
              {t("experience.desktop")}
            </h3>
            {renderProjectsDesktop(data.desktopProjects, view)}
          </div>
        )}

        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <h3 className="text-2xl font-semibold text-muted-foreground italic">
            {t("experience.featured")}
          </h3>
          
          {view === 'softwareEngineer' && (
            <div className="flex justify-center gap-4 mb-4">
              <button 
                onClick={() => setFilter("")}
                className={`px-4 py-1 rounded-full border transition-all ${filter === "" ? "bg-primary text-white" : "glass text-primary hover:bg-primary/10"}`}
              >
                {t("experience.filter.all")}
              </button>
              <button 
                onClick={() => setFilter("Front End")}
                className={`px-4 py-1 rounded-full border transition-all ${filter === "Front End" ? "bg-primary text-white" : "glass text-primary hover:bg-primary/10"}`}
              >
                {t("experience.filter.frontend")}
              </button>
              <button 
                onClick={() => setFilter("Full Stack")}
                className={`px-4 py-1 rounded-full border transition-all ${filter === "Full Stack" ? "bg-primary text-white" : "glass text-primary hover:bg-primary/10"}`}
              >
                {t("experience.filter.fullstack")}
              </button>
            </div>
          )}

          <div className="flex flex-col gap-16">
            {renderProjects(filteredProjects, view)}
          </div>
        </div>
      </div>
    </section>
  );
}
