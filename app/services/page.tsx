import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const services = [
  {
    title: 'Residential Design',
    description: 'Transform your home into a reflection of your personal style with our bespoke residential design services. From single-room makeovers to complete home renovations, we create spaces that enhance your daily life.',
    features: [
      'Space planning and layout design',
      'Color scheme and material selection',
      'Furniture and accessory curation',
      'Project management and coordination',
    ],
  },
  {
    title: 'Commercial Spaces',
    description: 'Create inspiring work environments that enhance productivity and reflect your brand identity. We specialize in corporate offices, retail spaces, and hospitality venues.',
    features: [
      'Brand-aligned design concepts',
      'Functional workspace optimization',
      'Employee wellness considerations',
      'Timeline and budget management',
    ],
  },
  {
    title: 'Consultation Services',
    description: 'Expert guidance to help you make informed decisions about your interior design journey. Perfect for clients who want professional input on specific design challenges.',
    features: [
      'Design strategy sessions',
      'Color and material recommendations',
      'Furniture sourcing guidance',
      'Budget planning assistance',
    ],
  },
  {
    title: 'Custom Furnishings',
    description: 'Bespoke furniture and accessories crafted to perfectly complement your space and style. We work with skilled artisans to create one-of-a-kind pieces.',
    features: [
      'Custom furniture design',
      'Artisan collaboration',
      'Material selection and sourcing',
      'Quality craftsmanship guarantee',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-32">
      <Section background="off-white">
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-deep-charcoal mb-6 md:mb-8">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-muted-charcoal max-w-2xl mx-auto">
            Comprehensive design solutions tailored to your unique vision and lifestyle
          </p>
        </div>

        <div className="space-y-20 md:space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="aspect-video bg-soft-taupe rounded-lg flex items-center justify-center">
                  <span className="text-muted-charcoal text-sm md:text-base">
                    {service.title}
                  </span>
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <h2 className="font-serif text-3xl md:text-4xl text-deep-charcoal mb-6 md:mb-8">
                  {service.title}
                </h2>
                <p className="text-base md:text-lg text-muted-charcoal leading-relaxed mb-6 md:mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <span className="text-soft-gold mt-2">•</span>
                      <span className="text-base md:text-lg text-muted-charcoal">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button href="/contact" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

