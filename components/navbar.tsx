"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Home, Factory } from "lucide-react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [interiorDesignOpen, setInteriorDesignOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (isOpen) {
      setServicesOpen(false)
      setInteriorDesignOpen(false)
    }
  }

  const toggleServices = () => {
    setServicesOpen(!servicesOpen)
    if (servicesOpen) {
      setInteriorDesignOpen(false)
    }
  }

  const toggleInteriorDesign = () => {
    setInteriorDesignOpen(!interiorDesignOpen)
  }

  const openQuotationModal = () => {
    document.getElementById("quotation-modal")?.classList.remove("hidden")
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/shomang-logo.jpg"
              alt="Shomang Zenda Projects Logo"
              width={50}
              height={50}
              className="h-12 w-12 rounded-full"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">Shomang Zenda Projects</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium hover:text-primary transition-colors ${pathname === "/" ? "text-primary" : "text-gray-700"}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium hover:text-primary transition-colors ${pathname === "/about" ? "text-primary" : "text-gray-700"}`}
            >
              About
            </Link>

            {/* Enhanced Services Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center text-sm font-medium group-hover:text-primary transition-colors ${pathname?.includes("/services") ? "text-primary" : "text-gray-700"}`}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-lg rounded-md overflow-hidden z-50">
                <div className="py-2">
                  {/* Service Categories Header */}
                  <div className="px-4 py-2 bg-gray-50 border-b">
                    <p className="text-sm text-gray-700 font-medium">All our services fall under:</p>
                  </div>

                  <div className="grid grid-cols-2 gap-1 p-2">
                    <div className="flex items-center px-3 py-2 text-sm font-medium text-primary rounded hover:bg-gray-50">
                      <Home className="h-4 w-4 mr-2" />
                      <span>Domestic Services</span>
                    </div>
                    <div className="flex items-center px-3 py-2 text-sm font-medium text-primary rounded hover:bg-gray-50">
                      <Factory className="h-4 w-4 mr-2" />
                      <span>Industrial Services</span>
                    </div>
                    <Link
                      href="/services"
                      className="col-span-2 block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                    >
                      View All Services
                    </Link>
                  </div>

                  <div className="border-t border-gray-100 my-1"></div>

                  {/* Main Services */}
                  <div className="grid grid-cols-2 gap-1 p-2">
                    <Link
                      href="/services/building"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                    >
                      Building
                    </Link>
                    <Link
                      href="/services/plumbing"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                    >
                      Plumbing
                    </Link>
                    <Link
                      href="/services/electricity"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                    >
                      Electricity
                    </Link>
                    <Link
                      href="/services/carpentry"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                    >
                      Carpentry
                    </Link>
                    <Link
                      href="/services/solar-system"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                    >
                      Solar System
                    </Link>
                    <Link
                      href="/services/painting"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                    >
                      Painting
                    </Link>
                    <Link
                      href="/services/epoxy-flooring"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                    >
                      Epoxy Flooring
                    </Link>
                    <Link
                      href="/services/paving"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                    >
                      Paving (All Types)
                    </Link>
                    <Link
                      href="/services/dry-wall-partitioning"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                    >
                      Dry Wall Partitioning
                    </Link>
                    <Link
                      href="/services/aluminium-partitioning"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                    >
                      Aluminium Partitioning
                    </Link>
                    <Link
                      href="/services/house-plans"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                    >
                      House Plans
                    </Link>
                    <Link
                      href="/services/civil-engineering"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                    >
                      Civil Engineering
                    </Link>
                    <Link
                      href="/services/roofing"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                    >
                      Roofing
                    </Link>
                    <Link
                      href="/services/waterproofing"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                    >
                      Waterproofing
                    </Link>
                    <Link
                      href="/services/hvac"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                    >
                      HVAC Systems
                    </Link>
                    <Link
                      href="/services/landscaping"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                    >
                      Landscaping
                    </Link>
                    <Link
                      href="/services/demolition"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                    >
                      Demolition
                    </Link>
                    <Link
                      href="/services/maintenance"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                    >
                      Maintenance Services
                    </Link>
                    <Link
                      href="/services/project-management"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                    >
                      Project Management
                    </Link>
                  </div>

                  <div className="border-t border-gray-100 my-1"></div>

                  {/* Interior Design Submenu */}
                  <div className="relative group/interior">
                    <div className="px-4 py-2 bg-gray-50">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Interior Design</p>
                    </div>
                    <div className="grid grid-cols-2 gap-1 p-2">
                      <Link
                        href="/services/interior-design"
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                      >
                        All Interior Design
                      </Link>
                      <Link
                        href="/services/interior-design/ceiling"
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                      >
                        Ceiling
                      </Link>
                      <Link
                        href="/services/interior-design/wooden-floor"
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                      >
                        Wooden Floor
                      </Link>
                      <Link
                        href="/services/interior-design/tiling"
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white rounded"
                      >
                        Tiling
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/projects"
              className={`text-sm font-medium hover:text-primary transition-colors ${pathname === "/projects" ? "text-primary" : "text-gray-700"}`}
            >
              Projects
            </Link>
            <Link
              href="/testimonials"
              className={`text-sm font-medium hover:text-primary transition-colors ${pathname === "/testimonials" ? "text-primary" : "text-gray-700"}`}
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium hover:text-primary transition-colors ${pathname === "/contact" ? "text-primary" : "text-gray-700"}`}
            >
              Contact
            </Link>
          </nav>

          <Button
            onClick={openQuotationModal}
            className="hidden lg:inline-flex bg-primary hover:bg-primary/90 text-white"
          >
            Request Quotation
          </Button>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-gray-700 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-white shadow-lg absolute w-full left-0 top-full`}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`text-sm font-medium hover:text-primary transition-colors ${pathname === "/" ? "text-primary" : "text-gray-700"}`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium hover:text-primary transition-colors ${pathname === "/about" ? "text-primary" : "text-gray-700"}`}
              onClick={toggleMenu}
            >
              About
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                className={`flex items-center justify-between w-full text-sm font-medium hover:text-primary transition-colors ${pathname?.includes("/services") ? "text-primary" : "text-gray-700"}`}
                onClick={toggleServices}
              >
                Services{" "}
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <div className="py-2 border-b border-gray-100">
                    <p className="text-sm text-gray-700 font-medium">All our services fall under:</p>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center text-sm font-medium text-primary">
                        <Home className="h-4 w-4 mr-2" />
                        <span>Domestic Services</span>
                      </div>
                      <div className="flex items-center text-sm font-medium text-primary">
                        <Factory className="h-4 w-4 mr-2" />
                        <span>Industrial Services</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/services"
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    All Services
                  </Link>
                  <Link
                    href="/services/building"
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Building
                  </Link>
                  <Link
                    href="/services/plumbing"
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Plumbing
                  </Link>
                  <Link
                    href="/services/electricity"
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Electricity
                  </Link>
                  <Link
                    href="/services/carpentry"
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Carpentry
                  </Link>
                  <Link
                    href="/services/solar-system"
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Solar System
                  </Link>

                  {/* Add to mobile menu before the Interior Design section */}
                  <Link
                    href="/services/waterproofing"
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Waterproofing
                  </Link>
                  <Link
                    href="/services/hvac"
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    HVAC Systems
                  </Link>
                  <Link
                    href="/services/landscaping"
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Landscaping
                  </Link>
                  <Link
                    href="/services/demolition"
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Demolition
                  </Link>
                  <Link
                    href="/services/maintenance"
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Maintenance Services
                  </Link>
                  <Link
                    href="/services/project-management"
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Project Management
                  </Link>

                  {/* Mobile Interior Design Submenu */}
                  <div>
                    <button
                      className="flex items-center justify-between w-full text-sm text-gray-700 hover:text-primary"
                      onClick={toggleInteriorDesign}
                    >
                      Interior Design{" "}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${interiorDesignOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {interiorDesignOpen && (
                      <div className="pl-4 mt-2 space-y-2">
                        <Link
                          href="/services/interior-design/ceiling"
                          className="block text-sm text-gray-700 hover:text-primary"
                          onClick={toggleMenu}
                        >
                          Ceiling
                        </Link>
                        <Link
                          href="/services/interior-design/wooden-floor"
                          className="block text-sm text-gray-700 hover:text-primary"
                          onClick={toggleMenu}
                        >
                          Wooden Floor
                        </Link>
                        <Link
                          href="/services/interior-design/tiling"
                          className="block text-sm text-gray-700 hover:text-primary"
                          onClick={toggleMenu}
                        >
                          Tiling
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/services/painting"
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Painting
                  </Link>
                  <Link
                    href="/services/epoxy-flooring"
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Epoxy Flooring
                  </Link>
                  <Link
                    href="/services/paving"
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Paving (All Types)
                  </Link>
                  <Link
                    href="/services/dry-wall-partitioning"
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Dry Wall Partitioning
                  </Link>
                  <Link
                    href="/services/aluminium-partitioning"
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Aluminium Partitioning
                  </Link>
                  <Link
                    href="/services/house-plans"
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    House Plans
                  </Link>
                  <Link
                    href="/services/civil-engineering"
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Civil Engineering
                  </Link>
                  <Link
                    href="/services/roofing"
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Roofing
                  </Link>
                  <Link
                    href="/services/waterproofing"
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Waterproofing
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/projects"
              className={`text-sm font-medium hover:text-primary transition-colors ${pathname === "/projects" ? "text-primary" : "text-gray-700"}`}
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="/testimonials"
              className={`text-sm font-medium hover:text-primary transition-colors ${pathname === "/testimonials" ? "text-primary" : "text-gray-700"}`}
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium hover:text-primary transition-colors ${pathname === "/contact" ? "text-primary" : "text-gray-700"}`}
              onClick={toggleMenu}
            >
              Contact
            </Link>

            <Button
              onClick={() => {
                openQuotationModal()
                toggleMenu()
              }}
              className="bg-primary hover:bg-primary/90 text-white w-full"
            >
              Request Quotation
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
