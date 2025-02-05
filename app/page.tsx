'use client'
import HeaderText from '@/components/sections/HeaderText'
import AboutUs from '@/components/sections/AboutUs'
import Explore from '@/components/sections/Explore'
import Partner from '@/components/sections/Partner'
import Testimonials from '@/components/sections/Testimonials'
import ContactForm from '@/components/sections/ContactForm'
import Companies from '@/components/sections/Companies'
import YoutubeVideo from '@/components/sections/YoutubeVideo'
import NonTechFounder from '@/components/sections/NonTechFounder'
import HowItWorks from '@/components/sections/HowItWorks'
import GraphComp from '@/components/sections/GraphComp'
import Footer from '@/components/sections/Footer'

export default function Example() {
  return (
    <div className='w-full'>
      <div className='flex relative flex-col font-light w-full items-center gap-6 sm:gap-8 md:gap-12 lg:gap-14 xl:gap-14 2xl:gap-16 overflow-x-hidden'>
        <HeaderText />
        <Companies />
        <Explore />
        <YoutubeVideo />
        <GraphComp />
        <Partner />
        <HowItWorks />
        <NonTechFounder />
        <AboutUs />
        <Testimonials />
        <ContactForm />
        <Footer />
      </div>
    </div>
  )
}
