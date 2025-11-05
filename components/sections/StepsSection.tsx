'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Home, FileSignature, Sparkles } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Discovery Call (15–30 minutes)',
    blurb:
      'Share your vision, timeline, and budget. We confirm fit and recommend the right service tier.',
    foot: 'Completely free, zero commitment',
    Icon: Phone,
  },
  {
    id: 2,
    title: 'Virtual or On-Site Assessment',
    blurb:
      'Send photos/videos or we visit. We evaluate potential and start conceptualizing your transformation.',
    foot: 'Quick, efficient, clarifying',
    Icon: Home,
  },
  {
    id: 3,
    title: 'Design Proposal & Agreement',
    blurb:
      'Receive your custom vision, clear timeline, and transparent investment breakdown. Then we lock dates.',
    foot: 'Crystal-clear expectations',
    Icon: FileSignature,
  },
  {
    id: 4,
    title: 'Transformation Magic',
    blurb:
      "We bring your sanctuary to life. You're updated throughout without being burdened.",
    foot: 'Fast-track delivery, zero hassle',
    Icon: Sparkles,
  },
];

const cardAnim = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut', delay: 0.08 * i },
  }),
};

export const StepsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
      {steps.map(({ id, title, blurb, foot, Icon }, i) => (
        <motion.div
          key={id}
          custom={i}
          variants={cardAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="relative group"
        >
          {/* Card */}
          <div className="pt-8 md:pt-10 pb-8 md:pb-10 px-6 md:px-8 rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            {/* Icon and Number */}
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold-primary text-white shadow-gold flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl">
                <Icon className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
              </div>
              <div className="px-2 md:px-3 py-1 rounded-full bg-gold-light/30 text-gold-primary text-xs font-semibold border border-gold-primary/20">
                {String(id).padStart(2, '0')}
              </div>
            </div>

            <h3 className="heading-3 mb-3 text-balance group-hover:text-gold-primary transition-colors duration-300">{title}</h3>
            <p className="body-text text-gray-600 mb-4">{blurb}</p>
            <p className="text-xs md:text-sm italic text-gray-500">→ {foot}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

