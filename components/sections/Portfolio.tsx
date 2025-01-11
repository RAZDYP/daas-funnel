import React from 'react'
import SparklesText from "@/components/ui/sparkles-text";
import PortFolioCards from "@/components/cards/portfolio"

function Portfolio() {
    return (
        <section className='flex flex-col items-center gap-10 px-4 w-full sm:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[70%]'>
            <div>
                <SparklesText text='Portfolio Projects' className='text-[#215FF6] text-center text-[28px] sm:text-[40px] md:text-[54px] font-semibold' />
                <p className='text-center font-medium text-sm sm:text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>Discover our freshest creations that showcase the power of design innovation and digital excellence. Explore our latest work and witness the impact we bring to every project</p>
            </div>
            <PortFolioCards />
        </section>
    )
}

export default Portfolio