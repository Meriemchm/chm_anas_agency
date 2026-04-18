"use client";

import { NavbarData } from "@/data/NavbarData";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import React from "react";
import { NavLink } from "./NavLink";

interface NavbarItem {
  name: string;
  link: string;
}

interface MobileNavbarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const menuVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const MobileNavbar = ({ isOpen, setIsOpen }: MobileNavbarProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-10 lg:hidden"
        >
          {NavbarData.map((item: NavbarItem) => (
            <div
              key={item.name}
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="text-4xl sm:text-5xl font-extralight text-white"
            >
              <NavLink label={item.name} href={item.link} />
            </div>
          ))}

          <motion.div variants={itemVariants}>
            <Link href="/contact" aria-label="Contactez-nous">
              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 px-12 py-4 rounded-full text-xl bg-white text-black"
              >
                Contact
              </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
