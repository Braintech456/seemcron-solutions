"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ContactCTA() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Career Journey?</h2>
          <p className="text-gray-600 mb-8">
            Get in touch with our team to learn more about our training programs and placement services.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-8">
              Contact Us Today
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

