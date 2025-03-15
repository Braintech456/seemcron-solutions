"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Send, CheckCircle2 } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ContactPageNew() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setFormStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 3000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Our Location",
      details: ["123 Tech Park, Innovation Street", "Bangalore - 560001, India"],
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone Number",
      details: ["+91 98765 43210", "+91 98765 43211"],
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Address",
      details: ["info@seemcron.com", "careers@seemcron.com"],
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Working Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
    },
  ]

  const faqs = [
    {
      question: "How can I enroll in your training programs?",
      answer:
        "You can enroll by filling out the contact form on this page, calling our admissions office, or visiting our campus during working hours. Our team will guide you through the enrollment process.",
    },
    {
      question: "Do you offer placement guarantees?",
      answer:
        "While we don't offer 100% placement guarantees, our placement rate is over 95%. We provide comprehensive placement assistance including resume building, interview preparation, and connections with our extensive network of hiring partners.",
    },
    {
      question: "Are there any scholarships available?",
      answer:
        "Yes, we offer merit-based scholarships and financial assistance programs for deserving candidates. Please contact our admissions team for more information about eligibility criteria and application process.",
    },
    {
      question: "Can I take a demo class before enrolling?",
      answer:
        "We encourage prospective students to attend a free demo session to experience our teaching methodology and course content before making a decision.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary/10 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-lg text-gray-600">
              We'd love to hear from you. Reach out to us for any inquiries about our training programs, placement
              services, or career opportunities.
            </p>
          </motion.div>
        </div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-[40px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#ffffff"
              opacity="1"
            ></path>
          </svg>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 mb-1">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              {formStatus === "success" ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="bg-green-100 rounded-full p-4 mb-4">
                    <CheckCircle2 className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                  <Button variant="outline" onClick={() => setFormStatus("idle")}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select a subject</option>
                        <option value="Course Inquiry">Course Inquiry</option>
                        <option value="Placement Services">Placement Services</option>
                        <option value="Corporate Training">Corporate Training</option>
                        <option value="Career Opportunities">Career Opportunities</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={formStatus === "submitting"}>
                    {formStatus === "submitting" ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="bg-white rounded-lg shadow-md p-8 h-full">
                <h2 className="text-2xl font-bold mb-6">Our Location</h2>
                <div className="rounded-lg overflow-hidden h-[400px] bg-gray-200">
                  {/* Google Maps would be integrated here */}
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 p-4">
                    <MapPin className="h-12 w-12 text-primary mb-4" />
                    <p className="text-center">
                      Google Maps Integration
                      <br />
                      123 Tech Park, Innovation Street
                      <br />
                      Bangalore - 560001, India
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                      <Facebook className="h-5 w-5 text-primary" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                      <Twitter className="h-5 w-5 text-primary" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                      <Instagram className="h-5 w-5 text-primary" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to common questions about our programs and services.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium py-4">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions? Feel free to reach out to us directly.</p>
            <Button variant="outline" className="rounded-full">
              <Mail className="mr-2 h-4 w-4" /> Email Us
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

