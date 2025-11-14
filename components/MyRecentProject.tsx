import { projectData } from "@/data/projectData";
import ProjectCard from "@/components/ProjectCard";

export default function MyResentProject() {
  return (
    <section id="my-recent-project" className="mx-4 mb-16 lg:max-w-6xl lg:mx-auto">
      <h2 className="font-righteous text-center text-3xl leading-9 md:text-4xl md:leading-[42px] mb-12">
        My Recent Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:mx-12 xl:mx-0">
        {projectData.map((project) => {
          return <ProjectCard key={project.title} {...project} />
        })}
      </div>
    </section>
  );
}
