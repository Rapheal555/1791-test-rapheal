"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { usePerformanceMonitor } from "@/hooks/use-performance-monitor"
import { Activity, Clock, Cpu, Zap } from "lucide-react"

export function PerformanceMetrics() {
  const { metrics } = usePerformanceMonitor()

  // Ensure all values are valid numbers
  const safeFPS = isNaN(metrics.fps) ? 60 : Math.max(1, Math.min(60, metrics.fps))
  const safeTransitionTime = isNaN(metrics.transitionTime) ? 0 : Math.max(0, metrics.transitionTime)
  const safeMemoryUsage = isNaN(metrics.memoryUsage) ? 25 : Math.max(1, metrics.memoryUsage)
  const safeGPUUsage = isNaN(metrics.gpuUsage) ? 30 : Math.max(0, Math.min(100, metrics.gpuUsage))

  return (
    <div className="grid md:grid-cols-4 gap-4 mb-16">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center">
            <Zap className="h-4 w-4 mr-2 text-green-600" />
            FPS
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{safeFPS}</div>
          <Badge variant={safeFPS >= 55 ? "default" : "destructive"} className="mt-1">
            {safeFPS >= 55 ? "Excellent" : "Needs Optimization"}
          </Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center">
            <Clock className="h-4 w-4 mr-2 text-blue-600" />
            Transition Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{safeTransitionTime}ms</div>
          <Badge variant={safeTransitionTime <= 300 ? "default" : "secondary"} className="mt-1">
            {safeTransitionTime <= 300 ? "Fast" : "Moderate"}
          </Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center">
            <Cpu className="h-4 w-4 mr-2 text-purple-600" />
            Memory Usage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{safeMemoryUsage}MB</div>
          <Badge variant={safeMemoryUsage <= 50 ? "default" : "secondary"} className="mt-1">
            {safeMemoryUsage <= 50 ? "Efficient" : "High"}
          </Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center">
            <Activity className="h-4 w-4 mr-2 text-orange-600" />
            GPU Usage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{safeGPUUsage}%</div>
          <Badge variant={safeGPUUsage <= 70 ? "default" : "secondary"} className="mt-1">
            {safeGPUUsage <= 70 ? "Optimal" : "High"}
          </Badge>
        </CardContent>
      </Card>
    </div>
  )
}
