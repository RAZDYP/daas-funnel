import React from 'react'
import GlowingButton from '@/components/GlowingButton'
import ServiceCard from "@/components/cards/services"

function Explore() {
    return (
        <section className='flex flex-col items-center gap-10 px-4 w-full sm:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[70%] text-white'>
            <div className='flex flex-col items-center'>
                <p className='text-[#215FF6] text-center text-[28px] sm:text-[40px] md:text-[54px] font-semibold font-openSauceSansSemibold'>
                    Explore
                </p>
                <p className='text-center font-semibold text-[28px] sm:text-[40px] md:text-[54px] text-black font-openSauceSansRegular'> Our Expert Services</p>
            </div>
            <div className='w-full flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-around items-center gap-10'>
                <p className='text-xl sm:text-lg md:text-lg text-center  text-black'>Tailored Solutions for Every Digital Project.</p>
                <GlowingButton label='Explore Services' className=' text-blue-500 bg-transparent border-2 border-[#215FF6]  hover:text-white' />
            </div>
            <ServiceCard />
        </section>
    )
}

export default Explore