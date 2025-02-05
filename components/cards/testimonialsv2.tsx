import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

import LukaIcon from '@/public/images/clients/luka.png'
import EmmaIcon from '@/public/images/clients/emma.png'
import JacksonIcon from '@/public/images/clients/jackson.png'
import KaraIcon from '@/public/images/clients/kara.png'
import Raja from '@/public/images/clients/raja.png'
import TylerIcon from '@/public/images/clients/tyler.png'
import Image from 'next/image'

const testimonials = [
    {
        id: 1,
        quote:
            "Team DaaS were highly responsive and flexible. If you're stuck, don't know what to do, or need custom integration, just call Quinton! I would definitely recommend working with them if you need somebody to lead you to the next step with ease.",
        name: "Luka",
        title: "CEO, Emrana Engineering",
        image: LukaIcon
    },
    {
        id: 2,
        quote:
            "DaaS has been the most communicative, reliable and quality driven software partner we could ask for. It's refreshing to work with a team that's honest, straightforward, and committed to quality. Even during tough projects Quinton and team DaaS have proven to be the best succeeds, truly helping us succeed.",
        name: "Emma Jackson",
        title: "Product Manager, SwiftShopper",
        image: EmmaIcon
    },
    {
        id: 3,
        quote:
            "Highly impressed by DaaS’s clear plan and commitment. My biggest concern was pricing, but Quintin found a way to deliver the same high-quality service within my budget. He committed to a 3-week timeline, but was already 80% done in the first week, leaving only minor refinements. The software when completed worked seamlessly, and gave me complete confidence in the final product.",
        name: "Raja",
        title: "CTO, TechEase",
        image: Raja
    },
    {
        id: 4,
        quote:
            "Was stuck and had no idea what to do. So I reached out to Team DaaS, and they helped me through and through. DaaS stepped in and exceeded expectations, ensuring my projects moved along the timelines I’ve given my clients. They made me shine in front of my clients. So if you need reliable and professional project assistance, I highly recommend DaaS!",
        name: "Mc Master.",
        title: "CTO, TechEase",
        image: KaraIcon
    },
    {
        id: 5,
        quote:
            "Team DaaS has been an integral part of our team, and I can’t recommend them highly enough. The price point for their work is exceptional, given the level of dedication and results they deliver. They’ve been helping us with integrating NLU and NLG into our software. They have been fantastic; super reliable and consistently going above and beyond.",
        name: "Jackson",
        title: "CTO, TechEase",
        image: JacksonIcon
    },
    {
        id: 6,
        quote:
            "DaaS and Quinton felt more like partners than just a service provider trying to make money; deeply involved, passionate, and committed to the project. They operate with integrity while staying mindful of costs. This has been the best experience I’ve had with a development company.",
        name: "Ovvy",
        title: "CTO, Ovvy",
        image: TylerIcon
    },
];

const Carousel = () => {
    const sliderRef = useRef<Slider | null>(null);
    const [expandedQuotes, setExpandedQuotes] = useState<{ [key: number]: boolean }>({});
    const MAX_CHARACTERS = 120;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // Tablets and below
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        appendDots: (dots: React.ReactNode) => (
            <div
                style={{
                    bottom: "-55px",
                    left: "40%",
                }}
            >
                <ul style={{
                    margin: "0px"
                }}> {dots} </ul>
            </div>
        ),
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };
    const toggleQuote = (id: number) => {
        setExpandedQuotes((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className="w-full mx-auto px-4 py-10 shadow-xl rounded-xl border">
            <Slider {...settings} ref={sliderRef}>
                {testimonials.map((item) => {
                    const isLongQuote = item.quote.length > MAX_CHARACTERS;
                    const isExpanded = expandedQuotes[item.id];
                    return (
                        <div key={item.id} className="px-4  py-2 gap-4">
                            <div className="bg-blue-50 h-full flex flex-col justify-between p-6 rounded-xl">
                                <p className="text-md text-[#1c2d68] font-medium mb-4">
                                    {isLongQuote && !isExpanded
                                        ? `${item.quote.slice(0, MAX_CHARACTERS)}...`
                                        : item.quote}
                                    {isLongQuote && (
                                        <button
                                            onClick={() => toggleQuote(item.id)}
                                            className="text-blue-500 font-medium text-sm ml-2 hover:underline"
                                        >
                                            {isExpanded ? "Read Less" : "Read More"}
                                        </button>
                                    )}
                                </p>
                                <div className="flex items-center space-x-4 mt-4">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-semibold text-[#1c2d68]">{item.name}</p>
                                        <p className="text-sm text-gray-700">{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
            <div className="flex w-full px-4 justify-start items-center space-x-4 mt-6">
                <button
                    onClick={handlePrev}
                    className="bg-blue-50 rounded-full text-blue-600 d p-2  ">
                    <ArrowLeftIcon className='h-5 w-5' />
                </button>
                <button
                    onClick={handleNext}
                    className="bg-blue-50 rounded-full text-blue-600 p-2 ">
                    <ArrowRightIcon className='h-5 w-5' />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
