import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "David Chen",
      image: "/images/gallery-5.jpeg",
      rating: 5,
      text: "Absolutely the best barbershop in the city. Marcus and his team are true professionals who take pride in their craft.",
    },
    {
      name: "Michael Rodriguez",
      image: "/images/gallery-1.jpeg",
      rating: 5,
      text: "Been coming here for 3 years. Consistent quality, great atmosphere, and always leave looking sharp.",
    },
    {
      name: "James Wilson",
      image: "/images/gallery-4.jpeg",
      rating: 5,
      text: "The attention to detail is incredible. They really listen to what you want and deliver every time.",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-cream mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-cream/70 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 border-primary/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-cream/80 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="text-cream font-semibold">{testimonial.name}</div>
                    <div className="text-cream/60 text-sm">Verified Customer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
