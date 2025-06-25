"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface TransitionPreviewProps {
  title: string
  description: string
  href: string
  gradient: string
  icon: string
}

export function TransitionPreview({ title, description, href, gradient, icon }: TransitionPreviewProps) {
  return (
    <Link href={href}>
      <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className={`h-32 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
