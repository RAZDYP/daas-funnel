import React from 'react'
import TypingAnimation from "@/components/ui/typing-animation";
import GlowingButton from '@/components/GlowingButton'
import AnimatedCards from '@/components/AnimationCards'
function HeaderText() {
    return (
        <section className='flex flex-col items-center gap-8 px-10 py-10 w-full sm:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[80%] bg-gradient-to-t from-black to-[#000e1a] text-white rounded-md'>
            <div className='flex flex-col items-center'>
                <TypingAnimation className='text-[#215FF6] text-center text-[28px] sm:text-[40px] md:text-[54px] font-semibold'>
                    Developers
                </TypingAnimation>
                <p className='text-center font-semibold text-[28px] sm:text-[40px] md:text-[54px]'> You Can Trust At A Price You Can Afford</p>
            </div>
            <p className='text-center font-medium text-sm sm:text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>Access a global network of pre-vetted developers tailored to your needs, without the hassle. 500,000+ skilled professionals, ready to take on your projects.</p>
            <GlowingButton label='Get Started' />
            <AnimatedCards />
        </section>
    )
}

export default HeaderText