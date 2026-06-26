"use client";

import { useView } from "@/lib/ViewContext";
import { useLanguage } from "@/lib/LanguageContext";
import { CONFIG } from "@/lib/config";
import Image from "next/image";
import { Sparkles, Cpu, Code2, Database, Brain, Rocket } from "lucide-react";

export default function AboutMe() {
  const { view } = useView();
  const { language, t } = useLanguage();
  const profile = CONFIG[language][view];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cerulean-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-astronaut-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-astronaut-500/20 text-cerulean-blue-500 text-sm font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" />
            <span>{t("aboutme.title")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-astronaut-950 dark:text-white uppercase tracking-tighter">
            {profile.name}
          </h2>
          <p className="text-xl md:text-2xl text-astronaut-600 dark:text-astronaut-300 font-light mt-4 max-w-2xl mx-auto">
            {profile.title}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio Section */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cerulean-blue-500 to-astronaut-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative glass p-8 rounded-3xl border border-astronaut-500/10 dark:border-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  {view === 'softwareEngineer' ? <Code2 className="w-32 h-32 text-cerulean-blue-500" /> : view === 'aiMLEngineer' ? <Brain className="w-32 h-32 text-cerulean-blue-500" /> : <Database className="w-32 h-32 text-cerulean-blue-500" />}
                </div>
                
                <h3 className="text-2xl font-bold text-astronaut-950 dark:text-white mb-6 relative z-10">
                  {t("nav.about")}
                </h3>
                <p className="text-astronaut-700 dark:text-astronaut-300 leading-relaxed text-lg relative z-10">
                  {profile.bio}
                </p>

                <div className="mt-8 flex gap-4 relative z-10">
                  <div className="px-4 py-2 rounded-lg bg-astronaut-950/5 dark:bg-white/5 border border-astronaut-950/10 dark:border-white/10 flex flex-col items-center justify-center min-w-[100px]">
                    <span className="text-3xl font-black text-cerulean-blue-500">
                      {view === 'softwareEngineer' ? '3+' : view === 'aiMLEngineer' ? '2+' : '2+'}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-astronaut-500 dark:text-astronaut-400">Years Exp.</span>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-astronaut-950/5 dark:bg-white/5 border border-astronaut-950/10 dark:border-white/10 flex flex-col items-center justify-center min-w-[100px]">
                    <span className="text-3xl font-black text-cerulean-blue-500">
                      {profile.projects.length + profile.desktopProjects.length}+
                    </span>
                    <span className="text-xs uppercase tracking-wider text-astronaut-500 dark:text-astronaut-400">Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-astronaut-500/20 to-transparent"></div>
              <h3 className="text-xl font-black uppercase tracking-[0.2em] text-astronaut-400 text-center">
                {t("skills.title")}
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-astronaut-500/20 to-transparent"></div>
            </div>

            <div className="grid gap-8">
              {profile.skills?.map((category, idx) => (
                <div key={idx} className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${idx * 100}ms` }}>
                  <h4 className="text-sm font-bold text-astronaut-500 dark:text-astronaut-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cerulean-blue-500"></div>
                    {category.category}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {category.items.map((skill, sIdx) => (
                      <div 
                        key={sIdx} 
                        className="group flex flex-col items-center text-center p-3 rounded-xl bg-white/50 dark:bg-astronaut-950/30 border border-astronaut-200 dark:border-astronaut-800 hover:border-cerulean-blue-500/50 hover:bg-cerulean-blue-500/5 transition-all duration-300"
                      >
                        <div className="w-10 h-10 mb-2 flex items-center justify-center text-astronaut-700 dark:text-astronaut-300 group-hover:text-cerulean-blue-500 group-hover:scale-110 transition-all duration-300">
                          {skill.icon ? (
                            <skill.icon className="w-8 h-8" />
                          ) : (
                            <Rocket className="w-6 h-6 opacity-50" />
                          )}
                        </div>
                        <span className="text-xs font-bold text-astronaut-800 dark:text-astronaut-200 group-hover:text-cerulean-blue-600 dark:group-hover:text-cerulean-blue-400">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-[10px] text-astronaut-400 mt-0.5 hidden group-hover:block animate-in zoom-in duration-200">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
