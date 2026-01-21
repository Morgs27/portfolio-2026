import {
    Code,
    Palette,
    Globe,
    Database,
    Smartphone,
    Server,
    Store,
    CircuitBoard,
    Sparkles
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
        id: 'data',
        label: 'Data',
        color: colors.lemon,
        icon: Database,
        tooltip: 'Data Engineering',
    },
    {
        id: 'business',
        label: 'Business',
        color: colors.coral,
        icon: Store,
        tooltip: 'Business Development',
    },
    {
        id: 'engineering',
        label: 'Engineering',
        color: colors.lemon,
        icon: Code,
        tooltip: 'Engineering',
    },
    {
        id: 'hardware',
        label: 'Hardware',
        color: colors.lemon,
        icon: CircuitBoard,
        tooltip: 'Hardware',
    },
    {
        id: 'ai',
        label: 'AI',
        color: colors.lemon,
        icon: Sparkles,
        tooltip: 'AI',
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
