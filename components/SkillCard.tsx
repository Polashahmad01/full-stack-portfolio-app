import { SkillDataProps } from "@/data/skillData";

export default function SkillCard({ id, title, description }: SkillDataProps) {
  return (
    <article className="bg-[#595b731a] border border-[#ffffff1a] rounded-[20px] p-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-px w-6 bg-white opacity-30" />
        <p className="text-sm lg:text-base leading-normal tracking-normal text-[#2cf8ff] opacity-70">{id}</p>
      </div>
      <h4 className="font-space-grotesk text-lg uppercase font-medium leading-tight tracking-wide mb-4">
        <span>{title.split(" ")[0]}</span>
        <br />
        <span>{title.split(" ")[1]}</span>
      </h4>
      <p className="text-sm text-[#96a7a1] leading-normal tracking-normal">{description}</p>
    </article>
  );
}
