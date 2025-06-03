import Image from "next/image"

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  image: string
}

export default function TeamMember({ name, role, bio, image }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-square relative">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-primary font-medium mb-2">{role}</p>
        <p className="text-gray-700 text-sm">{bio}</p>
      </div>
    </div>
  )
}
