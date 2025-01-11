import React, { useState, useEffect } from "react";
import Image from "next/image";
import Compfox from "@/public/images/portfolio/compfox.svg"
import Yareta from "@/public/images/portfolio/yareta.svg"
import Enrollio from "@/public/images/portfolio/enrollio.svg"
import Ovvy from "@/public/images/portfolio/ovvy.svg"
import { ArrowRightIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
const HoverCard = () => {
    const portFolioCards = [
        {
            image: Compfox,
            title: " Ai- Powered Legal Research All ",
        },
        {
            image: Yareta,
            title: "Ai - Powered Business and Investor",
        },
        {
            image: Enrollio,
            title: "Custom Studio Dance Portal in GHL",
        },
        {
            image: Ovvy,
            title: "Ai -Powered Real Estate App",
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? portFolioCards.length - 1 : prevIndex - 1
        );
    };
    const handleNext = () => {
        // setCurrentIndex((prevIndex) =>
        //     prevIndex === portFolioCards.length - 1 ? 0 : prevIndex + 1
        // );
        if (screenSize === "small" && currentIndex === portFolioCards.length - 1) {
            setCurrentIndex(0);
        } else if (screenSize === "medium" && currentIndex === portFolioCards.length - 1) {
            setCurrentIndex(0);
        }
        else if (screenSize === "large" && currentIndex === portFolioCards.length - 3) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };
    const [screenSize, setScreenSize] = useState("large");
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setScreenSize("small");
            } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                setScreenSize("medium");
            } else {
                setScreenSize("large");
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const getTranslateX = () => {
        if (screenSize === "small") {
            return currentIndex * 100;
        } else if (screenSize === "medium") {
            return currentIndex * 70;
        } else {
            return currentIndex * 33.3333;
        }
    };
    return (
        <>
            <div className="relative w-full  mx-auto">
                <div className="flex overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${getTranslateX()}%)`,
                            width: `${portFolioCards.length * 100}%`,
                        }}
                    >
                        {
                            portFolioCards.map((card, index) => (
                                <div
                                    key={index}
                                    className="w-full sm:w-full md:w-[66.666%] lg:w-[33.3333%] xl:w-[33.3333%] 2xl:w-[33.3333%]  p-4 flex-shrink-0">
                                    <div
                                        key={index}
                                        className="relative overflow-hidden rounded-lg shadow-lg group">
                                        <Image src={card.image} alt="compfox logo" className="object-cover" />
                                        <div className="absolute flex items-center justify-between gap-4 py-4  bottom-[0px] left-0 w-full rounded-bl-[30px] rounded-br-[30px] p-4 bg-gray-900/40 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <h2 className="text-xl text-white font-semibold">{card.title}</h2>
                                            <button>
                                                <ArrowRightIcon className="h-6 w-6 font-bold text-white" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
                    onClick={handlePrev}
                >
                    <ChevronLeftIcon className="h-5 w-5 text-gray-800" />
                </button>
                <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
                    onClick={handleNext}
                >
                    <ChevronRightIcon className="h-5 w-5 text-gray-800" />
                </button>
            </div>

        </>
    );
};

export default HoverCard;
