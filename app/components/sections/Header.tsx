"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import MenuIcon from "../icons/MenuIcon";
import Nav from "./Nav";
import ViewSwitch from "../ViewSwitch";

import { useTheme } from "@/lib/ThemeContext";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleNav = useCallback(() => {
    setNavOpen((prevNavOpen) => !prevNavOpen);
  }, []);

  const handleChangeTheme = () => {
    toggleTheme();
  };
  return (
    <header className="sticky top-0 z-50 w-full glass shadow-lg transition-all duration-500 py-4 px-4 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-3">
            <Image
              alt="Logo-Anthony"
              src={theme === "dark" ? "/lighLogo.png" : "/darkerLogo.png"}
              width={40}
              height={40}
              className="rounded-lg shadow-sm"
            />
            <h3 className="text-xl font-bold text-astronaut-950 dark:text-foreground">Anthony J. Torres</h3>
          </div>
          <button className="md:hidden p-2 text-primary" onClick={toggleNav} aria-label="Toggle navigation">
            <MenuIcon />
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <ViewSwitch />
          <div className="hidden md:block">
            <Nav handleChangeTheme={handleChangeTheme}/>
          </div>
        </div>
      </div>
      
      {navOpen && (
        <div className="md:hidden mt-4 p-4 glass rounded-xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          <Nav handleChangeTheme={handleChangeTheme}/>
        </div>
      )}
    </header>
  );
}
