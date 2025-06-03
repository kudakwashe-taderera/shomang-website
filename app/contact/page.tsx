import { Mail, Phone, MapPin, Clock, Globe2, Shield, Facebook, Instagram, LinkedinIcon } from "lucide-react"
import ContactForm from "@/components/contact-form"
import FAQSection from "@/components/faq-section"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        We're here to help with all your construction needs. Reach out to us through any of these channels.
      </p>

      {/* Main content grid */}
      <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
        {/* Contact form and quick response section - 5 columns */}
        <div className="lg:col-span-5">
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
          <ContactForm />

          {/* Quick Response Promise */}
          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="text-primary mr-3" />
              <h3 className="font-semibold">Our Promise</h3>
            </div>
            <p className="text-gray-700">
              We aim to respond to all inquiries within 24 hours. For urgent matters, please call us directly.
            </p>
          </div>
        </div>

        {/* Contact info and map section - 7 columns */}
        <div className="lg:col-span-7">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="text-primary mr-4 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-700">+27 73 150 0773</p>
                  <p className="text-gray-700">+27 67 923 1192</p>
                  <p className="text-sm text-primary mt-1">Available for emergency calls 24/7</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-primary mr-4 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-700">shomang.zendaprojects@gmail.com</p>
                  <p className="text-sm text-gray-600 mt-1">We respond to emails within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-primary mr-4 mt-1" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-gray-700">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-700">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-gray-700">Sunday: Closed</p>
                  <p className="text-sm text-primary mt-1">Available for emergencies outside business hours</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-primary mr-4 mt-1" />
                <div>
                  <p className="font-medium">Head Office</p>
                  <p className="text-gray-700">Protea Glen, Soweto, Johannesburg</p>
                  <p className="text-gray-700">South Africa, Postal Code 1818</p>
                </div>
              </div>

              <div className="flex items-start">
                <Globe2 className="text-primary mr-4 mt-1" />
                <div>
                  <p className="font-medium">Service Areas</p>
                  <p className="text-gray-700">Gauteng • Western Cape • Eastern Cape</p>
                  <p className="text-gray-700">KwaZulu-Natal • Free State • Limpopo</p>
                  <p className="text-gray-700">Mpumalanga • Northern Cape • North West</p>
                  <p className="text-sm text-gray-600 mt-1">Available for projects nationwide</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-2">
                <p className="font-medium mb-4">Connect With Us</p>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-gray-700" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-gray-700" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <LinkedinIcon className="h-5 w-5 text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map taking full width */}
          <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28577.82531377521!2d27.82499!3d-26.2683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a6083f156d37%3A0x1f9c0b43b6f48d1a!2sProtea%20Glen%2C%20Soweto%2C%201818!5e0!3m2!1sen!2sza!4v1654321234567!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shomang Zenda Projects Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 border-t pt-16">
        <FAQSection />
      </div>
    </div>
  )
}
