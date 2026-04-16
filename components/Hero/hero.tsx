"use client";

import React from "react";
import { motion } from "framer-motion";

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
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 overflow-hidden bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* TEXT */}
      <motion.div className="flex flex-col items-center text-center max-w-6xl z-10 space-y-2 md:space-y-4">
        <motion.h1
          variants={textVariants}
          className="text-5xl md:text-7xl lg:text-[120px] italic text-[#1b1d1e] tracking-tighter leading-[1]"
        >
          Pygmalion Agency
        </motion.h1>

        <motion.span
          variants={textVariants}
          className="text-2xl md:text-4xl lg:text-6xl font-serif text-[#1b1d1e] leading-[1.1]"
        >
          Agence de marketing / communication
        </motion.span>
      </motion.div>

      {/* BUTTON */}
      <motion.div variants={buttonVariants} className="mt-10 md:mt-16 z-10">
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="bg-[#FFF083] cursor-pointer flex gap-4 items-center px-6 py-3 md:px-8 md:py-4 rounded-full"
        >
          <span className=" font-medium text-sm md:text-base text-black">
            Voir mes projets
          </span>

          <div className="bg-black flex items-center justify-center p-2 rounded-full">
            <svg className="size-4 md:size-5" fill="none" viewBox="0 0 12 12">
              <path
                d="M0.75 10.75L10.75 0.75M10.75 0.75H3.25M10.75 0.75V8.25"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </motion.button>
      </motion.div>

      {/* FLOATING ICON */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        animate={{
          y: [0, -10, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          opacity: { duration: 0.8, ease: "easeOut" },
          scale: { duration: 0.8, ease: "easeOut" },
          rotate: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        viewport={{ once: true, amount: 0.6 }}
        className="absolute top-10 right-4 md:top-24 md:right-[10%]"
      >
        <div className="relative flex items-center justify-center size-20 md:size-28">
          <div className="absolute bg-[#010205] rounded-full size-full" />

          <svg
            className="relative size-10 md:size-12"
            fill="none"
            viewBox="0 0 48 48"
          >
            <path
              d="M46 12L27 31L17 21L2 36"
              stroke="#FFF083"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M34 12H46V24"
              stroke="#FDCF02"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
};
