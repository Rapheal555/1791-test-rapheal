import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Layers, Mountain, Waves } from "lucide-react"
import { CodeBlock } from "@/components/code-block"

export default function ParallaxPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800">
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
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Parallax Transitions</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Multi-layer depth effects that create immersive scrolling experiences with different elements moving at
            varying speeds to simulate depth and dimension.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <Mountain className="h-8 w-8 text-teal-600 mb-2" />
              <CardTitle>Depth Perception</CardTitle>
              <CardDescription>
                Parallax transitions create the illusion of depth by moving background and foreground elements at
                different speeds, mimicking real-world depth perception.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Multi-layer movement</li>
                <li>• Variable speed animations</li>
                <li>• Depth simulation</li>
                <li>• Immersive experiences</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <Layers className="h-8 w-8 text-cyan-600 mb-2" />
              <CardTitle>Layer Management</CardTitle>
              <CardDescription>
                Sophisticated layer management system that coordinates multiple elements moving at different speeds to
                create cohesive parallax effects.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="typescript"
                code={`const parallaxVariant = {
  initial: { 
    y: 100, 
    scale: 0.9, 
    opacity: 0 
  },
  animate: { 
    y: 0, 
    scale: 1, 
    opacity: 1 
  },
  exit: { 
    y: -100, 
    scale: 1.1, 
    opacity: 0 
  }
}`}
              />
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl p-8 mb-12 overflow-hidden relative">
          <div className="text-center mb-8 relative z-10">
            <Waves className="h-8 w-8 text-teal-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Parallax Demo</h3>
            <p className="text-gray-600 dark:text-gray-300">Scroll to see layers moving at different speeds</p>
          </div>

          {/* Background layers */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-200 to-cyan-200 transform translate-y-2"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-200 to-blue-200 transform translate-y-4"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-200 to-indigo-200 transform translate-y-6"></div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/elastic">
              <Button size="lg">Try Elastic Transition</Button>
            </Link>
            <Link href="/liquid">
              <Button size="lg" variant="outline" className="bg-white text-black">
                Try Liquid Transition
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
