import {
  TbCircleDashedLetterA,
  TbCircleDashedLetterE,
  TbCircleDashedLetterS,
  TbCircleDashedLetterZ
} from "react-icons/tb";
import { FiExternalLink } from "react-icons/fi";
import { ExperienceDataProps } from "@/data/experienceData";

const icons = {
  TbCircleDashedLetterA,
  TbCircleDashedLetterE,
  TbCircleDashedLetterS,
  TbCircleDashedLetterZ,
};

export default function ExperienceCard({ company, role, icon, period, link, description }: ExperienceDataProps) {
  const Icon = icons[icon as keyof typeof icons];

  return (
    <article className="border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.01)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl backdrop-blur px-4 py-4">
      <div className="flex flex-wrap items-center gap-4 mb-4">
        {Icon && <Icon className="transition-all h-8 w-8" />}
        <h6 className="font-righteous text-lg leading-normal tracking-normal">{company}</h6>
        <FiExternalLink className="transition-all" />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <p className="font-righteous text-sm leading-normal tracking-normal">{role}</p>
        <p className="text-[10px] leading-normal tracking-normal text-gray-200">{period}</p>
      </div>
      <p className="text-sm leading-normal tracking-normal">{description}</p>
    </article>
  );
}
