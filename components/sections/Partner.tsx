import React from 'react'
import SparklesText from "@/components/ui/sparkles-text";
import PartnerCards from "@/components/cards/partners"

function Partner() {
    return (
        <section className='flex flex-col items-center gap-10 px-4 w-full sm:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[70%]'>
            <div>
                <SparklesText text='Why partner with Daas' className='text-[#215FF6] text-center text-[28px] sm:text-[40px] md:text-[54px] font-semibold' />
                <p className='text-center font-medium text-sm sm:text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>Partner with DAAS to access top developers, streamlined hiring, flexible payments, and scalable solutions tailored to your needs.</p>
            </div>
            <PartnerCards />
        </section>
    )
}

export default Partner