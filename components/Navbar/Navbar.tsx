"use client";

import Link from "next/link";
import { DesktopNavbar } from "./desktopNavbar";
import { MobileNavbar } from "./mobileNavbar";
import { useState } from "react";
import UIButton from "../ui/UIButton";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <nav className="relative z-[60] px-14 py-4 flex items-center justify-between bg-black lg:bg-white/80 lg:backdrop-blur-md">
      {/* LOGO */}
      <Link href="/" className="text-2xl text-white lg:text-[#1b1d1e]">
        Pygmalion
      </Link>

      {/* DESKTOP */}
      <DesktopNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* CONTACT */}
      <Link href="/contact" className="hidden lg:block">
        <UIButton variant="dark">Contact</UIButton>
      </Link>

      {/* BURGER BUTTON */}
      <button
        className="lg:hidden flex flex-col gap-1.5 relative z-[70]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <div
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* MOBILE MENU */}
      <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};