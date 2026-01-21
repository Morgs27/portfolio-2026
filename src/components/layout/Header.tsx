import { useState } from 'react';
import { Diamond } from 'lucide-react';
import { socialLinks, resumeLink } from '../../config';
import { FadeIn } from '../animations';
import { ResumeModal } from './ResumeModal';
import './Header.scss';

export const Header = () => {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    return (
        <>
            <header className="header">
                <FadeIn delay={0.2} direction="down">
                    <button
                        onClick={() => setIsResumeOpen(true)}
                        className="header__resume"
                    >
                        <Diamond size={18} />
                        <span>{resumeLink.label}</span>
                    </button>
                </FadeIn>

                <FadeIn delay={0.3} direction="down">
                    <nav className="header__nav">
                        {socialLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={link.label}
                                    href={link.address}
                                    target={link.newTab ? '_blank' : undefined}
                                    rel={link.newTab ? 'noopener noreferrer' : undefined}
                                    className="header__link"
                                    aria-label={link.label}
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </nav>
                </FadeIn>
            </header>

            <ResumeModal
                isOpen={isResumeOpen}
                onClose={() => setIsResumeOpen(false)}
            />
        </>
    );
};

export default Header;

