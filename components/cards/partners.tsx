import React from "react";
import Image from "next/image";
// icons new
import TimeIcon from "@/public/images/partners/time.svg"
import ExpertiseIcon from "@/public/images/partners/expertise.svg"
import TailoredIcon from "@/public/images/partners/tailored.svg"
import SupportIcon from "@/public/images/partners/support.svg"
import TrackIcon from "@/public/images/partners/track.svg"
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { BorderBeam } from "@/components/ui/border-beam";
const cards = [
    {
        icon: <Image src={TimeIcon} alt="icon" width={50} />,
        title: "Valuing Your Time",
        description: "Focus on core business activities while we manage your tech needs.",
        buttonText: "See More",
    },
    {
        icon: <Image src={ExpertiseIcon} alt="icon" width={50} />,
        title: "Unmatched Expertise",
        description: "A team of seasoned developers delivering cutting-edge solutions",
        buttonText: "See More",
    },
    {
        icon: <Image src={TailoredIcon} alt="icon" width={50} />,
        title: "Tailored Approach",
        description: "Custom-fit services to maximize impact.",
        buttonText: "See More",
    },
    {
        icon: <Image src={SupportIcon} alt="icon" width={50} />,
        title: "Dedicated Support",
        description: "Seamless collaboration as an extension of your team.",
        buttonText: "See More",
    },
    {
        icon: <Image src={TrackIcon} alt="icon" width={50} />,
        title: "Proven Track Record",
        description: "A portfolio of success across industries",
        buttonText: "See More",
    },
];
const Card: React.FC = () => {
    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
            {
                cards.map((card, index) => (
                    <div key={index} className="relative rounded-lg bg-transparent">
                        <div className="w-[290px] h-full p-6 flex flex-col justify-between gap-4">
                            {card.icon}
                            <p className="text-xl text-white font-semibold ">{card.title}</p>
                            <p className="text-sm text-white font-medium ">{card.description}</p>
                            <div>
                                <button className="border bg-transparent border-white text-white rounded-md p-2 ">
                                    <ArrowRightIcon className="h-4 w-4 font-bold text-white" />
                                </button>
                            </div>
                        </div>
                        <BorderBeam duration={3} />
                    </div>
                ))
            }
        </div>
    );
};

export default Card;
