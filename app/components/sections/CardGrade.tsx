import Image from "next/image";
import { Grade } from "@/types";

interface CardGradeProps {
  data: Grade;
}

export default function CardGrade({ data }: CardGradeProps) {
  const { title, subtitle, duration, img } = data;
  return (
    <div className="group relative w-80 h-[380px] perspective-1000">
      <div className="h-full glass rounded-3xl p-6 flex flex-col items-center transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
        <div className="w-full h-40 relative mb-6 overflow-hidden rounded-2xl bg-white/5 flex justify-center items-center shadow-inner">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent animate-pulse"></div>
          <Image 
            src={img} 
            width={160} 
            height={60} 
            alt={title} 
            className="relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        <div className="flex flex-col grow justify-between text-center w-full px-2">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3 leading-[1.2] tracking-tight group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm font-semibold text-cerulean-blue-600 dark:text-cerulean-blue-400 mb-1 tracking-wide uppercase">
              {subtitle}
            </p>
          </div>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mt-auto pb-2">
            {duration}
          </p>
        </div>
      </div>
    </div>
  );
}
