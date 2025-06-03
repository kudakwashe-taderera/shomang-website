import Image from "next/image"
import Link from "next/link"

export default function ProjectsPreview() {
  const projects = [
    {
      id: 1,
      name: "Modern Residential Complex",
      thumbnail: "/images/luxury-house-exterior.jpg",
      category: "Domestic",
    },
    {
      id: 2,
      name: "Industrial Warehouse",
      thumbnail: "/images/building/WhatsApp Image 2025-06-02 at 17.24.04_1620b494.jpg",
      category: "Industrial",
    },
    {
      id: 3,
      name: "Office Building Renovation",
      thumbnail: "/images/building/WhatsApp Image 2025-06-02 at 17.24.03_4cff426a.jpg",
      category: "Industrial",
    },
  ]

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-4">Recent Projects</h2>
      <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        Take a look at some of our recent work across domestic and industrial sectors.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={project.thumbnail || "/placeholder.svg"}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <span className="text-sm font-medium bg-primary px-2 py-1 rounded-md mb-2 inline-block">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold">{project.name}</h3>
              </div>
            </div>
            <Link
              href={`/projects#project-${project.id}`}
              className="absolute inset-0"
              aria-label={`View ${project.name} project`}
            >
              <span className="sr-only">View project</span>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors"
        >
          View All Projects
        </Link>
      </div>
    </section>
  )
}
