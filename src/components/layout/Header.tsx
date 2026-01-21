import { Link } from 'react-router-dom';
import { Diamond } from 'lucide-react';
import { socialLinks, resumeLink } from '../../config';
import { FadeIn } from '../animations';
import './Header.scss';

export const Header = () => {
    return (
        <header className="header">
            <FadeIn delay={0.2} direction="down">
                <Link to={resumeLink.address} target="_blank" rel="noopener noreferrer" className="header__resume">
                    <Diamond size={18} />
                    <span>{resumeLink.label}</span>
                </Link>
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
    );
};

export default Header;
