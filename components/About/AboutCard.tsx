"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Variantes d'animation pour l'apparition
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
} as const;

interface CardProps {
  type: "bio" | "vision" | "philosophy" | "quote";
  tag: string;
  content?: any;
  title?: string;
  description?: string;
  imageUrl?: string;
  quote?: string;
  theme: "dark" | "yellow" | "dark_philosophy" | "light";
  gridSpan?: string;
}

export const AboutCard = ({ card }: { card: CardProps }) => {
  const {
    type,
    tag,
    content,
    title,
    description,
    imageUrl,
    quote,
    theme,
    gridSpan = "",
  } = card;

  const [isOpen, setIsOpen] = useState(false);

  const baseClasses = `rounded-[24px] p-8 md:p-10 ${gridSpan} flex flex-col justify-between h-full border transition-colors duration-300`;

  const themes = {
    dark: "bg-[#0A0A0A] text-white border-transparent",
    yellow: "bg-[#F7E682] text-black border-transparent",
    dark_philosophy: "bg-[#1A1A1A] text-white border-transparent space-y-8",
    light: "bg-[#F5F5F5] text-black border-gray-100",
  };

  const currentTheme = themes[theme] || themes.light;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`relative ${baseClasses} ${currentTheme}`}
    >
      {type === "bio" && (
        <>
          <div className="absolute top-0 right-0 pointer-events-none">
            <Image
              src="/Vector/ellipse-3.svg"
              alt="decor"
              width={250}
              height={250}
              className="w-24 h-24 md:w-full md:h-full"
            />
          </div>

          <span className="text-gray-500 text-xs tracking-widest mb-10 block">
            {tag}
          </span>

          {/* DESKTOP (inchangé) + MOBILE TOGGLE */}
          <div className="group relative">
            {/* COLLAPSED VIEW (mobile + default) md:group-hover:hidden */}
            <div className="text-sm font-extralight leading-relaxed ">
              <div className={`${isOpen ? "" : "line-clamp-4"}`}>
                {content}
              </div>
            </div>

            {/* EXPANDED VIEW (desktop hover only) */}
            {/* <div className="hidden md:group-hover:block text-sm font-extralight leading-relaxed">
              {content}
            </div> */}

            {/* MOBILE BUTTON */}
            <button
              className=" mt-4 text-xs tracking-widest uppercase text-white underline underline-offset-4"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "Voir moins" : "Voir plus"}
            </button>
          </div>
        </>
      )}

      {type === "vision" && (
        <div className="space-y-6">
          <span className="text-black/50 text-xs tracking-widest block">
            {tag}
          </span>
          <h3 className="text-4xl md:text-5xl font-['Abel',sans-serif] leading-tight font-light">
            {title}
          </h3>
          <p className="text-base leading-relaxed text-black/80 pt-4">
            {description}
          </p>
        </div>
      )}

      {type === "philosophy" && (
        <>
          <div className="space-y-6">
            <span className="text-gray-500 text-xs tracking-widest block">
              {tag}
            </span>
            <p className="text-lg leading-relaxed font-light text-white/90">
              {content}
            </p>
          </div>

          {imageUrl && (
            <div className="rounded-2xl overflow-hidden mt-auto aspect-4/3">
              <Image
                src={imageUrl}
                height={500}
                width={500}
                alt="Slogan illustration"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </>
      )}

      {type === "quote" && (
        <>
          <div className="space-y-4">
            <span className="text-gray-400 text-xs tracking-widest block">
              {tag}
            </span>
            <blockquote className="text-4xl md:text-5xl font-['Abel',sans-serif] leading-tight font-light text-black pt-4">
              {quote}
            </blockquote>
          </div>

          <p className="text-sm md:text-base leading-relaxed text-gray-700 mt-12 font-light max-w-4xl">
            {description}
          </p>
        </>
      )}
    </motion.div>
  );
};