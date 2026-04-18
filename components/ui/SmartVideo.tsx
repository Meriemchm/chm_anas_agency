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

  // 📱 detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ▶️ autoplay ONLY desktop
  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (e) {}
    };

    if (!isMobile && (autoPlay || isHovered)) {
      playVideo();
    } else {
      video.pause();
    }
  }, [autoPlay, isHovered, isMobile]);

  return (
    <video
      ref={ref}
      className={className}
      muted={!isMobile} // 📱 mobile = unmuted allowed controls
      loop
      playsInline
      autoPlay={!isMobile && autoPlay} // 💻 desktop only
      preload="auto"
      poster={poster}
      controls={isMobile} // 📱 show play button on mobile
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};