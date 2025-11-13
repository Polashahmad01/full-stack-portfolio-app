"use client";

import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

interface MobileHeaderProps {
  onMenuToggle: (isOpen: boolean) => void;
  isMenuOpen: boolean;
}

export default function MobileHeader({
  isMenuOpen,
  onMenuToggle,
}: MobileHeaderProps) {
  const handleMenuClick = () => {
    onMenuToggle(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 bg-black w-full z-10 sm:hidden">
      <div className="m-4 flex flex-wrap items-center justify-between">
        <Link className="font-righteous text-2xl animate-pulse" href="#intro">
          PA
        </Link>
        <div role="button" onClick={handleMenuClick}>
          <CiMenuFries size="24px" />
        </div>
      </div>
    </nav>
  );
}
