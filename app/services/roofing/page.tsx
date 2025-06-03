"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceHeroSvg from "@/components/service-hero-svg"

export default function RoofingServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Banner with SVG */}
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
          <div className="absolute inset-0">
            <ServiceHeroSvg service="building" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Roofing Services</h1>
              <p className="text-white/90 text-lg max-w-xl">
                Complete roofing solutions including installation, repairs, and maintenance
              </p>
            </div>
          </div>
        </div>

        {/* Service Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Professional Roofing Solutions</h2>
          <p className="text-gray-700 mb-4">
            Our roofing specialists provide comprehensive roofing services for residential, commercial, and industrial
            properties. We work with various roofing materials and systems to ensure your property is protected from the
            elements while maintaining aesthetic appeal.
          </p>
          <p className="text-gray-700 mb-4">
            From new roof installations to emergency repairs, our experienced team delivers quality workmanship that
            stands the test of time. We use only premium materials and follow industry best practices.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Residential Roofing</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Tile roof installation</li>
                <li>Metal roofing systems</li>
                <li>Roof repairs and maintenance</li>
                <li>Gutter installation</li>
                <li>Roof inspections</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Commercial & Industrial</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Industrial roof systems</li>
                <li>Flat roof installations</li>
                <li>Warehouse roofing</li>
                <li>Emergency roof repairs</li>
                <li>Roof maintenance contracts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Roofing Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/roofing/WhatsApp Image 2025-06-02 at 14.39.37_e7f514d9.jpg"
                alt="Roofing Project 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/roofing/WhatsApp Image 2025-06-02 at 14.39.37_569fc4bf.jpg"
                alt="Roofing Project 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/roofing/WhatsApp Image 2025-06-02 at 14.39.36_3baa6aaa.jpg"
                alt="Roofing Project 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/roofing/WhatsApp Image 2025-06-02 at 14.39.36_1e43035e.jpg"
                alt="Roofing Project 4"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/roofing/WhatsApp Image 2025-06-02 at 14.39.36_b2aa3c08.jpg"
                alt="Roofing Project 5"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Roofing Services?</h2>
          <p className="text-gray-700 mb-6">Protect your property with our professional roofing solutions.</p>
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
