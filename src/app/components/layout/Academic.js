import CardGrade from "./CardGrade";

export default function Academic() {
  const formation = [
    {
      title: "Front-End - React",
      subtitle: "Meta",
      duration: "2024",
      img: "/metaLogo.png",
    },
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
    {
      title: "Google IT Support",
      subtitle: "Google",
      duration: "2023",
      img: "/googleLogo.png",
    },
  ];
  return (
    <section id="formacion">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="">Formación Académica</h2>

        <div className="p-12">
          <div className="flex justify-center items-center flex-col md:flex-row gap-12 md:gap-8 flex-wrap">
            {formation.map((data, idx) => {
              return <CardGrade key={idx} data={data} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
