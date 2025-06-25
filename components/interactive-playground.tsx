"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

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
}

const easingFunctions = {
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  elastic: [0.175, 0.885, 0.32, 1.275],
}

export function InteractivePlayground() {
  const [currentTransition, setCurrentTransition] = useState<keyof typeof transitions>("slide")
  const [duration, setDuration] = useState(0.5)
  const [easing, setEasing] = useState<keyof typeof easingFunctions>("easeInOut")
  const [isVisible, setIsVisible] = useState(true)
  const [currentCard, setCurrentCard] = useState(0)

  const cards = [
    {
      title: "Card 1",
      content: "This is the first card with some sample content.",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Card 2",
      content: "This is the second card with different content.",
      color: "from-purple-400 to-purple-600",
    },
    { title: "Card 3", content: "This is the third card with more sample text.", color: "from-green-400 to-green-600" },
  ]

  // Ensure safe duration value
  const safeDuration = isNaN(duration) ? 0.5 : Math.max(0.1, Math.min(2, duration))

  const triggerTransition = () => {
    setIsVisible(false)
    setTimeout(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length)
      setIsVisible(true)
    }, safeDuration * 1000)
  }

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <Label className="text-sm font-medium">Transition Type</Label>
          <Select
            value={currentTransition}
            onValueChange={(value: keyof typeof transitions) => setCurrentTransition(value)}
          >
            <SelectTrigger className="mt-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="slide">Slide</SelectItem>
              <SelectItem value="fade">Fade</SelectItem>
              <SelectItem value="scale">Scale</SelectItem>
              <SelectItem value="rotate">Rotate</SelectItem>
              <SelectItem value="flip">Flip</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium">Duration: {safeDuration.toFixed(1)}s</Label>
          <Slider
            value={[safeDuration]}
            onValueChange={([value]) => setDuration(value)}
            max={2}
            min={0.1}
            step={0.1}
            className="mt-2"
          />
        </div>

        <div>
          <Label className="text-sm font-medium">Easing</Label>
          <Select value={easing} onValueChange={(value: keyof typeof easingFunctions) => setEasing(value)}>
            <SelectTrigger className="mt-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="easeInOut">Ease In Out</SelectItem>
              <SelectItem value="easeOut">Ease Out</SelectItem>
              <SelectItem value="easeIn">Ease In</SelectItem>
              <SelectItem value="bounce">Bounce</SelectItem>
              <SelectItem value="elastic">Elastic</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Preview Area */}
      <div className="h-96 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden relative">
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              key={currentCard}
              initial={transitions[currentTransition].initial}
              animate={transitions[currentTransition].animate}
              exit={transitions[currentTransition].exit}
              transition={{
                type: "tween",
                ease: easingFunctions[easing],
                duration: safeDuration,
              }}
              className="w-80"
              style={{ perspective: "1000px" }}
            >
              <Card className={`bg-gradient-to-br ${cards[currentCard].color} text-white`}>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">{cards[currentCard].title}</h3>
                  <p className="text-white/90">{cards[currentCard].content}</p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Action Button */}
      <div className="text-center">
        <Button size="lg" onClick={triggerTransition} className="px-8">
          Trigger Transition
        </Button>
      </div>

      {/* Code Preview */}
      <Card>
        <CardContent className="p-4">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`const ${currentTransition}Variant = ${JSON.stringify(transitions[currentTransition], null, 2)}

// Usage
<motion.div
  initial={${currentTransition}Variant.initial}
  animate={${currentTransition}Variant.animate}
  exit={${currentTransition}Variant.exit}
  transition={{
    type: "tween",
    ease: ${JSON.stringify(easingFunctions[easing])},
    duration: ${safeDuration.toFixed(1)}
  }}
>
  {children}
</motion.div>`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>
  )
}
