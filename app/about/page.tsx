import { Section } from '@/components/ui/Section';

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32">
      <Section background="off-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-deep-charcoal mb-8 md:mb-12 text-center">
            About Us
          </h1>
          
          <div className="space-y-8 md:space-y-12">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-6 md:mb-8">
                Our Story
              </h2>
              <p className="text-base md:text-lg text-muted-charcoal leading-relaxed mb-6 md:mb-8">
                Elegant Interiors was founded on the belief that great design should be both beautiful and functional. With over two decades of experience in luxury interior design, we have built a reputation for creating spaces that stand the test of time.
              </p>
              <p className="text-base md:text-lg text-muted-charcoal leading-relaxed mb-6 md:mb-8">
                Our team of talented designers brings together expertise in architecture, color theory, and spatial planning to create interiors that reflect your unique personality while enhancing your daily living experience.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-6 md:mb-8">
                Our Philosophy
              </h2>
              <p className="text-base md:text-lg text-muted-charcoal leading-relaxed mb-6 md:mb-8">
                We believe in the power of quiet luxury—spaces that speak through their quality, attention to detail, and thoughtful design rather than through ostentatious displays. Every element we choose serves a purpose and contributes to the overall harmony of the space.
              </p>
              <p className="text-base md:text-lg text-muted-charcoal leading-relaxed mb-6 md:mb-8">
                Our approach is collaborative, transparent, and always focused on exceeding your expectations. We work closely with you throughout the entire process, ensuring that the final result is not just a beautiful space, but a true reflection of your vision.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-6 md:mb-8">
                Why Choose Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-4">
                  <h3 className="font-serif text-xl md:text-2xl text-deep-charcoal">
                    Expertise
                  </h3>
                  <p className="text-base text-muted-charcoal leading-relaxed">
                    Decades of combined experience in luxury interior design and architecture.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-serif text-xl md:text-2xl text-deep-charcoal">
                    Attention to Detail
                  </h3>
                  <p className="text-base text-muted-charcoal leading-relaxed">
                    Every element is carefully considered and meticulously executed.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-serif text-xl md:text-2xl text-deep-charcoal">
                    Personal Service
                  </h3>
                  <p className="text-base text-muted-charcoal leading-relaxed">
                    Dedicated project management and personalized attention throughout your journey.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-serif text-xl md:text-2xl text-deep-charcoal">
                    Timeless Design
                  </h3>
                  <p className="text-base text-muted-charcoal leading-relaxed">
                    Spaces that remain elegant and relevant for years to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

