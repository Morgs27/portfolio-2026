import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import type { Link } from '../types';

export const socialLinks: Link[] = [
    {
        label: 'Email',
        address: 'mailto:morgandanielwork@gmail.com',
        icon: Mail,
        newTab: false,
    },
    {
        label: 'GitHub',
        address: 'https://github.com/morgs27',
        icon: Github,
        newTab: true,
    },
    {
        label: 'LinkedIn',
        address: 'https://www.linkedin.com/in/morgs27',
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
