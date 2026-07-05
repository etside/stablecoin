import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance",
  description: "StableUSD Compliance — our regulatory framework and commitment to legal compliance.",
};

export default function CompliancePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">Compliance</h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              StableUSD is committed to operating at the highest standards of regulatory
              compliance across every jurisdiction in which we operate.
            </p>
          </div>
        </div>
      </section>

      {/* Regulatory Framework */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">Regulatory Framework</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "United States",
                desc: "Registered as a Money Services Business (MSB) with FinCEN. Compliant with state money transmitter licenses.",
                badge: "Licensed",
              },
              {
                title: "European Union",
                desc: "Fully compliant with Markets in Crypto-Assets (MiCA) regulation. Authorized by European regulatory authorities.",
                badge: "MiCA Compliant",
              },
              {
                title: "United Kingdom",
                desc: "Registered with the Financial Conduct Authority (FCA) for crypto asset activities.",
                badge: "FCA Registered",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-surface-card p-8">
                <span className="inline-flex rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success">{item.badge}</span>
                <h3 className="mt-4 text-xl font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AML/KYC */}
      <section className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">AML/KYC Program</h2>
          <div className="mt-8 space-y-6 text-text-secondary">
            <p className="leading-relaxed">
              StableUSD maintains a comprehensive Anti-Money Laundering (AML) and Know Your
              Customer (KYC) program that meets or exceeds regulatory requirements in all
              jurisdictions where we operate.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Identity verification for all users",
                "Transaction monitoring and screening",
                "Suspicious activity reporting (SAR)",
                "Sanctions screening (OFAC, EU, UN)",
                "Enhanced due diligence for high-risk customers",
                "Regular compliance training for staff",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-xl border border-border bg-surface-card p-4">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Licenses */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Licenses & Registrations</h2>
          <div className="mt-8 space-y-4">
            {[
              { jurisdiction: "FinCEN (USA)", type: "MSB Registration", status: "Active" },
              { jurisdiction: "New York (USA)", type: "BitLicense", status: "Active" },
              { jurisdiction: "European Union", type: "MiCA Authorization", status: "Active" },
              { jurisdiction: "United Kingdom", type: "FCA Registration", status: "Active" },
              { jurisdiction: "Singapore", type: "Payment Services License", status: "Active" },
              { jurisdiction: "Dubai", type: "VARA License", status: "Active" },
            ].map((license) => (
              <div key={license.jurisdiction} className="flex items-center justify-between rounded-xl border border-border bg-surface-card p-5">
                <div>
                  <h3 className="font-semibold text-text-primary">{license.jurisdiction}</h3>
                  <p className="mt-1 text-sm text-text-muted">{license.type}</p>
                </div>
                <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success">{license.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
