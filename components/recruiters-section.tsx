"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function RecruitersSection() {
  const sliderRef = useRef<HTMLDivElement>(null)

  // Mock company logos
  const companies = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Company ${i + 1}`,
    logo: `/placeholder.svg?height=80&width=160`,
  }))

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let animationId: number
    let position = 0
    const speed = 0.5

    const animate = () => {
      position -= speed

      // Reset position when all logos have scrolled
      if (position <= -100 * (companies.length / 2)) {
        position = 0
      }

      if (slider) {
        slider.style.transform = `translateX(${position}px)`
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [companies.length])

  return (
    <section id="recruiters" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Recruiters & Partners</h2>
          <div className="w-20 h-1 bg-primary mx-auto my-4"></div>
          <p className="text-lg text-gray-600">
            We collaborate with leading companies across industries to provide the best career opportunities for our
            students.
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="relative">
            <div
              ref={sliderRef}
              className="flex items-center gap-8 py-4"
              style={{ width: `${companies.length * 200}px` }}
            >
              {companies.map((company) => (
                <div
                  key={company.id}
                  className="flex-shrink-0 w-40 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center p-4"
                >
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary/5 p-6 md:p-8 rounded-lg border border-primary/20"
          >
            <h3 className="text-xl font-semibold mb-4 text-center">What Recruiters Say About Us</h3>
            <blockquote className="text-gray-700 italic text-center">
              "Seemcron Solutions has consistently provided us with well-trained, job-ready candidates who quickly adapt
              to our work environment. Their focus on practical skills and industry relevance makes their students stand
              out."
            </blockquote>
            <div className="mt-4 text-center">
              <p className="font-semibold">Vikram Mehta</p>
              <p className="text-sm text-gray-600">HR Director, TechInnovate Solutions</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

