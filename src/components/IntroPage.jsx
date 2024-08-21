import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare, FaCloudDownloadAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import polashImgSrc from "../../public/images/polash_ahmad.jpg";
import { Righteous } from "next/font/google";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function IntroPage() {
  return (
    <section className="common-container py-[5vh] sm:py-[20vh]" id="intro">
      <div className="relative mx-4 xl:mx-0">
        <div className="hidden lg:block intro__glow absolute top-40" />
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-start lg:items-center">
            <div className="relative">
              <div className="block mx-auto object-cover">
                <Image
                  src={polashImgSrc}
                  alt="Polash Ahmad"
                  priority
                  className="rounded-[30px] mx-auto w-64 sm:w-96 lg:w-[500px]"
                />
              </div>
              <div className="hidden absolute -right-7 -bottom-7 bg-[#20bf55] rounded-full w-40 h-40 xl:flex justify-center items-center border-[30px] border-solid border-black -rotate-45">
                <IoArrowForwardOutline size="80px" className="text-black" />
              </div>
            </div>
            <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-8">
              <p className="rotate-90 mb-12 font-extralight text-[#20bf55]">Follow me on:</p>
              <div className="w-[0.5px] h-20 bg-[#20bf55]" />
              <div className="flex flex-col gap-4">
                <Link href="https://www.linkedin.com/in/polashahmad01" target="_blank" className="transition-all hover:opacity-80">
                  <FaLinkedin color="#20bf55" className="h-6 w-6" />
                </Link>
                <Link href="https://twitter.com/polashahmad01" target="_blank" className="transition-all hover:opacity-80">
                  <FaTwitterSquare color="#20bf55" className="h-6 w-6" />
                </Link>
                <Link href="https://www.facebook.com/polashahmad01" target="_blank" className="transition-all hover:opacity-80">
                  <FaSquareFacebook color="#20bf55" className="h-6 w-6" />
                </Link>
                <Link href="https://wa.me/+8801795186140" target="_blank" className="transition-all hover:opacity-80">
                  <FaSquareWhatsapp color="#20bf55" className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h1 className={`mb-6 lg:leading-[61px] text-3xl text-center lg:text-left lg:text-[56px] ${righteous.className}`}>
              Hi there,
              <br />
              I&apos;m <span className="text-[#20bf55]">Polash Ahmad</span>
            </h1>
            <p className="text-center leading-6 lg:text-left mb-8 opacity-75">
              A passionate full-stack developer with extensive experience transforming ideas into projects from ideation to deployment. 
              Thriving on creative problem-solving, a blend of technical expertise and artistic vision is used to craft elegant solutions.
            </p>
            <div className="text-lg font-light sm:font-semibold flex items-center justify-center lg:justify-start gap-4">
              <a 
                className="flex items-center justify-center gap-2 bg-[#20bf55] w-52 text-black py-[11px] rounded-xl border border-solid border-[rgba(255,255,255,.1)] transition-all hover:border-[#20bf55] hover:rounded-xl hover:opacity-90"
                href="/polash-ahmad-resume.pdf"
                download="Polash_Ahmad_Resume"
              >
                <FaCloudDownloadAlt size="20px" className="text-black" />
                <span className="">Resume</span>
              </a>
              <Link href="mailto:dev.polashahmad@gmail.com" className="flex items-center justify-center gap-2 bg-[#171717] py-[11px] w-52 rounded-xl border border-solid border-[rgba(255,255,255,.1)] transition-all hover:border-[#20bf55] hover:rounded-xl hover:text-[#20bf55]">
                <MdEmail size="18px" className="" />
                <span className="">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
