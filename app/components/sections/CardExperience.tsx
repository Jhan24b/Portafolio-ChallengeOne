"use client";

import { useState } from "react";
import Image from "next/image";
import Github from "../icons/Github";
import Link from "next/link";
import { Project } from "@/types";
import { Layers, Terminal, ExternalLink } from "lucide-react";

interface CardExperienceProps {
  card: Project & { type: string };
}

export default function CardExperience({ card }: CardExperienceProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [hasImageError, setHasImageError] = useState(false);

  const {
    title,
    subtitle,
    tech,
    img,
    urlRepository,
    urlProduction,
    type,
    description
  } = card;

  const isReversed = type === "cardinverted";

  return (
    <div
      className={`group relative flex flex-col md:flex-row items-stretch gap-8 md:gap-16 p-1 rounded-[2.5rem] transition-all duration-500 mb-20 ${isReversed ? "md:flex-row-reverse" : ""}`}
    >
      {/* Structural Decoration */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-px bg-linear-to from-transparent via-astronaut-500/10 dark:via-white/5 to-transparent -z-10"></div>

      {/* Image Showcase */}
      <div className="flex-1 relative w-full perspective-1000">
        <div className="relative overflow-hidden rounded-4xl border border-astronaut-900/10 dark:border-white/10 shadow-2xl aspect-video group-hover:shadow-cerulean-blue-500/20 transition-all duration-500">
          {(isImageLoading || hasImageError) && (
            <div className="absolute inset-0 bg-gradient-to-br from-astronaut-200/50 to-astronaut-300/50 dark:from-astronaut-800/50 dark:to-astronaut-900/50 animate-pulse z-10"></div>
          )}
          {!hasImageError && (
            <Image
              src={img}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
              onLoadingComplete={() => setIsImageLoading(false)}
              onError={() => {
                setIsImageLoading(false);
                setHasImageError(true);
              }}
            />
          )}
          {/* Technical Overlay */}
          <div className="absolute inset-0 bg-linear-to from-astronaut-950/80 via-transparent to-transparent opacity-60"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(15,23,42,0.4)_100%)]"></div>

          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Terminal className="w-3 h-3 text-cerulean-blue-400" />
                <span className="text-[10px] font-black text-cerulean-blue-400 uppercase tracking-[0.2em]">
                  Deployment Status
                </span>
              </div>
              <span className="text-sm font-black text-white uppercase italic">
                Active Node
              </span>
            </div>
            <Layers className="w-10 h-10 text-white/20" />
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-cerulean-blue-500"></div>
            <h5 className="text-xs font-black uppercase tracking-[0.4em] text-cerulean-blue-600 dark:text-cerulean-blue-400">
              {subtitle}
            </h5>
          </div>
          <h4 className="text-4xl md:text-5xl font-black text-astronaut-950 dark:text-white tracking-tighter uppercase leading-[0.9] mb-4">
            {title}
          </h4>
        </div>

        {description && (
          <div className="relative mb-8">
            <p className="text-astronaut-800 dark:text-muted-foreground text-lg leading-relaxed font-medium line-clamp-3 group-hover:line-clamp-none transition-all duration-500 border-l-4 border-astronaut-500/20 pl-6 italic">
              {description}
            </p>
          </div>
        )}

        {/* Tech Ecosystem */}
        <div className="mb-10">
          <span className="text-[10px] font-black text-astronaut-400 dark:text-muted-foreground uppercase tracking-[0.3em] mb-4 block">
            Tech Ecosystem
          </span>
          <div className="flex flex-wrap gap-3">
            {tech.map((Tecnologia, idx) => (
              <div
                key={idx}
                className="px-4 py-2 glass rounded-xl border border-astronaut-500/10 dark:border-white/10 hover:bg-astronaut-500/10 dark:hover:bg-white/10 transition-all hover:-translate-y-1 group/tech flex items-center gap-2"
              >
                {typeof Tecnologia !== "string" ? (
                  <Tecnologia className="w-5 h-5 text-astronaut-900 dark:text-white" />
                ) : (
                  <span className="text-xs font-black text-astronaut-900 dark:text-white">
                    {Tecnologia}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Action Reveal */}
        <div className="flex flex-wrap items-center gap-8">
          {urlProduction && (
            <Link
              href={urlProduction}
              target="_blank"
              className="group/btn flex items-center gap-3 bg-astronaut-950 dark:bg-white text-white dark:text-astronaut-950 px-8 py-3.5 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-xl shadow-astronaut-900/20 dark:shadow-white/5"
            >
              <span>Launch Demo</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          )}

          {urlRepository && (
            <Link
              href={urlRepository}
              target="_blank"
              className="flex items-center gap-3 font-black text-astronaut-600 dark:text-astronaut-400 hover:text-cerulean-blue-600 dark:hover:text-cerulean-blue-400 transition-colors uppercase text-xs tracking-widest group/repo"
            >
              <Github className="w-5 h-5 group-hover/repo:rotate-12 transition-transform" />
              <span className="border-b-2 border-transparent group-hover:border-current">
                Source Code
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
