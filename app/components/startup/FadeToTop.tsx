
"use client"


import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";
import ToggleBtn from "../button/ToggleBtn";
import ResponsiveBtn from "../responsiveBtn/ResponsiveBtn";

const FadeToTop = () => {



    const [stickyNav, setStickyNav] = useState<boolean>(false)
    const path = usePathname();

    useEffect(() => {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 150) {
                setStickyNav(true)
            } else {
                setStickyNav(false)
            }

        })

    }, [stickyNav, setStickyNav])
    return (
        <div style={{ zIndex: "999" }}
            className="fadeToTopAnimation transition-all 
                    fixed bottom-[-130%] left-[-25%] z-50 w-[150vw] h-screen
                  bg-black flex items-center justify-center" >

            <h3 className="animate-bounce text-5xl font-semibold text-white">
                {path === "/" ? "Home" : path.replace("/", "").toLocaleUpperCase()}
            </h3>

            {stickyNav && <>


                <div className={`border transition-all hidden lg:block`}>
                    <ToggleBtn />
                    <menu>
                        <ResponsiveBtn />
                    </menu>
                </div>
            </>}
        </div>
    )
}

export default FadeToTop


