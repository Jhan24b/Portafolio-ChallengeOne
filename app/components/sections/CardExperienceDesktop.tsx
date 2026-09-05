"use client";

import { useState } from "react";
import Image from "next/image";
import Github from "../icons/Github";
import Link from "next/link";
import { Project } from "@/types";
import {
  Boxes,
  Box,
  Cpu,
  ExternalLink,
  GitBranch,
  Terminal
} from "lucide-react";

interface CardExperienceDesktopProps {
  card: Project & { type: string };
}

export default function CardExperienceDesktop({
  card
}: CardExperienceDesktopProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [hasImageError, setHasImageError] = useState(false);

  const {
    title,
    tech,
    img,
    Arquitectura,
    description,
    status,
    type,
    caracteristicas,
    urlProduction,
    urlRepository
  } = card;

  const isReversed = type === "cardinvertedD";

  return (
    <div
      className={`group relative w-full glass rounded-[3rem] p-4 mb-24 transition-all duration-500 border border-astronaut-500/10 dark:border-white/5 hover:border-cerulean-blue-500/30 bg-white/40 dark:bg-astronaut-900/10 shadow-xl overflow-hidden`}
    >
      {/* Background Blueprint Grain */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-astronaut-500)_0.5px,transparent_0.5px)] bg_size_[24px_24px] opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>

      <div
        className={`relative flex flex-col lg:flex-row items-center gap-12 p-6 lg:p-10 ${isReversed ? "lg:flex-row-reverse" : ""}`}
      >
        {/* Visual Column */}
        <div className="w-full lg:w-[45%] flex flex-col gap-6">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-astronaut-900/10 dark:border-white/10 shadow-2xl aspect-4/3 group-hover:shadow-astronaut-500/10 transition-all duration-700">
            {(isImageLoading || hasImageError) && (
              <div className="absolute inset-0 bg-linear-to from-astronaut-200/50 to-astronaut-300/50 dark:from-astronaut-800/50 dark:to-astronaut-900/50 animate-pulse z-10"></div>
            )}
            {!hasImageError && (
              <Image
                src={img}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                onLoadingComplete={() => setIsImageLoading(false)}
                onError={() => {
                  setIsImageLoading(false);
                  setHasImageError(true);
                }}
              />
            )}
            {/* Architectural Overlay */}
            <div className="absolute inset-0 bg-linear-to from-astronaut-950/90 via-transparent to-transparent"></div>

            <div className="absolute top-6 left-6 flex items-center gap-2">
              <div className="px-4 py-1.5 bg-astronaut-950/90 backdrop-blur-xl border border-white/20 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-black text-white uppercase tracking-widest">
                  {status}
                </span>
              </div>
            </div>

            <div className="absolute bottom-8 left-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                  <Boxes className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-cerulean-blue-400 uppercase tracking-widest">
                    Structural Node
                  </span>
                  <span className="text-xl font-black text-white tracking-tighter uppercase">
                    {Arquitectura}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-astronaut-500/5 dark:bg-white/5 rounded-3xl border border-astronaut-500/10 dark:border-white/10 flex items-center gap-3">
              <Cpu className="w-5 h-5 text-astronaut-600 dark:text-astronaut-400" />
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-astronaut-500 dark:text-muted-foreground uppercase tracking-widest leading-none mb-1">
                  Compute
                </span>
                <span className="text-xs font-black text-astronaut-900 dark:text-white uppercase tracking-tight">
                  Optimized
                </span>
              </div>
            </div>
            <div className="p-4 bg-astronaut-500/5 dark:bg-white/5 rounded-3xl border border-astronaut-500/10 dark:border-white/10 flex items-center gap-3">
              <GitBranch className="w-5 h-5 text-cerulean-blue-600 dark:text-cerulean-blue-400" />
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-astronaut-500 dark:text-muted-foreground uppercase tracking-widest leading-none mb-1">
                  Versioning
                </span>
                <span className="text-xs font-black text-astronaut-900 dark:text-white uppercase tracking-tight">
                  Main Stack
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Detail Column */}
        <div className="w-full lg:w-[55%] flex flex-col items-start px-2">
          <div className="flex items-center gap-3 mb-6 group/title">
            <div className="w-12 h-12 rounded-2xl bg-astronaut-950 dark:bg-white flex items-center justify-center shadow-lg group-hover/title:rotate-6 transition-transform">
              <Terminal className="w-6 h-6 text-white dark:text-astronaut-950" />
            </div>
            <div>
              <h4 className="text-5xl font-black text-astronaut-950 dark:text-white tracking-tighter uppercase leading-[0.9]">
                {title}
              </h4>
              <div className="h-1 w-12 bg-cerulean-blue-500 mt-2 rounded-full"></div>
            </div>
          </div>

          <p className="text-astronaut-800 dark:text-muted-foreground text-xl leading-relaxed font-medium mb-10 border-l-4 border-astronaut-500/20 pl-8 py-2 italic">
            {description}
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-12">
            <div>
              <span className="text-[10px] font-black text-astronaut-500 dark:text-muted-foreground uppercase tracking-[0.3em] mb-4 block">
                Engineered Tech
              </span>
              <div className="flex flex-wrap gap-3">
                {tech.map((Tecnologia, idx) => (
                  <div
                    key={idx}
                    className="p-3 glass rounded-2xl border border-astronaut-500/10 dark:border-white/10 hover:bg-astronaut-500/10 dark:hover:bg-white/10 transition-all hover:-translate-y-1 flex items-center justify-center shadow-sm"
                  >
                    {typeof Tecnologia !== "string" ? (
                      <Tecnologia className="w-7 h-7 text-astronaut-900 dark:text-white" />
                    ) : (
                      <span className="text-xs font-black text-astronaut-900 dark:text-white">
                        {Tecnologia}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-black text-astronaut-500 dark:text-muted-foreground uppercase tracking-[0.3em] mb-4 block">
                Key Innovations
              </span>
              <div className="space-y-3">
                {caracteristicas?.map((caracteristica, idx) => (
                  <div key={idx} className="flex items-center gap-3 group/feat">
                    <Box className="w-4 h-4 text-cerulean-blue-500 group-hover/feat:scale-110 transition-transform" />
                    <span className="text-sm font-black text-astronaut-900 dark:text-white/80 uppercase tracking-tighter">
                      {caracteristica}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full pt-8 border-t border-astronaut-500/10 dark:border-white/5 flex flex-wrap items-center gap-8">
            {urlProduction && (
              <Link
                href={urlProduction}
                target="_blank"
                className="flex items-center gap-4 bg-astronaut-950 dark:bg-white text-white dark:text-astronaut-950 px-10 py-4 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:scale-105 transition-all shadow-xl shadow-astronaut-900/20 dark:shadow-white/5 group/demo"
              >
                <span>Enterprise Demo</span>
                <ExternalLink className="w-4 h-4 group-hover/demo:translate-x-1 group-hover/demo:-translate-y-1 transition-transform" />
              </Link>
            )}
            {urlRepository && (
              <Link
                href={urlRepository}
                target="_blank"
                className="flex items-center gap-3 font-black text-astronaut-600 dark:text-astronaut-400 hover:text-cerulean-blue-600 dark:hover:text-cerulean-blue-400 transition-all uppercase text-xs tracking-widest group/git"
              >
                <Github className="w-6 h-6 group-hover/git:rotate-12 transition-transform" />
                <span className="border-b-2 border-transparent group-hover:border-current">
                  Repository Node
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
