'use client';

import React, { Fragment, memo, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, ArrowDown, BookOpen, Newspaper, Award, Trophy, ExternalLink, Video, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { FAQ } from '@/components/ui/FAQ';
import { StepsSection } from '@/components/sections/StepsSection';
import { TrustBadges } from '@/components/ui/TrustBadges';
import { PremiumTrustBadges } from '@/components/ui/PremiumTrustBadges';
import {
  PROBLEM_COLUMNS,
  SOLUTION_HIGHLIGHTS,
  PORTFOLIO_PROJECTS,
  SERVICE_TIERS,
  TRANSFORMATION_CATEGORIES,
  PORTFOLIO_TIMELINE_PROJECTS,
  TESTIMONIALS,
  URGENCY_INCENTIVES,
  URGENCY_COSTS,
  FAQ_ITEMS,
  GUARANTEE_PILLARS,
} from '@/lib/content/homePageContent';

// Project Image Gallery Component
type ProjectImageGalleryProps = {
  images: string[];
  projectName: string;
};

const FALLBACK_GALLERY_IMAGE = '/images/portfolio-default.webp';

const ProjectImageGallery = memo(function ProjectImageGallery({ images, projectName }: ProjectImageGalleryProps) {
  const safeImages = images.length > 0 ? images : [FALLBACK_GALLERY_IMAGE];
  const imageCount = safeImages.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex((prev) => (prev < imageCount ? prev : 0));
  }, [imageCount]);

  const handleNextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % imageCount);
  }, [imageCount]);

  const handlePrevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + imageCount) % imageCount);
  }, [imageCount]);

  const hasMultipleImages = imageCount > 1;

  return (
    <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6 group">
      <Image
        src={safeImages[currentIndex]}
        alt={`${projectName} - Image ${currentIndex + 1}`}
        fill
        className="object-cover transition-opacity duration-300"
        priority={currentIndex === 0}
      />

      {hasMultipleImages && (
        <>
          <button
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Previous image"
            type="button"
          >
            <ChevronLeft className="w-6 h-6 text-deep-charcoal" />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Next image"
            type="button"
          >
            <ChevronRight className="w-6 h-6 text-deep-charcoal" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            {currentIndex + 1} / {imageCount}
          </div>
        </>
      )}
    </div>
  );
});

export default function HomePage() {
  const scrollToContact = useCallback(() => {
    const element = document.querySelector<HTMLElement>('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="overflow-x-hidden w-full max-w-full">
      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden w-full max-w-full">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0 w-full max-w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover max-w-full"
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
              Wake Up In Your Dream Sanctuary And Watch Your Property Value Soar
            </h1>

            {/* Sub-Headline */}
            <p className="text-base md:text-lg text-white/90 font-sans font-light leading-relaxed max-w-3xl mx-auto">
              Experience the impossible: Luxury interiors delivered in half the time, at half the cost. Whether you seek financial returns or emotional transformation, your space becomes a portal to luxury living.
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
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal mb-6 md:mb-8 leading-relaxed">
            Are You Trapped Between Bland Spaces and Expensive, Endless Renovations?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-12 md:mb-16">
          {PROBLEM_COLUMNS.map((column) => (
            <div key={column.title} className="space-y-6 md:space-y-8">
              <h3 className="font-sans text-xl md:text-2xl font-semibold text-deep-charcoal">{column.title}</h3>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">{column.description}</p>
              <ul className="space-y-4">
                {column.items.map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <span className="text-deep-charcoal mt-1 text-xl">✗</span>
                    <span className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
          {SOLUTION_HIGHLIGHTS.map((highlight) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: highlight.delay ?? 0 }}
              className="group bg-white p-6 md:p-8 lg:p-10 rounded-lg border border-soft-taupe hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl md:text-5xl mb-4 md:mb-6 transition-transform duration-300 group-hover:scale-110 text-center">
                {highlight.icon}
              </div>
              <h3 className="font-sans text-xl md:text-2xl lg:text-3xl font-semibold text-deep-charcoal mb-3 md:mb-4 group-hover:text-soft-gold transition-colors duration-300">
                {highlight.title}
              </h3>
              <p className="font-sans text-sm md:text-base lg:text-lg text-muted-charcoal leading-relaxed">{highlight.description}</p>
            </motion.div>
          ))}
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
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
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
              <p className="font-sans text-sm md:text-base text-muted-charcoal text-left leading-relaxed">{project.description}</p>
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
          {SERVICE_TIERS.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <Fragment key={tier.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: tier.delay ?? 0 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-gold-primary" />
                    <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-deep-charcoal">{tier.title}</h3>
                  </div>
                  <p className="body-text text-gray-700 max-w-3xl">{tier.description}</p>
                  <p className="font-sans text-lg md:text-xl lg:text-2xl text-deep-charcoal font-semibold mt-4">{tier.timeline}</p>
                  <ul className="text-sm text-gray-600 list-disc pl-6 space-y-1">
                    {tier.stats.map((stat) => (
                      <li key={stat}>{stat}</li>
                    ))}
                  </ul>
                </motion.div>
                {index < SERVICE_TIERS.length - 1 && <hr className="border-gold-light" />}
              </Fragment>
            );
          })}
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
          {TRANSFORMATION_CATEGORIES.map((category) => {
            const xOffset = category.direction === 'left' ? -20 : 20;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: xOffset }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group bg-white p-8 md:p-10 lg:p-12 rounded-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-soft-taupe/30"
              >
                <div className="text-4xl mb-6">{category.icon}</div>
                <h3 className="font-sans text-2xl md:text-3xl font-semibold text-deep-charcoal mb-6">{category.title}</h3>
                <ul className="space-y-4">
                  {category.bullets.map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-soft-gold flex-shrink-0 mt-1" />
                      <span className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
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

        <div className="max-w-5xl mx-auto space-y-24 md:space-y-32">
          {PORTFOLIO_TIMELINE_PROJECTS.map((project, index) => (
            <motion.div
              key={`${project.month}-${project.project}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="border-b border-soft-taupe pb-24 md:pb-32 last:border-b-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 bg-warm-beige text-soft-gold text-xs md:text-sm tracking-generous uppercase font-semibold rounded-full">
                      Featured Case
                    </span>
                    <span className="font-sans text-xs md:text-sm text-muted-charcoal italic">50+ more projects</span>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-deep-charcoal text-white font-sans text-xs md:text-sm tracking-generous uppercase font-bold rounded-lg shadow-lg">
                      {project.month}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-6 leading-tight">{project.project}</h3>

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

                  {project.whatWasDone && (
                    <div className="mb-6">
                      <h4 className="font-serif text-lg md:text-xl text-deep-charcoal mb-3 flex items-center gap-2">
                        <span className="text-soft-gold">✨</span>
                        What We Delivered
                      </h4>
                      <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">{project.whatWasDone}</p>
                    </div>
                  )}

                  <div className="mb-6">
                    <p className="font-sans text-sm md:text-base text-muted-charcoal">
                      <strong className="text-deep-charcoal">Timeline:</strong> {project.duration}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <ProjectImageGallery
                    images={project.images.length ? project.images : [project.image]}
                    projectName={project.project}
                  />

                  <div className="bg-warm-beige border-l-4 border-soft-gold p-6 md:p-8 rounded-lg">
                    <p className="font-sans text-base md:text-lg text-deep-charcoal leading-relaxed italic mb-2">
                      "{project.testimonial}"
                    </p>
                    <p className="font-sans text-sm md:text-base text-muted-charcoal">– {project.author}</p>
                  </div>
                </div>
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
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={`${testimonial.author}-${testimonial.title}`}
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
              rating={testimonial.rating}
            />
          ))}
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
              {URGENCY_INCENTIVES.map((item) => (
                <li key={item} className="flex items-start space-x-3">
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
              {URGENCY_COSTS.map((item) => (
                <li key={item} className="flex items-start space-x-3">
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
              <span>⭐ 100+ Luxury Transformations</span>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 11: FAQ */}
      <Section id="faq" background="warm-beige" padding="large">
        <div className="text-left mb-16 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal mb-6 md:mb-8">
            Your Questions, Answered
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <FAQ items={FAQ_ITEMS} />
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
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-deep-charcoal mb-8 md:mb-12">
                The Karen K Sanctuaries Guarantee
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
                {GUARANTEE_PILLARS.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="bg-white/60 backdrop-blur-sm rounded-xl p-6 md:p-8 hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-soft-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-soft-gold/20 transition-colors">
                        <span className="text-xl">{pillar.icon}</span>
                      </div>
                      <h4 className="font-serif text-xl md:text-2xl font-semibold text-deep-charcoal group-hover:text-soft-gold transition-colors">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="font-sans text-sm md:text-base text-muted-charcoal leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>

              <p className="font-serif text-lg md:text-xl text-deep-charcoal font-semibold italic leading-relaxed pt-6 md:pt-8 mt-8 md:mt-12 border-t border-soft-taupe/30">
                Your risk is minimal. Your upside is extraordinary.
              </p>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
