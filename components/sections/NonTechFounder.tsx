import React from 'react'
import { UserGroupIcon, ChatBubbleLeftEllipsisIcon, WrenchScrewdriverIcon, LinkIcon } from '@heroicons/react/24/outline'
const cards = [
    {
        icon: <UserGroupIcon className="h-8 w-8 font-bold text-blue-600" />,
        title: "Transparency at Every Step",
        description: "We provide clear, easy-to-understand reports, ensuring full transparency throughout the development process. Stay updated and confident in our progress at all times.",
    },
    {
        icon: <ChatBubbleLeftEllipsisIcon className="h-8 w-8 font-bold text-blue-600" />,
        title: "Expert/Strategic Guidance",
        description: "Our experts offer clear, actionable guidance to help you make informed decisions. We break down complex technical concepts to ensure you feel supported throughout the journey.",
    },
    {
        icon: <WrenchScrewdriverIcon className="h-8 w-8 font-bold text-blue-600" />,
        title: "Effortless Onboarding",
        description: "We ensure a seamless onboarding experience, guiding you through each step. Our approach helps you get started quickly, with no technical barriers.",
    },
    {
        icon: <LinkIcon className="h-8 w-8 font-bold text-blue-600" />,
        title: "Hands-On Demos",
        description: "Stay aligned with the progress through regular demos. We provide hands-on updates, allowing you to give feedback and make adjustments as needed.",
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
