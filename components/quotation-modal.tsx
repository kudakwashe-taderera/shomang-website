"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function QuotationModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    constructionType: "",
    serviceType: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  // Handle modal visibility
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const response = await fetch("https://formspree.io/f/mgvyelww", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          constructionType: formData.constructionType,
          serviceType: formData.serviceType,
          description: formData.description,
        }),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          constructionType: "",
          serviceType: "",
          description: "",
        })

        // Reset form and close modal after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
          closeModal()
        }, 3000)
      } else {
        throw new Error("Failed to send quotation request")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitError("Failed to send quotation request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const openModal = () => {
    setIsOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsOpen(false)
    setSubmitError("")
    document.body.style.overflow = "auto"
  }

  // This allows the modal to be opened from other components
  useEffect(() => {
    const modalElement = document.getElementById("quotation-modal")

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class" && !modalElement?.classList.contains("hidden")) {
          openModal()
        }
      })
    })

    if (modalElement) {
      observer.observe(modalElement, { attributes: true })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Hidden element for external triggering */}
      <div id="quotation-modal" className="hidden"></div>

      {/* Actual modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-primary">Request Quotation</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700" aria-label="Close modal">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6">
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="text-green-500 mb-4">
                    <svg className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    Your quotation request has been submitted successfully. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                      {submitError}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="constructionType" className="block text-sm font-medium text-gray-700 mb-1">
                        Type of Construction
                      </label>
                      <select
                        id="constructionType"
                        name="constructionType"
                        value={formData.constructionType}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select Type</option>
                        <option value="Domestic">Domestic</option>
                        <option value="Industrial">Industrial</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                        Type of Service
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select Service</option>
                        <option value="Building">Building</option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Electricity">Electricity</option>
                        <option value="Carpentry">Carpentry</option>
                        <option value="Solar System">Solar System</option>
                        <option value="Interior Design">Interior Design</option>
                        <option value="Painting">Painting</option>
                        <option value="Epoxy Flooring">Epoxy Flooring</option>
                        <option value="Paving">Paving</option>
                        <option value="Dry Wall Partitioning">Dry Wall Partitioning</option>
                        <option value="Aluminium Partitioning">Aluminium Partitioning</option>
                        <option value="House Plans">House Plans</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Roofing">Roofing</option>
                        <option value="Waterproofing">Waterproofing</option>
                        <option value="HVAC Systems">HVAC Systems</option>
                        <option value="Landscaping">Landscaping</option>
                        <option value="Demolition">Demolition</option>
                        <option value="Maintenance Services">Maintenance Services</option>
                        <option value="Project Management">Project Management</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Please describe your project requirements..."
                      ></textarea>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
