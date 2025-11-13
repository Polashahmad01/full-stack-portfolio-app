import Link from "next/link";

export default function DesktopHeader() {
  return (
    <nav className="hidden sm:block fixed top-5 left-1/2 transform -translate-x-1/2 border rounded-[80px] backdrop-blur-xl border-[rgba(255,255,255,.1)] bg-[rgba(4,19,14,.5)] text-white font-light uppercase text-sm tracking-wide opacity-100 z-50">
      <ul className="flex items-center py-4">
        <li>
          <Link href="#intro" className="block px-7 tracking-[2px] border-r border-[rgba(255,255,255,.1)] transition-all hover:text-[#18ffb0]">Home</Link>
        </li>
        <li>
          <Link href="#skills" className="block px-7 tracking-[2px] border-r border-[rgba(255,255,255,.1)] transition-all hover:text-[#18ffb0]">Skills</Link>
        </li>
        <li>
          <Link href="#tools-i-use" className="block px-7 tracking-[2px] border-r border-[rgba(255,255,255,.1)] transition-all hover:text-[#18ffb0]">Tools</Link>
        </li>
        <li>
          <Link href="#my-recent-project" className="block px-7 tracking-[2px] border-r border-[rgba(255,255,255,.1)] transition-all hover:text-[#18ffb0]">Projects</Link>
        </li>
        <li>
          <Link href="#my-experience" className="block px-7 tracking-[2px] border-r border-[rgba(255,255,255,.1)] transition-all hover:text-[#18ffb0]">Career</Link>
        </li>
        <li>
          <Link href="#contact-me" className="block px-7 tracking-[2px] transition-all hover:text-[#18ffb0]">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
