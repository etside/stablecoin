import Link from "next/link";
import type { Metadata } from "next";
import { teamMembers } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about StableUSD's mission to make digital dollars accessible to everyone.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">About StableUSD</h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              We&apos;re building the infrastructure for the future of money. Our mission
              is to make digital dollars accessible, trustworthy, and useful for
              everyone, everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                StableUSD exists to create a more open, efficient, and inclusive
                financial system. We believe that everyone deserves access to
                stable, reliable digital money — regardless of where they live
                or what bank account they have.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                By combining the stability of the US Dollar with the efficiency
                of blockchain technology, we&apos;re building the financial
                infrastructure of tomorrow.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { value: "2019", label: "Founded", desc: "Started with a vision for better digital money" },
                { value: "45M+", label: "Users Worldwide", desc: "Trusted by millions across the globe" },
                { value: "15+", label: "Blockchain Networks", desc: "Available wherever you need it" },
                { value: "$140B+", label: "Market Cap", desc: "The largest USD stablecoin" },
              ].map((stat) => (
                <div key={stat.label} className="flex gap-4 rounded-xl border border-border bg-surface-card p-4">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div>
                    <div className="font-semibold text-text-primary">{stat.label}</div>
                    <div className="text-sm text-text-muted">{stat.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Transparency",
                description: "We publish monthly reserve attestations and maintain open communication with our community. Trust is earned through verifiable proof.",
              },
              {
                title: "Security",
                description: "Our smart contracts are audited by leading security firms. We maintain institutional-grade security standards across all operations.",
              },
              {
                title: "Compliance",
                description: "We work proactively with regulators worldwide to ensure StableUSD meets the highest compliance standards in every jurisdiction.",
              },
            ].map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-surface-card p-8">
                <h3 className="text-xl font-semibold text-text-primary">{value.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold">Leadership Team</h2>
          <p className="mb-12 text-center text-text-secondary">
            Experienced leaders from finance, technology, and regulation.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="card-hover rounded-2xl border border-border bg-surface-card p-6 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text-primary">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Join Our Team</h2>
          <p className="mt-4 text-lg text-text-secondary">
            We&apos;re always looking for talented people who share our vision for
            better digital money. Check out our open positions.
          </p>
          <Link
            href="/about/careers"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            View Open Positions
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
