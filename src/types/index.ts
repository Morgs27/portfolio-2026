import type { LucideIcon } from 'lucide-react';

// Tag for categorizing projects
export interface Tag {
    id: string;
    label: string;
    color: string; // Pastel color hex
    icon: LucideIcon;
    tooltip?: string;
}

// Project type enum
export interface ProjectType {
    id: string;
    label: string;
    icon: LucideIcon;
    tooltip?: string;
}


// External link
export interface Link {
    label: string;
    address: string;
    icon: LucideIcon;
    newTab?: boolean;
}

// Block types for markdown-like content
export type BlockType = 'text' | 'heading' | 'divider' | 'image' | 'code' | 'list';

export interface BaseBlock {
    type: BlockType;
}

export interface TextBlock extends BaseBlock {
    type: 'text';
    content: string;
}

export interface HeadingBlock extends BaseBlock {
    type: 'heading';
    level: 1 | 2 | 3;
    content: string;
}

export interface DividerBlock extends BaseBlock {
    type: 'divider';
}

export interface ImageBlock extends BaseBlock {
    type: 'image';
    src: string;
    alt: string;
    caption?: string;
}

export interface CodeBlock extends BaseBlock {
    type: 'code';
    language: string;
    content: string;
}

export interface ListBlock extends BaseBlock {
    type: 'list';
    items: string[];
    ordered?: boolean;
}

export type Block = TextBlock | HeadingBlock | DividerBlock | ImageBlock | CodeBlock | ListBlock;

// Main project structure
export interface Project {
    title: string;
    slug: string;
    tags: string[]; // Tag IDs
    types: string[]; // Type IDs
    year: string;
    socialLinks: Link[];
    coverImage: string;
    logo?: string;
    description: string;
    body: Block[];
}

// Site configuration
export interface SiteConfig {
    name: string;
    title: string;
    subtitle: string;
    description: string;
}
