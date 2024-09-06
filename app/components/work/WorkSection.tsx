"use client"


import { useEffect, useRef, useState } from "react"
import Link from "next/link";
import Image from "next/image";

import gsap from "gsap";

import { projectList } from "@/data/pData";

const WorkSection = () => {

  // ============== initial value
  const [proJectData, setProjectData] = useState({
    name: "",
    image: "",
    backgroundLayout: ""
  })

  const mainRef = useRef<HTMLDivElement>(null)
  const circle = useRef<HTMLDivElement>(null);

  const mouse = useRef({
    x: 0,
    y: 0
  })

  const delayedMouse = useRef({
    x: 0,
    y: 0
  })


  // ============ CFunction

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const manageMouseMove = (e: { clientX: number; clientY: number }) => {
    const { clientX, clientY } = e
    mouse.current = {
      x: clientX,
      y: clientY
    }
  }

  const moveCircle = (x: number, y: number) => {

    if (circle.current) {
      gsap.set(circle.current!, { x: x, y: y, xPercent: -50, yPercent: -50 })
    }


  }

  const animate = () => {
    const { x, y } = delayedMouse.current

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.050),
      y: lerp(y, mouse.current.y, 0.050)
    }

    moveCircle(delayedMouse.current.x, delayedMouse.current.y)
    window.requestAnimationFrame(animate)
  }

  const testRemoveMove = () => {
    gsap.to(circle.current!, { width: 0, height: 0, scale: 0 })

  }
  const testMove = () => {
    let mm = gsap.matchMedia();
    gsap.fromTo(circle.current!, { width: 0, height: 0, scale: 0 }, { width: 350, height: 300, scale: 1 })

    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(circle.current!, { width: 0, height: 0 }, { width: 350, height: 300 })
    })

    mm.add("(min-width: 1024px)", () => {
      gsap.fromTo(circle.current!, { width: 0, height: 0 }, { width: 450, height: 400 })

    })

  }

  const handleMouseEnter = (data: string) => {
    projectList.filter((ele) => {

      if (ele.pName.toLowerCase() === data.toLowerCase()) {

        setProjectData({
          name: ele.pName,
          image: ele.pImage,
          backgroundLayout: ele.backgroundLayout
        })

      } else {
        return
      }
    })
  }


  useEffect(() => {

    animate()
    mainRef.current!.addEventListener("mouseenter", testMove)
    mainRef.current!.addEventListener("mouseleave", testRemoveMove)
    mainRef.current!.addEventListener("mousemove", manageMouseMove)

    return () => {
      window.removeEventListener("mousemove", manageMouseMove)
      window.removeEventListener("mouseenter", testMove)
      window.removeEventListener("mouseleave", testRemoveMove)
    }
  }, []);



  return (
    <div
      className="px-0 bg-white py-6  md:px-6 lg:px-12 md:py-14">

      <div ref={mainRef} className="workPreview bg-white px-0 py-12 md:px-20 md:py-14 h-fit relative" >

        <div ref={circle} className="border overflow-hidden pointer-events-none z-50 fixed top-0 left-0 bg-neutral-500 w-0 h-0 flex items-center justify-center">

          <div style={{ background: proJectData.backgroundLayout }} className="afterDiv relative w-full h-full flex flex-col items-center justify-center" >
            <h2 className="text-center p-4  bg-[#fff5] text-xl uppercase font-semibold">{proJectData.name}</h2>
            <Image
              width={500}
              height={500}
              alt={proJectData.name}
              src={proJectData.image}
            />
          </div>
        </div>

        {projectList?.map((ele) => {

          const { PCategory, pLink, pName } = ele

          return (<Link key={pName} href={pLink} onMouseEnter={() => handleMouseEnter(pName)} className="flex group items-center justify-between px-6 py-12 md:px-12 md:py-16 cursor-pointer hover:bg-neutral-50 hover:text-black transition-all border-b hover:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-neutral-700 font-bold group-hover:animate-pulse transition-all">{pName}</h2>
            <h3 className="text-sm md:text-lg">{PCategory}</h3>
          </Link>)
        })}

      </div>
    </div>
  )
}

export default WorkSection
