"use client"

import React from 'react'
import Button from '../button/Button'
// import Button from '../button/Button'

const CompanyTitle = () => {
    return (
        <div className='text-white px-0 lg:px-12  py-12'>


            <h1 className='text-[7vw] leading-[9vw] md:text-[3.9vw] md:leading-[7vw] lg:text-[4.4vw] lg:leading-[5.3vw] font-bold w-full lg:w-[45vw]' >
                Modern Web Design Company
            </h1>

            <p className='mt-6 text-[3vw]  md:text-[1.9vw] lg:text-[1.3vw] w-3/4'>
                Work with a top modern web design company to build a fully optimized site, boost engagement and drive valuable leads.
            </p>

            <div className='ml-0 md:ml-4 mt-6'>


                <div className=' flex justify-between gap-4 p-1 w-fit'>
                    <div className='w-[20px] h-[20px]'>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72.95 75">
                            <path style={{ fill: "lightcoral" }} className="" d="M.07,0L72.95,36.54,0,75H0C6.28,51.13,6.49,26.07,.59,2.11L.07,0Z" />
                        </svg>
                    </div>

                    <h3>Custom Web Desing</h3>
                </div>
                <div className='flex justify-between gap-4 p-1 w-fit'>
                    <div className='w-[20px] h-[20px]'>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72.95 75">
                            <path style={{ fill: "lightcoral" }} className="" d="M.07,0L72.95,36.54,0,75H0C6.28,51.13,6.49,26.07,.59,2.11L.07,0Z" />
                        </svg>
                    </div>

                    <h3>Development & Integrations</h3>
                </div>
                <div className='flex justify-between gap-4 p-1 w-fit'>
                    <div className='w-[20px] h-[20px]'>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72.95 75">
                            <path style={{ fill: "lightcoral" }} className="" d="M.07,0L72.95,36.54,0,75H0C6.28,51.13,6.49,26.07,.59,2.11L.07,0Z" />
                        </svg>
                    </div>

                    <h3>Website Marketing</h3>
                </div>
            </div>

            <div className='mt-6'>
                <Button background="#6065ff" contact contactAddress="mailto:abdullahalmamun7021@gmail.com" content="Contact" />
            </div>

        </div>
    )
}

export default CompanyTitle
