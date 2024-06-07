"use client";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [mensaje, setMensaje] = useState("");

  function handleContact(ev) {
    ev.preventDefault();
  }

  return (
    <section id="contact">
      <div className="max-w-4xl mx-auto my-4 flex justify-center py-8">
        <div className="flex justify-center flex-col items-center gap-2 py-4 w-[480px] h-[240px] bg-white dark:bg-mercury-600 rounded-3xl">
          {/* <div className="md:flex gap-8"> */}
        <h3 className="text-3xl py-4 font-bold text-cerulean-blue-900 dark:text-astronaut-50">
            Contacto
          </h3>
          <p className="text-mercury-900 dark:text-astronaut-50">Puedes enviarme un correo a:</p>
          <p className="text-astronaut-700 dark:text-astronaut-100 font-bold text-xl">
            jhan24b@gmail.com
          </p>
          {/* <div className="flex flex-col justify-center max-w-96 mx-16">
            <h2 className="text-astronaut-700 text-[32px] font-medium">
              Necesitas un prospecto?
            </h2>
            <span className="text-[18px]">
              Complete el siguiente formulario y me pondré en contacto con usted
              lo antes posible.
            </span>
          </div>
          <div className="py-8">
            <form
              className="flex flex-col gap-4 mx-4"
              onSubmit={(ev) => handleContact(ev)}
            >
              <label>
                <span>Nombre</span>
                <input
                  required=""
                  placeholder="Nombre"
                  type="text"
                  class="input"
                  value={nombre}
                  onChange={(ev) => setNombre(ev.target.value)}
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  required=""
                  placeholder="Email"
                  type="email"
                  class="input"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                />
              </label>

              <label>
                <span>Celular</span>
                <input
                  required=""
                  placeholder="Celular"
                  type="tel"
                  class="input"
                  value={celular}
                  onChange={(ev) => setCelular(ev.target.value)}
                />
              </label>

              <label>
                Detalles
                <textarea
                  rows="5"
                  cols="40"
                  id="mensagem"
                  name="mensaje"
                  placeholder="Mensaje"
                  value={mensaje}
                  onChange={(ev) => setMensaje(ev.target.value)}
                ></textarea>
              </label>

              <div className="flex justify-center">
                <button className="bg-astronaut-100 border" type="submit">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
}
