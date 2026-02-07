"use client";

import CardGrade from "./CardGrade";
import { Grade } from "@/types";
import { useLanguage } from "@/lib/LanguageContext";

interface EducationSectionProps {
  title: string;
  items: Grade[];
}

function renderCards(cards: Grade[]){
  return cards.map((card, idx) => {
    return <CardGrade key={idx} data={card} />;
  })
}

function EducationSection({ title, items }: EducationSectionProps) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-muted-foreground italic mb-8">{title}</h3>
      <div className="flex justify-center items-center flex-col md:flex-row gap-10 md:gap-12 flex-wrap">
        {renderCards(items)}
      </div>
    </div>
  );
}

export default function Academic() {
  const { language, t } = useLanguage();

  const grades: Grade[] = [
    {
      title: language === "en" ? "Bachelor's Degree in Systems Engineering and Informatics" : "Licenciatura en Ingeniería de Sistemas e Informática",
      subtitle: "UTP",
      duration: language === "en" ? "In Progress" : "En Curso",
      img: "/utpLogo.png",
    },
    {
      title: language === "en" ? "Front-End Specialization" : "Especializacion Front-End",
      subtitle: "Oracle - Alura Latam",
      duration: "2023",
      img: "/aluraLogo.png",
    },
  ];

  const specialization: Grade[] = [
    {
      title: "Front-End - React",
      subtitle: "Meta",
      duration: "2024",
      img: "/metaLogo.png",
    },
    {
      title: language === "en" ? "Front-End Specialization" : "Especializacion Front-End",
      subtitle: "Oracle - Alura Latam",
      duration: "2023",
      img: "/aluraLogo.png",
    },
    {
      title: "Google IT Support",
      subtitle: "Google",
      duration: "2023",
      img: "/googleLogo.png",
    },{
      title: "Python for Everybody",
      subtitle: "University of Michigan",
      duration: "2022",
      img: "/Umich.png",
    },
  ];

  return (
    <section id="formacion" className="py-24">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-5xl md:text-7xl font-black text-foreground mb-20 tracking-tighter uppercase leading-none">{t("academic.title")}</h2>
        <EducationSection title={t("academic.degrees")} items={grades} />
        <EducationSection title={t("academic.specializations")} items={specialization} />
      </div>
    </section>
  );
}
