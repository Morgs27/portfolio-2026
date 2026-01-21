import { Github, Globe, ExternalLink } from 'lucide-react';
import type { Project } from '../types';

export const projects: Project[] = [
    {
        title: 'SWGOH Team Manager',
        slug: 'swgoh-team-manager',
        tags: ['web', 'fullstack'],
        types: ['Project'],
        year: '2019',
        socialLinks: [
            {
                label: 'GitHub',
                address: 'https://github.com/yourusername/swgoh',
                icon: Github,
                newTab: true,
            },
            {
                label: 'Live Demo',
                address: 'https://swgoh.example.com',
                icon: Globe,
                newTab: true,
            },
        ],
        coverImage: '/images/projects/swgoh-cover.jpg',
        description: 'A team management tool for Star Wars: Galaxy of Heroes players.',
        body: [
            {
                type: 'heading',
                level: 2,
                content: 'Overview',
            },
            {
                type: 'text',
                content: 'Add your project description here. Explain what the project does, the problems it solves, and its key features.',
            },
            {
                type: 'divider',
            },
            {
                type: 'heading',
                level: 2,
                content: 'Technologies Used',
            },
            {
                type: 'list',
                items: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
                ordered: false,
            },
            {
                type: 'divider',
            },
            {
                type: 'heading',
                level: 2,
                content: 'Screenshots',
            },
            {
                type: 'image',
                src: '/images/projects/swgoh-screenshot.jpg',
                alt: 'SWGOH Team Manager Screenshot',
                caption: 'Main dashboard view',
            },
        ],
    },
    {
        title: 'Mythelix',
        slug: 'mythelix',
        tags: ['web', 'ai'],
        types: ['Project', 'Co-founder'],
        year: '2024',
        socialLinks: [
            {
                label: 'Website',
                address: 'https://mythelix.example.com',
                icon: ExternalLink,
                newTab: true,
            },
        ],
        coverImage: '/images/projects/mythelix-cover.jpg',
        description: 'An AI-powered creative platform.',
        body: [
            {
                type: 'heading',
                level: 2,
                content: 'About Mythelix',
            },
            {
                type: 'text',
                content: 'Add your project description here.',
            },
        ],
    },
    {
        title: 'TSP Visualiser',
        slug: 'tsp-visualiser',
        tags: ['ai', 'web'],
        types: ['Project'],
        year: '2019',
        socialLinks: [
            {
                label: 'GitHub',
                address: 'https://github.com/yourusername/tsp',
                icon: Github,
                newTab: true,
            },
        ],
        coverImage: '/images/projects/tsp-cover.jpg',
        description: 'Interactive visualisation of Travelling Salesman Problem algorithms.',
        body: [
            {
                type: 'heading',
                level: 2,
                content: 'What is TSP?',
            },
            {
                type: 'text',
                content: 'The Travelling Salesman Problem (TSP) is a classic algorithmic problem in the field of computer science and operations research.',
            },
        ],
    },
    {
        title: 'Simulation Framework',
        slug: 'simulation-framework',
        tags: ['web', 'ai'],
        types: ['Project'],
        year: '2019',
        socialLinks: [
            {
                label: 'GitHub',
                address: 'https://github.com/yourusername/sim',
                icon: Github,
                newTab: true,
            },
        ],
        coverImage: '/images/projects/sim-cover.jpg',
        description: 'A framework for running and visualising simulations.',
        body: [
            {
                type: 'heading',
                level: 2,
                content: 'Framework Overview',
            },
            {
                type: 'text',
                content: 'Add your project description here.',
            },
        ],
    },
];

// Helper to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
    return projects.find(project => project.slug === slug);
};

// Get featured projects (first N projects)
export const getFeaturedProjects = (count: number = 4): Project[] => {
    return projects.slice(0, count);
};
