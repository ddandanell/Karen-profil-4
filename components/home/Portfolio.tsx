import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

const portfolioItems = [
  {
    title: 'Modern Minimalist Apartment',
    category: 'Residential',
    description: 'A serene urban retreat featuring clean lines and natural materials.',
  },
  {
    title: 'Luxury Corporate Headquarters',
    category: 'Commercial',
    description: 'Sophisticated workspace design that inspires innovation and collaboration.',
  },
  {
    title: 'Coastal Estate Interior',
    category: 'Residential',
    description: 'Elegant beachfront home with timeless coastal elegance.',
  },
  {
    title: 'Boutique Hotel Lobby',
    category: 'Hospitality',
    description: 'Welcoming entrance that sets the tone for an exceptional guest experience.',
  },
];

export const Portfolio: React.FC = () => {
  return (
    <Section background="warm-beige" id="portfolio">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-deep-charcoal mb-6 md:mb-8">
          Featured Projects
        </h2>
        <p className="text-lg md:text-xl text-muted-charcoal max-w-2xl mx-auto">
          Discover our carefully curated selection of design transformations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 mb-16 md:mb-20">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="bg-off-white p-8 md:p-12 rounded-lg space-y-4 md:space-y-6"
          >
            <div className="aspect-video bg-soft-taupe rounded-lg mb-6 flex items-center justify-center">
              <span className="text-muted-charcoal text-sm md:text-base">
                {item.title}
              </span>
            </div>
            <div className="space-y-2">
              <span className="inline-block text-xs md:text-sm tracking-generous uppercase text-gold-very-light">
                {item.category}
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-deep-charcoal">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-muted-charcoal leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button href="/portfolio" variant="outline">
          View All Projects
        </Button>
      </div>
    </Section>
  );
};

