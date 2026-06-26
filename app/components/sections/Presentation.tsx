"use client";

import Image from "next/image";
import Link from "next/link";
import Download from "../icons/Download";
import Linkedin from "../icons/Linkedin";
import Github from "../icons/Github";
import { useView } from "@/lib/ViewContext";
import { useLanguage } from "@/lib/LanguageContext";
import { CONFIG } from "@/lib/config";

export default function Presentation() {
  const { view } = useView();
  const { language } = useLanguage();
  const data = CONFIG[language][view];

  const greeting = language === "en" ? "Hi, I'm" : "Hola, soy";
  const fixedBio =
    language === "en"
      ? "Systems Engineer and self-taught developer passionate about technology, innovation, and building impactful digital solutions. Always exploring, always learning."
      : "Ingeniero de Sistemas y desarrollador autodidacta, apasionado por la tecnología, la innovación y la creación de soluciones digitales con impacto real. Siempre explorando, siempre aprendiendo.";

  return (
    <section id="presentation" className="overflow-hidden">
      <div className="max-w-4xl md:mx-auto min-h-[70vh] flex items-center px-4 md:mt-8">
        <div className="about flex flex-col md:flex-row gap-12 md:gap-20 items-center w-full">
          <div className="flex justify-center relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <Image
              className="relative z-10 rounded-2xl shadow-2xl border-2 border-white/10"
              src="/profile.png"
              alt="profile"
              width="250"
              height="250"
            />
          </div>
          <div className="flex-1 mt-12 md:mt-0 text-center md:text-left">
            <h1 className="font-extrabold mb-6 text-xl md:text-2xl lg:text-5xl leading-[1.1] text-astronaut-300 dark:text-cerulean-blue-50  tracking-tight ">
              {greeting} <span className="text-primary">{data.name}</span>,{" "}
              <br />
              <span className="text-cerulean-blue-600 dark:text-cerulean-blue-400 opacity-90">
                {data.title}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium max-w-2xl mx-auto md:mx-0">
              {fixedBio}
            </p>
            <div className="flex gap-4 mt-8 justify-center md:justify-center items-center flex-wrap">
              <Link
                href="https://github.com/Jhan24b"
                target="_blank"
                className="flex items-center gap-2 px-5 py-2.5 glass rounded-full hover:bg-primary/10 transition-all hover:-translate-y-1 text-foreground font-bold text-sm"
              >
                <Github className="w-5 h-5 text-astronaut-800 dark:text-astronaut-200" />
                <span className="text-astronaut-800 dark:text-astronaut-200">
                  Github
                </span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/anthony-torres-13591b1b5/"
                target="_blank"
                className="flex items-center gap-2 px-5 py-2.5 glass rounded-full hover:bg-primary/10 transition-all hover:-translate-y-1 text-foreground font-bold text-sm"
              >
                <Linkedin className="w-5 h-5 text-astronaut-800 dark:text-astronaut-200" />
                <span className="text-astronaut-800 dark:text-astronaut-200">
                  Linkedin
                </span>
              </Link>

              <Link
                href="https://drive.google.com/file/d/1iUK3s8E9MtCxCvRxYM6Kau5sjUr0/view?usp=sharing"
                target="_blank"
                className="flex items-center gap-2 px-5 py-2.5 glass rounded-full hover:bg-primary/10 transition-all hover:-translate-y-1 text-foreground font-bold text-sm"
              >
                <Download className="w-5 h-5 text-astronaut-800 dark:text-astronaut-200" />
                <span className="text-astronaut-800 dark:text-astronaut-200">
                  CV
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
