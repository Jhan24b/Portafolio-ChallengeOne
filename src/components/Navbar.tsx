import React from "react";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../Context/LanguageContext";

const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="p-4 bg-gray-200 text-blue-950 dark:bg-navy dark:text-white">
      <div className="container mx-auto flex justify-between items-center w-[80%] py-2">
        <div className="flex items-center gap-2">
          {theme === "light" ? (
            <img src="/public/logo.png" alt="Logo" className="w-12 h-12" />
          ) : (
            <img src="/public/lighLogo.png" alt="Logo" className="w-12 h-12" />
          )}
          <h1 className="text-xl font-bold">Anthony J. Torres</h1>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-6">
            <a className="navLink" href="#about">
              {language === "es" ? "Sobre Mí" : "About Me"}
            </a>
            <a className="navLink" href="#degrees">
              {language === "es" ? "Grados Académicos" : "Academic Degrees"}
            </a>
            <a className="navLink" href="#projects">
              {language === "es" ? "Proyectos" : "Projects"}
            </a>
            <a className="navLink" href="#contact">
              {language === "es" ? "Contacto" : "Contact"}
            </a>
          </div>

          <div className="flex space-x-4">
            <button onClick={toggleLanguage}>
              {language === "es" ? "EN" : "ES"}
            </button>
            <button onClick={toggleTheme}>
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
