import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import type { Link } from '../types';

export const socialLinks: Link[] = [
    {
        label: 'Email',
        address: 'mailto:your.email@example.com',
        icon: Mail,
        newTab: false,
    },
    {
        label: 'GitHub',
        address: 'https://github.com/yourusername',
        icon: Github,
        newTab: true,
    },
    {
        label: 'LinkedIn',
        address: 'https://linkedin.com/in/yourusername',
        icon: Linkedin,
        newTab: true,
    },
];

export const resumeLink: Link = {
    label: 'Resume',
    address: '/resume.pdf',
    icon: FileText,
    newTab: true,
};
