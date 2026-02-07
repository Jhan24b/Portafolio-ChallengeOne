"use client";

import Image from "next/image";
import Link from "next/link";
import Download from "../icons/Download";
import Linkedin from "../icons/Linkedin";
import Github from "../icons/Github";
import Instagram from "../icons/Instagram";
import { useView } from "@/lib/ViewContext";
import { CONFIG } from "@/lib/config";

export default function Presentation() {
  const { view } = useView();
  const data = CONFIG[view];

  return (
    <section id="about" className="overflow-hidden">
      <div className="max-w-4xl md:mx-auto min-h-[60vh] flex items-center">
        <div className="about md:grid grid-cols-2 gap-10 items-center w-full">
          <div className="flex justify-center relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <Image
              className="relative z-10 rounded-2xl shadow-2xl border-2 border-white/10"
              src="/profile.png"
              alt="profile"
              width="250"
              height="250"
            />
          </div>
          <div className="mt-8 md:mt-0 text-center md:text-left">
            <h1 className="font-bold text-primary dark:text-white mb-6 text-3xl md:text-5xl leading-tight">
              Hola, soy {data.name}, <br />
              <span className="text-cerulean-blue-500">{data.title}</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed transition-all duration-700">
              {data.bio}
            </p>
            <div className="flex gap-6 mt-8 justify-center md:justify-start items-center flex-wrap">
              <Link href="https://github.com/Jhan24b" target="_blank" className="hover:scale-110 transition-transform">
                <Github className="w-8 h-8" />
                <span className="text-sm">Github</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/anthony-torres-13591b1b5/"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <Linkedin className="w-8 h-8" />
                <span className="text-sm">Linkedin</span>
              </Link>

              <Link
                href="https://drive.google.com/file/d/1iUK3s8E9MtCxCvRxYM6Kau5sjUr0vUIK/view?usp=sharing"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <Download className="w-7 h-7" />
                <span className="text-sm">CV</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
