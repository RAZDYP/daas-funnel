import React from 'react'
import Image from 'next/image'
import GraphIcon from "@/public/images/graph/graph.svg"
function GraphComp() {
    return (
        <div className='w-full flex items-center py-10 justify-center bg-gradient-to-r from-black to-[#022b4b] text-white'>
            <section className='flex flex-col items-center gap-10 px-4 w-full sm:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[70%]'>
                <div className='flex flex-col items-center'>
                    <p className='text-[#215FF6] text-center text-[26px] sm:text-[36px] md:text-[48px]  font-semibold'>
                        Ideation
                    </p>
                    <p className='text-center font-medium text-sm sm:text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>Discover how our streamlined process connects you with top developers to bring your project to life effortlessly.</p>
                </div>
                <Image src={GraphIcon} alt='Graph Icon' />
            </section>
        </div >
    )
}

export default GraphComp