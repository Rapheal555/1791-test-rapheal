"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Settings, Sliders, Zap } from "lucide-react"
import { TransitionSettings } from "@/components/transition-settings"
import { PerformanceSettings } from "@/components/performance-settings"
import { AccessibilitySettings } from "@/components/accessibility-settings"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="group bg-white text-black">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Transition Settings</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Customize every aspect of your page transitions with advanced controls for timing, easing, performance, and
            accessibility preferences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-1">
            <CardHeader>
              <Settings className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Transition Controls</CardTitle>
              <CardDescription>Fine-tune timing, easing, and animation properties</CardDescription>
            </CardHeader>
            <CardContent>
              <TransitionSettings />
            </CardContent>
          </Card>

          <Card className="lg:col-span-1">
            <CardHeader>
              <Zap className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>Performance</CardTitle>
              <CardDescription>Optimize animations for your device and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <PerformanceSettings />
            </CardContent>
          </Card>

          <Card className="lg:col-span-1">
            <CardHeader>
              <Sliders className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Accessibility</CardTitle>
              <CardDescription>Ensure transitions work for all users</CardDescription>
            </CardHeader>
            <CardContent>
              <AccessibilitySettings />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
