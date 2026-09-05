"use client";

import Image from "next/image";
import { Grade } from "@/types";
import { useState, useRef, MouseEvent } from "react";
import { Award } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

interface CardGradeProps {
  data: Grade;
}

export default function CardGrade({ data }: CardGradeProps) {
  const { t } = useLanguage();
  const { title, subtitle, duration, img } = data;
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (centerY - y) / 10;
    const rotateY = (x - centerX) / 10;

    setRotate({ x: rotateX, y: rotateY });
    setOpacity(1);
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setOpacity(0);
  };

  return (
    <div className="relative perspective-1000">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: "transform 0.1s ease-out",
          transformStyle: "preserve-3d",
        }}
        className="group relative w-72 h-[420px] glass rounded-[2.5rem] p-6 flex flex-col items-center border border-astronaut-500/10 dark:border-white/10 hover:border-cerulean-blue-500/30 transition-all duration-300 bg-white/40 dark:bg-astronaut-900/20 shadow-xl overflow-hidden"
      >
        {/* Prismatic Holographic Overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            opacity: opacity * 0.4,
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.3) 0%, transparent 50%), linear-gradient(135deg, rgba(255,0,255,0.1) 0%, rgba(0,255,255,0.1) 50%, rgba(255,255,0,0.1) 100%)`,
            mixBlendMode: "color-dodge",
          }}
        ></div>

        {/* Top Grade Decoration */}
        <div className="absolute top-4 right-6 flex items-center gap-1.5 translate-z-20">
          <Award className="w-4 h-4 text-cerulean-blue-600 dark:text-cerulean-blue-400 opacity-60" />
          <span className="text-[10px] font-black text-astronaut-500 dark:text-cerulean-blue-400 tracking-tighter uppercase italic">{t("card.certified")}</span>
        </div>

        {/* Floating Logo Container */}
        <div 
          className="w-full h-44 relative mb-6 overflow-hidden rounded-3xl bg-astronaut-500/5 dark:bg-white/5 flex justify-center items-center shadow-inner border border-astronaut-500/10 dark:border-white/10"
          style={{ transform: "translateZ(40px)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cerulean-blue-500/10 to-transparent dark:from-white/10 opacity-30"></div>
          <Image 
            src={img} 
            width={140} 
            height={60} 
            alt={title} 
            className="relative z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500 object-contain"
          />
        </div>
        
        {/* Content Section */}
        <div 
           className="flex flex-col grow justify-between text-center w-full px-1"
           style={{ transform: "translateZ(30px)" }}
        >
          <div>
            <h3 className="text-xl font-black text-astronaut-950 dark:text-white mb-2 leading-[1.1] tracking-tight group-hover:text-cerulean-blue-600 dark:group-hover:text-cerulean-blue-400 transition-colors duration-300 drop-shadow-sm min-h-[3rem] flex items-center justify-center">
              {title}
            </h3>
            <div className="h-0.5 w-12 bg-gradient-to-r from-cerulean-blue-500 to-transparent mx-auto mb-4 rounded-full"></div>
            <p className="text-sm font-black text-cerulean-blue-700 dark:text-cerulean-blue-400 mb-1 tracking-widest uppercase italic drop-shadow-sm">
              {subtitle}
            </p>
          </div>

          <div className="mt-auto pt-6 border-t border-astronaut-500/5 dark:border-white/5 flex items-center justify-between px-2">
            <span className="text-[10px] font-black text-astronaut-400 dark:text-muted-foreground uppercase tracking-widest italic">{t("card.period")}</span>
            <p className="text-xs font-black text-astronaut-900 dark:text-white bg-astronaut-500/10 dark:bg-white/10 px-3 py-1 rounded-full border border-astronaut-500/10 dark:border-white/10">
              {duration}
            </p>
          </div>
        </div>

        {/* Animated Gloss Effect */}
        <div className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent skew-x-[-25deg] group-hover:animate-shimmer pointer-events-none"></div>
      </div>
    </div>
  );
}
