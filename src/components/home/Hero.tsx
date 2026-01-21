import { siteConfig } from '../../config';
import { FadeIn } from '../animations';
import './Hero.scss';
import { FolderGit2 } from 'lucide-react';

export const Hero = () => {
    return (
        <div className="hero">
            <FadeIn delay={0.4} direction="up" distance={20}>
                <h1 className="hero__name primary">{siteConfig.name}</h1>
            </FadeIn>

            <FadeIn delay={0.6} direction="up" distance={20}>
                <h2 className="hero__title primary">{siteConfig.title}</h2>
            </FadeIn>

            <FadeIn delay={0.8} direction="up" distance={20}>
                <p className="hero__subtitle">
                    <FolderGit2 size={14} />
                    {siteConfig.subtitle}
                </p>
            </FadeIn>
        </div>
    );
};

export default Hero;
