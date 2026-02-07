import Image from "next/image";
import Github from "../icons/Github";
import Link from "next/link";
import Plane from "../icons/Plane";

export default function CardExperienceDesktop({ card }) {
  const {
    title,
    tech,
    img,
    Arquitectura,
    description,
    status,
    type,
    caracteristicas,
  } = card;

  const isReversed = type === "cardinvertedD";

  return (
    <div className={`group relative flex flex-col items-center gap-8 p-8 glass rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20`}>
      <div className={`flex flex-col md:flex-row items-center gap-10 w-full ${isReversed ? 'md:flex-row-reverse' : ''}`}>
        <div className="flex-1 relative overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={img}
            alt={title}
            width={720}
            height={480}
            className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
            {status}
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-3xl font-bold text-primary dark:text-white mb-2">
            {title}
          </h4>
          <div className="flex items-center gap-2 mb-6 text-cerulean-blue-500 font-medium tracking-wide">
            <span className="text-sm uppercase italic">Archtitecture:</span>
            <span className="font-bold">{Arquitectura}</span>
          </div>
          
          <p className="text-muted-foreground mb-8 text-lg">
            {description}
          </p>

          <div className="w-full mb-8">
            <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Core Technologies</h5>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {tech.map((Tecnologia, idx) => (
                <div key={idx} className="p-3 glass rounded-2xl hover:bg-primary/10 transition-all hover:-translate-y-1">
                   {typeof Tecnologia === 'function' ? <Tecnologia className="w-8 h-8" /> : Tecnologia}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full pt-8 border-t border-border/50">
        <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6 text-center">Key Features</h5>
        <div className="flex flex-wrap justify-center gap-4">
          {caracteristicas.map((caracteristica, idx) => (
            <span
              key={idx}
              className="px-4 py-1.5 glass rounded-full text-sm font-semibold text-primary dark:text-astronaut-200 border border-primary/10"
            >
              • {caracteristica}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
