import { Section } from '@/components/ui/Section';

export default function CookiePolicyPage() {
  return (
    <div className="pt-24 md:pt-32">
      <Section background="off-white" padding="large">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep-charcoal mb-6 md:mb-8">
            Cookie Policy
          </h1>
          <p className="font-sans text-base md:text-lg text-muted-charcoal mb-8 leading-relaxed">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8 md:space-y-12">
            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-4">
                What Are Cookies?
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-4">
                How We Use Cookies
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  <strong>Essential Cookies:</strong> Required for the website to function properly and cannot be disabled
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  <strong>Preference Cookies:</strong> Remember your settings and preferences
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  <strong>Marketing Cookies:</strong> Used to track visitors across websites for marketing purposes
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-4">
                Types of Cookies We Use
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-sans text-xl md:text-2xl font-semibold text-deep-charcoal mb-3">
                    Strictly Necessary Cookies
                  </h3>
                  <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">
                    These cookies are essential for the website to function and cannot be switched off. They are usually set in response to actions made by you, such as setting privacy preferences or filling in forms.
                  </p>
                </div>
                <div>
                  <h3 className="font-sans text-xl md:text-2xl font-semibold text-deep-charcoal mb-3">
                    Performance Cookies
                  </h3>
                  <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are most popular.
                  </p>
                </div>
                <div>
                  <h3 className="font-sans text-xl md:text-2xl font-semibold text-deep-charcoal mb-3">
                    Functional Cookies
                  </h3>
                  <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">
                    These cookies enable the website to provide enhanced functionality and personalization, such as remembering your preferences.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-4">
                Managing Cookies
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  Most browsers allow you to refuse or accept cookies through browser settings
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  You can delete cookies that have already been set on your device
                </li>
                <li className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed list-disc">
                  You can use our cookie consent banner to manage your preferences
                </li>
              </ul>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed mt-4">
                Please note that blocking or deleting cookies may impact your experience on our website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-4">
                Third-Party Cookies
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">
                Some cookies are placed by third-party services that appear on our pages. We do not control these cookies, and you should check the third-party websites for more information about their cookie practices.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal mb-4">
                Contact Us
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-charcoal leading-relaxed">
                If you have questions about our use of cookies, please contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p className="font-sans text-base md:text-lg text-muted-charcoal">
                  <strong>Email:</strong> contact@karenksanctuaries.com
                </p>
                <p className="font-sans text-base md:text-lg text-muted-charcoal">
                  <strong>Phone:</strong> +971 502269068
                </p>
              </div>
            </section>
          </div>
        </div>
      </Section>
    </div>
  );
}

