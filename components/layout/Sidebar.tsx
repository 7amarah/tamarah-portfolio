"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import { NAV_ITEMS } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
}) {
    const pathname = usePathname();

    const isActive = (pathname: string, href: string) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(href + "/");
    };

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            {/* OVERLAY */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-40 lg:hidden bg-[var(--background)]/80 backdrop-blur-sm"
                    />
                )}
            </AnimatePresence>

            {/* SIDEBAR */}
            <motion.aside
                initial={{ x: -260 }}
                animate={{ x: isOpen ? 0 : -260 }}
                exit={{ x: -260 }}
                transition={{ duration: 0.3 }}
                className={`
                    fixed lg:sticky lg:top-0 lg:h-screen
                    ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
                    z-50
                    w-64 h-screen
                    bg-[var(--background)]
                    border-r border-[var(--accent-200)]
                    p-6 flex flex-col gap-6
                `}
            >
                {/* CLOSE BUTTON */}
                <div className="flex justify-end lg:hidden">
                    <button onClick={() => setIsOpen(false)}>
                        <FiX size={22} />
                    </button>
                </div>

                {/* PROFILE */}
                <div className="flex flex-col items-center">
                    <div className="relative w-28 h-28 rounded-full overflow-hidden mb-3 ring-2 ring-[var(--accent-300)]">
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
                                className="px-3 py-2"
                            >
                                <span
                                    className={`
                                        inline-block text-sm transition-all duration-200
                                        ${active
                                            ? "text-[var(--accent-600)] font-semibold scale-105 drop-shadow-[0_0_6px_var(--accent-500)]"
                                            : "text-[var(--foreground)]/70 hover:text-[var(--foreground)]"}
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
                        className="bg-[var(--accent-500)] text-white text-center py-2 rounded-xl hover:opacity-90 transition"
                    >
                        Download Resume
                    </a>

                    <a
                        href="https://drive.google.com/file/d/1A2_r93u4JYEURb3TK0nhKLjSsHu_EG8t/view"
                        target="_blank"
                        className="text-center py-2 rounded-xl border border-[var(--accent-300)] text-[var(--foreground)] hover:border-[var(--accent-500)] transition"
                    >
                        View Resume
                    </a>
                </div>
            </motion.aside>
        </>
    );
}