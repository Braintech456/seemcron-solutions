"use client"

import { motion } from "framer-motion"
import { Code, Database } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CoursesPreview() {
  const courses = [
    {
      id: "web-dev",
      title: "Full Stack Web Development",
      icon: <Code className="h-10 w-10 text-primary" />,
      description: "Master front-end and back-end technologies to build complete web applications.",
      duration: "16 weeks",
    },
    {
      id: "data-science",
      title: "Data Science & Analytics",
      icon: <Database className="h-10 w-10 text-primary" />,
      description: "Learn to analyze data, build predictive models, and derive actionable insights.",
      duration: "20 weeks",
    },
  ]

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Industry-Oriented Courses</h2>
          <div className="w-20 h-1 bg-primary mx-auto my-4"></div>
          <p className="text-lg text-gray-600">
            Our specialized training programs are designed to equip you with in-demand skills that employers are looking
            for.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">{course.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-2">{course.description}</p>
                    <p className="text-sm text-primary font-medium">Duration: {course.duration}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/courses">
            <Button variant="outline" className="mt-4">
              Explore All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

