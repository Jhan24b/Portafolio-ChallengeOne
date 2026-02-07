import Image from "next/image";
import Github from "../icons/Github";
import Link from "next/link";
import Plane from "../icons/Plane";

export default function CardExperience({ card }) {
  const {
    title,
    subtitle,
    role,
    tech,
    img,
    urlRepository,
    urlProduction,
    type,
    description, // Added description support
  } = card;

  const isReversed = type === "cardinverted";

  return (
    <div className={`group relative flex flex-col md:flex-row items-center gap-8 md:gap-12 p-6 md:p-10 glass rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex-1 w-full overflow-hidden rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500">
        <Image
          src={img}
          alt={title}
          width={720}
          height={480}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="mb-4">
          <h4 className="text-2xl font-bold text-primary dark:text-white mb-1">
            {title}
          </h4>
          <h5 className="text-sm font-medium text-cerulean-blue-500 uppercase tracking-widest">
            {subtitle}
          </h5>
        </div>

        {description && (
          <p className="text-muted-foreground mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
            {description}
          </p>
        )}

        <div className="mb-8 w-full">
          <span className="text-xs font-semibold text-muted-foreground uppercase mb-3 block">Technologies</span>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {tech.map((Tecnologia, idx) => (
              <div key={idx} className="p-2 glass rounded-xl hover:bg-primary/10 transition-colors tooltip group/tech">
                {typeof Tecnologia === 'function' ? <Tecnologia className="w-6 h-6" /> : Tecnologia}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-6 w-full">
          <Link 
            href={urlRepository} 
            target="_blank" 
            className="flex items-center gap-2 font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
            <span>Repo</span>
          </Link>

          <Link 
            href={urlProduction} 
            target="_blank" 
            className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/80 transition-all hover:translate-x-1"
          >
            <span>Demo</span>
            <Plane className="w-5 h-5"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
