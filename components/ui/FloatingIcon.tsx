"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  className?: string;
}

export const FloatingIcon = ({ className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.8 },
        scale: { duration: 0.8 },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
      className={className}
    >
      <div className="relative flex items-center justify-center size-14 md:size-20">
        <div className="absolute bg-[#010205] rounded-full size-full" />

        <svg
          className="relative size-7 md:size-10"
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
  );
};