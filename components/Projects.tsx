const projects = [
    {
        title: "Hotel Booking System",
        description:
            "Full-stack booking platform with payments and admin dashboard.",
        stack: ["React", "AdonisJS", "PostgreSQL"],
    },
    {
        title: "Inventory Dashboard",
        description: "Real-time stock tracking and analytics system.",
        stack: ["React", "TanStack Table", "Node.js"],
    },
];

export default function Projects() {
    return (
        <section>
            <h2 className="text-3xl font-bold mb-6">Projects</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((p) => (
                    <div
                        key={p.title}
                        className="bg-zinc-900 p-6 rounded-xl border border-zinc-800"
                    >
                        <h3 className="text-xl font-semibold">{p.title}</h3>
                        <p className="text-gray-400 mt-2">{p.description}</p>

                        <div className="flex gap-2 mt-3 flex-wrap">
                            {p.stack.map((t) => (
                                <span key={t} className="text-xs bg-white/10 px-2 py-1 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}