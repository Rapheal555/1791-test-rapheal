"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

// Define different transition variants
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
}

// Determine transition type based on pathname
function getTransitionType(pathname: string) {
  if (pathname.includes("/slide")) return "slide"
  if (pathname.includes("/fade")) return "fade"
  if (pathname.includes("/scale")) return "scale"
  return "fade" // default
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const transitionType = getTransitionType(pathname)
  const variant = transitions[transitionType]

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={variant.initial}
        animate={variant.animate}
        exit={variant.exit}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.3,
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
