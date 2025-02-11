import React from "react";
import Image from "next/image";
import AiIcon from "@/public/images/icons/ai.svg"
import DollarIcon from "@/public/images/icons/dollar.svg"
import BarIcon from "@/public/images/icons/bar.svg"
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
const cards = [
    {
        icon: <Image src={DollarIcon} alt="icon" />,
        title: "Fractional CTO Program",
        description: "Get expert tech leadership on demand to guide strategy, streamline development, and scale your business.",
    },
    {
        icon: <Image src={BarIcon} alt="icon" />,
        title: "AI & Machine Learning",
        description: "Specializing in AI, data analytics and ML. We also integrate models like GPT, Anthropic, Azure AI, and LLAMA to drive efficiency and innovation.",
    },
    {
        icon: <Image src={AiIcon} alt="icon" />,
        title: "App Development",
        description: "We design and build digital solutions of any complexity, blending tech expertise with deep industry knowledge.",
    },
    {
        icon: <div className="rounded-full w-fit p-[10px] bg-[#215FF6]">
            <WrenchScrewdriverIcon className="h-6 w-6 font-bold text-white" />
        </div>,
        title: "Developer Hiring ",
        description: "Find top-tier developers, from consultants to full-time hires, seamlessly integrating into your team for efficient project execution.",
    },
];
const Card: React.FC = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
                {
                    cards.map((card, index) => (
                        <div key={index} className="w-[250px]  bg-custom-gradient rounded-lg shadow-lg py-5 px-4 flex flex-col  gap-3">
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
        </>
    );
};

export default Card;
