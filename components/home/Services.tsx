import React from 'react';
import { Section } from '../ui/Section';

const services = [
  {
    title: 'Residential Design',
    description: 'Transform your home into a reflection of your personal style with our bespoke residential design services.',
  },
  {
    title: 'Commercial Spaces',
    description: 'Create inspiring work environments that enhance productivity and reflect your brand identity.',
  },
  {
    title: 'Consultation Services',
    description: 'Expert guidance to help you make informed decisions about your interior design journey.',
  },
  {
    title: 'Custom Furnishings',
    description: 'Bespoke furniture and accessories crafted to perfectly complement your space and style.',
  },
];

export const Services: React.FC = () => {
  return (
    <Section background="off-white" id="services">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-deep-charcoal mb-6 md:mb-8">
          Our Services
        </h2>
        <p className="text-lg md:text-xl text-muted-charcoal max-w-2xl mx-auto">
          Comprehensive design solutions tailored to your unique vision and lifestyle
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="space-y-4 md:space-y-6"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-deep-charcoal">
              {service.title}
            </h3>
            <p className="text-base md:text-lg text-muted-charcoal leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};


