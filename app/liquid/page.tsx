import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Droplets, Waves, Sparkles } from "lucide-react"
import { CodeBlock } from "@/components/code-block"

export default function LiquidPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
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
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Liquid Transitions</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Fluid, organic movement patterns that mimic liquid behavior using advanced clip-path animations and smooth
            morphing effects for truly unique transitions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <Droplets className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Fluid Animations</CardTitle>
              <CardDescription>
                Liquid transitions use advanced CSS clip-path properties to create organic, flowing animations that feel
                natural and fluid like real liquids.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Clip-path animations</li>
                <li>• Organic movement patterns</li>
                <li>• Fluid morphing effects</li>
                <li>• Natural flow dynamics</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <Waves className="h-8 w-8 text-indigo-600 mb-2" />
              <CardTitle>Advanced Clipping</CardTitle>
              <CardDescription>
                Sophisticated clip-path animations that create circular reveals and organic shapes, providing unique
                visual effects not possible with traditional transitions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="typescript"
                code={`const liquidVariant = {
  initial: { 
    clipPath: "circle(0% at 50% 50%)",
    opacity: 0 
  },
  animate: { 
    clipPath: "circle(150% at 50% 50%)",
    opacity: 1 
  },
  exit: { 
    clipPath: "circle(0% at 50% 50%)",
    opacity: 0 
  }
}`}
              />
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 mb-12 overflow-hidden relative">
          <div className="text-center mb-8 relative z-10">
            <Sparkles className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Liquid Demo</h3>
            <p className="text-gray-600 dark:text-gray-300">Watch the fluid reveal animation in action</p>
          </div>

          <div className="relative h-32 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 animate-pulse"
              style={{
                clipPath: "circle(30% at 50% 50%)",
                animation: "liquidPulse 3s ease-in-out infinite",
              }}
            ></div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/comparison">
              <Button size="lg">Compare All Transitions</Button>
            </Link>
            <Link href="/playground">
              <Button size="lg" variant="outline" className="bg-white text-black">
                Interactive Playground
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
