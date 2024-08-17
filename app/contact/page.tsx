

import ToggleBtn from "../components/button/ToggleBtn"
import Logo from "../components/header/logo/Logo"
import MenuItem from "../components/menuItem"
import ResponsiveBtn from "../components/responsiveBtn/ResponsiveBtn"
import FadeToTop from "../components/startup/FadeToTop"
import MailingForm from "../components/form/MailingForm"


import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact - Page",
  description: "Let’s build your digital success together.",
};


const Contact = () => {

  return (
    <>
      <header className="text-white">
        <FadeToTop />

        <div className="w-full pt-4 lg:p-4 flex justify-between">
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
      </header >
      <main className="w-full px-4 py-12 md:px-24 md:py-24 mt-16 lg:mt-12 ">
        <div className=" w-full lg:w-3/4">
          <h2 className="text-neutral-50 text-[7vw] md:text-[6vw] lg:text-[4.5vw] first-letter:text-[#3D42FB] first-letter:font-bold inline-block">Let’s build your digital success together. </h2>
          <br />
          <small className="text-[3vw] md:text-[2vw] lg:text-[1.4vw] text-neutral-400 block w-full lg:w-4/6 mt-4">Reach out to discuss your project needs. I’m here to help with innovative web solutions tailored to your vision.</small>
        </div>

        <MailingForm />

      </main>
    </>
  )
}

export default Contact
