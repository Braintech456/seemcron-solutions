"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import CountUp from "react-countup"

export function PlacementSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const stats = [
    { label: "Students Placed", value: 2500 },
    { label: "Partner Companies", value: 150 },
    { label: "Highest Package (LPA)", value: 24 },
    { label: "Internship Conversion", value: 85 },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Developer at TechCorp",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The training at Seemcron Solutions was instrumental in helping me secure my dream job. The practical approach and industry-relevant curriculum gave me a competitive edge.",
    },
    {
      name: "Rahul Verma",
      role: "Data Analyst at AnalyticsPro",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "I'm grateful for the personalized guidance and placement support from Seemcron. Their industry connections and interview preparation sessions were invaluable.",
    },
    {
      name: "Ananya Patel",
      role: "UI/UX Designer at CreativeMinds",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Seemcron's design course and portfolio development workshops helped me showcase my skills effectively to employers. I received multiple job offers within a month of completing the program.",
    },
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

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

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">Success Stories</h3>

          <div className="relative">
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="shrink-0">
                    <img
                      src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[activeTestimonial].name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <blockquote className="text-gray-700 italic mb-4">
                      "{testimonials[activeTestimonial].quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold">{testimonials[activeTestimonial].name}</p>
                      <p className="text-sm text-gray-600">{testimonials[activeTestimonial].role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 rounded-full ${activeTestimonial === index ? "bg-primary" : "bg-gray-300"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

