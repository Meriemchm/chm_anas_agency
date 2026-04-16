"use client";

import React from "react";
import { motion } from "framer-motion";
import ProcessStep from "./ProcessStep";

interface Props {
  x: any;
  data: any[];
}

const ProcessRail = ({ x, data }: Props) => {
  return (
    <motion.div style={{ x }} className="flex h-full items-center">
      {data.map((step, index) => (
        <ProcessStep key={index} step={step} />
      ))}
    </motion.div>
  );
};

export default ProcessRail;