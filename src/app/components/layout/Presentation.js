import Image from "next/image";
import Link from "next/link";
import Download from "../icons/Download";
import Linkedin from "../icons/Linkedin";
import Github from "../icons/Github";
import Instagram from "../icons/Instagram";

export default function Presentation() {
  return (
    <section id="about">
      <div className="max-w-4xl md:mx-auto md:h-[80vh]">
        <div className="about md:grid grid-cols-2 h-full items-center">
          <div className="flex justify-center">
            <Image
              className="my-4"
              src="/profile.jpg"
              alt="profile"
              width="200"
              height="200"
            />
          </div>
          <div className="mx-2">
            <h1 className="font-semibold text-cerulean-blue-900 my-6 text-[32px] ">
              Hola, soy Anthony J. Torres, <br />
              Full Stack (MERN) - Software Engineer
            </h1>
            <span className="py-2 text-lg">
              ¡Saludos! Soy un estudiante apasionado de Ingeniería de Sistemas e
              Informática en la Universidad Tecnológica del Perú. Mi fascinación
              por la tecnología y la programación me ha llevado a especializarme
              en el desarrollo de software.
            </span>
            <div className="flex gap-8 mx-4 my-4 justify-center items-center flex-wrap">
              <Link href="https://github.com/Jhan24b" target="_blank">
                <Github className="w-10 h-10" />
                Github
              </Link>

              <Link
                href="https://www.linkedin.com/in/anthony-torres-13591b1b5/"
                target="_blank"
              >
                <Linkedin className="w-10 h-10" />
                Linkedin
              </Link>

              <Link href="https://www.instagram.com" target="_blank">
                <Instagram className="w-10 h-10" />
                Instagram
              </Link>

              <Link
                href="https://drive.google.com/file/d/1iUK3s8E9MtCxCvRxYM6Kau5sjUr0vUIK/view?usp=sharing"
                target="_blank"
              >
                <Download className="w-8 h-8" />
                Currículo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
