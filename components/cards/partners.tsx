import React from "react";
import { UserGroupIcon, ChatBubbleLeftEllipsisIcon, WrenchScrewdriverIcon, LinkIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'
const cards = [
    {
        icon: <UserGroupIcon className="h-8 w-8 font-bold text-[#1c2d68]" />,
        title: "Business-Focused Solutions.",
        description: "Customized Solutions for Your Unique Challenges.",
    },

    {
        icon: <WrenchScrewdriverIcon className="h-8 w-8 font-bold text-[#1c2d68]" />,
        title: "Dedicated Support",
        description: "Hands-on support every step of the way, keeping things running smoothly 24/7.",
    },
    {
        icon: <LinkIcon className="h-8 w-8 font-bold text-[#1c2d68]" />,
        title: "Top Developers",
        description: "Our developers bring their expertise to deliver clean, efficient, and scalable code - focused on quality and performance",
    },
    {
        icon: <CheckBadgeIcon className="h-8 w-8 font-bold text-[#1c2d68]" />,
        title: "Proven Track Record ",
        description: "Trusted for delivering results, time and again.",
    },
    {
        icon: <ChatBubbleLeftEllipsisIcon className="h-8 w-8 font-bold text-[#1c2d68]" />,
        title: "Your Deadlines, Our Commitment",
        description: "We understand the importance of your deadlines, and we make it our priority to deliver on time, every time.",
    },

];
const Card: React.FC = () => {
    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
            {
                cards.map((card, index) => (
                    <div key={index} className="bg-transparent">
                        <div className="w-[290px]  p-3 flex flex-col items-center justify-between gap-3">
                            {card.icon}
                            <>
                                <p className="text-xl text-nowrap  font-semibold text-center">{card.title}</p>
                                <hr className="w-full border-[#D0D5DD]" />
                            </>


                            <p className="text-sm  font-medium text-center">{card.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Card;
