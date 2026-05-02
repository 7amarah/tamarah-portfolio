export const PROJECTS = [
    {
        id: "hms-saas",
        title: "Hotel Management SaaS Platform",
        tagline: "Multi-tenant booking, payments & inventory system",

        description:
            "A full-stack SaaS platform built for hotel operations, handling bookings, payments, and inventory across multiple business workflows.",

        highlights: [
            "Designed scalable backend architecture using AdonisJS",
            "Built booking engine with real-time availability logic",
            "Implemented secure payment flows and verification",
            "Optimized database queries for performance",
            "Handled complex relational data with MySQL",
        ],

        impact: [
            "Reduced manual hotel operations by ~70%",
            "Improved booking processing speed",
            "Enabled real-time inventory tracking",
        ],

        tech: ["AdonisJS", "Node.js", "REST APIs", "MySQL", "React", "Inertia.js", "Tailwind CSS", "Shadcn"],

        links: {
            live: "https://staging-hms.atslng.com/",
            github: null,
        },

        restricted: true,
    },

    {
        id: "ascoapps-salary-complaint-dashboard",
        title: "Enterprise Operations Dashboard (ASCO Apps)",
        tagline: "Legacy system migration + multi-module operations platform",

        description:
            "Migrated a legacy PHP/jQuery system into a modern React-based dashboard used for managing operations, reporting, logistics, and employee workflows.",

        highlights: [
            "Migrated legacy PHP/jQuery frontend to React architecture",
            "Built modular dashboard system for operations & reporting",
            "Implemented salary complaints tracking and analytics",
            "Integrated complex data tables, filters, and reporting tools",
            "Structured scalable frontend architecture for maintainability",
        ],

        impact: [
            "Improved system performance and UI responsiveness",
            "Reduced technical debt from legacy stack",
            "Enabled scalable feature expansion across modules",
            "Enhanced usability for internal operations teams",
        ],

        tech: ["React", "JavaScript", "Legacy Migration", "React-Router DOM", "Charts/Analytics"],

        links: {
            live: "https://live.ascoapps.com.ng/",
            github: null,
        },

        image: "/images/asco-apps-salary-complaint-dashboard.png",

        restricted: true,
    }
];