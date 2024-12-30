import Image from "next/image"


const WhatWeDo = () => {
    return (
        <section className="w-full bg-white py-24 flex flex-col items-center min-h-screen">
            <h2 className="text-[5.3vw] md:text-[2.9vw]  lg:text-[2.4vw] font-bold uppercase mt-6">What We Do</h2>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center p-16">
                <div className="relative w-full  h-[300px] shadow-sm  xl:h-[18vw] text-white group border transition cursor-pointer overflow-hidden">
                    <Image
                        className="w-full h-full object-cover z-10 scale-110 group-hover:scale-100 duration-500 transition-all delay-150"
                        src={"/customWeb.jpg"}
                        alt="Cloud Image"
                        width={5000}
                        height={5000}
                    />

                    <div className="z-20 text-xl absolute top-0 left-0 w-full h-full transition group-hover:bg-transparent flex items-end">
                        <div className="backdrop-blur-sm p-6 bg-[#0006] min-w-full text-center md:text-start">
                            Custom Software Development
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-[300px] shadow-sm  xl:h-[18vw] text-white group border transition cursor-pointer overflow-hidden">
                    <Image
                        className="w-full h-full object-cover scale-110 group-hover:scale-100 duration-500 transition-all delay-150 z-10"
                        src={"/multiTanent.jpg"}
                        alt="Cloud Image"
                        width={5000}
                        height={5000}
                    />

                    <div className="z-20 text-xl absolute top-0 left-0 w-full h-full transition duration-500 group-hover:bg-transparent flex items-end">
                        <div className="backdrop-blur-sm p-6 bg-[#0006] min-w-full text-center md:text-start">
                            Scalable Multi-Tenant Systems
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[300px] shadow-sm  xl:h-[18vw] text-white group border transition cursor-pointer overflow-hidden">
                    <Image
                        className="w-full h-full object-cover z-10  scale-110 group-hover:scale-100 transition-all duration-500 delay-150"
                        src={"/mobileApp.jpg"}
                        alt="Cloud Image"
                        width={5000}
                        height={5000}
                    />

                    <div className="z-20 text-xl absolute top-0 left-0 w-full h-full transition group-hover:bg-transparent flex items-end">
                        <div className="backdrop-blur-sm p-6 bg-[#0006] min-w-full text-center md:text-start">
                            Feature-Rich Web and Mobile Apps
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[300px] shadow-sm xl:h-[18vw] text-white group border transition cursor-pointer overflow-hidden ">
                    <Image
                        className="w-full h-full object-cover z-10 scale-110 group-hover:scale-100 transition-all duration-500 delay-150"
                        src={"/cloudImage.png"}
                        alt="Cloud Image"
                        width={5000}
                        height={5000}
                    />

                    <div className="z-20 text-xl absolute top-0 left-0 w-full h-full  transition group-hover:bg-transparent flex items-end">
                        <div className="backdrop-blur-sm p-6 bg-[#0006] min-w-full text-center md:text-start">
                            High-Performance Cloud Solutions
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo
