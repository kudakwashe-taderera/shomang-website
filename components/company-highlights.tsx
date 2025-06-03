import { Award, Users, Star } from "lucide-react"

export default function CompanyHighlights() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">Why Trust Us</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border-2 border-primary/10 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <Award className="h-8 w-8 text-primary mr-3" />
            <h3 className="text-xl font-semibold">NHBRC Registered</h3>
          </div>
          <p className="text-gray-600">
            We're registered with the National Home Builders Registration Council, ensuring our commitment to quality construction standards.
          </p>
        </div>

        <div className="bg-white border-2 border-primary/10 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <Users className="h-8 w-8 text-primary mr-3" />
            <h3 className="text-xl font-semibold">100% Black Women Owned</h3>
          </div>
          <p className="text-gray-600">
            Proudly contributing to transformation and diversity in the South African construction industry.
          </p>
        </div>

        <div className="bg-white border-2 border-primary/10 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <Star className="h-8 w-8 text-primary mr-3" />
            <h3 className="text-xl font-semibold">BBBEE Level 1</h3>
          </div>
          <p className="text-gray-600">
            135% B-BBEE procurement recognition as a Level 1 contributor to economic transformation.
          </p>
        </div>
      </div>
    </div>
  )
} 