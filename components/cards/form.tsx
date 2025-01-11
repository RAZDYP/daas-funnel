import Input from '@/components/inputs/input'
import GlowingButton from '@/components/GlowingButton';

export default function Example() {
    return (
        <div className='flex flex-col w-full items-center gap-10'>
            <div className='grid w-full grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 '>
                <Input label='First Name' type='text' />
                <Input label='Last Name' type='text' />
                <Input label='Company Name' type='text' />
                <Input label='LinkedIn URL' type='text' />
                <Input label='Email' type='email' />
                <Input label='Message' type='text' />
            </div>
            <GlowingButton label='Submit' />
        </div>
    );
}

