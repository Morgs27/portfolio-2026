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
    const particlesRef = useRef<Particle[]>([]);
    const animationsRef = useRef<gsap.core.Tween[]>([]);

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
                const endY = 110;
                const duration = speed;

                gsap.set(particle, { top: `${startY}%` });

                const anim = gsap.to(particle, {
                    top: `${endY}%`,
                    duration,
                    ease: 'none',
                    delay: Math.random() * speed, // Stagger start times
                    onComplete: () => {
                        // Reset and restart
                        gsap.set(particle, {
                            top: `${startY}%`,
                            left: `${Math.random() * 100}%` // Randomize x position
                        });
                        animateParticle();
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

    return <div ref={containerRef} className="particle-background" />;
};

export default ParticleBackground;
