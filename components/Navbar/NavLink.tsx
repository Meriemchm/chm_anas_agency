"use client";

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

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const isHash = href.startsWith("#") || href.startsWith("/#");
    const id = href.replace("/#", "").replace("#", "");

    // 🚨 NAVIGATION normale (page classique)
    if (!isHash) {
      router.push(href);
      onClick?.();
      return;
    }

    // 🟢 CAS 1 : on est sur /contact
    if (pathname === "/contact") {
      sessionStorage.setItem("scrollTo", id);
      router.push("/");

      onClick?.();
      return;
    }

    // 🟡 CAS 2 : déjà sur home
    if (pathname === "/") {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }

      onClick?.();
      return;
    }

    // 🟠 fallback (autre page)
    sessionStorage.setItem("scrollTo", id);
    router.push("/");

    onClick?.();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
        isActive
          ? "bg-white text-black shadow-sm"
          : "text-gray-500 hover:text-black"
      }`}
    >
      {label}
    </Link>
  );
};