'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

interface MobileStickyCTAProps {
  onBookClick?: () => void;
  whatsappNumber?: string;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({
  onBookClick,
  whatsappNumber = '+971502269068',
}) => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`, '_blank');
  };

  const handleBookClick = () => {
    if (onBookClick) {
      onBookClick();
    } else {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-soft-taupe shadow-lg p-4">
      <div className="flex items-center space-x-3 max-w-md mx-auto">
        <Button
          onClick={handleBookClick}
          variant="primary"
          size="md"
          className="flex-1"
        >
          Book Free Call
        </Button>
        <button
          onClick={handleWhatsAppClick}
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-luxury-md hover:bg-[#20BA5A] transition-colors min-h-[44px] min-w-[44px]"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

