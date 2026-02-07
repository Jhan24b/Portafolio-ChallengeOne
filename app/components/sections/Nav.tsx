

import Link from "next/link";
import Bulb from "../icons/Bulb";
import { useLanguage } from "@/lib/LanguageContext";

interface NavProps {
  handleChangeTheme: () => void;
}

export default function Nav({ handleChangeTheme }: NavProps) {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-sm font-bold tracking-[0.1em] uppercase">
      <Link href="#about" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:tracking-[0.15em]">{t("nav.about")}</Link>
      <Link href="#formacion" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:tracking-[0.15em]">{t("nav.formation")}</Link>
      <Link href="#experience" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:tracking-[0.15em]">{t("nav.projects")}</Link>
      <Link href="#contact" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:tracking-[0.15em]">{t("nav.contact")}</Link>
      
      <div className="flex items-center gap-4 border-l border-border/50 pl-6 ml-2">
        <button 
          onClick={handleChangeTheme}
          className="p-2 glass rounded-full hover:bg-primary/10 transition-all text-primary"
          aria-label="Toggle theme"
        >
          <Bulb className="w-5 h-5" />
        </button>
        <button 
          onClick={toggleLanguage}
          className="px-3 py-1 glass rounded-full hover:bg-primary/10 transition-all text-xs font-black tracking-tighter text-primary border border-primary/20"
        >
          {language === "en" ? "EN" : "ES"}
        </button>
      </div>
    </nav>
  );
}
