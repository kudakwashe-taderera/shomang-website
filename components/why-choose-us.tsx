export default function WhyChooseUs() {
  const features = [
    {
      title: "Expertise & Experience",
      description:
        "With over 15 years in the industry, our team brings unmatched expertise to every project, ensuring the highest standards of construction and design.",
    },
    {
      title: "Quality Assurance",
      description:
        "We maintain strict quality control measures throughout our projects, using premium materials and following industry best practices.",
    },
    {
      title: "Client-Focused Approach",
      description:
        "Your vision is our priority. We work closely with you at every stage, ensuring your project meets and exceeds expectations.",
    },
  ]

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 