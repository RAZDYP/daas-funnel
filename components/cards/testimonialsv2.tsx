import React, { useRef } from "react";
import Slider from "react-slick";

const testimonials = [
    {
        id: 1,
        quote:
            "Simform’s iterative feedback process refined the project continuously, aligning closely with evolving client needs.",
        name: "Danielle Beben",
        title: "CEO, Emrana Engineering",
        image: "/images/user1.jpg", // Dummy image
    },
    {
        id: 2,
        quote:
            "Simform’s project management and technical agility boosted our app’s performance, meeting evolving market demands.",
        name: "Justin Wollman",
        title: "Product Manager, SwiftShopper",
        image: "/images/user2.jpg", // Dummy image
    },
    {
        id: 3,
        quote:
            "Simform’s solutions empowered us to achieve better scalability, faster development, and enhanced user experience.",
        name: "Sophia Reynolds",
        title: "CTO, TechEase",
        image: "/images/user3.jpg", // Dummy image
    },
];

const Carousel = () => {
    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Show 2 cards max
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        appendDots: (dots) => (
            <div
                style={{
                    bottom: "-45px",
                }}
            >
                <ul>{dots}</ul>
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
        sliderRef.current.slickNext();
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <Slider {...settings} ref={sliderRef}>
                {testimonials.map((item) => (
                    <div key={item.id} className="px-4">
                        <div className="bg-purple-100 p-6 rounded-xl shadow-lg">
                            <p className="text-lg text-purple-900 font-medium mb-4">
                                “{item.quote}”
                            </p>
                            <div className="flex items-center space-x-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-purple-900">{item.name}</p>
                                    <p className="text-sm text-purple-600">{item.title}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </Slider>
            <div className="flex justify-center space-x-4 mt-20">
                <button
                    onClick={handlePrev}
                    className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
                    Next
                </button>
            </div>
        </div>
    );
};

export default Carousel;
