import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getTagsByIds } from '../../config';
import type { Project } from '../../types';
import { FadeIn } from '../animations';
import './ProjectCard.scss';
import { getTypesByIds } from '../../config/types';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const tags = getTagsByIds(project.tags);
    const delay = 1 + (index * 0.1); // Stagger animations starting after hero

    const type = getTypesByIds(project.types)[0];

    console.log(type);

    const Icon = type.icon;

    return (
        <FadeIn delay={delay} direction="left" distance={20} className="project-card-wrapper">
            <Link to={`/project/${project.slug}`} className="project-card">
                <div className="project-card__info">
                    {project.logo && (
                        <div className="project-card__logo">
                            <img src={project.logo} alt={`${project.title} logo`} />
                        </div>
                    )}
                    <h3 className="project-card__title">{project.title}</h3>

                    <div className="project-card__tags">
                        {tags.map((tag) => {
                            const Icon = tag.icon;
                            return (
                                <div
                                    key={tag.id}
                                    className="project-card__tag"
                                    style={{ color: tag.color }}
                                    title={tag.label}
                                >
                                    <Icon size={16} />
                                </div>
                            );
                        })}
                    </div>

                    {/* <span className="project-card__separator">•</span>

                    <span className="project-card__type">
                        <Icon size={12} />
                        {type.label}
                    </span> */}
                </div>

                <div className="project-card__meta">
                    <span className="project-card__type">
                        <Icon size={12} />
                        {type.label}
                    </span>
                    <span className="project-card__separator">•</span>
                    <span className="project-card__year">{project.year}</span>

                    <ArrowRight className="project-card__arrow" size={20} />
                </div>
            </Link>
        </FadeIn>
    );
};

export default ProjectCard;
