interface Milestone {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  milestones: Milestone[]
}

export default function Timeline({ milestones }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary"></div>

      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative pl-12">
            {/* Circle marker */}
            <div className="absolute left-0 top-1.5 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
              {milestone.year.slice(-2)}
            </div>

            <div>
              <div className="flex items-center mb-2">
                <h3 className="text-lg font-semibold">{milestone.title}</h3>
                <span className="ml-2 text-sm text-gray-500">{milestone.year}</span>
              </div>
              <p className="text-gray-700">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
