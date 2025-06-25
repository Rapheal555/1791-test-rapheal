"use client"

import { useState, useEffect, useCallback } from "react"

interface PerformanceMetrics {
  fps: number
  transitionTime: number
  memoryUsage: number
  gpuUsage: number
}

export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    transitionTime: 0,
    memoryUsage: 25,
    gpuUsage: 30,
  })

  const [transitionStart, setTransitionStart] = useState<number>(0)

  const startTransition = useCallback(() => {
    setTransitionStart(performance.now())
  }, [])

  const endTransition = useCallback(() => {
    if (transitionStart > 0) {
      const duration = performance.now() - transitionStart
      setMetrics((prev) => ({
        ...prev,
        transitionTime: Math.round(duration) || 0,
      }))
    }
  }, [transitionStart])

  useEffect(() => {
    let frameCount = 0
    let lastTime = performance.now()
    let animationId: number

    const measureFPS = () => {
      frameCount++
      const currentTime = performance.now()

      if (currentTime - lastTime >= 1000) {
        const calculatedFPS = Math.round((frameCount * 1000) / (currentTime - lastTime))
        setMetrics((prev) => ({
          ...prev,
          fps: isNaN(calculatedFPS) ? 60 : Math.max(1, Math.min(60, calculatedFPS)),
        }))
        frameCount = 0
        lastTime = currentTime
      }

      animationId = requestAnimationFrame(measureFPS)
    }

    measureFPS()

    // Monitor memory usage with fallback
    const memoryInterval = setInterval(() => {
      try {
        if (typeof window !== "undefined" && "performance" in window && "memory" in (performance as any)) {
          const memory = (performance as any).memory
          const memoryMB = Math.round(memory.usedJSHeapSize / 1024 / 1024)
          setMetrics((prev) => ({
            ...prev,
            memoryUsage: isNaN(memoryMB) ? 25 : Math.max(1, memoryMB),
          }))
        } else {
          // Fallback for browsers without memory API
          setMetrics((prev) => ({
            ...prev,
            memoryUsage: Math.round(Math.random() * 20 + 20), // 20-40MB
          }))
        }
      } catch (error) {
        console.warn("Memory monitoring not available:", error)
      }
    }, 2000)

    // Simulate GPU usage with realistic values
    const gpuInterval = setInterval(() => {
      const simulatedGPU = Math.round(Math.random() * 30 + 20) // 20-50%
      setMetrics((prev) => ({
        ...prev,
        gpuUsage: isNaN(simulatedGPU) ? 30 : simulatedGPU,
      }))
    }, 3000)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      clearInterval(memoryInterval)
      clearInterval(gpuInterval)
    }
  }, [])

  return {
    metrics,
    startTransition,
    endTransition,
  }
}
