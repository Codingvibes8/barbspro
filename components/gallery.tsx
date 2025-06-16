"use client"

import { useState } from "react"

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    { src: "/images/barber-hero.jpeg", alt: "Luxury barbershop interior with professional service" },
    { src: "/images/gallery-1.jpeg", alt: "Professional barber using clippers on young client" },
    { src: "/images/gallery-2.jpeg", alt: "Master barber with traditional techniques and craftsmanship" },
    { src: "/images/gallery-3.jpeg", alt: "Precision haircut with attention to detail" },
    { src: "/images/gallery-4.jpeg", alt: "Professional clipper work and precision trimming" },
    { src: "/images/gallery-5.jpeg", alt: "Modern fade haircut with expert beard styling" },
  ]

  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Our <span className="text-primary">Work</span>
          </h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            See the artistry and precision in every cut, shave, and style
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
