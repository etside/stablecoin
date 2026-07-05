import Link from "next/link";
import { notFound } from "next/navigation";
import { products, supportedChains } from "@/lib/data";

const productDetails: Record<string, {
  longDescription: string;
  features: string[];
  useCases: { title: string; description: string }[];
  howToBuy: { step: number; title: string; description: string }[];
}> = {
  susd: {
    longDescription:
      "StableUSD (SUSD) is the world's leading USD-pegged stablecoin. Each token is backed 1:1 by reserves held in cash, cash equivalents, and US Treasury bills. SUSD enables instant, low-cost transfers across 15+ blockchain networks, making it the most versatile and widely adopted digital dollar in existence.",
    features: [
      "1:1 USD backing with full reserve transparency",
      "Available on 15+ blockchain networks",
      "Instant settlement, 24/7/365",
      "Monthly reserve attestations from Big 4 auditors",
      "Regulatory compliant across multiple jurisdictions",
      "Smart contract audited by leading security firms",
    ],
    useCases: [
      { title: "Cross-border Payments", description: "Send money globally in seconds without intermediaries or high fees." },
      { title: "DeFi Collateral", description: "Use as collateral across lending, borrowing, and yield protocols." },
      { title: "Trading Pair", description: "The most liquid stablecoin for trading against other crypto assets." },
      { title: "Store of Value", description: "Hold digital dollars without banking infrastructure." },
    ],
    howToBuy: [
      { step: 1, title: "Choose an Exchange", description: "SUSD is available on Binance, Coinbase, OKX, Bitget, and 100+ other exchanges." },
      { step: 2, title: "Create & Verify Account", description: "Complete KYC verification on your chosen exchange." },
      { step: 3, title: "Deposit Funds", description: "Deposit fiat currency or crypto to your exchange account." },
      { step: 4, title: "Buy SUSD", description: "Navigate to SUSD trading pair and place your order." },
    ],
  },
  "susd-plus": {
    longDescription:
      "SUSD+ is a yield-bearing stablecoin that automatically earns passive income while maintaining a stable value. Built on battle-tested DeFi strategies, SUSD+ offers the stability of a traditional stablecoin with the added benefit of yield generation.",
    features: [
      "Automatic yield generation",
      "No staking or locking required",
      "Stable value with passive income",
      "Transparent yield sources",
      "Composable across DeFi protocols",
      "Institutional-grade security",
    ],
    useCases: [
      { title: "Passive Income", description: "Earn yield on your stablecoin holdings without active management." },
      { title: "Treasury Management", description: "Corporate treasuries can earn yield on idle digital dollar reserves." },
      { title: "DeFi Yield Farming", description: "Use SUSD+ in DeFi protocols for additional yield layers." },
      { title: "Savings Alternative", description: "A digital savings account with competitive yields." },
    ],
    howToBuy: [
      { step: 1, title: "Connect Wallet", description: "Connect your Ethereum, Arbitrum, or Base wallet to our platform." },
      { step: 2, title: "Deposit SUSD", description: "Deposit SUSD to receive SUSD+ tokens at a 1:1 ratio." },
      { step: 3, title: "Earn Yield", description: "Your SUSD+ automatically earns yield from underlying strategies." },
      { step: 4, title: "Withdraw Anytime", description: "Convert back to SUSD at any time with accumulated yield." },
    ],
  },
  "susd-gold": {
    longDescription:
      "SUSD Gold is a digital token backed 1:1 by physical gold stored in secure vaults. Each token represents ownership of one troy ounce of investment-grade gold, combining the timeless value of gold with the efficiency of blockchain technology.",
    features: [
      "Backed 1:1 by physical gold",
      "Stored in LBMA-approved vaults",
      "Quarterly audited by independent firms",
      "Redeemable for physical gold",
      "Fractional ownership possible",
      "Instant global transferability",
    ],
    useCases: [
      { title: "Digital Gold Ownership", description: "Own gold without the logistics of storage and insurance." },
      { title: "Inflation Hedge", description: "Protect purchasing power with gold-backed stability." },
      { title: "Portfolio Diversification", description: "Add gold exposure to your digital asset portfolio." },
      { title: "Cross-border Gold Transfer", description: "Transfer gold value instantly across borders." },
    ],
    howToBuy: [
      { step: 1, title: "Choose an Exchange", description: "SUSD Gold is available on select exchanges supporting ERC-20 tokens." },
      { step: 2, title: "Verify Account", description: "Complete enhanced KYC for gold-backed products." },
      { step: 3, title: "Purchase SUSD Gold", description: "Buy SUSD Gold tokens at current gold spot price." },
      { step: 4, title: "Hold or Redeem", description: "Hold digitally or redeem for physical gold delivery." },
    ],
  },
  "susd-eur": {
    longDescription:
      "SUSD EUR is a Euro-pegged stablecoin designed for seamless cross-border payments within the European market and beyond. Fully compliant with MiCA regulations, SUSD EUR provides a trusted digital Euro for the modern financial system.",
    features: [
      "1:1 Euro backing",
      "MiCA compliant",
      "SEPA integration for fiat on/off ramp",
      "Low transaction fees",
      "Instant settlement across Eurozone",
      "Regulated by European authorities",
    ],
    useCases: [
      { title: "European Payments", description: "Send and receive Euros instantly across the Eurozone." },
      { title: "FX Trading", description: "Trade EUR/USD pairs with minimal slippage using SUSD pairs." },
      { title: "Business Payments", description: "Streamline B2B payments across European borders." },
      { title: "Remittances", description: "Low-cost Euro remittances to and from Europe." },
    ],
    howToBuy: [
      { step: 1, title: "SEPA Transfer", description: "Transfer Euros via SEPA to a supported exchange." },
      { step: 2, title: "Buy SUSD EUR", description: "Purchase SUSD EUR at 1:1 with your Euro deposit." },
      { step: 3, title: "Use Across Chains", description: "Transfer SUSD EUR across Ethereum and Polygon networks." },
      { step: 4, title: "Redeem for EUR", description: "Convert back to Euros via SEPA withdrawal at any time." },
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.href.split("/").pop(),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.href === `/products/${slug}`);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.fullName,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.href === `/products/${slug}`);
  const details = productDetails[slug];

  if (!product || !details) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl text-3xl font-bold text-white"
              style={{ backgroundColor: product.color }}
            >
              {product.name[0]}
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl">{product.fullName}</h1>
            <p className="mt-2 text-lg text-text-muted">{product.name} · {product.marketCap} market cap</p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
              {details.longDescription}
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/support"
                className="rounded-xl bg-primary px-8 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
              >
                Get {product.name}
              </Link>
              <Link
                href="/developers"
                className="rounded-xl border border-border px-8 py-3 font-semibold text-text-primary transition-all hover:border-primary"
              >
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">Key Features</h2>
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            {details.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-xl border border-border bg-surface-card p-4">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-text-secondary">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">Use Cases</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {details.useCases.map((useCase) => (
              <div key={useCase.title} className="rounded-2xl border border-border bg-surface-card p-8">
                <h3 className="text-lg font-semibold text-text-primary">{useCase.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">How to Get {product.name}</h2>
          <div className="mx-auto grid max-w-3xl gap-6">
            {details.howToBuy.map((step) => (
              <div key={step.step} className="flex gap-6 rounded-xl border border-border bg-surface-card p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">{step.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Chains */}
      <section className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold">Supported Networks</h2>
          <p className="mb-12 text-center text-text-secondary">Available on {product.chains.length} blockchain networks</p>
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {product.chains.map((chain) => (
              <div key={chain} className="flex items-center gap-3 rounded-xl border border-border bg-surface-card p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-light text-xs font-bold text-text-primary">
                  {chain[0]}
                </div>
                <span className="text-sm font-medium text-text-secondary">{chain}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Ready to Get {product.name}?</h2>
          <p className="mt-4 text-lg text-text-secondary">
            Join millions of users who trust {product.fullName} for their digital asset needs.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/support"
              className="rounded-xl bg-primary px-8 py-4 font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get Started
            </Link>
            <Link
              href="/transparency"
              className="rounded-xl border border-border px-8 py-4 font-semibold text-text-primary transition-all hover:border-primary"
            >
              View Reserves
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
