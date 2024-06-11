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

  return (
    <div className={type}>
      {type === "cardD" && (
        <div className="flex justify-center items-center">
          <div className="gap-4 inline-block relative contenedor">
            <Image
              src={img}
              alt={title}
              width={420}
              height={420}
              className="rounded-lg"
            />
            <p className="text">{status}</p>
          </div>
        </div>
      )}
      <div className="flex flex-col justify-center items-center my-4 mx-2 gap-y-2">
        <h4 className="font-bold text-[24px] text-astronaut-800 dark:text-astronaut-200 -mb-2">
          {title}
        </h4>
        <div className=" flex flex-col gap-2">
          <div className="flex justify-center items-center gap-2">
            <p className="font-bold text-[16px] dark:text-mercury-100">
              Patron de diseño:
            </p>
            <h4 className="font-bold text-[20px] text-astronaut-700 dark:text-astronaut-50">
              {Arquitectura}
            </h4>
          </div>
          <p className="w-[80%] mx-[10%] text-[14px] my-2">{description}</p>
          <div className="flex justify-center gap-3">
            <p className="font-bold text-[16px] dark:text-mercury-100">
              Tecnologías:
            </p>
            {tech.map((Tecnologia, idx) => {
              return <Tecnologia key={idx} />;
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-[16px] text-left dark:text-mercury-100 ml-4">
            Características:
          </p>

          <div className="flex gap-x-8 gap-y-1 justify-center flex-wrap">
            {caracteristicas.map((caracteristica, idx) => {
              return (
                <p
                  className="text-md font-semibold text-astronaut-600 dark:text-astronaut-200"
                  key={idx}
                >
                  {caracteristica}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      {type === "cardinvertedD" && (
        <div className="flex justify-center items-center">
          <div className="gap-4 inline-block relative contenedor">
            <Image
              src={img}
              alt={title}
              width={420}
              height={420}
              className="rounded-lg"
            />
            <p className="text">{status}</p>
          </div>
        </div>
      )}
    </div>
  );
}
