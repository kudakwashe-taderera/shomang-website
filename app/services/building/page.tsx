"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceHeroSvg from "@/components/service-hero-svg"

export default function BuildingServicePage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Building Services</h1>
              <p className="text-white/90 text-lg max-w-xl">
                Complete building solutions for new constructions and renovations
              </p>
            </div>
          </div>
        </div>

        {/* Service Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Building Services</h2>
          <p className="text-gray-700 mb-4">
            At Shomang Zenda Projects, we offer comprehensive building services for both domestic and industrial
            clients. Our team of skilled professionals ensures high-quality workmanship on every project, from small
            renovations to large-scale new constructions.
          </p>
          <p className="text-gray-700 mb-4">
            We handle all aspects of the building process, including planning, design, construction, and finishing. Our
            attention to detail and commitment to excellence ensures that your project is completed to the highest
            standards, on time, and within budget.
          </p>
          <p className="text-gray-700">
            Whether you're looking to build a new home, renovate an existing property, or construct commercial or
            industrial facilities, our experienced team has the expertise to bring your vision to life.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/building/WhatsApp Image 2025-06-02 at 17.24.04_1620b494.jpg"
                alt="Building Project 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/building/WhatsApp Image 2025-06-02 at 17.24.03_4cff426a.jpg"
                alt="Building Project 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/building/WhatsApp Image 2025-06-02 at 17.13.17_e638cd29.jpg"
                alt="Building Project 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Building Project?</h2>
          <p className="text-gray-700 mb-6">Contact us today to discuss your requirements and get a free quotation.</p>
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
