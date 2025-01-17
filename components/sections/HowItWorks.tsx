import React from 'react'
import Image from 'next/image'
import DesktopIcon from "@/public/images/how-it-works/desktop.svg"
import MobileIcon from "@/public/images/how-it-works/mobile.svg"
function HowItWorks() {
    return (
        <section className='flex flex-col items-center gap-10 px-4 w-full sm:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[70%] '>
            <div className='hidden lg:block'>
                <p className='text-[#215FF6] text-center text-[28px] sm:text-[40px] md:text-[54px] font-semibold'>
                    How It Works
                </p>
                <p className='text-center font-medium text-sm sm:text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>Discover how our streamlined process connects you with top developers to bring your project to life effortlessly.</p>
            </div>
            <div className="hidden lg:block">
                <Image src={DesktopIcon} alt="Desktop Icon" />
            </div>
            <div className="block lg:hidden mt-4">
                <Image src={MobileIcon} alt="Mobile Icon" />
            </div>
        </section>
    )
}

export default HowItWorks