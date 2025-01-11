import React, { useState, ReactNode } from "react";
import Client1 from "@/public/images/clients/client-1.svg";
import Client2 from "@/public/images/clients/client-2.svg";
import Client3 from "@/public/images/clients/client-3.svg";
import Image from "next/image";
import Meteors from "@/components/ui/meteors";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
interface DynamicCarouselProps {
    children: ReactNode[];
}
const DynamicCarousel: React.FC<DynamicCarouselProps> = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
    };
    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? children.length - 1 : prevIndex - 1
        );
    };
    return (
        <div id="indicators-carousel" className="relative w-full" data-carousel="static">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {children.map((child, index) => (
                    <div
                        key={index}
                        className={`absolute w-full duration-700 ease-in-out top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${index === activeIndex ? "block" : "hidden"
                            }`}
                        data-carousel-item={index === activeIndex ? "active" : undefined}
                    >
                        {child}
                    </div>
                ))}
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                {children.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-2 h-2 rounded-full ${index === activeIndex ? "bg-[#215FF6]" : "bg-gray-300"
                            }`}
                        aria-current={index === activeIndex ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => setActiveIndex(index)}
                    ></button>
                ))}
            </div>
            <button className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none "
                onClick={handlePrev}>
                <ChevronLeftIcon className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" />
            </button>
            <button className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handleNext}>
                <ChevronRightIcon className="w-4 h-4 text-white dark:text-gray-800" />
            </button>
        </div>
    );
};
const testimonialsDetails = [
    {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nisl nec velit tempor volutpat. Integer blandit, justo id facilisis consequat, nisi nisi accumsan lorem, et scelerisque urn",
        image: Client1,
        name: "John Doe",
    },
    {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nisl nec velit tempor volutpat. Integer blandit, justo id facilisis consequat, nisi nisi accumsan lorem, et scelerisque urn",
        image: Client2,
        name: "John Doe",
    },
    {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nisl nec velit tempor volutpat. Integer blandit, justo id facilisis consequat, nisi nisi accumsan lorem, et scelerisque urn",
        image: Client3,
        name: "John Doe",
    },
]
const CarouselSection = () => {
    return (
        <DynamicCarousel>
            {
                testimonialsDetails.map((testimonial, index) => (
                    <div key={index} className="bg-transparent p-6 sm:p-6 md:p-12 lg:p-14 xl:p-16 2xl:p-18  text-white h-full flex items-center justify-center">
                        <div className="rounded-xl bg-[rgba(41,41,41,0.24)] ">
                            <div className="w-full p-6 sm:p-6 md:p-10 lg:p-12 xl:p-12 2xl:p-12 flex items-center justify-between flex-col rounded-lg gap-6">
                                <p className="text-center">{testimonial.description}</p>
                                <Image src={testimonial.image} alt="client" />
                                <p className="text-center">{testimonial.name}</p>
                                <Meteors number={30} />

                            </div>
                            {/* <BorderBeam duration={3} /> */}
                        </div>
                    </div>
                ))
            }

        </DynamicCarousel>
    );
}
export default CarouselSection;