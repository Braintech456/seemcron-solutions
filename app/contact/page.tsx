import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactPageNew } from "@/components/contact-page-new"

export const metadata = {
  title: "Contact Us | Seemcron Solutions",
  description: "Get in touch with Seemcron Solutions for inquiries about our training programs and placement services.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <ContactPageNew />
      </main>
      <Footer />
    </div>
  )
}

