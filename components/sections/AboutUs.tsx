import React from 'react'
import Image from 'next/image';
import GlowingButton from '@/components/GlowingButton'
import FounderImage from '@/public/images/founder-image.svg'

function AboutUs() {
    return (
        <section className='flex flex-col items-center gap-10 px-4 w-full sm:w-full lg:w-[70%] xl:w-[70%] 2xl:w-[60%]'>
            <div>
                <p className='text-[#1c2d68] text-center text-[26px] sm:text-[36px] md:text-[48px]  font-semibold'>
                    About  Us
                </p>
                <p className='text-center text-sm sm:text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>Empowering Your Vision with Exceptional Development.</p>
            </div>
            <div className='grid grid-cols-1 gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 '>
                <div className='flex justify-center items-center'>
                    <Image width={450} src={FounderImage} alt='' />
                </div>
                <div className='flex flex-col gap-6'>
                    <p className='text-sm sm:text--md md:text-lg text-justify  '>We are a leading developer services company dedicated to connecting businesses with top-tier tech talent. Our mission is to provide seamless access to skilled developers who deliver innovative solutions. Whether building, scaling, or maintaining projects, we ensure excellence through tailored strategies and a commitment to quality, helping businesses thrive in today’s fast-paced digital landscape.</p>
                    <div>
                        <GlowingButton label='Learn More' className='text-white' />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs