import Experience from "./components/sections/Experience";
import Academic from "./components/sections/Academic";
import Contact from "./components/sections/Contact";
import AboutMe from "./components/sections/AboutMe";
import Presentation from "./components/sections/Presentation";

export default function Home() {
  return (
    <>
      <Presentation />

      <AboutMe />

      <Experience />

      <Academic />

      {/* <Contact /> */}
    </>
  );
}
