import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, MoveRight } from "lucide-react"

export default function SlidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
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
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Slide Transitions</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pages slide in from the right and slide out to the left, creating a natural navigation flow that feels
            intuitive and smooth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <MoveRight className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>Directional Movement</CardTitle>
              <CardDescription>
                Slide transitions provide clear visual feedback about navigation direction, helping users understand
                their position in the application flow.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Horizontal slide animations</li>
                <li>• Smooth enter/exit timing</li>
                <li>• Maintains scroll position</li>
                <li>• Mobile-optimized performance</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Implementation Details</CardTitle>
              <CardDescription>
                Built with Framer Motion's layout animations and optimized for performance across all devices and
                browsers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <code className="text-sm">
                  {"initial={{ x: 300, opacity: 0 }}"}
                  <br />
                  {"animate={{ x: 0, opacity: 1 }}"}
                  <br />
                  {"exit={{ x: -300, opacity: 0 }}"}
                </code>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/fade">
              <Button size="lg">Try Fade Transition</Button>
            </Link>
            <Link href="/scale">
              <Button size="lg" variant="outline" className="bg-white text-black">
                Try Scale Transition
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
