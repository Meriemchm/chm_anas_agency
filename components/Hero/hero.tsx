"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import UIButton from "../ui/UIButton";
import { CursorEffect } from "../ui/CustomCursor";
import { FloatingIcon } from "../ui/FloatingIcon";
import CurveBackground from "../ui/CurveBackground";

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
  },
};

// ✅ TITLE (1er)
const titleVariants: Variants = {
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
      delay: 0,
    },
  },
};

// ✅ SUBTITLE (2ème)
const subtitleVariants: Variants = {
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
      delay: 0.3,
    },
  },
};

// ✅ BUTTON (3ème)
const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 18,
      delay: 0.6,
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
        <div className="absolute top-1/5 md:top-1/8 left-0 w-[300%] -translate-y-1/2 pointer-events-none">
          <CurveBackground />
        </div>

        {/* TEXT */}
        <div className="flex flex-col items-center text-center max-w-6xl z-10 space-y-2 md:space-y-4">
          
          {/* TITLE */}
          <div className="relative inline-block">
            <FloatingIcon className="absolute -top-12 right-0 md:-top-15 md:-right-6" />

            <motion.h1
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-7xl lg:text-[120px] italic text-[#1b1d1e] tracking-tighter leading-tight"
            >
              Pygmalion Agency
            </motion.h1>
          </div>

          {/* SUBTITLE */}
          <motion.span
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="text-2xl md:text-4xl lg:text-6xl font-serif text-[#1b1d1e] leading-[1.1]"
          >
            Agence de marketing / communication
          </motion.span>
        </div>

        {/* BUTTON */}
        <Link href="#projects" aria-label="Voir les projets">
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 md:mt-16 z-10"
          >
            <UIButton
              variant="primary"
              icon="/Vector/up-2.svg"
              iconSize={35}
              withIconBg
            >
              Voir nos projets
            </UIButton>
          </motion.div>
        </Link>
      </motion.div>
    </>
  );
};