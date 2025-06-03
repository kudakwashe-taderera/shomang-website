"use client"

import { Button } from "@/components/ui/button"

export default function CallToAction() {
  const openQuotationModal = () => {
    document.getElementById("quotation-modal")?.classList.remove("hidden")
  }

  return (
    <section className="py-16 my-16 bg-primary text-white rounded-lg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Whether you're planning a home renovation or a large industrial project, we're here to help. Get in touch with
          us today for a free consultation and quote.
        </p>
        <Button
          onClick={openQuotationModal}
          className="bg-white text-primary hover:bg-white/90 text-base px-8 py-6"
          size="lg"
        >
          Request Quotation
        </Button>
      </div>
    </section>
  )
}
