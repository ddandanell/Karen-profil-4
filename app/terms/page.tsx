import { Section } from '@/components/ui/Section';

export default function TermsPage() {
  return (
    <div className="pt-24 md:pt-32">
      <Section background="off-white" padding="large">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep-charcoal mb-6 md:mb-8">
            Terms of Service
          </h1>
          <p className="font-sans text-base md:text-lg text-muted-charcoal mb-8 leading-relaxed">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8 md:space-y-12">
            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-4">
                1. Agreement to Terms
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">
                By accessing and using Karen K Sanctuaries' website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-4">
                2. Services Offered
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed mb-4">
                Karen K Sanctuaries provides interior design and transformation services, including:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  Express Face-Lift (5-15 days)
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  Invasive Face-Lift (3-4 weeks)
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  Full New-Lift (Turnkey Sanctuary) (1-2 months)
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  Consultation and design services
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-4">
                3. Booking and Payments
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed mb-4">
                When booking our services:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  A discovery call is required before project commencement
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  Payment terms will be outlined in your project agreement
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  A deposit may be required to secure your project timeline
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  Final payment is due upon project completion
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-4">
                4. Timeline and Delivery
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">
                We commit to delivering projects within agreed timelines. While we strive for accuracy in our estimates, actual timelines may vary based on project complexity, material availability, and client approvals. We will communicate any delays promptly and work to minimize any inconvenience.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-4">
                5. Client Responsibilities
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed mb-4">
                Clients are responsible for:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  Providing accurate information about their space and requirements
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  Making timely decisions on design selections
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  Ensuring access to the property for work to be completed
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  Making payments according to agreed schedules
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-4">
                6. Warranty and Guarantees
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">
                We guarantee the quality of our workmanship and materials. If any issues arise within 12 months of project completion due to our workmanship, we will address them at no additional cost. This warranty does not cover damage caused by misuse, accidents, or normal wear and tear.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-4">
                7. Intellectual Property
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">
                All designs, concepts, and creative work produced by Karen K Sanctuaries remain our intellectual property until full payment is received. Upon completion and full payment, clients receive usage rights for the designs in their property. We retain the right to use project images for marketing purposes unless otherwise agreed.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-4">
                8. Limitation of Liability
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">
                Karen K Sanctuaries' liability is limited to the value of the services provided. We are not liable for indirect, incidental, or consequential damages arising from the use of our services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-4">
                9. Contact Information
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">
                For questions about these Terms of Service, contact us at:
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

