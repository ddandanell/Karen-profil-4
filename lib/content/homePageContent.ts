import type { LucideIcon } from 'lucide-react';
import { Clock, Home, Crown } from 'lucide-react';

export type ProblemColumn = {
  title: string;
  description: string;
  items: string[];
};

export const PROBLEM_COLUMNS: ProblemColumn[] = [
  {
    title: 'For ROI-Focused Clients',
    description: 'You know your property could command higher rent or resale value, but...',
    items: [
      'Traditional renovations take 3-6 months and cost a fortune',
      'Generic fit-out companies deliver cookie-cutter results',
      "You can't afford months of vacancy while work drags on",
      'ROI is uncertain — will the investment actually pay back?',
      'Finding reliable contractors in Dubai is a nightmare',
    ],
  },
  {
    title: 'For Lifestyle-Focused Clients',
    description: 'You dream of a space that reflects your soul, but...',
    items: [
      "Interior designers impose their style, not yours",
      'Projects take forever and disrupt your life completely',
      'Premium design costs are astronomical',
      "You're stuck living in generic, uninspiring spaces",
      'The process is stressful, confusing, and exhausting',
    ],
  },
];

export type SolutionHighlight = {
  icon: string;
  title: string;
  description: string;
  delay?: number;
};

export const SOLUTION_HIGHLIGHTS: SolutionHighlight[] = [
  {
    icon: '🚀',
    title: 'Extreme Speed',
    description:
      'What takes others 6 months, we deliver in 5-45 days. Fast-track luxury without compromise. Your space transforms while others are still getting quotes.',
  },
  {
    icon: '💰',
    title: 'Proven ROI',
    description:
      "Average 35% increase in property value. Our renovations pay for themselves through higher rents, faster sales, and premium positioning. This isn't cost — it's investment.",
    delay: 0.2,
  },
  {
    icon: '✨',
    title: 'Bespoke Magic',
    description:
      'No cookie-cutter templates. Every sanctuary is custom-designed to reflect your personality or maximize market appeal. We create universes, not just rooms.',
    delay: 0.4,
  },
];

export type PortfolioProject = {
  title: string;
  description: string;
  image: string;
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    title: 'Villa Transformation',
    description:
      'From AED 180K to AED 280K annual rent. A complete transformation that elevated every surface, from custom marble finishes to handcrafted lighting, creating a sanctuary that commands premium rental value and attracts discerning tenants.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    title: 'Penthouse Sanctuary',
    description:
      'Client testimonial: "I wake up in my fantasy every day." This elevated space combines panoramic views with sculptural design elements, where every detail whispers luxury and every morning feels like arriving home to your dreams.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    title: 'Boutique Hotel Lobby',
    description:
      'Bookings increased 60% post-transformation. A strategic redesign that transformed the entrance experience into an immersive journey, blending artisanal textures with contemporary elegance that guests photograph and share instantly.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  },
  {
    title: 'Investment Property',
    description:
      'Sold 40% above market value. This transformation proved that strategic design is an investment accelerator, turning a standard property into a premium asset that buyers competed for, delivering exceptional returns.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  },
];

export type ServiceTier = {
  icon: LucideIcon;
  title: string;
  description: string;
  timeline: string;
  stats: string[];
  delay?: number;
};

export const SERVICE_TIERS: ServiceTier[] = [
  {
    icon: Clock,
    title: 'The Express Face-Lift',
    description:
      'For properties that need instant ROI and zero downtime. We refresh flooring, lighting, and finishes to create a dramatic before-and-after that photographs like new construction. Ideal for landlords, flippers, or short-term rental owners who need beauty yesterday.',
    timeline: '(5–15 Days)',
    stats: ['Average turnaround: 10 days', 'ROI increase ≈ 25%', 'Look: Clean · Fast · Transformative'],
  },
  {
    icon: Home,
    title: 'The Invasive Face-Lift',
    description:
      "For owners seeking significant value uplift and upgraded functionality. We reimagine kitchens, bathrooms, and layouts while retaining your property's bones—haute-couture renovation that's precision-crafted and time-efficient.",
    timeline: '(15–35 Days)',
    stats: ['Average turnaround: 24 days', 'ROI increase ≈ 35%', 'Look: Custom · Elevated · Strategic'],
    delay: 0.1,
  },
  {
    icon: Crown,
    title: 'The Full New-Lift',
    description:
      'For visionaries demanding world-class sanctuaries. Full-space reimagining with bespoke furnishings, artisanal finishes, lighting design, and spatial storytelling. Built for families, penthouse owners, and boutique hospitality brands craving wow-factor.',
    timeline: '(30–45 Days)',
    stats: ['Average turnaround: 38 days', 'ROI increase ≈ 45%', 'Look: Immersive · Bespoke · Iconic'],
    delay: 0.2,
  },
];

export type TransformationCategory = {
  icon: string;
  title: string;
  bullets: string[];
  direction: 'left' | 'right';
};

export const TRANSFORMATION_CATEGORIES: TransformationCategory[] = [
  {
    icon: '💰',
    title: 'Financial Transformation',
    bullets: [
      'Average 35% property value increase',
      'Command 20-40% higher rental rates',
      'Sell 30-60 days faster than market average',
      'Zero vacancy during fast-track renovation',
      'Local UAE sourcing = cost efficiency',
      'Full transparency on ROI projections',
      'Investment that pays you back',
    ],
    direction: 'left',
  },
  {
    icon: '✨',
    title: 'Emotional Transformation',
    bullets: [
      'Wake up in your personalized fantasy world',
      'Spaces that reflect your soul, not trends',
      'Zero stress, zero hassle process',
      'Living in breathtaking works of art daily',
      'Impress guests and feel profound pride',
      'Create memories in sacred spaces',
      'Transcend ordinary reality every single day',
    ],
    direction: 'right',
  },
];

export type PortfolioTimelineProject = {
  month: string;
  project: string;
  duration: string;
  karensPerspective?: string;
  whatWasDone?: string;
  testimonial: string;
  clientExperience: string;
  author: string;
  image: string;
  images: string[];
};

const DEFAULT_PROJECT_IMAGES = [
  '/images/portfolio-default.webp',
  '/images/karen-k-mag-selection-24.webp',
  '/images/karen-k-mag-selection-12.webp',
  '/images/karen-k-mag-selection-43-copy.webp',
];

export const PORTFOLIO_TIMELINE_PROJECTS: PortfolioTimelineProject[] = [
  {
    month: 'January 2025',
    project: 'Palm Jumeirah Penthouse for The Azar Family',
    duration: '28 days',
    karensPerspective:
      'Creating warmth without compromising the light-filled, airy feeling. Soft gold accents, sculpted marble, and handmade lighting for intimate moments.',
    whatWasDone:
      '4-bedroom penthouse transformation with soft gold accents, sculpted marble kitchen island, and handmade lighting fixtures.',
    testimonial: "Karen's team turned a sterile apartment into a home we love waking up in. Every dirham was worth it.",
    clientExperience:
      "Every morning, light glows through handmade fixtures, casting soft golden shadows that dance across the marble island. Every evening, the space breathes—the open layout invites conversation, the carefully curated textures create warmth, and the custom lighting transforms our penthouse into a sanctuary. The marble island became our home's pulse, where friends gather and ask who designed this masterpiece. Living here feels like waking up in a luxury hotel every single day, but it's ours. The transformation didn't just change our space—it changed how we live.",
    author: 'Lina Azar',
    image: '/images/portfolio-default.webp',
    images: DEFAULT_PROJECT_IMAGES,
  },
  {
    month: 'February 2025',
    project: 'Al Barari Villa Restyle for Mr & Mrs Al-Fahim',
    duration: '21 days',
    karensPerspective:
      'Blending luxury with nature—Venetian plaster for warmth, natural onyx for depth, bamboo panels connecting to the gardens.',
    whatWasDone:
      "Ground-floor redesign with Venetian plaster, natural onyx, and custom bamboo panels maintaining Al Barari's eco-soul.",
    testimonial: 'They promised beauty in three weeks – and delivered something beyond it.',
    clientExperience:
      "Venetian plaster warms every surface, creating a tactile experience that feels both ancient and modern. The bamboo panels dissolve boundaries between inside and out, making the gardens feel like an extension of our living space. Three weeks delivered a transformation that feels like it took months—but without the stress. The natural onyx catches afternoon light, creating moments of pure beauty. Our ground floor now flows like a river, each space connecting seamlessly. Nature and luxury breathe as one here, and we can't imagine living anywhere else.",
    author: 'Omar Al-Fahim',
    image: '/images/portfolio-default.webp',
    images: DEFAULT_PROJECT_IMAGES,
  },
  {
    month: 'March 2025',
    project: 'City Walk Apartment for Sara Ben-Khalid',
    duration: '17 days',
    karensPerspective:
      "Downtown energy with minimalist sophistication—smart home functionality meets effortless chic.",
    whatWasDone: 'Smart-home makeover with voice-activated lighting, acoustic ceilings, and hidden storage walls.',
    testimonial: "It looks like a Soho loft in Dubai – I rented it 48 hours after the shoot.",
    clientExperience:
      "Hidden storage eliminates every trace of clutter—drawers slide silently, panels hide everything beautifully. The acoustic treatments create profound silence in the heart of the city, making it feel like a private sanctuary. The smart home features respond to voice commands, adjusting lighting and temperature before I even think about it. Listed the apartment 48 hours after completion, and multiple offers arrived immediately. The minimalist design photographs like a Soho loft, but it's so much more functional than it looks. This space doesn't just look good—it works perfectly for my lifestyle.",
    author: 'Sara Ben-Khalid',
    image: '/images/portfolio-default.webp',
    images: DEFAULT_PROJECT_IMAGES,
  },
  {
    month: 'April 2025',
    project: 'Damac Hills Townhouse for The Raza Family',
    duration: '24 days',
    karensPerspective:
      'Sophisticated yet child-friendly—flow, inspiration, and a kitchen that becomes the heart of the home.',
    whatWasDone:
      'Family redesign: removed wall, added custom walnut joinery, built double-height library wall, and created kid-safe open kitchen.',
    testimonial: "Delivered in under a month – and our children won't stop showing friends the reading loft.",
    clientExperience:
      "Removed one wall and gained an entire new way of living. The open flow transforms how our family interacts—adults can cook while children play, yet everyone feels connected. The library wall climbs two stories, creating a reading nook that our children adore. They read more now, drawn to the custom walnut shelves and cozy corners. The kid-safe open kitchen became the heart of our home, where homework happens at the island and meals bring everyone together. Magazine-worthy design that's completely livable—no fragile pieces, no off-limits rooms. Every detail was chosen for beauty and durability.",
    author: 'Mina Raza',
    image: '/images/portfolio-default.webp',
    images: DEFAULT_PROJECT_IMAGES,
  },
  {
    month: 'May 2025',
    project: 'Bluewaters Luxury Apartment for Anders Design Group',
    duration: '19 days',
    karensPerspective:
      'A marketing tool—every element designed to photograph beautifully and create emotional connections.',
    whatWasDone:
      'Corporate showcase suite with layered lighting, curved onyx table, and automated curtains. Every angle Instagram-ready.',
    testimonial: 'This suite sells our brand for us – people book before we even speak.',
    clientExperience:
      "Layered lighting shifts moods throughout the day—bright and energizing in the morning, warm and intimate in the evening. The curved onyx table is a work of art that starts conversations with every visitor. Automated curtains create drama, revealing views at the perfect moment. Video tours of this suite get thousands of views, and clients book consultation calls before we even speak—the space sells our brand for us. Every angle is Instagram-ready, every detail photographable. But beyond the visual impact, the space functions beautifully for client presentations and team meetings. It's both a marketing tool and a highly functional workspace.",
    author: 'Marketing Director, Anders Design Group',
    image: '/images/portfolio-default.webp',
    images: DEFAULT_PROJECT_IMAGES,
  },
  {
    month: 'June 2025',
    project: 'Jumeirah Beach Residence Investor Suite for Mr Rahim Kader',
    duration: '15 days',
    karensPerspective:
      'ROI-focused luxury—strategic upgrades that photograph beautifully and maximize rental yield.',
    whatWasDone:
      'Cost-optimized redesign: upcycled headboards, custom LED trims, and kitchen facelift that photographs like luxury marble.',
    testimonial: 'My Airbnb income rose 40% immediately. The ROI is absurdly good.',
    clientExperience:
      "Skeptical at first—I'm an investor, not a designer. But Karen showed me the numbers, the projections, and the market comparables. The investment paid for itself in three months through increased bookings alone. The booking rate doubled, and I secured premium rates that I never thought possible. The upcycled pieces look bespoke, the custom LED trims create ambiance that photographs beautifully, and the kitchen facelift looks like luxury marble in every listing photo. Guests book longer stays and leave glowing reviews. The ROI is absurdly good, and I'm already planning my next property transformation.",
    author: 'Rahim Kader',
    image: '/images/portfolio-default.webp',
    images: DEFAULT_PROJECT_IMAGES,
  },
  {
    month: 'July 2025',
    project: 'Downtown Private Office for Apex Holdings',
    duration: '18 days',
    karensPerspective:
      'A gallery-like boardroom—mirrored ceilings, bronze glass, and scent diffusion creating memorable impressions.',
    whatWasDone: 'Boardroom fit-out with mirrored ceilings, bronze glass, and integrated scent diffusion.',
    testimonial: "Every client meeting ends with 'Who designed this place?' That says everything.",
    clientExperience:
      "Mirrored ceilings expand the space visually, making our boardroom feel twice its size. The bronze glass adds warmth and sophistication, reflecting light in ways that create depth and intrigue. The integrated scent diffusion system creates memorable first impressions—clients remember our meetings not just for the content, but for the entire experience. Every meeting starts with 'Who designed this place?' followed by conversations about our brand's sophistication. The space functions flawlessly for presentations, but it also serves as a powerful statement about who we are as a company. It's a functional space disguised as a sculpture.",
    author: 'CEO, Apex Holdings',
    image: '/images/portfolio-default.webp',
    images: DEFAULT_PROJECT_IMAGES,
  },
  {
    month: 'August 2025',
    project: 'Al Khayma Restaurant Rebirth for Chef Firas Habib',
    duration: '26 days',
    karensPerspective:
      'Warm, earthy, Instagram-worthy—terracotta walls, arched elements, and lighting that makes every dish look incredible.',
    whatWasDone:
      'Complete interior rebuild: terracotta walls, arched bar counter, artisan mosaic floors. Lighting for evening glow and food photography.',
    testimonial: 'Guests now stay longer, order more, and take photos every night.',
    clientExperience:
      "Terracotta walls radiate Mediterranean warmth, making every guest feel like they're dining in a luxury villa. The arched bar creates intimate moments, perfect for cocktails and conversation. The artisan mosaic floors add texture and visual interest, while the lighting makes every dish photograph beautifully—essential in the Instagram age. Table time increased 40% because guests want to linger in this space. They stay longer, order more, and take photos every night. The transformation didn't just change our interior—it changed our entire business model. Revenue increased, and we're fully booked weeks in advance.",
    author: 'Chef Firas Habib',
    image: '/images/portfolio-default.webp',
    images: DEFAULT_PROJECT_IMAGES,
  },
  {
    month: 'September 2025',
    project: 'Al Safa Family Villa for Mr & Mrs Tariq',
    duration: '20 days',
    karensPerspective:
      'Refined yet welcoming—Scandi warmth with gold accents creating a retreat for adults and inspiration for children.',
    whatWasDone:
      "Master suite and children's bedrooms in Scandi warmth with gold tones. Built-in wardrobes and reading nook under staircase.",
    testimonial: 'Our home finally feels balanced – elegant yet playful.',
    clientExperience:
      "The master suite became our true sanctuary—a retreat where we can escape and recharge. Scandi warmth meets gold accents, creating a space that feels both sophisticated and cozy. The children's rooms inspire play during the day and restful sleep at night, with custom storage that keeps toys organized yet accessible. The reading nook under the stairs became our favorite family spot—it's where we read bedtime stories, where the kids do homework, where we gather for quiet moments. The built-in wardrobes maximize space while maintaining the elegant aesthetic. Every detail balances elegance with playfulness, creating a home that works for both adults and children. Our home finally feels balanced—refined yet welcoming.",
    author: 'Layla Tariq',
    image: '/images/portfolio-default.webp',
    images: DEFAULT_PROJECT_IMAGES,
  },
  {
    month: 'October 2025',
    project: 'DIFC Boutique Office for FinEdge Consulting',
    duration: '14 days',
    karensPerspective:
      'Maximum impact in minimal space—strategic mirroring, dark walnut, and brushed nickel creating premium consultancy feel.',
    whatWasDone:
      '45 m² workspace with brushed nickel details and dark walnut desk systems. Strategic mirroring makes it feel twice the size.',
    testimonial: "Clients think we moved to a bigger space – we didn't.",
    clientExperience:
      "Our 45 m² workspace feels like a premium consultancy worth triple the size. Strategic mirroring expands the space visually, creating depth and eliminating any sense of confinement. The dark walnut desk systems add sophistication and warmth, while brushed nickel details provide modern elegance. Sound treatment ensures privacy during client calls, and the lighting creates a professional yet welcoming atmosphere. Clients consistently think we moved to a bigger space—we didn't, but the transformation made it feel that way. The space functions perfectly for our team of four, with smart storage solutions and flexible layouts that adapt to our needs.",
    author: 'FinEdge Founder',
    image: '/images/portfolio-default.webp',
    images: DEFAULT_PROJECT_IMAGES,
  },
  {
    month: 'November 2025',
    project: 'Airbnb Collection for Horizon Investments',
    duration: '5 projects / 25 days',
    karensPerspective:
      'Cohesive brand identity across five units—neutral palettes, luxury SPC flooring, and uniform touches for portfolio appeal.',
    whatWasDone:
      'Five property makeovers in Business Bay and JVC. SPC flooring, neutral palettes, and uniform branding for portfolio cohesion.',
    testimonial: 'Booked 100% of December within 48 hours of the photo release.',
    clientExperience:
      "Five units transformed in record time, creating a cohesive brand identity across our entire portfolio. The neutral palettes appeal to a broad range of guests, while the luxury SPC flooring provides durability and high-end aesthetics. Uniform branding touches—from artwork to linens—make the portfolio feel curated and professional. We achieved 100% booking within 48 hours of the photo release, and repeat bookings are already secured. The transformation didn't just improve individual properties—it elevated our entire brand. Guests now recognize our properties instantly, and we're commanding premium rates across all five units.",
    author: 'Horizon Investments Manager',
    image: '/images/portfolio-default.webp',
    images: DEFAULT_PROJECT_IMAGES,
  },
  {
    month: 'December 2025',
    project: 'Top 50 Homes Dubai Submission & Showcase',
    duration: 'Curation phase – 14 days',
    karensPerspective:
      'Showcasing our best work—seven projects representing different expertise from family homes to investment properties.',
    whatWasDone:
      'Seven standout projects selected for award nomination. Behind-the-scenes montage and press interviews for 2025 edition.',
    testimonial: 'This brand keeps raising the bar – year after year.',
    clientExperience:
      "Karen K Sanctuaries transforms not just spaces, but lives. The seven projects we selected for award nomination showcase the full spectrum of their expertise—from family homes that become sanctuaries, to investment properties that maximize ROI, from fast-track makeovers completed in days, to complete transformations that redefine luxury living. Each project tells a compelling story of transformation, and the quality is consistently outstanding. The behind-the-scenes montage captures the precision, care, and artistry that goes into every project. This brand keeps raising the bar year after year, setting new standards for what's possible in interior transformation. The press interviews for the 2025 edition will showcase why Karen K Sanctuaries is Dubai's most sought-after interior transformation specialist.",
    author: 'Top 50 Homes Dubai Editorial Team',
    image: '/images/portfolio-default.webp',
    images: DEFAULT_PROJECT_IMAGES,
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  title: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We were skeptical that a 2-week renovation could transform our rental villa, but Karen's team delivered magic. Our rental income jumped from AED 180K to AED 280K annually. The transformation paid for itself in under 8 months. Remarkable.",
    author: 'Mohammed A.',
    title: 'Property Investor, Palm Jumeirah',
    rating: 5,
  },
  {
    quote:
      "For the first time in my life, I wake up excited to be in my own home. Karen didn't just design rooms — she created portals to different worlds. My penthouse is now my sanctuary, my escape, my inspiration. I cry happy tears regularly.",
    author: 'Sophia M.',
    title: 'Creative Director, Downtown Dubai',
    rating: 5,
  },
  {
    quote:
      "Karen understood both my financial goals and my need for a space that reflected my personality. The result? A boutique hotel that's 90% booked year-round, AND a space so beautiful I can't stop photographing it. Best investment I've ever made.",
    author: 'Layla K.',
    title: 'Boutique Hotel Owner, Dubai Marina',
    rating: 5,
  },
  {
    quote:
      "Three weeks from start to completion. I still can't believe it. The quality, the attention to detail, the artistry — all delivered faster than anyone said was possible. Karen doesn't overpromise. She over-delivers.",
    author: 'David R.',
    title: 'Villa Owner, Emirates Hills',
    rating: 5,
  },
];

export const URGENCY_INCENTIVES: string[] = [
  'Free 3D visualization of your space transformation (Value: AED 5,000)',
  'Priority scheduling for your transformation dates',
  "Exclusive access to Karen's 2025 year-end availability",
];

export const URGENCY_COSTS: string[] = [
  'Lost rental income from your underperforming property',
  'Living in spaces that drain rather than energize you',
  'Watching property values rise while yours stays stagnant',
  'Missing the year-end transformation window',
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How quickly can you start?',
    answer:
      'We can typically begin within 2-3 weeks after the design sign-off. Our express track allows us to mobilize rapidly with our vetted team of contractors and artisans.',
  },
  {
    question: 'Do you handle permits and approvals?',
    answer:
      'Yes. Our operations team manages all necessary approvals, permits, and community coordination so you experience zero administrative friction.',
  },
  {
    question: 'Can you work on investment properties while tenants are in place?',
    answer:
      'Absolutely. Our express and invasive programs are designed to minimize disruption. We often work between tenant stays or in phases to reduce downtime.',
  },
  {
    question: 'How much should I expect to invest?',
    answer:
      "Investment varies based on space size, service tier, and customization level. Basic Face-Lifts start at [TBD], Invasive Face-Lifts at [TBD], and Full New-Lifts are bespoke. During discovery, we'll give you transparent pricing aligned with your goals.",
  },
  {
    question: "What if I don't have a clear vision yet?",
    answer:
      "Perfect — that's our specialty. Karen excels at drawing out your personality, preferences, and goals, then translating them into design concepts you'll love. Many of our best projects started with 'I don't know what I want, but I'll know it when I see it.'",
  },
  {
    question: 'Do you offer payment plans?',
    answer:
      'Yes, we offer flexible payment structures aligned with project milestones. Discuss options during your discovery call.',
  },
  {
    question: "What if I'm not satisfied with the design direction?",
    answer:
      "We iterate until you're thrilled. Karen's process includes design reviews and adjustments to ensure your complete satisfaction before any major work begins.",
  },
];

export type GuaranteePillar = {
  icon: string;
  title: string;
  description: string;
};

export const GUARANTEE_PILLARS: GuaranteePillar[] = [
  {
    icon: '⚡',
    title: '1. Speed Commitment',
    description:
      'We deliver within the agreed timeline, or we discount the final invoice proportionally for every week of delay. Your time matters.',
  },
  {
    icon: '✨',
    title: '2. Quality Standard',
    description:
      "Every material, finish, and installation meets our rigorous quality standards. If something doesn't meet expectations, we make it right — no questions asked.",
  },
  {
    icon: '🔍',
    title: '3. ROI Transparency',
    description:
      "For investment-focused clients, we provide clear projections and market comparables. While we can't guarantee market forces, we guarantee our designs maximize your property's competitive position.",
  },
];
