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
import Java from "../icons/Java";
import CardExperienceDesktop from "./CardExperienceDesktop";
import mysqlLogo from "../icons/mysqlLogo";

function renderProjects(filteredProjects) {
  return filteredProjects.map((proyecto, idx) => {
    const type = idx % 2 === 0 ? "card" : "cardinverted";
    return <CardExperience key={idx} card={{ type, ...proyecto }} />;
  });
}

function renderProjectsDesktop(filteredProjects) {
  return filteredProjects.map((proyecto, idx) => {
    const type = idx % 2 === 0 ? "cardD" : "cardinvertedD";
    return <CardExperienceDesktop key={idx} card={{ type, ...proyecto }} />;
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
    },
    {
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

  const projectsDesktop = [
    {
      title: "Sistema para Gestion de Minimarket",
      tech: [Java, mysqlLogo],
      img: "/minimarketSystem.png",
      Arquitectura: "MVC",
      description:
        "Este sistema permite la gestión de inventarios, control de ventas, y seguimiento de pedidos de manera efectiva. Con una interfaz amigable y accesible, el sistema facilita la administración de productos, automatiza la generación de reportes de ventas y compras, y proporciona un análisis detallado de los datos para tomar decisiones informadas.",
      status: "Vendido",
      caracteristicas: [
        "Gestion de Inventarios",
        "Gestion de Ventas",
        "Gestion de Compras",
        "Gestion de Proveedores",
        "Generacion de Reportes",
      ],
    },
    {
      title: "Sistema para Gestion de Colegio",
      tech: [Java, mysqlLogo],
      img: "/escuelaSystem.png",
      Arquitectura: "MVC",
      description:
        "Un sistema de gestión escolar que abarca todos los aspectos clave de la administración de una institución educativa. Este sistema facilita la gestión de pagos, la administración de información del personal, y la supervisión de notas y asistencia de los estudiantes.",
      status: "Desplegado",
      caracteristicas: [
        "Gestión de Pagos",
        "Información del Personal",
        "Registro de Notas",
        "Gestión de Matrículas",
        "Control de Asistencia",
      ],
    },
  ];

  const filteredProjects =
    filter === ""
      ? proyectos
      : proyectos.filter((proy) => proy.role === filter);

  return (
    <section id="experience">
      <div className="max-w-6xl mx-auto text-center my-16 md:my-4 flex flex-col gap-6 pb-4">
        <h2 className="text-cerulean-blue-900 dark:text-astronaut-50 font-bold text-[36px]">
          Experiencia Profesional
        </h2>
        <div className="flex flex-col gap-4">
          <h3 className="text-astronaut-800 dark:text-astronaut-200 font-bold text-[30px]">
            Aplicaciones de Escritorio
          </h3>
          {renderProjectsDesktop(projectsDesktop)}
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-astronaut-800 dark:text-astronaut-200 font-bold text-[30px]">
            Aplicaciones Web
          </h3>
          <div className="flex justify-center gap-4">
            <button onClick={() => setFilter("")}>Todos</button>
            <button onClick={() => setFilter("Front End")}>Front End</button>
            <button onClick={() => setFilter("Full Stack")}>Full Stack</button>
          </div>

          {renderProjects(filteredProjects)}
        </div>
      </div>
    </section>
  );
}
