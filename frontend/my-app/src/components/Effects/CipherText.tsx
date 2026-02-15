import React, { useState } from "react";

interface CipherTextProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    style?: React.CSSProperties;
}

export const CipherText: React.FC<CipherTextProps> = ({ text, speed = 30, delay = 1/3, className, style }) => {
    const [displayText, setDisplayText] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789!@#$%^&*()";

    const scramble = () => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(prev => 
                prev.split("").map((_, index) => {
                    if (index < iteration) return text[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("")
            );

            if (iteration >= text.length) clearInterval(interval);
            iteration += delay;
        }, speed);
    };

    return (
        <span 
            className={className}
            onMouseEnter={scramble} 
            style={{ cursor: 'crosshair', transition: 'all 0.3s', ...style }}
        >
            {displayText}
        </span>
    );
};
