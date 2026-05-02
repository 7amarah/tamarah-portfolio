import { PROJECTS } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}