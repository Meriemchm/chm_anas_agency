"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProcessData } from "@/data/ProcessData";
import ProcessRail from "./ProcessRail";
import ProcessTitle from "./ProcessTitle";

export const Process = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 0.9], ["0%", "-84%"]);

  return (
    <div
      id="process"
      ref={containerRef}
      className="relative h-[600vh] bg-white"
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">

        <ProcessTitle />

        <ProcessRail x={x} data={ProcessData} />

        <div className="absolute bottom-10 left-6 md:left-20 right-6 md:right-20 h-[1px] bg-gray-200 z-30">
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="h-full bg-black origin-left"
          />
        </div>

      </div>
    </div>
  );
};