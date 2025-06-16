import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { BrandStory } from "@/components/brand-story"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { Pricing } from "@/components/pricing"

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <BrandStory />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  )
}
