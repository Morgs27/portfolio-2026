import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Diamond, ArrowLeft } from 'lucide-react';
import { socialLinks, resumeLink } from '../../config';
import { FadeIn } from '../animations';
import { ResumeModal } from './ResumeModal';
import './Header.scss';

export const Header = () => {
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Check if we're on a project page
    const isProjectPage = location.pathname.startsWith('/project/');

    const handleBack = () => {
        navigate('/');
    };

    return (
        <>
            <header className="header">
                <FadeIn delay={0.2} direction="down">
                    <div className="header__left">
                        {isProjectPage && (
                            <button
                                onClick={handleBack}
                                className="header__back"
                                aria-label="Back to home"
                            >
                                <ArrowLeft size={20} />
                                Home
                            </button>
                        )}
                        <button
                            onClick={() => setIsResumeOpen(true)}
                            className="header__resume"
                        >
                            <Diamond size={18} />
                            <span>{resumeLink.label}</span>
                        </button>
                    </div>
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
