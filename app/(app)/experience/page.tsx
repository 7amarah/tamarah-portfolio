"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { experienceData, projectHighlight } from "@/lib/data";

export default function ExperiencePage() {
    const containerRef = useRef(null);

    // Scroll progress for subtle “story line” effect
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <Section>
            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mb-14"
                >
                    <h1 className="text-3xl font-bold tracking-tight">
                        Experience
                    </h1>

                    <p className="text-[color:var(--foreground)]/70 mt-2 max-w-xl leading-relaxed">
                        A scroll-driven story of building backend systems, SaaS platforms,
                        and scalable APIs.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div ref={containerRef} className="relative ml-3">

                    {/* Background timeline line */}
                    <div className="absolute left-0 top-0 w-px h-full bg-[color:var(--accent-200)]" />

                    {/* Animated progress line (Apple-like feel) */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-0 top-0 w-px bg-[color:var(--accent-500)] origin-top"
                    />

                    <div className="space-y-14">
                        {experienceData.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.35 }}
                                transition={{
                                    duration: 0.7,
                                    ease: "easeOut",
                                    delay: index * 0.05,
                                }}
                                className="
                                    relative pl-10
                                    transition-all duration-300
                                    hover:translate-y-[-2px]
                                    whileHover={{ scale: 1.01 }}
                                "
                            >
                                {/* Soft timeline dot */}
                                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[color:var(--accent-500)] shadow-[0_0_0_4px_var(--accent-50)]" />

                                {/* Role */}
                                <h2 className="text-xl font-semibold tracking-tight">
                                    {exp.role}
                                </h2>

                                <p className="text-sm text-[color:var(--foreground)]/60 mt-1">
                                    {exp.company} · {exp.period}
                                </p>

                                {/* Highlights */}
                                <ul className="mt-4 space-y-2 text-[color:var(--foreground)]/80 leading-relaxed">
                                    {exp.highlights.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, y: 8 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{
                                                duration: 0.5,
                                                ease: "easeOut",
                                                delay: i * 0.03,
                                            }}
                                            className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1 before:h-1 before:bg-[color:var(--accent-400)] before:rounded-full"
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Featured Project (cleaner card style) */}
                <motion.div
                    className="mt-24"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h2 className="text-2xl font-semibold tracking-tight mb-5">
                        Featured Build
                    </h2>

                    <div className="p-6 rounded-xl border border-gray-200 border-[color:var(--accent-200)] bg-[color:var(--accent-50)]/60 backdrop-blur-sm">
                        <h3 className="text-lg font-semibold">
                            {projectHighlight.title}
                        </h3>

                        <ul className="mt-3 space-y-2 text-[color:var(--foreground)]/80 leading-relaxed">
                            {projectHighlight.highlights.map((item, i) => (
                                <li key={i} className="pl-4 relative">
                                    <span className="absolute left-0 top-[10px] w-1 h-1 bg-[color:var(--accent-400)] rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}