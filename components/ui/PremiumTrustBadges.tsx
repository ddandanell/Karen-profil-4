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
      {/* Book CTA - Centered at top */}
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="text-center mb-16 md:mb-20"
      >
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 rounded-full bg-soft-gold flex items-center justify-center transition-transform duration-300 hover:scale-110 shadow-lg">
            <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-white" />
          </div>
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-deep-charcoal mb-3 md:mb-4">
            Ready to Transform?
          </h3>
          <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto">
            Your dream sanctuary is just one call away. Let's discuss how we can bring your vision to life.
          </p>
          <Button
            onClick={onBookClick}
            variant="primary"
            size="lg"
            className="w-full md:w-auto"
          >
            Book Discovery Call
          </Button>
        </div>
      </motion.div>

      {/* Trust Badges - Below button */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
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
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-full bg-warm-beige flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-soft-gold" />
              </div>
              <p className="font-serif text-base md:text-lg lg:text-xl font-semibold text-deep-charcoal mb-1 md:mb-2">
                {badge.text}
              </p>
              <p className="font-sans text-xs md:text-sm text-muted-charcoal">
                {badge.subtext}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

