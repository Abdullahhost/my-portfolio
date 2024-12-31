
import InfiniteProjectShow from "../projectShowCase";
import CompanyTitle from "./CompanyTitle";

const Banner = () => {
    return (
        <div className="w-full h-full px-6 lg:py-[4vw] xl:py-[6vw] z-20  relative flex justify-between items-center gap-12 flex-wrap md:flex-nowrap backdrop-blur-md">
            <CompanyTitle />
            <InfiniteProjectShow />
        </div>
    )
}
export default Banner
