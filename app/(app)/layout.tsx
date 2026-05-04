"use client";

import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Sidebar from "@/components/layout/Sidebar";
import PageTransition from "@/components/layout/PageTransition";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    return (
        <div className="min-h-screen flex bg-black text-white">

            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
                <Sidebar isOpen={true} setIsOpen={setIsOpen} />
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <button onClick={() => setIsOpen(true)}>
                    <FiMenu size={22} />
                </button>
            </div>

            {/* Mobile Sidebar */}
            <div className="lg:hidden">
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

            {/* Main Content */}
            <main className="flex-1 p-4 sm:p-6 md:p-10">
                <AnimatePresence mode="wait">
                    <PageTransition>{children}</PageTransition>
                </AnimatePresence>
            </main>
        </div>
    );
}
