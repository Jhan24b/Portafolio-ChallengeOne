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
              src="/profile.png"
              alt="profile"
              width="200"
              height="200"
            />
          </div>
          <div className="mx-2">
            <div className="font-semibold text-cerulean-blue-900 my-8 text-[24px] ">
              Hola, soy Anthony J. Torres, Desarrollador Web Full Stack -
              Programador Mobile
            </div>
            <span className="py-2 text-lg">
              ¡Saludos! Soy un estudiante apasionado de Ingeniería de Sistemas e
              Informática en la Universidad Tecnológica del Perú. Mi fascinación
              por la tecnología y la programación me ha llevado a especializarme
              en el desarrollo de aplicaciones mobiles y web.
            </span>
            <div className="flex gap-8 mx-4 my-4 justify-center items-center flex-wrap">
              <Link className="" href="https://github.com/Jhan24b">
                <Github className="w-10 h-10" />
                Github
              </Link>

              <Link
                className=""
                href="https://www.linkedin.com/in/anthony-torres-13591b1b5/"
              >
                <Linkedin className="w-10 h-10" />
                Linkedin
              </Link>

              <Link className="" href="https://www.instagram.com">
                <Instagram className="w-10 h-10" />
                Instagram
              </Link>

              <Link
                className=""
                href="https://www.linkedin.com/in/anthony-torres-13591b1b5/"
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
