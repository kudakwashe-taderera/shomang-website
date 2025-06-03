"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceHeroSvg from "@/components/service-hero-svg"

export default function PlumbingServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Banner with SVG */}
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
          <div className="absolute inset-0">
            <ServiceHeroSvg service="plumbing" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Plumbing Services</h1>
              <p className="text-white/90 text-lg max-w-xl">
                Professional plumbing installations and repairs for all your needs
              </p>
            </div>
          </div>
        </div>

        {/* Service Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Expert Plumbing Solutions</h2>
          <p className="text-gray-700 mb-4">
            Our certified plumbers provide comprehensive plumbing services for both residential and commercial
            properties. From simple repairs to complex installations, we handle all your plumbing needs with precision
            and professionalism.
          </p>
          <p className="text-gray-700 mb-4">
            We specialize in pipe installations, fixture replacements, drain cleaning, water heater services, and
            emergency plumbing repairs. Our team uses the latest tools and techniques to ensure long-lasting solutions.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Residential Services</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Bathroom and kitchen plumbing</li>
                <li>Water heater installation and repair</li>
                <li>Pipe repairs and replacements</li>
                <li>Drain cleaning and unblocking</li>
                <li>Toilet and fixture installation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Commercial Services</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Industrial pipe systems</li>
                <li>Commercial water systems</li>
                <li>Maintenance contracts</li>
                <li>Emergency plumbing services</li>
                <li>Compliance inspections</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Plumbing Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/plumbing/WhatsApp Image 2025-06-02 at 17.27.02_f29580b6.jpg"
                alt="Professional Plumbing Work"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/plumbing/WhatsApp Image 2025-06-02 at 17.25.42_0168af17.jpg"
                alt="Plumbing Installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/plumbing/WhatsApp Image 2025-06-02 at 17.14.06_38fa5dcf.jpg"
                alt="Plumbing Services"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Plumbing Services?</h2>
          <p className="text-gray-700 mb-6">Contact us for reliable and professional plumbing solutions.</p>
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
