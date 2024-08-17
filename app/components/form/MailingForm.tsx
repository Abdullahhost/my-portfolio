import Image from "next/image"
import Form from "./Form"
import LinkBox from "../linkBox/LinkBox"


const MailingForm = () => {
    return (
        <div className="mt-20 flex justify-start flex-wrap xl:flex-nowrap gap-24">
            <div className="max-w-[70vw] min-w-full md:min-w-[400px] lg:min-w-[420px] xl:min-w-[450px]  mt-0 md:mt-8">
                <Image
                    className="w-full object-cover"
                    width={500}
                    height={500}
                    alt="Profile"
                    src={"/contuctg.jpg"}
                    priority={true}
                />

                <div className="text-white mt-20">
                    <div className="relative group mb-10">
                        <div className="absolute transition-all top-0 pointer-events-none mix-blend-darken group-hover:bg-[#0000] left-0 w-full h-full bg-[#00000085]">

                        </div>
                        <iframe className='' src="https://maps.google.com/maps?q=24.116151068726616, 89.96896248310726&hl=es&z=14&amp;output=embed" width="80%" height="250" allowFullScreen></iframe>
                    </div>
                    <LinkBox />
                </div>

            </div>
            <div className="w-full xl:max-w-[55vw] mt-0 md:mt-8">
                <Form />
            </div>
        </div>
    )
}

export default MailingForm
