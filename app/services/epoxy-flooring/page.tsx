"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceHeroSvg from "@/components/service-hero-svg"

export default function EpoxyFlooringServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Banner with SVG */}
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
          <div className="absolute inset-0">
            <ServiceHeroSvg service="epoxy flooring" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Epoxy Flooring</h1>
              <p className="text-white/90 text-lg max-w-xl">
                Durable and attractive epoxy flooring solutions for industrial and commercial spaces
              </p>
            </div>
          </div>
        </div>

        {/* Service Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Premium Epoxy Flooring Solutions</h2>
          <p className="text-gray-700 mb-4">
            Our epoxy flooring systems provide exceptional durability, chemical resistance, and aesthetic appeal for
            industrial, commercial, and residential applications. We use high-quality epoxy resins and advanced
            application techniques to ensure long-lasting results.
          </p>
          <p className="text-gray-700 mb-4">
            Epoxy flooring is ideal for warehouses, factories, garages, showrooms, and any space requiring a durable,
            easy-to-clean surface that can withstand heavy traffic and harsh conditions.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Industrial Epoxy</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Heavy-duty industrial flooring</li>
                <li>Chemical-resistant coatings</li>
                <li>Anti-slip surfaces</li>
                <li>Warehouse flooring</li>
                <li>Manufacturing facility floors</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Commercial & Decorative</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Showroom flooring</li>
                <li>Retail space floors</li>
                <li>Garage epoxy coatings</li>
                <li>Decorative flake systems</li>
                <li>Metallic epoxy finishes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Epoxy Flooring Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/epoxy/WhatsApp Image 2025-06-02 at 17.15.12_fe06e5e4.jpg"
                alt="Epoxy Flooring Project 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/epoxy/WhatsApp Image 2025-06-02 at 17.15.11_45adb0c8.jpg"
                alt="Epoxy Flooring Project 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/epoxy/WhatsApp Image 2025-06-02 at 17.15.11_ca31042e.jpg"
                alt="Epoxy Flooring Project 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/epoxy/WhatsApp Image 2025-06-02 at 17.15.11_1e38f1f7.jpg"
                alt="Epoxy Flooring Project 4"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/epoxy/WhatsApp Image 2025-06-02 at 17.15.11_702dd642.jpg"
                alt="Epoxy Flooring Project 5"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/epoxy/WhatsApp Image 2025-06-02 at 17.15.12_5ecc6f02.jpg"
                alt="Epoxy Flooring Project 6"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Durable Flooring?</h2>
          <p className="text-gray-700 mb-6">Get professional epoxy flooring that lasts for years.</p>
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
