import React from 'react'
import SparklesText from "@/components/ui/sparkles-text";
import GlowingButton from '@/components/GlowingButton'
import ServiceCard from "@/components/cards/services"

function Explore() {
    return (
        <section className='flex flex-col items-center gap-10 px-4 w-full sm:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[70%]'>
            <div className='flex flex-col items-center'>
                <SparklesText text='Explore' className='text-[#215FF6] text-center text-[28px] sm:text-[40px] md:text-[54px] font-semibold' />
                <p className='text-center font-semibold text-[28px] sm:text-[40px] md:text-[54px]'> Our Expert Services</p>
            </div>
            <div className='w-full flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-around items-center gap-10'>
                <p className='text-xl sm:text-lg md:text-lg text-center  '>Tailored Solutions for Every Digital Project.</p>
                <GlowingButton label='Explore Services' className=' text-blue-500 bg-transparent border-2 border-[#215FF6]  hover:text-white' />
            </div>
            <ServiceCard />
        </section>
    )
}

export default Explore