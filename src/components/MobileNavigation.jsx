"use client";

import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";

export default function MobileNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuHanler = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className={`border border-solid backdrop-blur-xl border-[rgba(255,255,255,.1)] bg-[rgba(4,19,14,.5)] mx-4 ${isMenuOpen ? "rounded-md" : "rounded-[80px]"}`}>
      <div className="flex justify-between items-center">
        <div className="p-2">
          <div className="bg-[#176536] h-10 w-10 flex justify-center items-center rounded-full">
            <h3 className="text-xl font-normal">PA</h3>
          </div>
        </div>
        <div className="p-2 mr-2">
          <CiMenuBurger onClick={menuHanler} size="30px" />
        </div>
      </div>
      {isMenuOpen && (
        <div className="uppercase mt-4 font-light text-sm tracking-wide opacity-85 flex flex-col gap-4 justify-center items-center">
          <div>
            <Link href="#intro">Home</Link>
          </div>
          <div>
            <Link href="#skills">Skill</Link>
          </div>
          <div>
            <Link href="#tools-i-use">Tool</Link>
          </div>
          <div>
            <Link href="#my-recent-project">Project</Link>
          </div>
          <div>
            <Link href="#my-experience">Career</Link>
          </div>
          <div className="pb-4">
            <Link href="#contact-me">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
