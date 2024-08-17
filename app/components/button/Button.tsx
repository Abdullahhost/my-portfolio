"use client"

import { handleMouseMove, handleMouseOut } from "@/app/buttonEffect";
import Link from "next/link"
import { useRef } from "react";

interface IPorps {
  content?: string;
  onClick?: () => void;
  rounded?: boolean
  widthHeight?: number;

  fullWidth?: boolean;
  fontSize?: number;
  background?: string;
  contact?: boolean;
  contactAddress?: string;

}

const Button: React.FC<IPorps> = ({
  content,
  rounded,
  widthHeight,
  fullWidth,
  onClick,
  fontSize,
  background,
  contact,
  contactAddress
}) => {

  const divRef = useRef<HTMLAnchorElement>(null);
  const textRef = useRef<HTMLAnchorElement>(null)




  return (
    <>

      <div onClick={onClick} className={`${fullWidth ? "w-full" : "w-fit"}`}>
        <Link href={`${contact ? contactAddress : `/${content?.toLowerCase()}`}`} ref={divRef}
          style={{ width: `${widthHeight}px`, height: `${widthHeight}px` }}
          onMouseMove={(e) => handleMouseMove(e, divRef, textRef)}
          onMouseOut={(e) => handleMouseOut(e, divRef, textRef)}
          className={`buttonWrapper ${rounded ? "rounded-full" : " rounded-[20px/45px]"} relative overflow-hidden `}

        >

          <button style={{ background: background }} className={`button ${rounded ? "rounded-full" : "rounded-[20px/45px]"}  border border-neutral-600 border-l-2 border-r-2
             grid place-items-center w-full h-full p-[10px]  md:p-[20px]
              `}>
            <span style={{ fontSize: `${fontSize}px` }} ref={textRef} className={`inline-block relative z-40 pointer-events-none`}>
              {content === "Contact" ? "Get in touch" : content}
            </span>
          </button>

          <div className="absolute top-0 left-0 w-full h-full">
            <span className={`test  ${rounded ? "before:rounded-full after:rounded-full" : "after:rounded-[50px] before:rounded-[20px/45px]"} w-full h-full`}></span>
          </div>

        </Link>
      </div>

    </>
  )
}

export default Button
