

import Image from "next/image"
import ScrollingText from './ScrollingText'
import CompanyTitle from "./CompanyTitle"







const Banner = () => {

    return (
        <div className="w-full mt-4 md:mt-12 px-6 py-12 bgGradient  h-fit relative flex justify-between items-center gap-12 flex-wrap md:flex-nowrap">
            <div className="verticalText absolute bottom-[160px] lg:right-[94vw] right-4 text-white">
                Scroll<span className="text-4xl">&nbsp;→</span>
            </div>
            <CompanyTitle />
            <div className="w-full ">
                <Image
                    className="bannerImg select-none pointer-events-none w-3/4  overflow-hidden object-cover "
                    alt="profileImage"
                    src={"/banner.webp"}
                    width={5000}
                    height={5000}
                    blurDataURL={"/profileImg.png"}
                />
            </div>
        </div>
    )
}

export default Banner





// https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2024/03/dbeta-website.webp


// import Image from "next/image"
// import ScrollingText from './ScrollingText'







// const Banner = () => {

//     return (
//         <div className="w-full pointer-events-none h-fit bannerContainer relative flex justify-center items-end gap-0">

//             <div className="imgBox overflow-hidden scale-110 lg:scale-[1.30]">
//                 <Image
//                     className="bannerImg select-none pointer-events-none w-full h-[800px] overflow-hidden object-cover "
//                     alt="profileImage"
//                     src={"/portfolioimg.png"}
//                     width={5000}
//                     height={5000}
//                     blurDataURL={"/profileImg.png"}
//                 />

//             </div>
//             <ScrollingText />
//         </div>
//     )
// }

// export default Banner
