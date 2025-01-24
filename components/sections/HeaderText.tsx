import React from 'react'
import TypingAnimation from "@/components/ui/typing-animation";
import GlowingButton from '@/components/GlowingButton'
import AnimatedCards from '@/components/AnimationCards'
function HeaderText() {
    return (
        <div className='w-full flex items-center justify-center bg-gradient-to-r from-black to-[#022b4b]  text-white'>
            <section className='flex flex-col items-center gap-8 px-10 py-10 w-full sm:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[80%]  rounded-md'>
                <div>
                    <TypingAnimation className='text-[#215FF6] text-center text-[26px] sm:text-[36px] md:text-[48px]  font-semibold'>
                        Design. Code. Deliver. Grow.
                    </TypingAnimation>
                    <p className='text-center  text-sm sm:text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl font-openSauceSansMedium'>From StartUps to Industry leaders, we  empower businesses at Every Stage - Start to Success and Beyond.</p>
                </div>
                <GlowingButton label='Get Started' />
                <AnimatedCards />
            </section>
        </div>
    )
}

export default HeaderText