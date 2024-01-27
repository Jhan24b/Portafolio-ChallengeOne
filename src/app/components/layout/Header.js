import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-10 bg-astronaut-900">
      <div className="max-w-4xl mx-auto flex grow text-lg font-semibold ">
        <h3 className="grow text-white">Anthony J. Torres</h3>
        <nav>
          <ul className="flex gap-8 text-lg text-cerulean-blue-950 text-white">
            <Link href="#about">Sobre mi</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#hobbies">Hobbies</Link>
            <Link href="#formacion">Formación</Link>
            <Link href="#experience">Proyectos</Link>
            <Link href="#contact">Contacto</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
