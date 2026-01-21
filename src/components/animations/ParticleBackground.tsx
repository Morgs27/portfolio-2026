import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './ParticleBackground.scss';

interface Particle {
    element: HTMLDivElement;
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
}

interface ParticleBackgroundProps {
    particleCount?: number;
    minSize?: number;
    maxSize?: number;
    minSpeed?: number;
    maxSpeed?: number;
    minOpacity?: number;
    maxOpacity?: number;
}

const rippleColors = [
    'white'
];

export const ParticleBackground = ({
    particleCount = 50,
    minSize = 1,
    maxSize = 3,
    minSpeed = 20,
    maxSpeed = 60,
    minOpacity = 0.5,
    maxOpacity = 0.5,
}: ParticleBackgroundProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const rippleContainerRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationsRef = useRef<gsap.core.Tween[]>([]);

    // Create a ripple effect at the landing position
    const createRipple = (xPercent: number, size: number) => {
        const rippleContainer = rippleContainerRef.current;
        if (!rippleContainer) return;

        // Create multiple concentric ripples for more impact
        const rippleCount = 1
        const baseColor = rippleColors[Math.floor(Math.random() * rippleColors.length)];

        for (let i = 0; i < rippleCount; i++) {
            const ripple = document.createElement('div');
            ripple.className = 'ripple';

            // Position at bottom of screen
            const xPos = (xPercent / 100) * window.innerWidth;
            ripple.style.left = `${xPos}px`;
            ripple.style.bottom = '0px';

            // Color based on palette
            ripple.style.setProperty('--ripple-color', baseColor);

            rippleContainer.appendChild(ripple);

            // Animate the ripple expanding and fading
            const maxScale = 5 + size * 5 + Math.random() * 5;
            const duration = 0.8 + Math.random() * 0.5 + (i * 0.2);

            gsap.fromTo(ripple,
                {
                    scale: 0,
                    opacity: 0.9 - (i * 0.2),
                },
                {
                    scale: maxScale,
                    opacity: 0,
                    duration,
                    delay: i * 0.1, // Stagger concentric ripples
                    ease: 'power2.out',
                    onComplete: () => {
                        ripple.remove();
                    },
                }
            );
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Clear existing particles
        container.innerHTML = '';
        particlesRef.current = [];
        animationsRef.current.forEach(anim => anim.kill());
        animationsRef.current = [];

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            const size = minSize + Math.random() * (maxSize - minSize);
            const opacity = minOpacity + Math.random() * (maxOpacity - minOpacity);
            const x = Math.random() * 100;
            const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${x}%`;
            particle.style.opacity = `${opacity}`;

            container.appendChild(particle);

            const particleData: Particle = {
                element: particle,
                x,
                y: -10,
                size,
                speed,
                opacity,
            };

            particlesRef.current.push(particleData);

            // Animate particle falling
            const animateParticle = () => {
                const startY = -10;
                const endY = 100; // Stop at bottom of viewport
                const duration = speed;
                const currentX = Math.random() * 100;

                gsap.set(particle, {
                    top: `${startY}%`,
                    left: `${currentX}%`
                });

                const anim = gsap.to(particle, {
                    top: `${endY}%`,
                    duration,
                    ease: 'none',
                    delay: Math.random() * speed, // Stagger start times
                    onComplete: () => {
                        // Create ripple effect at landing position
                        createRipple(currentX, size);

                        // Quick fade out the particle
                        gsap.to(particle, {
                            opacity: 0,
                            duration: 0.15,
                            onComplete: () => {
                                // Reset and restart
                                gsap.set(particle, {
                                    top: `${startY}%`,
                                    opacity: particleData.opacity,
                                });
                                animateParticle();
                            },
                        });
                    },
                });

                animationsRef.current.push(anim);
            };

            animateParticle();
        }

        return () => {
            animationsRef.current.forEach(anim => anim.kill());
            animationsRef.current = [];
        };
    }, [particleCount, minSize, maxSize, minSpeed, maxSpeed, minOpacity, maxOpacity]);

    return (
        <>
            <div ref={containerRef} className="particle-background" />
            <div ref={rippleContainerRef} className="ripple-container" />
        </>
    );
};

export default ParticleBackground;
