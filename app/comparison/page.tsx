import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, BarChart3, Zap, Clock } from "lucide-react"
import { TransitionComparison } from "@/components/transition-comparison"

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
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
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Transition Comparison</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Compare all transition types side by side with performance metrics, use cases, and implementation details to
            choose the perfect animation for your project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <BarChart3 className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Performance Analysis</CardTitle>
              <CardDescription>Real-time performance metrics for each transition type</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>Use Case Guide</CardTitle>
              <CardDescription>Recommendations for when to use each transition</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Timing Analysis</CardTitle>
              <CardDescription>Optimal duration and easing for each animation</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <TransitionComparison />
      </div>
    </div>
  )
}
