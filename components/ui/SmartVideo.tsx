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

    const tryPlay = async () => {
      try {
        await video.play();
      } catch (e) {
        // iOS bloque parfois → on ignore
      }
    };

    if ((autoPlay && isInView) || isHovered) {
      if (video.readyState >= 2) {
        tryPlay();
      } else {
        video.onloadeddata = () => {
          tryPlay();
        };
      }
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
      autoPlay={autoPlay} // ✅ CRUCIAL pour iOS
      preload="auto" // ✅ CRUCIAL
      webkit-playsinline="true" // ✅ pour Safari iOS
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};