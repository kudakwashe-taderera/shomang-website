import ProjectCard from "@/components/project-card"
import { Building, Home, GraduationCap, Users, MapPin, CheckCircle, Calendar } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: "DIBA Properties Student Accommodation",
      summary: "Built-in kitchens and wardrobes for student accommodation in Bloemfontein",
      thumbnail: "/images/built-in/WhatsApp Image 2025-06-02 at 17.18.38_8e9a8af7.jpg",
      description:
        "This project involved the design and installation of custom built-in kitchens and wardrobes for DIBA Properties' student accommodation in Bloemfontein. The work included high-quality cabinetry, countertops, and storage solutions designed specifically for student living spaces.",
      clientType: "Commercial",
      clientName: "Modiba J",
      clientPosition: "CEO of DIBA Properties & DIBA Attorneys",
      location: "Bloemfontein",
      images: [
        "/images/built-in/WhatsApp Image 2025-06-02 at 17.18.38_8e9a8af7.jpg",
        "/images/built-in/WhatsApp Image 2025-06-02 at 17.18.38_782190b7.jpg",
        "/images/built-in/WhatsApp Image 2025-06-02 at 17.18.38_7abc0b18.jpg",
      ],
      date: "January 2023",
    },
    {
      id: 2,
      name: "Dangwani Hostel",
      summary: "Plan design and full construction of hostel facilities in Eastern Cape",
      thumbnail: "/images/building/WhatsApp Image 2025-06-02 at 17.24.04_1620b494.jpg",
      description:
        "A comprehensive project that included architectural planning, design, and complete construction of the Dangwani Hostel in Eastern Cape. The project encompassed structural work, electrical and plumbing installations, interior finishes, and exterior development.",
      clientType: "Commercial",
      clientName: "Njabulo",
      clientPosition: "Project Manager",
      location: "Eastern Cape",
      images: [
        "/images/building/WhatsApp Image 2025-06-02 at 17.24.04_1620b494.jpg",
        "/images/building/WhatsApp Image 2025-06-02 at 17.24.03_4cff426a.jpg",
        "/images/building/WhatsApp Image 2025-06-02 at 17.13.17_e638cd29.jpg",
      ],
      date: "March 2023",
    },
    {
      id: 3,
      name: "Residential House Construction",
      summary: "Complete residential project from foundation to finishing",
      thumbnail: "/images/luxury-house-exterior.jpg",
      description:
        "A full residential construction project that included foundation work, structural building, roofing, electrical and plumbing installations, interior finishing, and exterior landscaping. The project delivered a beautiful, functional home that met all the client's specifications.",
      clientType: "Domestic",
      clientName: "Zush",
      clientPosition: "Property Owner",
      location: "Johannesburg",
      images: [
        "/images/luxury-house-exterior.jpg",
        "/images/modern-living-room.jpg",
        "/images/modern-kitchen-blue.jpg",
      ],
      date: "June 2023",
    },
    {
      id: 4,
      name: "Final Chapter Productions",
      summary: "Residential build for production company founder",
      thumbnail: "/images/house-3d-render.jpg",
      description:
        "Custom residential construction project for the founder of Final Chapter Productions. The project included specialized spaces for home office and production needs, along with standard residential features. The design incorporated modern aesthetics with functional work spaces.",
      clientType: "Domestic",
      clientName: "Zuko Nodada",
      clientPosition: "Founder of Final Chapter Productions",
      location: "Pretoria",
      images: [
        "/images/house-3d-render.jpg",
        "/images/luxury-kitchen-black.jpg",
        "/images/tv-wall-unit.jpg",
      ],
      date: "September 2023",
    },
    {
      id: 5,
      name: "Primary School Renovation",
      summary: "Complete renovation of classrooms and administrative buildings",
      thumbnail: "/images/building/WhatsApp Image 2025-06-02 at 17.13.17_f5ed512c.jpg",
      description:
        "Comprehensive renovation project for a primary school that included classroom modernization, administrative building upgrades, bathroom renovations, and playground improvements. The project was completed during school holidays to minimize disruption.",
      clientType: "Educational",
      clientName: "School Board",
      clientPosition: "Local Primary School",
      location: "Soweto",
      images: [
        "/images/building/WhatsApp Image 2025-06-02 at 17.13.17_f5ed512c.jpg",
        "/images/building/WhatsApp Image 2025-06-02 at 17.13.17_7e0f8e2e.jpg",
        "/images/building/WhatsApp Image 2025-06-02 at 17.13.17_e638cd29.jpg",
      ],
      date: "November 2023",
    },
    {
      id: 6,
      name: "Commercial Paving Project",
      summary: "Large-scale paving for shopping center parking area",
      thumbnail: "/images/paving/WhatsApp Image 2025-06-02 at 17.11.09_6dbcbc8e.jpg",
      description:
        "Installation of durable paving for a shopping center parking area, covering over 5,000 square meters. The project included drainage solutions, line marking, and traffic flow optimization to improve customer experience and maximize parking capacity.",
      clientType: "Commercial",
      clientName: "Shopping Center Management",
      clientPosition: "Property Development Group",
      location: "Randburg",
      images: [
        "/images/paving/WhatsApp Image 2025-06-02 at 17.11.09_6dbcbc8e.jpg",
        "/images/paving/WhatsApp Image 2025-06-02 at 17.11.09_364856f8.jpg",
        "/images/paving/WhatsApp Image 2025-06-02 at 17.11.09_d1687933.jpg",
      ],
      date: "February 2024",
    },
    {
      id: 7,
      name: "Luxury Bathroom Tiling",
      summary: "High-end tiling installation for residential bathrooms",
      thumbnail: "/images/built-in/WhatsApp Image 2025-06-02 at 17.18.38_56bca2da.jpg",
      description:
        "Installation of premium imported tiles for multiple bathrooms in a luxury residence. The project featured intricate mosaic work, heated flooring systems, and custom shower enclosures with specialized waterproofing solutions.",
      clientType: "Domestic",
      clientName: "Private Client",
      clientPosition: "Homeowner",
      location: "Sandton",
      images: [
        "/images/built-in/WhatsApp Image 2025-06-02 at 17.18.38_56bca2da.jpg",
        "/images/built-in/WhatsApp Image 2025-06-02 at 17.18.38_b46182f6.jpg",
        "/images/white-kitchen-cabinets.jpg",
      ],
      date: "April 2024",
    },
    {
      id: 8,
      name: "Office Building Renovation",
      summary: "Modern workspace transformation for corporate client",
      thumbnail: "/images/building/WhatsApp Image 2025-06-02 at 17.24.03_4cff426a.jpg",
      description:
        "Complete renovation of a three-story office building to create a modern, collaborative workspace. The project included structural modifications, new electrical and IT infrastructure, custom partitioning, acoustic ceiling installations, and contemporary interior design elements.",
      clientType: "Commercial",
      clientName: "Corporate Management",
      clientPosition: "Financial Services Firm",
      location: "Johannesburg CBD",
      images: [
        "/images/building/WhatsApp Image 2025-06-02 at 17.24.03_4cff426a.jpg",
        "/images/building/WhatsApp Image 2025-06-02 at 17.24.04_1620b494.jpg",
        "/images/modern-living-room.jpg",
      ],
      date: "May 2024",
    },
  ]

  // Calculate statistics
  const statistics = {
    totalProjects: "1000+",
    completedIn: "15+",
    clientTypes: "500+",
    locations: "24/7"
  }

  // Get unique categories
  const categories = {
    types: [...new Set(projects.map(p => p.clientType))],
    locations: [...new Set(projects.map(p => p.location))]
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Projects</h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Explore our portfolio of successful projects across South Africa, showcasing our expertise in construction, renovation, and development.
      </p>

      {/* Statistics Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 bg-white rounded-xl shadow-md p-8">
        <div className="text-center">
          <div className="flex justify-center mb-2">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <div className="text-2xl font-bold text-primary">{statistics.totalProjects}</div>
          <div className="text-gray-600">Projects Completed</div>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-2">
            <Calendar className="h-8 w-8 text-primary" />
          </div>
          <div className="text-2xl font-bold text-primary">{statistics.completedIn}</div>
          <div className="text-gray-600">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-2">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <div className="text-2xl font-bold text-primary">{statistics.clientTypes}</div>
          <div className="text-gray-600">Happy Clients</div>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-2">
            <MapPin className="h-8 w-8 text-primary" />
          </div>
          <div className="text-2xl font-bold text-primary">{statistics.locations}</div>
          <div className="text-gray-600">Support Available</div>
        </div>
      </div>

      {/* Project Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Project Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <Building className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold">Commercial</h3>
              <p className="text-sm text-gray-600">Office buildings, shopping centers</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <Home className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold">Residential</h3>
              <p className="text-sm text-gray-600">Houses, apartments, renovations</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <GraduationCap className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold">Educational</h3>
              <p className="text-sm text-gray-600">Schools, student accommodation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <select className="border rounded-md p-2 bg-white">
          <option value="">Filter by Type</option>
          {categories.types.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <select className="border rounded-md p-2 bg-white">
          <option value="">Filter by Location</option>
          {categories.locations.map((location) => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search projects..."
          className="border rounded-md p-2 bg-white"
        />
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Start Your Project with Us</h2>
        <p className="mb-6">Ready to bring your construction project to life? Contact us for a free consultation.</p>
        <a 
          href="/contact" 
          className="inline-block bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </div>
  )
}
