"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceHeroSvg from "@/components/service-hero-svg"

export default function SolarSystemServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Banner with SVG */}
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
          <div className="absolute inset-0">
            <ServiceHeroSvg service="solar system" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Solar System Installation</h1>
              <p className="text-white/90 text-lg max-w-xl">Sustainable energy solutions for your home and business</p>
            </div>
          </div>
        </div>

        {/* Service Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Renewable Energy Solutions</h2>
          <p className="text-gray-700 mb-4">
            With South Africa's abundant sunshine and rising electricity costs, solar power is an excellent investment
            for both residential and commercial properties. Our certified solar installers provide complete solar
            solutions from design to installation and maintenance.
          </p>
          <p className="text-gray-700 mb-4">
            We offer grid-tied, off-grid, and hybrid solar systems tailored to your specific energy needs and budget.
            Our installations comply with all South African regulations and come with comprehensive warranties.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Residential Solar</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Rooftop solar panel installation</li>
                <li>Battery backup systems</li>
                <li>Grid-tie inverters</li>
                <li>Solar water heating</li>
                <li>Energy monitoring systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Commercial Solar</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Large-scale solar installations</li>
                <li>Industrial solar solutions</li>
                <li>Solar carports and canopies</li>
                <li>Energy management systems</li>
                <li>Maintenance contracts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Solar Installations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/solar/WhatsApp Image 2025-06-02 at 17.20.25_68a04fb5.jpg"
                alt="Solar Installation 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/solar/WhatsApp Image 2025-06-02 at 17.20.24_c0255b88.jpg"
                alt="Solar Installation 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/solar/WhatsApp Image 2025-06-02 at 17.20.24_80613aeb.jpg"
                alt="Solar Installation 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/solar/WhatsApp Image 2025-06-02 at 17.20.23_79920479.jpg"
                alt="Solar Installation 4"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/solar/WhatsApp Image 2025-06-02 at 17.20.25_80addcc7.jpg"
                alt="Solar Installation 5"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/solar/WhatsApp Image 2025-06-02 at 17.20.24_66e68f41.jpg"
                alt="Solar Installation 6"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Go Solar?</h2>
          <p className="text-gray-700 mb-6">
            Start saving on electricity costs with our professional solar installations.
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
