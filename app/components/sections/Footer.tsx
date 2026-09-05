"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="glass border-t border-border/50 py-12 px-4 mt-20 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-xl font-bold text-primary">
            Anthony J. Torres
          </div>
          <p className="text-sm text-muted-foreground italic">
            &copy; 2026 {t("footer.rights")}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
            {t("footer.connect")}
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/Jhan24b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 glass rounded-full hover:bg-primary/10 transition-all hover:-translate-y-1"
            >
              <Github className="w-5 h-5 text-primary" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/anthony-torres-13591b1b5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 glass rounded-full hover:bg-primary/10 transition-all hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </Link>
          </div>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm text-muted-foreground">
            {t("footer.built_with")} <br />
            <span className="text-primary font-bold">
              AI/ML & Data Engineering
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
