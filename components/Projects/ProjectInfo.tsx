"use client";

import { FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface Social {
  instagram?: string;
  tiktok?: string;
}

interface Props {
  description: React.ReactNode;
  clientName: string;
  social?: Social;
  avatar?: string;
}

/* ✅ IMPORTANT: type Variants */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const, // 👈 FIX IMPORTANT
    },
  },
};

export const ProjectInfo = ({
  description,
  clientName,
  social,
  avatar,
}: Props) => {
  return (
    <motion.div
      className="w-full flex flex-col md:flex-row justify-between items-start gap-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* LEFT */}
      <motion.div className="flex flex-col gap-8 w-full" variants={container}>
        {/* PROFILE + SOCIAL */}
        <motion.div
          className="flex items-center justify-between w-full gap-6"
          variants={item}
        >
          {/* PROFILE */}
          <div className="flex items-center gap-4">
            <div className="size-11 rounded-full overflow-hidden ring-1 ring-white/20 shrink-0">
              {avatar && (
                <Image
                  src={avatar}
                  alt={clientName}
                  width={44}
                  height={44}
                  priority
                  sizes="44px"
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <span className="text-white/80 uppercase text-xs tracking-wider font-medium">
              {clientName}
            </span>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4">
            {social?.instagram && (
              <Link
                href={social.instagram}
                target="_blank"
                className="size-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white/90 hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <FaInstagram size={18} />
              </Link>
            )}

            {social?.tiktok && (
              <Link
                href={social.tiktok}
                target="_blank"
                className="size-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white/90 hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <FaTiktok size={18} />
              </Link>
            )}
          </div>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          className="w-full max-w-4xl text-white/60 text-sm font-extralight leading-relaxed"
          variants={item}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};