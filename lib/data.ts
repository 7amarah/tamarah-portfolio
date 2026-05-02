export type ExperienceItem = {
    role: string;
    company: string;
    period: string;
    highlights: string[];
};

export const experienceData: ExperienceItem[] = [
    {
        role: "Full-Stack Developer",
        company: "Adaptive Tech Solutions Ltd",
        period: "Oct 2024 – Present",
        highlights: [
            "Designed and developed scalable backend systems using Node.js (AdonisJS).",
            "Built RESTful APIs supporting bookings, payments, and inventory workflows.",
            "Implemented complex SaaS business logic across multiple modules and services.",
            "Optimized database queries and backend performance, significantly reducing response times.",
            "Designed and managed MySQL relational schemas for structured business data.",
            "Integrated frontend applications with backend services ensuring reliable API communication.",
            "Collaborated with cross-functional teams to translate business requirements into technical solutions.",
            "Resolved production issues and improved system stability and reliability."
        ],
    },
    {
        role: "Frontend Developer",
        company: "Ashaka Security Company Limited",
        period: "Jan 2022 – 2024",
        highlights: [
            "Built and maintained modern web applications using JavaScript frameworks.",
            "Integrated REST APIs and contributed to backend-related workflows.",
            "Migrated legacy PHP/jQuery systems to modern React-based architecture.",
            "Improved application performance through component-based design patterns.",
            "Gained strong experience in full-stack debugging and API integration."
        ],
    },
    {
        role: "Content Advisory Board Member",
        company: "LogRocket",
        period: "Dec 2023 – Present",
        highlights: [
            "Review technical content for accuracy, clarity, and relevance.",
            "Provide feedback to improve developer-focused educational materials.",
            "Contribute insights to enhance content quality for engineering audiences."
        ],
    },
];

export const projectHighlight = {
    title: "Hotel Management SaaS Platform",
    highlights: [
        "Built a full-stack SaaS application using Node.js (AdonisJS).",
        "Developed APIs for booking, payments, and inventory management.",
        "Designed scalable backend architecture supporting multiple business workflows.",
        "Ensured data consistency and optimized system performance across services.",
    ],
};