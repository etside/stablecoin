import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developers",
  description: "Build with StableUSD. APIs, SDKs, documentation, and tools for developers.",
};

const sdks = [
  { name: "JavaScript/TypeScript", package: "npm install @stableusd/sdk", icon: "JS" },
  { name: "Python", package: "pip install stableusd", icon: "PY" },
  { name: "Go", package: "go get github.com/stableusd/go-sdk", icon: "GO" },
  { name: "Rust", package: 'stableusd = "1.0"', icon: "RS" },
  { name: "Solidity", package: "import @stableusd/contracts", icon: "SO" },
  { name: "Java", package: 'com.stableusd:sdk:1.0', icon: "JV" },
];

const apiEndpoints = [
  { method: "GET", path: "/v1/balance/{address}", desc: "Get SUSD balance for an address" },
  { method: "POST", path: "/v1/transfer", desc: "Initiate an SUSD transfer" },
  { method: "GET", path: "/v1/transactions", desc: "List recent transactions" },
  { method: "GET", path: "/v1/reserves", desc: "Get current reserve data" },
  { method: "GET", path: "/v1/attestation/latest", desc: "Latest reserve attestation" },
  { method: "GET", path: "/v1/chains", desc: "List supported chains" },
];

export default function DevelopersPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">Developer Documentation</h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              Everything you need to integrate StableUSD into your application.
              APIs, SDKs, smart contracts, and comprehensive guides.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a href="#quickstart" className="rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30">
                Quick Start
              </a>
              <a href="#api" className="rounded-xl border border-border px-6 py-3 font-semibold text-text-primary transition-all hover:border-primary">
                API Reference
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section id="quickstart" className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">Quick Start</h2>
          <div className="mx-auto max-w-3xl space-y-8">
            {[
              {
                step: 1,
                title: "Get Your API Key",
                code: `# Sign up at stableusd.io/developers
# Generate an API key from your dashboard
export SUSD_API_KEY="sk_live_..."`,
              },
              {
                step: 2,
                title: "Install the SDK",
                code: `# npm
npm install @stableusd/sdk

# pip
pip install stableusd`,
              },
              {
                step: 3,
                title: "Make Your First Request",
                code: `import { StableUSD } from '@stableusd/sdk';

const susd = new StableUSD({
  apiKey: process.env.SUSD_API_KEY,
});

// Check balance
const balance = await susd.getBalance('0x...');
console.log(\`Balance: \${balance.amount} SUSD\`);`,
              },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-border bg-surface-card p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                </div>
                <pre className="overflow-x-auto rounded-xl bg-surface p-4 text-sm text-text-secondary">
                  <code>{item.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section id="sdks" className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold">SDKs & Libraries</h2>
          <p className="mb-12 text-center text-text-secondary">Official SDKs for your preferred language.</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sdks.map((sdk) => (
              <div key={sdk.name} className="card-hover rounded-xl border border-border bg-surface-card p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                    {sdk.icon}
                  </div>
                  <h3 className="font-semibold text-text-primary">{sdk.name}</h3>
                </div>
                <pre className="mt-4 overflow-x-auto rounded-lg bg-surface p-3 text-xs text-text-secondary">
                  <code>{sdk.package}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section id="api" className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold">API Reference</h2>
          <p className="mb-12 text-center text-text-secondary">RESTful API for all StableUSD operations.</p>
          <div className="mx-auto max-w-3xl space-y-3">
            {apiEndpoints.map((endpoint) => (
              <div key={endpoint.path} className="flex items-center gap-4 rounded-xl border border-border bg-surface-card p-4">
                <span className={`rounded px-2 py-1 text-xs font-bold ${
                  endpoint.method === "GET" ? "bg-success/10 text-success" : "bg-primary/10 text-primary"
                }`}>
                  {endpoint.method}
                </span>
                <code className="text-sm font-mono text-text-primary">{endpoint.path}</code>
                <span className="ml-auto text-sm text-text-muted">{endpoint.desc}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="#" className="text-sm font-semibold text-primary hover:underline">
              View Full API Documentation →
            </a>
          </div>
        </div>
      </section>

      {/* Smart Contracts */}
      <section id="contracts" className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold">Smart Contracts</h2>
          <p className="mb-12 text-center text-text-secondary">Verified contract addresses across all supported networks.</p>
          <div className="mx-auto max-w-3xl space-y-3">
            {[
              { chain: "Ethereum", address: "0x1234567890abcdef1234567890abcdef12345678", standard: "ERC-20" },
              { chain: "Tron", address: "TRX1234567890abcdef1234567890abcdef", standard: "TRC-20" },
              { chain: "Solana", address: "SUSD1234567890abcdef1234567890abcdef", standard: "SPL" },
              { chain: "BNB Chain", address: "0xabcdef1234567890abcdef1234567890abcdef12", standard: "BEP-20" },
            ].map((contract) => (
              <div key={contract.chain} className="flex items-center justify-between rounded-xl border border-border bg-surface-card p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-light text-xs font-bold text-text-primary">
                    {contract.chain[0]}
                  </div>
                  <div>
                    <span className="font-medium text-text-primary">{contract.chain}</span>
                    <span className="ml-2 text-xs text-text-muted">{contract.standard}</span>
                  </div>
                </div>
                <code className="text-xs font-mono text-text-secondary">{contract.address}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">Resources</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "GitHub", desc: "Open-source SDKs, examples, and integrations.", link: "github.com/stableusd" },
              { title: "Developer Forum", desc: "Ask questions and share solutions with other developers.", link: "forum.stableusd.io" },
              { title: "Status Page", desc: "Real-time API status and uptime monitoring.", link: "status.stableusd.io" },
            ].map((resource) => (
              <div key={resource.title} className="card-hover rounded-xl border border-border bg-surface-card p-6 text-center">
                <h3 className="text-lg font-semibold text-text-primary">{resource.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{resource.desc}</p>
                <p className="mt-3 text-xs text-primary">{resource.link}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
