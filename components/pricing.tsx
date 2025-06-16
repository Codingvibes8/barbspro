import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Clock, Scissors, Star } from "lucide-react"
import { BookingButton } from "./booking-button"

export function Pricing() {
  const serviceCategories = [
    {
      title: "Haircuts & Styling",
      icon: Scissors,
      services: [
        {
          name: "Classic Cut",
          price: 45,
          duration: "45 min",
          description: "Traditional scissor cut with styling",
          popular: false,
        },
        {
          name: "Premium Cut & Style",
          price: 65,
          duration: "60 min",
          description: "Precision cut with wash, style, and finishing",
          popular: true,
        },
        {
          name: "Buzz Cut",
          price: 25,
          duration: "20 min",
          description: "Clean clipper cut, all lengths available",
          popular: false,
        },
        {
          name: "Beard Trim with Cut",
          price: 75,
          duration: "75 min",
          description: "Complete haircut with professional beard grooming",
          popular: false,
        },
      ],
    },
    {
      title: "Traditional Shaves",
      icon: Star,
      services: [
        {
          name: "Classic Hot Towel Shave",
          price: 45,
          duration: "45 min",
          description: "Traditional straight razor shave with hot towels",
          popular: true,
        },
        {
          name: "Head Shave",
          price: 35,
          duration: "30 min",
          description: "Complete head shave with hot towel treatment",
          popular: false,
        },
        {
          name: "Shave & Haircut Combo",
          price: 85,
          duration: "90 min",
          description: "Full service haircut and traditional shave",
          popular: false,
        },
      ],
    },
    {
      title: "Beard & Mustache",
      icon: Check,
      services: [
        {
          name: "Beard Trim & Shape",
          price: 35,
          duration: "30 min",
          description: "Professional beard trimming and shaping",
          popular: true,
        },
        {
          name: "Mustache Trim",
          price: 15,
          duration: "15 min",
          description: "Precision mustache grooming",
          popular: false,
        },
        {
          name: "Beard Oil Treatment",
          price: 25,
          duration: "20 min",
          description: "Deep conditioning treatment with premium oils",
          popular: false,
        },
        {
          name: "Full Beard Service",
          price: 55,
          duration: "50 min",
          description: "Complete beard grooming with wash, trim, and treatment",
          popular: false,
        },
      ],
    },
  ]

  const packages = [
    {
      name: "The Gentleman",
      price: 120,
      duration: "2 hours",
      originalPrice: 140,
      services: ["Premium Cut & Style", "Hot Towel Shave", "Beard Trim"],
      popular: true,
    },
    {
      name: "The Executive",
      price: 95,
      duration: "90 min",
      originalPrice: 110,
      services: ["Classic Cut", "Beard Trim & Shape", "Styling"],
      popular: false,
    },
    {
      name: "The Classic",
      price: 75,
      duration: "75 min",
      originalPrice: 90,
      services: ["Classic Cut", "Hot Towel Shave"],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-cream mb-4">
            Service <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-xl text-cream/70 max-w-2xl mx-auto">
            Transparent pricing for premium grooming services. Quality you can trust, prices you can afford.
          </p>
        </div>

        {/* Individual Services */}
        <div className="space-y-12 mb-20">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-3">
                  <category.icon className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-cream">{category.title}</h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Card
                    key={serviceIndex}
                    className={`relative bg-white/5 border-primary/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 ${
                      service.popular ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    {service.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-black font-semibold">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader className="pb-4">
                      <CardTitle className="text-cream text-lg">{service.name}</CardTitle>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-primary">${service.price}</span>
                        <div className="flex items-center text-cream/60 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-cream/70 text-sm mb-4">{service.description}</p>
                      <BookingButton className="w-full bg-primary/20 hover:bg-primary hover:text-black text-primary border border-primary/30">
                        Book Now
                      </BookingButton>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Package Deals */}
        <div className="border-t border-primary/20 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-cream mb-4">
              Package <span className="text-primary">Deals</span>
            </h3>
            <p className="text-cream/70">Save money with our curated service packages</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative bg-white/5 border-primary/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 ${
                  pkg.popular ? "ring-2 ring-primary scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-black font-semibold">
                    Best Value
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-cream text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-primary">${pkg.price}</span>
                      <span className="text-cream/60 line-through text-lg">${pkg.originalPrice}</span>
                    </div>
                    <div className="flex items-center justify-center text-cream/60 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {pkg.duration}
                    </div>
                    <div className="text-sm text-primary font-semibold">Save ${pkg.originalPrice - pkg.price}</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {pkg.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center text-cream/80 text-sm">
                        <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {service}
                      </div>
                    ))}
                  </div>
                  <BookingButton
                    className={`w-full font-semibold ${
                      pkg.popular
                        ? "bg-primary hover:bg-primary/90 text-black"
                        : "bg-primary/20 hover:bg-primary hover:text-black text-primary border border-primary/30"
                    }`}
                  >
                    Book Package
                  </BookingButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center space-y-4">
          <div className="grid md:grid-cols-3 gap-8 text-cream/70">
            <div className="space-y-2">
              <h4 className="text-primary font-semibold">Booking Policy</h4>
              <p className="text-sm">24-hour cancellation notice required</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-primary font-semibold">Payment Methods</h4>
              <p className="text-sm">Cash, Card, Apple Pay, Google Pay accepted</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-primary font-semibold">Group Bookings</h4>
              <p className="text-sm">Special rates available for 3+ people</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
