import { Shield, HardHat, ClipboardCheck, Scale } from "lucide-react"

export default function QualityCommitment() {
  const commitments = [
    {
      icon: <HardHat className="h-8 w-8 text-primary mb-4" />,
      title: "Safety First",
      description: "Rigorous safety protocols and regular training ensure the wellbeing of our team and clients."
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-primary mb-4" />,
      title: "Quality Control",
      description: "Comprehensive quality management system with regular inspections and assessments."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary mb-4" />,
      title: "Compliance",
      description: "Full compliance with South African building regulations and industry standards."
    },
    {
      icon: <Scale className="h-8 w-8 text-primary mb-4" />,
      title: "Best Practices",
      description: "Implementation of international construction best practices and methodologies."
    }
  ]

  return (
    <div className="bg-gray-50 py-12 px-4 rounded-xl mb-16">
      <h2 className="text-2xl font-semibold mb-8 text-center">Our Commitment to Quality & Safety</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {commitments.map((item, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 