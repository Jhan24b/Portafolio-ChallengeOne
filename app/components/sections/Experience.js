"use client";

import { useView } from "@/lib/ViewContext";
import { CONFIG } from "@/lib/config";
import CardExperience from "./CardExperience";
import CardExperienceDesktop from "./CardExperienceDesktop";
import { useState } from "react";

function renderProjects(projects) {
  return projects.map((proyecto, idx) => {
    const type = idx % 2 === 0 ? "card" : "cardinverted";
    return <CardExperience key={idx} card={{ type, ...proyecto }} />;
  });
}

function renderProjectsDesktop(projects) {
  return projects.map((proyecto, idx) => {
    const type = idx % 2 === 0 ? "cardD" : "cardinvertedD";
    return <CardExperienceDesktop key={idx} card={{ type, ...proyecto }} />;
  });
}

export default function Experience() {
  const { view } = useView();
  const data = CONFIG[view];
  const [filter, setFilter] = useState("");

  const filteredProjects =
    filter === ""
      ? data.projects
      : data.projects.filter((proy) => proy.role === filter);

  return (
    <section id="experience" className="relative">
      <div className="max-w-6xl mx-auto text-center my-16 md:my-4 flex flex-col gap-10 pb-4">
        <h2 className="text-primary font-bold text-4xl mb-4">
          Experiencia y Proyectos
        </h2>
        
        {data.desktopProjects.length > 0 && (
          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h3 className="text-2xl font-semibold text-muted-foreground italic">
              Aplicaciones de Escritorio
            </h3>
            {renderProjectsDesktop(data.desktopProjects)}
          </div>
        )}

        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <h3 className="text-2xl font-semibold text-muted-foreground italic">
            Proyectos Destacados
          </h3>
          
          {view === 'softwareEngineer' && (
            <div className="flex justify-center gap-4 mb-4">
              <button 
                onClick={() => setFilter("")}
                className={`px-4 py-1 rounded-full border transition-all ${filter === "" ? "bg-primary text-white" : "glass text-primary hover:bg-primary/10"}`}
              >
                Todos
              </button>
              <button 
                onClick={() => setFilter("Front End")}
                className={`px-4 py-1 rounded-full border transition-all ${filter === "Front End" ? "bg-primary text-white" : "glass text-primary hover:bg-primary/10"}`}
              >
                Front End
              </button>
              <button 
                onClick={() => setFilter("Full Stack")}
                className={`px-4 py-1 rounded-full border transition-all ${filter === "Full Stack" ? "bg-primary text-white" : "glass text-primary hover:bg-primary/10"}`}
              >
                Full Stack
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 gap-12">
            {renderProjects(filteredProjects)}
          </div>
        </div>
      </div>
    </section>
  );
}
