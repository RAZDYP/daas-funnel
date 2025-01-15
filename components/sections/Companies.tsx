import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";
import Yareta from "@/public/images/companies/yareta.svg";
import Compfox from "@/public/images/companies/compfox.svg";
import Oracle from "@/public/images/companies/oracle.svg";
import Ovvy from "@/public/images/companies/ovvy.svg";
import Enrollio from "@/public/images/companies/enrollio.svg";
import GymGenius from "@/public/images/companies/gym-genius.svg";

const companies = [
    {
        name: "Yareta",
        img: Yareta,
    },
    {
        name: "Compfox",
        img: Compfox,
    },
    {
        name: "Oracle",
        img: Oracle,
    },
    {
        name: "Ovvy",
        img: Ovvy,
    },
    {
        name: "Enrollio",
        img: Enrollio,
    },
    {
        name: "GymGenius",
        img: GymGenius,
    },
];
const ReviewCard = ({
    img,
    name,
}: {
    img: string;
    name: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-44 flex items-center justify-center cursor-pointer overflow-hidden rounded-xl  p-4",
                "hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center justify-center gap-2">
                <Image src={img} alt={name} />
            </div>
        </figure>
    );
};

export default function Companies() {
    return (
        <div className="relative flex  w-full sm:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[80%] flex-col items-center justify-center overflow-hidden  bg-background ">
            <Marquee pauseOnHover className="[--duration:20s]">
                {companies.map((company, index) => (
                    <ReviewCard key={index} {...company} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}
