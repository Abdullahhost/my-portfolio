"use client"

import { useRef } from "react"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react"
import Button from "../button/Button";
import Image from "next/image";
import Link from "next/link";



gsap.registerPlugin(ScrollTrigger)


const AboutSection = () => {

    const aboutRef = useRef<HTMLHeadingElement>(null)
    let text: string = ""
    let stringToArr = text.split(" ");

    useGSAP(() => {


        gsap.fromTo(".posRightTo", { translateX: 0, translateY: 0 }, {
            translateX: 150, translateY: 100, ease: "power1.in", delay: .2, scrollTrigger: {
                trigger: ".posRightTo",
                start: "top 100%",
                scrub: 1,
                toggleActions: 'play play play reverse'
            }
        })

        // gsap.fromTo(".bannerImg", { translateY: 0 }, {
        //     translateY: 200, delay: 0.1,
        //     ease: "power1.in",
        //     scrollTrigger: {
        //         trigger: ".bannerImg",
        //         start: "top 100%",
        //         scrub: 1,
        //         toggleActions: 'play play play reverse'
        //     }
        // })
    }, [])


    return (
        <>
            <div ref={aboutRef} className="text-white flex justify-between items-center flex-wrap lg:flex-nowrap gap-12 lg:gap-24 relative py-20 px-8 md:px-12 lg:px-20 overflow-hidden">

                <div className="full">
                    <Image
                        className="w-full md:max-w-[35vw] lg:min-w-[35vw] lg:max-w-[65vw]"
                        width={5000}
                        height={5000}
                        alt="About Image"
                        src={"/banner.webp"}
                    />
                </div>
                <div className="w-full">
                    <h2 className="text-[7vw] leading-[9vw] md:leading-[7vw] lg:leading-[5vw] md:text[3.6vw] lg:text-[4.4vw] mb-8 xl:w-3/4">Working to build your success</h2>
                    <span className="text-[16px] md:text[1.9vw] lg:text-[1.4vw]">For over 25 years, Americaneagle.com, a premier digital agency, provides best-in-class web design, development, hosting, digital marketing, and managed services. With us, your success is our success, and we work with you to find powerful online solutions that fit your needs.</span>

                    <div className="my-8 posRightTo">
                        <Link href={"/about"}>
                            <button className="text-[18px]  hover:bg-white hover:text-black transition-all hover:ring-green-500 lg:text-xl font-bold ring-4 ring-red-500 rounded-lg p-4 ring-offset-4">About more</button>
                        </Link>
                    </div>
                </div>

                {/* <div className="inline-block bg-neutral-200 w-[70%] h-[1px] mt-20">
                    <div className="posRightTo absolute bottom-0 translate-y-[-50%] right-[2%] lg:right-[25%]">
                        <Button content="About" rounded={true} widthHeight={150} />
                    </div>
                </div> */}
                {/* <h2 style={{ pointerEvents: 'all', wordSpacing: ".1rem" }} className="relative min-w-[350px] md:min-w-[450px] w-[55%] testAboutSection overflow-hidden">

                    


                </h2> */}

                {/* <h4 style={{ wordSpacing: "4px" }} className="text-black tracking-wide w-[255px] md:w-[300px] lg:w-[30%] lg:text-[1.22vw]">
                    My passion for design, coding, and interactive experiences uniquely positions me in the web design world, allowing me to create innovative and engaging digital solutions that stand out.

                </h4> */}




            </div>
        </>
    )
}

export default AboutSection
