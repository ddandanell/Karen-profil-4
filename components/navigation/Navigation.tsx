'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'backdrop-blur-md bg-white/95 border-b border-white/50 shadow-sm'
            : 'bg-transparent'
        )}
      >
        <nav className="content-width side-padding py-6 md:py-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => handleNavClick('#hero')}
              className={cn(
                'flex items-center gap-3 transition-colors group',
                isScrolled
                  ? 'text-gray-900 hover:text-soft-gold'
                  : 'text-white hover:text-soft-gold'
              )}
              aria-label="Karen K Sanctuaries Home"
            >
              <div className="relative w-20 h-14 md:w-24 md:h-16 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Karen K Sanctuaries Logo"
                  fill
                  className="object-contain transition-all duration-300"
                  style={{
                    filter: isScrolled 
                      ? 'none' 
                      : 'brightness(0) invert(1)',
                  }}
                  priority
                />
              </div>
              <span className="text-2xl md:text-3xl font-serif">
                Karen K Sanctuaries
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10 md:space-x-12">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'font-sans text-sm md:text-base tracking-generous transition-colors relative group',
                    isScrolled
                      ? 'text-gray-900 hover:text-soft-gold'
                      : 'text-white hover:text-soft-gold'
                  )}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-soft-gold transition-all group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'lg:hidden flex items-center justify-center w-8 h-8 min-h-[44px] min-w-[44px]',
                isScrolled ? 'text-gray-900' : 'text-white'
              )}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {/* Overlay Background */}
            <div className="fixed inset-0 bg-deep-charcoal opacity-95" />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-deep-charcoal text-off-white p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-8 right-8 w-8 h-8 flex items-center justify-center text-off-white hover:text-soft-gold transition-colors min-h-[44px] min-w-[44px]"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Menu Items */}
              <nav className="mt-20 space-y-8">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="block text-lg md:text-xl font-sans tracking-generous text-off-white hover:text-soft-gold transition-colors py-3 min-h-[44px] w-full text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
