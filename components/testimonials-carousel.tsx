"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

function getAvatarUrl(name: string) {
  // Using DiceBear Avatars with 'initials' style - matching the testimonials page
  const formattedName = encodeURIComponent(name.trim())
  return `https://api.dicebear.com/7.x/initials/svg?seed=${formattedName}&backgroundColor=0284c7`
}

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      name: "Modiba J",
      company: "DIBA Properties & DIBA Attorneys",
      quote:
        "Shomang Zenda Projects delivered exceptional quality for our student accommodation project in Bloemfontein. Their attention to detail on the built-in kitchens and wardrobes exceeded our expectations.",
      rating: 5,
      photo: getAvatarUrl("Modiba J"),
    },
    {
      name: "Njabulo",
      company: "Dangwani Hostel",
      quote:
        "From initial plan design to final construction, Shomang Zenda Projects handled our hostel development in Eastern Cape with professionalism and expertise. The results were outstanding.",
      rating: 5,
      photo: getAvatarUrl("Njabulo"),
    },
    {
      name: "Zush",
      company: "Residential Client",
      quote:
        "Our home construction project was managed perfectly from start to finish. The team was responsive, skilled, and delivered exactly what we envisioned for our family home.",
      rating: 5,
      photo: getAvatarUrl("Zush"),
    },
    {
      name: "Zuko Nodada",
      company: "Founder of Final Chapter Productions",
      quote:
        "As a production company founder, I needed specific requirements for my residential build. Shomang Zenda Projects understood my vision and created a perfect space that combines home comfort with professional functionality.",
      rating: 5,
      photo: getAvatarUrl("Zuko Nodada"),
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gray-50 rounded-lg">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>

        <div className="relative">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              <Image
                src={testimonials[currentIndex].photo || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                width={100}
                height={100}
                className="rounded-full border-4 border-white shadow-md"
              />
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded-full shadow-sm">
                <div className="flex">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            <blockquote className="mb-6">
              <p className="text-lg italic text-gray-700">"{testimonials[currentIndex].quote}"</p>
            </blockquote>

            <div>
              <p className="font-semibold text-primary">{testimonials[currentIndex].name}</p>
              <p className="text-gray-600">{testimonials[currentIndex].company}</p>
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md border-gray-200 rounded-full md:-left-12"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md border-gray-200 rounded-full md:-right-12"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${index === currentIndex ? "bg-primary" : "bg-gray-300"}`}
              onClick={() => {
                setAutoplay(false)
                setCurrentIndex(index)
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/testimonials" className="inline-flex items-center text-primary font-medium hover:underline">
            View All Testimonials
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
