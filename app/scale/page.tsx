import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Maximize } from "lucide-react"

export default function ScalePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-gray-800">
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
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Scale Transitions</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Dynamic scale transitions that create an engaging zoom effect, perfect for applications that want to add
            energy and excitement to navigation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <Maximize className="h-8 w-8 text-orange-600 mb-2" />
              <CardTitle>Dynamic Impact</CardTitle>
              <CardDescription>
                Scale transitions create a sense of depth and dimension, making your application feel more interactive
                and engaging.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Zoom-in/zoom-out effects</li>
                <li>• Creates depth perception</li>
                <li>• Engaging user experience</li>
                <li>• Modern, app-like feel</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Animation Details</CardTitle>
              <CardDescription>
                Carefully tuned scaling animations that feel natural and responsive, with proper easing curves for
                smooth motion.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <code className="text-sm">
                  {"initial={{ scale: 0.8, opacity: 0 }}"}
                  <br />
                  {"animate={{ scale: 1, opacity: 1 }}"}
                  <br />
                  {"exit={{ scale: 1.1, opacity: 0 }}"}
                </code>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/slide">
              <Button size="lg">Try Slide Transition</Button>
            </Link>
            <Link href="/fade">
              <Button size="lg" variant="outline" className="bg-white text-black">
                Try Fade Transition
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
