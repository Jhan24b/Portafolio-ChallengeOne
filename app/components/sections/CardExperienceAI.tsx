"use client";

import { useState } from "react";
import Image from "next/image";
import Github from "../icons/Github";
import Link from "next/link";
import { Project } from "@/types";
import {
  Brain,
  Cpu,
  Activity,
  Sparkles,
  Layers,
  ExternalLink
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

interface CardExperienceAIProps {
  card: Project & { type: string };
}

export default function CardExperienceAI({ card }: CardExperienceAIProps) {
  const { t } = useLanguage();
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [hasImageError, setHasImageError] = useState(false);

  const {
    title,
    tech,
    img,
    Arquitectura,
    description,
    caracteristicas,
    subtitle,
    type,
    urlProduction,
    urlRepository
  } = card;

  const isReversed = type === "cardinverted" || type === "cardinvertedD";

  return (
    <div className="group relative w-full max-w-5xl mx-auto mb-16 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle,#0ea5e9_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-[0.04] dark:opacity-[0.06] rounded-3xl -z-10"></div>

      <div className="relative glass border border-astronaut-500/20 dark:border-cerulean-blue-500/20 rounded-3xl overflow-hidden hover:border-cerulean-blue-500/40 transition-all duration-500 hover:shadow-[0_0_60px_-12px_rgba(14,165,233,0.2)] dark:hover:shadow-[0_0_60px_-12px_rgba(14,165,233,0.25)] bg-white/40 dark:bg-white/5">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cerulean-blue-500 to-transparent"></div>

        <div
          className={`flex flex-col lg:flex-row gap-8 p-6 lg:p-10 ${isReversed ? "lg:flex-row-reverse" : ""}`}
        >
          <div className="w-full lg:w-2/5 flex flex-col gap-6">
            <div className="relative group/img overflow-hidden rounded-2xl border border-astronaut-900/10 dark:border-white/10 shadow-2xl aspect-[4/3]">
              {(isImageLoading || hasImageError) && (
                <div className="absolute inset-0 bg-gradient-to-br from-astronaut-200/50 to-astronaut-300/50 dark:from-astronaut-800/50 dark:to-astronaut-900/50 animate-pulse z-10"></div>
              )}
              {!hasImageError && (
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover group-hover/img:scale-105 transition-transform duration-700"
                  onLoadingComplete={() => setIsImageLoading(false)}
                  onError={() => {
                    setIsImageLoading(false);
                    setHasImageError(true);
                  }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-astronaut-950/90 via-transparent to-transparent"></div>

              <div className="absolute top-4 left-4">
                <div className="px-3 py-1.5 bg-cerulean-blue-500/20 backdrop-blur-xl border border-cerulean-blue-400/30 rounded-full flex items-center gap-2">
                  <Brain className="w-3.5 h-3.5 text-cerulean-blue-400" />
                  <span className="text-[10px] font-black text-cerulean-blue-300 uppercase tracking-widest">
                    AI Model
                  </span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-cerulean-blue-400 font-bold">
                  Neural Node
                </span>
                <span className="text-xl font-bold text-white tracking-tight">
                  {subtitle}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-astronaut-500/5 dark:bg-white/5 backdrop-blur-sm border border-astronaut-500/10 dark:border-white/10 p-3 rounded-xl flex flex-col items-center gap-1 hover:bg-astronaut-500/10 dark:hover:bg-white/10 transition-colors">
                <Activity className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-[10px] text-astronaut-600 dark:text-muted-foreground font-bold uppercase tracking-tighter">
                  Accuracy
                </span>
                <span className="text-xs font-black text-astronaut-900 dark:text-white">
                  94%
                </span>
              </div>
              <div className="bg-astronaut-500/5 dark:bg-white/5 backdrop-blur-sm border border-astronaut-500/10 dark:border-white/10 p-3 rounded-xl flex flex-col items-center gap-1 hover:bg-astronaut-500/10 dark:hover:bg-white/10 transition-colors">
                <Cpu className="w-4 h-4 text-astronaut-500 dark:text-cerulean-blue-400" />
                <span className="text-[10px] text-astronaut-600 dark:text-muted-foreground font-bold uppercase tracking-tighter">
                  Inference
                </span>
                <span className="text-xs font-black text-astronaut-900 dark:text-white">
                  &lt;50ms
                </span>
              </div>
              <div className="bg-astronaut-500/5 dark:bg-white/5 backdrop-blur-sm border border-astronaut-500/10 dark:border-white/10 p-3 rounded-xl flex flex-col items-center gap-1 hover:bg-astronaut-500/10 dark:hover:bg-white/10 transition-colors">
                <Sparkles className="w-4 h-4 text-cerulean-blue-600 dark:text-primary" />
                <span className="text-[10px] text-astronaut-600 dark:text-muted-foreground font-bold uppercase tracking-tighter">
                  F1-Score
                </span>
                <span className="text-xs font-black text-astronaut-900 dark:text-white">
                  0.92
                </span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cerulean-blue-500/10 dark:bg-cerulean-blue-500/10 border border-cerulean-blue-500/20 dark:border-cerulean-blue-500/20 flex items-center justify-center shadow-inner">
                  <Brain className="w-6 h-6 text-cerulean-blue-600 dark:text-cerulean-blue-500" />
                </div>
                <div>
                  <h4 className="text-3xl font-black text-astronaut-950 dark:text-foreground tracking-tight uppercase leading-none">
                    {title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-bold text-astronaut-500 dark:text-cerulean-blue-500/70 uppercase tracking-widest italic">
                      Architecture:
                    </span>
                    <span className="text-xs font-black text-astronaut-700 dark:text-muted-foreground">
                      {Arquitectura}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-astronaut-800 dark:text-muted-foreground text-base leading-relaxed mb-8 border-l-4 border-cerulean-blue-500/30 pl-4 py-1 font-medium">
                {description}
              </p>

              <div className="mb-8">
                <span className="text-[12px] font-black text-astronaut-500 dark:text-muted-foreground uppercase tracking-[0.3em] mb-4 block">
                  {t("card.tech_ecosystem")}
                </span>
                <div className="flex flex-wrap gap-4 justify-center">
                  {tech.map((Tecnologia, idx) => (
                    <div key={idx} className="relative group/tech">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cerulean-blue-600 to-astronaut-600 rounded-xl blur opacity-0 group-hover/tech:opacity-20 transition duration-500"></div>
                      <div className="relative p-3 bg-astronaut-500/5 dark:bg-white/5 border border-astronaut-500/10 dark:border-white/10 rounded-xl hover:border-cerulean-blue-500/30 transition-all flex items-center justify-center shadow-sm">
                        {typeof Tecnologia !== "string" ? (
                          <Tecnologia className="w-6 h-6 text-astronaut-900 dark:text-foreground" />
                        ) : (
                          <span className="text-astronaut-900 dark:text-white font-bold">
                            {Tecnologia}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-astronaut-500/10 dark:border-white/5">
              <div className="flex justify-center gap-y-3 gap-x-12 mx-12">
                {caracteristicas?.map((caracteristica, idx) => (
                  <div key={idx} className="flex items-center gap-3 group/feat">
                    <div className="w-2 h-2 rounded-full bg-cerulean-blue-500 shadow-[0_0_8px_rgba(14,165,233,0.6)] dark:shadow-[0_0_8px_rgba(14,165,233,0.8)] group-hover/feat:scale-125 transition-transform"></div>
                    <span className="text-sm font-bold text-astronaut-900 dark:text-foreground/80">
                      {caracteristica}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-8">
              {urlProduction && (
                <Link
                  href={urlProduction}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center gap-3 bg-astronaut-950 dark:bg-white text-white dark:text-astronaut-950 px-8 py-3.5 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-xl shadow-astronaut-900/20 dark:shadow-white/5"
                >
                  <span>{t("card.launch_demo")}</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              )}

              {urlRepository && (
                <Link
                  href={urlRepository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-black text-astronaut-600 dark:text-astronaut-400 hover:text-cerulean-blue-600 dark:hover:text-cerulean-blue-400 transition-colors uppercase text-xs tracking-widest group/repo"
                >
                  <Github className="w-5 h-5 group-hover/repo:rotate-12 transition-transform" />
                  <span className="border-b-2 border-transparent group-hover:border-current">
                    {t("card.source_code")}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
