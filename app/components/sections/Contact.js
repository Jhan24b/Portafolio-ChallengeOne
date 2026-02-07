"use client";
import React from "react";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
          
          <h2 className="text-4xl font-bold text-primary mb-4">¿Tienes un proyecto en mente?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Estoy disponible para nuevas oportunidades y colaboraciones.
          </p>
          
          <div className="inline-flex flex-col items-center gap-6 p-8 glass rounded-2xl border border-primary/20 shadow-xl hover:shadow-primary/10 transition-all duration-500">
            <div className="p-4 bg-primary/10 rounded-full animate-bounce">
              <Mail className="w-10 h-10 text-primary" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Enviame un correo</span>
              <a 
                href="mailto:jhan24b@gmail.com" 
                className="text-2xl md:text-3xl font-bold text-primary hover:text-cerulean-blue-600 transition-colors"
              >
                jhan24b@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-12 flex justify-center gap-4">
             <a 
              href="mailto:jhan24b@gmail.com"
              className="group flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/80 transition-all hover:scale-105"
            >
              <span>Trabajemos juntos</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
