import React from "react";

interface GlowingButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}
const GlowingButton: React.FC<GlowingButtonProps> = ({
  label,
  onClick,
  className = "",
}) => {
  const buttonClasses = `
    bg-[#215FF6]
    min-w-[200px]
    text-md 
    py-[8px]
    px-10 
    rounded-2xl
    cursor-pointer 
    hover:animate-[glowing_1.3s_infinite] 
    transition-all 
    duration-300
  `;
  const glowingAnimation = `
    @keyframes glowing {
      0% {
        background-color: #215FF6;
        box-shadow: 0 0 5px #215FF6;
      }
      50% {
        background-color: #215FF6;
        box-shadow: 0 0 30px #215FF6;
      }
      100% {
        background-color: #215FF6;
        box-shadow: 0 0 10px #215FF6;
      }
    }
  `;

  return (
    <>
      <style>{glowingAnimation}</style>
      <button onClick={onClick} className={`${buttonClasses} ${className}`}>
        {label}
      </button>
    </>
  );
};

export default GlowingButton;
