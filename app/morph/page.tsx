import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shapes, Wand2, Zap } from "lucide-react"
import { CodeBlock } from "@/components/code-block"

export default function MorphPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 dark:from-gray-900 dark:to-gray-800">
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
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Morph Transitions</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Smooth shape transformations that morph elements from one form to another, creating organic and fluid
            transitions perfect for modern design systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <Shapes className="h-8 w-8 text-pink-600 mb-2" />
              <CardTitle>Shape Transformation</CardTitle>
              <CardDescription>
                Morph transitions smoothly transform border-radius, scale, and other properties to create fluid shape
                changes that feel natural and organic.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Dynamic border-radius changes</li>
                <li>• Smooth scale transformations</li>
                <li>• Organic movement patterns</li>
                <li>• Fluid layout adaptations</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <Wand2 className="h-8 w-8 text-rose-600 mb-2" />
              <CardTitle>Advanced Morphing</CardTitle>
              <CardDescription>
                Combines multiple CSS properties to create complex morphing effects that transform elements in visually
                stunning ways.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="typescript"
                code={`const morphVariant = {
  initial: { 
    scale: 0.8, 
    borderRadius: "50%", 
    opacity: 0 
  },
  animate: { 
    scale: 1, 
    borderRadius: "0%", 
    opacity: 1 
  },
  exit: { 
    scale: 0.8, 
    borderRadius: "50%", 
    opacity: 0 
  }
}`}
              />
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20 rounded-xl p-8 mb-12">
          <div className="text-center mb-8">
            <Zap className="h-8 w-8 text-pink-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Morphing Demo</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Watch elements transform smoothly between different shapes
            </p>
          </div>

          <div className="flex justify-center space-x-8">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full animate-pulse transform hover:rounded-lg hover:scale-110 transition-all duration-500"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-lg animate-pulse transform hover:rounded-full hover:scale-110 transition-all duration-500"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl animate-pulse transform hover:rounded-none hover:scale-110 transition-all duration-500"></div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/parallax">
              <Button size="lg">Try Parallax Transition</Button>
            </Link>
            <Link href="/elastic">
              <Button size="lg" variant="outline" className="bg-white text-black">
                Try Elastic Transition
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
