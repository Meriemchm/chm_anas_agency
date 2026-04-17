"use client";

import React from "react";
import Image from "next/image";
import { motion, cubicBezier } from "framer-motion";
import Link from "next/link";
import UIButton from "../ui/UIButton";

const containerVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.12,
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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

const CtaSection: React.FC = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-6">
      <div className="max-w-8xl mx-auto flex items-center justify-center">
        <motion.div
          className="bg-black text-white rounded-2xl px-6 md:px-10 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          whileHover={{ y: -4 }}
        >
          {/* TEXT */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left space-y-1"
          >
            <p className="text-sm text-white/80">
              Vous avez un projet en tête, <strong>parlons-en ensemble</strong>.
            </p>
            <p className="text-sm text-white/80">
              Notre équipe vous accompagne du concept à la réalisation.
            </p>
          </motion.div>

          {/* BUTTON */}
          <motion.div variants={itemVariants}>
            <Link href="/contact">
              <UIButton variant="white" icon="/Vector/up-2.svg" iconSize={35}>
                Contactez nous
              </UIButton>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
