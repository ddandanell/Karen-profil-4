'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navItems }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      aria-modal="true"
      role="dialog"
      aria-label="Mobile navigation menu"
    >
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-deep-charcoal opacity-95"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Menu Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-deep-charcoal text-off-white p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 w-8 h-8 flex items-center justify-center text-off-white hover:text-soft-gold transition-colors"
          aria-label="Close menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <nav className="mt-20 space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block text-lg md:text-xl font-sans tracking-generous text-off-white hover:text-soft-gold transition-colors py-3 min-h-[44px] flex items-center"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};


