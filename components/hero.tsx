"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const openQuotationModal = () => {
    document.getElementById("quotation-modal")?.classList.remove("hidden")
  }

  return (
    <section className="relative bg-primary text-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Trusted Excellence in Domestic & Industrial Construction
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-lg mx-auto md:mx-0">
              Building your vision with precision, quality, and dedication. From residential projects to industrial
              solutions, we deliver excellence in every detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                onClick={openQuotationModal}
                className="bg-white text-primary hover:bg-white/90 text-base px-8 py-6"
                size="lg"
              >
                Request Quotation
              </Button>
              <Button
                asChild
                className="bg-white text-primary hover:bg-white/90 text-base px-8 py-6"
                size="lg"
              >
                <a href="/services">Our Services</a>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/images/luxury-house-exterior.jpg"
              alt="Luxury Modern House Construction"
              width={600}
              height={500}
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute bottom-0 left-0 w-full h-16 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)" }}
      ></div>
    </section>
  )
}
