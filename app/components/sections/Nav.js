import Link from "next/link";
import Bulb from "../icons/Bulb";

export default function Nav({ handleChangeTheme }) {
  return (
    <nav className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-base font-semibold text-muted-foreground">
      <Link href="#about" className="hover:text-primary transition-colors">Sobre mi</Link>
      <Link href="#formacion" className="hover:text-primary transition-colors">Formación</Link>
      <Link href="#experience" className="hover:text-primary transition-colors">Proyectos</Link>
      <Link href="#contact" className="hover:text-primary transition-colors">Contacto</Link>
      
      <div className="flex items-center gap-4 border-l border-border/50 pl-6 ml-2">
        <button 
          onClick={handleChangeTheme}
          className="p-2 glass rounded-full hover:bg-primary/10 transition-all text-primary"
          aria-label="Toggle theme"
        >
          <Bulb className="w-5 h-5" />
        </button>
        <span className="text-xs font-bold tracking-tighter">ESP</span>
      </div>
    </nav>
  );
}
