import React from 'react'
import ServiceCard from "@/components/cards/services"
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";

function Explore() {
    return (
        <section className='flex  flex-col relative items-center gap-10 px-4 w-full sm:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[70%] text-white'>
            <p className='text-[#1c2d68] text-center text-[26px] sm:text-[36px] md:text-[48px]  font-semibold'>
                Services We Provide
            </p>
            <ServiceCard />
            <DotPattern className={cn(
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            )} />
        </section>
    )
}

export default Explore