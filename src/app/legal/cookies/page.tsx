import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "StableUSD Cookie Policy — how we use cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Cookie Policy</h1>
        <p className="mt-2 text-sm text-text-muted">Last updated: July 1, 2026</p>

        <div className="mt-12 space-y-8 text-text-secondary">
          <div>
            <h2 className="text-xl font-semibold text-text-primary">What Are Cookies</h2>
            <p className="mt-3 leading-relaxed">
              Cookies are small text files stored on your device when you visit our
              website. They help us provide you with a better experience by remembering
              your preferences and understanding how you use our Services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">Types of Cookies We Use</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-border bg-surface-card p-4">
                <h3 className="font-semibold text-text-primary">Essential Cookies</h3>
                <p className="mt-2 text-sm">Required for the website to function. Cannot be disabled.</p>
              </div>
              <div className="rounded-xl border border-border bg-surface-card p-4">
                <h3 className="font-semibold text-text-primary">Analytics Cookies</h3>
                <p className="mt-2 text-sm">Help us understand how visitors interact with our website.</p>
              </div>
              <div className="rounded-xl border border-border bg-surface-card p-4">
                <h3 className="font-semibold text-text-primary">Functional Cookies</h3>
                <p className="mt-2 text-sm">Enable personalized features and remember your preferences.</p>
              </div>
              <div className="rounded-xl border border-border bg-surface-card p-4">
                <h3 className="font-semibold text-text-primary">Marketing Cookies</h3>
                <p className="mt-2 text-sm">Used to deliver relevant advertisements and track campaign performance.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">Managing Cookies</h2>
            <p className="mt-3 leading-relaxed">
              You can control cookies through your browser settings. Note that disabling
              certain cookies may affect the functionality of our Services. Most browsers
              allow you to block or delete cookies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">Contact</h2>
            <p className="mt-3 leading-relaxed">
              For questions about our use of cookies, contact us at privacy@stableusd.io.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
