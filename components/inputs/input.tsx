import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
const Input: React.FC<InputProps> = ({ label, ...props }) => {
    return (
        <div className="relative w-full">
            <label
                className="absolute -top-2.5 left-4 bg-white px-1 text-md text-[#1c2d68]"
                htmlFor={props.id || props.name}
            >
                {label}
            </label>
            <input
                {...props}
                className="w-full rounded-lg border-2 border-[#1c2d68] bg-white px-4 py-2 sm:py-2 md:py-3 lg:py-3 xl:py-3 2xl:py-3 text-black outline-none "
            />
        </div>
    );
};
export default Input;
