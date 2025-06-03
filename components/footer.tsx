import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/shomang-logo.jpg"
                alt="Shomang Zenda Projects Logo"
                width={80}
                height={80}
                className="h-20 w-20 rounded-full border-2 border-white"
              />
            </Link>
            <p className="mb-4">Trusted Excellence in Domestic & Industrial Construction</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white/80" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white/80" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white/80" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white/80" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:underline">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/building" className="hover:underline">
                  Building
                </Link>
              </li>
              <li>
                <Link href="/services/plumbing" className="hover:underline">
                  Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/electricity" className="hover:underline">
                  Electricity
                </Link>
              </li>
              <li>
                <Link href="/services/interior-design" className="hover:underline">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link href="/services/solar-system" className="hover:underline">
                  Solar System
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5" />
                <div>
                  <p>+27 73 150 0773</p>
                  <p>+27 67 923 1192</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5" />
                <p>shomang.zendaprojects@gmail.com</p>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <p>Protea Glen, Soweto, Johannesburg, South Africa, 1818</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Shomang Zenda Projects. All rights reserved.</p>
          <p className="text-xs mt-2 text-white/70 flex items-center justify-center gap-2">
            Developed & maintained by{" "}
            <a
              href="https://kudakwashe-taderera.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/90 transition-colors duration-200"
            >
              Kudash
            </a>
            <span className="text-white/40">•</span>
            <a
              href="https://kudakwashe-taderera.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white transition-colors duration-200"
            >
              View Portfolio <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
