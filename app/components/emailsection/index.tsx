"use client"
import { useState } from 'react'
import Input from '../form/input/Input'
import { UserType } from '@/app/type'
import Button from '../button/Button'


const EmailSection = () => {

    

    const [userInfo, setUserInfo] = useState<Partial<UserType>>({
        userEmail: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className='min-w-full flex justify-between items-center h-[400px] px-4 lg:px-24 gap-4'>
            <div className='w-full'>

                <Input heading="Please Enter your Email."
                    name="userEmail" type="email"
                    number={1} placeholder="Jhon@gmail.com"
                    userValue={userInfo.userEmail}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className='p-2 rounded-2xl'>
                <Button background="#6065ff" contact content="Submit" />
            </div>
        </div>
    )
}

export default EmailSection
