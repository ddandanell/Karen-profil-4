'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Calendar, HelpCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const whatsappNumber = '971502269068';

  const prompts = [
    "Ready to transform your space? Let's chat! 💬",
    "Have questions? We're here to help! ✨",
    "Your dream sanctuary is one message away! 🏡",
    "Book your free consultation now! 📅",
    "Let's discuss your interior transformation! 💫",
  ];

  const [currentPrompt, setCurrentPrompt] = useState(prompts[0]);

  // Auto-prompt every 40 seconds
  useEffect(() => {
    if (!isOpen) {
      const interval = setInterval(() => {
        setShowPrompt(true);
        const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
        setCurrentPrompt(randomPrompt);
        setTimeout(() => setShowPrompt(false), 5000); // Hide after 5 seconds
      }, 40000); // 40 seconds

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  const handleQuestion = () => {
    const message = encodeURIComponent('Hello! I have a question about your interior design services.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    setIsOpen(false);
    setShowPrompt(false);
  };

  const handleBookTime = () => {
    const message = encodeURIComponent('Hello! I would like to book a discovery call with Karen.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    setIsOpen(false);
    setShowPrompt(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button with gold color */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        onClick={() => {
          setIsOpen(!isOpen);
          setShowPrompt(false);
        }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-soft-gold rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#25D366] rounded-full border-2 border-white animate-pulse" />
        )}
      </motion.button>

      {/* Auto-prompt notification - Chat Bubble Style */}
      <AnimatePresence>
        {showPrompt && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ 
              duration: 0.4,
              type: 'spring',
              stiffness: 300,
              damping: 25
            }}
            className="fixed bottom-28 right-6 z-50 max-w-xs"
            onClick={() => setIsOpen(true)}
          >
            {/* Chat Bubble with Tail */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 cursor-pointer hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 border border-gray-100">
              {/* Tail pointing to WhatsApp button */}
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-100" />
              
              <div className="flex items-start gap-3 relative z-10">
                {/* Avatar/Icon */}
                <div className="w-10 h-10 bg-soft-gold/10 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-soft-gold/20">
                  <Sparkles className="w-5 h-5 text-soft-gold" />
                </div>
                
                {/* Message Content */}
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-sm font-semibold text-deep-charcoal mb-1">Karen K Sanctuaries</p>
                  <p className="font-sans text-sm text-deep-charcoal leading-relaxed">{currentPrompt}</p>
                  <p className="font-sans text-xs text-muted-charcoal mt-1">Just now</p>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowPrompt(false);
                  }}
                  className="text-muted-charcoal hover:text-deep-charcoal transition-colors flex-shrink-0 hover:bg-warm-beige rounded-full p-1"
                  aria-label="Close message"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              {/* Subtle pulse animation */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-soft-gold/5 rounded-2xl -z-0"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Options Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsOpen(false);
                setShowPrompt(false);
              }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* Options Card with gold header */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-soft-taupe overflow-hidden"
            >
              {/* Header with white background */}
              <div className="bg-white border-b border-soft-taupe/30 p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-soft-gold/10 rounded-full flex items-center justify-center border border-soft-gold/20">
                    <MessageCircle className="w-6 h-6 text-soft-gold" />
                  </div>
                  <div>
                    <h3 className="font-sans text-deep-charcoal font-bold text-base">Chat with Us</h3>
                    <p className="font-sans text-muted-charcoal text-xs">We'll respond within minutes!</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowPrompt(false);
                  }}
                  className="text-deep-charcoal hover:text-muted-charcoal transition-colors"
                  aria-label="Close options"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-5 space-y-3 bg-gradient-to-b from-off-white to-white">
                <button
                  onClick={handleQuestion}
                  className="w-full flex items-center gap-4 p-4 bg-white hover:bg-warm-beige border border-soft-taupe/30 rounded-xl transition-all duration-300 group hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div className="w-14 h-14 bg-soft-gold/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-soft-gold/20 transition-colors border border-soft-gold/20">
                    <HelpCircle className="w-7 h-7 text-soft-gold" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="font-sans font-bold text-base text-deep-charcoal mb-1 group-hover:text-soft-gold transition-colors">
                      Ask a Question
                    </h4>
                    <p className="font-sans text-sm text-muted-charcoal">Get quick answers about our services</p>
                  </div>
                </button>

                <button
                  onClick={handleBookTime}
                  className="w-full flex items-center gap-4 p-4 bg-white hover:bg-warm-beige border border-soft-taupe/30 rounded-xl transition-all duration-300 group hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div className="w-14 h-14 bg-soft-gold/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-soft-gold/20 transition-colors border border-soft-gold/20">
                    <Calendar className="w-7 h-7 text-soft-gold" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="font-sans font-bold text-base text-deep-charcoal mb-1 group-hover:text-soft-gold transition-colors">
                      Book Time with Karen
                    </h4>
                    <p className="font-sans text-sm text-muted-charcoal">Schedule your free discovery call</p>
                  </div>
                </button>
              </div>

              <div className="px-5 py-4 bg-warm-beige/30 border-t border-soft-taupe/20">
                <p className="font-sans text-xs text-muted-charcoal text-center">
                  Or contact us directly:{' '}
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    className="text-soft-gold hover:text-gold-dark underline font-semibold"
                  >
                    +971 502269068
                  </a>
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
