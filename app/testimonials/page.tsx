"use client"

import { useState } from "react"
import TestimonialCard from "@/components/testimonial-card"
import TestimonialForm from "@/components/testimonial-form"
import { Button } from "@/components/ui/button"
import { Star, ThumbsUp, Award, Users, PlayCircle, Clock } from "lucide-react"

function getAvatarUrl(name: string) {
  // Using DiceBear Avatars with 'initials' style
  const formattedName = encodeURIComponent(name.trim())
  return `https://api.dicebear.com/7.x/initials/svg?seed=${formattedName}&backgroundColor=0284c7`
}

export default function TestimonialsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  
  const domesticTestimonials = [
    {
      name: "Zush",
      quote:
        "Our home construction project was managed perfectly from start to finish. The team was responsive, skilled, and delivered exactly what we envisioned for our family home.",
      rating: 5,
      photo: getAvatarUrl("Zush"),
    },
    {
      name: "Zuko Nodada",
      quote:
        "As the founder of Final Chapter Productions, I needed specific requirements for my residential build. Shomang Zenda Projects understood my vision and created a perfect space that combines home comfort with professional functionality.",
      rating: 5,
      photo: getAvatarUrl("Zuko Nodada"),
    },
    {
      name: "Thandiwe and Sipho Ndlovu",
      quote:
        "The team installed our wooden flooring in our Roodepoort home and did an amazing job. They were clean, efficient, and the finish is perfect. Highly recommended!",
      rating: 4,
      photo: getAvatarUrl("T S Ndlovu"),
    },
    {
      name: "Ahmed Patel",
      quote:
        "From design to completion, our experience with Shomang Zenda was excellent. They installed a solar system in our Lenasia home that has significantly reduced our electricity bills.",
      rating: 5,
      photo: getAvatarUrl("Ahmed Patel"),
    },
  ]

  const industrialTestimonials = [
    {
      name: "Modiba J",
      quote:
        "Shomang Zenda Projects delivered exceptional quality for our DIBA Properties student accommodation project in Bloemfontein. Their attention to detail on the built-in kitchens and wardrobes exceeded our expectations.",
      rating: 5,
      photo: getAvatarUrl("Modiba J"),
    },
    {
      name: "Njabulo",
      quote:
        "From initial plan design to final construction, Shomang Zenda Projects handled our Dangwani Hostel development in Eastern Cape with professionalism and expertise. The results were outstanding.",
      rating: 5,
      photo: getAvatarUrl("Njabulo"),
    },
    {
      name: "Tshepo Molefe",
      quote:
        "As a property developer in Johannesburg, I've worked with many construction companies, but Shomang Zenda stands out for their reliability and quality of work.",
      rating: 4,
      photo: getAvatarUrl("Tshepo Molefe"),
    },
    {
      name: "Priya Sharma",
      quote:
        "The epoxy flooring Shomang Zenda installed in our Midrand warehouse has been durable and exactly what we needed. Their team was professional and efficient.",
      rating: 5,
      photo: getAvatarUrl("Priya Sharma"),
    },
  ]

  const stats = [
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      value: "4.8",
      label: "Average Rating",
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-primary" />,
      value: "95%",
      label: "Client Satisfaction",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: "1000+",
      label: "Projects Completed",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "500+",
      label: "Happy Clients",
    },
  ]

  const videoTestimonials = [
    {
      clientName: "DIBA Properties",
      projectType: "Student Accommodation",
      thumbnail: "/images/projects/diba-properties-1.jpg",
      duration: "2:15",
    },
    {
      clientName: "Final Chapter Productions",
      projectType: "Residential Build",
      thumbnail: "/images/projects/final-chapter-1.jpg",
      duration: "1:45",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">Client Testimonials</h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Don't just take our word for it. See what our clients have to say about their experience working with Shomang
        Zenda Projects.
      </p>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            {stat.icon}
            <div className="text-3xl font-bold mt-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Video Testimonials */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Video Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {videoTestimonials.map((video, index) => (
            <div key={index} className="relative group rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={video.thumbnail}
                  alt={`${video.clientName} Testimonial`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <PlayCircle className="h-16 w-16 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-semibold">{video.clientName}</h3>
                  <p className="text-white/80 text-sm">{video.projectType}</p>
                  <span className="absolute bottom-4 right-4 text-white/80 text-sm">{video.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <Button variant="outline" className="rounded-full">All Reviews</Button>
        <Button variant="outline" className="rounded-full">Domestic</Button>
        <Button variant="outline" className="rounded-full">Industrial</Button>
        <Button variant="outline" className="rounded-full">5 Star Only</Button>
        <Button variant="outline" className="rounded-full">Most Recent</Button>
      </div>

      {/* Written Testimonials */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Domestic Clients</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {domesticTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Industrial Clients</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {industrialTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>

      {/* Share Your Experience Section */}
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Share Your Experience</h2>
        <p className="text-gray-600 mb-6">
          We value your feedback! If you've worked with us, we'd love to hear about your experience.
        </p>
        <Button 
          className="bg-primary text-white hover:bg-primary/90"
          onClick={() => setIsFormOpen(true)}
        >
          Submit Your Testimonial
        </Button>
      </div>

      {/* Testimonial Form Modal */}
      <TestimonialForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </div>
  )
}
