import Link from "next/link";

export default function Nav() {
  return (
    <nav className="gap-8 text-lg md:flex">
      <Link href="#about">Sobre mi</Link>
      {/* <Link href="#skills">Skills</Link>
            <Link href="#hobbies">Hobbies</Link> */}
      <Link href="#formacion">Formación</Link>
      <Link href="#experience">Proyectos</Link>
      <Link href="#contact">Contacto</Link>
    </nav>
  );
}
