import { Section } from '@/components/ui/Section';

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 md:pt-32">
      <Section background="off-white" padding="large">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep-charcoal mb-6 md:mb-8">
            Privacy Policy
          </h1>
          <p className="font-sans text-base md:text-lg text-muted-charcoal mb-8 leading-relaxed">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8 md:space-y-12">
            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-4">
                1. Introduction
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">
                Karen K Sanctuaries ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website located at karenksanctuaries.com (the "Site").
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-4">
                2. Information We Collect
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed mb-4">
                We may collect information about you in various ways:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  <strong>Personal Data:</strong> Name, email address, phone number, and any other information you voluntarily provide when contacting us or booking a consultation.
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  <strong>Usage Data:</strong> Information about how you access and use our Site, including your IP address, browser type, pages visited, and time spent on pages.
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  <strong>Cookies:</strong> We use cookies to enhance your experience. You can control cookie preferences through your browser settings.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-4">
                3. How We Use Your Information
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  Provide, maintain, and improve our services
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  Process your inquiries and consultation requests
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  Send you newsletters and marketing communications (with your consent)
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  Respond to your comments and questions
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  Analyze website usage and trends
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-4">
                4. Data Sharing and Disclosure
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="space-y-3 ml-6 mt-4">
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  With service providers who assist us in operating our website and conducting our business
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  When required by law or to protect our rights
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  With your explicit consent
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-4">
                5. Data Security
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-4">
                6. Your Rights
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  Access and receive a copy of your personal data
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  Request correction of inaccurate data
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  Request deletion of your personal data
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  Object to processing of your personal data
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  Withdraw consent at any time
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-4">
                7. Contact Us
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p className="font-sans text-base md:text-lg text-muted-charcoal">
                  <strong>Email:</strong> contact@karenksanctuaries.com
                </p>
                <p className="font-sans text-base md:text-lg text-muted-charcoal">
                  <strong>Phone:</strong> +971 502269068
                </p>
                <p className="font-sans text-base md:text-lg text-muted-charcoal">
                  <strong>Address:</strong> Dubai Design District, Building 3, UAE
                </p>
              </div>
            </section>
          </div>
        </div>
      </Section>
    </div>
  );
}

