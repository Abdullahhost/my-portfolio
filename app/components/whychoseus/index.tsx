import React from 'react'
import Image from 'next/image'

const WhyChoseUs = () => {
    return (
        <section className="w-full bg-white min-h-screen lg:h-screen flex items-center justify-center lg:justify-between flex-wrap-reverse md:flex-wrap-reverse lg:flex-nowrap">
            <div className='flex flex-col justify-center w-full lg:w-[50vw] h-full min-w-fit items-center  bg-white p-5'>


                <h2 className='text-[5.3vw] md:text-[2.9vw]  lg:text-[2.4vw] font-bold uppercase my-6'>Why Chose Us</h2>
                <div className='w-full px-0 lg:px-24'>
                    <div className='flex justify-start gap-4 items-center bg-slate-100 px-6 py-4 rounded my-2 border min-w-full'>
                        <Image
                            className='w-[50px] block h-[50px] object-cover'
                            width={5000}
                            height={5000}
                            alt='Chose us Image'
                            src="/chose1.jpg"
                        />
                        <div className='text-nowrap'>
                            Expertise Across Industries
                        </div>
                    </div>

                    <div className='flex justify-start gap-4 items-center bg-slate-100 px-6 py-4 rounded my-2 border min-w-full'>
                        <Image
                            className='w-[50px] block h-[50px] object-cover'
                            width={5000}
                            height={5000}
                            alt='Chose us Image'
                            src="/chose2.jpg"
                        />
                        <div className='text-nowrap'>
                            Agile Development Process
                        </div>
                    </div>

                    <div className='flex justify-start gap-4 items-center bg-slate-100 px-6 py-4 rounded my-2 border min-w-full'>
                        <Image
                            className='w-[50px] block h-[50px] object-cover'
                            width={5000}
                            height={5000}
                            alt='Chose us Image'
                            src="/chose3.jpg"
                        />
                        <div className='text-nowrap'>
                            Customer-Centric Approach
                        </div>
                    </div>

                    <div className='flex justify-start gap-4 items-center bg-slate-100 px-6 py-4 rounded my-2 border min-w-full'>
                        <Image
                            className='w-[50px] block h-[50px] object-cover'
                            width={5000}
                            height={5000}
                            alt='Chose us Image'
                            src="/chose4.jpg"
                        />
                        <div className='text-nowrap'>
                            Transparent and Reliable
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-blue-300 relative p-5 w-full mx-0 lg:w-[50vw] min-h-full grid place-items-center'>
                <Image
                    className='w-[70%] lg:w-full translate-x-0 lg:-translate-x-16'
                    width={5000}
                    height={5000}
                    alt='Chose us Image'
                    src="/whyChoseUs.png"
                />
            </div>
        </section>
    )
}

export default WhyChoseUs
