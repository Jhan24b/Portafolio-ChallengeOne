import { ReactNode } from "react";

export type ViewType = "softwareEngineer" | "dataEngineer" | "aiMLEngineer";
export type LanguageType = "en" | "es";

export interface Project {
  title: string;
  subtitle?: string;
  role?: string;
  tech: React.ComponentType<{ className?: string }>[];
  img: string;
  urlRepository?: string;
  urlProduction?: string;
  description?: string;
  Arquitectura?: string;
  status?: string;
  caracteristicas?: string[];
}

export interface Skill {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
  level?: string;
  years?: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  projects: Project[];
  desktopProjects: Project[];
  skills: SkillCategory[];
}

export interface ConfigType {
  en: {
    softwareEngineer: ProfileData;
    dataEngineer: ProfileData;
    aiMLEngineer: ProfileData;
  };
  es: {
    softwareEngineer: ProfileData;
    dataEngineer: ProfileData;
    aiMLEngineer: ProfileData;
  };
}

export interface ViewContextType {
  view: ViewType;
  setView: (view: ViewType) => void;
  toggleView: () => void;
}

export interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

export interface IconProps {
  className?: string;
}

export interface Grade {
  title: string;
  subtitle: string;
  duration: string;
  img: string;
}
