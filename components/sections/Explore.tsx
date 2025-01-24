import React from 'react'
import ServiceCard from "@/components/cards/services"

function Explore() {
    return (
        <section className='flex flex-col items-center gap-10 px-4 w-full sm:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[70%] text-white'>
            <p className='text-[#215FF6] text-center text-[26px] sm:text-[36px] md:text-[48px]  font-semibold'>
                Explore Our Expert Services
            </p>
            <ServiceCard />
        </section>
    )
}

export default Explore