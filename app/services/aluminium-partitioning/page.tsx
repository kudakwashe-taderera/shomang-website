"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceHeroSvg from "@/components/service-hero-svg"

export default function AluminiumPartitioningServicePage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Aluminium Partitioning</h1>
              <p className="text-white/90 text-lg max-w-xl">
                Sleek aluminium partitioning solutions for modern office environments
              </p>
            </div>
          </div>
        </div>

        {/* Service Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Modern Aluminium Partition Systems</h2>
          <p className="text-gray-700 mb-4">
            Our aluminium partitioning systems offer contemporary, professional solutions for modern office spaces.
            These sleek, durable partitions provide excellent functionality while maintaining an elegant aesthetic that
            enhances any workspace.
          </p>
          <p className="text-gray-700 mb-4">
            Aluminium partitions are ideal for creating flexible office layouts, meeting rooms, and reception areas.
            They offer superior durability, easy maintenance, and can incorporate glass panels for natural light flow.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Office Solutions</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Executive office partitions</li>
                <li>Conference room divisions</li>
                <li>Reception area partitions</li>
                <li>Open plan office divisions</li>
                <li>Acoustic partitions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Features & Benefits</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Sleek modern appearance</li>
                <li>Durable and long-lasting</li>
                <li>Easy to clean and maintain</li>
                <li>Flexible and relocatable</li>
                <li>Glass integration options</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Aluminium Partitioning Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=400&width=400`}
                  alt={`Aluminium Partitioning Project ${i}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Modern Office Partitions?</h2>
          <p className="text-gray-700 mb-6">
            Create professional spaces with our sleek aluminium partitioning systems.
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
