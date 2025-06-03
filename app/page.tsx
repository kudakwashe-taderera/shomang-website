import Hero from "@/components/hero"
import ServicesGrid from "@/components/services-grid"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import ProjectsPreview from "@/components/projects-preview"
import CallToAction from "@/components/call-to-action"
import StatsSection from "@/components/stats-section"
import WhyChooseUs from "@/components/why-choose-us"
import CompanyHighlights from "@/components/company-highlights"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - First impression */}
      <Hero />

      {/* Stats Section - Immediately show credibility */}
      <StatsSection />

      <div className="container mx-auto px-4 py-12">
        {/* Welcome Section - Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Welcome to Shomang Zenda Projects</h2>
          <p className="text-lg text-gray-700 text-center mb-6">
            We are a leading construction company specializing in both domestic and industrial projects. With years of
            experience and a dedicated team of professionals, we deliver excellence in every project we undertake.
          </p>
          <p className="text-lg text-gray-700 text-center mb-8">
            From residential renovations to large-scale industrial developments, our commitment to quality, safety, and 
            client satisfaction remains unwavering. We serve clients across South Africa with innovative solutions and 
            exceptional craftsmanship.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/about"
              className="px-6 py-3 bg-white text-primary border-2 border-primary rounded-md font-medium hover:bg-primary hover:text-white transition-colors"
            >
              Learn More About Us
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>

        {/* Company Highlights - Show credentials */}
        <CompanyHighlights />

        {/* Why Choose Us - Build trust */}
        <WhyChooseUs />

        {/* Services Grid - Show what we offer */}
        <ServicesGrid />

        {/* Projects Preview - Show proof of work */}
        <ProjectsPreview />

        {/* Testimonials - Social proof */}
        <TestimonialsCarousel />

        {/* Call to Action - Final CTA */}
        <div className="bg-primary/5 rounded-2xl p-8">
          <CallToAction />
        </div>
      </div>
    </div>
  )
}
