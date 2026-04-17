"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import UIButton from "../ui/UIButton";
import { CursorEffect } from "../ui/CustomCursor";
import { FloatingIcon } from "../ui/FloatingIcon";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.92,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 18,
    },
  },
};

export const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isInsideHero, setIsInsideHero] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      {/* CURSOR */}
      <CursorEffect
        enabled={isDesktop}
        isInside={isInsideHero}
        isHovering={isHovering}
        setIsInside={setIsInsideHero}
      />

      {/* HERO */}
      <motion.div
        id="hero-root"
        className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 overflow-hidden bg-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* TEXT */}
        <motion.div className="flex flex-col items-center text-center max-w-6xl z-10 space-y-2 md:space-y-4">

          {/* TITLE WRAPPER */}
          <div className="relative inline-block">

            {/* FLOATING ICON COMPONENT */}
            <FloatingIcon className="absolute -top-10 right-0 md:-top-15 md:-right-6" />

            {/* TITLE */}
            <motion.h1
              variants={textVariants}
              className="text-5xl md:text-7xl lg:text-[120px] italic text-[#1b1d1e] tracking-tighter leading-[1]"
            >
              Pygmalion Agency
            </motion.h1>
          </div>

          {/* SUBTITLE */}
          <motion.span
            variants={textVariants}
            className="text-2xl md:text-4xl lg:text-6xl font-serif text-[#1b1d1e] leading-[1.1]"
          >
            Agence de marketing / communication
          </motion.span>
        </motion.div>

        {/* BUTTON */}
        <Link href="#projects">
          <motion.div
            variants={buttonVariants}
            className="mt-10 md:mt-16 z-10"
          >
            <UIButton
              variant="primary"
              icon="/Vector/up-2.svg"
              iconSize={35}
              withIconBg
            >
              Voir mes projets
            </UIButton>
          </motion.div>
        </Link>
      </motion.div>
    </>
  );
};