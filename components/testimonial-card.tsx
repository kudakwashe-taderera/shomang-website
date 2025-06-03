import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  quote: string
  rating: number
  photo: string
}

export default function TestimonialCard({ name, quote, rating, photo }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Image src={photo || "/placeholder.svg"} alt={name} width={60} height={60} className="rounded-full mr-4" />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
            ))}
            {[...Array(5 - rating)].map((_, i) => (
              <Star key={i + rating} className="h-4 w-4 text-gray-300" />
            ))}
          </div>
        </div>
      </div>
      <blockquote>
        <p className="text-gray-700 italic">"{quote}"</p>
      </blockquote>
    </div>
  )
}
