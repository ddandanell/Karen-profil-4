import React from 'react';
import { Section } from '../ui/Section';

const testimonials = [
  {
    quote: 'Working with Elegant Interiors was an absolute pleasure. They transformed our home into a space that truly reflects our style and personality.',
    author: 'Sarah Johnson',
    role: 'Homeowner',
  },
  {
    quote: 'The attention to detail and commitment to quality exceeded all our expectations. Every element was thoughtfully considered.',
    author: 'Michael Chen',
    role: 'CEO, Tech Innovations',
  },
  {
    quote: 'Their design expertise and professional approach made the entire process seamless. We couldn\'t be happier with the results.',
    author: 'Emily Rodriguez',
    role: 'Property Developer',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <Section background="off-white" id="testimonials">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-deep-charcoal mb-6 md:mb-8">
          Client Testimonials
        </h2>
        <p className="text-lg md:text-xl text-muted-charcoal max-w-2xl mx-auto">
          What our clients say about their experience with us
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="space-y-6 md:space-y-8 text-center"
          >
            <div className="relative">
              <svg
                className="w-12 h-12 md:w-16 md:h-16 text-soft-gold mx-auto mb-6 opacity-50"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.481.967-4.996 2.848-4.996 7.153 0 3.031 2.219 5.617 5.004 7.011v6.686h-9.987zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.481.967-5.996 2.848-5.996 7.153 0 3.031 2.219 5.617 5.004 7.011v6.686h-10.004z" />
              </svg>
              <p className="text-base md:text-lg text-muted-charcoal leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
            <div>
              <p className="font-sans text-sm md:text-base font-medium text-deep-charcoal">
                {testimonial.author}
              </p>
              <p className="font-sans text-xs md:text-sm text-muted-charcoal mt-1">
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

