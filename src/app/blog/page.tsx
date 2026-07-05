import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest news, updates, and insights from the StableUSD team.",
};

const allPosts = [
  ...blogPosts,
  {
    title: "How SUSD Maintains Its Peg: A Technical Deep Dive",
    excerpt: "An in-depth look at the mechanisms that keep SUSD stable at $1.00 across all networks.",
    date: "2026-06-01",
    category: "Technical",
    slug: "how-susd-maintains-peg",
    readTime: "8 min",
  },
  {
    title: "The Future of Stablecoins: 2026 and Beyond",
    excerpt: "Our perspective on where the stablecoin industry is headed and how SUSD is preparing.",
    date: "2026-05-20",
    category: "Industry",
    slug: "future-of-stablecoins-2026",
    readTime: "6 min",
  },
  {
    title: "SUSD Now Available on Base Network",
    excerpt: "We've expanded to Coinbase's L2 network, bringing SUSD to even more users.",
    date: "2026-05-10",
    category: "Product Updates",
    slug: "susd-on-base-network",
    readTime: "3 min",
  },
  {
    title: "Security Audit Report: Q1 2026",
    excerpt: "Summary of our latest security audit findings and the steps we've taken to address them.",
    date: "2026-04-28",
    category: "Security",
    slug: "security-audit-q1-2026",
    readTime: "5 min",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">Blog</h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              News, updates, and insights from the StableUSD team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href={`/blog/${allPosts[0].slug}`} className="group block">
            <div className="grid gap-8 rounded-2xl border border-border bg-surface-card p-8 lg:grid-cols-2 lg:p-12">
              <div className="flex h-64 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10">
                <span className="text-6xl font-bold text-primary/30">SUSD</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  {allPosts[0].category} · Featured
                </span>
                <h2 className="mt-3 text-2xl font-bold text-text-primary group-hover:text-primary lg:text-3xl">
                  {allPosts[0].title}
                </h2>
                <p className="mt-4 text-text-secondary">{allPosts[0].excerpt}</p>
                <div className="mt-6 flex items-center gap-3 text-sm text-text-muted">
                  <time>{allPosts[0].date}</time>
                  <span>·</span>
                  <span>{allPosts[0].readTime} read</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-2xl font-bold">All Posts</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-hover group rounded-xl border border-border bg-surface-card p-6"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  {post.category}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-text-primary group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-text-secondary">
                  {post.excerpt}
                </p>
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
    </>
  );
}
