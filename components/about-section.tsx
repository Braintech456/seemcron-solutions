"use client"

import { motion } from "framer-motion"
import { Award, Users, Target, Lightbulb } from "lucide-react"

export function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  const values = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "We strive for excellence in every training program and placement service we offer.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Student-Centric",
      description: "Our approach focuses on individual student needs and career aspirations.",
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Industry Relevance",
      description: "We continuously update our curriculum to match industry requirements and trends.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We embrace innovative teaching methods and technologies for effective learning.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 variants={fadeIn} custom={0} className="text-3xl md:text-4xl font-bold text-gray-900">
            About Seemcron Solutions
          </motion.h2>
          <motion.div variants={fadeIn} custom={1} className="w-20 h-1 bg-primary mx-auto my-4"></motion.div>
          <motion.p variants={fadeIn} custom={2} className="text-lg text-gray-600">
            Seemcron Solutions Private Limited is a premier training and placement organization dedicated to bridging
            the gap between education and industry requirements. We prepare students for successful careers through
            specialized training programs and connect them with leading employers.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              custom={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

