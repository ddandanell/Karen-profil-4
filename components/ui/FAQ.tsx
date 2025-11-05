'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, Clock, DollarSign, Home, Users, Award, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

// Icon mapping based on question keywords
const getIconForQuestion = (question: string): React.ComponentType<{ className?: string }> => {
  const lowerQuestion = question.toLowerCase();
  
  if (lowerQuestion.includes('cost') || lowerQuestion.includes('price') || lowerQuestion.includes('investment') || lowerQuestion.includes('roi')) {
    return DollarSign;
  }
  if (lowerQuestion.includes('time') || lowerQuestion.includes('long') || lowerQuestion.includes('duration') || lowerQuestion.includes('fast')) {
    return Clock;
  }
  if (lowerQuestion.includes('process') || lowerQuestion.includes('work') || lowerQuestion.includes('how')) {
    return CheckCircle;
  }
  if (lowerQuestion.includes('property') || lowerQuestion.includes('space') || lowerQuestion.includes('room')) {
    return Home;
  }
  if (lowerQuestion.includes('client') || lowerQuestion.includes('who') || lowerQuestion.includes('people')) {
    return Users;
  }
  if (lowerQuestion.includes('award') || lowerQuestion.includes('recognition') || lowerQuestion.includes('feature')) {
    return Award;
  }
  
  return HelpCircle; // Default icon
};

export const FAQ: React.FC<FAQProps> = ({ items, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item, index) => {
        const Icon = item.icon || getIconForQuestion(item.question);
        
        return (
          <div
            key={index}
            className="border-b border-soft-taupe last:border-b-0 pb-6 last:pb-0"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center gap-4 text-left py-4 min-h-[44px] group"
              aria-expanded={openIndex === index}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-soft-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-soft-gold/20 transition-colors border border-soft-gold/20">
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-soft-gold" />
              </div>
              <h3 className="font-sans text-lg md:text-xl font-semibold text-deep-charcoal pr-4 flex-1 group-hover:text-soft-gold transition-colors">
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
                  <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed pt-2 pb-4 pl-14 md:pl-16">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

