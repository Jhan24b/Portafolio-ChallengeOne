import Experience from "./components/layout/Experience";
import Academic from "./components/layout/Academic";
import Contact from "./components/layout/Contact";
import AboutMe from "./components/layout/AboutMe";
import Presentation from "./components/layout/Presentation";

export default function Home() {
  return (
    <>
      <Presentation />

      <Experience />

      <Academic />

      <AboutMe/>

      {/* <Contact /> */}
    </>
  );
}
