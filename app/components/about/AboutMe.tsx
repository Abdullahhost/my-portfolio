"use client"

import Image from "next/image"
import { useState } from "react"

const AboutMe = () => {

    const [showDetails, setShowDetails] = useState<boolean>(false)
    return (
        <section className="w-full pt-12 px-8 md:pt-40 md:px-20 bg-white flex flex-wrap lg:flex-nowrap  gap-16 justify-between ">

            <div className="px-0 lg:px-[5vw]">
                <strong className="text-[30px] font-medium inline-block rotate-90 "> → </strong>
                <p className="text-[7vw] leading-9 md:text-[3vw] lg:text-[1.9vw]" >

                    I'm Expert in full-stack MERN development, focusing on performance, scalability, and exceptional user experiences.

                </p>
                <div className={`${showDetails ? " h-[250px]" : "h-0"} transition-all duration-700 relative overflow-hidden w-full`}>

                    <p className={`${showDetails ? "text-md" : "text-[50px]"} absolute top-0 left-0 w-full h-full mt-10 pointer-events-none transition-all duration-700`}> As a passionate MERN stack developer, I specialize in crafting dynamic, high-performance web applications.
                        With a deep understanding of MongoDB, Express.js, React.js, and Node.js,
                        I build seamless full-stack solutions that prioritize scalability, efficiency, and user experience.
                        My expertise spans from designing robust backend architectures to developing intuitive front-end interfaces,
                        ensuring every project is both functional and visually compelling.
                        I am committed to continuous learning,
                        leveraging the latest technologies and best practices to deliver
                        innovative solutions that drive growth and exceed expectations.</p>
                    <div className={`w-full ${showDetails ? "h-0" : "h-[250px]"} duration-700 transition-all backdrop-blur-lg absolute bottom-0 left-0`}>

                    </div>
                </div>
                <button onClick={() => setShowDetails(prev => !prev)} className="px-6 py-2 cursor-pointer rounded-md mt-6 bg-slate-100">Read More</button>
            </div>
            <div>
                <Image
                    className=" min-w-full md:min-w-[400px] md:max-w-[500px] h-full"
                    alt="About Image"
                    width={1000}
                    height={1000}
                    src={"/portfolio.png"}
                />
            </div>
        </section>
    )
}

export default AboutMe
