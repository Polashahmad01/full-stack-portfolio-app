import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { SiHyperskill } from "react-icons/si";
import { FaDiagramProject } from "react-icons/fa6";
import { TbBriefcaseFilled } from "react-icons/tb";

interface MobileSideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSideDrawer({
  isOpen,
  onClose,
}: MobileSideDrawerProps) {
  return (
    <section>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm md:hidden"
          aria-label="Close menu"
        />
      )}
      <article
        className={`fixed top-0 left-0 z-50 w-[50vw] bg-teal-50/70 text-black h-screen transition-transform ease-in-out duration-300 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
        <div className="m-4 flex justify-center items-start h-full">
          <ul className="font-normal flex flex-col gap-2">
            <li className="group" onClick={onClose}>
              <Link className="flex items-center gap-2 px-4 py-1 border rounded-xl transition-all hover:border-blue-700" href="#intro">
                <FaHome className="w-4 h-4 transition-all group-hover:text-blue-700" />
                <span className="transition-all group-hover:text-blue-700">Home</span>
              </Link>
            </li>
            <li className="group" onClick={onClose}>
              <Link className="flex items-center gap-2 px-4 py-1 border rounded-xl transition-all hover:border-blue-700" href="#skills">
                <SiHyperskill className="w-4 h-4 transition-all group-hover:text-blue-700" />
                <span className="transition-all group-hover:text-blue-700">Skills</span>
              </Link>
            </li>
            <li className="group" onClick={onClose}>
              <Link className="flex items-center gap-2 px-4 py-1 border rounded-xl transition-all hover:border-blue-700" href="#tools-i-use">
                <FaTools className="w-4 h-4 transition-all group-hover:text-blue-700" />
                <span className="transition-all group-hover:text-blue-700">Tools</span>
              </Link>
            </li>
            <li className="group" onClick={onClose}>
              <Link className="flex items-center gap-2 px-4 py-1 border rounded-xl transition-all hover:border-blue-700" href="#my-recent-project">
                <FaDiagramProject className="w-4 h-4 transition-all group-hover:text-blue-700" />
                <span className="transition-all group-hover:text-blue-700">Projects</span>
              </Link>
            </li>
            <li className="group" onClick={onClose}>
              <Link className="flex items-center gap-2 px-4 py-1 border rounded-xl transition-all hover:border-blue-700" href="#my-experience">
                <TbBriefcaseFilled className="w-4 h-4 transition-all group-hover:text-blue-700" />
                <span className="transition-all group-hover:text-blue-700">Career</span>
              </Link>
            </li>
            <li className="group" onClick={onClose}>
              <Link className="flex items-center gap-2 px-4 py-1 border rounded-xl transition-all hover:border-blue-700" href="#contact-me">
                <FaComments className="w-4 h-4 transition-all group-hover:text-blue-700" />
                <span className="transition-all group-hover:text-blue-700">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}
