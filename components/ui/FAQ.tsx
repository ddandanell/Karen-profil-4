'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export const FAQ: React.FC<FAQProps> = ({ items, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="border-b border-soft-taupe last:border-b-0 pb-6 last:pb-0"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between text-left py-4 min-h-[44px]"
            aria-expanded={openIndex === index}
          >
            <h3 className="font-sans text-lg md:text-xl font-semibold text-deep-charcoal pr-4">
              {item.question}
            </h3>
            {openIndex === index ? (
              <Minus className="w-5 h-5 text-soft-gold flex-shrink-0" />
            ) : (
              <Plus className="w-5 h-5 text-soft-gold flex-shrink-0" />
            )}
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed pt-2 pb-4">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

