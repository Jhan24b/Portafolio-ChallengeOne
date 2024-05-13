"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import MenuIcon from "../icons/MenuIcon";
import Nav from "./Nav";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = useCallback(() => {
    setNavOpen((prevNavOpen) => !prevNavOpen);
  }, []);

  return (
    <header className="py-8 bg-astronaut-900 px-4">
      <div className="md:hidden max-w-4xl mx-auto flex grow text-lg font-semibold text-white">
        <h3 className="grow text-white">Anthony J. Torres</h3>
        <button onClick={toggleNav} aria-label="Toggle navigation">
          <MenuIcon />
        </button>
      </div>
      {navOpen && (
        <div className="md:hidden p-4 bg-astronaut-100 rounded-lg mt-4 gap-4">
          <Nav />
        </div>
      )}

      <div className="hidden max-w-4xl mx-auto md:flex grow text-lg font-semibold text-white justify-between">
        <div className="flex items-center gap-2">
          <Image
            alt="Logo-Anthony"
            src={"/lighLogo.png"}
            width={48}
            height={48}
            className="text-white"
          ></Image>
          <h3 className="grow text-white">Anthony J. Torres</h3>
        </div>
        <Nav />
      </div>
    </header>
  );
}
