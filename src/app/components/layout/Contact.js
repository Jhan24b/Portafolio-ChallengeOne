import Image from "next/image";

export default function Contact() {
  return (
    <section class="max-w-4xl mx-auto my-16" id="contacto">
      <div className="flex gap-8">
        <div className="flex justify-center items-center">
          <Image width={360} height={450} src="/contact_image.png" />
        </div>
        <div className="py-8">
          <form className="flex flex-col gap-4">
            <p>Necesitas un prospecto?</p>
            <p>
              Complete el siguiente formulario y me pondré en contacto con usted
              lo antes posible.
            </p>

            <label>
              <input required="" placeholder="" type="text" class="input" />
              <span>Nombre</span>
            </label>

            <label>
              <input required="" placeholder="" type="email" class="input" />
              <span>Email</span>
            </label>

            <label>
              <input required="" placeholder="" type="text" class="input" />
              <span>Celular</span>
            </label>

            <textarea
              rows="5"
              cols="40"
              id="mensagem"
              name="mensaje"
              placeholder="Mensaje"
            ></textarea>

            <div className="flex justify-center">
              <button class="submit" type="submit">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
