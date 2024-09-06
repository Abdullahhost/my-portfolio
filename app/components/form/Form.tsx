"use client"


import { useState, useRef } from "react"
import Input from "./input/Input"
import { UserType } from "@/app/type"
import { handleMouseMove, handleMouseOut } from "@/app/buttonEffect"
import axios from "axios"



const Form = () => {


    const divRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLSpanElement>(null);

    const [userInfo, setUserInfo] = useState<UserType>({
        userName: "",
        userEmail: "",
        userMessage: "",
        userOrganization: ""

    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value,
        })
    }


    const handleSubmit = async () => {


        if (userInfo.userEmail !== "" &&
            userInfo.userMessage !== "" &&
            userInfo.userOrganization !== "" &&
            userInfo.userMessage !== ""
        ) {


            await axios.post("https://mail-sending.onrender.com/sendMail", userInfo)
                .then((data) => {
                    if (data.status === 200) {
                        alert("Message sent!")
                        console.log(data.data)
                    } else {
                        alert("Not!!!!")

                    }
                })
                .catch((err) => console.log(err));

            setUserInfo({
                userEmail: "",
                userMessage: "",
                userName: "",
                userOrganization: "",
            })
        } else {
            alert("please Insert All Field!")
        }
    }
    return (
        <div>
            <form>

                <Input heading="What's Your Name?"
                    name="userName" type="input"
                    number={1} placeholder="Jhon, doe"
                    onChange={(e) => handleChange(e)}
                    userValue={userInfo.userName} />

                <Input heading="What's Your Email?"
                    name="userEmail" type="email"
                    number={2} placeholder="Jhon@gmail.com"
                    userValue={userInfo.userEmail}
                    onChange={(e) => handleChange(e)}
                />

                <Input heading="What's the name of your organization?"
                    name="userOrganization" type="input"
                    number={3} placeholder="Jhon & doe"
                    userValue={userInfo.userOrganization}
                    onChange={(e) => handleChange(e)} />

                <Input heading="Your message"
                    name="userMessage" textArea
                    number={4} placeholder="Hello Mamun. Can you help me with..."
                    userValue={userInfo.userMessage}
                    onChange={(e) => handleChange(e)} />



                <div className="flex justify-end p-10">
                    <div ref={divRef}
                        onClick={handleSubmit}
                        onMouseMove={(e) => handleMouseMove(e, divRef, textRef)}
                        onMouseOut={(e) => handleMouseOut(e, divRef, textRef)}
                        className={`buttonWrapper rounded-full relative overflow-hidden w-[10vw] h-[10vw]  min-w-32 min-h-32 `}
                    >
                        <button type="submit" className={`button rounded-full border border-neutral-600 border-l-2 border-r-2
                            grid place-items-center w-full h-full p-[10px]  md:p-[20px]`} >
                            <span ref={textRef} className={`inline-block text-xl relative z-40 pointer-events-none`}>
                                Send it
                            </span>
                        </button>

                        <div className="absolute top-0 left-0 w-full h-full">
                            <span className={`test before:rounded-full after:rounded-full w-full h-full`}></span>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}
export default Form




// services ID: service_0l4ubqg