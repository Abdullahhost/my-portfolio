

import Image from "next/image"
import ScrollingText from './ScrollingText'







const Banner = () => {

    return (
        <div className="w-full pointer-events-none h-fit bannerContainer relative flex justify-center items-end gap-0  ">

            <div className="imgBox overflow-hidden scale-110 lg:scale-[1.30]">
                <Image
                    className="bannerImg select-none pointer-events-none w-full h-[800px] overflow-hidden object-cover "
                    alt="profileImage"
                    src={"/profileImg.png"}
                    width={5000}
                    height={5000}
                    blurDataURL={"/profileImg.png"}
                />

            </div>
            <ScrollingText />
        </div>
    )
}

export default Banner
