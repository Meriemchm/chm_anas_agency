"use client";

import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

interface NavLinkProps {
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const NavLink = ({ label, href, isActive, onClick }: NavLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const isHash = href.startsWith("#") || href.startsWith("/#");
    const id = href.replace("/#", "").replace("#", "");

    if (!isHash) {
      router.push(href);
      onClick?.();
      return;
    }

    if (pathname === "/contact") {
      sessionStorage.setItem("scrollTo", id);
      router.push("/");
      onClick?.();
      return;
    }

    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      onClick?.();
      return;
    }

    sessionStorage.setItem("scrollTo", id);
    router.push("/");
    onClick?.();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`
        px-6 py-3 rounded-full transition-all duration-300
        ${
          isMobile
            ? "text-4xl sm:text-5xl font-extralight text-white"
            : isActive
            ? "bg-white text-black shadow-sm text-sm font-medium"
            : "text-gray-500 hover:text-black text-sm font-medium"
        }
      `}
    >
      {label}
    </Link>
  );
};