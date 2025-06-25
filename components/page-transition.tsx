"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useTransitionSettings } from "@/hooks/use-transition-settings"
import { usePerformanceMonitor } from "@/hooks/use-performance-monitor"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

// Advanced transition variants with customizable parameters
const transitions = {
  slide: {
    initial: { x: 300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  scale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1.1, opacity: 0 },
  },
  rotate: {
    initial: { rotateY: 90, opacity: 0 },
    animate: { rotateY: 0, opacity: 1 },
    exit: { rotateY: -90, opacity: 0 },
  },
  flip: {
    initial: { rotateX: -90, opacity: 0 },
    animate: { rotateX: 0, opacity: 1 },
    exit: { rotateX: 90, opacity: 0 },
  },
  morph: {
    initial: { scale: 0.8, borderRadius: "50%", opacity: 0 },
    animate: { scale: 1, borderRadius: "0%", opacity: 1 },
    exit: { scale: 0.8, borderRadius: "50%", opacity: 0 },
  },
  parallax: {
    initial: { y: 100, scale: 0.9, opacity: 0 },
    animate: { y: 0, scale: 1, opacity: 1 },
    exit: { y: -100, scale: 1.1, opacity: 0 },
  },
  elastic: {
    initial: { scale: 0.3, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.3, opacity: 0 },
  },
  liquid: {
    initial: {
      clipPath: "circle(0% at 50% 50%)",
      opacity: 0,
    },
    animate: {
      clipPath: "circle(150% at 50% 50%)",
      opacity: 1,
    },
    exit: {
      clipPath: "circle(0% at 50% 50%)",
      opacity: 0,
    },
  },
}

// Easing functions
const easingFunctions = {
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  elastic: [0.175, 0.885, 0.32, 1.275],
  back: [0.68, -0.55, 0.265, 1.55],
}

function getTransitionType(pathname: string) {
  if (pathname.includes("/slide")) return "slide"
  if (pathname.includes("/fade")) return "fade"
  if (pathname.includes("/scale")) return "scale"
  if (pathname.includes("/rotate")) return "rotate"
  if (pathname.includes("/flip")) return "flip"
  if (pathname.includes("/morph")) return "morph"
  if (pathname.includes("/parallax")) return "parallax"
  if (pathname.includes("/elastic")) return "elastic"
  if (pathname.includes("/liquid")) return "liquid"
  return "fade" // default
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const { settings } = useTransitionSettings()
  const { startTransition, endTransition } = usePerformanceMonitor()
  const prefersReducedMotion = useReducedMotion()

  const transitionType = getTransitionType(pathname)
  const variant = transitions[transitionType]

  // Use reduced motion variant if user prefers it
  const reducedMotionVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const finalVariant = prefersReducedMotion ? reducedMotionVariant : variant
  const duration = prefersReducedMotion ? 0.2 : settings.duration
  const easing = easingFunctions[settings.easing] || easingFunctions.easeInOut

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => {
        window.scrollTo(0, 0)
        endTransition()
      }}
    >
      <motion.div
        key={pathname}
        initial={finalVariant.initial}
        animate={finalVariant.animate}
        exit={finalVariant.exit}
        transition={{
          type: "tween",
          ease: easing,
          duration: duration,
        }}
        className="w-full"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
        onAnimationStart={startTransition}
        onAnimationComplete={endTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
