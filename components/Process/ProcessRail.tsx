"use client";

import React, { useEffect, useState } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import ProcessStep from "./ProcessStep";
import CurveBackground from "../ui/CurveBackground";

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
        <CurveBackground />
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