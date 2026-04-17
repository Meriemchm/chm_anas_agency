"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import clsx from "clsx";

type Variant = "primary" | "dark" | "white";

interface UIButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  isLoading?: boolean;
  disabled?: boolean;

  variant?: Variant;

  icon?: string; // path image
  iconSize?: number;

  withIconBg?: boolean; // cercle noir autour (dernier bouton)
  fullRounded?: boolean;

  animate?: boolean;

  className?: string;
}

export default function UIButton({
  children,
  onClick,
  type = "button",
  isLoading = false,
  disabled = false,
  variant = "primary",
  icon,
  iconSize = 24,
  withIconBg = false,
  fullRounded = true,
  animate = false,
  className,
}: UIButtonProps) {
  // 🎨 Variantes
  const variants = {
    primary: "bg-primary text-black",
    dark: "bg-[#1b1d1e] text-white",
    white: "bg-white text-black shadow-sm",
  };

  const baseStyles = clsx(
    "flex items-center",
    icon
      ? "justify-between gap-5 p-2 min-w-[200px] md:min-w-[220px]"
      : "justify-center px-6 py-3",
    "text-sm font-medium tracking-wide",
    "hover:scale-105 transition duration-200",
    "cursor-pointer",
    fullRounded && "rounded-full",
    "disabled:opacity-50",
    variants[variant],
    className,
  );

  const content = icon ? (
    <>
      <span className="text-xs md:text-sm tracking-wide pl-6 whitespace-nowrap">
        {isLoading ? "Envoi..." : children}
      </span>

      <Image src={icon} alt="icon" width={iconSize} height={iconSize} />
    </>
  ) : (
    <span className="whitespace-nowrap">
      {isLoading ? "Envoi..." : children}
    </span>
  );

  if (animate) {
    return (
      <motion.button
        type={type}
        onClick={onClick}
        disabled={disabled || isLoading}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className={baseStyles}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={baseStyles}
    >
      {content}
    </button>
  );
}
