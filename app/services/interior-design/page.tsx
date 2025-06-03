"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceHeroSvg from "@/components/service-hero-svg"

export default function InteriorDesignServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Banner with SVG */}
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
          <div className="absolute inset-0">
            <ServiceHeroSvg service="interior design" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Interior Design Services</h1>
              <p className="text-white/90 text-lg max-w-xl">
                Transform your space with our comprehensive interior design solutions
              </p>
            </div>
          </div>
        </div>

        {/* Service Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Complete Interior Design Solutions</h2>
          <p className="text-gray-700 mb-4">
            Our interior design team creates beautiful, functional spaces that reflect your style and meet your needs.
            We offer comprehensive design services from concept to completion, including ceiling installations, wooden
            flooring, and tiling.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you're renovating a single room or designing an entire property, we work closely with you to create
            spaces that are both aesthetically pleasing and practical.
          </p>

          {/* Sub-services */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Link
              href="/services/interior-design/ceiling"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2 text-primary">Ceiling Installation</h3>
              <p className="text-gray-700 text-sm">
                Professional ceiling installations including suspended ceilings, decorative ceilings, and acoustic
                solutions.
              </p>
            </Link>
            <Link
              href="/services/interior-design/wooden-floor"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2 text-primary">Wooden Flooring</h3>
              <p className="text-gray-700 text-sm">
                High-quality wooden flooring installation including hardwood, laminate, and engineered wood options.
              </p>
            </Link>
            <Link
              href="/services/interior-design/tiling"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2 text-primary">Tiling Services</h3>
              <p className="text-gray-700 text-sm">
                Expert tiling for floors, walls, and bathrooms using premium materials and precise installation
                techniques.
              </p>
            </Link>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Interior Design Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/built-in/WhatsApp Image 2025-06-02 at 17.18.38_8e9a8af7.jpg"
                alt="Built-in Furniture Design"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/ceiling/WhatsApp Image 2025-06-02 at 17.17.00_9bca5d21.jpg"
                alt="Ceiling Design"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/built-in/WhatsApp Image 2025-06-02 at 17.18.38_782190b7.jpg"
                alt="Custom Built-in Solutions"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/ceiling/WhatsApp Image 2025-06-02 at 17.17.01_768dc96c.jpg"
                alt="Modern Ceiling Installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/built-in/WhatsApp Image 2025-06-02 at 17.18.38_7abc0b18.jpg"
                alt="Interior Storage Solutions"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/ceiling/WhatsApp Image 2025-06-02 at 17.17.00_699d3efb.jpg"
                alt="Decorative Ceiling Work"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-gray-700 mb-6">Let our interior design experts create the perfect space for you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <a href="#" onClick={() => document.getElementById("quotation-modal")?.classList.remove("hidden")}>
                Request Quotation
              </a>
            </Button>
          </div>
        </div>

        {/* Back to Services */}
        <div className="mt-8 text-center">
          <Link href="/services" className="text-primary hover:underline inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Services
          </Link>
        </div>
      </div>
    </div>
  )
}
