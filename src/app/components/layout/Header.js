"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import MenuIcon from "../icons/MenuIcon";
import Nav from "./Nav";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleNav = useCallback(() => {
    setNavOpen((prevNavOpen) => !prevNavOpen);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <header className="py-8 bg-mercury-200 dark:bg-astronaut-950 px-4">
      <div className="md:hidden max-w-4xl mx-auto flex grow text-lg font-semibold text-white">
        <h3 className="grow text-astronaut-800 dark:text-white">Anthony J. Torres</h3>
        <button onClick={toggleNav} aria-label="Toggle navigation">
          <MenuIcon />
        </button>
      </div>
      {navOpen && (
        <div className="md:hidden p-4 bg-astronaut-100 rounded-lg mt-4 gap-4">
          <Nav handleChangeTheme={handleChangeTheme}/>
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
          <h3 className="grow text-astronaut-800 dark:text-mercury-100">Anthony J. Torres</h3>
        </div>
        <Nav handleChangeTheme={handleChangeTheme}/>
      </div>
    </header>
  );
}
