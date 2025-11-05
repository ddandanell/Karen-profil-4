'use client';

import { Section } from '@/components/ui/Section';
import Image from 'next/image';
import { motion } from 'framer-motion';

const portfolioProjects = [
  {
    title: 'Modern Minimalist Apartment',
    category: 'Residential',
    location: 'New York, NY',
    description: 'A serene urban retreat featuring clean lines, natural materials, and an open floor plan that maximizes natural light.',
  },
  {
    title: 'Luxury Corporate Headquarters',
    category: 'Commercial',
    location: 'San Francisco, CA',
    description: 'Sophisticated workspace design that inspires innovation and collaboration while maintaining an air of refined professionalism.',
  },
  {
    title: 'Coastal Estate Interior',
    category: 'Residential',
    location: 'Malibu, CA',
    description: 'Elegant beachfront home with timeless coastal elegance, blending indoor and outdoor living seamlessly.',
  },
  {
    title: 'Boutique Hotel Lobby',
    category: 'Hospitality',
    location: 'Paris, France',
    description: 'Welcoming entrance that sets the tone for an exceptional guest experience with sophisticated European elegance.',
  },
  {
    title: 'Urban Loft Renovation',
    category: 'Residential',
    location: 'Chicago, IL',
    description: 'Transformation of a historic warehouse into a modern living space that honors the building\'s industrial heritage.',
  },
  {
    title: 'Executive Office Suite',
    category: 'Commercial',
    location: 'London, UK',
    description: 'Refined workspace that balances functionality with aesthetic appeal, creating an inspiring environment for leadership.',
  },
];

export default function PortfolioPage() {
  return (
    <div className="pt-24 md:pt-32">
      <Section background="off-white">
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-deep-charcoal mb-6 md:mb-8">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl text-muted-charcoal max-w-2xl mx-auto">
            A curated selection of our recent design transformations
          </p>
        </div>

        {/* Featured Portfolio Image */}
        <div className="mb-16 md:mb-24">
          <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src="/images/portfolio-featured.png"
              alt="Luxury interior design - Eclectic living space with red velvet chairs and artistic elements"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="bg-warm-beige p-8 md:p-10 rounded-lg space-y-6"
            >
              <div className="aspect-video bg-soft-taupe rounded-lg flex items-center justify-center">
                <span className="text-muted-charcoal text-sm md:text-base">
                  {project.title}
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm tracking-generous uppercase text-gold-very-light">
                    {project.category}
                  </span>
                  <span className="text-xs md:text-sm text-muted-charcoal">
                    {project.location}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-deep-charcoal">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-muted-charcoal leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Portfolio Gallery Section */}
      <Section background="warm-beige" padding="large">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal mb-6 md:mb-8">
            Design Transformations
          </h2>
          <p className="text-lg md:text-xl text-muted-charcoal max-w-3xl mx-auto leading-relaxed">
            A visual journey through our most recent interior transformations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              src: '/images/karen-k-mag-selection-24.webp',
              alt: 'Luxury interior design transformation - Karen K Sanctuaries',
            },
            {
              src: '/images/karen-k-mag-selection-12.webp',
              alt: 'Elegant space redesign - Karen K Sanctuaries',
            },
            {
              src: '/images/karen-k-mag-selection-43-copy.webp',
              alt: 'Sophisticated interior transformation - Karen K Sanctuaries',
            },
            {
              src: '/images/karen-k-mag-selection-11.webp',
              alt: 'Premium design makeover - Karen K Sanctuaries',
            },
            {
              src: '/images/karen-k-mag-selection-50-copy.webp',
              alt: 'Luxury home transformation - Karen K Sanctuaries',
            },
            {
              src: '/images/karen-k-mag-selection-15.webp',
              alt: 'Bespoke interior design - Karen K Sanctuaries',
            },
          ].map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}

