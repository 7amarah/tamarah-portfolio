import ProjectsGrid from "@/components/projects/ProjectsGrid";

export const metadata = {
    title: "Projects | Tamarah Waritimi",
    description: "Selected projects by Tamarah Waritimi",
};

export default function ProjectsPage() {
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-8">
                Selected Projects
            </h1>

            <ProjectsGrid />
        </div>
    );
}