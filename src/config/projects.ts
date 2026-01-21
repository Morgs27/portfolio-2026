import type { Project } from '../types';

import { flightless } from './projects/flightless';
import { hundred } from './projects/hundred';
import { dilidue } from './projects/dilidue';

export const projects: Project[] = [
    flightless,
    dilidue,
    hundred,
];

// Helper to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
    return projects.find(project => project.slug === slug);
};

// Get featured projects (first N projects)
export const getFeaturedProjects = (count: number = 4): Project[] => {
    return projects.slice(0, count);
};
