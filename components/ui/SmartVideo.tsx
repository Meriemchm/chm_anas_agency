"use client";

import React, { useRef, useEffect, useState } from "react";

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
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (e) {
        // ignore iOS block
      }
    };

    if (autoPlay || isHovered) {
      playVideo();
    } else {
      video.pause();
    }
  }, [autoPlay, isHovered]);

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      autoPlay
      preload="auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};