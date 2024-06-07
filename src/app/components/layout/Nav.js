import Link from "next/link";
import Bulb from "../icons/bulb";

export default function Nav({ handleChangeTheme }) {
  return (
    <nav className="gap-8 text-lg md:flex">
      <Link href="#about">Sobre mi</Link>
      {/* <Link href="#skills">Skills</Link>
            <Link href="#hobbies">Hobbies</Link> */}
      <Link href="#formacion">Formación</Link>
      <Link href="#experience">Proyectos</Link>
      <Link href="#contact">Contacto</Link>
      <div className="flex items-center gap-2 hover:cursor-pointer">
        <div onClick={handleChangeTheme}>
          <Bulb />
        </div>
        <div> ENG</div>
      </div>
    </nav>
  );
}
