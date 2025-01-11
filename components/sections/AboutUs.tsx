import React from 'react'
import SparklesText from "@/components/ui/sparkles-text";
import Image from 'next/image';
import GlowingButton from '@/components/GlowingButton'
import FounderImage from '@/public/images/founder-image.svg'

function AboutUs() {
    return (
        <section className='flex flex-col items-center gap-10 px-4 w-full sm:w-full lg:w-[70%] xl:w-[70%] 2xl:w-[60%]'>
            <div>
                <SparklesText text='About Us' className='text-[#215FF6] text-center text-[28px] sm:text-[40px] md:text-[54px] font-semibold' />
                <p className='text-center font-medium text-sm sm:text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>Empowering Your Vision with Exceptional Development.</p>
            </div>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 '>
                <div className='flex justify-center items-center'>
                    <Image width={450} src={FounderImage} alt='' />
                </div>
                <div className='flex flex-col items-center gap-6'>
                    <p className='text-xl sm:text-lg md:text-lg  mb-6 text-justify '>We are a leading developer services company dedicated to connecting businesses with top-tier tech talent. Our mission is to provide seamless access to skilled developers who deliver innovative solutions. Whether building, scaling, or maintaining projects, we ensure excellence through tailored strategies and a commitment to quality, helping businesses thrive in today’s fast-paced digital landscape.</p>
                    <GlowingButton label='Learn More' />
                </div>
            </div>
        </section>
    )
}

export default AboutUs