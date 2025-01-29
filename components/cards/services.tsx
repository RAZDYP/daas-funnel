import React from "react";
import Image from "next/image";
import AiIcon from "@/public/images/icons/ai.svg"
import DollarIcon from "@/public/images/icons/dollar.svg"
import BarIcon from "@/public/images/icons/bar.svg"
import GlowingButton from '@/components/GlowingButton'
const cards = [
    {
        icon: <Image src={DollarIcon} alt="icon" />,
        title: "Fractional CTO Program",
        description: "Custom app development, SMS, Payment, and call integration",
    },
    {
        icon: <Image src={BarIcon} alt="icon" />,
        title: "Marketplace App Development",
        description: "Provides expert CTO guidance without a full time hire",
    },
    {
        icon: <Image src={AiIcon} alt="icon" />,
        title: "AI & Machine Learning",
        description: "Crafting user-friendly, responsive websites",
    },
    {
        icon: <Image src={AiIcon} alt="icon" />,
        title: "AI & Machine Learning",
        description: "Crafting user-friendly, responsive websites",
    },
];
const Card: React.FC = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
                {
                    cards.map((card, index) => (
                        <div key={index} className="w-[250px]  bg-custom-gradient rounded-lg shadow-lg py-5 px-4 flex flex-col  gap-4">
                            {card.icon}
                            <p className="text-lg font-semibold ">{card.title}</p>
                            <div className="ps-4">
                                <ul className="list-disc text-sm font-medium">
                                    <li>{card.description}</li>
                                </ul>
                            </div>

                        </div>
                    ))
                }
            </div>
            <GlowingButton label='See More' />
        </>
    );
};

export default Card;
