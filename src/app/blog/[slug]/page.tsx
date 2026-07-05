import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";

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

const postContent: Record<string, string[]> = {
  "susd-140b-market-cap": [
    "StableUSD has reached a historic milestone, surpassing $140 billion in total market capitalization. This achievement underscores the growing trust in SUSD as the world's leading stablecoin.",
    "The growth reflects increasing adoption across both retail and institutional users. Major exchanges now process over $80 billion in SUSD trading volume daily, making it the most liquid stablecoin in the market.",
    "Several factors have contributed to this growth: expansion to new blockchain networks, partnerships with leading financial institutions, and our unwavering commitment to transparency and regulatory compliance.",
    "We want to thank our community of over 45 million holders worldwide. Your trust drives us to continue building the most reliable digital dollar infrastructure in the world.",
  ],
  "expanding-5-new-networks": [
    "We're excited to announce that SUSD will be launching on five additional blockchain networks in Q3 2026. This expansion will bring our total network support to over 20 chains.",
    "The new networks include several emerging L2 solutions and alternative L1s that have shown significant growth in developer activity and user adoption over the past quarter.",
    "Each deployment undergoes rigorous security auditing and testing before launch. We work closely with each network's team to ensure seamless integration and optimal user experience.",
    "Stay tuned for specific launch dates and network details in the coming weeks.",
  ],
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const content = postContent[slug] || [
    post.excerpt,
    "This is a placeholder article body. In production, this content would be loaded from a CMS or markdown files.",
    "StableUSD continues to innovate and expand its ecosystem. Stay tuned for more updates from our team.",
  ];

  return (
    <>
      {/* Article Header */}
      <section className="border-b border-border bg-surface py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <span className="text-xs font-medium uppercase tracking-wider text-primary">{post.category}</span>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{post.title}</h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-text-muted">
            <time>{post.date}</time>
            <span>·</span>
            <span>{post.readTime} read</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-invert max-w-none">
            {content.map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg leading-relaxed text-text-secondary">
                {paragraph}
              </p>
            ))}
          </article>

          {/* Share */}
          <div className="mt-12 border-t border-border pt-8">
            <p className="mb-4 text-sm font-medium text-text-muted">Share this article</p>
            <div className="flex gap-3">
              {["Twitter", "LinkedIn", "Copy Link"].map((platform) => (
                <button
                  key={platform}
                  className="rounded-lg border border-border px-4 py-2 text-sm text-text-secondary transition-colors hover:border-primary hover:text-primary"
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold">More Articles</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {allPosts
              .filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="card-hover group rounded-xl border border-border bg-surface-card p-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">{p.category}</span>
                  <h3 className="mt-3 font-semibold text-text-primary group-hover:text-primary">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-text-secondary">{p.excerpt}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
