import Link from "next/link";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Introduction() {
  return (
    <article className="flex-1">
      <h1 className="font-righteous text-3xl leading-9 md:text-4xl md:leading-[42px] lg:text-5xl lg:leading-[54px] xl:text-[52px] xl:leading-[58px] mb-6">
        Hello there,
        <br />
        I'm <span className="text-[#20bf55]">Polash Ahmad</span>
      </h1>
      <p className="text-sm lg:text-base leading-normal tracking-normal mb-6 md:max-w-80 lg:max-w-[392px] xl:max-w-[425px]">
        A passionate full-stack developer with extensive experience transforming
        ideas into projects from ideation to deployment. Thriving on creative
        problem solving, a blend of technical expertise and artistic vision is
        used to craft elegant solutions.
      </p>
      <div className="flex items-center gap-4">
        <Link
          href="/polash-ahmad-resume.pdf"
          download="Polash_Ahmad_Resume.pdf"
          className="flex items-center gap-2 bg-[#20bf55] text-black font-medium border border-[rgba(255,255,255,.1)] rounded-xl px-4 py-1.5 transition-all hover:bg-[#171717] hover:border-[rgba(255,255,255,.1)] hover:text-white">
          <FaCloudDownloadAlt className="w-5 h-5" />
          <span>Resume</span>
        </Link>
        <Link
          href="mailto:dev.polashahmad@gmail.com"
          className="flex items-center gap-2 bg-[#171717] border font-medium border-[rgba(255,255,255,.1)] rounded-xl px-4 py-1.5 transition-all hover:border-[#20bf55] hover:text-[#20bf55]">
          <MdEmail className="w-5 h-5" />
          <span>Contact</span>
        </Link>
      </div>
    </article>
  );
}
