import React from 'react'
import SparklesText from "@/components/ui/sparkles-text";
import TestimonialsV2 from '@/components/cards/testimonialsv2'

function Testimonials() {
    return (
        <section className='flex flex-col items-center gap-10 px-4 w-full sm:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[70%]'>
            <div>
                <SparklesText text='Testimonials' className='text-[#1c2d68] text-center text-[26px] sm:text-[36px] md:text-[48px] font-semibold' />
                <p className='text-center font-medium text-sm sm:text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>Don’t take our word for it. Hear it from our happy clients.</p>
            </div>
            <TestimonialsV2 />
        </section>
    )
}

export default Testimonials