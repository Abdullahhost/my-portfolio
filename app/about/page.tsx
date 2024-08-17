
import ResponsiveBtn from "../components/responsiveBtn/ResponsiveBtn"
import FadeToTop from "../components/startup/FadeToTop"
import ToggleBtn from "../components/button/ToggleBtn"
import Logo from "../components/header/logo/Logo"
import MenuItem from "../components/menuItem"


import Footer from "../components/footer/Footer"
import AboutBanner from "../components/about/AboutBanner"
import AboutMe from "../components/about/AboutMe"
import AboutMyServices from "../components/about/AboutMyServices"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "About - Page",
  description: "I help companies worldwide with bespoke solutions, continually pushing the boundaries of quality with each project",
};



const About = () => {

  return (
    <>

      <header className="w-full relative text-black bg-white">

        <FadeToTop />
        <div className="w-full p-4 flex justify-between text-black">
          <Logo />
          <nav>
            <menu>
              <ResponsiveBtn />
              <ul className="hidden lg:flex items-center gap-10">
                <MenuItem linkName={"Home"} />
                <MenuItem linkName={"About"} />
                <MenuItem linkName={"Contact"} />
              </ul>

              <div className="block lg:hidden">
                <ToggleBtn />
              </div>

            </menu>
          </nav>
        </div>

      </header>

      <main>
        <AboutBanner />
        <AboutMe />
        <AboutMyServices />
      </main>

      <footer>
        <Footer />
      </footer>

    </>
  )
}

export default About
