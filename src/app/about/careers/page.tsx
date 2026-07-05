import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the StableUSD team. Help build the future of digital money.",
};

const openings = [
  { title: "Senior Blockchain Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Product Manager — Stablecoins", department: "Product", location: "New York / Remote", type: "Full-time" },
  { title: "Compliance Analyst", department: "Legal & Compliance", location: "London", type: "Full-time" },
  { title: "Frontend Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Security Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Head of Partnerships", department: "Business", location: "Singapore", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">Careers at StableUSD</h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              Help us build the infrastructure for the future of money. We&apos;re looking
              for talented people who are passionate about digital finance.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">Why Work With Us</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Remote First", desc: "Work from anywhere in the world. We believe in async-first communication and flexible schedules." },
              { title: "Competitive Pay", desc: "Top-of-market compensation, equity, and benefits. We invest in the best people." },
              { title: "Growth", desc: "Annual learning budget, conference attendance, and mentorship programs." },
            ].map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-border bg-surface-card p-8">
                <h3 className="text-xl font-semibold text-text-primary">{benefit.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">Open Positions</h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="card-hover flex items-center justify-between rounded-xl border border-border bg-surface-card p-5">
                <div>
                  <h3 className="font-semibold text-text-primary">{job.title}</h3>
                  <div className="mt-1 flex gap-3 text-sm text-text-muted">
                    <span>{job.department}</span>
                    <span>·</span>
                    <span>{job.location}</span>
                    <span>·</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <Link
                  href="/support"
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Apply
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
