import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag as TagIcon } from 'lucide-react';
import { getProjectBySlug, getTagsByIds } from '../config';
import { Layout } from '../components/layout';
import { BlockRenderer } from '../components/project';
import { FadeIn } from '../components/animations';
import './ProjectPage.scss';

export const ProjectPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = slug ? getProjectBySlug(slug) : undefined;

    // Scroll to top on mount
    useEffect(() => {
        const scrollContainer = document.querySelector('.layout--scrollable');
        if (scrollContainer) {
            scrollContainer.scrollTop = 0;
        }
    }, [slug]);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    const tags = getTagsByIds(project.tags);

    return (
        <Layout scrollable={true} showParticles={false}>
            <div className="project-page container">
                <FadeIn direction="down" delay={0.2} className="project-page__back">
                    <Link to="/" className="back-link">
                        <ArrowLeft size={20} />
                        <span>Back to projects</span>
                    </Link>
                </FadeIn>

                <article className="project-content">
                    <FadeIn direction="up" delay={0.3}>
                        <header className="project-header">
                            <h1 className="project-title">{project.title}</h1>

                            <div className="project-meta">
                                <div className="meta-item">
                                    <Calendar size={16} />
                                    <span>{project.year}</span>
                                </div>
                                {tags.map(tag => (
                                    <div key={tag.id} className="meta-item" style={{ color: tag.color }}>
                                        <TagIcon size={16} />
                                        <span>{tag.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="project-links">
                                {project.socialLinks.map(link => {
                                    const Icon = link.icon;
                                    return (
                                        <a
                                            key={link.label}
                                            href={link.address}
                                            target={link.newTab ? '_blank' : undefined}
                                            rel={link.newTab ? 'noopener noreferrer' : undefined}
                                            className="project-link"
                                        >
                                            <Icon size={18} />
                                            <span>{link.label}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </header>
                    </FadeIn>

                    {project.coverImage && (
                        <FadeIn direction="up" delay={0.4} className="project-cover-wrapper">
                            <img
                                src={project.coverImage}
                                alt={project.title}
                                className="project-cover"
                            />
                        </FadeIn>
                    )}

                    <div className="project-body">
                        {project.body.map((block, index) => (
                            <FadeIn key={index} direction="up" delay={0.5 + (index * 0.05)}>
                                <BlockRenderer block={block} />
                            </FadeIn>
                        ))}
                    </div>
                </article>
            </div>
        </Layout>
    );
};

export default ProjectPage;
