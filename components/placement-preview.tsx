"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import CountUp from "react-countup"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PlacementPreview() {
  const stats = [
    { label: "Students Placed", value: 2500 },
    { label: "Partner Companies", value: 150 },
    { label: "Highest Package (LPA)", value: 24 },
    { label: "Internship Conversion", value: 85 },
  ]

  return (
    <section id="placements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Placement Success</h2>
          <div className="w-20 h-1 bg-primary mx-auto my-4"></div>
          <p className="text-lg text-gray-600">
            Our track record speaks for itself. We've helped thousands of students launch successful careers across
            various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm text-center"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">
                <CountUp end={stat.value} duration={2.5} suffix="+" />
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="shrink-0">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Student Testimonial"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <div>
                  <blockquote className="text-gray-700 italic mb-4">
                    "The training at Seemcron Solutions was instrumental in helping me secure my dream job. The
                    practical approach and industry-relevant curriculum gave me a competitive edge."
                  </blockquote>
                  <div>
                    <p className="font-semibold">Priya Sharma</p>
                    <p className="text-sm text-gray-600">Software Developer at TechCorp</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link href="/placements">
            <Button variant="outline" className="mt-4">
              View All Success Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

