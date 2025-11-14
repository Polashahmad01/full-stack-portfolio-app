import ExperienceCard from "@/components/ExperienceCard";
import { experienceData } from "@/data/experienceData";

export default function MyExperience() {
  return (
    <section id="my-experience" className="mx-4 my-8 lg:max-w-6xl lg:mx-auto">
      <h2 className="font-righteous text-center text-3xl leading-9 md:text-4xl md:leading-[42px] lg:text-5xl lg:leading-[54px] xl:text-[52px] xl:leading-[58px] mb-6 md:mb-8 lg:mb-10">
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
