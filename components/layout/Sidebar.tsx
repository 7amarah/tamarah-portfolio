"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (pathname: string, href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <>
            {/* MOBILE TOP BAR */}
            <div className="lg:hidden flex items-center justify-between px-4 py-4 border-b border-[var(--accent-200)] bg-[var(--background)]">
                <h2 className="font-semibold">Tamarah</h2>

                <button
                    onClick={() => setIsOpen(true)}
                    className="text-[var(--foreground)]"
                >
                    <FiMenu size={22} />
                </button>
            </div>

            {/* OVERLAY */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* SIDEBAR / DRAWER */}
            <AnimatePresence>
                {(isOpen || typeof window !== "undefined") && (
                    <motion.aside
                        initial={{ x: -260 }}
                        animate={{ x: 0 }}
                        exit={{ x: -260 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="
                            fixed lg:static
                            z-50
                            w-64 h-screen
                            p-6
                            flex flex-col gap-6
                            bg-[var(--background)]
                            border-r border-[var(--accent-200)]
                        "
                    >
                        {/* CLOSE BUTTON (mobile only) */}
                        <div className="flex justify-end lg:hidden">
                            <button onClick={() => setIsOpen(false)}>
                                <FiX size={22} />
                            </button>
                        </div>

                        {/* PROFILE */}
                        <div className="flex flex-col items-center">
                            <div className="
                                relative w-28 h-28 rounded-full overflow-hidden mb-3
                                ring-2 ring-[var(--accent-300)]
                            ">
                                <Image
                                    fill
                                    alt="Tamarah profile"
                                    src="/images/potfolio-img-1.jpeg"
                                    className="object-cover"
                                />
                            </div>

                            <h2 className="text-lg font-semibold">
                                Tamarah
                            </h2>

                            <p className="text-sm text-[var(--foreground)]/60">
                                Full Stack Developer
                            </p>
                        </div>

                        {/* NAV */}
                        <nav className="flex flex-col gap-2">
                            {NAV_ITEMS.map((item) => {
                                const active = isActive(pathname, item.href);

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="relative px-3 py-2 rounded-lg"
                                    >
                                        {active && (
                                            <motion.span
                                                layoutId="active-pill"
                                                className="
                                                    absolute inset-0
                                                    bg-[var(--accent-500)]
                                                    rounded-lg
                                                    z-0
                                                "
                                            />
                                        )}

                                        <span
                                            className={`
                                                relative z-10 text-sm
                                                ${active
                                                    ? "text-white font-medium"
                                                    : "text-[var(--foreground)]/70"}
                                            `}
                                        >
                                            {item.label}
                                        </span>
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* ACTIONS */}
                        <div className="mt-auto flex flex-col gap-2">
                            <a
                                href="https://drive.google.com/uc?export=download&id=1A2_r93u4JYEURb3TK0nhKLjSsHu_EG8t"
                                className="
                                    bg-[var(--accent-500)]
                                    text-white text-center py-2 rounded-xl
                                    hover:opacity-90 transition
                                "
                            >
                                Download Resume
                            </a>

                            <a
                                href="https://drive.google.com/file/d/1A2_r93u4JYEURb3TK0nhKLjSsHu_EG8t/view"
                                target="_blank"
                                className="
                                    text-center py-2 rounded-xl
                                    border border-[var(--accent-300)]
                                    text-[var(--foreground)]
                                    hover:border-[var(--accent-500)]
                                    transition
                                "
                            >
                                View Resume
                            </a>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
}