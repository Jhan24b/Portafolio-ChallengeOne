import Css from "../icons/Css";
import HtmlLogo from "../icons/HtmlLogo";
import Mongo from "../icons/Mongo";
import Next from "../icons/Next";
import React from "../icons/React";
import Stripe from "../icons/Stripe";
import Tailwind from "../icons/Tailwind";
import LogoJavaScript from "../icons/LogoJavaScript";
import CardExperience from "./CardExperience";

export default function Experience() {
  const proyectos = [
    {
      title: "Ordering App",
      subtitle: "Pyyes - Bakery",
      role: "Full Stack",
      tech: [Next, Mongo, Tailwind, Stripe],
      img: "/decod_print.png",
      urlRepository: "https://github.com/Jhan24b/Pyyes",
      urlProduction: "https://pyyes.vercel.app",
    },
    {
      title: "AluraFlix",
      subtitle: "Challenge One - AluraFlix",
      role: "Front End",
      tech: [React, Css],
      img: "/ECommerce-Geek.png",
      urlRepository: "https://github.com/Jhan24b/Aluraflix",
      urlProduction: "https://aluraflix-9qc13sxtf-jhan24b.vercel.app/",
    },
    {
      title: "Plataforma ECommerce - AluraGeek",
      subtitle: "Challenge Oracle - AluraGeek",
      role: "Front End",
      tech: [HtmlLogo, Css, LogoJavaScript],
      img: "/ECommerce-Geek.png",
      urlRepository: "https://github.com/Jhan24b/ChallengeFrontEnd",
      urlProduction: "https://jhan24b.github.io/ChallengeFrontEnd/",
    },
    {
      title: "Encriptador de texto",
      subtitle: "Challenge Alura Codificador",
      role: "Front End",
      tech: [HtmlLogo, Css, LogoJavaScript],
      img: "/decod_print.png",
      urlRepository:
        "https://github.com/Jhan24b/ChallengeOne",
      urlProduction:
        "https://jhan24b.github.io/ChallengeOne/",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto text-center my-40 md:my-4" id="experience">
      <h2 className="text-cerulean-blue-900 font-bold text-[36px] pt-12 pb-4">
        Experiencia Profesional
      </h2>
      {proyectos.map((proyecto, idx) => {
        let type = "";
        idx % 2 === 0 ? (type = "card") : (type = "cardinverted");
        return <CardExperience key={idx} card={{ type, ...proyecto }} />;
      })}
    </section>
  );
}
