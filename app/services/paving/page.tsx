"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceHeroSvg from "@/components/service-hero-svg"

export default function PavingServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Banner with SVG */}
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
          <div className="absolute inset-0">
            <ServiceHeroSvg service="civil engineering" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Paving Services</h1>
              <p className="text-white/90 text-lg max-w-xl">
                Complete paving solutions including driveways, walkways, and parking areas
              </p>
            </div>
          </div>
        </div>

        {/* Service Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Professional Paving Solutions</h2>
          <p className="text-gray-700 mb-4">
            We provide comprehensive paving services for residential, commercial, and industrial properties. Our team
            specializes in various paving materials and techniques to create durable, attractive surfaces that enhance
            your property's value and functionality.
          </p>
          <p className="text-gray-700 mb-4">
            From driveways and walkways to large parking areas and industrial surfaces, we handle projects of all sizes
            with professional expertise and attention to detail.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Residential Paving</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Driveway paving</li>
                <li>Garden pathways</li>
                <li>Patio paving</li>
                <li>Pool area paving</li>
                <li>Decorative paving</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Commercial & Industrial</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Parking lot construction</li>
                <li>Industrial yard paving</li>
                <li>Loading bay areas</li>
                <li>Access roads</li>
                <li>Heavy-duty paving</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Paving Materials We Use</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="font-medium">Concrete Paving</p>
              </div>
              <div className="text-center">
                <p className="font-medium">Brick Paving</p>
              </div>
              <div className="text-center">
                <p className="font-medium">Stone Paving</p>
              </div>
              <div className="text-center">
                <p className="font-medium">Interlocking Pavers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Paving Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/paving/WhatsApp Image 2025-06-02 at 17.11.09_6dbcbc8e.jpg"
                alt="Paving Project 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/paving/WhatsApp Image 2025-06-02 at 14.36.47_cf713987.jpg"
                alt="Paving Project 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/paving/WhatsApp Image 2025-06-02 at 14.36.47_ead5e67d.jpg"
                alt="Paving Project 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/paving/WhatsApp Image 2025-06-02 at 17.11.09_364856f8.jpg"
                alt="Paving Project 4"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/paving/WhatsApp Image 2025-06-02 at 14.36.47_ec57abbd.jpg"
                alt="Paving Project 5"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/paving/WhatsApp Image 2025-06-02 at 17.11.09_d1687933.jpg"
                alt="Paving Project 6"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Professional Paving?</h2>
          <p className="text-gray-700 mb-6">Create beautiful and durable paved surfaces for your property.</p>
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
