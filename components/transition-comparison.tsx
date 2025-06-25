"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Pause } from "lucide-react"

const transitionData = [
  {
    name: "Slide",
    description: "Horizontal movement with directional feedback",
    performance: "Excellent",
    useCases: ["Navigation", "Carousels", "Multi-step forms"],
    complexity: "Low",
    browserSupport: "Universal",
    variant: {
      initial: { x: 300, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: -300, opacity: 0 },
    },
  },
  {
    name: "Fade",
    description: "Elegant opacity transitions for content focus",
    performance: "Excellent",
    useCases: ["Content switching", "Modals", "Image galleries"],
    complexity: "Very Low",
    browserSupport: "Universal",
    variant: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
  },
  {
    name: "Scale",
    description: "Dynamic zoom effects with depth perception",
    performance: "Good",
    useCases: ["Buttons", "Cards", "Interactive elements"],
    complexity: "Low",
    browserSupport: "Universal",
    variant: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 1.1, opacity: 0 },
    },
  },
  {
    name: "Rotate",
    description: "3D rotation effects for immersive experiences",
    performance: "Good",
    useCases: ["Portfolios", "Product showcases", "Gaming"],
    complexity: "Medium",
    browserSupport: "Modern",
    variant: {
      initial: { rotateY: 90, opacity: 0 },
      animate: { rotateY: 0, opacity: 1 },
      exit: { rotateY: -90, opacity: 0 },
    },
  },
  {
    name: "Flip",
    description: "Card-flip animations for revealing content",
    performance: "Good",
    useCases: ["Cards", "Reveals", "Interactive content"],
    complexity: "Medium",
    browserSupport: "Modern",
    variant: {
      initial: { rotateX: -90, opacity: 0 },
      animate: { rotateX: 0, opacity: 1 },
      exit: { rotateX: 90, opacity: 0 },
    },
  },
  {
    name: "Liquid",
    description: "Fluid, organic movement patterns",
    performance: "Fair",
    useCases: ["Creative sites", "Artistic interfaces", "Brands"],
    complexity: "High",
    browserSupport: "Modern",
    variant: {
      initial: { clipPath: "circle(0% at 50% 50%)", opacity: 0 },
      animate: { clipPath: "circle(150% at 50% 50%)", opacity: 1 },
      exit: { clipPath: "circle(0% at 50% 50%)", opacity: 0 },
    },
  },
]

export function TransitionComparison() {
  const [activeTransitions, setActiveTransitions] = useState<Set<string>>(new Set())

  const toggleTransition = (name: string) => {
    setActiveTransitions((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(name)) {
        newSet.delete(name)
      } else {
        newSet.add(name)
      }
      return newSet
    })
  }

  const getPerformanceBadge = (performance: string) => {
    const variants = {
      Excellent: "default",
      Good: "secondary",
      Fair: "outline",
    }
    return variants[performance as keyof typeof variants] || "outline"
  }

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {transitionData.map((transition) => (
          <Card key={transition.name} className="relative overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{transition.name}</CardTitle>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => toggleTransition(transition.name)}
                  className="h-8 w-8 p-0"
                >
                  {activeTransitions.has(transition.name) ? (
                    <Pause className="h-3 w-3" />
                  ) : (
                    <Play className="h-3 w-3" />
                  )}
                </Button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{transition.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant={getPerformanceBadge(transition.performance)}>{transition.performance}</Badge>
                <Badge variant="outline">{transition.complexity}</Badge>
                <Badge variant="outline">{transition.browserSupport}</Badge>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Use Cases:</h4>
                <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                  {transition.useCases.map((useCase, index) => (
                    <li key={index}>• {useCase}</li>
                  ))}
                </ul>
              </div>

              {/* Preview Area */}
              <div className="h-24 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center overflow-hidden">
                {activeTransitions.has(transition.name) && (
                  <motion.div
                    key={`${transition.name}-${Date.now()}`}
                    initial={transition.variant.initial}
                    animate={transition.variant.animate}
                    transition={{
                      type: "tween",
                      ease: [0.4, 0, 0.2, 1],
                      duration: 0.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      repeatDelay: 1,
                    }}
                    className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded"
                    style={{ perspective: "1000px" }}
                  />
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance Comparison Table</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Transition</th>
                  <th className="text-left p-2">Performance</th>
                  <th className="text-left p-2">GPU Usage</th>
                  <th className="text-left p-2">Memory Impact</th>
                  <th className="text-left p-2">Mobile Friendly</th>
                </tr>
              </thead>
              <tbody>
                {transitionData.map((transition) => (
                  <tr key={transition.name} className="border-b">
                    <td className="p-2 font-medium">{transition.name}</td>
                    <td className="p-2">
                      <Badge variant={getPerformanceBadge(transition.performance)} className="text-xs">
                        {transition.performance}
                      </Badge>
                    </td>
                    <td className="p-2">
                      {transition.name === "Liquid" ? "High" : transition.name === "Fade" ? "Low" : "Medium"}
                    </td>
                    <td className="p-2">
                      {transition.complexity === "High"
                        ? "High"
                        : transition.complexity === "Very Low"
                          ? "Very Low"
                          : "Low"}
                    </td>
                    <td className="p-2">{transition.browserSupport === "Universal" ? "✅" : "⚠️"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
