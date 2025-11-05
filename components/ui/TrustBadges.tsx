'use client';

import React from 'react';
import { Shield, Award, CheckCircle, Clock, Star } from 'lucide-react';

const trustBadges = [
  {
    icon: Shield,
    text: '100+ Luxury Transformations',
    subtext: 'Proven Track Record',
  },
  {
    icon: Award,
    text: 'Top 50 Homes Dubai',
    subtext: 'Award-Winning Design',
  },
  {
    icon: CheckCircle,
    text: '35% Average ROI Increase',
    subtext: 'Property Value Boost',
  },
  {
    icon: Clock,
    text: '5-45 Day Delivery',
    subtext: 'Fast-Track Excellence',
  },
  {
    icon: Star,
    text: '5-Star Rated',
    subtext: 'Client Satisfaction',
  },
];

export const TrustBadges: React.FC<{ variant?: 'compact' | 'full' }> = ({ variant = 'full' }) => {
  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {trustBadges.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <div key={index} className="flex items-center gap-2 text-sm md:text-base text-muted-charcoal">
              <Icon className="w-4 h-4 text-soft-gold flex-shrink-0" />
              <span>{badge.text}</span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
      {trustBadges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div key={index} className="text-center">
            <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 rounded-full bg-warm-beige flex items-center justify-center">
              <Icon className="w-6 h-6 md:w-7 md:h-7 text-soft-gold" />
            </div>
            <p className="font-sans text-sm md:text-base font-semibold text-deep-charcoal mb-1">
              {badge.text}
            </p>
            <p className="font-sans text-xs md:text-sm text-muted-charcoal">
              {badge.subtext}
            </p>
          </div>
        );
      })}
    </div>
  );
};

