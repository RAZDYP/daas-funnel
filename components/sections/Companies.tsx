import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";
import Oracle from "@/public/images/companies/oracle.svg";


// IMAGES
import AwsLogo from "@/public/images/services/aws.svg";
import GcpLogo from "@/public/images/services/gcp.svg";
import ChatGptLogo from "@/public/images/services/chat-gpt.svg";

import GoogleGeminiLogo from "@/public/images/services/google-gemini.svg";
import GoogleTagManagerLogo from "@/public/images/services/google-tag-manager.jpg";
import HubspotLogo from "@/public/images/services/hubspot.svg";
import GhlLogo from "@/public/images/services/ghl.png"

import Salesforce from "@/public/images/services/salesforce.svg";
import CloudfareIcon from "@/public/images/services/cloudfare.svg";

const companies = [
    {
        name: "AWS",
        img: AwsLogo,
        size: 70
    },
    {
        name: "Hubspot",
        img: HubspotLogo,
        size: 100
    },
    {
        name: "ChatGPT",
        img: ChatGptLogo,
        size: 70
    },
    {
        name: "Oracle",
        img: Oracle,
        size: 100
    },
    {
        name: "GCP",
        img: GcpLogo,
        size: 10
    },

    {
        name: "GoogleGemini",
        img: GoogleGeminiLogo,
        size: 130
    },
    {
        name: "GoogleTagManager",
        img: GoogleTagManagerLogo,
        size: 100
    },
    {
        name: "Salesforce",
        img: Salesforce,
        size: 100
    },
    {
        name: "GHL",
        img: GhlLogo,
        size: 150
    },
    {
        name: "Cloudfare",
        img: CloudfareIcon,
        size: 100
    }


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
                "relative w-32 flex items-center justify-center cursor-pointer overflow-hidden rounded-xl  p-4",
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
        <>

            <div className="relative flex  w-full sm:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[80%] flex-col items-center justify-center overflow-hidden  bg-background ">
                <p className='text-[#1c2d68] text-center text-[26px] sm:text-[36px] md:text-[48px]  font-semibold'>
                    We are certified experts in
                </p>
                <Marquee pauseOnHover className="[--duration:20s]">
                    {companies.map((company, index) => (
                        <ReviewCard key={index} {...company} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </>
    );
}
