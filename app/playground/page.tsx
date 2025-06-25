"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Play, Settings, Code } from "lucide-react"
import { InteractivePlayground } from "@/components/interactive-playground"

export default function PlaygroundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
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
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Interactive Playground</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experiment with different transition types, customize parameters in real-time, and see the effects
            instantly. Perfect for learning and prototyping.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <Play className="h-8 w-8 text-violet-600 mb-2" />
                <CardTitle>Live Preview</CardTitle>
                <CardDescription>Interact with transitions and see changes in real-time</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractivePlayground />
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <Settings className="h-6 w-6 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Quick Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" variant="outline">
                  Reset to Default
                </Button>
                <Button className="w-full" variant="outline">
                  Random Settings
                </Button>
                <Button className="w-full" variant="outline">
                  Save Preset
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Code className="h-6 w-6 text-green-600 mb-2" />
                <CardTitle className="text-lg">Export Code</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Copy Configuration</Button>
                <p className="text-xs text-gray-500 mt-2">Export your settings as code to use in your projects</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
