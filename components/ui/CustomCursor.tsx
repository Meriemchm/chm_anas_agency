"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Props {
  enabled: boolean;
  isInside: boolean;
  isHovering: boolean;
  setIsInside: (v: boolean) => void;
}

export const CursorEffect = ({
  enabled,
  isInside,
  isHovering,
  setIsInside,
}: Props) => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 350 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const positions = useRef<{ x: number; y: number; age: number }[]>([]);
  const animationRef = useRef<number>();

  const TRAIL_LENGTH = 25;
  const FADE_SPEED = 0.05;

  // HERO ENTER / LEAVE
  useEffect(() => {
    if (!enabled) return;

    const onEnter = () => {
      document.body.style.cursor = "none";
      setIsInside(true);
    };

    const onLeave = () => {
      document.body.style.cursor = "auto";
      setIsInside(false);
      positions.current = [];
    };

    const hero = document.getElementById("hero-root");
    if (!hero) return;

    hero.addEventListener("mouseenter", onEnter);
    hero.addEventListener("mouseleave", onLeave);

    return () => {
      hero.removeEventListener("mouseenter", onEnter);
      hero.removeEventListener("mouseleave", onLeave);
      document.body.style.cursor = "auto";
    };
  }, [enabled, setIsInside]);

  // CURSOR + TRAIL
  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!isInside) return;

      positions.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 1,
      });

      if (positions.current.length > TRAIL_LENGTH) {
        positions.current.shift();
      }
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      for (let i = 0; i < positions.current.length; i++) {
        positions.current[i].age -= FADE_SPEED;
      }

      positions.current = positions.current.filter((p) => p.age > 0);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 1; i < positions.current.length; i++) {
        const p1 = positions.current[i - 1];
        const p2 = positions.current[i];

        const opacity = (p1.age + p2.age) / 2;
        if (opacity <= 0) continue;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);

        ctx.strokeStyle = `rgba(255, 240, 131, ${opacity * 0.8})`;
        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [enabled, isInside]);

  if (!enabled) return null;

  const cursorScale = isHovering ? 1.8 : 1;
  const cursorBg = isHovering ? "#FFF083" : "#1b1d1e";

  return (
    <>
      {/* CANVAS */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9997]"
      />

      {/* CURSOR */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          width: 32,
          height: 32,
          borderRadius: "50%",
          backgroundColor: cursorBg,
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
          scale: cursorScale,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
};