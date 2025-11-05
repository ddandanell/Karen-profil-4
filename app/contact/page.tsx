import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-32">
      <Section background="off-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-deep-charcoal mb-6 md:mb-8">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-charcoal max-w-2xl mx-auto">
              Let's discuss how we can transform your space into something extraordinary
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-8 md:mb-10">
                Send Us a Message
              </h2>
              <form className="space-y-6 md:space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-sans text-sm md:text-base tracking-generous text-deep-charcoal mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 md:px-6 py-3 md:py-4 bg-warm-beige border border-soft-taupe rounded-lg text-base md:text-lg text-deep-charcoal focus:outline-none focus:ring-2 focus:ring-soft-gold focus:border-transparent transition-all min-h-[44px]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-sm md:text-base tracking-generous text-deep-charcoal mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 md:px-6 py-3 md:py-4 bg-warm-beige border border-soft-taupe rounded-lg text-base md:text-lg text-deep-charcoal focus:outline-none focus:ring-2 focus:ring-soft-gold focus:border-transparent transition-all min-h-[44px]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-sans text-sm md:text-base tracking-generous text-deep-charcoal mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 md:px-6 py-3 md:py-4 bg-warm-beige border border-soft-taupe rounded-lg text-base md:text-lg text-deep-charcoal focus:outline-none focus:ring-2 focus:ring-soft-gold focus:border-transparent transition-all min-h-[44px]"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-sm md:text-base tracking-generous text-deep-charcoal mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 md:px-6 py-3 md:py-4 bg-warm-beige border border-soft-taupe rounded-lg text-base md:text-lg text-deep-charcoal focus:outline-none focus:ring-2 focus:ring-soft-gold focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-8 md:mb-10">
                Contact Information
              </h2>
              <div className="space-y-8 md:space-y-10">
                <div>
                  <h3 className="font-sans text-sm md:text-base tracking-generous uppercase text-gold-very-light mb-3 md:mb-4">
                    Office
                  </h3>
                  <p className="text-base md:text-lg text-muted-charcoal leading-relaxed">
                    123 Design Avenue
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-sm md:text-base tracking-generous uppercase text-gold-very-light mb-3 md:mb-4">
                    Phone
                  </h3>
                  <p className="text-base md:text-lg text-muted-charcoal leading-relaxed">
                    <a
                      href="tel:+15551234567"
                      className="hover:text-deep-charcoal transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-sm md:text-base tracking-generous uppercase text-gold-very-light mb-3 md:mb-4">
                    Email
                  </h3>
                  <p className="text-base md:text-lg text-muted-charcoal leading-relaxed">
                    <a
                      href="mailto:hello@elegantinteriors.com"
                      className="hover:text-deep-charcoal transition-colors"
                    >
                      hello@elegantinteriors.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-sm md:text-base tracking-generous uppercase text-gold-very-light mb-3 md:mb-4">
                    Business Hours
                  </h3>
                  <p className="text-base md:text-lg text-muted-charcoal leading-relaxed">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

