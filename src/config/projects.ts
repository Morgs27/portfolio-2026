import type { Project } from '../types';

import { flightless } from './projects/flightless';
import { hundred } from './projects/hundred';
import { dilidue } from './projects/dilidue';

export const projects: Project[] = [
    flightless,
    dilidue,
    hundred,
    {
        title: "SWGOh",
        slug: "SWGOh",
        tags: ["business", "web", "data", "ai"],
        types: ["founder"],
        year: "2025",
        socialLinks: [

        ],
        coverImage: "",
        description: "",
        body: [
            {
                type: "text",
                content: "",
            },
        ],
    },
    {
        title: "SWGOh",
        slug: "SWGOh",
        tags: ["business", "web", "data", "ai"],
        types: ["founder"],
        year: "2025",
        socialLinks: [

        ],
        coverImage: "",
        description: "",
        body: [
            {
                type: "text",
                content: "",
            },
        ],
    },
    {
        title: "SWGOh",
        slug: "SWGOh",
        tags: ["business", "web", "data", "ai"],
        types: ["founder"],
        year: "2025",
        socialLinks: [

        ],
        coverImage: "",
        description: "",
        body: [
            {
                type: "text",
                content: "",
            },
        ],
    }
];

// Helper to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
    return projects.find(project => project.slug === slug);
};

// Get featured projects (first N projects)
export const getFeaturedProjects = (count: number = 4): Project[] => {
    return projects.slice(0, count);
};
