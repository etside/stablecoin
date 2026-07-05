import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "StableUSD Terms of Service — rules governing use of our platform and services.",
};

export default function TermsPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="mt-2 text-sm text-text-muted">Last updated: July 1, 2026</p>

        <div className="mt-12 space-y-8 text-text-secondary">
          <div>
            <h2 className="text-xl font-semibold text-text-primary">1. Acceptance of Terms</h2>
            <p className="mt-3 leading-relaxed">
              By accessing or using StableUSD (&quot;SUSD&quot;) tokens and related services
              (collectively, the &quot;Services&quot;), you agree to be bound by these Terms of
              Service. If you do not agree to these terms, do not use the Services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">2. Eligibility</h2>
            <p className="mt-3 leading-relaxed">
              You must be at least 18 years old and have the legal capacity to enter
              into these Terms. You may not use the Services if you are located in, or
              a citizen or resident of, any jurisdiction where the use of digital assets
              is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">3. SUSD Tokens</h2>
            <p className="mt-3 leading-relaxed">
              SUSD tokens are digital tokens pegged to fiat currencies. Each SUSD token
              is backed by reserves as described in our Transparency Center. SUSD tokens
              are not legal tender and are not issued or guaranteed by any government.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">4. Redemption</h2>
            <p className="mt-3 leading-relaxed">
              Verified users may redeem SUSD tokens for the equivalent fiat currency
              value, subject to applicable fees, minimum redemption amounts, and our
              verification procedures. Redemption requests are typically processed
              within 1-3 business days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">5. Risks</h2>
            <p className="mt-3 leading-relaxed">
              Use of digital assets involves significant risks, including but not
              limited to price volatility, regulatory changes, and technological risks.
              You acknowledge and accept these risks when using our Services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">6. Prohibited Activities</h2>
            <p className="mt-3 leading-relaxed">
              You agree not to use the Services for any illegal purpose, including
              money laundering, terrorist financing, sanctions evasion, or any activity
              that violates applicable laws and regulations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">7. Limitation of Liability</h2>
            <p className="mt-3 leading-relaxed">
              To the maximum extent permitted by law, StableUSD and its affiliates
              shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages arising out of or related to your use of the Services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">8. Changes to Terms</h2>
            <p className="mt-3 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify
              users of material changes via email or through our platform. Continued use
              of the Services after changes constitutes acceptance of the new Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">9. Contact</h2>
            <p className="mt-3 leading-relaxed">
              For questions about these Terms, contact us at legal@stableusd.io.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
