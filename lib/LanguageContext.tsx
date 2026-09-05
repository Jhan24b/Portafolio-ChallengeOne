"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { LanguageContextType, LanguageType } from "@/types";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<LanguageType, Record<string, string>> = {
  en: {
    "nav.about": "About",
    "nav.formation": "Formation",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "contact.title": "Got a project in mind?",
    "contact.subtitle": "I'm available for new opportunities and collaborations.",
    "contact.email_label": "Send me an email",
    "contact.button": "Let's work together",
    "academic.title": "Academic Formation",
    "academic.degrees": "Degrees",
    "academic.specializations": "Specializations",
    "experience.title": "Experience & Projects",
    "experience.desktop": "Desktop Applications",
    "experience.featured": "Featured Projects",
    "experience.filter.all": "All",
    "experience.filter.frontend": "Front End",
    "experience.filter.fullstack": "Full Stack",
    "footer.rights": "All rights reserved",
    "footer.connect": "Connect",
    "footer.built_with": "Built with Passion",
    "view_switch.software": "Software Engineer",
    "view_switch.data": "Data Engineer",
    "view_switch.ai": "AI/ML Engineer",
    "aboutme.title": "About Me",
    "skills.title": "Technical Arsenal",
    "card.deploy_status": "Deployment Status",
    "card.active_node": "Active Node",
    "card.tech_ecosystem": "Tech Ecosystem",
    "card.launch_demo": "Launch Demo",
    "card.source_code": "Source Code",
    "card.certified": "Certified Achievement",
    "card.period": "Period",
    "about.years_exp": "Years Exp.",
    "about.projects": "Projects",
    "presentation.greeting": "Hi, I'm",
    "presentation.bio": "Systems Engineer and self-taught developer passionate about technology, innovation, and building impactful digital solutions. Always exploring, always learning.",
  },
  es: {
    "nav.about": "Sobre mi",
    "nav.formation": "Formación",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "contact.title": "¿Tienes un proyecto en mente?",
    "contact.subtitle": "Estoy disponible para nuevas oportunidades y colaboraciones.",
    "contact.email_label": "Enviame un correo",
    "contact.button": "Trabajemos juntos",
    "academic.title": "Formación Académica",
    "academic.degrees": "Grados",
    "academic.specializations": "Especializaciones",
    "experience.title": "Experiencia y Proyectos",
    "experience.desktop": "Aplicaciones de Escritorio",
    "experience.featured": "Proyectos Destacados",
    "experience.filter.all": "Todos",
    "experience.filter.frontend": "Front End",
    "experience.filter.fullstack": "Full Stack",
    "footer.rights": "Todos los derechos reservados",
    "footer.connect": "Conectar",
    "footer.built_with": "Construido con Pasión",
    "view_switch.software": "Ingeniero de Software",
    "view_switch.data": "Ingeniero de Datos",
    "view_switch.ai": "Ingeniero en IA/ML",
    "aboutme.title": "Sobre Mí",
    "skills.title": "Arsenal Técnico",
    "card.deploy_status": "Estado de Despliegue",
    "card.active_node": "Nodo Activo",
    "card.tech_ecosystem": "Ecosistema Tech",
    "card.launch_demo": "Ver Demo",
    "card.source_code": "Código Fuente",
    "card.certified": "Logro Certificado",
    "card.period": "Período",
    "about.years_exp": "Años Exp.",
    "about.projects": "Proyectos",
    "presentation.greeting": "Hola, soy",
    "presentation.bio": "Ingeniero de Sistemas y desarrollador autodidacta, apasionado por la tecnología, la innovación y la creación de soluciones digitales con impacto real. Siempre explorando, siempre aprendiendo.",
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageType>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
