import React from 'react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-warm-beige pt-24 md:pt-32">
      <div className="content-width side-padding text-center">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-deep-charcoal mb-8 md:mb-12 leading-tight font-light">
          Timeless Elegance
          <br />
          <span className="font-normal">Crafted for You</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-charcoal mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed">
          Transform your space into a sanctuary of sophisticated design. We create interiors that blend timeless elegance with modern functionality.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button href="/portfolio" variant="primary">
            View Our Work
          </Button>
          <Button href="/contact" variant="outline">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

