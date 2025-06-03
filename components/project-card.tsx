"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface Project {
  id: number
  name: string
  summary: string
  thumbnail: string
  description: string
  clientType: string
  clientName?: string
  clientPosition?: string
  location?: string
  images: string[]
  date: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setModalOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <div
        id={`project-${project.id}`}
        className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
        onClick={openModal}
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
              {project.clientType}
            </span>
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="text-sm text-white/90">{project.summary}</p>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-primary">{project.name}</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700" aria-label="Close modal">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
                  <Image
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {project.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-[4/3] relative rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.name} - Image ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Project Details</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Client Type</p>
                    <p className="font-medium">{project.clientType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Completion Date</p>
                    <p className="font-medium">{project.date}</p>
                  </div>
                  {project.location && (
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">{project.location}</p>
                    </div>
                  )}
                  {project.clientName && (
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="font-medium">{project.clientName}</p>
                      {project.clientPosition && <p className="text-sm text-gray-500">{project.clientPosition}</p>}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
