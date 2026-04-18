"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isHighlighted?: boolean;
  isPrimary?: boolean;
  onHover?: () => void;
}

export const ServiceCard = ({
  icon,
  title,
  description,
  isHighlighted,
  isPrimary,
  onHover,
}: ServiceCardProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <motion.div
      onMouseEnter={!isMobile ? onHover : undefined}
      whileHover={!isMobile ? { y: -8, scale: 1.02 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`
        rounded-2xl md:border p-6 md:p-8
        h-full min-h-[320px] flex flex-col
        transition-colors duration-300
        select-none

        ${isPrimary ? "bg-primary border-transparent text-black" : ""}
        ${!isPrimary && !isHighlighted ? "bg-white border border-gray-200" : ""}
      `}
    >
      {/* ICON */}
      <div className="text-3xl mb-6">{icon}</div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-medium mb-3">{title}</h3>

        <p className="mt-auto text-sm text-black/70 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};