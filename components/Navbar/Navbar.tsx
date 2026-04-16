'use client';
import Link from "next/link";
import { DesktopNavbar } from "./desktopNavbar";
import { MobileNavbar } from "./mobileNavbar";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <nav className=" px-14 py-4 flex items-center justify-between bg-black lg:bg-white/80 lg:backdrop-blur-md">

      <Link href="/" className="text-2xl font-['Abel'] text-white lg:text-[#1b1d1e]">
        Pygmalion
      </Link>

      <DesktopNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <Link href="/contact" className="hidden lg:block">
        <button className="bg-[#1b1d1e] text-white px-8 py-3 rounded-full cursor-pointer hover:scale-105 transition-transform duration-200">
          Contact
        </button>
      </Link>

      <button
        className="lg:hidden flex flex-col gap-1.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`w-6 h-0.5 bg-white ${isOpen && "rotate-45 translate-y-2"}`} />
        <div className={`w-6 h-0.5 bg-white ${isOpen && "opacity-0"}`} />
        <div className={`w-6 h-0.5 bg-white ${isOpen && "-rotate-45 -translate-y-2"}`} />
      </button>

      <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};