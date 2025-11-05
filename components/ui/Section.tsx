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
    default: 'py-20 md:py-25 lg:py-30',
    large: 'py-25 md:py-30 lg:py-38',
    small: 'py-15 md:py-20',
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
