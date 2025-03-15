import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Seemcron Solutions</h3>
            <p className="mb-4 text-sm">
              Empowering careers through industry-relevant training and placement services. Building the next generation
              of tech professionals.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#home" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#placements" className="hover:text-white transition-colors">
                  Placements
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Full Stack Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Data Science & Analytics
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Artificial Intelligence & ML
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Cloud Computing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm space-y-2">
              <p>123 Tech Park, Innovation Street</p>
              <p>Bangalore - 560001</p>
              <p>India</p>
              <p className="mt-4">
                <strong>Phone:</strong> +91 98765 43210
              </p>
              <p>
                <strong>Email:</strong> info@seemcron.com
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Seemcron Solutions Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

