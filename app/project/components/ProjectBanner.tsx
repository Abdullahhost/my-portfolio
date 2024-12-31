import Image from 'next/image'
import React from 'react'

const ProjectBanner = () => {
    return (
        <div className='w-full relative h-[70vh] lg:h-[85vh] px-4 md:px-8 flex flex-col items-center glowEffectcenter justify-center text-white'>
            <Image
                className='w-full max-h-screen min-h-[80vh] transition-all object-cover'
                width={5000}
                height={5000}
                alt='Project Image'
                src={"/projectBannerImage.png"}
            />

            <div className='absolute top-0 left-0 w-full h-full flex items-end justify-end '>
                <div className='w-full py-16 flex flex-col items-center glowGradient justify-center backdrop-blur-none lg:backdrop-blur-sm'>

                    <h2 className="text-[9vw] text-white my-4 lg:my-8 leading-[12vw] md:text-[5.2vw] md:leading-[6vw] lg:text-[4.2vw] lg:leading-[5.3vw] font-bold w-[80%] lg:w-[35%] text-center">Our Work Speaks for Itself</h2>
                    <h3 className=' w-[80%] lg:w-[65%] text-lg md:text-[2.6vw] md:leading-[4vw] lg:leading-[3vw] lg:text-[1.7vw] text-center'>Explore the diverse range of projects we've delivered, showcasing our expertise across multiple industries.</h3>

                </div>
            </div>
        </div>
    )
}

export default ProjectBanner



