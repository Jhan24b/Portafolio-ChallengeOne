import CardGrade from "./CardGrade";

export default function Academic() {
  const formation = [
    {
      title: "Specialization Front-End - React",
      subtitle: "Meta",
      duration: "En Curso",
      img: "/Meta.png",
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
  ];
  return (
    <section className="max-w-6xl mx-auto text-center" id="formacion">
      <h2 className="">Formación Académica</h2>

      <div className="flex justify-center items-center flex-col md:flex-row gap-12 md:gap-8">
        {formation.map((data, idx) => {
          return <CardGrade key={idx} data={data} />;
        })}
      </div>
    </section>
  );
}
