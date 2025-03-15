import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CoursesSection } from "@/components/courses-section"
import { ContactCTA } from "@/components/contact-cta"

export const metadata = {
  title: "Courses | Seemcron Solutions",
  description: "Explore our industry-oriented training programs and courses.",
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="pt-20 bg-primary/5">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-center">Our Courses</h1>
            <div className="w-20 h-1 bg-primary mx-auto my-4"></div>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Explore our specialized training programs designed to equip you with in-demand skills.
            </p>
          </div>
        </div>
        <CoursesSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}

