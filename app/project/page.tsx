

import React from 'react'
import FadeToTop from '../components/startup/FadeToTop'
import Logo from '../components/header/logo/Logo'
import ResponsiveBtn from '../components/responsiveBtn/ResponsiveBtn'
import MenuItem from '../components/menuItem'
import ToggleBtn from '../components/button/ToggleBtn'
import ProjectBanner from './components/ProjectBanner'
import ProjectShowSection from './components/ProjectShowSection'

const page = () => {
    return (
        <div>
            <header className="w-full relative text-black">

                <FadeToTop />
                <div className="w-full p-4 flex justify-between text-white">
                    <Logo />
                    <nav>
                        <menu>
                            <ResponsiveBtn />
                            <ul className="hidden lg:flex items-center gap-10">
                                <MenuItem linkName={"Home"} />
                                <MenuItem linkName={"About"} />
                                <MenuItem linkName={"Project"} />
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

                <ProjectBanner />
                <ProjectShowSection />
            </main>
        </div>
    )
}

export default page
