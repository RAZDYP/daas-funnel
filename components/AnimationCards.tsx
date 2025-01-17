"use client"
import { useState } from 'react';
import Image from 'next/image';
import Image1 from "@/public/images/animation/image-1.svg"
import Image2 from "@/public/images/animation/image-2.svg"
import BackgroundImage from "@/public/images/animation/background.svg"
const AnimatedCards = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="bg-transparent flex justify-center items-center ">
            <div className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <div className="rounded-lg text-red-500 shadow-lg flex items-center justify-center transition-transform duration-1000">
                    <Image src={BackgroundImage} alt="" className='w-90 sm:w-90 md:w-90 lg:w-100 xl:w-100 2xl:w-100' />
                </div>
                <div className={`absolute -bottom-10 left-0 flex items-center justify-center transition-all duration-1000 ${isHovered ? '-translate-x-28 -translate-y-56' : ''}`}>
                    <Image src={Image1} alt="" className='w-90 sm:w-90 md:w-90 lg:w-100 xl:w-100 2xl:w-100' />
                </div>
                <div className={`absolute top-0 -right-6 sm:-right-8 md:-right-12 lg:-right-18 xl:-right-24 2xl:-right-24 flex items-center justify-center transition-all duration-1000 ${isHovered ? '-translate-x-2 translate-y-16' : ''}`}>
                    <Image src={Image2} alt="" className='w-100 sm:w-65 w-70 lg:w-100 xl:w-100 2xl:w-100'
                    />
                </div>
            </div>
        </div>
    );
};
export default AnimatedCards;