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

// Pastel color palette - each tag gets a unique color
export const colors = {
    // Primary palette
    mint: '#A8E6CF',
    lavender: '#DCD0FF',
    peach: '#FFCAB0',
    sky: '#A8D5E5',
    rose: '#FFB5BA',
    lemon: '#FFF9A5',
    sage: '#C1E1C1',
    coral: '#FFB5A7',
    // Extended palette
    lilac: '#E8D5F2',
    powder: '#B8D4E3',
    blush: '#F8C8DC',
    butter: '#F5E6A3',
    seafoam: '#B5EAD7',
    periwinkle: '#C5CAE9',
    apricot: '#FFDAB9',
    ice: '#D4F1F9',
    // Spare colors for future tags
    mauve: '#E0B0FF',
    pistachio: '#D4E7C5',
    cantaloupe: '#FFC49B',
    wisteria: '#C9A0DC',
    aqua: '#A0D2DB',
    champagne: '#F7E7CE',
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
        color: colors.lavender,
        icon: Code,
        tooltip: 'Engineering',
    },
    {
        id: 'hardware',
        label: 'Hardware',
        color: colors.powder,
        icon: CircuitBoard,
        tooltip: 'Hardware',
    },
    {
        id: 'ai',
        label: 'AI',
        color: colors.lilac,
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
