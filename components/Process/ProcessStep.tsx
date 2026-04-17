"use client";

import React from "react";
import Image from "next/image";
import { motion, cubicBezier } from "framer-motion";

interface Props {
  step: {
    number: string;
    title: string;
    description: string;
  };
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.98,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
    },
  },
};

const ProcessStep = ({ step }: Props) => {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="w-screen h-full flex shrink-0 items-center justify-center pt-46 pb-20"
    >
      <div className="max-w-5xl w-full flex flex-col gap-8">

        {/* TOP */}
        <div className="space-y-1">
          <span className="text-6xl md:text-[120px] font-medium leading-none block text-black opacity-90">
            {step.number}
          </span>

          <h3 className="text-xl md:text-4xl font-light tracking-tight">
            {step.title}
          </h3>
        </div>

        {/* CARD */}
        <div className="bg-primary rounded-[40px] p-8 md:p-12 relative w-full">
          <div className="absolute top-0 -left-6 md:-left-10 pointer-events-none">
            <Image
              src="/Vector/Line-Arrow.svg"
              alt="decor"
              width={150}
              height={150}
              className="w-24 h-24 md:h-full md:w-full"
            />
          </div>

          <p className="text-xs md:text-base text-black font-normal leading-snug">
            {step.description}
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default ProcessStep;