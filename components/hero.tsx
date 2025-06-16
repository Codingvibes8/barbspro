import { Button } from "@/components/ui/button"
import { Scissors } from "lucide-react"
import { BookingButton } from "./booking-button"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('/images/barber-hero.jpeg')`,
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Asymmetrical */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-primary">
              <Scissors className="w-6 h-6" />
              <span className="text-sm font-semibold tracking-wider uppercase">Premium Grooming</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-cream leading-tight">
              Premium
              <br />
              <span className="text-primary">Grooming</span>
              <br />
              for the Modern Man
            </h1>

            <p className="text-xl text-cream/80 max-w-lg leading-relaxed">
              Experience the finest in traditional barbering with a modern twist. Where craftsmanship meets style.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <BookingButton size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4">
                Book Appointment
              </BookingButton>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-black px-8 py-4"
              >
                View Services
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="aspect-square rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
              <img
                src="/images/barber-hero.jpeg"
                alt="Professional barber at work"
                className="w-80 h-80 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
