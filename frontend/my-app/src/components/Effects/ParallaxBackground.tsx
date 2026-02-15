import { useEffect, useRef, type RefObject } from 'react';
import backgroundImage from '../../assets/images/ChatGPT Image Feb 15, 2026, 07_51_13 PM.png';

export type ParallaxBackgroundProps = {
    scrollContainerRef: RefObject<HTMLElement | null>;
    speed?: number;
};

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
    scrollContainerRef,
    speed = 0.3,
}) => {
    const backgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollEl = scrollContainerRef.current;
        const bgEl = backgroundRef.current;
        if (!scrollEl || !bgEl) return;

        let rafId = 0;
        const update = () => {
            rafId = 0;
            const y = scrollEl.scrollTop * speed;
            bgEl.style.transform = `translate3d(0, ${y}px, 0)`;
        };

        const onScroll = () => {
            if (rafId) return;
            rafId = window.requestAnimationFrame(update);
        };

        update();
        scrollEl.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            scrollEl.removeEventListener('scroll', onScroll);
            if (rafId) window.cancelAnimationFrame(rafId);
        };
    }, [scrollContainerRef, speed]);

    return (
        <div
            ref={backgroundRef}
            style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 0,
                pointerEvents: 'none',
                willChange: 'transform',
            }}
        />
    );
};
