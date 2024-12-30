"use client"

import { useState } from 'react'
import Input from '../form/input/Input'


const EmailSection = () => {



    const [emailInfo, setEmailInfo] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmailInfo(e.target.value)
    }

    const handleSubmit = () => {
        console.log(emailInfo)
    }

    return (
        <div className='min-w-full flex justify-between items-center h-[400px] px-4 lg:px-24 gap-6'>
            <div className='w-full'>

                <form onSubmit={handleSubmit}>


                    <Input heading="Please Enter your Email."
                        name="userEmail" type="email"
                        number={1} placeholder="Jhon@gmail.com"
                        userValue={emailInfo}
                        onChange={(e) => handleChange(e)}
                    />
                </form>
            </div>
            <div className='p-2 rounded-2xl'>
                <button className='text-nowrap rounded-lg bg-white px-6 py-4 text-xl font-bold hover:bg-black hover:border hover:text-white'>Send us</button>
            </div>
        </div>
    )
}

export default EmailSection
