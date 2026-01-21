import { Link } from 'react-router-dom';
import { projects } from '../../config';
import { ProjectCard } from './ProjectCard';
import './ProjectList.scss';
import { FadeIn } from '../animations';

export const ProjectList = () => {
    return (
        <div className="project-list">
            <div className="project-list__content">
                {projects.map((project, index) => (
                    <ProjectCard key={project.slug} project={project} index={index} />
                ))}

                <FadeIn delay={1 + (projects.length * 0.1)} direction="up" distance={10}>
                    <Link to="/archive" className="project-list__more">
                        Show more projects +
                    </Link>
                </FadeIn>
            </div>
        </div>
    );
};

export default ProjectList;
