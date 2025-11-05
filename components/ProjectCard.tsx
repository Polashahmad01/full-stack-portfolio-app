import Image from "next/image";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";
import { ProjectDataProps } from "@/data/projectData";

export default function ProjectCard({ link, image, title, craftedBy, builtBy, location: { flag, label } }: ProjectDataProps) {
  const Flag = flag;

  return (
    <article className="bg-[#191B1F] p-2 rounded-lg opacity-85 md:p-4">
      <Link href={link} target="_blank" className="inline-block mb-2 md:mb-4">
        <Image
          src={image}
          alt={title}
          className="w-full rounded-md"
        />
      </Link>
      <div className="bg-[#24272A] rounded-lg p-2 md:p-4">
        <div className="mb-3 md:mb-4">
          <div className="flex items-center justify-between mb-2">
            <Link href={link} target="_blank" className="font-bold tracking-wide transition-all hover:opacity-70">{title}</Link>
            <Link href={link} target="_blank" className="transition-all hover:opacity-70">
              <GrFormNextLink size="20px" className="font-bold" />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            {Flag && <Flag title={label} className="w-4 h-4" />}
            <p className="text-xs opacity-80">{label}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xs opacity-80">{builtBy}</p>
          <div className="h-[5px] w-[5px] bg-white rounded-full opacity-70" />
          <p className="text-xs opacity-80">{craftedBy}</p>
        </div>
      </div>
    </article>
  );
}
