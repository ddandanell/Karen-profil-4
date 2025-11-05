'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, ArrowDown, Clock, Home, Crown, BookOpen, Newspaper, Award, Trophy, ExternalLink, Video, Calendar } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { FAQ } from '@/components/ui/FAQ';
import { StepsSection } from '@/components/sections/StepsSection';
import { TrustBadges } from '@/components/ui/TrustBadges';
import { PremiumTrustBadges } from '@/components/ui/PremiumTrustBadges';

export default function HomePage() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 content-width side-padding py-20 md:py-32 lg:py-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 lg:space-y-12"
          >
            {/* Pre-Headline */}
            <p className="relative z-20 text-soft-gold font-sans text-base md:text-lg uppercase tracking-[2px] drop-shadow-[0_1px_3px_rgba(255,255,255,0.6)]">
              Dubai's Most Sought-After Interior Transformation
            </p>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight font-normal max-w-5xl mx-auto">
              Wake Up In Your Dream Sanctuary — And Watch Your Property Value Soar
            </h1>

            {/* Sub-Headline */}
            <p className="text-base md:text-lg text-white/90 font-sans font-light leading-relaxed max-w-3xl mx-auto">
              Experience the impossible: Haute couture interiors delivered in half the time, at half the cost. Whether you seek financial returns or emotional transformation, your space becomes a portal to luxury living.
            </p>

            {/* Primary CTA */}
            <div className="pt-4">
              <Button
                onClick={scrollToContact}
                variant="primary"
                size="lg"
                className="bg-soft-gold text-white hover:bg-gold-luminous hover:text-deep-charcoal hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Your Free Consultation
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-8 max-w-5xl mx-auto">
              <div className="flex items-center justify-center space-x-2 text-white/90 text-sm md:text-base">
                <Check className="w-5 h-5 text-soft-gold flex-shrink-0" />
                <span>100+ Luxury Transformations Across Dubai</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-white/90 text-sm md:text-base">
                <Check className="w-5 h-5 text-soft-gold flex-shrink-0" />
                <span>Average 35% Increase in Property Value</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-white/90 text-sm md:text-base">
                <Check className="w-5 h-5 text-soft-gold flex-shrink-0" />
                <span>Zero-Hassle, Fast-Track Delivery</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-white/90 text-sm md:text-base">
                <Check className="w-5 h-5 text-soft-gold flex-shrink-0" />
                <span>Custom Designs by Award-Winning Designer Karen El Khazen</span>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDown className="w-6 h-6 text-white/70 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: THE PROBLEM */}
      <Section id="problem" background="warm-beige" padding="large">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal mb-6 md:mb-8">
            Are You Trapped Between Bland Spaces and Expensive, Endless Renovations?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-12 md:mb-16">
          {/* ROI-Focused Column */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="font-sans text-xl md:text-2xl font-semibold text-deep-charcoal">
              For ROI-Focused Clients
            </h3>
            <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">
              You know your property could command higher rent or resale value, but...
            </p>
            <ul className="space-y-4">
              {[
                'Traditional renovations take 3-6 months and cost a fortune',
                'Generic fit-out companies deliver cookie-cutter results',
                'You can\'t afford months of vacancy while work drags on',
                'ROI is uncertain — will the investment actually pay back?',
                'Finding reliable contractors in Dubai is a nightmare',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-deep-charcoal mt-1 text-xl">✗</span>
                  <span className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lifestyle-Focused Column */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="font-sans text-xl md:text-2xl font-semibold text-deep-charcoal">
              For Lifestyle-Focused Clients
            </h3>
            <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">
              You dream of a space that reflects your soul, but...
            </p>
            <ul className="space-y-4">
              {[
                'Interior designers impose their style, not yours',
                'Projects take forever and disrupt your life completely',
                'Premium design costs are astronomical',
                'You\'re stuck living in generic, uninspiring spaces',
                'The process is stressful, confusing, and exhausting',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-deep-charcoal mt-1 text-xl">✗</span>
                  <span className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bridge Statement */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch bg-white rounded-2xl overflow-hidden shadow-xl">
            {/* Image - Left side with elegant frame effect */}
            <div className="relative h-64 md:h-80 lg:h-full min-h-[400px] order-1 lg:order-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-warm-beige/20 to-transparent z-10" />
              <Image
                src="/images/image.png"
                alt="Luxury interior design - Sophisticated living space"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Text Content - Right side with elegant padding */}
            <div className="bg-gradient-to-br from-off-white to-warm-beige p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-2">
              <div className="space-y-6 md:space-y-8">
                <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-deep-charcoal leading-[1.1]">
                  What if you could have both
                </p>
                <div className="w-16 h-0.5 bg-soft-gold" />
                <p className="font-sans text-lg md:text-xl lg:text-2xl font-light text-muted-charcoal leading-relaxed">
                  — a space that pays you back <span className="text-deep-charcoal font-medium">financially</span> AND feeds your soul <span className="text-deep-charcoal font-medium">emotionally</span>?
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2: THE SOLUTION */}
      <Section id="solution" background="off-white" padding="large">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal mb-6 md:mb-8">
            Introducing Karen K Sanctuaries Makeovers: Where Financial Intelligence Meets Mystical Design
          </h2>
          <p className="font-sans text-lg md:text-xl text-muted-charcoal max-w-3xl mx-auto leading-relaxed font-light">
            We don't just design rooms. We create portals to elevated living — spaces so extraordinary they transform both your property value and your daily reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-white p-6 md:p-8 lg:p-10 rounded-lg border border-soft-taupe hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <div className="text-4xl md:text-5xl mb-4 md:mb-6 transition-transform duration-300 group-hover:scale-110">🚀</div>
            <h3 className="font-sans text-xl md:text-2xl lg:text-3xl font-semibold text-deep-charcoal mb-3 md:mb-4 group-hover:text-soft-gold transition-colors duration-300">
              Extreme Speed
            </h3>
            <p className="font-sans text-sm md:text-base lg:text-lg text-muted-charcoal leading-relaxed">
              What takes others 6 months, we deliver in 5-45 days. Fast-track luxury without compromise. Your space transforms while others are still getting quotes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-white p-6 md:p-8 lg:p-10 rounded-lg border border-soft-taupe hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <div className="text-4xl md:text-5xl mb-4 md:mb-6 transition-transform duration-300 group-hover:scale-110">💰</div>
            <h3 className="font-sans text-xl md:text-2xl lg:text-3xl font-semibold text-deep-charcoal mb-3 md:mb-4 group-hover:text-soft-gold transition-colors duration-300">
              Proven ROI
            </h3>
            <p className="font-sans text-sm md:text-base lg:text-lg text-muted-charcoal leading-relaxed">
              Average 35% increase in property value. Our renovations pay for themselves through higher rents, faster sales, and premium positioning. This isn't cost — it's investment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group bg-white p-6 md:p-8 lg:p-10 rounded-lg border border-soft-taupe hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <div className="text-4xl md:text-5xl mb-4 md:mb-6 transition-transform duration-300 group-hover:scale-110">✨</div>
            <h3 className="font-sans text-xl md:text-2xl lg:text-3xl font-semibold text-deep-charcoal mb-3 md:mb-4 group-hover:text-soft-gold transition-colors duration-300">
              Bespoke Magic
            </h3>
            <p className="font-sans text-sm md:text-base lg:text-lg text-muted-charcoal leading-relaxed">
              No cookie-cutter templates. Every sanctuary is custom-designed to reflect your personality or maximize market appeal. We create universes, not just rooms.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* SECTION 3: VISUAL PROOF */}
      <Section id="portfolio" background="warm-beige" padding="large">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal mb-6 md:mb-8">
            See The Transformation: From Ordinary to Extraordinary
          </h2>
          <div className="mt-8">
            <TrustBadges variant="compact" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              title: 'Villa Transformation',
              description: 'From AED 180K to AED 280K annual rent. A complete transformation that elevated every surface, from custom marble finishes to handcrafted lighting, creating a sanctuary that commands premium rental value and attracts discerning tenants.',
              image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
            },
            {
              title: 'Penthouse Sanctuary',
              description: 'Client testimonial: "I wake up in my fantasy every day." This elevated space combines panoramic views with sculptural design elements, where every detail whispers luxury and every morning feels like arriving home to your dreams.',
              image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
            },
            {
              title: 'Boutique Hotel Lobby',
              description: 'Bookings increased 60% post-transformation. A strategic redesign that transformed the entrance experience into an immersive journey, blending artisanal textures with contemporary elegance that guests photograph and share instantly.',
              image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
            },
            {
              title: 'Investment Property',
              description: 'Sold 40% above market value. This transformation proved that strategic design is an investment accelerator, turning a standard property into a premium asset that buyers competed for, delivering exceptional returns.',
              image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 md:mb-6 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-deep-charcoal mb-3 text-left group-hover:text-soft-gold transition-colors duration-300">
                {project.title}
              </h3>
              <p className="font-sans text-sm md:text-base text-muted-charcoal text-left leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SECTION 4: SERVICE TIERS */}
      <Section id="services" background="off-white" padding="large">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal mb-6 md:mb-8">
            Choose Your Transformation: Three Pathways to Luxury
          </h2>
          <p className="font-sans text-lg md:text-xl text-muted-charcoal max-w-3xl mx-auto leading-relaxed">
            Whether you seek maximum ROI or ultimate lifestyle elevation, we have a sanctuary waiting for you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-20">
          {/* Express Face-Lift */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 md:w-8 md:h-8 text-gold-primary" />
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-deep-charcoal">
                The Express Face-Lift <span className="text-gray-500 text-base md:text-lg font-normal">(5–15 Days)</span>
              </h3>
            </div>
            <p className="body-text text-gray-700 max-w-3xl">
              For properties that need instant ROI and zero downtime. We refresh flooring, lighting, and finishes to create a dramatic before-and-after that photographs like new construction. Ideal for landlords, flippers, or short-term rental owners who need beauty <em>yesterday.</em>
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-6 space-y-1">
              <li>Average turnaround: 10 days</li>
              <li>ROI increase ≈ 25%</li>
              <li>Look: Clean · Fast · Transformative</li>
            </ul>
          </motion.div>

          <hr className="border-gold-light" />

          {/* Invasive Face-Lift */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <Home className="w-6 h-6 md:w-8 md:h-8 text-gold-primary" />
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-deep-charcoal">
                The Invasive Face-Lift <span className="text-gray-500 text-base md:text-lg font-normal">(3–4 Weeks)</span>
              </h3>
            </div>
            <p className="body-text text-gray-700 max-w-3xl">
              For owners seeking significant value uplift and upgraded functionality. We reimagine kitchens, bathrooms, and layouts while retaining your property's bones—haute-couture renovation that's precision-crafted and time-efficient.
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-6 space-y-1">
              <li>Average turnaround: 25 days</li>
              <li>ROI increase ≈ 30–40%</li>
              <li>Look: Bespoke · Elegant · High-Contrast</li>
            </ul>
          </motion.div>

          <hr className="border-gold-light" />

          {/* Full New-Lift */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <Crown className="w-6 h-6 md:w-8 md:h-8 text-gold-primary" />
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-deep-charcoal">
                The Full New-Lift (Turnkey Sanctuary) <span className="text-gray-500 text-base md:text-lg font-normal">(1–2 Months)</span>
              </h3>
            </div>
            <p className="body-text text-gray-700 max-w-3xl">
              For visionaries creating an entirely new lifestyle. We design and execute every element—structure, finishes, furniture, art, and ambiance—until your property becomes a living sanctuary worthy of awards.
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-6 space-y-1">
              <li>Average turnaround: 45–60 days</li>
              <li>ROI increase ≥ 50%</li>
              <li>Look: Fully Custom · Magazine-Level Design</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* SECTION 5: DUAL BENEFIT STACKS */}
      <Section id="benefits" background="warm-beige" padding="large">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal mb-6 md:mb-8">
            What Happens When You Choose Karen K Sanctuaries?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-12 md:mb-16">
          {/* Financial Transformation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-white p-8 md:p-10 lg:p-12 rounded-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-soft-taupe/30"
          >
            <div className="text-4xl mb-6">💰</div>
            <h3 className="font-sans text-2xl md:text-3xl font-semibold text-deep-charcoal mb-6">
              Financial Transformation
            </h3>
            <ul className="space-y-4">
              {[
                'Average 35% property value increase',
                'Command 20-40% higher rental rates',
                'Sell 30-60 days faster than market average',
                'Zero vacancy during fast-track renovation',
                'Local UAE sourcing = cost efficiency',
                'Full transparency on ROI projections',
                'Investment that pays you back',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-soft-gold flex-shrink-0 mt-1" />
                  <span className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Emotional Transformation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-white p-8 md:p-10 lg:p-12 rounded-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-soft-taupe/30"
          >
            <div className="text-4xl mb-6">✨</div>
            <h3 className="font-sans text-2xl md:text-3xl font-semibold text-deep-charcoal mb-6">
              Emotional Transformation
            </h3>
            <ul className="space-y-4">
              {[
                'Wake up in your personalized fantasy world',
                'Spaces that reflect your soul, not trends',
                'Zero stress, zero hassle process',
                'Living in breathtaking works of art daily',
                'Impress guests and feel profound pride',
                'Create memories in sacred spaces',
                'Transcend ordinary reality every single day',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-soft-gold flex-shrink-0 mt-1" />
                  <span className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="text-center pt-8 md:pt-12">
          <p className="font-sans text-lg md:text-xl text-muted-charcoal max-w-4xl mx-auto leading-relaxed">
            Most renovations force you to choose between profit and passion. With Karen K Sanctuaries, you get both — or focus purely on what matters most to you.
          </p>
        </div>
      </Section>

      {/* SECTION 6: THE PROCESS */}
      <Section id="process" background="off-white" padding="large">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal mb-6 md:mb-8">
            From First Call to Dream Sanctuary: Your Journey in 4 Simple Steps
          </h2>
          <div className="mt-8">
            <TrustBadges variant="compact" />
          </div>
        </div>

        <StepsSection />

        <div className="text-center mt-12 md:mt-16">
          <Button onClick={scrollToContact} variant="primary" size="lg">
            Start Your Journey — Book Free Discovery Call
          </Button>
        </div>
      </Section>

      {/* SECTION 7: ABOUT KAREN */}
      <Section id="about" background="warm-beige" padding="large">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal mb-6 md:mb-8">
            Meet the Visionary: Karen El Khazen
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/4] rounded-lg overflow-hidden"
          >
            <Image
              src="/images/karen-profile.png"
              alt="Karen El Khazen"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed space-y-4">
              <p>
                Karen El Khazen is Dubai's most sought-after interior transformation artist, known for creating spaces that transcend the ordinary and enter the realm of fantasy.
              </p>
              <p>
                With an unparalleled ability to understand client personalities and translate vision into reality, Karen has delivered 100+ luxury transformations across Dubai and the UAE — each completed at speeds that defy industry standards, without ever compromising quality.
              </p>
              <p>
                Her secret? A rare fusion of artistic mastery, operational excellence, and a deep network of local UAE artisans and craftspeople who share her commitment to bespoke excellence.
              </p>
              <p>
                Whether you seek financial returns or emotional transcendence, Karen's designs deliver both — making the impossible, inevitable.
              </p>
            </div>

            <div className="bg-warm-beige p-8 rounded-lg border border-soft-gold/50">
              <p className="font-sans text-lg md:text-xl text-deep-charcoal italic leading-relaxed">
                "I don't create spaces for you to live in. I create sanctuaries where you wake up inside your dreams — and those dreams pay you back."
              </p>
              <p className="font-sans text-base md:text-lg text-deep-charcoal mt-4 font-semibold">
                — Karen El Khazen
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* SECTION 7.25: 2025 PORTFOLIO TIMELINE */}
      <Section id="portfolio-timeline" background="off-white" padding="large">
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-4xl">🏆</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal">
              Karen K Sanctuaries – 2025 Portfolio Timeline
            </h2>
          </div>
        </div>

        {/* Timeline Projects */}
        <div className="max-w-5xl mx-auto space-y-24 md:space-y-32">
          {[
            {
              month: 'January 2025',
              project: 'Palm Jumeirah Penthouse for The Azar Family',
              duration: '28 days',
              karensPerspective: 'Creating warmth without compromising the light-filled, airy feeling. Soft gold accents, sculpted marble, and handmade lighting for intimate moments.',
              whatWasDone: '4-bedroom penthouse transformation with soft gold accents, sculpted marble kitchen island, and handmade lighting fixtures.',
              testimonial: 'Karen\'s team turned a sterile apartment into a home we love waking up in. Every dirham was worth it.',
              clientExperience: 'Every morning, light glows through handmade fixtures, casting soft golden shadows that dance across the marble island. Every evening, the space breathes—the open layout invites conversation, the carefully curated textures create warmth, and the custom lighting transforms our penthouse into a sanctuary. The marble island became our home\'s pulse, where friends gather and ask who designed this masterpiece. Living here feels like waking up in a luxury hotel every single day, but it\'s ours. The transformation didn\'t just change our space—it changed how we live.',
              author: 'Lina Azar',
              image: '/images/portfolio-default.webp',
            },
            {
              month: 'February 2025',
              project: 'Al Barari Villa Restyle for Mr & Mrs Al-Fahim',
              duration: '21 days',
              karensPerspective: 'Blending luxury with nature—Venetian plaster for warmth, natural onyx for depth, bamboo panels connecting to the gardens.',
              whatWasDone: 'Ground-floor redesign with Venetian plaster, natural onyx, and custom bamboo panels maintaining Al Barari\'s eco-soul.',
              testimonial: 'They promised beauty in three weeks – and delivered something beyond it.',
              clientExperience: 'Venetian plaster warms every surface, creating a tactile experience that feels both ancient and modern. The bamboo panels dissolve boundaries between inside and out, making the gardens feel like an extension of our living space. Three weeks delivered a transformation that feels like it took months—but without the stress. The natural onyx catches afternoon light, creating moments of pure beauty. Our ground floor now flows like a river, each space connecting seamlessly. Nature and luxury breathe as one here, and we can\'t imagine living anywhere else.',
              author: 'Omar Al-Fahim',
              image: '/images/portfolio-default.webp',
            },
            {
              month: 'March 2025',
              project: 'City Walk Apartment for Sara Ben-Khalid',
              duration: '17 days',
              karensPerspective: 'Downtown energy with minimalist sophistication—smart home functionality meets effortless chic.',
              whatWasDone: 'Smart-home makeover with voice-activated lighting, acoustic ceilings, and hidden storage walls.',
              testimonial: 'It looks like a Soho loft in Dubai – I rented it 48 hours after the shoot.',
              clientExperience: 'Hidden storage eliminates every trace of clutter—drawers slide silently, panels hide everything beautifully. The acoustic treatments create profound silence in the heart of the city, making it feel like a private sanctuary. The smart home features respond to voice commands, adjusting lighting and temperature before I even think about it. Listed the apartment 48 hours after completion, and multiple offers arrived immediately. The minimalist design photographs like a Soho loft, but it\'s so much more functional than it looks. This space doesn\'t just look good—it works perfectly for my lifestyle.',
              author: 'Sara Ben-Khalid',
              image: '/images/portfolio-default.webp',
            },
            {
              month: 'April 2025',
              project: 'Damac Hills Townhouse for The Raza Family',
              duration: '24 days',
              karensPerspective: 'Sophisticated yet child-friendly—flow, inspiration, and a kitchen that becomes the heart of the home.',
              whatWasDone: 'Family redesign: removed wall, added custom walnut joinery, built double-height library wall, and created kid-safe open kitchen.',
              testimonial: 'Delivered in under a month – and our children won\'t stop showing friends the reading loft.',
              clientExperience: 'Removed one wall and gained an entire new way of living. The open flow transforms how our family interacts—adults can cook while children play, yet everyone feels connected. The library wall climbs two stories, creating a reading nook that our children adore. They read more now, drawn to the custom walnut shelves and cozy corners. The kid-safe open kitchen became the heart of our home, where homework happens at the island and meals bring everyone together. Magazine-worthy design that\'s completely livable—no fragile pieces, no off-limits rooms. Every detail was chosen for beauty and durability.',
              author: 'Mina Raza',
              image: '/images/portfolio-default.webp',
            },
            {
              month: 'May 2025',
              project: 'Bluewaters Luxury Apartment for Anders Design Group',
              duration: '19 days',
              karensPerspective: 'A marketing tool—every element designed to photograph beautifully and create emotional connections.',
              whatWasDone: 'Corporate showcase suite with layered lighting, curved onyx table, and automated curtains. Every angle Instagram-ready.',
              testimonial: 'This suite sells our brand for us – people book before we even speak.',
              clientExperience: 'Layered lighting shifts moods throughout the day—bright and energizing in the morning, warm and intimate in the evening. The curved onyx table is a work of art that starts conversations with every visitor. Automated curtains create drama, revealing views at the perfect moment. Video tours of this suite get thousands of views, and clients book consultation calls before we even speak—the space sells our brand for us. Every angle is Instagram-ready, every detail photographable. But beyond the visual impact, the space functions beautifully for client presentations and team meetings. It\'s both a marketing tool and a highly functional workspace.',
              author: 'Marketing Director, Anders Design Group',
              image: '/images/portfolio-default.webp',
            },
            {
              month: 'June 2025',
              project: 'Jumeirah Beach Residence Investor Suite for Mr Rahim Kader',
              duration: '15 days',
              karensPerspective: 'ROI-focused luxury—strategic upgrades that photograph beautifully and maximize rental yield.',
              whatWasDone: 'Cost-optimized redesign: upcycled headboards, custom LED trims, and kitchen facelift that photographs like luxury marble.',
              testimonial: 'My Airbnb income rose 40% immediately. The ROI is absurdly good.',
              clientExperience: 'Skeptical at first—I\'m an investor, not a designer. But Karen showed me the numbers, the projections, and the market comparables. The investment paid for itself in three months through increased bookings alone. The booking rate doubled, and I secured premium rates that I never thought possible. The upcycled pieces look bespoke, the custom LED trims create ambiance that photographs beautifully, and the kitchen facelift looks like luxury marble in every listing photo. Guests book longer stays and leave glowing reviews. The ROI is absurdly good, and I\'m already planning my next property transformation.',
              author: 'Rahim Kader',
              image: '/images/portfolio-default.webp',
            },
            {
              month: 'July 2025',
              project: 'Downtown Private Office for Apex Holdings',
              duration: '18 days',
              karensPerspective: 'A gallery-like boardroom—mirrored ceilings, bronze glass, and scent diffusion creating memorable impressions.',
              whatWasDone: 'Boardroom fit-out with mirrored ceilings, bronze glass, and integrated scent diffusion.',
              testimonial: 'Every client meeting ends with "Who designed this place?" That says everything.',
              clientExperience: 'Mirrored ceilings expand the space visually, making our boardroom feel twice its size. The bronze glass adds warmth and sophistication, reflecting light in ways that create depth and intrigue. The integrated scent diffusion system creates memorable first impressions—clients remember our meetings not just for the content, but for the entire experience. Every meeting starts with "Who designed this place?" followed by conversations about our brand\'s sophistication. The space functions flawlessly for presentations, but it also serves as a powerful statement about who we are as a company. It\'s a functional space disguised as a sculpture.',
              author: 'CEO, Apex Holdings',
              image: '/images/portfolio-default.webp',
            },
            {
              month: 'August 2025',
              project: 'Al Khayma Restaurant Rebirth for Chef Firas Habib',
              duration: '26 days',
              karensPerspective: 'Warm, earthy, Instagram-worthy—terracotta walls, arched elements, and lighting that makes every dish look incredible.',
              whatWasDone: 'Complete interior rebuild: terracotta walls, arched bar counter, artisan mosaic floors. Lighting for evening glow and food photography.',
              testimonial: 'Guests now stay longer, order more, and take photos every night.',
              clientExperience: 'Terracotta walls radiate Mediterranean warmth, making every guest feel like they\'re dining in a luxury villa. The arched bar creates intimate moments, perfect for cocktails and conversation. The artisan mosaic floors add texture and visual interest, while the lighting makes every dish photograph beautifully—essential in the Instagram age. Table time increased 40% because guests want to linger in this space. They stay longer, order more, and take photos every night. The transformation didn\'t just change our interior—it changed our entire business model. Revenue increased, and we\'re fully booked weeks in advance.',
              author: 'Chef Firas Habib',
              image: '/images/portfolio-default.webp',
            },
            {
              month: 'September 2025',
              project: 'Al Safa Family Villa for Mr & Mrs Tariq',
              duration: '20 days',
              karensPerspective: 'Refined yet welcoming—Scandi warmth with gold accents creating a retreat for adults and inspiration for children.',
              whatWasDone: 'Master suite and children\'s bedrooms in Scandi warmth with gold tones. Built-in wardrobes and reading nook under staircase.',
              testimonial: 'Our home finally feels balanced – elegant yet playful.',
              clientExperience: 'The master suite became our true sanctuary—a retreat where we can escape and recharge. Scandi warmth meets gold accents, creating a space that feels both sophisticated and cozy. The children\'s rooms inspire play during the day and restful sleep at night, with custom storage that keeps toys organized yet accessible. The reading nook under the stairs became our favorite family spot—it\'s where we read bedtime stories, where the kids do homework, where we gather for quiet moments. The built-in wardrobes maximize space while maintaining the elegant aesthetic. Every detail balances elegance with playfulness, creating a home that works for both adults and children. Our home finally feels balanced—refined yet welcoming.',
              author: 'Layla Tariq',
              image: '/images/portfolio-default.webp',
            },
            {
              month: 'October 2025',
              project: 'DIFC Boutique Office for FinEdge Consulting',
              duration: '14 days',
              karensPerspective: 'Maximum impact in minimal space—strategic mirroring, dark walnut, and brushed nickel creating premium consultancy feel.',
              whatWasDone: '45 m² workspace with brushed nickel details and dark walnut desk systems. Strategic mirroring makes it feel twice the size.',
              testimonial: 'Clients think we moved to a bigger space – we didn\'t.',
              clientExperience: 'Our 45 m² workspace feels like a premium consultancy worth triple the size. Strategic mirroring expands the space visually, creating depth and eliminating any sense of confinement. The dark walnut desk systems add sophistication and warmth, while brushed nickel details provide modern elegance. Sound treatment ensures privacy during client calls, and the lighting creates a professional yet welcoming atmosphere. Clients consistently think we moved to a bigger space—we didn\'t, but the transformation made it feel that way. The space functions perfectly for our team of four, with smart storage solutions and flexible layouts that adapt to our needs.',
              author: 'FinEdge Founder',
              image: '/images/portfolio-default.webp',
            },
            {
              month: 'November 2025',
              project: 'Airbnb Collection for Horizon Investments',
              duration: '5 projects / 25 days',
              karensPerspective: 'Cohesive brand identity across five units—neutral palettes, luxury SPC flooring, and uniform touches for portfolio appeal.',
              whatWasDone: 'Five property makeovers in Business Bay and JVC. SPC flooring, neutral palettes, and uniform branding for portfolio cohesion.',
              testimonial: 'Booked 100% of December within 48 hours of the photo release.',
              clientExperience: 'Five units transformed in record time, creating a cohesive brand identity across our entire portfolio. The neutral palettes appeal to a broad range of guests, while the luxury SPC flooring provides durability and high-end aesthetics. Uniform branding touches—from artwork to linens—make the portfolio feel curated and professional. We achieved 100% booking within 48 hours of the photo release, and repeat bookings are already secured. The transformation didn\'t just improve individual properties—it elevated our entire brand. Guests now recognize our properties instantly, and we\'re commanding premium rates across all five units.',
              author: 'Horizon Investments Manager',
              image: '/images/portfolio-default.webp',
            },
            {
              month: 'December 2025',
              project: 'Top 50 Homes Dubai Submission & Showcase',
              duration: 'Curation phase – 14 days',
              karensPerspective: 'Showcasing our best work—seven projects representing different expertise from family homes to investment properties.',
              whatWasDone: 'Seven standout projects selected for award nomination. Behind-the-scenes montage and press interviews for 2025 edition.',
              testimonial: 'This brand keeps raising the bar – year after year.',
              clientExperience: 'Karen K Sanctuaries transforms not just spaces, but lives. The seven projects we selected for award nomination showcase the full spectrum of their expertise—from family homes that become sanctuaries, to investment properties that maximize ROI, from fast-track makeovers completed in days, to complete transformations that redefine luxury living. Each project tells a compelling story of transformation, and the quality is consistently outstanding. The behind-the-scenes montage captures the precision, care, and artistry that goes into every project. This brand keeps raising the bar year after year, setting new standards for what\'s possible in interior transformation. The press interviews for the 2025 edition will showcase why Karen K Sanctuaries is Dubai\'s most sought-after interior transformation specialist.',
              author: 'Top 50 Homes Dubai Editorial Team',
              image: '/images/portfolio-default.webp',
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="border-b border-soft-taupe pb-24 md:pb-32 last:border-b-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
                {/* Left Column - Project Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 bg-warm-beige text-soft-gold text-xs md:text-sm tracking-generous uppercase font-semibold rounded-full">
                      Featured Case
                    </span>
                    <span className="font-sans text-xs md:text-sm text-muted-charcoal italic">
                      50+ more projects
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-deep-charcoal text-white font-sans text-xs md:text-sm tracking-generous uppercase font-bold rounded-lg shadow-lg">
                      {project.month}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-6 leading-tight">
                    {project.project}
                  </h3>
                  
                  {/* Karen's Perspective */}
                  {project.karensPerspective && (
                    <div className="mb-6">
                      <h4 className="font-serif text-lg md:text-xl text-deep-charcoal mb-3 flex items-center gap-2">
                        <span className="text-soft-gold">👁️</span>
                        Karen's Vision
                      </h4>
                      <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed italic">
                        {project.karensPerspective}
                      </p>
                    </div>
                  )}
                  
                  {/* What Was Done */}
                  {project.whatWasDone && (
                    <div className="mb-6">
                      <h4 className="font-serif text-lg md:text-xl text-deep-charcoal mb-3 flex items-center gap-2">
                        <span className="text-soft-gold">✨</span>
                        What We Delivered
                      </h4>
                      <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">
                        {project.whatWasDone}
                      </p>
                    </div>
                  )}
                  
                  {/* Duration */}
                  <div className="mb-6">
                    <p className="font-sans text-sm md:text-base text-muted-charcoal">
                      <strong className="text-deep-charcoal">Timeline:</strong> {project.duration}
                    </p>
                  </div>
                </div>
                
                {/* Right Column - Project Image */}
                {project.image && (
                  <div className="lg:col-span-3">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
                      <Image
                        src={project.image}
                        alt={project.project}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Client's Experience - Under Image */}
                    <div className="bg-warm-beige border-l-4 border-soft-gold p-6 md:p-8 rounded-lg">
                      <h4 className="font-serif text-lg md:text-xl text-deep-charcoal mb-4 flex items-center gap-2">
                        <span className="text-soft-gold">💬</span>
                        Experience
                      </h4>
                      {project.clientExperience ? (
                        <>
                          <p className="font-sans text-base md:text-lg text-deep-charcoal leading-relaxed mb-4">
                            {project.clientExperience}
                          </p>
                          <div className="pt-4 border-t border-soft-gold/30">
                            <p className="font-sans text-base md:text-lg text-deep-charcoal leading-relaxed italic mb-2">
                              "{project.testimonial}"
                            </p>
                            <p className="font-sans text-sm md:text-base text-muted-charcoal">
                              – {project.author}
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <p className="font-sans text-base md:text-lg text-deep-charcoal leading-relaxed italic mb-2">
                            "{project.testimonial}"
                          </p>
                          <p className="font-sans text-sm md:text-base text-muted-charcoal">
                            – {project.author}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SECTION 7.5: AWARDS, PRESS & RECOGNITION */}
      <Section id="recognition" background="off-white" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-28"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-soft-gold/10 mb-6 md:mb-8">
            <Trophy className="w-10 h-10 md:w-12 md:h-12 text-soft-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal mb-6 md:mb-8">
            Featured & Recognized By Leading Media
          </h2>
          <p className="font-sans text-lg md:text-xl text-muted-charcoal max-w-3xl mx-auto leading-relaxed">
            Internationally recognized for transforming Dubai's most exclusive homes.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
          {/* Awards & Nominations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="group relative bg-white rounded-2xl border border-soft-taupe/50 p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-soft-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-soft-gold/20 to-soft-gold/10 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Trophy className="w-8 h-8 md:w-10 md:h-10 text-soft-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-deep-charcoal mb-1">
                    Awards & Nominations
                  </h3>
                  <p className="font-sans text-sm md:text-base text-muted-charcoal">
                    Excellence in Design
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-serif text-xl md:text-2xl font-semibold text-deep-charcoal mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-soft-gold" />
                    Top 50 Homes Dubai
                  </h4>
                  <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed mb-6">
                    Recognized multiple consecutive years for outstanding interior design excellence:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 2023 Award */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="bg-warm-beige/50 rounded-xl p-6 border border-soft-taupe/30 hover:border-soft-gold/50 transition-all duration-300 group/card"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-4 h-4 text-soft-gold" />
                            <span className="font-sans text-xs md:text-sm text-soft-gold font-semibold uppercase tracking-wide">2023</span>
                          </div>
                          <h5 className="font-serif text-lg md:text-xl text-deep-charcoal mb-2">
                            Top 50 Homes Dubai 2023
                          </h5>
                          <p className="font-sans text-sm md:text-base text-muted-charcoal leading-relaxed">
                            Featured property and nomination video published
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 pt-4 border-t border-soft-taupe/30">
                        <a
                          href="https://www.top50homes.com/property/top-50-19"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm md:text-base text-soft-gold hover:text-gold-dark transition-all duration-300 group/link"
                        >
                          <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                          <span>View Featured Property</span>
                        </a>
                        <a
                          href="https://www.youtube.com/watch?v=RrGyNHTGJUc"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm md:text-base text-soft-gold hover:text-gold-dark transition-all duration-300 group/link"
                        >
                          <Video className="w-4 h-4 transition-transform group-hover/link:scale-110" />
                          <span>Watch Nomination Video</span>
                        </a>
                      </div>
                    </motion.div>

                    {/* 2024 Award */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="bg-warm-beige/50 rounded-xl p-6 border border-soft-taupe/30 hover:border-soft-gold/50 transition-all duration-300 group/card"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-4 h-4 text-soft-gold" />
                            <span className="font-sans text-xs md:text-sm text-soft-gold font-semibold uppercase tracking-wide">2024</span>
                          </div>
                          <h5 className="font-serif text-lg md:text-xl text-deep-charcoal mb-2">
                            Top 50 Homes Dubai 2024
                          </h5>
                          <p className="font-sans text-sm md:text-base text-muted-charcoal leading-relaxed">
                            Featured property and nomination video published
                          </p>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-soft-taupe/30">
                        <a
                          href="https://www.top50homes.com/property/top-50-homes-2024-26"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm md:text-base text-soft-gold hover:text-gold-dark transition-all duration-300 group/link"
                        >
                          <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                          <span>View Featured Property</span>
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Press & Media Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="group relative bg-white rounded-2xl border border-soft-taupe/50 p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-soft-gold/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-soft-gold/20 to-soft-gold/10 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Newspaper className="w-8 h-8 md:w-10 md:h-10 text-soft-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-deep-charcoal mb-1">
                    Press & Media Features
                  </h3>
                  <p className="font-sans text-sm md:text-base text-muted-charcoal">
                    Featured in Leading Publications
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Harmonies Magazine */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-warm-beige/50 rounded-xl p-6 border border-soft-taupe/30 hover:border-soft-gold/50 transition-all duration-300 group/card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white shadow-md flex items-center justify-center flex-shrink-0 group-hover/card:shadow-lg transition-shadow">
                      <BookOpen className="w-7 h-7 md:w-8 md:h-8 text-soft-gold" />
                    </div>
                    <h4 className="font-serif text-xl md:text-2xl font-semibold text-deep-charcoal">
                      Harmonies Magazine
                    </h4>
                  </div>
                  <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed mb-4 italic">
                    "Karen El Khazen: A Multi-Talented Artist"
                  </p>
                  <p className="font-sans text-sm md:text-base text-muted-charcoal leading-relaxed mb-4">
                    In-depth profile and design feature showcasing her unique approach to interior transformation, exploring how she blends artistic vision with strategic design principles to create spaces that transcend ordinary living.
                  </p>
                  <a
                    href="https://www.harmoniesmagazine.com/en/architecture-interiors-en/interiors-en/karen-el-khazen-a-multi-talented-artist/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm md:text-base text-soft-gold hover:text-gold-dark transition-all duration-300 group/link font-semibold"
                  >
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    <span>Read Full Article</span>
                  </a>
                </motion.div>

                {/* The National News */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-warm-beige/50 rounded-xl p-6 border border-soft-taupe/30 hover:border-soft-gold/50 transition-all duration-300 group/card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white shadow-md flex items-center justify-center flex-shrink-0 group-hover/card:shadow-lg transition-shadow">
                      <Newspaper className="w-7 h-7 md:w-8 md:h-8 text-soft-gold" />
                    </div>
                    <h4 className="font-serif text-xl md:text-2xl font-semibold text-deep-charcoal">
                      The National News (UAE)
                    </h4>
                  </div>
                  <p className="font-sans text-sm md:text-base text-muted-charcoal leading-relaxed mb-4">
                    Featured multiple times in the UAE's leading English-language newspaper:
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="pb-3 border-b border-soft-taupe/30 last:border-b-0">
                      <p className="font-serif text-sm md:text-base text-deep-charcoal font-semibold mb-1">
                        "Unique Homes: Narnia Villa Dubai"
                      </p>
                      <p className="font-sans text-xs md:text-sm text-muted-charcoal mb-2">December 2023</p>
                      <p className="font-sans text-xs md:text-sm text-muted-charcoal leading-relaxed mb-2">
                        A deep dive into one of Karen's most magical transformations.
                      </p>
                      <a
                        href="https://www.thenationalnews.com/lifestyle/home-garden/2023/12/26/unique-homes-narnia-villa-dubai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs md:text-sm text-soft-gold hover:text-gold-dark transition-all duration-300 group/link"
                      >
                        <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                        <span>Read Article</span>
                      </a>
                    </div>
                    <div>
                      <p className="font-serif text-sm md:text-base text-deep-charcoal font-semibold mb-1">
                        "My Dubai Rent: Interior Designer Spends Dh400,000..."
                      </p>
                      <p className="font-sans text-xs md:text-sm text-muted-charcoal mb-2">October 2023</p>
                      <a
                        href="https://www.thenationalnews.com/uae/2023/10/22/my-dubai-rent-interior-designer-spends-dh400000-transforming-four-bedroom-villa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs md:text-sm text-soft-gold hover:text-gold-dark transition-all duration-300 group/link"
                      >
                        <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                        <span>Read Article</span>
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Hot Media Group */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="md:col-span-2 bg-warm-beige/50 rounded-xl p-6 border border-soft-taupe/30 hover:border-soft-gold/50 transition-all duration-300 group/card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white shadow-md flex items-center justify-center flex-shrink-0 group-hover/card:shadow-lg transition-shadow">
                      <Award className="w-7 h-7 md:w-8 md:h-8 text-soft-gold" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl md:text-2xl font-semibold text-deep-charcoal mb-1">
                        Hot Media Group
                      </h4>
                      <p className="font-sans text-xs md:text-sm text-muted-charcoal">
                        Publisher of Top 50 Homes Dubai
                      </p>
                    </div>
                  </div>
                  <p className="font-sans text-sm md:text-base text-muted-charcoal leading-relaxed mb-4">
                    Featuring Karen K Sanctuaries' most stunning transformations in the prestigious annual magazine:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://issuu.com/hotmedia/docs/top50homes_23_fp_online"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-soft-taupe/50 hover:border-soft-gold text-sm md:text-base text-deep-charcoal hover:text-soft-gold transition-all duration-300 group/link shadow-sm hover:shadow-md"
                    >
                      <Calendar className="w-4 h-4 text-soft-gold" />
                      <span className="font-semibold">2023 Edition</span>
                      <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                    <a
                      href="https://issuu.com/hotmedia/docs/top50homes24_online"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-soft-taupe/50 hover:border-soft-gold text-sm md:text-base text-deep-charcoal hover:text-soft-gold transition-all duration-300 group/link shadow-sm hover:shadow-md"
                    >
                      <Calendar className="w-4 h-4 text-soft-gold" />
                      <span className="font-semibold">2024 Edition</span>
                      <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* SECTION 8: SOCIAL PROOF */}
      <Section id="testimonials" background="off-white" padding="large">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal mb-6 md:mb-8">
            What Our Clients Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <TestimonialCard
            quote="We were skeptical that a 2-week renovation could transform our rental villa, but Karen's team delivered magic. Our rental income jumped from AED 180K to AED 280K annually. The transformation paid for itself in under 8 months. Remarkable."
            author="Mohammed A."
            title="Property Investor, Palm Jumeirah"
            rating={5}
          />
          <TestimonialCard
            quote="For the first time in my life, I wake up excited to be in my own home. Karen didn't just design rooms — she created portals to different worlds. My penthouse is now my sanctuary, my escape, my inspiration. I cry happy tears regularly."
            author="Sophia M."
            title="Creative Director, Downtown Dubai"
            rating={5}
          />
          <TestimonialCard
            quote="Karen understood both my financial goals and my need for a space that reflected my personality. The result? A boutique hotel that's 90% booked year-round, AND a space so beautiful I can't stop photographing it. Best investment I've ever made."
            author="Layla K."
            title="Boutique Hotel Owner, Dubai Marina"
            rating={5}
          />
          <TestimonialCard
            quote="Three weeks from start to completion. I still can't believe it. The quality, the attention to detail, the artistry — all delivered faster than anyone said was possible. Karen doesn't overpromise. She over-delivers."
            author="David R."
            title="Villa Owner, Emirates Hills"
            rating={5}
          />
        </div>
      </Section>

      {/* SECTION 9: URGENCY & SCARCITY */}
      <Section id="urgency" background="warm-beige" padding="large">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal mb-6 md:mb-8">
              Why Wait? Your Dream Sanctuary is Weeks Away, Not Months
            </h2>
          </div>

          {/* Alert Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FFF9F0] border-2 border-soft-gold rounded-luxury-lg p-10 text-center"
          >
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="font-sans text-2xl md:text-3xl font-semibold text-deep-charcoal mb-4">
              Limited Availability Notice
            </h3>
            <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">
              Karen K Sanctuaries only accepts 2-3 projects per month to ensure every transformation receives the meticulous attention it deserves. Current availability for new projects is November - December 2025.
            </p>
          </motion.div>

          {/* Time-Sensitive Offer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-10 rounded-lg border border-soft-taupe"
          >
            <h3 className="font-sans text-xl md:text-2xl font-semibold text-deep-charcoal mb-6">
              Book your discovery call in the next 7 days and receive:
            </h3>
            <ul className="space-y-4">
              {[
                'Free 3D visualization of your space transformation (Value: AED 5,000)',
                'Priority scheduling for your transformation dates',
                'Exclusive access to Karen\'s 2025 year-end availability',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-soft-gold flex-shrink-0 mt-1" />
                  <span className="font-sans text-base md:text-lg text-muted-charcoal">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Cost of Waiting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="font-sans text-lg md:text-xl font-semibold text-deep-charcoal">
              Every month you delay is another month of:
            </h3>
            <ul className="space-y-3">
              {[
                'Lost rental income from your underperforming property',
                'Living in spaces that drain rather than energize you',
                'Watching property values rise while yours stays stagnant',
                'Missing the year-end transformation window',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-deep-charcoal mt-1 text-xl">✗</span>
                  <span className="font-sans text-base md:text-lg text-muted-charcoal">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* SECTION 9.5: PREMIUM TRUST BADGES */}
      <Section id="premium-trust" background="warm-beige" padding="large">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal mb-6 md:mb-8">
            Why Choose Karen K Sanctuaries?
          </h2>
          <p className="font-sans text-lg md:text-xl text-muted-charcoal max-w-3xl mx-auto leading-relaxed">
            Proven results, award-winning design, and transformative experiences that elevate both your space and your property value.
          </p>
        </div>
        
        <PremiumTrustBadges onBookClick={scrollToContact} />
      </Section>

      {/* SECTION 10: STRONG FINAL CTA */}
      <Section id="contact" background="off-white" padding="large">
        <div className="text-center max-w-4xl mx-auto space-y-8 md:space-y-12">
          {/* Image above text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-2xl mx-auto mb-8 md:mb-12"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/sanctuary-awaits.png"
                alt="Your Sanctuary Awaits - Elegant interior design transformation"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep-charcoal">
            Your Sanctuary Awaits. The Only Question is: When?
          </h2>
          <p className="font-sans text-lg md:text-xl text-muted-charcoal max-w-3xl mx-auto leading-relaxed">
            Will you wake up in your dream space this year, or wait another year living in compromise?
          </p>
          
          <div className="py-8">
            <TrustBadges variant="compact" />
          </div>

          <Button
            onClick={scrollToContact}
            variant="primary"
            size="lg"
            className="bg-deep-charcoal hover:bg-soft-gold hover:text-deep-charcoal"
          >
            Book Your Free Discovery Call Now — Transform in 5-45 Days
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {[
              'No obligation, no pressure — just possibilities',
              '15-30 minute call to explore your vision',
              'Find out if Karen K Sanctuaries is right for you',
              'Get clarity on timeline, process, and investment',
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 text-sm md:text-base text-muted-charcoal">
                <Check className="w-4 h-4 text-soft-gold flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-soft-taupe">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm md:text-base text-muted-charcoal">
              <span>📍 Dubai Design District, Building 3, UAE</span>
              <span>📱 WhatsApp: +971 502269068</span>
              <span>⭐ 100+ Luxury Transformations</span>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 11: FAQ */}
      <Section id="faq" background="warm-beige" padding="large">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal mb-6 md:mb-8">
            Your Questions, Answered
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <FAQ
            items={[
              {
                question: 'How can you deliver luxury renovations so fast?',
                answer: 'Our secret is a highly optimized network of specialized local UAE contractors, streamlined processes, and Karen\'s 15+ years of experience. We know exactly what works, who to call, and how to deliver without delays. Speed is our advantage, not our compromise.',
              },
              {
                question: 'What if I\'m not sure which service tier is right for me?',
                answer: 'That\'s exactly what the discovery call is for. We\'ll discuss your goals, timeline, and budget, then recommend the perfect pathway. Many clients start with one tier and adjust after our consultation.',
              },
              {
                question: 'Do you work with tenants, or only property owners?',
                answer: 'Both! We work with property owners seeking ROI, tenants wanting bespoke living spaces, landlords, developers, and boutique hotel owners. If you have authority to transform the space, we can work together.',
              },
              {
                question: 'What areas of Dubai do you serve?',
                answer: 'Primary focus: Jumeirah 1-3, Umm Suqeim 1-3, Al Safa, Al Manara, Al Wasl, Palm Jumeirah, Emirates Hills, Dubai Hills, Business Bay, Downtown Dubai, City Walk, and Al Barari. We also consider other premium areas on a case-by-case basis.',
              },
              {
                question: 'How much should I expect to invest?',
                answer: 'Investment varies based on space size, service tier, and customization level. Basic Face-Lifts start at [TBD], Invasive Face-Lifts at [TBD], and Full New-Lifts are bespoke. During discovery, we\'ll give you transparent pricing aligned with your goals.',
              },
              {
                question: 'What if I don\'t have a clear vision yet?',
                answer: 'Perfect — that\'s our specialty. Karen excels at drawing out your personality, preferences, and goals, then translating them into design concepts you\'ll love. Many of our best projects started with "I don\'t know what I want, but I\'ll know it when I see it."',
              },
              {
                question: 'Do you offer payment plans?',
                answer: 'Yes, we offer flexible payment structures aligned with project milestones. Discuss options during your discovery call.',
              },
              {
                question: 'What if I\'m not satisfied with the design direction?',
                answer: 'We iterate until you\'re thrilled. Karen\'s process includes design reviews and adjustments to ensure your complete satisfaction before any major work begins.',
              },
            ]}
          />
        </div>
      </Section>

      {/* SECTION 12: GUARANTEE */}
      <Section id="guarantee" background="off-white" padding="large">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal mb-6 md:mb-8">
            Our Promise: Transformation or Total Transparency
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto relative"
        >
          {/* Elegant background with subtle gradient */}
          <div className="bg-gradient-to-br from-warm-beige via-off-white to-warm-beige/50 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-soft-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-soft-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 text-center space-y-8 md:space-y-12">
              {/* Icon with elegant styling */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-soft-gold to-gold-dark flex items-center justify-center shadow-xl">
                  <span className="text-4xl md:text-5xl">🛡️</span>
                </div>
              </div>
              
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-deep-charcoal mb-8 md:mb-12">
                The Karen K Sanctuaries Guarantee
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 md:p-8 hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-soft-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-soft-gold/20 transition-colors">
                      <span className="text-xl">⚡</span>
                    </div>
                    <h4 className="font-serif text-xl md:text-2xl font-semibold text-deep-charcoal group-hover:text-soft-gold transition-colors">
                      1. Speed Commitment
                    </h4>
                  </div>
                  <p className="font-sans text-sm md:text-base text-muted-charcoal leading-relaxed">
                    We deliver within the agreed timeline, or we discount the final invoice proportionally for every week of delay. Your time matters.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 md:p-8 hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-soft-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-soft-gold/20 transition-colors">
                      <span className="text-xl">✨</span>
                    </div>
                    <h4 className="font-serif text-xl md:text-2xl font-semibold text-deep-charcoal group-hover:text-soft-gold transition-colors">
                      2. Quality Standard
                    </h4>
                  </div>
                  <p className="font-sans text-sm md:text-base text-muted-charcoal leading-relaxed">
                    Every material, finish, and installation meets our rigorous quality standards. If something doesn't meet expectations, we make it right — no questions asked.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 md:p-8 hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-soft-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-soft-gold/20 transition-colors">
                      <span className="text-xl">🔍</span>
                    </div>
                    <h4 className="font-serif text-xl md:text-2xl font-semibold text-deep-charcoal group-hover:text-soft-gold transition-colors">
                      3. ROI Transparency
                    </h4>
                  </div>
                  <p className="font-sans text-sm md:text-base text-muted-charcoal leading-relaxed">
                    For investment-focused clients, we provide clear projections and market comparables. While we can't guarantee market forces, we guarantee our designs maximize your property's competitive position.
                  </p>
                </div>
              </div>

              <p className="font-serif text-lg md:text-xl text-deep-charcoal font-semibold italic leading-relaxed pt-6 md:pt-8 mt-8 md:mt-12 border-t border-soft-taupe/30">
                Your risk is minimal. Your upside is extraordinary.
              </p>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
