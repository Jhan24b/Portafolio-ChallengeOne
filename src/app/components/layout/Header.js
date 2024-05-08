'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "../icons/MenuIcon";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="py-10 bg-astronaut-900 px-4">
      <div className="md:hidden max-w-4xl mx-auto flex grow text-lg font-semibold text-white">
        <h3 className="grow text-white">Anthony J. Torres</h3>
        <div
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <MenuIcon />
        </div>
      </div>
      {navOpen && (
        <div className="md:hidden p-4 bg-astronaut-100 rounded-lg mt-4 gap-4">
          <nav className="gap-8 text-lg">
            <Link href="#about">Sobre mi</Link>
            {/* <Link href="#skills">Skills</Link>
            <Link href="#hobbies">Hobbies</Link> */}
            <Link href="#formacion">Formación</Link>
            <Link href="#experience">Proyectos</Link>
            <Link href="#contact">Contacto</Link>
          </nav>
        </div>
      )}

      <div className="hidden max-w-4xl mx-auto md:flex grow text-lg font-semibold text-white">
        <h3 className="grow text-white">Anthony J. Torres</h3>
        <nav className="flex gap-8 text-lg">
          <Link href="#about">Sobre mi</Link>
          {/* <Link href="#skills">Skills</Link>
          <Link href="#hobbies">Hobbies</Link> */}
          <Link href="#formacion">Formación</Link>
          <Link href="#experience">Proyectos</Link>
          <Link href="#contact">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
