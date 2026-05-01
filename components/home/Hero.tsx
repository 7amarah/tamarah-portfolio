import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Hero() {
    return (
        <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 sm:px-6">

            {/* PROFILE IMAGE */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-md mb-6">
                <Image
                    fill
                    priority
                    alt="Tamarah profile"
                    src="/images/potfolio-img-1.jpeg"
                    sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 160px"
                    className="object-cover transition-transform duration-300 hover:scale-110"
                />
            </div>

            {/* HEADLINE */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hey, I&apos;m Tamarah
            </h1>

            {/* SUBTITLE */}
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mt-2">
                Full Stack Developer (React • NodeJS • MySQL)
            </h2>

            {/* DESCRIPTION */}
            <p className="max-w-md sm:max-w-lg mt-4 text-gray-500 text-sm sm:text-base">
                I build scalable web applications, APIs, and dashboards with modern
                full-stack technologies.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-8">

                {/* CTA */}
                <Link
                    href="#"
                    className="bg-white text-black px-5 py-2 rounded-xl text-sm sm:text-base hover:scale-105 transition"
                >
                    Hire Me
                </Link>

                {/* ICONS */}
                <div className="flex items-center gap-6 text-2xl sm:text-2xl">

                    <Link
                        href="https://github.com/7amarah"
                        target="_blank"
                        className="text-gray-400 hover:text-white transition transform hover:scale-110"
                    >
                        <FaGithub title="GitHub" />
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/tamarah-waritimi-4850bb111"
                        target="_blank"
                        className="text-gray-400 hover:text-white transition transform hover:scale-110"
                    >
                        <FaLinkedin title="LinkedIn" />
                    </Link>

                    <Link
                        href="https://x.com/7amar4h_w?s=21"
                        target="_blank"
                        className="text-gray-400 hover:text-white transition transform hover:scale-110"
                    >
                        <FaXTwitter title="Twitter" />
                    </Link>
                </div>
            </div>
        </section>
    );
}