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
    { label: "Networks", value: "15+" },
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
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-surface grid-pattern">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px] sm:h-[600px] sm:w-[600px] sm:blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[80px] sm:-bottom-32 sm:-left-32 sm:h-[400px] sm:w-[400px] sm:blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary sm:mb-6 sm:px-4 sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse sm:h-2 sm:w-2" />
              {hero.badge}
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-7xl">
              {hero.title}{" "}
              <span className="gradient-text">{hero.titleHighlight}</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-secondary sm:mt-6 sm:max-w-2xl sm:text-lg lg:text-xl">
              {hero.description}
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Link
                href={hero.ctaPrimaryLink}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                {hero.ctaPrimary}
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href={hero.ctaSecondaryLink}
                className="flex w-full items-center justify-center rounded-xl border border-border px-6 py-3.5 text-sm font-semibold text-text-primary transition-all hover:border-primary hover:bg-primary/5 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                {hero.ctaSecondary}
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-12 grid max-w-lg grid-cols-2 gap-3 sm:mt-16 sm:max-w-2xl sm:gap-4 lg:mt-20 lg:max-w-3xl lg:grid-cols-4 lg:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-surface-light/50 p-3 text-center sm:p-4">
                <div className="text-xl font-bold text-text-primary sm:text-2xl lg:text-3xl">{stat.value}</div>
                <div className="mt-0.5 text-[10px] text-text-muted sm:mt-1 sm:text-xs lg:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="border-b border-border py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center sm:mb-12 lg:mb-16">
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Our Products</h2>
            <p className="mt-3 text-base text-text-secondary sm:mt-4 sm:text-lg">Stablecoins for every need.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {products.map((product) => (
              <Link key={product.name} href={product.href} className="card-hover group flex flex-col rounded-2xl border border-border bg-surface-card p-5 sm:p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-base font-bold text-white sm:mb-4 sm:h-12 sm:w-12 sm:text-lg" style={{ backgroundColor: product.color }}>
                  {product.name[0]}
                </div>
                <h3 className="text-base font-semibold text-text-primary group-hover:text-primary sm:text-lg">{product.name}</h3>
                <p className="mt-0.5 text-xs font-medium text-text-muted sm:mt-1 sm:text-sm">{product.fullName}</p>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-text-secondary sm:mt-3 sm:text-sm">{product.description}</p>
                <div className="mt-3 flex items-center gap-2 text-xs sm:mt-4 sm:text-sm">
                  <span className="font-semibold text-text-primary">{product.marketCap}</span>
                  <span className="text-text-muted">market cap</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1 sm:mt-3 sm:gap-1.5">
                  {product.chains.slice(0, 3).map((chain) => (
                    <span key={chain} className="rounded-md bg-surface-light px-1.5 py-0.5 text-[10px] text-text-muted sm:px-2 sm:text-xs">{chain}</span>
                  ))}
                  {product.chains.length > 3 && (
                    <span className="rounded-md bg-surface-light px-1.5 py-0.5 text-[10px] text-text-muted sm:px-2 sm:text-xs">+{product.chains.length - 3}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-border bg-surface py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center sm:mb-12 lg:mb-16">
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Why {siteName}?</h2>
            <p className="mt-3 text-base text-text-secondary sm:mt-4 sm:text-lg">Built for trust, designed for scale.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="card-hover rounded-2xl border border-border bg-surface-card p-5 sm:p-6 lg:p-8">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary sm:mb-4 sm:h-12 sm:w-12">
                  <FeatureIcon name={feature.icon} />
                </div>
                <h3 className="text-base font-semibold text-text-primary sm:text-lg">{feature.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-text-secondary sm:mt-3 sm:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Chains */}
      <section className="border-b border-border py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center sm:mb-12 lg:mb-16">
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Available on 15+ Networks</h2>
            <p className="mt-3 text-base text-text-secondary sm:mt-4 sm:text-lg">Use SUSD on your preferred blockchain.</p>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 md:grid-cols-6 lg:gap-4">
            {supportedChains.map((chain) => (
              <div key={chain.symbol} className="card-hover flex flex-col items-center gap-2 rounded-xl border border-border bg-surface-card p-3 sm:gap-3 sm:p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-light text-xs font-bold text-text-primary sm:h-10 sm:w-10 sm:text-sm">{chain.symbol[0]}</div>
                <span className="text-[10px] font-medium text-text-secondary sm:text-xs lg:text-sm">{chain.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exchange Partners */}
      <section className="border-b border-border bg-surface py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center sm:mb-12 lg:mb-16">
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Available on Major Exchanges</h2>
            <p className="mt-3 text-base text-text-secondary sm:mt-4 sm:text-lg">Trade SUSD on leading exchanges.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
            {exchangePartners.map((exchange) => (
              <div key={exchange.name} className="card-hover flex flex-col items-center gap-1 rounded-xl border border-border bg-surface-card p-4 text-center sm:gap-2 sm:p-6">
                <span className="text-base font-semibold text-text-primary sm:text-lg">{exchange.name}</span>
                <span className="text-xs text-text-muted sm:text-sm">{exchange.volume} daily</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="border-b border-border py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1.5 text-xs font-medium text-success sm:mb-6 sm:px-4 sm:text-sm">
            <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            100% Reserved
          </div>
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Transparency You Can Verify</h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary sm:mt-6 sm:text-lg">
            Every SUSD is backed 1:1 by reserves. Monthly attestations from independent auditors.
          </p>
          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
            {[
              { label: "US Treasury Bills", value: "80%", desc: "of reserves" },
              { label: "Monthly Reports", value: "Published", desc: "on schedule" },
              { label: "Independent Audits", value: "Big 4", desc: "accounting firms" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-surface-card p-4 sm:p-6">
                <div className="text-xl font-bold text-primary sm:text-2xl">{item.value}</div>
                <div className="mt-1 text-xs font-medium text-text-primary sm:text-sm">{item.label}</div>
                <div className="text-[10px] text-text-muted sm:text-xs">{item.desc}</div>
              </div>
            ))}
          </div>
          <Link href="/transparency" className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline sm:mt-8 sm:gap-2 sm:text-sm">
            View Transparency Report
            <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Blog */}
      <section className="border-b border-border bg-surface py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-end justify-between sm:mb-8 lg:mb-12">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Latest News</h2>
              <p className="mt-1 text-sm text-text-secondary sm:mt-2 sm:text-base">Stay up to date with {siteName}.</p>
            </div>
            <Link href="/blog" className="hidden text-sm font-semibold text-primary hover:underline sm:block">View all →</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card-hover group rounded-xl border border-border bg-surface-card p-4 sm:p-6">
                <span className="text-[10px] font-medium uppercase tracking-wider text-primary sm:text-xs">{post.category}</span>
                <h3 className="mt-2 text-sm font-semibold text-text-primary group-hover:text-primary sm:mt-3 sm:text-base">{post.title}</h3>
                <p className="mt-1.5 line-clamp-2 text-xs text-text-secondary sm:mt-2 sm:text-sm">{post.excerpt}</p>
                <div className="mt-3 flex items-center gap-2 text-[10px] text-text-muted sm:mt-4 sm:gap-3 sm:text-xs">
                  <time>{post.date}</time>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/blog" className="mt-4 block text-center text-sm font-semibold text-primary hover:underline sm:hidden">View all posts →</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-surface p-6 text-center sm:rounded-3xl sm:p-10 lg:p-16">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary/20 blur-[60px] sm:-right-20 sm:-top-20 sm:h-64 sm:w-64 sm:blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-accent/20 blur-[60px] sm:-bottom-20 sm:-left-20 sm:h-64 sm:w-64 sm:blur-[80px]" />
            <div className="relative">
              <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">{cta.title}</h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-text-secondary sm:mt-4 sm:max-w-xl sm:text-base lg:text-lg">{cta.description}</p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                <Link href={cta.buttonPrimaryLink} className="flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-auto sm:px-8 sm:py-4 sm:text-base">
                  {cta.buttonPrimary}
                </Link>
                <Link href={cta.buttonSecondaryLink} className="flex w-full items-center justify-center rounded-xl border border-border px-6 py-3.5 text-sm font-semibold text-text-primary transition-all hover:border-primary sm:w-auto sm:px-8 sm:py-4 sm:text-base">
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
      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    globe: (
      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    zap: (
      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    lock: (
      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    code: (
      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    users: (
      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  };
  return icons[name] || null;
}
