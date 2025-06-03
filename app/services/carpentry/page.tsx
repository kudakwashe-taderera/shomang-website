"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceHeroSvg from "@/components/service-hero-svg"

export default function CarpentryServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Banner with SVG */}
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
          <div className="absolute inset-0">
            <ServiceHeroSvg service="carpentry" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Carpentry Services</h1>
              <p className="text-white/90 text-lg max-w-xl">
                Custom carpentry work for structural and decorative elements
              </p>
            </div>
          </div>
        </div>

        {/* Service Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Expert Carpentry Craftsmanship</h2>
          <p className="text-gray-700 mb-4">
            Our skilled carpenters bring years of experience in both structural and decorative carpentry work. We create
            custom solutions that combine functionality with aesthetic appeal, using high-quality materials and
            traditional craftsmanship techniques.
          </p>
          <p className="text-gray-700 mb-4">
            From built-in furniture to structural frameworks, we handle all aspects of carpentry with attention to
            detail and precision. Our work includes both indoor and outdoor carpentry projects.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Custom Carpentry</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Built-in wardrobes and cupboards</li>
                <li>Kitchen cabinets and counters</li>
                <li>Custom furniture design</li>
                <li>Shelving and storage solutions</li>
                <li>Decorative woodwork</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Structural Carpentry</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Roof trusses and frameworks</li>
                <li>Deck and patio construction</li>
                <li>Door and window frames</li>
                <li>Structural repairs</li>
                <li>Outdoor structures</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Carpentry Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/carpentry/WhatsApp Image 2025-06-02 at 17.12.02_954ae1b9.jpg"
                alt="Custom Carpentry Work 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/carpentry/WhatsApp Image 2025-06-02 at 17.12.02_836323b2.jpg"
                alt="Custom Carpentry Work 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/carpentry/WhatsApp Image 2025-06-02 at 17.12.02_6bfd505d.jpg"
                alt="Custom Carpentry Work 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/carpentry/WhatsApp Image 2025-06-02 at 17.12.25_6419261c.jpg"
                alt="Custom Carpentry Work 4"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Custom Carpentry?</h2>
          <p className="text-gray-700 mb-6">
            Let us create beautiful and functional carpentry solutions for your space.
          </p>
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
