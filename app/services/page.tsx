import ServiceCard from "@/components/service-card"
import {
  Building,
  Droplet,
  Lightbulb,
  Hammer,
  Sun,
  Paintbrush,
  Home,
  Layers,
  RouteIcon as Road,
  Wrench,
  Shield,
  Zap,
  TreePine,
  HardHat,
  Ruler,
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Building",
      description: "Complete building services for new constructions and renovations.",
      icon: <Building className="h-10 w-10 text-primary" />,
      link: "/services/building",
    },
    {
      title: "Plumbing",
      description: "Professional plumbing installations and repairs for domestic and industrial properties.",
      icon: <Droplet className="h-10 w-10 text-primary" />,
      link: "/services/plumbing",
    },
    {
      title: "Electricity",
      description: "Electrical installations, maintenance, and repairs by certified electricians.",
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      link: "/services/electricity",
    },
    {
      title: "Carpentry",
      description: "Custom carpentry work for both structural and decorative elements.",
      icon: <Hammer className="h-10 w-10 text-primary" />,
      link: "/services/carpentry",
    },
    {
      title: "Solar System",
      description: "Sustainable energy solutions with solar panel installation and maintenance.",
      icon: <Sun className="h-10 w-10 text-primary" />,
      link: "/services/solar-system",
    },
    {
      title: "Interior Design",
      description: "Comprehensive interior design services including ceiling, wooden floor, and tiling.",
      icon: <Home className="h-10 w-10 text-primary" />,
      link: "/services/interior-design",
    },
    {
      title: "Painting",
      description: "Professional painting services for interior and exterior surfaces.",
      icon: <Paintbrush className="h-10 w-10 text-primary" />,
      link: "/services/painting",
    },
    {
      title: "Epoxy Flooring",
      description: "Durable and attractive epoxy flooring solutions for industrial and commercial spaces.",
      icon: <Layers className="h-10 w-10 text-primary" />,
      link: "/services/epoxy-flooring",
    },
    {
      title: "Paving (All Types)",
      description: "Complete paving solutions including driveways, walkways, and parking areas.",
      icon: <Road className="h-10 w-10 text-primary" />,
      link: "/services/paving",
    },
    {
      title: "Dry Wall Partitioning",
      description: "Modern dry wall partitioning for office spaces and residential areas.",
      icon: <Layers className="h-10 w-10 text-primary" />,
      link: "/services/dry-wall-partitioning",
    },
    {
      title: "Aluminium Partitioning",
      description: "Sleek aluminium partitioning solutions for modern office environments.",
      icon: <Layers className="h-10 w-10 text-primary" />,
      link: "/services/aluminium-partitioning",
    },
    {
      title: "House Plans",
      description: "Professional architectural planning and design services.",
      icon: <Ruler className="h-10 w-10 text-primary" />,
      link: "/services/house-plans",
    },
    {
      title: "Civil Engineering",
      description: "Civil engineering projects including tar roads and infrastructure development.",
      icon: <Road className="h-10 w-10 text-primary" />,
      link: "/services/civil-engineering",
    },
    {
      title: "Roofing",
      description: "Complete roofing solutions including installation, repairs, and maintenance.",
      icon: <HardHat className="h-10 w-10 text-primary" />,
      link: "/services/roofing",
    },
    {
      title: "Waterproofing",
      description: "Professional waterproofing services for basements, roofs, and foundations.",
      icon: <Shield className="h-10 w-10 text-primary" />,
      link: "/services/waterproofing",
    },
    {
      title: "HVAC Systems",
      description: "Heating, ventilation, and air conditioning installation and maintenance.",
      icon: <Zap className="h-10 w-10 text-primary" />,
      link: "/services/hvac",
    },
    {
      title: "Landscaping",
      description: "Professional landscaping and garden design services.",
      icon: <TreePine className="h-10 w-10 text-primary" />,
      link: "/services/landscaping",
    },
    {
      title: "Demolition",
      description: "Safe and efficient demolition services for residential and commercial properties.",
      icon: <Hammer className="h-10 w-10 text-primary" />,
      link: "/services/demolition",
    },
    {
      title: "Maintenance Services",
      description: "Ongoing maintenance and repair services for all types of properties.",
      icon: <Wrench className="h-10 w-10 text-primary" />,
      link: "/services/maintenance",
    },
    {
      title: "Project Management",
      description: "Complete project management services from planning to completion.",
      icon: <HardHat className="h-10 w-10 text-primary" />,
      link: "/services/project-management",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
      <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        We offer a comprehensive range of construction services for both domestic and industrial clients. Our team of
        skilled professionals ensures high-quality workmanship on every project.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  )
}
