import React from "react";
import { UserGroupIcon, ChatBubbleLeftEllipsisIcon, WrenchScrewdriverIcon, LinkIcon, CheckBadgeIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
const cards = [
    {
        icon: <UserGroupIcon className="h-8 w-8 font-bold text-blue-500" />,
        title: "Valuing Your Time",
        description: "Focus on core business activities while we manage your tech needs.",
    },
    {
        icon: <ChatBubbleLeftEllipsisIcon className="h-8 w-8 font-bold text-blue-500" />,
        title: "Unmatched Expertise",
        description: "A team of seasoned developers delivering cutting-edge solutions",
    },
    {
        icon: <WrenchScrewdriverIcon className="h-8 w-8 font-bold text-blue-500" />,
        title: "Tailored Approach",
        description: "Custom-fit services to maximize impact.",
    },
    {
        icon: <LinkIcon className="h-8 w-8 font-bold text-blue-500" />,
        title: "Dedicated Support",
        description: "Seamless collaboration as an extension of your team.",
    },
    {
        icon: <CheckBadgeIcon className="h-8 w-8 font-bold text-blue-500" />,
        title: "Proven Track Record",
        description: "A portfolio of success across industries",
    },
    {
        icon: <ChatBubbleLeftIcon className="h-8 w-8 font-bold text-blue-500" />,
        title: "Proven Track Record",
        description: "A portfolio of success across industries",
    },
];
const Card: React.FC = () => {
    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
            {
                cards.map((card, index) => (
                    <div key={index} className="rounded-lg bg-transparent">
                        <div className="w-[290px] h-full p-6 flex flex-col items-center justify-between gap-3">
                            {card.icon}
                            <p className="text-xl  font-semibold text-center">{card.title}</p>
                            <p className="text-sm  font-medium text-center">{card.description}</p>

                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Card;
