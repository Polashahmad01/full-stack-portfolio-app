import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { skillData } from "@/data/skillData";
import SkillCard from "@/components/SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-4 lg:max-w-6xl lg:mx-auto">
      <div className="hidden md:block skills__glow absolute top-48 left-1/2 transform -translate-x-1/2" />
      <h2 className="font-righteous text-center text-3xl leading-9 md:text-4xl md:leading-[42px] mt-8 md:mt-0 mb-12">
        Skills
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:mx-12 xl:mx-0">
        {skillData.map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-8 mb-16">
        <Link
          href="https://wa.me/+8801795186140"
          target="_blank"
          className="flex items-center gap-4 rounded-full py-2 px-3 text-[#c6ffec] chat__on__whatsapp">
          <span className="text-sm">Chat on Whatsapp</span>
          <FaWhatsapp size="30px" />
        </Link>
      </div>
    </section>
  );
}
