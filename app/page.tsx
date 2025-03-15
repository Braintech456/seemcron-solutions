import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { AboutPreview } from "@/components/about-preview"
import { PlacementPreview } from "@/components/placement-preview"
import { CoursesPreview } from "@/components/courses-preview"
import { ContactCTA } from "@/components/contact-cta"
import { DynamicThreeDScene } from "@/components/three-d-scene"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Innovative Learning Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
            <DynamicThreeDScene />
            <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
              At Seemcron Solutions, we combine cutting-edge technology with industry expertise to provide an immersive
              learning experience that prepares you for the future.
            </p>
          </div>
        </section>
        <AboutPreview />
        <PlacementPreview />
        <CoursesPreview />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}

