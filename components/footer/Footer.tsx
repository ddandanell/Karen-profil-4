'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle, ArrowRight, Award, Shield, Sparkles } from 'lucide-react';
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
    <footer className="bg-gradient-to-b from-warm-beige to-off-white text-muted-charcoal relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-soft-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-soft-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 content-width side-padding pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-20 mb-16 md:mb-20">
          {/* Brand Column - Enhanced */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-serif text-3xl md:text-4xl text-deep-charcoal mb-4 md:mb-6">
                Karen K Sanctuaries
              </h3>
              <p className="text-sm md:text-base leading-relaxed mb-6 md:mb-8 text-muted-charcoal">
                Dubai's premier interior transformation specialist. Creating sanctuaries where dreams meet reality.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 rounded-full border border-soft-taupe/30">
                  <Award className="w-4 h-4 text-soft-gold" />
                  <span className="text-xs font-semibold text-deep-charcoal">Top 50 Homes</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 rounded-full border border-soft-taupe/30">
                  <Shield className="w-4 h-4 text-soft-gold" />
                  <span className="text-xs font-semibold text-deep-charcoal">100+ Projects</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-muted-charcoal mb-6">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-soft-gold" />
                <p className="leading-relaxed">Dubai Design District, Building 3, UAE</p>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/karenksdubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/60 border border-soft-taupe/30 flex items-center justify-center text-muted-charcoal hover:text-soft-gold hover:bg-soft-gold/10 hover:border-soft-gold/50 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/60 border border-soft-taupe/30 flex items-center justify-center text-muted-charcoal hover:text-soft-gold hover:bg-soft-gold/10 hover:border-soft-gold/50 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/971502269068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/60 border border-soft-taupe/30 flex items-center justify-center text-muted-charcoal hover:text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/50 transition-all duration-300 hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links - Enhanced */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-serif text-lg md:text-xl text-deep-charcoal mb-6 md:mb-8 font-semibold">
                Quick Links
              </h4>
              <ul className="space-y-3 md:space-y-4">
                {footerLinks.quick.map((link, index) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm md:text-base text-muted-charcoal hover:text-soft-gold transition-all duration-300"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0" />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact - Enhanced */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-serif text-lg md:text-xl text-deep-charcoal mb-6 md:mb-8 font-semibold">
                Get In Touch
              </h4>
              <ul className="space-y-4 md:space-y-5">
                <li>
                  <a
                    href="mailto:contact@karenksdubai.com"
                    className="group flex items-center gap-3 text-sm md:text-base text-muted-charcoal hover:text-soft-gold transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/60 border border-soft-taupe/30 flex items-center justify-center group-hover:bg-soft-gold/10 group-hover:border-soft-gold/50 transition-all duration-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="group-hover:underline">contact@karenksdubai.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+971502269068"
                    className="group flex items-center gap-3 text-sm md:text-base text-muted-charcoal hover:text-soft-gold transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/60 border border-soft-taupe/30 flex items-center justify-center group-hover:bg-soft-gold/10 group-hover:border-soft-gold/50 transition-all duration-300">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="group-hover:underline">+971 502269068</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/971502269068"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm md:text-base text-muted-charcoal hover:text-[#25D366] transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/60 border border-soft-taupe/30 flex items-center justify-center group-hover:bg-[#25D366]/10 group-hover:border-[#25D366]/50 transition-all duration-300">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <span className="group-hover:underline">WhatsApp Chat</span>
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Newsletter - Enhanced */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-soft-gold" />
                <h4 className="font-serif text-lg md:text-xl text-deep-charcoal font-semibold">
                  Stay Inspired
                </h4>
              </div>
              <p className="text-xs md:text-sm text-muted-charcoal mb-6 leading-relaxed">
                Get exclusive design insights and transformation stories delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 pr-12 bg-white/80 border border-soft-taupe/30 rounded-xl text-sm md:text-base text-deep-charcoal focus:outline-none focus:ring-2 focus:ring-soft-gold focus:border-transparent transition-all min-h-[44px] placeholder:text-muted-charcoal/50"
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-charcoal/50 pointer-events-none" />
                </div>
                <Button type="submit" variant="primary" className="w-full group">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom Bar - Enhanced */}
        <div className="pt-8 md:pt-12 border-t border-soft-taupe/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm md:text-base text-muted-charcoal">
              <p>© {currentYear} Karen K Sanctuaries. All rights reserved.</p>
              <div className="flex items-center gap-4">
                {footerLinks.legal.map((link, index) => (
                  <React.Fragment key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-soft-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                    {index < footerLinks.legal.length - 1 && (
                      <span className="text-soft-taupe/50">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            
            {/* Additional Trust Indicators */}
            <div className="flex items-center gap-4 text-xs md:text-sm text-muted-charcoal">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-soft-gold" />
                <span>Certified Designer</span>
              </div>
              <span className="text-soft-taupe/50">•</span>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-soft-gold" />
                <span>Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
