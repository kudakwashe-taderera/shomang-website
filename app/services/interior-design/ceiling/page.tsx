"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceHeroSvg from "@/components/service-hero-svg"

export default function CeilingServicePage() {
  const ceilingImages = [
    {
      src: "/images/ceiling/WhatsApp Image 2025-06-02 at 17.17.00_9bca5d21.jpg",
      alt: "Modern Ceiling Installation"
    },
    {
      src: "/images/ceiling/WhatsApp Image 2025-06-02 at 17.17.01_768dc96c.jpg",
      alt: "Professional Ceiling Design"
    },
    {
      src: "/images/ceiling/WhatsApp Image 2025-06-02 at 17.17.00_699d3efb.jpg",
      alt: "Custom Ceiling Work"
    }
  ]

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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Ceiling Installation</h1>
              <p className="text-white/90 text-lg max-w-xl">
                Professional ceiling installations including suspended ceilings and decorative solutions
              </p>
            </div>
          </div>
        </div>

        {/* Service Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Expert Ceiling Solutions</h2>
          <p className="text-gray-700 mb-4">
            Our ceiling specialists provide comprehensive ceiling installation services for residential and commercial
            properties. We work with various ceiling types and materials to create beautiful, functional overhead
            solutions that enhance your space.
          </p>
          <p className="text-gray-700 mb-4">
            From suspended ceilings for offices to decorative ceilings for homes, we ensure professional installation
            with attention to detail and quality craftsmanship.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Ceiling Types</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Suspended/Drop ceilings</li>
                <li>Gypsum board ceilings</li>
                <li>Decorative ceilings</li>
                <li>Acoustic ceilings</li>
                <li>Coffered ceilings</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Applications</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Office buildings</li>
                <li>Retail spaces</li>
                <li>Residential homes</li>
                <li>Healthcare facilities</li>
                <li>Educational institutions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Ceiling Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ceilingImages.map((image, i) => (
              <div key={i} className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Ceiling Installation?</h2>
          <p className="text-gray-700 mb-6">Transform your space with our professional ceiling solutions.</p>
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
          <Link href="/services/interior-design" className="text-primary hover:underline inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Interior Design
          </Link>
        </div>
      </div>
    </div>
  )
}
