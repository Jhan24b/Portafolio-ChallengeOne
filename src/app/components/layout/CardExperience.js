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
  } = card;

  return (
    <div className={type}>
      {type === "card" && (
        <div className="flex justify-center">
          <Image
            src={img}
            alt={title}
            width={720}
            height={480}
            className="rounded-lg"
          />
        </div>
      )}
      <div className="flex flex-col justify-center my-4 mx-2">
        <h4 className="font-bold text-[24px] text-astronaut-800 dark:text-astronaut-200 -mb-2">
          {title}
        </h4>
        <h5 className="font-bold text-[16px] text-astronaut-700 dark:text-astronaut-100 mb-6">
          {subtitle}
        </h5>
        <div className="mb-8">
          <h4 className="font-bold text-[20px] text-astronaut-700 dark:text-astronaut-50 mb-4">
            {role}
          </h4>
          <div className="flex justify-center gap-3">
            {tech.map((Tecnologia, idx) => {
              return <Tecnologia key={idx} />;
            })}
          </div>
        </div>
        <div className="flex justify-center items-center gap-12">

          <Link href={urlRepository} target="_blank" className="dark:hover:text-astronaut-100">
            <Github className="w-10 h-10" />
            Repositorio
          </Link>

          <Link href={urlProduction} target="_blank" className="dark:hover:text-astronaut-100">
            <span>Ver demo</span>
            <Plane className="w-7 h-7"/>
          </Link>
        </div>
      </div>
      {type === "cardinverted" && (
        <div className="flex justify-center">
          <Image
            src={img}
            alt={title}
            width={720}
            height={480}
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
