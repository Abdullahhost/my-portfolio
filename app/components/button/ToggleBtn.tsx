"use client"

import { useContext, useEffect, useRef } from "react"
import { ThemeContext } from "@/app/context/ThemeContext"
import { handleMouseMove, handleMouseOut } from "@/app/buttonEffect";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const ToggleBtn = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const toggleRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null)
    const { state, dispatch } = useContext(ThemeContext)

    useEffect(() => {
        let handler = (e: any) => {
            if (!toggleRef.current!?.contains(e.target)) {
                if (state.toggleMenu === true) {
                    dispatch({ type: 'TOGGLE_MENU' })
                }
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });

    useGSAP(() => {
        gsap.to(".sideBarMenu", {
            opacity: 1, ease: "power1.in", delay: 1
        })
    }, [])

    return (
        <div ref={toggleRef}>
            <div ref={divRef}
                title="Toggle menu"
                onClick={() => dispatch({ type: "TOGGLE_MENU" })}
                style={{ zIndex: "800" }}
                className={`fixed top-[10px] right-[15px] md:top-[30px] md:right-[30px] w-[70px] bg-black overflow-hidden p-5 h-[70px] rounded-full flex flex-col items-center justify-center`}
                onMouseMove={(e) => handleMouseMove(e, divRef, contentRef)}
                onMouseOut={(e) => handleMouseOut(e, divRef, contentRef)}
            >

                <div className={`z-30 pointer-events-none select-none w-full h-full flex flex-col items-center justify-center
                 ${state.toggleMenu === true ? "gap-0" : "gap-[.4rem]"} `} ref={contentRef}>

                    <span className={`w-full h-[.12rem]  bg-white transition-all 
                        ${state.toggleMenu === true ? "w-4/6 rotate-[45deg]" : "rotate-0"}`}>
                    </span>

                    <span className={`w-full h-[.12rem]  bg-white transition-all  
                        ${state.toggleMenu === true ? "w-4/6 -rotate-[45deg]" : "rotate-0"}`}>
                    </span>
                </div>

                <div className="absolute top-0 left-0 w-full h-full">
                    <span className={`test before:rounded-full after:rounded-full w-full h-full`}></span>
                </div>
            </div>
        </div>
    )
}

export default ToggleBtn
