"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceHeroSvg from "@/components/service-hero-svg"

export default function ProjectManagementServicePage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Project Management</h1>
              <p className="text-white/90 text-lg max-w-xl">
                Complete project management services from planning to completion
              </p>
            </div>
          </div>
        </div>

        {/* Service Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Professional Project Management</h2>
          <p className="text-gray-700 mb-4">
            Our experienced project managers oversee every aspect of your construction project, ensuring it's completed
            on time, within budget, and to the highest quality standards. We coordinate all trades, manage schedules,
            and maintain clear communication throughout the project lifecycle.
          </p>
          <p className="text-gray-700 mb-4">
            From initial planning and design coordination to final handover, our project management team ensures smooth
            execution and successful delivery of your construction project, regardless of size or complexity.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Planning & Coordination</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Project planning and scheduling</li>
                <li>Resource allocation</li>
                <li>Contractor coordination</li>
                <li>Permit and approval management</li>
                <li>Risk assessment and mitigation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Execution & Control</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Quality control and assurance</li>
                <li>Budget management</li>
                <li>Progress monitoring</li>
                <li>Communication management</li>
                <li>Final inspection and handover</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Project Management Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=400&width=400`}
                  alt={`Project Management ${i}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Professional Project Management?</h2>
          <p className="text-gray-700 mb-6">
            Ensure your project's success with our expert project management services.
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
