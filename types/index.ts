import { ReactNode } from "react";

export type ViewType = "softwareEngineer" | "dataEngineer";
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

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  projects: Project[];
  desktopProjects: Project[];
}

export interface ConfigType {
  en: {
    softwareEngineer: ProfileData;
    dataEngineer: ProfileData;
  };
  es: {
    softwareEngineer: ProfileData;
    dataEngineer: ProfileData;
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
