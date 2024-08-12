import Image from "next/image";
import Link from "next/link";
import { Righteous } from "next/font/google";
import { GB, CA, US, CZ } from "country-flag-icons/react/3x2";
import { GrFormNextLink } from "react-icons/gr";
import tattooDesignProImgSrc from "../../public/images/tattoo-design-pro.png";
import wordRocketImgSrc from "../../public/images/word-rocket.png";
import spontivlyImgSrc from "../../public/images/spontivly.png";
import eireneImgSrc from "../../public/images/eirene.png";
import zasilkovnaImgSrc from "../../public/images/zasilkovna.png";
import rhondaImgSrc from "../../public/images/rhonda.png";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function MyRecentWorkPage() {
  return (
    <section className="common-container" id="my-recent-project">
      <div className="px-4 xl:px-0 mb-[10vh] relative">
        <h3 className={`${righteous.className} text-3xl opacity-85 mb-[10vh] text-center lg:text-[56px]`}>My Recent Projects</h3>
        <div className="hidden lg:block my__recent__work__glow absolute top-[650px]" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-[#191B1F] p-4 rounded-lg inline-block opacity-85">
            <div className="mb-4">
              <Image
                src={tattooDesignProImgSrc}
                alt="Tattoo Design Pro"
                className="w-full rounded-md"
              />
            </div>
            <div className="bg-[#24272A] rounded-lg p-4">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <Link href="https://tattoodesignpro.com" target="_blank" className="font-bold tracking-wide transition-all hover:opacity-70">TattooDesignPro</Link>
                  <Link href="https://tattoodesignpro.com" target="_blank" className="transition-all hover:opacity-70">
                    <GrFormNextLink size="20px" />
                  </Link>
                </div>
                <div className="flex gap-2">
                  <GB title="United Kingdom" className="w-4" />
                  <p className="text-sm opacity-70">Covent Garden, London, United Kingdom</p>
                </div>
              </div>
              <div className="text-xs flex items-center gap-[5px]">
                <p className="opacity-60">Designed by: Softera</p>
                <div className="h-[5px] w-[5px] bg-white rounded-full opacity-70" />
                <p className="opacity-60">Developed by: Polash Ahmad</p>
              </div>
            </div>
          </div>
          <div className="bg-[#191B1F] p-4 rounded-lg inline-block opacity-85">
            <div className="mb-4">
              <Image
                src={wordRocketImgSrc}
                alt="word-rocket"
                className="w-full rounded-md"
              />
            </div>
            <div className="bg-[#24272A] rounded-lg p-4">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <Link href="https://wordrocket.ai" target="_blank" className="font-bold tracking-wide transition-all hover:opacity-70">WordRocket</Link>
                  <Link href="https://wordrocket.ai" target="_blank" className="transition-all hover:opacity-70">
                    <GrFormNextLink size="20px" />
                  </Link>
                </div>
                <div className="flex gap-2">
                  <CA title="Canada" className="w-4" />
                  <p className="text-sm opacity-70">Spadina Road, Toronto, Canada</p>
                </div>
              </div>
              <div className="text-xs flex items-center gap-[5px]">
                <p className="opacity-60">Designed by: Ekkel</p>
                <div className="h-[5px] w-[5px] bg-white rounded-full opacity-70" />
                <p className="opacity-60">Developed by: Polash Ahmad</p>
              </div>
            </div>
          </div>
          <div className="bg-[#191B1F] p-4 rounded-lg inline-block opacity-85">
            <div className="mb-4">
              <Image
                src={spontivlyImgSrc}
                alt="spontivly"
                className="w-full rounded-md"
              />
            </div>
            <div className="bg-[#24272A] rounded-lg p-4">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <Link href="https://www.spontivly.com" target="_blank" className="font-bold tracking-wide transition-all hover:opacity-70">Spontivly</Link>
                  <Link href="https://www.spontivly.com" target="_blank" className="transition-all hover:opacity-70">
                    <GrFormNextLink size="20px" />
                  </Link>
                </div>
                <div className="flex gap-2">
                  <US title="United States" className="w-4" />
                  <p className="text-sm opacity-70">St Petersburg, Florida, United States</p>
                </div>
              </div>
              <div className="text-xs flex items-center gap-[5px]">
                <p className="opacity-60">Designed by: Spontivly</p>
                <div className="h-[5px] w-[5px] bg-white rounded-full opacity-70" />
                <p className="opacity-60">Developed by: Polash Ahmad</p>
              </div>
            </div>
          </div>
          <div className="bg-[#191B1F] p-4 rounded-lg inline-block opacity-85">
            <div className="mb-4">
              <Image
                src={eireneImgSrc}
                alt="Eirene Cremations"
                className="w-full rounded-md"
              />
            </div>
            <div className="bg-[#24272A] rounded-lg p-4">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <Link href="https://eirenecremations.com" target="_blank" className="font-bold tracking-wide transition-all hover:opacity-70">Eirene Cremations</Link>
                  <Link href="https://eirenecremations.com" target="_blank" className="transition-all hover:opacity-70">
                    <GrFormNextLink size="20px" />
                  </Link>
                </div>
                <div className="flex gap-2">
                  <CA title="Canada" className="w-4" />
                  <p className="text-sm opacity-70">Regina, Saskatchewan, Canada</p>
                </div>
              </div>
              <div className="text-xs flex items-center gap-[5px]">
                <p className="opacity-60">Designed by: Eirene</p>
                <div className="h-[5px] w-[5px] bg-white rounded-full opacity-70" />
                <p className="opacity-60">Developed by: Polash Ahmad</p>
              </div>
            </div>
          </div>
          <div className="bg-[#191B1F] p-4 rounded-lg inline-block opacity-85">
            <div className="mb-4">
              <Image
                src={zasilkovnaImgSrc}
                alt="Zasilkovna"
                className="w-full rounded-md"
              />
            </div>
            <div className="bg-[#24272A] rounded-lg p-4">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <Link href="https://zasilkovna.cz" target="_blank" className="font-bold tracking-wide transition-all hover:opacity-70">Zasilkovna</Link>
                  <Link href="https://zasilkovna.cz" target="_blank" className="transition-all hover:opacity-70">
                    <GrFormNextLink size="20px" />
                  </Link>
                </div>
                <div className="flex gap-2">
                  <CZ title="Czech Republic" className="w-4" />
                  <p className="text-sm opacity-70">Českomoravská 2408, 190 00 Praha 9, Czechia</p>
                </div>
              </div>
              <div className="text-xs flex items-center gap-[5px]">
                <p className="opacity-60">Designed by: Hanaboso</p>
                <div className="h-[5px] w-[5px] bg-white rounded-full opacity-70" />
                <p className="opacity-60">Developed by: Polash Ahmad</p>
              </div>
            </div>
          </div>
          <div className="bg-[#191B1F] p-4 rounded-lg inline-block opacity-85">
            <div className="mb-4">
              <Image
                src={rhondaImgSrc}
                alt="rhonda ai"
                className="w-full rounded-md"
              />
            </div>
            <div className="bg-[#24272A] rounded-lg p-4">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <Link href="#" target="_blank" className="font-bold tracking-wide transition-all hover:opacity-70">Rhonda.ai</Link>
                  <Link href="#" target="_blank" className="transition-all hover:opacity-70">
                    <GrFormNextLink size="20px" />
                  </Link>
                </div>
                <div className="flex gap-2">
                  <CA title="Canada" className="w-4" />
                  <p className="text-sm opacity-70">Ottawa, Ontario, Canada</p>
                </div>
              </div>
              <div className="text-xs flex items-center gap-[5px]">
                <p className="opacity-60">Designed by: Rhonda</p>
                <div className="h-[5px] w-[5px] bg-white rounded-full opacity-70" />
                <p className="opacity-60">Developed by: Polash Ahmad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
