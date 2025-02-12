import React, { useState } from 'react';
import Input from '@/components/inputs/input'
import GlowingButton from '@/components/GlowingButton';

export default function Example() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        linkedIn: "",
        email: "",
        message: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = () => {
        const googleFormURL =
            "https://docs.google.com/forms/d/e/1FAIpQLSeaCXq483YHH93ogc4bLmagpeBhxiIjYbpPIUjsTJbSweSdng/formResponse";

        const formParams = new URLSearchParams({
            "entry.1178894767": formData.firstName,
            "entry.1662096404": formData.lastName,
            "entry.29468537": formData.companyName,
            "entry.386766855": formData.linkedIn,
            "entry.1317956911": formData.email,
            "entry.1130344011": formData.message,
        });
        window.open(`${googleFormURL}?${formParams.toString()}`, "_blank");
    };
    return (
        <div className='flex bg-white k flex-col w-full items-center gap-10'>
            <div className='grid w-full grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 '>
                <Input
                    label='First Name'
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <Input
                    label='Last Name'
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <Input
                    label='Company Name'
                    type='text'
                    name='companyName'
                    value={formData.companyName}
                    onChange={handleChange}
                />
                <Input
                    label='LinkedIn URL'
                    type='text'
                    name='linkedIn'
                    value={formData.linkedIn}
                    onChange={handleChange}
                />
                <Input
                    label='Email'
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <Input
                    label='Message'
                    type='text'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>
            <GlowingButton
                label='Submit'
                className='text-white'
                onClick={handleSubmit}
            />
        </div>
    );
}

