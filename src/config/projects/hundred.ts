import type { Project } from "../../types";
import hundredLogo from "../../assets/projects/hundred-logo.png";

import appPromoImage from "../../assets/projects/hundred/app-promo.png";
import architectureImage from "../../assets/projects/hundred/architecture.png";
import figmaImage from "../../assets/projects/hundred/figma.png";
import sourcesImage from "../../assets/projects/hundred/sources.png";
import terminalImage from "../../assets/projects/hundred/terminal.png";
import { Globe } from "lucide-react";

export const hundred: Project = {
    title: "Hundred News",
    logo: hundredLogo,
    slug: "100-news",
    tags: ["web", "frontend", "backend", "mobile", "data"],
    types: ["freelance"],
    year: "2025",
    socialLinks: [
        {
            label: "Website",
            address: "https://100.news",
            icon: Globe,
            newTab: true,
        }
    ],
    coverImage: terminalImage,
    description: "Mobile app and web application built on top of a news aggregator that curates stories from 100+ trusted sources worldwide.",
    body: [
        {
            type: "text",
            content: "Hundred News is a modern news aggregation platform designed to cut through the noise of today's media landscape. The platform aggregates content from over 100 verified news sources, using intelligent algorithms to surface the most relevant stories while maintaining political balance and factual accuracy."
        },
        {
            type: "image",
            src: appPromoImage,
            alt: "App Promo Image",
            caption: "The app promo image"
        },
        {
            type: "image",
            src: figmaImage,
            alt: "Figma Design System",
            caption: "The complete design system built in Figma"
        },
        {
            type: "image",
            src: architectureImage,
            alt: "System Architecture Diagram",
            caption: "High-level system architecture showing the data pipeline"
        },
        {
            type: "image",
            src: sourcesImage,
            alt: "News Sources Overview",
            caption: "A selection of the 100+ news sources integrated into the platform"
        }
    ],
}