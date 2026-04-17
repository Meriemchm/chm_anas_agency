"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SocialProofData } from "@/data/SocialProofData";
import { SocialProofCard } from "./socialProofCard";

export const SocialProof = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const [isHovered, setIsHovered] = useState(false);

  const duplicatedData = [...SocialProofData, ...SocialProofData];

  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;

    const distance = el.scrollWidth / 2;

    // 🔥 animation infinite GSAP
    tweenRef.current = gsap.to(el, {
      x: `-=${distance}`,
      duration: 20, // vitesse (plus petit = plus rapide)
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          return parseFloat(x) % distance;
        }),
      },
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  // pause / slow hover
  useEffect(() => {
    if (!tweenRef.current) return;

    if (isHovered) {
      gsap.to(tweenRef.current, {
        timeScale: 0.3,
        duration: 0.5,
      });
    } else {
      gsap.to(tweenRef.current, {
        timeScale: 1,
        duration: 0.5,
      });
    }
  }, [isHovered]);

  return (
    <section className="py-12 w-full overflow-hidden bg-white">

      {/* TITLE */}
      <div className="flex items-center justify-center mb-10 px-4">
        <div className="h-[1px] bg-gray-200 w-full max-w-[100px] md:max-w-[200px]" />
        <span className="mx-4 text-gray-400 text-sm md:text-base whitespace-nowrap">
          Ils m'ont fait confiance
        </span>
        <div className="h-[1px] bg-gray-200 w-full max-w-[100px] md:max-w-[200px]" />
      </div>

      {/* MARQUEE */}
      <div
        className="relative overflow-hidden flex"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={containerRef}
          className="flex will-change-transform"
        >
          {duplicatedData.map((item, index) => (
            <SocialProofCard
              key={`${item.id}-${index}`}
              logoUrl={item.logoUrl}
              name={item.name}
            />
          ))}
        </div>

        {/* fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
};