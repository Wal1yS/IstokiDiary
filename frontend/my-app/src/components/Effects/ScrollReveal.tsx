import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    duration?: number;
    distance?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
    children, 
    direction = "up", 
    delay = 0, 
    duration = 0.8,
    distance = 50 
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Если хотим, чтобы анимация срабатывала только один раз:
                    observer.unobserve(entry.target);
                }
            });
        });

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    const getTransform = () => {
        if (isVisible) return "none";
        switch (direction) {
            case "up": return `translateY(${distance}px)`;
            case "down": return `translateY(-${distance}px)`;
            case "left": return `translateX(${distance}px)`;
            case "right": return `translateX(-${distance}px)`;
            default: return "none";
        }
    };

    return (
        <div
            ref={domRef}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: getTransform(),
                transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
                willChange: "opacity, transform"
            }}
        >
            {children}
        </div>
    );
};
