import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    distance?: number;
    className?: string;
    once?: boolean;
}

export const FadeIn = ({
    children,
    delay = 0,
    duration = 0.6,
    direction = 'up',
    distance = 30,
    className = '',
    once = true,
}: FadeInProps) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Set initial state based on direction
        const initialState: gsap.TweenVars = {
            opacity: 0,
        };

        switch (direction) {
            case 'up':
                initialState.y = distance;
                break;
            case 'down':
                initialState.y = -distance;
                break;
            case 'left':
                initialState.x = distance;
                break;
            case 'right':
                initialState.x = -distance;
                break;
        }

        gsap.set(element, initialState);

        // Animate to final state
        gsap.to(element, {
            opacity: 1,
            x: 0,
            y: 0,
            duration,
            delay,
            ease: 'power2.out',
        });

        return () => {
            if (!once) {
                gsap.set(element, initialState);
            }
        };
    }, [delay, duration, direction, distance, once]);

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
};

export default FadeIn;
