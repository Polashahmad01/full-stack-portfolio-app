import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { skillData } from "@/data/skillData";
import SkillCard from "@/components/SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-8 lg:max-w-6xl lg:mx-auto">
      <h1 className="font-righteous text-center text-2xl leading-normal tracking-normal mb-8 md:mb-12 lg:mb-14 md:text-3xl lg:text-4xl">Skills</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {skillData.map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-8">
          <Link href="https://wa.me/+8801795186140" target="_blank" className="flex items-center gap-4 rounded-full py-2 px-3 text-[#c6ffec] chat__on__whatsapp">
            <span className="text-sm">
              Chat on Whatsapp
            </span>
            <FaWhatsapp size="30px" />
          </Link>
        </div>
    </section>
  );
}
