"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";
import { usePathname } from "next/navigation";


export default function Sidebar() {
    const pathname = usePathname();

    const isFirstLoad =
        typeof window !== "undefined" &&
        !sessionStorage.getItem("dashboard-entered");

    if (typeof window !== "undefined") {
        sessionStorage.setItem("dashboard-entered", "true");
    }

    const isActive = (pathname: string, href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <motion.aside
            initial={isFirstLoad ? { x: -260, opacity: 0 } : false}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-64 bg-zinc-900 p-6 flex flex-col gap-6"
        >
            {/* Profile */}
            <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-md mb-3">
                    <Image
                        fill
                        loading="eager"
                        alt="Tamarah profile"
                        src="/images/potfolio-img-1.jpeg"
                        sizes="(max-width: 768px) 120px, 160px"
                        className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                </div>

                <h2 className="text-lg font-semibold">Tamarah</h2>
                <p className="text-sm text-gray-400">Full Stack Developer</p>
            </div>

            {/* Navigation */}
            {/* <Navbar /> */}
            <nav className="relative flex flex-col gap-2">
                {NAV_ITEMS.map((item) => {
                    const active = isActive(pathname, item.href);

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="relative px-3 py-2 rounded-lg"
                        >
                            {/* ANIMATED BACKGROUND PILL */}
                            {active && (
                                <motion.span
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-white rounded-lg z-0"
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 30,
                                    }}
                                />
                            )}

                            {/* CONTENT */}
                            <span
                                className={`relative z-10 flex items-center gap-2 text-sm transition-colors ${active ? "text-black font-medium" : "text-gray-300"
                                    }`}
                            >
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>

            {/* Resume */}
            <div className="mt-auto flex flex-col gap-2">
                <a
                    href="https://drive.google.com/uc?export=download&id=1A2_r93u4JYEURb3TK0nhKLjSsHu_EG8t"
                    className="bg-white text-black text-center py-2 rounded-xl"
                >
                    Download Resume
                </a>

                <a
                    href="https://drive.google.com/file/d/1A2_r93u4JYEURb3TK0nhKLjSsHu_EG8t/view"
                    target="_blank"
                    className="text-center border py-2 rounded-xl"
                >
                    View Resume
                </a>
            </div>
        </motion.aside>
    );
}