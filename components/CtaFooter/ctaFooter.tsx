"use client";

import Image from "next/image";
import { motion, cubicBezier } from "framer-motion";
import Link from "next/link";
import UIButton from "../ui/UIButton";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
    },
  },
};

export const CtaFooter = () => {
  return (
    <section className="bg-white md:py-24 py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-center h-auto md:h-[450px]">
        {/* CARD */}
        <motion.div
          className="bg-[#FFF083] w-full h-full rounded-2xl px-8 py-16 md:px-20 flex flex-col items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
        >
          {/* TEXTE */}
          <motion.div variants={itemVariants} className="text-center max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extralight text-black leading-tight mb-4">
              Travaillons <br />
              <span className="font-serif block md:inline">
                ensemble
              </span>
            </h2>

            <p className="text-xs md:text-sm text-black/60 leading-relaxed font-light max-w-xl mx-auto">
              Une idée, un projet ? Échangeons ensemble pour le concrétiser.
            </p>
          </motion.div>

          {/* BUTTON */}
          <motion.div variants={itemVariants} className="mt-8">
            <Link href="/contact">
              <UIButton variant="dark" icon="/Vector/up-3.svg" iconSize={35}>
                Contactez nous
              </UIButton>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
