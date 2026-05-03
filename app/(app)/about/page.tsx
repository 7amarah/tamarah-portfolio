"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const timeline = [
    {
        year: "2022",
        title: "Frontend Developer",
        description:
            "Started building modern web applications and transitioned legacy systems from PHP/jQuery to React.",
    },
    {
        year: "Mid 2024",
        title: "Frontend → Full-Stack Exposure",
        description:
            "Worked extensively on frontend systems while integrating APIs and contributing to backend-related workflows.",
    },
    {
        year: "Late 2024",
        title: "Transition into Backend Engineering",
        description:
            "Shifted focus toward backend development, working with APIs, authentication systems, and database-driven logic.",
    },
    {
        year: "Now",
        title: "Full-Stack Developer (Backend-Focused Growth)",
        description:
            "Building scalable SaaS systems with Node.js (AdonisJS, Express.js), while leveraging strong frontend experience to deliver complete products.",
    },
];

const skills = [
    "AdonisJS",
    "Node.js",
    "Express.js",
    "MySQL",
    "React",
    "Next.js",
    "Inertia.js",
    "TypeScript",
];

export default function AboutPage() {
    return (
        <Section>
            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
                    <p className="mt-2 max-w-xl text-[color:var(--foreground)]/70">
                        Full-stack developer with strong frontend foundations, expanding into backend systems and scalable architectures.
                    </p>
                </motion.div>

                {/* Story */}
                <div className="space-y-12 max-w-3xl text-[color:var(--foreground)]/80 leading-relaxed">

                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        I started my journey as a frontend developer, building modern web
                        applications and improving user-facing systems. Over time, I became
                        increasingly interested in how things work behind the scenes—how
                        data flows, how systems scale, and how business logic is structured.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Today, I work across the stack, with strong experience in
                        <span className="font-semibold text-[color:var(--accent-500)]"> React and modern frontend systems</span>,

                        while actively building deeper expertise in backend engineering using
                        <span className="font-semibold text-[color:var(--accent-500)]"> Node.js (AdonisJS, Express.js) and MySQL</span>.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        I particularly enjoy working on the backend side of applications—
                        designing APIs, structuring business logic, and building systems
                        that are reliable, scalable, and easy to maintain.
                    </motion.p>
                </div>

                {/* Timeline */}
                <div className="mt-20">
                    <h2 className="text-2xl font-semibold mb-8">Journey</h2>

                    <div className="relative ml-3">
                        <div className="absolute left-0 top-0 w-px h-full bg-[color:var(--accent-200)]" />

                        <div className="space-y-10">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative pl-8"
                                >
                                    <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[color:var(--accent-500)] shadow-[0_0_0_4px_var(--accent-50)]" />

                                    <p className="text-sm text-[color:var(--foreground)]/60">{item.year}</p>
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="text-[color:var(--foreground)]/70">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="mt-20">
                    <h2 className="text-2xl font-semibold mb-6">Core Stack</h2>

                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="
                                    px-4 py-2 text-sm rounded-full
                                    border border-[color:var(--accent-200)]
                                    bg-[color:var(--accent-50)]
                                    text-[color:var(--foreground)]
                                    hover:bg-[color:var(--accent-100)]
                                    transition-all duration-200
                                "
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Current Focus */}
                <motion.div
                    className="mt-20 max-w-2xl"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold mb-4">
                        What I’m Currently Focused On
                    </h2>

                    <ul className="space-y-3 text-[color:var(--foreground)]/80">
                        <li>
                            Strengthening backend engineering skills and system design thinking
                        </li>
                        <li>
                            Building scalable APIs and handling complex business logic in SaaS systems
                        </li>
                        <li>
                            Leveraging strong frontend experience to build complete, user-focused applications
                        </li>
                        <li>
                            Writing clean, maintainable code with a focus on long-term scalability
                        </li>
                    </ul>
                </motion.div>
            </Container>
        </Section>
    );
}