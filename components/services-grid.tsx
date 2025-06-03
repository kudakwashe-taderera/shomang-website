import Link from "next/link"
import { Building, Droplet, Lightbulb, Hammer, Sun, Home } from "lucide-react"

export default function ServicesGrid() {
  const services = [
    {
      title: "Building",
      description: "Complete building services for new constructions and renovations.",
      icon: <Building className="h-10 w-10 text-primary" />,
      link: "/services/building",
    },
    {
      title: "Plumbing",
      description: "Professional plumbing installations and repairs.",
      icon: <Droplet className="h-10 w-10 text-primary" />,
      link: "/services/plumbing",
    },
    {
      title: "Electricity",
      description: "Electrical installations, maintenance, and repairs.",
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      link: "/services/electricity",
    },
    {
      title: "Carpentry",
      description: "Custom carpentry work for structural and decorative elements.",
      icon: <Hammer className="h-10 w-10 text-primary" />,
      link: "/services/carpentry",
    },
    {
      title: "Solar System",
      description: "Sustainable energy solutions with solar panel installation.",
      icon: <Sun className="h-10 w-10 text-primary" />,
      link: "/services/solar-system",
    },
    {
      title: "Interior Design",
      description: "Comprehensive interior design services.",
      icon: <Home className="h-10 w-10 text-primary" />,
      link: "/services/interior-design",
    },
  ]

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
      <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        We offer a comprehensive range of construction services for both domestic and industrial clients.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <Link href={service.link} className="text-primary font-medium hover:underline inline-flex items-center">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/services"
          className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors"
        >
          View All Services
        </Link>
      </div>
    </section>
  )
}
