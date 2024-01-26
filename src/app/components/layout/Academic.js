export default function Academic() {
  return (
    <section class="academic" id="formacion">
      <h2 class="academic__title">Formación académica</h2>
      <div class="academic__courses">
        <div class="academic__courses__box">
          <ul class="academic__courses__list">
            {/* <!-- Pon el logotipo de la institución de formación --> */}
            <li class="academic__courses__item__img">
              <img
                class="academic__courses__item__img__content"
                src="assets\ufpr_logo.png"
              />
            </li>
            <li class="academic__courses__item__title">
              <h4>Análisis de datos</h4>
            </li>
            <li class="academic__courses__item__subtitle">
              <p>2018 - UFPR</p>
            </li>
          </ul>
        </div>
        <div class="academic__courses__box">
          <ul class="academic__courses__list">
            {/* <!--Pon el logotipo de la institución de formación --> */}
            <li class="academic__courses__item__img">
              <img
                class="academic__courses__item__img__content"
                src="assets/aluraLogo.png"
              />
            </li>
            <li class="academic__courses__item__title">
              <h4>Especializacion Front-End</h4>
            </li>
            <li class="academic__courses__item__subtitle">
              <p>En curso - Alura</p>
            </li>
          </ul>
        </div>
        <div class="academic__courses__box">
          <ul class="academic__courses__list">
            {/* <!-- Pon el logotipo de la institución de formación --> */}
            <li class="academic__courses__item__img">
              <img
                class="academic__courses__item__img__content"
                src="assets/utpLogo.png"
              />
            </li>
            <li class="academic__courses__item__title">
              <h4>Licenciatura en Ingeniería de Sistemas e Informática</h4>
            </li>
            <li class="academic__courses__item__subtitle">
              <p>En curso - UTP</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
