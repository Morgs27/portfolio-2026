import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Diamond, Calendar } from 'lucide-react';
import { getProjectBySlug, getTagsByIds, getTypesByIds, projects } from '../config';
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
    const projectTypes = getTypesByIds(project.types);

    // Get other projects for footer
    const otherProjects = projects.filter(p => p.slug !== project.slug).slice(0, 3);

    return (
        <Layout scrollable={true} showParticles={true}>
            {/* Hero Section with Background Image */}
            <section className="project-hero">
                {project.coverImage && (
                    <div
                        className="project-hero__background"
                        style={{ backgroundImage: `url(${project.coverImage})` }}
                    />
                )}
                <div className="project-hero__overlay" />

                <div className="project-hero__content container">

                    <FadeIn direction="up" delay={0.3}>
                        <h1 className="project-hero__title">{project.title}</h1>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.4}>
                        <div className="project-hero__meta">
                            {projectTypes.map(type => {
                                const TypeIcon = type.icon;
                                return (
                                    <span key={type.id} className="project-hero__meta-item">
                                        <TypeIcon size={16} />
                                        <span>{type.label}</span>
                                    </span>
                                );
                            })}
                            <span className="project-hero__meta-item">
                                <Calendar size={16} />
                                <span>{project.year}</span>
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.7}>
                        <p className="project-hero__intro">{project.description}</p>
                    </FadeIn>


                    <FadeIn direction="up" delay={0.5}>
                        <div className="project-hero__tags">
                            {tags.map(tag => {
                                const TagIcon = tag.icon;
                                return (
                                    <span
                                        key={tag.id}
                                        className="project-hero__tag"
                                        style={{ color: tag.color }}
                                    >
                                        <TagIcon size={16} />
                                        <span>{tag.label}</span>
                                    </span>
                                );
                            })}
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.6}>
                        <div className="project-hero__links">
                            {project.socialLinks.map(link => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={link.label}
                                        href={link.address}
                                        target={link.newTab ? '_blank' : undefined}
                                        rel={link.newTab ? 'noopener noreferrer' : undefined}
                                        className="project-hero__link"
                                    >
                                        <Icon size={16} />
                                        <span>{link.label}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Main Body Content */}
            <article className="project-body container">

                <div className="project-body__content">
                    {project.body.map((block, index) => (
                        <FadeIn key={index} direction="up" delay={0.8 + (index * 0.03)}>
                            <div className="project-body__block">
                                {block.type === 'heading' && (
                                    <Diamond size={12} className="project-body__marker" />
                                )}
                                <BlockRenderer block={block} />
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </article>

            {/* Other Projects Footer */}
            {otherProjects.length > 0 && (
                <footer className="project-footer container">
                    <FadeIn direction="up" delay={0.2}>
                        <p className="project-footer__label">Some of my other projects</p>
                        <div className="project-footer__projects">
                            {otherProjects.map(p => (
                                <Link
                                    key={p.slug}
                                    to={`/project/${p.slug}`}
                                    className="project-footer__project"
                                >
                                    {p.title}
                                </Link>
                            ))}
                        </div>
                    </FadeIn>
                </footer>
            )}
        </Layout>
    );
};

export default ProjectPage;
