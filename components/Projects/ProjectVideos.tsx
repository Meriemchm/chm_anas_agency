"use client";

import React from "react";
import { SmartVideo } from "@/components/ui/SmartVideo";
import { motion, Variants } from "framer-motion";

interface Video {
  id: number;
  url: string;
}

interface Props {
  projects: Video[];
}

// ✅ stagger plus naturel
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// ✅ animation fluide (NO BLUR ❌)
const item: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // 🔥 easing pro (cubic-bezier)
    },
  },
};

export const ProjectVideos = ({ projects }: Props) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }} // 🔥 déclenche plus tôt
    >
      {/* LEFT */}
      <motion.div
        variants={item}
        className="rounded-3xl overflow-hidden aspect-[9/16] md:h-[500px] will-change-transform"
      >
        <SmartVideo
          autoPlay
          src={projects[0]?.url}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* MIDDLE */}
      <div className="grid grid-rows-2 gap-4 md:h-[500px]">
        <motion.div
          variants={item}
          className="rounded-3xl overflow-hidden will-change-transform"
        >
          <SmartVideo
            src={projects[1]?.url}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          variants={item}
          className="rounded-3xl overflow-hidden will-change-transform"
        >
          <SmartVideo
            src={projects[2]?.url}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* RIGHT */}
      <motion.div
        variants={item}
        className="rounded-3xl overflow-hidden aspect-[9/16] md:h-[500px] will-change-transform"
      >
        <SmartVideo
          src={projects[3]?.url}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};