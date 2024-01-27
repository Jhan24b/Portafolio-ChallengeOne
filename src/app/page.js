import Image from "next/image";
import About from "./components/layout/About";
import Experience from "./components/layout/Experience";
import Academic from "./components/layout/Academic";
import Contact from "./components/layout/Contact";

export default function Home() {
  return (
    <>
      <About />

      <Experience />

      {/* <section class="hobbies" id="hobbies">
        <h3 class="hobbies__title">Hobbies</h3>
        <div class="hobbies__line">
          <div class="hobbies__box">
            <ul class="hobbies__ul">
              <li class="hobbies__img">
                <img
                  class="hobbies__img__item"
                  src="assets\ciclismo_icon.png"
                />
              </li>
              <li class="hobbies__name">Ciclismo</li>
            </ul>
          </div>

          <div class="hobbies__box">
            <ul class="hobbies__ul">
              <li class="hobbies__img">
                {" "}
                <img src="assets\guitar_icon.png" alt="" />
              </li>
              <li class="hobbies__name">Tocar guitarra</li>
            </ul>
          </div>

          <div class="hobbies__box">
            <ul class="hobbies__ul">
              <li class="hobbies__img">
                {" "}
                <img src="assets\headphones_icon.png" alt="" />
              </li>
              <li class="hobbies__name">Oir música</li>
            </ul>
          </div>

          <div class="hobbies__box">
            <ul class="hobbies__ul">
              <li class="hobbies__img">
                <img src="assets\tv_icon.png" alt="" />
              </li>
              <li class="hobbies__name">Ver séries</li>
            </ul>
          </div>

          <div class="hobbies__box">
            <ul class="hobbies__ul">
              <li class="hobbies__img">
                {" "}
                <img src="assets\forkspoon_icon.png" alt="" />{" "}
              </li>
              <li class="hobbies__name">Cocinar</li>
            </ul>
          </div>

          <div class="hobbies__box">
            <ul class="hobbies__ul">
              <li class="hobbies__img">
                {" "}
                <img src="assets\camera_icon.png" alt="" />{" "}
              </li>
              <li class="hobbies__name">Tomar fotos</li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* <Academic />*/}
      
      <Contact />
    </>
  );
}
