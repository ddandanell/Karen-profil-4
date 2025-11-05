'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const footerLinks = {
    quick: [
      { label: 'About Karen', href: '#about' },
      { label: 'Our Services', href: '#services' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Process', href: '#process' },
      { label: 'Contact Us', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  };

  return (
    <footer className="bg-warm-beige text-muted-charcoal">
      <div className="content-width side-padding pt-25 md:pt-30 pb-12 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-16 lg:gap-20 mb-16">
          {/* Brand Column */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-6 md:mb-8">
              Karen K Sanctuaries
            </h3>
            <p className="text-sm md:text-base leading-relaxed mb-6">
              Dubai's premier interior transformation specialist. Creating sanctuaries where dreams meet reality.
            </p>
            <div className="flex items-start space-x-3 text-sm text-muted-charcoal">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <p>Dubai Design District, Building 3, UAE</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-sm md:text-base tracking-generous text-deep-charcoal mb-6 md:mb-8 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-4 md:space-y-6">
              {footerLinks.quick.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm md:text-base text-muted-charcoal hover:text-deep-charcoal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-sm md:text-base tracking-generous text-deep-charcoal mb-6 md:mb-8 uppercase">
              Contact
            </h4>
            <ul className="space-y-4 md:space-y-6">
              <li>
                <a
                  href="mailto:contact@karenksdubai.com"
                  className="flex items-center space-x-3 text-sm md:text-base text-muted-charcoal hover:text-deep-charcoal transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>contact@karenksdubai.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+971502269068"
                  className="flex items-center space-x-3 text-sm md:text-base text-muted-charcoal hover:text-deep-charcoal transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+971 502269068</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/971502269068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-sm md:text-base text-muted-charcoal hover:text-deep-charcoal transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp: +971 502269068</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/karenksdubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-sm md:text-base text-muted-charcoal hover:text-deep-charcoal transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@karenksdubai</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-sans text-sm md:text-base tracking-generous text-deep-charcoal mb-6 md:mb-8 uppercase">
              Legal
            </h4>
            <ul className="space-y-4 md:space-y-6">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm md:text-base text-muted-charcoal hover:text-deep-charcoal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-sans text-sm md:text-base tracking-generous text-deep-charcoal mb-6 md:mb-8 uppercase">
              Stay Inspired
            </h4>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full px-4 py-3 bg-off-white border border-soft-taupe rounded-lg text-sm md:text-base text-deep-charcoal focus:outline-none focus:ring-2 focus:ring-soft-gold focus:border-transparent transition-all min-h-[44px]"
              />
              <Button type="submit" variant="primary" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 md:pt-12 border-t border-soft-taupe">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm md:text-base text-center md:text-left text-muted-charcoal">
              © {currentYear} Karen K Sanctuaries. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-sm md:text-base text-muted-charcoal hover:text-deep-charcoal transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-muted-charcoal">|</span>
              <Link
                href="/terms"
                className="text-sm md:text-base text-muted-charcoal hover:text-deep-charcoal transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-muted-charcoal">|</span>
              <Link
                href="/cookies"
                className="text-sm md:text-base text-muted-charcoal hover:text-deep-charcoal transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/karenksdubai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-charcoal hover:text-deep-charcoal transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-charcoal hover:text-deep-charcoal transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.93-1.878.068-.267.415-1.762.415-1.762.223.427.876 1.804 1.939 2.778 1.3 1.05 2.789 1.227 3.789.702 1.364-.72 2.003-2.479 1.515-4.5-.389-1.616-1.612-2.727-2.94-3.218-1.05-.393-2.24-.392-2.94-.15-.666.231-1.182.593-1.515 1.06-.278-.678-.34-1.182-.18-1.515.606-1.273 1.818-2.06 2.94-2.424 1.364-.436 2.97-.303 3.94.303 1.03.636 1.515 1.636 1.515 2.94 0 .94-.303 1.878-.91 2.727-.545.787-1.273 1.424-2.182 1.879-.727.364-1.515.545-2.303.545z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-charcoal hover:text-deep-charcoal transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
