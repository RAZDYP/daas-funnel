import React from 'react';
import GlowingButton from '@/components/GlowingButton';
import TypingEffectText from '@/components/TypingEffectText';
import ServiceCard from '@/components/cards/serviceCard';
import Image from 'next/image'
import mainLogo from '@/public/images/logo-main.svg'
import { UserGroupIcon, WrenchScrewdriverIcon, LinkIcon } from '@heroicons/react/24/outline'
function HeaderText() {
    const openCalendly = () => {
        window.open("https://calendly.com/capri-ai/daas-discovery", "_blank");
    }
    return (
        <div className="relative w-full  h-full items-center justify-center text-white">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/static/bg-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <nav className="static flex items-center justify-between px-4 lg:px-10 py-6 bg-black/20 backdrop-blur-2xl  text-white shadow-lg hover:bg-black/50 transition">
                <a href="#" className="-m-1.5 p-1.5">
                    <Image width={200} src={mainLogo} alt="logo" />
                </a>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <GlowingButton
                        label="Book a call"
                        onClick={openCalendly}
                    />
                </div>
            </nav>
            <div className='flex flex-col w-full items-center justify-center h-full'>
                <section className="relative flex flex-col items-center gap-8 px-10 py-10 w-full sm:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[80%] rounded-md z-10">
                    <div className="text-center">
                        <TypingEffectText />
                        <p className="text-sm sm:text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl font-openSauceSansMedium">
                            Startups to Industry leaders, we empower businesses at Every Stage - From Start to Success and Beyond.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
                        <ServiceCard
                            title="Developer Hiring"
                            description="Hire skilled developers, ready to scale your vision."
                            icon={<UserGroupIcon className="h-8 w-8 font-bold text-white" />}
                        />
                        <ServiceCard
                            title="Custom software development"
                            description="Build software tailored to your business"
                            icon={<WrenchScrewdriverIcon className="h-8 w-8 font-bold text-white" />}
                        />
                        <ServiceCard
                            title="AI & ML Solutions"
                            description="Disrupt your industry with AI & ML"
                            icon={<LinkIcon className="h-8 w-8 font-bold text-white" />}
                        />
                    </div>
                    <GlowingButton label="Get Started" onClick={openCalendly} />
                </section>
            </div>
        </div>
    );
}

export default HeaderText;
