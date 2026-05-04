"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
    title: string;
    tagline: string;
    description: string;
    highlights: string[];
    impact: string[];
    tech: string[];
    image?: string;
    links: {
        live: string;
    };
    restricted?: boolean;
}


export default function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="
                p-6 rounded-2xl flex flex-col gap-4
                border border-[var(--accent-200)]
                bg-[var(--accent-50)]/40
                backdrop-blur-md
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
            "
        >
            {/* IMAGE (if available) */}
            {
                project.image && (
                    <div className="relative w-full h-48 rounded-xl overflow-hidden" >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                )
            }

            {/* TITLE */}
            <div>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">
                    {project.title}
                </h3>

                <p className="text-sm text-[var(--foreground)]/60">
                    {project.tagline}
                </p>
            </div>

            {/* DESCRIPTION */}
            <p className="text-[var(--foreground)]/70 text-sm">
                {project.description}
            </p>

            {/* HIGHLIGHTS */}
            <ul className="text-sm text-[var(--foreground)]/80 space-y-1">
                {
                    project.highlights.map((item: string, i: number) => (
                        <li
                            key={i}
                            className="
                                relative pl-4
                                before:content-['']
                                before:absolute
                                before:left-0
                                before:top-2
                                before:w-1.5 before:h-1.5
                                before:rounded-full
                                before:bg-[var(--accent-500)]
                            "
                        >
                            {item}
                        </li>
                    ))
                }
            </ul>
            

            {/* IMPACT */}
            <div className="text-sm text-[var(--foreground)]/60">
                <strong>Impact: </strong>
                < ul className="mt-1 space-y-1" >
                    {
                        project.impact.map((item: string, i: number) => (
                            <li
                                key={i}
                                className="
                                relative pl-4
                                before:content-['→']
                                before:absolute
                                before:left-0
                                before:top-0
                                before:text-[var(--accent-500)]
                            "
                            >
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* TECH */}
            <div className="flex flex-wrap gap-2" >
                {
                    project.tech.map((tech: string) => (
                        <span
                            key={tech}
                            className="
                                text-xs px-2.5 py-1 rounded-full
                                bg-[var(--accent-100)]/60
                                text-[var(--foreground)]
                                border border-[var(--accent-200)]
                            "
                        >
                            {tech}
                        </span>
                    ))
                }
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-2 mt-auto" >
                <div className="flex gap-3" >
                    <a
                        href={project.links.live}
                        target="_blank"
                        className="
                            px-4 py-1.5 rounded-lg text-sm font-medium
                            bg-[var(--accent-500)]
                            text-white
                            shadow-sm
                            hover:shadow-md hover:-translate-y-0.5
                            active:scale-95
                            transition-all duration-200
                        "
                    >
                        Live URL
                    </a>
                </div>

                {
                    project.restricted && (
                        <p className="text-xs text-[var(--foreground)]/50 italic" >
                            🔒 Enterprise system — access restricted.
                        </p>
                    )
                }
            </div>
        </motion.div>
    );
}