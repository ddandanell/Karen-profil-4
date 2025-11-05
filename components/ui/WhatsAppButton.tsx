'use client';

import React, { useState } from 'react';
import { MessageCircle, X, Calendar, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = '971502269068';

  const handleQuestion = () => {
    const message = encodeURIComponent('Hello! I have a question about your interior design services.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    setIsOpen(false);
  };

  const handleBookTime = () => {
    const message = encodeURIComponent('Hello! I would like to book a discovery call with Karen.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-soft-gold rounded-full border-2 border-white animate-pulse" />
        )}
      </motion.button>

      {/* Options Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* Options Card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-white rounded-lg shadow-2xl border border-soft-taupe overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#25D366] to-[#20BA5A] p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-sans text-white font-semibold">Chat with Us</h3>
                    <p className="font-sans text-white/90 text-xs">We'll respond quickly!</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-white/80 transition-colors"
                  aria-label="Close options"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 space-y-3">
                <button
                  onClick={handleQuestion}
                  className="w-full flex items-center gap-4 p-4 bg-warm-beige hover:bg-soft-taupe/30 rounded-lg transition-colors group"
                >
                  <div className="w-12 h-12 bg-soft-gold/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-soft-gold/30 transition-colors">
                    <HelpCircle className="w-6 h-6 text-soft-gold" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="font-sans font-semibold text-deep-charcoal mb-1">Ask a Question</h4>
                    <p className="font-sans text-sm text-muted-charcoal">Get quick answers about our services</p>
                  </div>
                </button>

                <button
                  onClick={handleBookTime}
                  className="w-full flex items-center gap-4 p-4 bg-warm-beige hover:bg-soft-taupe/30 rounded-lg transition-colors group"
                >
                  <div className="w-12 h-12 bg-soft-gold/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-soft-gold/30 transition-colors">
                    <Calendar className="w-6 h-6 text-soft-gold" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="font-sans font-semibold text-deep-charcoal mb-1">Book Time with Karen</h4>
                    <p className="font-sans text-sm text-muted-charcoal">Schedule your free discovery call</p>
                  </div>
                </button>
              </div>

              <div className="px-4 pb-4">
                <p className="font-sans text-xs text-muted-charcoal text-center">
                  Or contact us directly: <a href={`https://wa.me/${whatsappNumber}`} className="text-soft-gold hover:underline">+971 502269068</a>
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

