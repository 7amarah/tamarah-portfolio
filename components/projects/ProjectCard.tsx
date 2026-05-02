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
    links: {
        live: string;
    };
    restricted?: boolean;
}


export default function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 flex flex-col gap-4"
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
                <h3 className="text-xl font-semibold" > {project.title} </h3>
                < p className="text-sm text-gray-400" > {project.tagline} </p>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-400 text-sm" >
                {project.description}
            </p>

            {/* HIGHLIGHTS */}
            <ul className="text-sm text-gray-300 space-y-1" >
                {
                    project.highlights.map((item: string, i: number) => (
                        <li key={i} >• {item} </li>
                    ))
                }
            </ul>

            {/* IMPACT */}
            <div className="text-sm text-gray-500" >
                <strong>Impact: </strong>
                < ul className="mt-1 space-y-1" >
                    {
                        project.impact.map((item: string, i: number) => (
                            <li key={i} >→ {item} </li>
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
                            className="text-xs bg-white/10 px-2 py-1 rounded"
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
                        className="bg-white text-black px-3 py-1 rounded-lg text-sm"
                    >
                        Live URL
                    </a>
                </div>

                {
                    project.restricted && (
                        <p className="text-xs text-gray-500 italic" >
                            🔒 Enterprise system — access restricted.
                            Architecture and implementation available on request.
                        </p>
                    )
                }
            </div>
        </motion.div>
    );
}