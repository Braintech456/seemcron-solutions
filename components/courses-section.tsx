"use client"
import { motion } from "framer-motion"
import { Code, Database, LineChart, Layers } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export function CoursesSection() {
  const courses = [
    {
      id: "web-dev",
      title: "Full Stack Web Development",
      icon: <Code className="h-10 w-10 text-primary" />,
      description: "Master front-end and back-end technologies to build complete web applications.",
      duration: "16 weeks",
      syllabus: [
        "HTML5, CSS3 & JavaScript Fundamentals",
        "React.js & Next.js for Frontend",
        "Node.js & Express for Backend",
        "Database Management with MongoDB & SQL",
        "API Development & Integration",
        "Authentication & Authorization",
        "Deployment & DevOps Basics",
      ],
    },
    {
      id: "data-science",
      title: "Data Science & Analytics",
      icon: <LineChart className="h-10 w-10 text-primary" />,
      description: "Learn to analyze data, build predictive models, and derive actionable insights.",
      duration: "20 weeks",
      syllabus: [
        "Python Programming for Data Science",
        "Data Cleaning & Preprocessing",
        "Statistical Analysis & Visualization",
        "Machine Learning Algorithms",
        "Deep Learning Fundamentals",
        "Big Data Technologies",
        "Business Intelligence & Reporting",
      ],
    },
    {
      id: "ai-ml",
      title: "Artificial Intelligence & ML",
      icon: <Database className="h-10 w-10 text-primary" />,
      description: "Dive into the world of AI and machine learning to build intelligent systems.",
      duration: "24 weeks",
      syllabus: [
        "Machine Learning Fundamentals",
        "Neural Networks & Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning",
        "AI Ethics & Responsible AI",
        "AI Project Development & Deployment",
      ],
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      icon: <Layers className="h-10 w-10 text-primary" />,
      description: "Create intuitive and engaging user experiences with modern design principles.",
      duration: "12 weeks",
      syllabus: [
        "Design Thinking & UX Research",
        "Wireframing & Prototyping",
        "UI Design Principles",
        "Design Systems & Component Libraries",
        "Interaction Design",
        "Usability Testing",
        "Portfolio Development",
      ],
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

        <div className="grid md:grid-cols-2 gap-8">
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

                <Accordion type="single" collapsible className="mt-4">
                  <AccordionItem value="syllabus">
                    <AccordionTrigger className="text-sm font-medium">View Syllabus</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 mt-2">
                        {course.syllabus.map((item, i) => (
                          <li key={i} className="text-sm text-gray-600">
                            • {item}
                          </li>
                        ))}
                      </ul>
                      <Button size="sm" className="mt-4 w-full">
                        Enroll Now
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

