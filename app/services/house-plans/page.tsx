"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceHeroSvg from "@/components/service-hero-svg"

export default function HousePlansServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Banner with SVG */}
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
          <div className="absolute inset-0">
            <ServiceHeroSvg service="house plans" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">House Plans & Design</h1>
              <p className="text-white/90 text-lg max-w-xl">Professional architectural planning and design services</p>
            </div>
          </div>
        </div>

        {/* Service Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Comprehensive Architectural Design</h2>
          <p className="text-gray-700 mb-4">
            Our architectural design team creates detailed house plans that bring your vision to life. We provide
            comprehensive design services from initial concept sketches to detailed construction drawings, ensuring your
            project meets all building regulations and your specific requirements.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you're building a new home, planning an extension, or renovating an existing property, our
            experienced architects and designers work closely with you to create functional, beautiful spaces that suit
            your lifestyle and budget.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Design Services</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Custom house design</li>
                <li>Architectural drawings</li>
                <li>3D visualizations</li>
                <li>Interior space planning</li>
                <li>Structural design</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Documentation</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Building plan submissions</li>
                <li>Municipal approvals</li>
                <li>Construction drawings</li>
                <li>Compliance certificates</li>
                <li>Project specifications</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Design Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/house-3d-render.jpg"
                alt="3D House Design Rendering"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/luxury-house-exterior.jpg"
                alt="Completed House Design"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/modern-living-room.jpg"
                alt="Interior Space Planning"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/luxury-kitchen-black.jpg"
                alt="Kitchen Design Plans"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Architectural Drawings"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Design Your Dream Home?</h2>
          <p className="text-gray-700 mb-6">Let our architects create the perfect plans for your project.</p>
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
