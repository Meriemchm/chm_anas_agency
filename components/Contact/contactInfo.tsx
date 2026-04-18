"use client";

import Link from "next/link";
import React from "react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1], // ✅ FIX TS
    },
  },
};

export const ContactInfo = () => {
  return (
    <motion.div
      className="w-full space-y-12 md:pl-12"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* TITLE */}
      <motion.div className="space-y-4" variants={item}>
        <h2 className="text-4xl md:text-5xl font-['Abel',sans-serif] text-black">
          Information de Contact
        </h2>

        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
          Partagez vos idées, vos objectifs ou vos besoins, et construisons
          ensemble une solution adaptée à votre vision.
        </p>
      </motion.div>

      {/* EMAIL */}
      <motion.div className="flex items-start gap-6" variants={item}>
        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
          <HiOutlineMail className="text-2xl text-gray-400" />
        </div>

        <div>
          <span className="text-xs text-gray-400 block uppercase tracking-wider mb-1">
            Email
          </span>
          <Link
            href="mailto:pygmalionagency@gmail.com"
            className="text-black font-medium hover:underline"
            aria-label="Email"
          >
            pygmalionagency@gmail.com
          </Link>
        </div>
      </motion.div>

      {/* PHONE */}
      <motion.div className="flex items-start gap-6" variants={item}>
        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
          <HiOutlinePhone className="text-2xl text-gray-400" />
        </div>

        <div>
          <span className="text-xs text-gray-400 block uppercase tracking-wider mb-1">
            Numéro
          </span>
          <p className="text-black font-medium">0483563639</p>
        </div>
      </motion.div>
    </motion.div>
  );
};