import type { Metadata } from "next";
import { reserveBreakdown } from "@/lib/data";

export const metadata: Metadata = {
  title: "Transparency",
  description: "View StableUSD's reserve composition, attestation reports, and proof of funds.",
};

export default function TransparencyPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-1.5 text-sm font-medium text-success">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              100% Reserved
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl">Transparency Center</h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              Every StableUSD token is fully backed by reserves. We believe in radical
              transparency — our reserve composition, attestation reports, and proof of
              funds are publicly available for anyone to verify.
            </p>
          </div>
        </div>
      </section>

      {/* Live Reserves */}
      <section id="reserves" className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold">Reserve Composition</h2>
          <p className="mb-12 text-center text-text-secondary">
            Current breakdown of assets backing all SUSD tokens in circulation.
          </p>

          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
            {/* Chart placeholder */}
            <div className="flex items-center justify-center rounded-2xl border border-border bg-surface-card p-8">
              <div className="relative h-64 w-64">
                {reserveBreakdown.map((item, index) => {
                  const prevPercent = reserveBreakdown.slice(0, index).reduce((sum, r) => sum + r.percentage, 0);
                  const rotation = (prevPercent / 100) * 360;
                  const arcLength = (item.percentage / 100) * 360;
                  return (
                    <div
                      key={item.category}
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(${item.color} ${arcLength}deg, transparent ${arcLength}deg)`,
                        transform: `rotate(${rotation}deg)`,
                      }}
                    />
                  );
                })}
                <div className="absolute inset-8 flex items-center justify-center rounded-full bg-surface-card">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-text-primary">$140B</div>
                    <div className="text-xs text-text-muted">Total Reserves</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Breakdown list */}
            <div className="space-y-4">
              {reserveBreakdown.map((item) => (
                <div key={item.category} className="rounded-xl border border-border bg-surface-card p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="font-medium text-text-primary">{item.category}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-text-primary">{item.percentage}%</span>
                      <span className="ml-2 text-sm text-text-muted">{item.amount}</span>
                    </div>
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-surface-light">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Attestation Reports */}
      <section id="attestations" className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold">Reserve Attestations</h2>
          <p className="mb-12 text-center text-text-secondary">
            Independent monthly attestations from leading accounting firms.
          </p>

          <div className="mx-auto max-w-3xl space-y-4">
            {[
              { date: "June 2026", auditor: "BDO", status: "Published", url: "#" },
              { date: "May 2026", auditor: "BDO", status: "Published", url: "#" },
              { date: "April 2026", auditor: "BDO", status: "Published", url: "#" },
              { date: "March 2026", auditor: "BDO", status: "Published", url: "#" },
              { date: "February 2026", auditor: "BDO", status: "Published", url: "#" },
              { date: "January 2026", auditor: "BDO", status: "Published", url: "#" },
            ].map((report) => (
              <div
                key={report.date}
                className="flex items-center justify-between rounded-xl border border-border bg-surface-card p-5"
              >
                <div>
                  <h3 className="font-semibold text-text-primary">{report.date} Attestation</h3>
                  <p className="mt-1 text-sm text-text-muted">Auditor: {report.auditor}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success">
                    {report.status}
                  </span>
                  <a
                    href={report.url}
                    className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-primary hover:text-primary"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section id="reports" className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold">Quarterly Reports</h2>
          <p className="mb-12 text-center text-text-secondary">
            Comprehensive quarterly reports on reserves, operations, and compliance.
          </p>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {[
              { title: "Q2 2026 Report", date: "July 2026", desc: "Reserves, compliance, and operational update." },
              { title: "Q1 2026 Report", date: "April 2026", desc: "First quarter performance and reserve changes." },
              { title: "Q4 2025 Report", date: "January 2026", desc: "Year-end summary and annual audit highlights." },
              { title: "Q3 2025 Report", date: "October 2025", desc: "Quarterly operations and expansion updates." },
            ].map((report) => (
              <div key={report.title} className="card-hover rounded-xl border border-border bg-surface-card p-6">
                <p className="text-sm text-text-muted">{report.date}</p>
                <h3 className="mt-2 text-lg font-semibold text-text-primary">{report.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{report.desc}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                  Download Report
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof of Reserves */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Verify On-Chain</h2>
          <p className="mt-4 text-lg text-text-secondary">
            Our reserve addresses are publicly available. Anyone can verify our holdings
            on-chain at any time.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { label: "Ethereum Reserve Address", address: "0x1234...5678" },
              { label: "Tron Reserve Address", address: "TAbcde...fghij" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-surface-card p-4 text-left">
                <p className="text-sm text-text-muted">{item.label}</p>
                <p className="mt-1 font-mono text-sm text-primary">{item.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
