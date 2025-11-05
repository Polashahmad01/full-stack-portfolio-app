import { projectData } from "@/data/projectData";
import ProjectCard from "@/components/ProjectCard";

export default function MyResentProject() {
  return (
    <section id="my-recent-project" className="px-4 py-8 lg:max-w-6xl lg:mx-auto">
      <h1 className="font-righteous text-center text-2xl leading-normal tracking-normal mb-8 md:mb-12 lg:mb-14 md:text-3xl lg:text-4xl">My Recent Projects</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project) => {
          return <ProjectCard key={project.title} {...project} />
        })}
      </div>
    </section>
  );
}
