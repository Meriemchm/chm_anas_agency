"use client";

import React from "react";
import { SmartVideo } from "@/components/ui/SmartVideo";
import { motion } from "framer-motion";

interface Video {
  id: number;
  url: string;
  poster?: string;
}

interface Props {
  projects: Video[];
}

// 🔥 Container (stagger propre)
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

// 🔥 Item (animation premium)
const item = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 18,
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
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* LEFT BIG */}
      <motion.div
        variants={item}
        className="rounded-3xl overflow-hidden aspect-[9/16] md:aspect-auto md:h-[500px]"
      >
        <SmartVideo
          autoPlay
          src={projects[0]?.url}
          poster={projects[0]?.poster}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* MIDDLE */}
      <motion.div
        variants={container}
        initial="hidden" // ✅ FIX IMPORTANT
        whileInView="show" // ✅ FIX IMPORTANT
        viewport={{ once: true, amount: 0.25 }}
        className="grid grid-rows-2 gap-4 md:h-[500px]"
      >
        <motion.div
          variants={item}
          className="rounded-3xl overflow-hidden aspect-[9/16] md:aspect-auto"
        >
          <SmartVideo
            src={projects[1]?.url}
            poster={projects[1]?.poster}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          variants={item}
          className="rounded-3xl overflow-hidden aspect-[9/16] md:aspect-auto"
        >
          <SmartVideo
            src={projects[2]?.url}
            poster={projects[2]?.poster}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* RIGHT BIG */}
      <motion.div
        variants={item}
        className="rounded-3xl overflow-hidden aspect-[9/16] md:aspect-auto md:h-[500px]"
      >
        <SmartVideo
          src={projects[3]?.url}
          poster={projects[3]?.poster}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};