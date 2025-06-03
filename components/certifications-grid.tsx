import { Award, HardHat, Building2, Shield } from "lucide-react"

export default function CertificationsGrid() {
  const certifications = [
    {
      name: "NHBRC",
      icon: <Building2 className="h-12 w-12 text-primary" />,
      description: "National Home Builders Registration Council",
      fullName: "National Home Builders Registration Council",
      details: "Ensuring quality home building standards"
    },
    {
      name: "CIDB",
      icon: <HardHat className="h-12 w-12 text-primary" />,
      description: "Construction Industry Development Board",
      fullName: "Construction Industry Development Board",
      details: "Driving construction industry growth"
    },
    {
      name: "SACPCMP",
      icon: <Award className="h-12 w-12 text-primary" />,
      description: "SA Council for Project & Construction Management",
      fullName: "South African Council for Project and Construction Management Professions",
      details: "Excellence in project management"
    },
    {
      name: "SAIOSH",
      icon: <Shield className="h-12 w-12 text-primary" />,
      description: "SA Institute of Occupational Safety & Health",
      fullName: "South African Institute of Occupational Safety and Health",
      details: "Promoting workplace safety"
    }
  ]

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold mb-6">Our Certifications & Memberships</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow border border-gray-100"
          >
            <div className="flex justify-center mb-4">
              {cert.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{cert.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{cert.description}</p>
            <p className="text-xs text-gray-500">{cert.details}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 