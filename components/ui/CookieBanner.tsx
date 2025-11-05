'use client';

import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -20, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 left-6 z-50 max-w-sm"
        >
          <div className="bg-white border border-soft-taupe/50 rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm">
            {/* Header with icon */}
            <div className="bg-gradient-to-r from-warm-beige to-off-white px-4 py-3 flex items-center justify-between border-b border-soft-taupe/30">
              <div className="flex items-center gap-2">
                <Cookie className="w-4 h-4 text-soft-gold" />
                <span className="font-sans text-sm font-semibold text-deep-charcoal">Cookie Preferences</span>
              </div>
              <button
                onClick={handleDecline}
                className="text-muted-charcoal hover:text-deep-charcoal transition-colors flex-shrink-0"
                aria-label="Close cookie banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="px-4 py-3">
              <p className="font-sans text-xs md:text-sm text-muted-charcoal leading-relaxed mb-4">
                We use cookies to enhance your browsing experience and analyze site traffic.{' '}
                <a href="/cookies" className="text-soft-gold hover:text-gold-dark underline font-medium">
                  Learn more
                </a>
              </p>

              {/* Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={handleDecline}
                  className="flex-1 px-4 py-2 text-xs font-sans tracking-wide text-muted-charcoal hover:text-deep-charcoal hover:bg-warm-beige rounded-lg transition-all duration-200"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 px-4 py-2 text-xs font-sans tracking-wide bg-soft-gold text-white rounded-lg hover:bg-gold-dark hover:shadow-lg hover:scale-105 transition-all duration-200 active:scale-100"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

