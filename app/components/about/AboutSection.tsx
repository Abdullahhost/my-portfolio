"use client"

import { useRef } from "react"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react"
import Button from "../button/Button";



gsap.registerPlugin(ScrollTrigger)


const AboutSection = () => {

    const aboutRef = useRef<HTMLHeadingElement>(null)
    let text: string = "I’m a web developer dedicated to creating dynamic, user-friendly websites tailored to your unique business needs."
    let stringToArr = text.split(" ");


    useGSAP(() => {
        gsap.fromTo(".allSpanText", { y: 50, opacity: 0, color: "#fff" }, {
            y: 0, opacity: 1, color: "#000", stagger: 0.01, ease: "back.inOut", duration: 1.1, scrollTrigger: {
                trigger: ".allSpanText",
                start: "top 100%",
                toggleActions: 'play play play reverse'
            }
        })

        gsap.fromTo(".posRightTo", { translateY: 0 }, {
            translateY: -150, ease: "power1.in", delay: .2, scrollTrigger: {
                trigger: ".posRightTo",
                start: "top 100%",
                scrub: 1,
                toggleActions: 'play play play reverse'
            }
        })

        gsap.fromTo(".bannerImg", { translateY: -50 }, {
            translateY: 150, delay: 0.1,
            ease: "power1.in",
            scrollTrigger: {
                trigger: ".bannerImg",
                start: "top 100%",
                scrub: 1,
                toggleActions: 'play play play reverse'
            }
        })
    }, [])


    return (
        <>

            <div ref={aboutRef} className="aboutContainer relative">
                <h2 style={{ pointerEvents: 'all', wordSpacing: ".1rem" }} className="relative min-w-[350px] md:min-w-[450px] w-[55%] testAboutSection overflow-hidden">

                    {stringToArr.map((span: string, index: number) => {
                        return <span key={index} className="inline-block allSpanText text-black text-[23px] md:text[1.9vw] lg:text-[2.2vw]">{`${span}`}&nbsp;</span>

                    })
                    }
                </h2>

                <h4 style={{ wordSpacing: "4px" }} className="text-black tracking-wide w-[255px] md:w-[300px] lg:w-[30%] lg:text-[1.22vw]">
                    My passion for design, coding, and interactive experiences uniquely positions me in the web design world, allowing me to create innovative and engaging digital solutions that stand out.

                </h4>



                < div className="inline-block bg-neutral-200 w-[70%] h-[1px] mt-20">
                    <div className="posRightTo absolute bottom-0 translate-y-[-50%] right-[2%] lg:right-[25%]">
                        <Button content="About" rounded={true} widthHeight={150} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection
