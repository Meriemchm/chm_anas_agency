"use client";

import React, { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface SmartVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
}

export const SmartVideo = ({
  src,
  className,
  autoPlay = false,
}: SmartVideoProps) => {
  const ref = useRef<HTMLVideoElement | null>(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if ((autoPlay && isInView) || isHovered) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView, isHovered, autoPlay]);

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      preload="metadata"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};