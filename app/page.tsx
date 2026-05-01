import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold">
        Hey, I&apos;m Tamarah
      </h1>

      <h2 className="text-2xl text-gray-400 mt-2">
        A Software Developer
      </h2>

      <p className="max-w-xl mt-4 text-gray-500">
        Fullstack developer focused on building scalable web apps with React, AdonisJS & PostgreSQL.
      </p>

      {/* NAV LINKS ONLY HERE INITIALLY */}
      <div className="flex gap-4 mt-8">
        <Link href="/projects" className="bg-white text-black px-5 py-2 rounded-xl">
          Projects
        </Link>

        <Link href="/about" className="border px-5 py-2 rounded-xl">
          About
        </Link>

        <Link href="/experience" className="border px-5 py-2 rounded-xl">
          Experience
        </Link>

        <Link href="/contact" className="border px-5 py-2 rounded-xl">
          Contact
        </Link>
      </div>
    </div>
  );
}