'use client';

import React from 'react';
import { Shield, Award, TrendingUp, Clock, Star, BookOpen } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'framer-motion';

const premiumBadges = [
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
    icon: TrendingUp,
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

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

interface PremiumTrustBadgesProps {
  onBookClick?: () => void;
}

export const PremiumTrustBadges: React.FC<PremiumTrustBadgesProps> = ({ onBookClick }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        {premiumBadges.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <motion.div
              key={index}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              className="text-center group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 rounded-full bg-warm-beige flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
                <Icon className="w-10 h-10 md:w-12 md:h-12 text-soft-gold" />
              </div>
              <p className="font-serif text-lg md:text-xl lg:text-2xl font-semibold text-deep-charcoal mb-2">
                {badge.text}
              </p>
              <p className="font-sans text-sm md:text-base text-muted-charcoal">
                {badge.subtext}
              </p>
            </motion.div>
          );
        })}
        
        {/* Book CTA Badge */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="text-center group"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 rounded-full bg-soft-gold flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
            <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-white" />
          </div>
          <p className="font-serif text-lg md:text-xl lg:text-2xl font-semibold text-deep-charcoal mb-4 md:mb-6">
            Ready to Transform?
          </p>
          <Button
            onClick={onBookClick}
            variant="primary"
            size="lg"
            className="w-full md:w-auto"
          >
            Book Discovery Call
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

