import React from 'react'
import SparklesText from "@/components/ui/sparkles-text";
import Form from '@/components/cards/form'
function ContactForm() {
    return (
        <section className='flex flex-col items-center gap-10 px-4 w-full sm:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[70%]'>
            <div>
                <SparklesText text='Send Us Your Queries' className='text-[#215FF6] text-center text-[28px] sm:text-[40px] md:text-[54px] font-semibold' />
                <p className='text-center font-medium text-sm sm:text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>Get your first free consulting session.</p>
            </div>
            <Form />
        </section>
    )
}

export default ContactForm