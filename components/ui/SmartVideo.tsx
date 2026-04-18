"use client";

import React, { useRef, useEffect, useState } from "react";

interface SmartVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
}

export const SmartVideo = ({
  src,
  className,
  poster,
  autoPlay = false,
}: SmartVideoProps) => {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const shouldPlay = !isMobile && (autoPlay || isHovered);

    if (shouldPlay) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [autoPlay, isHovered, isMobile]);

  if (!src) return null;

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      autoPlay={!isMobile && autoPlay}
      preload="metadata"
      poster={poster}
      controls={isMobile}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};