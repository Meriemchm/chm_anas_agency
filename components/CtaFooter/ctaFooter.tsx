"use client";

import Image from "next/image";
import { motion, cubicBezier } from "framer-motion";
import Link from "next/link";

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
    <section className="bg-white md:py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-center h-auto md:h-[450px]">
        {/* CARD */}
        <motion.div
          className="bg-[#FFF083] w-full h-full rounded-2xl px-8 py-16 md:px-20 flex flex-col items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -5 }} // 👈 HOVER LIFT GLOBAL
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
        >
          {/* TEXTE */}
          <motion.div variants={itemVariants} className="text-center max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-['Abel',sans-serif] text-black leading-tight mb-4">
              Travaillons <br />
              <span className="font-['Instrument_Serif',serif] italic block md:inline">
                ensemble
              </span>
            </h2>

            <p className="text-xs md:text-sm text-black/60 leading-relaxed font-light max-w-xl mx-auto">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </motion.div>

          {/* BUTTON */}
          <motion.div variants={itemVariants} className="mt-8">
            <Link href="/contact">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2, // 👈 petit lift bouton aussi
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="bg-[#1b1d1e] text-white flex items-center justify-between gap-5 p-2 rounded-full min-w-[200px] md:min-w-[220px] shadow-sm cursor-pointer"
              >
                <span className="font-['Inter',sans-serif] font-medium text-xs md:text-sm tracking-wide pl-6 whitespace-nowrap">
                  Contactez nous
                </span>

                <Image
                  src="/Vector/up-3.svg"
                  alt="Flèche droite"
                  width={35}
                  height={35}
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
