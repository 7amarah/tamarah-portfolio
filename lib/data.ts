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
            "Develop scalable, high-performance backend systems using Node.js (AdonisJS).",
            "Design and implement RESTful APIs for bookings, user and guest management, inventory, and point of sale (POS) workflows.",
            "Build and maintain complex business logic across SaaS modules ",
            "Optimize database queries and backend performance to reduce response times and improve efficiency.",
            "Design and manage relational database schemas using MySQL.",
            "Integrate frontend applications with backend APIs for seamless data flow.",
            "Collaborate with cross-functional teams to translate business requirements into technical solutions.",
            "Troubleshoot production issues and improve system reliability and stability."
        ],
    },
    {
        role: "Frontend Developer",
        company: "Ashaka Security Company Limited",
        period: "Jan 2022 – 2024",
        highlights: [
            "Built and maintained web applications using modern JavaScript frameworks.",
            "Integrated REST APIs and contributed to backend-related workflows.",
            "Migrated legacy systems (PHP/jQuery) to modern React-based architecture.",
            "Improved application performance and maintainability using component-based design.",
            "Gained hands-on experience with API integration, debugging, and full-stack workflows."
        ],
    },
    {
        role: "Content Advisory Board Member",
        company: "LogRocket",
        period: "Dec 2023 – Present",
        highlights: [
            "Review and evaluate technical content for accuracy and relevance.",
            "Provide insights to improve developer-focused educational materials."
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