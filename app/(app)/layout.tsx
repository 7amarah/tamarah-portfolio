import { AnimatePresence } from "framer-motion";
import SidebarWrapper from "@/components/layout/SidebarWrapper";
import PageTransition from "@/components/layout/PageTransition";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-black text-white">
            <SidebarWrapper />

            <main className="flex-1 p-10">
                <AnimatePresence mode="wait">
                    <PageTransition>
                        {children}
                    </PageTransition>
                </AnimatePresence>
            </main>
        </div>
    );
}