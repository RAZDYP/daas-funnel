import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
function Footer() {
    const currentYear = new Date().getFullYear();
    const linkData = [
        {
            href: "https://www.facebook.com/workwithdaas?mibextid=ZbWKwL",
            icon: <FaFacebookF size={20} />,
        },
        {
            href: "https://www.instagram.com/work_withdaas?igsh=MWNmaWEwYXF0cG5pbw==",
            icon: <FaInstagram size={20} />,
        },
        {
            href: "https://www.linkedin.com/company/daas-developer-s-as-a-service/posts/?feedView=all",
            icon: <FaLinkedinIn size={20} />,
        },
        {
            href: "mailto:workwithdaas.com",
            icon: <FaEnvelope size={20} />,
            text: "admin@workwithdaas.com",
        },
    ];

    return (
        <section className='flex flex-col items-center gap-10 px-4 w-full sm:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[70%]'>
            <footer className=" text-black py-6">
                <div className="mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        {
                            linkData.map((item, index) => (
                                <div key={index} className='flex items-center gap-3'>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-black hover:text-blue-500">
                                        {item.icon}
                                    </a>
                                    {
                                        item.text && (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-black text-sm hover:text-blue-500">
                                                {item.text}
                                            </a>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <p className="text-sm text-center text-gray-500 md:text-left">
                        &copy; {currentYear} DaaS. All rights reserved.
                    </p>
                </div>
            </footer>
        </section>
    )
}
export default Footer