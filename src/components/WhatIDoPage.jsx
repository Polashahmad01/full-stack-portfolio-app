import { Righteous, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });
const spacegrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function WhatIDoPage() {
  return (
    <section className="common-container" id="skills">
      <div className="relative px-4 xl:px-0 mb-[20vh]">
        <div className="hidden lg:block what__i__do__glow absolute top-96 right-40" />
        <h3 className={`${righteous.className} text-3xl opacity-85 mb-[10vh] text-center lg:text-[56px]`}>Skills</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-[5vh] lg:gap-8">
          <div className="backdrop-blur-2xl bg-[#595b731a] border border-solid border-[#ffffff1a] rounded-[20px] p-[52px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-10 bg-white opacity-30" />
              <div className="text-[#2cf8ff] opacity-70">01</div>
            </div>
            <h4 className={`${spacegrotesk.className} leading-tight mb-4 text-[26px] font-medium uppercase`}>
              <span>UI/UX</span>
              <br />
              <span>Design</span>
            </h4>
            <div className="">
              <p className="leading-normal text-[#96a7a1]">
                I focus on user-centered design by blending creativity with functionality. Through research and analysis, 
                I create intuitive interfaces that enhance user satisfaction, making applications visually appealing and easy to navigate. 
                A great user experience is essential for success.
              </p>
            </div>
          </div>
          <div className="backdrop-blur-2xl bg-[#595b731a] border border-solid border-[#ffffff1a] rounded-[20px] p-[52px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-10 bg-white opacity-30" />
              <div className="text-[#2cf8ff] opacity-70">02</div>
            </div>
            <h4 className={`${spacegrotesk.className} leading-tight mb-4 text-[26px] font-medium uppercase`}>
              <span>Development</span>
              <br />
              <span>Proficiency</span>
            </h4>
            <div className="">
              <p className="leading-normal text-[#96a7a1]">
                Expertise in modern technologies enables the delivery of high-quality, scalable web applications. 
                Proficient in both front-end and back-end development, ensuring seamless integration of design and 
                functionality in every project.
              </p>
            </div>
          </div>
          <div className="backdrop-blur-2xl bg-[#595b731a] border border-solid border-[#ffffff1a] rounded-[20px] p-[52px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-10 bg-white opacity-30" />
              <div className="text-[#2cf8ff] opacity-70">03</div>
            </div>
            <h4 className={`${spacegrotesk.className} leading-tight mb-4 text-[26px] font-medium uppercase`}>
              <span>Quick</span>
              <br />
              <span>Delivery</span>
            </h4>
            <div className="">
              <p className="leading-normal text-[#96a7a1]">
                Recognizing the importance of timely delivery, a fast development process enables quick iterations and 
                on-time releases without sacrificing quality. Committed to meeting deadlines while upholding the highest 
                standards of professionalism and excellence.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Link href="https://wa.me/+8801795186140" target="_blank" className="flex items-center gap-4 py-[11px] pr-2 pl-8 rounded-full border border-solid border-[#ffffff1f] text-[#c6ffec] chat__on__whatsapp">
            <span className="text-xl">
              Let&#39;s chat on Whatsapp
            </span>
            <FaWhatsapp size="30px" />
          </Link>
        </div>
      </div>
    </section>
  );
}
