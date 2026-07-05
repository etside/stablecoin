import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "StableUSD Privacy Policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-text-muted">Last updated: July 1, 2026</p>

        <div className="mt-12 space-y-8 text-text-secondary">
          <div>
            <h2 className="text-xl font-semibold text-text-primary">1. Information We Collect</h2>
            <p className="mt-3 leading-relaxed">
              We collect information you provide directly, including your name, email
              address, government-issued identification, and blockchain wallet addresses.
              We also collect usage data such as IP addresses, browser type, and
              interaction with our Services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">2. How We Use Your Information</h2>
            <p className="mt-3 leading-relaxed">
              We use your information to provide and improve our Services, comply with
              legal obligations (including KYC/AML requirements), prevent fraud, and
              communicate with you about your account and our Services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">3. Information Sharing</h2>
            <p className="mt-3 leading-relaxed">
              We may share your information with service providers who assist in
              operating our Services, law enforcement when legally required, and in
              connection with a merger, acquisition, or sale of assets. We do not sell
              your personal information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">4. Data Security</h2>
            <p className="mt-3 leading-relaxed">
              We implement industry-standard security measures to protect your personal
              information, including encryption, access controls, and regular security
              audits. However, no method of transmission over the Internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">5. Data Retention</h2>
            <p className="mt-3 leading-relaxed">
              We retain your personal information for as long as necessary to provide
              our Services and comply with legal obligations. KYC records are retained
              for a minimum of 5 years after account closure as required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">6. Your Rights</h2>
            <p className="mt-3 leading-relaxed">
              Depending on your jurisdiction, you may have the right to access, correct,
              delete, or port your personal information. Contact us at privacy@stableusd.io
              to exercise these rights.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">7. Contact</h2>
            <p className="mt-3 leading-relaxed">
              For privacy-related inquiries, contact our Data Protection Officer at
              privacy@stableusd.io.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
