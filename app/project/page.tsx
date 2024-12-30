import React from 'react'

import { projectList } from '@/data/pData'
import Image from 'next/image'


const ProjectOverview = () => {
    return (
        <div className='h-[120vh] scrollerTest mt-[-50px]'>
            <div style={{ "--t": '90s' } as React.CSSProperties} className='scroller_innerTest w-full'>
                {projectList.map((pData) => {
                    return (
                        <div className='overflow-hidden' key={pData.pName}>
                            <Image
                                className='w-full h-full object-cover'
                                width={5000}
                                height={5000}
                                alt='Image'
                                src={pData.pImage}
                            />
                        </div>
                    )
                })}
            </div>
            <div style={{ "--t": '90s' } as React.CSSProperties} className='scroller_innerTest w-full'>

                {projectList.map((pData) => {
                    return (
                        <div className='w-full overflow-hidden' key={pData.pName}>
                            <Image
                                className='w-full h-full object-cover'
                                width={5000}
                                height={5000}
                                alt='Image'
                                src={pData.pImage}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
const ProjectOverviewReverse = () => {
    return (
        <div className='h-[120vh] scrollerTest scale-125 mt-[-50px]'>
            <div style={{ "--t": '60s' } as React.CSSProperties} className='scroller_innerTest reverseScroll w-full'>
                {projectList.map((pData) => {
                    return (
                        <div className='overflow-hidden' key={pData.pName}>
                            <Image
                                className='w-[33vw] h-full object-cover'
                                width={5000}
                                height={5000}
                                alt='Image'
                                src={pData.pImage}
                            />
                        </div>
                    )
                })}
            </div>
            <div style={{ "--t": '60s' } as React.CSSProperties} className='scroller_innerTest reverseScroll w-full'>

                {projectList.map((pData) => {
                    return (
                        <div className='overflow-hidden w-full' key={pData.pName}>
                            <Image
                                className='w-full h-full object-cover'
                                width={5000}
                                height={5000}
                                alt='Image'
                                src={pData.pImage}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const InfiniteProjectShow = () => {
    return (
        <div className='absolute top-0 right-0 w-full flex justify-end -z-10'>
            <div className='flex w-full lg:w-[80%] gap-2 glowEffect'>
                <ProjectOverview />
                <ProjectOverviewReverse />
                <ProjectOverview />
            </div>
        </div>
    )
}

export default InfiniteProjectShow
