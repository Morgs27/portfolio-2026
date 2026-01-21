import {
    Code,
    Palette,
    Globe,
    Database,
    Smartphone,
    Brain,
    Gamepad2,
    Server
} from 'lucide-react';
import type { Tag } from '../types';

// Pastel color palette
export const colors = {
    mint: '#A8E6CF',
    lavender: '#DCD0FF',
    peach: '#FFCAB0',
    sky: '#A8D5E5',
    rose: '#FFB5BA',
    lemon: '#FFF9A5',
    sage: '#C1E1C1',
    coral: '#FFB5A7',
};

export const tags: Tag[] = [
    {
        id: 'web',
        label: 'Web',
        color: colors.sky,
        icon: Globe,
        tooltip: 'Web Development',
    },
    {
        id: 'ai',
        label: 'AI',
        color: colors.lavender,
        icon: Brain,
        tooltip: 'Artificial Intelligence',
    },
    {
        id: 'mobile',
        label: 'Mobile',
        color: colors.peach,
        icon: Smartphone,
        tooltip: 'Mobile Development',
    },
    {
        id: 'frontend',
        label: 'Frontend',
        color: colors.mint,
        icon: Palette,
        tooltip: 'Frontend Development',
    },
    {
        id: 'backend',
        label: 'Backend',
        color: colors.sage,
        icon: Server,
        tooltip: 'Backend Development',
    },
    {
        id: 'fullstack',
        label: 'Full Stack',
        color: colors.coral,
        icon: Code,
        tooltip: 'Full Stack Development',
    },
    {
        id: 'data',
        label: 'Data',
        color: colors.lemon,
        icon: Database,
        tooltip: 'Data Engineering',
    },
    {
        id: 'games',
        label: 'Games',
        color: colors.rose,
        icon: Gamepad2,
        tooltip: 'Game Development',
    },
];

// Helper to get tag by ID
export const getTagById = (id: string): Tag | undefined => {
    return tags.find(tag => tag.id === id);
};

// Helper to get multiple tags by IDs
export const getTagsByIds = (ids: string[]): Tag[] => {
    return ids.map(id => getTagById(id)).filter((tag): tag is Tag => tag !== undefined);
};
