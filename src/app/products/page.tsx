import Link from "next/link";
import type { Metadata } from "next";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore the full suite of StableUSD products — stablecoins for every need.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">Our Products</h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              A complete suite of digital assets designed for stability, accessibility,
              and trust. From dollar-pegged stablecoins to gold-backed tokens.
            </p>
          </div>
        </div>
      </section>

      {/* Products Detail */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => (
              <div
                key={product.name}
                className={`flex flex-col gap-12 rounded-2xl border border-border bg-surface-card p-8 lg:flex-row lg:items-center lg:p-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div
                    className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold text-white"
                    style={{ backgroundColor: product.color }}
                  >
                    {product.name[0]}
                  </div>
                  <h2 className="text-3xl font-bold">{product.fullName}</h2>
                  <p className="mt-2 text-sm font-medium text-text-muted">
                    {product.name} · {product.marketCap} market cap
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                    {product.description}
                  </p>

                  <div className="mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                      Available on
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {product.chains.map((chain) => (
                        <span
                          key={chain}
                          className="rounded-lg border border-border bg-surface-light px-3 py-1.5 text-sm text-text-secondary"
                        >
                          {chain}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <Link
                      href={product.href}
                      className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/developers"
                      className="rounded-xl border border-border px-6 py-3 text-sm font-semibold text-text-primary transition-all hover:border-primary"
                    >
                      View Docs
                    </Link>
                  </div>
                </div>

                {/* Visual placeholder */}
                <div className="flex flex-1 items-center justify-center">
                  <div
                    className="flex h-64 w-64 items-center justify-center rounded-3xl text-6xl font-bold text-white/20"
                    style={{
                      background: `linear-gradient(135deg, ${product.color}20, ${product.color}05)`,
                      border: `1px solid ${product.color}30`,
                    }}
                  >
                    {product.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="border-t border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">Compare Products</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-text-muted">Feature</th>
                  {products.map((p) => (
                    <th key={p.name} className="px-6 py-4 text-center text-sm font-semibold text-text-primary">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Peg", values: ["USD", "USD (Yield)", "Gold", "EUR"] },
                  { label: "Market Cap", values: ["$140B", "$2.5B", "$800M", "$500M"] },
                  { label: "Chains", values: ["15+", "3", "2", "2"] },
                  { label: "Backing", values: ["Cash & T-Bills", "Yield Strategy", "Physical Gold", "Cash & T-Bills"] },
                  { label: "Yield", values: ["No", "Yes", "No", "No"] },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-border/50">
                    <td className="px-6 py-4 text-sm font-medium text-text-secondary">{row.label}</td>
                    {row.values.map((val, i) => (
                      <td key={i} className="px-6 py-4 text-center text-sm text-text-primary">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
