import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Zap, Waves, Sparkles } from "lucide-react"
import { CodeBlock } from "@/components/code-block"

export default function ElasticPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
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
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Elastic Transitions</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Bouncy, spring-based animations that add personality and playfulness to your interface with elastic easing
            functions and dynamic scaling effects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <Zap className="h-8 w-8 text-yellow-600 mb-2" />
              <CardTitle>Spring Physics</CardTitle>
              <CardDescription>
                Elastic transitions use spring physics to create natural bouncing effects that feel responsive and
                engaging, adding character to user interactions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Spring-based animations</li>
                <li>• Bouncy easing functions</li>
                <li>• Dynamic scaling effects</li>
                <li>• Playful interactions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <Waves className="h-8 w-8 text-orange-600 mb-2" />
              <CardTitle>Elastic Easing</CardTitle>
              <CardDescription>
                Advanced easing curves that simulate elastic behavior, creating animations that overshoot and settle
                naturally like real-world springs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="typescript"
                code={`const elasticVariant = {
  initial: { scale: 0.3, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100
    }
  },
  exit: { scale: 0.3, opacity: 0 }
}`}
              />
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8 mb-12">
          <div className="text-center mb-8">
            <Sparkles className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Elastic Demo</h3>
            <p className="text-gray-600 dark:text-gray-300">Click the buttons to see different elastic effects</p>
          </div>

          <div className="flex justify-center space-x-4">
            <Button className="transform hover:scale-110 active:scale-95 transition-transform duration-200 bg-yellow-500 hover:bg-yellow-600">
              Bounce Me!
            </Button>
            <Button
              variant="outline"
              className="transform hover:scale-110 active:scale-95 transition-transform duration-200 bg-white text-black border-orange-300 hover:border-orange-400"
            >
              Spring Effect
            </Button>
            <Button
              variant="secondary"
              className="transform hover:scale-110 active:scale-95 transition-transform duration-200"
            >
              Elastic Scale
            </Button>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/liquid">
              <Button size="lg">Try Liquid Transition</Button>
            </Link>
            <Link href="/comparison">
              <Button size="lg" variant="outline" className="bg-white text-black">
                Compare All Transitions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
