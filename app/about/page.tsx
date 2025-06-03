import TeamMember from "@/components/team-member"
import Timeline from "@/components/timeline"
import { Award, Users, Star } from "lucide-react"
import CertificationsGrid from "@/components/certifications-grid"
import QualityCommitment from "@/components/quality-commitment"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Mampho Mary-Ann Mbokazi Shomang",
      role: "Chief Executive Officer",
      bio: "Bachelor of Commerce (B.Com) – University of KwaZulu-Natal, Certificate in Business Management (NQF6), Postgraduate Certificate in Education (PGCE) – UNISA, FAIS Regulatory & Insurance Certifications (RE5, NQF4, COP)",
      image: "/images/team/ChatGPT Image Jun 2, 2025, 06_48_56 PM.png",
    },
    {
      name: "Talent Bernard Zenda",
      role: "Operations Manager",
      bio: "Experienced operations manager with extensive knowledge in construction project management and team coordination.",
      image: "/images/team/ChatGPT Image Jun 2, 2025, 06_50_19 PM.png",
    },
  ]

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Shomang Zenda Projects was established with a vision to provide quality construction services.",
    },
    {
      year: "2017",
      title: "First Major Project",
      description: "Completed our first large-scale industrial project.",
    },
    {
      year: "2019",
      title: "Expanded Services",
      description: "Added interior design and solar system installation to our service offerings.",
    },
    {
      year: "2021",
      title: "Regional Recognition",
      description: "Recognized as one of the top construction companies in Johannesburg.",
    },
    {
      year: "2023",
      title: "Milestone Projects",
      description: "Successfully completed over 100 projects across domestic and industrial sectors.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Shomang Zenda Projects</h1>

        {/* Company Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-primary text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <Award className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">NHBRC Registered Company</h3>
            <p>Registered with the National Home Builders Registration Council for quality assurance</p>
          </div>

          <div className="bg-primary text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <Users className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">100% Black Women Owned</h3>
            <p>Proudly contributing to transformation and diversity in the construction industry</p>
          </div>

          <div className="bg-primary text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <Star className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">135% BBBEE Level 1 Contributor</h3>
            <p>Highest level of Broad-Based Black Economic Empowerment contribution</p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg text-gray-700 mb-4">
            Shomang Zenda Projects was founded with a vision to provide exceptional construction services to both
            domestic and industrial clients. What started as a small team of dedicated professionals has grown into a
            respected name in the construction industry in Johannesburg.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our journey has been marked by a commitment to quality, innovation, and customer satisfaction. We take pride
            in our ability to deliver projects on time and within budget, while maintaining the highest standards of
            workmanship.
          </p>
          <p className="text-lg text-gray-700">
            Today, we continue to build on our reputation for excellence, taking on projects of all sizes and
            complexities, and constantly expanding our expertise to meet the evolving needs of our clients.
          </p>
        </div>

        {/* Quality Commitment Section */}
        <QualityCommitment />

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Our Mission, Vision & Values</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Mission</h3>
              <p className="text-gray-700">
                To deliver high-quality construction services that exceed client expectations while maintaining the
                highest standards of safety, integrity, and professionalism.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Vision</h3>
              <p className="text-gray-700">
                To be the leading construction company in South Africa, recognized for excellence, innovation, and
                sustainable building practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Values</h3>
              <ul className="text-gray-700 list-disc pl-5">
                <li>Integrity in all our dealings</li>
                <li>Excellence in workmanship</li>
                <li>Safety as our top priority</li>
                <li>Customer satisfaction</li>
                <li>Innovation and continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <CertificationsGrid />

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Company Milestones</h2>
          <Timeline milestones={milestones} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Management Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
