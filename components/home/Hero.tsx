import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Hero() {
    return (
        <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 sm:px-6">

            {/* PROFILE IMAGE */}
            <div className="
                relative
                w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56
                rounded-full overflow-hidden
                shadow-lg
                ring-1 ring-[var(--accent-200)]
                bg-[var(--accent-50)]
                mb-8
                transition-all duration-300
                hover:scale-[1.03]
            ">
                <Image
                    fill
                    priority
                    alt="Tamarah profile"
                    src="/images/potfolio-img-1.jpeg"
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 224px"
                    className="object-cover transition-transform duration-300 hover:scale-110"
                />
            </div>

            {/* HEADLINE */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--foreground)]">
                Hey, I&apos;m Tamarah
            </h1>

            {/* SUBTITLE */}
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--foreground)]/60 mt-2">
                Full Stack Developer (React • NodeJS • MySQL)
            </h2>

            {/* DESCRIPTION */}
            <p className="max-w-md sm:max-w-lg mt-4 text-[var(--foreground)]/70 text-sm sm:text-base">
                I design APIs, and build scalable web applications with modern
                full-stack technologies.
            </p>

            {/* SOCIAL + CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-8">

                {/* CTA */}
                <Link
                    href="/contact"
                    className="
                        px-6 py-2 rounded-xl text-sm sm:text-base font-medium
                        bg-[var(--accent-500)]
                        text-white
                        shadow-sm
                        hover:shadow-md hover:-translate-y-0.5
                        active:scale-95
                        transition-all duration-200
                    "
                >
                    Hire Me
                </Link>

                {/* ICONS */}
                <div className="flex items-center gap-6 text-2xl">

                    <Link
                        href="https://github.com/7amarah"
                        target="_blank"
                        className="
                            text-[var(--foreground)]/60
                            hover:text-[var(--accent-500)]
                            transition transform hover:scale-110
                        "
                    >
                        <FaGithub title="GitHub" />
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/tamarah-waritimi-4850bb111"
                        target="_blank"
                        className="
                            text-[var(--foreground)]/60
                            hover:text-[var(--accent-500)]
                            transition transform hover:scale-110
                        "
                    >
                        <FaLinkedin title="LinkedIn" />
                    </Link>

                    <Link
                        href="https://x.com/7amar4h_w?s=21"
                        target="_blank"
                        className="
                            text-[var(--foreground)]/60
                            hover:text-[var(--accent-500)]
                            transition transform hover:scale-110
                        "
                    >
                        <FaXTwitter title="Twitter" />
                    </Link>

                </div>
            </div>
        </section>
    );
}