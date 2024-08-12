import Link from "next/link";
import { Righteous } from "next/font/google";
import { MdOutlineArrowOutward } from "react-icons/md";
import { TbCircleLetterSFilled } from "react-icons/tb";
import { TbCircleLetterEFilled } from "react-icons/tb";
import { TbCircleLetterZFilled } from "react-icons/tb";
import { TbCircleLetterHFilled } from "react-icons/tb";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function MyExperiencePage() {
  return (
    <section className="common-container" id="my-experience">
      <div className="px-4 xl:px-0 mb-[10vh] relative">
        <h3 className={`${righteous.className} text-3xl opacity-85 mb-[10vh] text-center lg:text-[56px]`}>My Experience</h3>
        <div className="hidden lg:block my__experience__glow absolute top-[450px]" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="border px-8 py-10 border-solid border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.01)] rounded-2xl backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="flex items-center mb-4 gap-4">
              <Link href="https://eirenecremations.com" target="_blank" className="transition-all hover:opacity-70">
                <TbCircleLetterEFilled color="#6B5D7B" className="w-10 h-10" />
              </Link>
              <Link href="https://eirenecremations.com" target="_blank" className="text-lg font-medium tracking-wide opacity-90 transition-all hover:opacity-70">Eirene Cremations</Link>
              <Link href="https://eirenecremations.com" target="_blank" className="transition-all opacity-90 hover:opacity-70">
                <MdOutlineArrowOutward size="18px" />
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="leading-tight mb-4 text-2xl font-medium opacity-90">FrontEnd Engineer</h4>
              <p className="text-sm opacity-70">Mar 2023 - Apr 2024</p>
            </div>
            <p className="leading-normal text-[#96a7a1]">
              At Eirene Cremations, I focused on the front end, delivering features such as a deceased status checker and creating forms for listing
              deceased information. I also built internal tools to manage the entire system and integrated backend APIs & collaborated
              with the team to ensure a seamless user experience.
            </p>
          </div>
          <div className="border px-8 py-10 border-solid border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.01)] rounded-2xl backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="flex items-center mb-4 gap-4">
              <Link href="https://www.spontivly.com" target="_blank" className="transition-all hover:opacity-70">
                <TbCircleLetterSFilled color="#D3543E" className="w-10 h-10" />
              </Link>
              <Link href="https://www.spontivly.com" target="_blank" className="text-lg font-medium tracking-wide opacity-90 transition-all hover:opacity-70">Spontivly</Link>
              <Link href="https://www.spontivly.com" target="_blank" className="transition-all opacity-90 hover:opacity-70">
                <MdOutlineArrowOutward size="18px" />
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="leading-tight mb-4 text-2xl font-medium opacity-90">FrontEnd Developer</h4>
              <p className="text-sm opacity-70">Jun 2022 - Feb 2023</p>
            </div>
            <p className="leading-normal text-[#96a7a1]">
              At Spontivly, I developed and maintained web applications as a team member. I created a library content management
              system with user-friendly features and implemented a complex search filter for refining content. I also designed the UI/UX,
              fixed bugs, and deployed the application to production.
            </p>
          </div>
          <div className="border px-8 py-10 border-solid border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.01)] rounded-2xl backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="flex items-center mb-4 gap-4">
              <Link href="https://hanaboso.com" target="_blank" className="transition-all hover:opacity-70">
                <TbCircleLetterHFilled color="#00ACE9" className="w-10 h-10" />
              </Link>
              <Link href="https://hanaboso.com" target="_blank" className="text-lg font-medium tracking-wide opacity-90 transition-all hover:opacity-70">Hanaboso</Link>
              <Link href="https://hanaboso.com" target="_blank" className="transition-all opacity-90 hover:opacity-70">
                <MdOutlineArrowOutward size="18px" />
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="leading-tight mb-4 text-2xl font-medium opacity-90">FrontEnd Developer</h4>
              <p className="text-sm opacity-70">Mar 2021 - Apr 2022</p>
            </div>
            <p className="leading-normal text-[#96a7a1]">
              I worked on the Zasilkovna parcel delivery platform, building the UI with React.js and creating a custom API library.
              I implemented features like authentication and parcel management while ensuring a responsive design.
              Additionally, I developed reusable components to enhance code efficiency.
            </p>
          </div>
          <div className="border px-8 py-10 border-solid border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.01)] rounded-2xl backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="flex items-center mb-4 gap-4">
              <Link href="https://about.zination.com" target="_blank" className="transition-all hover:opacity-70">
                <TbCircleLetterZFilled color="#CD292E" className="w-10 h-10" />
              </Link>
              <Link href="https://about.zination.com" target="_blank" className="text-lg font-medium tracking-wide opacity-90 transition-all hover:opacity-70">Zination</Link>
              <Link href="https://about.zination.com" target="_blank" className="transition-all opacity-90 hover:opacity-70">
                <MdOutlineArrowOutward size="18px" />
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="leading-tight mb-4 text-2xl font-medium opacity-90">FrontEnd Engineer</h4>
              <p className="text-sm opacity-70">Jan 2020 - Jan 2021</p>
            </div>
            <p className="leading-normal text-[#96a7a1]">
              At Zination, I worked on the Rhonda.ai project to help companies streamline their hiring processes. I integrated the applicant screening module,
              built a savings tracker, implemented the &ldquo;Ask Rhonda&ldquo; feature, and ensured a pixel-perfect UI/UX. Additionally,
              I fixed bugs and deployed the web application to production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
