import React from 'react';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  rating?: number;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  title,
  rating = 5,
  className = '',
}) => {
  return (
    <div className={cn('bg-white p-10 rounded-lg shadow-sm space-y-6 relative', className)}>
      <Quote className="w-12 h-12 text-soft-gold opacity-50 absolute top-6 left-6" />
      <p className="text-base md:text-lg text-muted-charcoal leading-relaxed italic pt-6">
        "{quote}"
      </p>
      <div className="space-y-2">
        <p className="font-sans text-sm md:text-base font-semibold text-deep-charcoal">
          {author}
        </p>
        <p className="font-sans text-xs md:text-sm text-muted-charcoal">
          {title}
        </p>
        {rating > 0 && (
          <div className="flex items-center space-x-1">
            {[...Array(rating)].map((_, i) => (
              <span key={i} className="text-soft-gold text-sm">★</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};



