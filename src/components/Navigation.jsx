import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="relative text-white font-light uppercase text-sm tracking-wide opacity-100 z-50">
      <div className="fixed top-16 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-solid rounded-[80px] backdrop-blur-xl border-[rgba(255,255,255,.1)] bg-[rgba(4,19,14,.5)] flex items-center py-6">
        <div>
          <Link className="px-8 tracking-[2px] border-r border-solid border-[rgba(255,255,255,.1)] transition-all hover:text-[#18ffb0]" href="#intro">Home</Link>
        </div>
        <div>
          <Link className="px-8 tracking-[2px] border-r border-solid border-[rgba(255,255,255,.1)] transition-all hover:text-[#18ffb0]" href="#skills">Skills</Link>
        </div>
        <div>
          <Link className="px-8 tracking-[2px] border-r border-solid border-[rgba(255,255,255,.1)] transition-all hover:text-[#18ffb0]" href="#tools-i-use">Tools</Link>
        </div>
        <div>
          <Link className="px-8 tracking-[2px] border-r border-solid border-[rgba(255,255,255,.1)] transition-all hover:text-[#18ffb0]" href="#my-recent-project">Projects</Link>
        </div>
        <div>
          <Link className="px-8 tracking-[2px] border-r border-solid border-[rgba(255,255,255,.1)] transition-all hover:text-[#18ffb0]" href="#my-experience">Career</Link>
        </div>
        <div>
          <Link className="px-8 tracking-[2px] transition-all hover:text-[#18ffb0]" href="#contact-me">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
