"use client"

import Link from "next/link";
import { useRef } from "react";
import { usePathname } from "next/navigation";

import { IProps } from "@/app/type";
import { handleMouseMove, handleMouseOut } from "@/app/buttonEffect"




const MenuItem: React.FC<IProps> = ({ linkName, fontSize, onClick }) => {

    const div1Ref = useRef<HTMLAnchorElement>(null);
    const text1Ref = useRef<HTMLSpanElement>(null)


    const contvertToRightPath = linkName.toLocaleLowerCase() === "home" ? "/" : linkName.toLocaleLowerCase();

    const path = usePathname();
    const actualPath = path.replace("/", "")

    return (
        <li onClick={onClick} className="w-fit">

            <Link title={`Go to ${linkName} page`}
                href={contvertToRightPath} ref={div1Ref} scroll={false}

                onMouseMove={(e) => handleMouseMove(e, div1Ref, text1Ref)}
                onMouseOut={(e) => handleMouseOut(e, div1Ref, text1Ref)}
                className="grid place-items-center pointer-events-auto" >

                <button className="grid place-items-center">
                    <span
                        style={{ fontSize: `${fontSize}px`, lineHeight: `${fontSize! + 10}px` }}
                        ref={text1Ref}
                        className={`inline-block z-50 px-0
                                    relative parrent lg:text-[1.15vw] 
                        ${fontSize ? "py-0 leading-10" : "py-4"}`} >

                        {linkName}

                        {fontSize ? <>
                            <span className={`linkEffectSide `}></span> </>

                            :
                            <>
                                <span style={{
                                    transform: `${actualPath === contvertToRightPath || linkName.toLowerCase() === "home" &&
                                        path === "/" ? "scale(1)" : ""}`
                                }}

                                    className="linkEffect"></span>

                            </>}
                    </span>
                </button>
            </Link>
        </li>
    )
}

export default MenuItem
