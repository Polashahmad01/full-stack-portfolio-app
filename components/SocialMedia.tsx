import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

export default function SocialMedia() {
  return (
    <article className="hidden lg:flex lg:flex-col lg:items-center lg:gap-4">
      <span className="font-extralight text-[#20bf55]" style={{ writingMode: "sideways-rl", textOrientation: "upright" }}>Follow me on:</span>
      <div className="w-[0.5px] h-8 bg-[#20bf55]"></div>
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
    </article>
  );
}