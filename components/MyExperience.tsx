import ExperienceCard from "@/components/ExperienceCard";
import { experienceData } from "@/data/experienceData";

export default function MyExperience() {
  return (
    <section id="my-experience" className="px-4 py-8 lg:max-w-6xl lg:mx-auto">
      <h1 className="font-righteous text-center text-2xl leading-normal tracking-normal mb-8 md:mb-12 lg:mb-14 md:text-3xl lg:text-4xl">My Experience</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {experienceData.map((experience) => (
          <ExperienceCard key={experience.company} {...experience} />
        ))}
      </div>
    </section>
  );
}
