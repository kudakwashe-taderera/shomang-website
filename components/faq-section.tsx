"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What areas do you service?",
    answer: "We provide our construction and renovation services throughout Johannesburg and surrounding areas, including Soweto, Sandton, Randburg, Pretoria, and other parts of Gauteng. For larger projects, we can consider locations across South Africa.",
  },
  {
    question: "Do you provide free quotes?",
    answer: "Yes, we provide free, detailed quotations for all our services. Our team will assess your project requirements and provide a comprehensive quote that includes material costs, labor, and estimated timeline. You can request a quote through our website or by contacting us directly.",
  },
  {
    question: "What types of projects do you handle?",
    answer: "We handle both domestic and industrial projects, including new construction, renovations, and specialized services. Our expertise covers building, plumbing, electrical work, paving, roofing, solar installations, interior design, and more. We can manage projects of any size, from small residential renovations to large commercial developments.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed and insured. Our team consists of certified professionals in various trades, and we maintain comprehensive insurance coverage for all our projects to protect both our clients and our workers.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on the scope and complexity of work. Small renovations might take a few days to weeks, while larger construction projects can take several months. During the quotation process, we provide a detailed timeline with key milestones for your specific project.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Yes, we provide warranties on both our workmanship and materials used. The warranty period varies depending on the type of work and materials, but typically ranges from 1-5 years. We also honor manufacturer warranties on all materials and equipment installed.",
  },
  {
    question: "How do you handle project payments?",
    answer: "We typically work with a milestone-based payment schedule. This includes an initial deposit to secure materials and labor, followed by progress payments at key project milestones. The final payment is due upon successful completion and client satisfaction. Specific payment terms are outlined in our project contracts.",
  },
  {
    question: "Can you help with building plans and permits?",
    answer: "Yes, we provide comprehensive assistance with building plans and permit applications. Our team can help prepare and submit necessary documentation to local authorities, ensure compliance with building codes, and manage the approval process on your behalf.",
  },
  {
    question: "Do you provide emergency services?",
    answer: "Yes, we offer emergency services for critical issues like plumbing leaks, electrical problems, or structural concerns. Our team is available to respond quickly to urgent situations to prevent further damage to your property.",
  },
  {
    question: "How do you ensure quality control?",
    answer: "We maintain strict quality control measures throughout our projects. This includes regular site inspections, adherence to industry standards, use of quality materials, and supervision by experienced project managers. We also welcome client feedback and conduct thorough final inspections before project completion.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
          >
            <button
              className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="h-5 w-5 text-primary flex-shrink-0" />
              ) : (
                <Plus className="h-5 w-5 text-primary flex-shrink-0" />
              )}
            </button>
            <div
              className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${openIndex === index ? "max-h-96 py-4" : "max-h-0"}`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 