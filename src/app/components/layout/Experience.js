"use client";

import Css from "../icons/Css";
import HtmlLogo from "../icons/HtmlLogo";
import Mongo from "../icons/Mongo";
import Next from "../icons/Next";
import React from "../icons/React";
import Stripe from "../icons/Stripe";
import Tailwind from "../icons/Tailwind";
import LogoJavaScript from "../icons/LogoJavaScript";
import CardExperience from "./CardExperience";
import { useState } from "react";
import ViteIcon from "../icons/ViteIcon";
import SocketIoIcon from "../icons/SocketIoIcon";
import TypeScripIcon from "../icons/TypeScripIcon";

function renderProjects(filteredProjects) {
  return filteredProjects.map((proyecto, idx) => {
    const type = idx % 2 === 0 ? "card" : "cardinverted";
    return <CardExperience key={idx} card={{ type, ...proyecto }} />;
  });
}

export default function Experience() {
  const [filter, setFilter] = useState("");
  const proyectos = [
    {
      title: "Chat App",
      subtitle: "ChatMe",
      role: "Full Stack",
      tech: [React, Tailwind, LogoJavaScript, SocketIoIcon, ViteIcon], //vite, socketio
      img: "/chatMe.png",
      urlRepository: "https://github.com/Jhan24b/AuthPyees",
      urlProduction: "https://chatme-fxip.onrender.com",
    },{
      title: "Auth Page",
      subtitle: "Pyyes - Auth",
      role: "Full Stack",
      tech: [Next, TypeScripIcon, Mongo, Tailwind],
      img: "/authpyyes.png",
      urlRepository: "https://github.com/Jhan24b/AuthPyees",
      urlProduction: "https://authpyees.vercel.app",
    },
    {
      title: "Ordering App",
      subtitle: "Pyyes - Bakery",
      role: "Full Stack",
      tech: [Next, Mongo, Tailwind, Stripe],
      img: "/pyyesProject.png",
      urlRepository: "https://github.com/Jhan24b/Pyyes",
      urlProduction: "https://pyyes.vercel.app",
    },
    {
      title: "AluraFlix",
      subtitle: "Challenge One - AluraFlix",
      role: "Front End",
      tech: [React, Css],
      img: "/aluraFlix.png",
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
      urlRepository: "https://github.com/Jhan24b/ChallengeOne",
      urlProduction: "https://jhan24b.github.io/ChallengeOne/",
    },
  ];
  const filteredProjects =
    filter === ""
      ? proyectos
      : proyectos.filter((proy) => proy.role === filter);

  return (
    <section id="experience">
      <div className="max-w-6xl mx-auto text-center my-16 md:my-4 flex flex-col gap-4 pb-4">
        <h2 className="text-cerulean-blue-900 dark:text-astronaut-50 font-bold text-[36px]">
          Experiencia Profesional
        </h2>
        <div className="flex justify-center gap-4">
          <button onClick={() => setFilter("")}>Todos</button>
          <button onClick={() => setFilter("Front End")}>Front End</button>
          <button onClick={() => setFilter("Full Stack")}>Full Stack</button>
        </div>

        {renderProjects(filteredProjects)}
      </div>
    </section>
  );
}
