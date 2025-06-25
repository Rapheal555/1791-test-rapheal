import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FlipHorizontal, Layers3, Sparkles } from "lucide-react"
import { CodeBlock } from "@/components/code-block"

export default function FlipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
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
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Flip Transitions</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Card-flip style animations that reveal content with dramatic X-axis rotations, perfect for interactive
            cards, reveals, and content switching interfaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <FlipHorizontal className="h-8 w-8 text-indigo-600 mb-2" />
              <CardTitle>Card Flip Animation</CardTitle>
              <CardDescription>
                Flip transitions use X-axis rotation to create the illusion of flipping a card or page, providing
                intuitive visual feedback for content changes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• X-axis rotation animations</li>
                <li>• Perspective-based depth</li>
                <li>• Smooth content reveals</li>
                <li>• Interactive card interfaces</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <Layers3 className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Implementation</CardTitle>
              <CardDescription>
                Built with CSS 3D transforms and optimized timing functions to create smooth, realistic flip animations
                that work across all modern browsers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="typescript"
                code={`const flipVariant = {
  initial: { rotateX: -90, opacity: 0 },
  animate: { rotateX: 0, opacity: 1 },
  exit: { rotateX: 90, opacity: 0 }
}`}
              />
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8 mb-12">
          <div className="text-center mb-8">
            <Sparkles className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Interactive Demo</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Experience the flip transition in action with this interactive card
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="relative h-64 perspective-1000">
              <Card className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 text-white transform transition-transform duration-700 hover:rotateX-180 preserve-3d">
                <CardContent className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-2">Hover to Flip</h4>
                    <p className="text-indigo-100">Interactive card example</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/morph">
              <Button size="lg">Try Morph Transition</Button>
            </Link>
            <Link href="/parallax">
              <Button size="lg" variant="outline" className="bg-white text-black">
                Try Parallax Transition
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
