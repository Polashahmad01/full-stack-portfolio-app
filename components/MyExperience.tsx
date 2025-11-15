import ExperienceCard from "@/components/ExperienceCard";
import { experienceData } from "@/data/experienceData";

export default function MyExperience() {
  return (
    <section
      id="my-experience"
      className="relative mx-4 mb-16 lg:max-w-6xl lg:mx-auto">
      <div className="hidden md:block my__experience__glow absolute top-80 left-[230px]" />
      <h2 className="font-righteous text-center text-3xl leading-9 md:text-4xl md:leading-[42px] mb-12">
        My Experience
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:mx-12 xl:mx-0">
        {experienceData.map((experience) => (
          <ExperienceCard key={experience.company} {...experience} />
        ))}
      </div>
    </section>
  );
}
