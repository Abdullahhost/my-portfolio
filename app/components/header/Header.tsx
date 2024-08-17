"use client"
import ResponsiveBtn from "../responsiveBtn/ResponsiveBtn"
import ToggleBtn from "../button/ToggleBtn"
import Banner from "../banner/Banner"
import MenuItem from "../menuItem"
import Logo from "./logo/Logo"


const Header = () => {


  return (
    <div>
      <div className="w-full p-4 flex justify-between  text-white">
        <Logo />

        <nav>
          <menu className="relative">
            <ResponsiveBtn />

            <ul className="hidden lg:flex items-center gap-10 text-white">
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
      <Banner />
    </div>
  )
}

export default Header
