"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { BookingButton } from "./booking-button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Get all sections with header offset
      const sections = ["home", "services", "pricing", "gallery", "contact"]
      const headerHeight = 80 // Account for fixed header
      const scrollPosition = window.scrollY + headerHeight

      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-orange-600 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary">
            BARBER<span className="text-gold">PRO</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 relative ${
                    isActive
                      ? "text-black bg-primary font-semibold"
                      : "text-cream hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-black rounded-full" />
                  )}
                </button>
              )
            })}
            <BookingButton className="ml-4 bg-primary hover:bg-primary/90 text-black font-semibold">
              Book Now
            </BookingButton>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-cream" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-black/95 backdrop-blur-sm border-t border-primary/20">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 relative ${
                      isActive
                        ? "text-black bg-primary font-semibold"
                        : "text-cream hover:text-primary hover:bg-primary/10"
                    }`}
                  >
                    {item.name}
                    {isActive && <div className="absolute bottom-1 left-4 w-6 h-0.5 bg-black rounded-full" />}
                  </button>
                )
              })}
              <BookingButton className="w-full mt-4 bg-primary hover:bg-primary/90 text-black font-semibold">
                Book Now
              </BookingButton>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
