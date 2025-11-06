import Link from "next/link";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Introduction() {
  return (
    <article className="flex-1">
      <h1 className="font-righteous text-3xl leading-[34px] mb-6 md:text-4xl md:leading-10 lg:text-5xl lg:leading-13">
        Hello there,
        <br />
        I'm <span className="text-[#20bf55]">Polash Ahmad</span>
      </h1>
      <p className="text-sm leading-normal tracking-normal opacity-80 mb-6 md:max-w-80 lg:max-w-[410px]">
        A passionate full-stack developer with extensive experience transforming ideas into projects from ideation to deployment.
        Thriving on creative problem solving, a blend of technical expertise and artistic vision is used to craft elegant solutions.
      </p>
      <div className="flex items-center gap-4">
        <Link className="flex items-center gap-2 py-1.5 px-3 bg-[#20bf55] border font-medium text-black border-[rgba(255,255,255,.1)] rounded-xl transition-all hover:opacity-90" href="" download="">
          <FaCloudDownloadAlt className="text-black w-4 h-4" />
          <span>Resume</span>
        </Link>
        <Link className="flex items-center gap-2 py-1.5 px-3 bg-[#171717] border font-medium border-[rgba(255,255,255,.1)] rounded-xl transition-all hover:border-[#20bf55] hover:text-[#20bf55]" href="" download="">
          <MdEmail className="w-4 h-4" />
          <span>Contact</span>
        </Link>
      </div>
    </article>
  );
}
