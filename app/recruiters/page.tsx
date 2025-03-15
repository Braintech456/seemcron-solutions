import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RecruitersSection } from "@/components/recruiters-section"
import { ContactCTA } from "@/components/contact-cta"

export const metadata = {
  title: "Recruiters & Partners | Seemcron Solutions",
  description: "Discover our partner companies and recruiters who trust Seemcron Solutions.",
}

export default function RecruitersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="pt-20 bg-primary/5">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-center">Our Recruiters & Partners</h1>
            <div className="w-20 h-1 bg-primary mx-auto my-4"></div>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Discover the leading companies that trust Seemcron Solutions for their hiring needs.
            </p>
          </div>
        </div>
        <RecruitersSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}

