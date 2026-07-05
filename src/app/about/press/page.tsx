import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press",
  description: "StableUSD press resources, media kit, and latest press coverage.",
};

const pressReleases = [
  {
    title: "StableUSD Surpasses $140 Billion Market Cap",
    date: "July 1, 2026",
    excerpt: "StableUSD reaches a historic milestone as the world's most adopted stablecoin.",
  },
  {
    title: "StableUSD Expands to Five New Blockchain Networks",
    date: "June 25, 2026",
    excerpt: "Q3 expansion brings SUSD to emerging L2 solutions and alternative L1 chains.",
  },
  {
    title: "StableUSD Achieves Full MiCA Compliance",
    date: "May 15, 2026",
    excerpt: "StableUSD becomes one of the first stablecoins to achieve full MiCA authorization in the EU.",
  },
  {
    title: "Partnership with Leading European Banks Announced",
    date: "April 10, 2026",
    excerpt: "Major European financial institutions join the SUSD ecosystem.",
  },
];

export default function PressPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">Press & Media</h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              Resources for journalists, media outlets, and content creators covering
              StableUSD and the stablecoin industry.
            </p>
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface-card p-8">
              <h2 className="text-xl font-semibold text-text-primary">Media Inquiries</h2>
              <p className="mt-3 text-sm text-text-secondary">
                For interview requests, comments, and media inquiries.
              </p>
              <p className="mt-4 font-medium text-primary">press@stableusd.io</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface-card p-8">
              <h2 className="text-xl font-semibold text-text-primary">Brand Assets</h2>
              <p className="mt-3 text-sm text-text-secondary">
                Download logos, brand guidelines, and media assets.
              </p>
              <Link href="/brand" className="mt-4 inline-block font-medium text-primary hover:underline">
                Download Media Kit →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold">Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.map((release) => (
              <div key={release.title} className="rounded-xl border border-border bg-surface-card p-6">
                <p className="text-sm text-text-muted">{release.date}</p>
                <h3 className="mt-2 text-lg font-semibold text-text-primary">{release.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{release.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="border-t border-border bg-surface py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">Key Facts</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Founded", value: "2019" },
              { label: "Market Cap", value: "$140B+" },
              { label: "Holders", value: "45M+" },
              { label: "Networks", value: "15+" },
              { label: "Daily Volume", value: "$80B+" },
              { label: "Exchanges", value: "100+" },
              { label: "Employees", value: "200+" },
              { label: "Offices", value: "New York, London, Singapore" },
            ].map((fact) => (
              <div key={fact.label} className="flex justify-between rounded-xl border border-border bg-surface-card p-4">
                <span className="text-sm text-text-muted">{fact.label}</span>
                <span className="text-sm font-semibold text-text-primary">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
