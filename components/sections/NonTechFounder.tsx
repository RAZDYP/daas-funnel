import React from 'react'
import { UserGroupIcon, ChatBubbleLeftEllipsisIcon, WrenchScrewdriverIcon, LinkIcon } from '@heroicons/react/24/outline'
const cards = [
    {
        icon: <UserGroupIcon className="h-8 w-8 font-bold text-blue-600" />,
        title: "Transparent process and reports",
        description: "Focus on core business activities while we manage your tech needs.",
    },
    {
        icon: <ChatBubbleLeftEllipsisIcon className="h-8 w-8 font-bold text-blue-600" />,
        title: "Guidance from the team",
        description: "A team of seasoned developers delivering cutting-edge solutions",
    },
    {
        icon: <WrenchScrewdriverIcon className="h-8 w-8 font-bold text-blue-600" />,
        title: "Smooth onboarding",
        description: "Custom-fit services to maximize impact.",
    },
    {
        icon: <LinkIcon className="h-8 w-8 font-bold text-blue-600" />,
        title: "Regular demos",
        description: "Seamless collaboration as an extension of your team.",
    },


];
const Card: React.FC = () => {
    return (
        <div className="grid grid-cols-1 justify-between w-full gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
            {
                cards.map((card, index) => (
                    <div key={index} className=' '>
                        <div key={index} className="bg-transparent">
                            <div className="w-[290px]  p-3 flex flex-col  justify-between gap-5">
                                {card.icon}
                                <div>
                                    <p className="text-lg  font-semibold ">{card.title}</p>
                                    <p className="text-sm  font-medium text-gray-400">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
function NonTechFounder() {
    return (
        <div className='w-full flex items-center justify-center bg-gradient-to-r from-black to-[#022b4b] text-white'>
            <section className='flex flex-col items-center gap-10 px-10 py-10 w-full sm:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[70%] text-white'>
                <div className='w-full text-start leading-none '>
                    <h2 className=' text-[26px] sm:text-[36px] md:text-[48px] font-semibold'>If you are a</h2>
                    <p className='text-[28px] sm:text-[40px] md:text-[54px] font-semibold  bg-gradient-to-r from-blue-700 via-blue-200 to-blue-50 bg-clip-text text-transparent'>non-tech founder</p>
                </div>
                <Card />
            </section>
        </div>
    )
}
export default NonTechFounder
