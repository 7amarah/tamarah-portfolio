export default function Hero() {
    return (
        <section className="h-[85vh] flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-5xl md:text-6xl font-bold">
                Hey, I&apos;m Tamarah
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-400 mt-2">
                Full Stack Developer (React • AdonisJS • MySQL)
            </h2>

            <p className="max-w-xl mt-4 text-gray-500">
                I build scalable web applications, APIs, and dashboards with modern
                full-stack technologies.
            </p>

            <div className="flex gap-4 mt-6">
                <a href="/projects" className="bg-white text-black px-5 py-2 rounded-xl">
                    View Projects
                </a>

                <a
                    href="https://drive.google.com/uc?export=download&id=1A2_r93u4JYEURb3TK0nhKLjSsHu_EG8t"
                    className="border px-5 py-2 rounded-xl"
                >
                    Download CV
                </a>
            </div>
        </section>
    );
}