"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"
import ThankYouModal from "./thank-you-modal"

interface TestimonialFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function TestimonialForm({ isOpen, onClose }: TestimonialFormProps) {
  const [rating, setRating] = useState(5)
  const [showThankYou, setShowThankYou] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "domestic",
    testimonial: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", { ...formData, rating })
    setShowThankYou(true)
  }

  const handleClose = () => {
    setShowThankYou(false)
    setFormData({
      name: "",
      email: "",
      projectType: "domestic",
      testimonial: "",
    })
    setRating(5)
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 relative max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            ×
          </button>

          <h2 className="text-2xl font-semibold mb-6">Share Your Experience</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                Project Type
              </label>
              <select
                id="projectType"
                className="w-full rounded-md border border-gray-300 px-3 py-2"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              >
                <option value="domestic">Domestic Project</option>
                <option value="industrial">Industrial Project</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`h-6 w-6 ${
                        star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-1">
                Your Testimonial
              </label>
              <Textarea
                id="testimonial"
                required
                value={formData.testimonial}
                onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
                placeholder="Share your experience working with us..."
                className="h-32"
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="bg-primary text-white hover:bg-primary/90 w-full">
                Submit Testimonial
              </Button>
              <Button type="button" variant="outline" onClick={onClose} className="w-full">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>

      <ThankYouModal 
        isOpen={showThankYou} 
        onClose={handleClose}
      />
    </>
  )
} 