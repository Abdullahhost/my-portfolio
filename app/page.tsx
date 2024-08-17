
import Header from "./components/header/Header";

import Startup from "./components/startup/Startup";
import FadeToTop from "./components/startup/FadeToTop";
import SkillSection from "./components/SkillSection/SkillSection";
import AboutSection from "./components/about/AboutSection";
import WorkSection from "./components/work/WorkSection";
import Footer from "./components/footer/Footer";


export default function Home() {

  return (

    <>
      <Startup />
      <FadeToTop />
      <header className="w-full  bg-[#999D9E]">
        <Header />
      </header>

      <main>

        <AboutSection />
        <SkillSection />
        <WorkSection />

      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
