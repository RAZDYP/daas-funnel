'use client'

import Header from '@/components/Header'
import GlowingButton from '@/components/GlowingButton'
import AnimatedCards from '@/components/AnimationCards'
import FounderImage from '@/public/images/founder-image.svg'
import Image from 'next/image'
import ServiceCard from "@/components/cards/services"
import PortFolioCards from "@/components/cards/portfolio"
import PartnerCards from "@/components/cards/partners"
import SparklesText from "@/components/ui/sparkles-text";
export default function Example() {
  return (
    <div className='flex flex-col w-full items-center gap-6'>
      <Header />
      <section className='flex flex-col items-center gap-8 px-4 w-full sm:w-full lg:w-[70%] xl:w-[70%] 2xl:w-[60%]'>
        <div className='flex flex-col items-center'>
          <SparklesText text='Developers' className='text-[#215FF6] text-[28px] sm:text-[40px] md:text-[54px] font-semibold' />
          <p className='text-center font-semibold text-[28px] sm:text-[40px] md:text-[54px]'> You Can Trust At A Price You Can Afford</p>
        </div>
        <p className='text-center font-medium text-sm sm:text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>Access a global network of pre-vetted developers tailored to your needs, without the hassle. 500,000+ skilled professionals, ready to take on your projects.</p>
        <GlowingButton label='Get Started' />
      </section>
      <AnimatedCards />
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
      <section className='flex flex-col items-center gap-10 px-4 w-full sm:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[70%]'>
        <div>
          <SparklesText text='Portfolio Projects' className='text-[#215FF6] text-center text-[28px] sm:text-[40px] md:text-[54px] font-semibold' />
          <p className='text-center font-medium text-sm sm:text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>Discover our freshest creations that showcase the power of design innovation and digital excellence. Explore our latest work and witness the impact we bring to every project</p>
        </div>
        <PortFolioCards />
      </section>
      <section className='flex flex-col items-center gap-10 px-4 w-full sm:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[70%]'>
        <div>
          <SparklesText text='Why partner with Daas' className='text-[#215FF6] text-center text-[28px] sm:text-[40px] md:text-[54px] font-semibold' />
          <p className='text-center font-medium text-sm sm:text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>Partner with DAAS to access top developers, streamlined hiring, flexible payments, and scalable solutions tailored to your needs.</p>
        </div>
        <PartnerCards />
      </section>
      <section className='flex flex-col items-center gap-10 px-4 w-full sm:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[70%]'>
        <div>
          <SparklesText text='How It Works' className='text-[#215FF6] text-center text-[28px] sm:text-[40px] md:text-[54px] font-semibold' />
          <p className='text-center font-medium text-sm sm:text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>Discover how our streamlined process connects you with top developers to bring your project to life effortlessly.</p>
        </div>
      </section>
    </div>
  )
}
