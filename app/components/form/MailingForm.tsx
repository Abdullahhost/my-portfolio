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
