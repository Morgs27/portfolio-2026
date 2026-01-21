import {
    Briefcase,
    GraduationCap,
    Heart,
    Rocket,
    User,
} from 'lucide-react';
import type { ProjectType } from '../types';

export const types: ProjectType[] = [
    {
        id: 'freelance',
        label: 'Freelance',
        icon: Briefcase,
        tooltip: 'Freelance',
    },
    {
        id: 'education',
        label: 'Education',
        icon: GraduationCap,
        tooltip: 'Education',
    },
    {
        id: 'personal',
        label: 'Personal',
        icon: User,
        tooltip: 'Personal',
    },
    {
        id: 'founder',
        label: 'Founder',
        icon: Rocket,
        tooltip: 'Founder',
    },
    {
        id: 'volunteer',
        label: 'Volunteer',
        icon: Heart,
        tooltip: 'Volunteer',
    },
];

// Helper to get tag by ID
export const getTypeById = (id: string): ProjectType | undefined => {
    return types.find(type => type.id === id);
};

// Helper to get multiple tags by IDs
export const getTypesByIds = (ids: string[]): ProjectType[] => {
    return ids.map(id => getTypeById(id)).filter((type): type is ProjectType => type !== undefined);
};
