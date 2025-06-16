export function BrandStory() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-cream">
              Crafting <span className="text-primary">Excellence</span>
              <br />
              Since 2015
            </h2>
            <p className="text-xl text-cream/80 leading-relaxed">
              Founded by master barber Marcus Johnson, our shop combines traditional techniques with modern style. We
              believe every man deserves to look and feel his absolute best.
            </p>
            <p className="text-cream/70">
              With over 15 years of experience and a passion for the craft, we've built a reputation for excellence in
              men's grooming. Our team of skilled barbers is dedicated to providing an unparalleled experience.
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-cream/60">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">8</div>
                <div className="text-cream/60">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-cream/60">Master Barbers</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="/images/gallery-2.jpeg" alt="Master barber at work" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-black">EST.</div>
                <div className="text-xl font-bold text-black">2015</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
