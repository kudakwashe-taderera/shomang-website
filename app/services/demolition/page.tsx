"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceHeroSvg from "@/components/service-hero-svg"

export default function DemolitionServicePage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Demolition Services</h1>
              <p className="text-white/90 text-lg max-w-xl">
                Safe and efficient demolition services for residential and commercial properties
              </p>
            </div>
          </div>
        </div>

        {/* Service Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Professional Demolition Solutions</h2>
          <p className="text-gray-700 mb-4">
            Our demolition team provides safe, efficient, and environmentally responsible demolition services for
            residential, commercial, and industrial properties. We handle projects of all sizes, from selective interior
            demolition to complete structure removal.
          </p>
          <p className="text-gray-700 mb-4">
            Safety is our top priority in all demolition work. We follow strict safety protocols, obtain all necessary
            permits, and ensure proper disposal of materials in compliance with environmental regulations.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Residential Demolition</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>House demolition</li>
                <li>Interior demolition</li>
                <li>Kitchen and bathroom removal</li>
                <li>Wall removal</li>
                <li>Garage demolition</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Commercial & Industrial</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Building demolition</li>
                <li>Industrial structure removal</li>
                <li>Site clearance</li>
                <li>Concrete breaking</li>
                <li>Hazardous material removal</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Demolition Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=400&width=400`}
                  alt={`Demolition Project ${i}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Demolition Services?</h2>
          <p className="text-gray-700 mb-6">Get safe and professional demolition services for your project.</p>
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
