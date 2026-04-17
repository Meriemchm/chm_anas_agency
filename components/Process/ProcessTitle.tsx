"use client";

import { motion, cubicBezier } from "framer-motion";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
    },
  },
};

const ProcessTitle = () => {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="absolute top-12 left-6 md:left-20 z-30 w-full"
    >
      <h2 className="text-5xl  font-extralight pb-4 w-[80%] md:w-[40%]">
        Notre
        <br />
        <span className="font-serif">Processus</span>
      </h2>
    </motion.div>
  );
};

export default ProcessTitle;
