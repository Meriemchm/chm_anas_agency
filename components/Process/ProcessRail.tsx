"use client";

import React, { useEffect, useState } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import ProcessStep from "./ProcessStep";

interface Props {
  x: MotionValue<string>;
  progress: MotionValue<number>;
  data: any[];
}

const ProcessRail = ({ x, progress, data }: Props) => {
  const total = data.length;

  // Detect mobile only
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const update = () => setIsMobile(media.matches);

    update(); // initial check
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div className="relative h-full w-full flex items-center">

      {/* ================= BACK CURVE ================= */}
      <div className="absolute top-1/3 left-0 w-[300%] -translate-y-1/2 pointer-events-none">
        <svg
          viewBox="0 0 2000 200"
          className="w-full h-[200px] opacity-40"
          preserveAspectRatio="none"
        >
          <path
            d="
              M 0 100
              C 200 0, 400 200, 600 100
              S 1000 100, 1200 100
              S 1600 200, 2000 100
            "
            fill="none"
            stroke="black"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="6 10"
            style={{ filter: "blur(0.3px)" }}
          />
        </svg>
      </div>

      {/* ================= RAIL ================= */}
      <motion.div
        style={{ x }}
        className="flex h-full items-center relative z-10"
      >
        {data.map((step, index) => {
          const stepStart = index / total;
          const stepEnd = (index + 1) / total;

          // SCALE ONLY DESKTOP
          const scale = useTransform(
            progress,
            [stepStart, stepEnd],
            isMobile ? [1, 1] : [0.85, 1.15]
          );

          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="relative px-10"
            >
              <ProcessStep step={step} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ProcessRail;