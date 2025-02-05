import React from 'react'
import Image from 'next/image'
import GraphIcon from "@/public/images/graph/graph.svg"
function GraphComp() {
    return (
        <div className="relative w-full  h-full items-center justify-center text-white">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/static/background-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='w-full  flex items-center py-10 justify-center bg-black/20 backdrop-blur-2xl text-white'>
                <section className='relative  flex flex-col items-center gap-10 px-4 w-full sm:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[70%]'>
                    <div className='flex flex-col items-center'>
                        <p className='text-[#215FF6] text-center text-[26px] sm:text-[36px] md:text-[48px]  font-semibold'>
                            From Idea to Impact
                        </p>
                        <p className='text-center font-medium text-sm sm:text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>Discover how our streamlined process connects you with top developers to bring your project to life effortlessly.</p>
                    </div>
                    <Image src={GraphIcon} alt='Graph Icon' />
                </section>
            </div >
        </div >
    )
}

export default GraphComp