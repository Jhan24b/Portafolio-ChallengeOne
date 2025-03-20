import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="p-6 bg-navy text-white flex justify-between">
      <div className="flex gap-16 items-center justify-center w-full">
        <a
          href="https://github.com/Jhan24b"
          target="_blank"
          className="linkSocial hover:text-indigo-50"
        >
          <FaGithub className="w-8 h-8" />
        </a>

        <a
          href="https://www.linkedin.com/in/anthony-torres-13591b1b5/"
          target="_blank"
          className="linkSocial"
        >
          <FaLinkedin className="w-8 h-8" />
        </a>
      </div>
      <div className="w-full text-center"><p>
        {language === "es"
          ? "© 2025 Mi Portafolio. Todos los derechos reservados."
          : "© 2025 My Portfolio. All rights reserved."}
      </p></div>
      <div className="flex gap-16 w-full justify-center items-center">
        <a
          href="https://www.instagram.com"
          target="_blank"
          className="linkSocial"
        >
          <FaInstagram className="w-8 h-8" />
        </a>

        <a
          href="https://drive.google.com/file/d/1iUK3s8E9MtCxCvRxYM6Kau5sjUr0vUIK/view?usp=sharing"
          target="_blank"
          className="linkSocial"
        >
          <FaInstagram className="w-8 h-8" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
