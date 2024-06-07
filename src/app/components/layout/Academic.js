import CardGrade from "./CardGrade";

function renderCards(cards){
  return cards.map((card, idx) => {
    return <CardGrade key={idx} data={card} />;
  })
}

function EducationSection({ title, items }) {
  return (
    <div>
      <h3 className="text-astronaut-800 dark:text-astronaut-100 font-bold text-[30px]">{title}</h3>
      <div className="p-12">
        <div className="flex justify-center items-center flex-col md:flex-row gap-12 md:gap-8 flex-wrap">
          {renderCards(items)}
        </div>
      </div>
    </div>
  );
}
export default function Academic() {
  const grades = [
    {
      title: "Licenciatura en Ingeniería de Sistemas e Informática",
      subtitle: "UTP",
      duration: "En Curso",
      img: "/utpLogo.png",
    },
    {
      title: "Especializacion Front-End",
      subtitle: "Oracle - Alura Latam",
      duration: "2023",
      img: "/aluraLogo.png",
    },
  ];

  const specialization = [
    {
      title: "Front-End - React",
      subtitle: "Meta",
      duration: "2024",
      img: "/metaLogo.png",
    },
    {
      title: "Especializacion Front-End",
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
    <section id="formacion">
      <div className="max-w-6xl mx-auto text-center">
        <h2 >Formación Académica</h2>
        <EducationSection title="Grados" items={grades} />
        <EducationSection title="Especializaciones" items={specialization} />
      </div>
    </section>
  );
}
