import Image from "next/image";
import Link from "next/link";
import Right from "../icons/Right";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto m-auto h-[80vh]" id="about">
      <div className="about md:grid grid-cols-2 h-full items-center">
        <div className="flex justify-center">
          <Image
            className=""
            src="/profile.png"
            alt="profile"
            width="200"
            height="200"
          />
        </div>
        <div className="mx-2">
          <h2 className="font-semibold text-cerulean-blue-900 pb-1">
            Hola, soy Anthony J. Torres, Programador - Desarrollador Web Full
            Stack
          </h2>
          <h3 className="py-2">
            ¡Saludos! Soy un estudiante apasionado de Ingeniería de Sistemas e
            Informática en la Universidad Tecnológica del Perú. Mi fascinación
            por la tecnología y la programación me ha llevado a especializarme
            en el desarrollo de aplicaciones mobiles y web.
          </h3>
          <div className="flex gap-4 px-4 py-2 justify-center items-center flex-wrap">
            <button className="" href="https://github.com/Jhan24b">
              Github <Right />
            </button>

            <button
              className=""
              href="https://www.linkedin.com/in/anthony-torres-13591b1b5/"
            >
              Linkedin <Right />
            </button>

            <button className="" href="">
              Instagram <Right />
            </button>

            <button className="" href="">
              Currículo <Right />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
