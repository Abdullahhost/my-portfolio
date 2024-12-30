"use client"

import React from 'react'
import Button from '../button/Button'
// import Button from '../button/Button'

const CompanyTitle = () => {
    return (
        <div className='text-white px-0 lg:px-12  pb-12 w-full md:max-w-[70%]'>

            <h3 className='tracking-wider uppercase text-[4vw] my-1 md:text-[2.9vw] lg:text-[1.5vw] font-bold text-slate-400'>Transforming Ideas Into Reality</h3>
            <h1 className='text-[9vw] leading-[11vw] md:text-[3.9vw] md:leading-[6vw] lg:text-[4.4vw] lg:leading-[5.3vw] font-bold w-full lg:w-[45vw] text-slate-50' >
                Innovative software solutions tailored to your needs.
            </h1>

            <p className='mt-6 text-[3vw]  md:text-[1.9vw] lg:text-[1.3vw] w-3/4 text-slate-200'>
                We specialize in crafting exceptional digital experiences, empowering businesses with cutting-edge technology.
            </p>

            <div className='mt-8 flex justify-between gap-2 w-fit'>
                <div className='p-2 border rounded-2xl'>
                    <Button background="#6065ff" contact content="Projects" />
                </div>
                <div>
                    <Button background="purple" contact contactAddress="mailto:abdullahalmamun7021@gmail.com" content="Contact" />
                </div>
            </div>
        </div>
    )
}

export default CompanyTitle
