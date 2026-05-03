"use client";

import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <header className="
            sticky top-0 z-50
            backdrop-blur-md
            bg-[var(--accent-50)]/70
            border-b border-[var(--accent-200)]
        ">
            <div className="w-full px-4 sm:px-6 py-4">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                    {/* NAV LINKS */}
                    <nav className="flex flex-wrap justify-start gap-6">
                        {NAV_ITEMS.map((item) => {
                            const active = isActive(item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`
                                        relative text-sm transition
                                        ${active
                                            ? "text-[var(--accent-600)] font-medium"
                                            : "text-[var(--foreground)]/60 hover:text-[var(--foreground)]"
                                        }
                                    `}
                                >
                                    {item.label}

                                    {/* ACTIVE UNDERLINE */}
                                    {active && (
                                        <motion.span
                                            layoutId="nav-underline"
                                            className="
                                                absolute left-0 -bottom-1 h-[2px] w-full
                                                bg-[var(--accent-500)]
                                            "
                                            transition={{
                                                type: "spring",
                                                stiffness: 500,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* ACTION BUTTONS */}
                    <div className="flex flex-row items-center gap-3">

                        {/* Download */}
                        <a
                            href="https://drive.google.com/uc?export=download&id=1A2_r93u4JYEURb3TK0nhKLjSsHu_EG8t"
                            className="
                                inline-flex items-center justify-center
                                text-sm font-medium
                                px-4 py-1.5 rounded-lg whitespace-nowrap
                                bg-[var(--accent-500)]
                                text-white
                                shadow-sm
                                hover:shadow-md hover:-translate-y-0.5
                                transition-all duration-200
                            "
                        >
                            Download CV
                        </a>

                        {/* View */}
                        <a
                            href="https://drive.google.com/file/d/1A2_r93u4JYEURb3TK0nhKLjSsHu_EG8t/view"
                            target="_blank"
                            className="
                                inline-flex items-center justify-center
                                text-sm font-medium
                                px-4 py-1.5 rounded-lg whitespace-nowrap
                                border border-[var(--accent-300)]
                                text-[var(--foreground)]
                                hover:border-[var(--accent-500)]
                                hover:text-[var(--accent-600)]
                                transition
                            "
                        >
                            View CV
                        </a>

                    </div>

                </div>
            </div>
        </header>
    );
}