"use client";

import { useState, useEffect } from "react";

const HeaderText = () => {
    const [phraseText] = useState([
        "Developers?", "Technical consultants?", "Innovators?"
    ])
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopIndex, setLoopIndex] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    useEffect(() => {
        const handleTyping = () => {
            const currentPhrase = phraseText[loopIndex % phraseText.length];
            if (isDeleting) {
                setText((prev) => prev.slice(0, -1));
                setTypingSpeed(50);
            } else {
                setText((prev) => currentPhrase.slice(0, prev.length + 1));
                setTypingSpeed(50);
            }

            if (!isDeleting && text === currentPhrase) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopIndex((prev) => prev + 1);
            }
        };
        const typingTimeout = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(typingTimeout);
    }, [text, isDeleting, typingSpeed, loopIndex, phraseText]);
    return (
        <div className="text-center text-[26px] sm:text-[36px] md:text-[48px]  font-semibold">
            Are you looking for <span className="text-[#215FF6]">{text}</span>
        </div>
    );
};
export default HeaderText;
