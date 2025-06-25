import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, RotateCw, Layers, Zap } from "lucide-react"
import { CodeBlock } from "@/components/code-block"

export default function RotatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
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
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">3D Rotate Transitions</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Immersive 3D rotation effects that create depth and spatial awareness, perfect for modern web applications
            that want to showcase dimensional navigation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <RotateCw className="h-8 w-8 text-cyan-600 mb-2" />
              <CardTitle>3D Perspective</CardTitle>
              <CardDescription>
                Rotate transitions utilize CSS 3D transforms and perspective to create realistic depth effects that
                enhance spatial navigation understanding.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Hardware-accelerated 3D transforms</li>
                <li>• Perspective-based depth perception</li>
                <li>• Smooth Y-axis rotation animations</li>
                <li>• Optimized for modern browsers</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <Layers className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Performance Optimized</CardTitle>
              <CardDescription>
                Built with GPU acceleration and transform3d properties to ensure smooth 60fps animations across all
                devices and screen sizes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="typescript"
                code={`const rotateVariant = {
  initial: { rotateY: 90, opacity: 0 },
  animate: { rotateY: 0, opacity: 1 },
  exit: { rotateY: -90, opacity: 0 }
}`}
              />
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20">
            <CardHeader>
              <Zap className="h-6 w-6 text-cyan-600" />
              <CardTitle className="text-lg">Use Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Portfolio showcases</li>
                <li>• Product galleries</li>
                <li>• Interactive presentations</li>
                <li>• Gaming interfaces</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
            <CardHeader>
              <CardTitle className="text-lg">Browser Support</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Chrome 36+</li>
                <li>• Firefox 16+</li>
                <li>• Safari 9+</li>
                <li>• Edge 12+</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20">
            <CardHeader>
              <CardTitle className="text-lg">Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• 60fps on modern devices</li>
                <li>• GPU acceleration</li>
                <li>• Low memory usage</li>
                <li>• Smooth on mobile</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/flip">
              <Button size="lg">Try Flip Transition</Button>
            </Link>
            <Link href="/morph">
              <Button size="lg" variant="outline" className="bg-white text-black">
                Try Morph Transition
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
