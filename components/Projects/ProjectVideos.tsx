"use client";

import React from "react";
import { SmartVideo } from "@/components/ui/SmartVideo";
import { motion } from "framer-motion";

interface Video {
  id: number;
  url: string;
}

interface Props {
  projects: Video[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
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
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* MIDDLE */}
      <motion.div
        variants={container}
        className="grid grid-rows-2 gap-4 md:h-[500px]"
      >

        <motion.div
          variants={item}
          className="rounded-3xl overflow-hidden aspect-[9/16] md:aspect-auto"
        >
          <SmartVideo
            src={projects[1]?.url}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          variants={item}
          className="rounded-3xl overflow-hidden aspect-[9/16] md:aspect-auto"
        >
          <SmartVideo
            src={projects[2]?.url}
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
          className="w-full h-full object-cover"
        />
      </motion.div>

    </motion.div>
  );
};