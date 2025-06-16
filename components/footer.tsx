import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="text-3xl font-bold">
              BARBER<span className="text-primary">PRO</span>
            </div>
            <p className="text-cream/70">
              Premium grooming for the modern man. Experience the difference of true craftsmanship.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 cursor-pointer transition-colors">
                <span className="text-primary font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 cursor-pointer transition-colors">
                <span className="text-primary font-bold">ig</span>
              </div>
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 cursor-pointer transition-colors">
                <span className="text-primary font-bold">tw</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-cream/80">123 Main Street, Downtown</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-cream/80">(208) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-cream/80">info@barberpro.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary">Hours</h3>
            <div className="space-y-2 text-cream/80">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span>9AM - 8PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9AM - 6PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>10AM - 4PM</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary">Stay Updated</h3>
            <p className="text-cream/70">Subscribe for grooming tips and special offers</p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-primary/30 text-cream placeholder:text-cream/50"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-black font-semibold">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-12 pt-8 text-center text-cream/60">
          <p>&copy; 2024 BarberPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
