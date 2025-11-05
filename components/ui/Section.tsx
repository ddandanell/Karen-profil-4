import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'off-white' | 'warm-beige' | 'white';
  id?: string;
  padding?: 'default' | 'large' | 'small';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'off-white',
  id,
  padding = 'default',
}) => {
  const backgrounds = {
    'off-white': 'bg-off-white',
    'warm-beige': 'bg-warm-beige',
    'white': 'bg-white',
  };

  const paddings = {
    default: 'py-12 md:py-20 lg:py-24 xl:py-30',
    large: 'py-16 md:py-24 lg:py-32 xl:py-38',
    small: 'py-8 md:py-15 lg:py-20',
  };

  return (
    <section
      id={id}
      className={cn('section-padding', backgrounds[background], paddings[padding], className)}
    >
      <div className="content-width side-padding">
        {children}
      </div>
    </section>
  );
};
