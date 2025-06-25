import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Zap, Palette, Globe } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Animated Page Transitions</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience smooth, professional page transitions powered by Framer Motion. Navigate between pages to see
            different animation styles in action.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Zap className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>Optimized animations that don't compromise performance</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Palette className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Beautiful Designs</CardTitle>
              <CardDescription>Carefully crafted transitions that enhance user experience</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Globe className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>Universal</CardTitle>
              <CardDescription>Works seamlessly across all modern browsers and devices</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Explore Different Transitions</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/slide">
              <Button size="lg" className="group">
                Slide Transition
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/fade">
              <Button size="lg" variant="outline" className="group bg-white text-black">
                Fade Transition
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/scale">
              <Button size="lg" variant="outline" className="group bg-white text-black">
                Scale Transition
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
