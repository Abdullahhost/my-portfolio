"use client";


import { useRef } from "react";
import { useRouter } from "next/navigation";

import { IconType } from "react-icons";
import Link from "next/link";
import { handleMouseMove, handleMouseOut } from "@/app/buttonEffect";


interface ISocialLinkProps {
    iconSize: number;
    icon: IconType;
    linkName: string;
    linkUrl: string;
}

const SocialLink: React.FC<ISocialLinkProps> = ({
    iconSize,
    icon: Icon,
    linkName,
    linkUrl,
}) => {

    const buttonRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)

    const router = useRouter();
    return (
        <div className="p-3 group border-2 cursor-pointer border-neutral-600 rounded-full relative" ref={buttonRef} onMouseMove={(e) => handleMouseMove(e, buttonRef, textRef)} onMouseOut={(e) => handleMouseOut(e, buttonRef, textRef)} onClick={() => router.push(linkUrl)} title={linkName} >
            <div className="" ref={textRef}>
                <Icon size={iconSize} />
            </div>
            <div className=" absolute bottom-0 left-[50%] opacity-0 bg-[#003cff] group-hover:opacity-100 transition-all duration-700 w-full h-full  group-hover:bottom-[-20px] translate-x-[-50%] group-hover:left-[50%] group-hover:w-3 group-hover:h-3 group-hover:bg-white rounded-full">

            </div>
        </div>
    );
};

export default SocialLink;
