'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      setTimeout(() => setIsVisible(true), 1500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-xs">
      <div className="bg-white backdrop-blur-sm border border-soft-taupe rounded-lg shadow-lg p-4">
        {/* Buttons on top */}
        <div className="flex gap-2 mb-3">
          <button
            onClick={handleDecline}
            className="flex-1 px-3 py-1.5 text-xs font-sans tracking-wide text-muted-charcoal hover:text-deep-charcoal transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 px-3 py-1.5 text-xs font-sans tracking-wide bg-soft-gold text-white rounded hover:bg-gold-dark transition-colors"
          >
            Accept
          </button>
        </div>
        
        {/* Text below */}
        <div className="flex items-start justify-between gap-3">
          <p className="font-sans text-xs text-muted-charcoal leading-relaxed">
            We use cookies to enhance your experience.{' '}
            <a href="/cookies" className="text-soft-gold hover:text-gold-dark underline">
              Learn more
            </a>
          </p>
          <button
            onClick={handleDecline}
            className="text-muted-charcoal hover:text-deep-charcoal transition-colors flex-shrink-0 mt-0.5"
            aria-label="Close cookie banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

