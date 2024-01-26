export default function Contact() {
  return (
    <section class="formcontato" id="contacto">
      <div>
        <div>
          <img src="assets\contact_image.png" />
        </div>
        <div>
          <form>
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

            <button class="submit" type="submit">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
