"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export type AnimationVariant =
  | "fade-up"
  | "fade-in"
  | "fade-left"
  | "fade-right"
  | "scale-in"
  | "stagger-container"
  | "stagger-item";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  variant?: AnimationVariant;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  id?: string;
  threshold?: number;
}

export default function AnimatedSection({
  children,
  delay = 0,
  duration,
  variant,
  direction,
  className = "",
  id,
  threshold = 0.2,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const shouldReduceMotion = useReducedMotion();

  // Map direction to variant for backward compatibility
  let resolvedVariant: AnimationVariant = variant || "fade-up";
  if (!variant && direction) {
    if (direction === "up") resolvedVariant = "fade-up";
    else if (direction === "left") resolvedVariant = "fade-left";
    else if (direction === "right") resolvedVariant = "fade-right";
    else if (direction === "none") resolvedVariant = "fade-in";
    else if (direction === "down") resolvedVariant = "fade-up"; // fallback
  }

  // Define transition presets
  const defaultDuration = duration ?? 0.6;

  // Stagger parameters for container
  const staggerChildren = 0.12;

  // Normal variants config
  const variantsConfig = {
    "fade-up": {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: defaultDuration,
          delay: delay,
          ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number], // easeOutCubic
        },
      },
    },
    "fade-in": {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: defaultDuration,
          delay: delay,
          ease: "easeOut" as const,
        },
      },
    },
    "fade-left": {
      hidden: { opacity: 0, x: 60 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: defaultDuration,
          delay: delay,
          ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
        },
      },
    },
    "fade-right": {
      hidden: { opacity: 0, x: -60 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: defaultDuration,
          delay: delay,
          ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
        },
      },
    },
    "scale-in": {
      hidden: { opacity: 0, scale: 0.92 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring" as const,
          stiffness: 100,
          damping: 15,
          delay: delay,
        },
      },
    },
    "stagger-container": {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delay,
        },
      },
    },
    "stagger-item": {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: defaultDuration,
          ease: "easeOut" as const,
        },
      },
    },
  };

  // Gracefully degrade variants for prefers-reduced-motion
  const reducedMotionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.15,
        delay: delay,
      },
    },
  };

  const activeVariants = shouldReduceMotion ? reducedMotionVariants : variantsConfig[resolvedVariant];

  // A stagger-item must not declare its own viewport trigger or initial/animate states
  // to let its parent stagger-container propagate variants down.
  const isStaggerItem = resolvedVariant === "stagger-item";

  if (isStaggerItem) {
    return (
      <motion.div
        ref={ref}
        id={id}
        className={className}
        variants={activeVariants}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={activeVariants}
    >
      {children}
    </motion.div>
  );
}
