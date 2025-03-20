import React from "react";

import { motion } from "framer-motion";

import { useLanguage } from "../Context/LanguageContext";

import { FaDownload, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const AboutMe: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-40 bg-gray-100 dark:bg-gray-900">
      <div className="flex justify-center w-[65%] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-2"
        >
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img
              src="/public/profile.png"
              alt="Profile"
              className="rounded-3xl w-64 h-64 object-cover mx-auto"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left md:pl-8">
            <h2 className="text-2xl font-bold text-left text-blue-900 dark:text-gray-100">
              {language === "es"
                ? "Hola, soy Anthony J. Torres,"
                : "Hi there, I'm Anthony J. Torres,"}
            </h2>
            <h2 className="text-2xl font-bold text-left mb-6 text-blue-900 dark:text-gray-100">
              {language === "es"
                ? "Full Stack (MERN) - Software Engineer"
                : "Full Stack (MERN) - Software Engineer"}
            </h2>
            <p className="text-lg mb-4">
              {language === "es"
                ? "¡Saludos! Soy un estudiante apasionado de Ingeniería de Sistemas e Informática en la Universidad Tecnológica del Perú. Mi fascinación por la tecnología y la programación me ha llevado a especializarme en el desarrollo de software."
                : "Greetings! I am a passionate student of Systems Engineering and Computer Science at the Technological University of Peru. My fascination for technology and programming has led me to specialize in software development."}
            </p>
            <p className="text-lg">
              {language === "es"
                ? "Siempre estoy buscando nuevos desafíos y oportunidades para aprender y crecer en mi carrera."
                : "I am always looking for new challenges and opportunities to learn and grow in my career."}
            </p>
            <div className="flex gap-8 mx-4 mt-8 justify-center items-center flex-wrap">
              <a
                href="https://github.com/Jhan24b"
                target="_blank"
                className="linkSocial hover:text-indigo-50"
              >
                <FaGithub className="w-6 h-6" />
                Github
              </a>

              <a
                href="https://www.linkedin.com/in/anthony-torres-13591b1b5/"
                target="_blank"
                className="linkSocial"
              >
                <FaLinkedin className="w-6 h-6" />
                Linkedin
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                className="linkSocial"
              >
                <FaInstagram className="w-6 h-6" />
                Instagram
              </a>

              <a
                href="https://drive.google.com/file/d/1iUK3s8E9MtCxCvRxYM6Kau5sjUr0vUIK/view?usp=sharing"
                target="_blank"
                className="linkSocial"
              >
                <FaDownload className="w-6 h-6" />
                Currículo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
