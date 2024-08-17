

import Image from "next/image"
import ScrollingText from './ScrollingText'







const Banner = () => {

    return (
        <div className="w-full bannerContainer relative flex justify-center items-baseline gap-0  ">

            <div className="imgBox overflow-hidden">
                <Image
                    className="bannerImg select-none pointer-events-none w-[400px] h-[700px] overflow-hidden object-cover "
                    alt="profileImage"
                    src={"/portfolio.png"}
                    width={500}
                    height={500}
                    blurDataURL={"/team-3.jpg"}
                />

            </div>
            <ScrollingText />
        </div>
    )
}

export default Banner
