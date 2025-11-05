import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  timeline: string;
  title: string;
  investment: string;
  perfectFor: string[];
  included: string[];
  plus?: string[];
  promise: string;
  ctaText: string;
  ctaVariant?: 'primary' | 'secondary';
  isPopular?: boolean;
  className?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  timeline,
  title,
  investment,
  perfectFor,
  included,
  plus,
  promise,
  ctaText,
  ctaVariant = 'secondary',
  isPopular = false,
  className = '',
}) => {
  return (
    <div
      className={cn(
        'bg-white p-12 rounded-lg border relative',
        isPopular
          ? 'border-2 border-soft-gold shadow-lg scale-105'
          : 'border-soft-taupe shadow-sm',
        className
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-soft-gold text-deep-charcoal px-4 py-1 rounded-full text-xs md:text-sm font-semibold uppercase tracking-generous">
            Most Popular
          </span>
        </div>
      )}

      <div className="space-y-6">
        {/* Timeline Badge */}
        <div>
          <span className="inline-block bg-warm-beige text-deep-charcoal px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
            {timeline}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-sans text-2xl md:text-3xl font-semibold text-deep-charcoal">
          {title}
        </h3>

        {/* Investment */}
        <p className="font-sans text-lg md:text-xl text-muted-charcoal">
          {investment}
        </p>

        {/* Perfect For */}
        <div>
          <p className="font-sans text-sm md:text-base font-semibold text-deep-charcoal mb-3 uppercase tracking-generous">
            Perfect For:
          </p>
          <ul className="space-y-2">
            {perfectFor.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-soft-gold mt-1">•</span>
                <span className="text-sm md:text-base text-muted-charcoal">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What's Included */}
        <div>
          <p className="font-sans text-sm md:text-base font-semibold text-deep-charcoal mb-3 uppercase tracking-generous">
            What's Included:
          </p>
          <ul className="space-y-3">
            {included.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-soft-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-muted-charcoal">{item}</span>
              </li>
            ))}
            {plus && (
              <>
                <li className="font-sans text-base md:text-lg font-semibold text-deep-charcoal pt-2">
                  Everything in Basic, PLUS:
                </li>
                {plus.map((item, index) => (
                  <li key={`plus-${index}`} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-soft-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-muted-charcoal">{item}</span>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>

        {/* Promise */}
        <div className="pt-4 border-t border-soft-taupe">
          <p className="font-sans text-base md:text-lg text-gold-very-light italic leading-relaxed">
            {promise}
          </p>
        </div>

        {/* CTA */}
        <Button variant={ctaVariant} size="md" className="w-full">
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

