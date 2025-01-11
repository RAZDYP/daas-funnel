"use client"
import { useState } from 'react';
import Image from 'next/image';
import Image1 from "@/public/images/animation/image-1.svg"
import Image2 from "@/public/images/animation/image-2.svg"
import BackgroundImage from "@/public/images/animation/background.svg"
const AnimatedCards = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="bg-black flex justify-center items-center ">
            <div className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <div className="rounded-lg text-red-500 shadow-lg flex items-center justify-center transition-transform duration-1000">
                    <Image src={BackgroundImage} alt="" />
                </div>
                <div className={`absolute -bottom-10 left-0 flex items-center justify-center transition-all duration-1000 ${isHovered ? '-translate-x-28 -translate-y-56' : ''}`}>
                    <Image src={Image1} alt="" />
                </div>
                <div className={`absolute top-0 -right-24 flex items-center justify-center transition-all duration-1000 ${isHovered ? '-translate-x-2 translate-y-16' : ''}`}>
                    <Image src={Image2} alt="" />
                </div>
            </div>
        </div>
    );
};
export default AnimatedCards;