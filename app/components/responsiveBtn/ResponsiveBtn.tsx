"use client"

import { usePathname } from "next/navigation"
import { useContext, useRef } from "react"

import { ThemeContext } from "@/app/context/ThemeContext";
import MenuItem from "../menuItem"
import { handleMouseMove, handleMouseOut } from "@/app/buttonEffect";
import LinkBox from "../linkBox/LinkBox";

const ResponsiveBtn = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const toggleRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null)
    const { state } = useContext(ThemeContext)

    const path = usePathname()

    return (
        <>
            <div title="❌ Click any where to close"
                style={{
                    transition: "all .7s cubic-bezier(.7, 0, .2, 1)",
                    transitionDelay: ".1s",
                    zIndex: "1000"
                }}

                className={`fixed top-[-25%] w-full md:w-2/4 h-[150vh] 
                    bg-black shadow-2xl flex flex-col items-center justify-center
                     
                    ${state.toggleMenu === true ? "right-0  rounded-none" :
                        "right-[-100%] md:right-[-50%] rounded-tl-[400%] rounded-bl-[400%]"} 
                   `} >


                <div className="w-full relative h-screen pt-[15vh]">

                    {/* ==================================== */}

                    <div ref={toggleRef}>
                        <div ref={divRef}
                            title="Toggle menu"
                            style={{ zIndex: "500" }}
                            className={`absolute top-[10px] right-[15px] md:top-[30px] md:right-[30px] w-[70px] bg-black overflow-hidden p-5 h-[70px] rounded-full flex flex-col items-center justify-center`}
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

                    {/* ==================================== */}
                    <div className="w-fit h-fit ml-9 lg:ml-12 border-neutral-500 border-b  text-neutral-500
                     uppercase font-semibold text-xs" >Navigation</div>
                    <div className="w-[85%] h-[50vh] mx-auto text-[50px] text-white
                                    flex flex-col justify-start items-start border-t
                                    border-neutral-500 border-b py-10  my-5">

                        <div className="sideBarMenu w-full flex justify-between items-center">
                            <MenuItem fontSize={50} linkName={"Home"} />

                            {path === "/" && <>
                                <span className="w-3 h-3 bg-white  rounded-full"></span>
                            </>}
                        </div>
                        {/* <div className="sideBarMenu w-full flex justify-between items-center">
                            <MenuItem fontSize={50} linkName={"Work"} />

                            {path === "/work" && <>
                                <span className="w-3 h-3 bg-white  rounded-full"></span>
                            </>}
                        </div> */}
                        <div className="sideBarMenu w-full flex justify-between items-center">
                            <MenuItem fontSize={50} linkName={"About"} />

                            {path === "/about" && <>
                                <span className="w-3 h-3 bg-white  rounded-full"></span>
                            </>}
                        </div>
                        <div className="sideBarMenu w-full flex justify-between items-center">

                            <MenuItem fontSize={50} linkName={"Contact"} />
                            {path === "/contuct" && <>
                                <span className="w-3 h-3 bg-white  rounded-full"></span>
                            </>}
                        </div>
                    </div>
                    <div className="w-fit h-fit  ml-9 lg:ml-12 mt-10 text-neutral-500 uppercase 
                    font-semibold text-xs  border-neutral-500 border-b " >Socials</div>

                    <div className="text-white px-8 flex gap-8 absolute bottom-5 left-5 py-4 md:py-8">
                        <LinkBox />

                    </div>
                </div>
            </div>
        </>
    )
}

export default ResponsiveBtn
