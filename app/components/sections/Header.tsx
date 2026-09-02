"use client";

import Image from "next/image";
import { useTheme } from "@/lib/ThemeContext";
import { useLanguage } from "@/lib/LanguageContext";
import ViewSwitch from "../ViewSwitch";
import { Sun, Moon } from "lucide-react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full glass shadow-md transition-all duration-500 py-3 px-4 font-sans h-18 md:h-19 flex items-center">
      <div className="w-full flex items-center justify-between gap-2 max-w-7xl mx-auto">
        {/* Left: Logo and Name */}
        <div className="flex items-center gap-3">
          <Image
            alt="Logo-Anthony"
            src={theme === "dark" ? "/lighLogo.png" : "/darkerLogo.png"}
            width={36}
            height={36}
            className="rounded-lg shadow-sm"
          />
          <span className="text-base sm:text-lg font-bold text-astronaut-950 dark:text-foreground hidden md:block whitespace-nowrap">
            Anthony J. Torres
          </span>
          <span className="text-sm font-bold text-astronaut-950 dark:text-foreground hidden sm:block md:hidden whitespace-nowrap">
            Anthony T.
          </span>
        </div>

        {/* Center: ViewSwitch */}
        <div className="flex-1 flex justify-center">
          <ViewSwitch />
        </div>

        {/* Right: Controls (Language and Theme) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switch */}
          <button
            onClick={toggleLanguage}
            className="w-9 h-9 flex items-center justify-center glass rounded-full hover:bg-primary/10 transition-all text-xs font-black text-primary border border-primary/20 hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Toggle language"
          >
            {language === "en" ? "EN" : "ES"}
          </button>

          {/* Theme Switch */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center glass rounded-full hover:bg-primary/10 transition-all text-primary hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4 text-astronaut-700 dark:text-astronaut-300" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
