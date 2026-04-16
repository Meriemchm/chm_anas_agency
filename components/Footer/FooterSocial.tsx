"use client";

import { motion } from "framer-motion";

export const FooterSocial = ({ social }: any) => {
  return (
    <div className="flex gap-4">
      {social.map((item: any, i: number) => {
        const Icon = item.icon;

        return (
          <motion.a
            key={i}
            href={item.href}
            whileHover={{
              y: -3,
              backgroundColor: "white",
              color: "black",
            }}
            className="size-10 rounded-full border border-white/20 flex items-center justify-center text-lg transition-colors duration-300"
          >
            <Icon />
          </motion.a>
        );
      })}
    </div>
  );
};