"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { products, features, supportedChains, exchangePartners, blogPosts } from "@/lib/data";

interface SiteSettings {
  branding: { siteName: string; siteTagline: string; logoText: string; logoColor: string; primaryColor: string };
  hero: { badge: string; title: string; titleHighlight: string; description: string; ctaPrimary: string; ctaPrimaryLink: string; ctaSecondary: string; ctaSecondaryLink: string };
  stats: { label: string; value: string }[];
  cta: { title: string; description: string; buttonPrimary: string; buttonPrimaryLink: string; buttonSecondary: string; buttonSecondaryLink: string };
  footer: { description: string; copyright: string };
  social: { twitter: string; github: string; discord: string; telegram: string };
  seo: { title: string; description: string; keywords: string[] };
}

export default function Home() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    fetch("/api/cms/public")
      .then((res) => res.json())
      .then((data) => setSettings(data.settings))
      .catch(() => {});
  }, []);

  // Use CMS settings or defaults
  const siteName = settings?.branding.siteName || "StableUSD";
  const hero = settings?.hero || {
    badge: "Live on 15+ Networks",
    title: "Digital Money for the",
    titleHighlight: "Digital Age",
    description: "The world's most trusted stablecoin. Fully reserved, multi-chain, and regulatory compliant. Send, spend, and save with confidence.",
    ctaPrimary: "Get SUSD",
    ctaPrimaryLink: "/products/susd",
    ctaSecondary: "Read the Docs",
    ctaSecondaryLink: "/developers",
  };
  const stats = settings?.stats || [
    { label: "Market Cap", value: "$140B+" },
    { label: "Blockchain Networks", value: "15+" },
    { label: "Daily Volume", value: "$80B+" },
    { label: "Holders", value: "45M+" },
  ];
  const cta = settings?.cta || {
    title: "Ready to Get Started?",
    description: "Join millions of users who trust StableUSD for their digital dollar needs.",
    buttonPrimary: "Buy SUSD Now",
    buttonPrimaryLink: "/products/susd",
    buttonSecondary: "Contact Sales",
    buttonSecondaryLink: "/support",
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-surface grid-pattern">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              {hero.badge}
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              {hero.title}{" "}
              <span className="gradient-text">{hero.titleHighlight}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={hero.ctaPrimaryLink}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40"
              >
                {hero.ctaPrimary}
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href={hero.ctaSecondaryLink}
                className="inline-flex items-center gap-2 rounded-xl border border-border px-8 py-4 text-base font-semibold text-text-primary transition-all hover:border-primary hover:bg-primary/5"
              >
                {hero.ctaSecondary}
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-surface-light/50 p-4 text-center">
                <div className="text-2xl font-bold text-text-primary sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs text-text-muted sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Products</h2>
            <p className="mt-4 text-lg text-text-secondary">Stablecoins for every need. Choose the one that works for you.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Link key={product.name} href={product.href} className="card-hover group rounded-2xl border border-border bg-surface-card p-6 transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white" style={{ backgroundColor: product.color }}>
                  {product.name[0]}
                </div>
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary">{product.name}</h3>
                <p className="mt-1 text-sm font-medium text-text-muted">{product.fullName}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{product.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <span className="font-semibold text-text-primary">{product.marketCap}</span>
                  <span className="text-text-muted">market cap</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {product.chains.slice(0, 3).map((chain) => (
                    <span key={chain} className="rounded-md bg-surface-light px-2 py-0.5 text-xs text-text-muted">{chain}</span>
                  ))}
                  {product.chains.length > 3 && (
                    <span className="rounded-md bg-surface-light px-2 py-0.5 text-xs text-text-muted">+{product.chains.length - 3}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Why {siteName}?</h2>
            <p className="mt-4 text-lg text-text-secondary">Built for trust, designed for scale, engineered for the future.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="card-hover rounded-2xl border border-border bg-surface-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FeatureIcon name={feature.icon} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Chains */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Available on 15+ Networks</h2>
            <p className="mt-4 text-lg text-text-secondary">Use SUSD on your preferred blockchain. Always the same stable value.</p>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
            {supportedChains.map((chain) => (
              <div key={chain.symbol} className="card-hover flex flex-col items-center gap-3 rounded-xl border border-border bg-surface-card p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-light text-sm font-bold text-text-primary">{chain.symbol[0]}</div>
                <span className="text-sm font-medium text-text-secondary">{chain.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exchange Partners */}
      <section className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Available on Major Exchanges</h2>
            <p className="mt-4 text-lg text-text-secondary">Trade SUSD on the world&apos;s leading cryptocurrency exchanges.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {exchangePartners.map((exchange) => (
              <div key={exchange.name} className="card-hover flex flex-col items-center gap-2 rounded-xl border border-border bg-surface-card p-6 text-center">
                <span className="text-lg font-semibold text-text-primary">{exchange.name}</span>
                <span className="text-sm text-text-muted">{exchange.volume} daily volume</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Teaser */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-1.5 text-sm font-medium text-success">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            100% Reserved
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl">Transparency You Can Verify</h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            Every SUSD is backed 1:1 by reserves. We publish monthly attestations from independent accounting firms so you can verify our reserves at any time.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: "US Treasury Bills", value: "80%", desc: "of reserves" },
              { label: "Monthly Reports", value: "Published", desc: "on schedule" },
              { label: "Independent Audits", value: "Big 4", desc: "accounting firms" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-surface-card p-6">
                <div className="text-2xl font-bold text-primary">{item.value}</div>
                <div className="mt-1 text-sm font-medium text-text-primary">{item.label}</div>
                <div className="text-xs text-text-muted">{item.desc}</div>
              </div>
            ))}
          </div>
          <Link href="/transparency" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            View Full Transparency Report
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold">Latest News</h2>
              <p className="mt-2 text-text-secondary">Stay up to date with {siteName} developments.</p>
            </div>
            <Link href="/blog" className="hidden text-sm font-semibold text-primary hover:underline sm:block">View all posts →</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card-hover group rounded-xl border border-border bg-surface-card p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-primary">{post.category}</span>
                <h3 className="mt-3 text-base font-semibold text-text-primary group-hover:text-primary">{post.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-text-secondary">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-text-muted">
                  <time>{post.date}</time>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 to-surface p-12 text-center sm:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/20 blur-[80px]" />
            <div className="relative">
              <h2 className="text-3xl font-bold sm:text-4xl">{cta.title}</h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-text-secondary">{cta.description}</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href={cta.buttonPrimaryLink} className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl">
                  {cta.buttonPrimary}
                </Link>
                <Link href={cta.buttonSecondaryLink} className="inline-flex items-center gap-2 rounded-xl border border-border px-8 py-4 font-semibold text-text-primary transition-all hover:border-primary">
                  {cta.buttonSecondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    shield: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    globe: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    zap: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    lock: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    code: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    users: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  };
  return icons[name] || null;
}
