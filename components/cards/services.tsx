import React from "react";
import Image from "next/image";
import AiIcon from "@/public/images/icons/ai.svg"
import DollarIcon from "@/public/images/icons/dollar.svg"
import BarIcon from "@/public/images/icons/bar.svg"
const cards = [
    {
        icon: <Image src={DollarIcon} alt="icon" />,
        title: "Fractional CTO Program",
        description: "Custom app development, SMS, Payment, and call integration",
        buttonText: "See More",
    },
    {
        icon: <Image src={BarIcon} alt="icon" />,
        title: "Marketplace App Development",
        description: "Provides expert CTO guidance without a full time hire",
        buttonText: "See More",
    },
    {
        icon: <Image src={AiIcon} alt="icon" />,
        title: "AI & Machine Learning",
        description: "Crafting user-friendly, responsive websites",
        buttonText: "See More",
    },
];
const Card: React.FC = () => {
    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
            {
                cards.map((card, index) => (
                    <div key={index} className="w-[290px]  bg-custom-gradient rounded-lg shadow-lg p-6 flex flex-col justify-between gap-5">
                        {card.icon}
                        <p className="text-xl font-semibold ">{card.title}</p>
                        <div className="ps-4">
                            <ul className="list-disc text-md font-medium">
                                <li>{card.description}</li>
                            </ul>
                        </div>
                        <div>
                            <button className="relative p-[1px] rounded-lg bg-gradient-to-r from-[#FFFFFF]  to-[#215FF6]">
                                <div className="bg-[#3e407a] rounded-lg px-6 py-[5px] hover:bg-[#333563] transition-all duration-300 ease-in-out">
                                    <span className="text-white">{card.buttonText}</span>
                                </div>
                            </button>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default Card;
