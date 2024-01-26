import Image from "next/image";
import Github from "../icons/Github";
import Link from "next/link";

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
      {/* <!-- Pon el logotipo/captura de pantalla de tu proyecto --> */}
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
      <div className="flex flex-col justify-center">
        <h2 className="font-bold text-[24px] text-cerulean-blue-800 -mb-2">
          {title}
        </h2>
        <h3 className="font-bold text-[16px] text-cerulean-blue-500 mb-6">
          {subtitle}
        </h3>
        <div className="mb-8">
          <h3 className="font-bold text-[20px] text-cerulean-blue-900 mb-4">
            {role}
          </h3>
          <div className="flex justify-center gap-3">
            {tech.map((Tecnologia, idx) => {
              return <Tecnologia key={idx} />;
            })}
          </div>
        </div>
        <div className="flex justify-center items-center gap-12">
          {/* <!-- Pon el enlace del proyecto en Github o GithubPages --> */}
          <button>
            <Link href={urlRepository} target="_blank">
              <Github className="w-10 h-10" />
              Repositório
            </Link>
          </button>
          <button>
            <Link href={urlProduction} target="_blank">
              <span>Ver demo</span>
            </Link>
          </button>
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
