import type { ReactNode } from 'react';
import { Header } from './Header';
import { ParticleBackground } from '../animations';
import './Layout.scss';

interface LayoutProps {
    children: ReactNode;
    showParticles?: boolean;
    scrollable?: boolean;
}

export const Layout = ({
    children,
    showParticles = true,
    scrollable = false
}: LayoutProps) => {
    return (
        <div className={`layout ${scrollable ? 'layout--scrollable' : ''}`}>
            {showParticles && <ParticleBackground />}
            <Header />
            <main className="layout__main">
                {children}
            </main>
        </div>
    );
};

export default Layout;
