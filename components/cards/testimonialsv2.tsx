import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import Client1 from '@/public/images/clients/client-1.svg'
import Client2 from '@/public/images/clients/client-2.svg'
import Client3 from '@/public/images/clients/client-3.svg'
import Image from 'next/image'

const testimonials = [
    {
        id: 1,
        quote:
            "Simform’s iterative feedback process refined the project continuously, aligning closely with evolving client needs.",
        name: "Chris Lyle",
        title: "CEO, Emrana Engineering",
        image: Client1
    },
    {
        id: 2,
        quote:
            "Simform’s project management and technical agility boosted our app’s performance, meeting evolving market demands.",
        name: "Justin Wollman",
        title: "Product Manager, SwiftShopper",
        image: Client2
    },
    {
        id: 3,
        quote:
            "Simform’s solutions empowered us to achieve better scalability, faster development, and enhanced user experience. lorem ipsum faster development, and enhanced user experience. lorem ipsum faster development, and enhanced user experience. lorem ipsum faster development, and enhanced user experience. lorem ipsum faster development, and enhanced user experience. lorem ipsum faster development, and enhanced user experience. lorem ipsum",
        name: "Michael Kroll",
        title: "CTO, TechEase",
        image: Client3
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
                                <p className="text-md text-black font-medium mb-4">
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
                                        <p className="font-semibold text-black">{item.name}</p>
                                        <p className="text-sm text-gray-700">{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
            <div className="flex w-full justify-start items-center space-x-4 mt-6">
                <button
                    onClick={handlePrev}
                    className="bg-blue-50 rounded-full text-blue-600 d p-2  ">
                    <ArrowLeftIcon className='h-6 w-6' />
                </button>
                <button
                    onClick={handleNext}
                    className="bg-blue-50 rounded-full text-blue-600 p-2 ">
                    <ArrowRightIcon className='h-6 w-6' />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
