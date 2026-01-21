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
    coverImage: appPromoImage,
    description: "Mobile app and web application built on top of a news aggregator that curates stories from 100+ trusted sources worldwide.",
    body: [
        {
            type: "text",
            content: "Hundred News is a modern news aggregation platform designed to cut through the noise of today's media landscape. The platform aggregates content from over 100 verified news sources, using intelligent algorithms to surface the most relevant stories while maintaining political balance and factual accuracy."
        },
        {
            type: "heading",
            level: 2,
            content: "The Problem"
        },
        {
            type: "text",
            content: "In an age of information overload, readers struggle to find trustworthy news without spending hours scrolling through multiple sources. Existing aggregators often create filter bubbles or prioritize engagement over accuracy. Hundred News was built to solve this by providing a balanced, curated news experience."
        },
        {
            type: "heading",
            level: 2,
            content: "Design Process"
        },
        {
            type: "text",
            content: "The design process began with extensive user research, interviewing over 50 daily news readers to understand their pain points. We iterated through multiple design concepts in Figma before landing on a clean, distraction-free interface that prioritizes readability."
        },
        {
            type: "image",
            src: figmaImage,
            alt: "Figma Design System",
            caption: "The complete design system built in Figma"
        },
        {
            type: "heading",
            level: 2,
            content: "Technical Architecture"
        },
        {
            type: "text",
            content: "The platform is built on a microservices architecture that handles high-volume data ingestion from RSS feeds, APIs, and web scraping. The system processes thousands of articles daily, using NLP to categorize, deduplicate, and score content for relevance."
        },
        {
            type: "image",
            src: architectureImage,
            alt: "System Architecture Diagram",
            caption: "High-level system architecture showing the data pipeline"
        },
        {
            type: "heading",
            level: 3,
            content: "Tech Stack"
        },
        {
            type: "list",
            items: [
                "Frontend: React Native (mobile), Next.js (web)",
                "Backend: Ruby on Rails API with GraphQL",
                "Database: PostgreSQL with Redis caching",
                "Infrastructure: AWS with Docker/Kubernetes",
                "ML Pipeline: Python with spaCy for NLP"
            ],
            ordered: false
        },
        {
            type: "heading",
            level: 2,
            content: "News Sources"
        },
        {
            type: "text",
            content: "We carefully curate our source list to ensure diversity across political spectrum, geography, and topic specialization. Each source is vetted for factual accuracy using third-party fact-checking databases."
        },
        {
            type: "image",
            src: sourcesImage,
            alt: "News Sources Overview",
            caption: "A selection of the 100+ news sources integrated into the platform"
        },
        {
            type: "heading",
            level: 2,
            content: "Data Pipeline"
        },
        {
            type: "text",
            content: "The ingestion pipeline runs continuously, fetching new articles every few minutes. Articles are processed through multiple stages including content extraction, entity recognition, topic classification, and duplicate detection."
        },
        {
            type: "image",
            src: terminalImage,
            alt: "Terminal showing data pipeline",
            caption: "Real-time monitoring of the article ingestion pipeline"
        },
        {
            type: "code",
            language: "ruby",
            content: `class ArticleIngestionJob < ApplicationJob
  queue_as :default

  def perform(source)
    articles = source.fetch_new_articles
    
    articles.each do |article|
      next if Article.exists?(url: article.url)
      
      processed = NlpService.process(article)
      Article.create!(
        title: processed.title,
        content: processed.content,
        topics: processed.topics,
        sentiment_score: processed.sentiment
      )
    end
  end
end`
        },
        {
            type: "heading",
            level: 2,
            content: "Key Features"
        },
        {
            type: "list",
            items: [
                "Personalized news feed based on reading habits",
                "Political bias indicators on every article",
                "Offline reading mode for commuters",
                "Daily digest emails at your preferred time",
                "Topic-based notifications for breaking news",
                "Cross-device sync for seamless reading"
            ],
            ordered: false
        },
        {
            type: "divider"
        },
        {
            type: "heading",
            level: 2,
            content: "Results"
        },
        {
            type: "text",
            content: "Since launch, Hundred News has grown to over 10,000 daily active users with an average session time of 12 minutes. The platform processes approximately 5,000 articles per day and has maintained 99.9% uptime."
        }
    ],
}