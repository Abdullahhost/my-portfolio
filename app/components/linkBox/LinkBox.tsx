"use client"

import { BsFacebook, BsLinkedin, BsTwitterX } from "react-icons/bs"
import SocialLink from "../socialLink/SocialLink"

const LinkBox = () => {
    return (
        <div className="flex gap-[20px]">

            <div className="hidden md:block">
                <SocialLink
                    icon={BsFacebook}
                    iconSize={25}
                    linkName="FaceBook"
                    linkUrl="https://facebook.com"
                />
            </div>
            <div className="block md:hidden">
                <SocialLink
                    icon={BsFacebook}
                    iconSize={18}
                    linkName="FaceBook"
                    linkUrl="https://facebook.com"
                />
            </div>
            <div className="hidden md:block">
                <SocialLink
                    icon={BsTwitterX}
                    iconSize={25}
                    linkName="TwiterX"
                    linkUrl="https://twiterX.com"
                />
            </div>
            <div className="block md:hidden">
                <SocialLink
                    icon={BsTwitterX}
                    iconSize={18}
                    linkName="TwiterX"
                    linkUrl="https://twiterX.com"
                />
            </div>


            <div className="hidden md:block">
                <SocialLink
                    icon={BsLinkedin}
                    iconSize={25}
                    linkName="TwiterX"
                    linkUrl="https://twiterX.com"
                />
            </div>
            <div className="block md:hidden">
                <SocialLink
                    icon={BsLinkedin}
                    iconSize={18}
                    linkName="TwiterX"
                    linkUrl="https://twiterX.com"
                />
            </div>
        </div>
    )
}

export default LinkBox
