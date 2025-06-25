import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Eye } from "lucide-react"

export default function FadePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
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
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Fade Transitions</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Elegant fade transitions that smoothly blend between pages, creating a sophisticated and polished user
            experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <Eye className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Subtle Elegance</CardTitle>
              <CardDescription>
                Fade transitions are perfect for content-focused applications where you want smooth changes without
                distracting movement.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Smooth opacity transitions</li>
                <li>• No jarring movements</li>
                <li>• Focus on content</li>
                <li>• Accessible for all users</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Perfect For</CardTitle>
              <CardDescription>
                Ideal for blogs, portfolios, documentation sites, and any application where content is the primary
                focus.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200">Content Sites</h4>
                  <p className="text-sm text-purple-600 dark:text-purple-300">Blogs, news, documentation</p>
                </div>
                <div className="bg-pink-100 dark:bg-pink-900/20 p-3 rounded">
                  <h4 className="font-semibold text-pink-800 dark:text-pink-200">Portfolios</h4>
                  <p className="text-sm text-pink-600 dark:text-pink-300">Creative showcases, galleries</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/slide">
              <Button size="lg">Try Slide Transition</Button>
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
