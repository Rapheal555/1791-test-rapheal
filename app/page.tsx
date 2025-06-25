import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Zap, Palette, Globe, Settings, Play } from "lucide-react"
import { TransitionPreview } from "@/components/transition-preview"
import { PerformanceMetrics } from "@/components/performance-metrics"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Advanced Page Transitions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Experience cutting-edge page transitions powered by Framer Motion. Navigate between pages to see different
            animation styles, performance optimizations, and accessibility features in action.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Link href="/settings">
              <Button size="lg" variant="outline" className="group">
                <Settings className="mr-2 h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
                Customize Transitions
              </Button>
            </Link>
            <Link href="/playground">
              <Button size="lg" className="group">
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Interactive Playground
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Zap className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>60fps animations with hardware acceleration and performance monitoring</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Palette className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Beautiful Designs</CardTitle>
              <CardDescription>12+ transition types with customizable easing and timing functions</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Globe className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>Universal</CardTitle>
              <CardDescription>
                Accessibility-first design with reduced motion support and ARIA compliance
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <PerformanceMetrics />

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Explore Transition Types</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            Each transition is optimized for different use cases and user experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <TransitionPreview
            title="Slide Transitions"
            description="Directional movement with spatial awareness"
            href="/slide"
            gradient="from-green-400 to-emerald-600"
            icon="→"
          />

          <TransitionPreview
            title="Fade Transitions"
            description="Elegant opacity changes for content focus"
            href="/fade"
            gradient="from-purple-400 to-pink-600"
            icon="○"
          />

          <TransitionPreview
            title="Scale Transitions"
            description="Dynamic zoom effects with depth perception"
            href="/scale"
            gradient="from-orange-400 to-red-600"
            icon="⚡"
          />

          <TransitionPreview
            title="Rotate Transitions"
            description="3D rotation effects for immersive experiences"
            href="/rotate"
            gradient="from-cyan-400 to-blue-600"
            icon="↻"
          />

          <TransitionPreview
            title="Flip Transitions"
            description="Card-flip animations for revealing content"
            href="/flip"
            gradient="from-indigo-400 to-purple-600"
            icon="⟲"
          />

          <TransitionPreview
            title="Morph Transitions"
            description="Smooth shape transformations and layouts"
            href="/morph"
            gradient="from-pink-400 to-rose-600"
            icon="◊"
          />

          <TransitionPreview
            title="Parallax Transitions"
            description="Multi-layer depth with parallax scrolling"
            href="/parallax"
            gradient="from-teal-400 to-cyan-600"
            icon="≋"
          />

          <TransitionPreview
            title="Elastic Transitions"
            description="Bouncy, spring-based animations"
            href="/elastic"
            gradient="from-yellow-400 to-orange-600"
            icon="~"
          />

          <TransitionPreview
            title="Liquid Transitions"
            description="Fluid, organic movement patterns"
            href="/liquid"
            gradient="from-blue-400 to-indigo-600"
            icon="∿"
          />
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/comparison">
              <Button size="lg" variant="outline" className="group">
                Compare All Transitions
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/documentation">
              <Button size="lg" variant="outline" className="group">
                View Documentation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
