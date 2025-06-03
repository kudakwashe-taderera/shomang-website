"use client"

import { Award, Users, CheckCircle2, Clock } from "lucide-react"

export default function StatsSection() {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-primary mb-4" />,
      value: "500+",
      label: "Happy Clients",
    },
    {
      icon: <CheckCircle2 className="h-8 w-8 text-primary mb-4" />,
      value: "1000+",
      label: "Projects Completed",
    },
    {
      icon: <Award className="h-8 w-8 text-primary mb-4" />,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary mb-4" />,
      value: "24/7",
      label: "Support Available",
    },
  ]

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {stat.icon}
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 