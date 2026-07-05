import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Kit",
  description: "StableUSD brand assets, logos, and usage guidelines.",
};

export default function BrandPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">Brand Kit</h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              Official StableUSD logos, colors, and brand guidelines. Use these assets
              when referencing StableUSD in your content.
            </p>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">Logos</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Primary Logo", desc: "Use on dark backgrounds", bg: "bg-surface-card" },
              { name: "Light Logo", desc: "Use on light backgrounds", bg: "bg-white" },
              { name: "Icon Only", desc: "For small spaces and favicons", bg: "bg-surface-card" },
            ].map((logo) => (
              <div key={logo.name} className={`rounded-2xl border border-border ${logo.bg} p-12 text-center`}>
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-primary text-4xl font-bold text-white">
                  S
                </div>
                <h3 className="mt-6 font-semibold text-text-primary">{logo.name}</h3>
                <p className="mt-2 text-sm text-text-muted">{logo.desc}</p>
                <button className="mt-4 rounded-lg border border-border px-4 py-2 text-sm text-text-secondary hover:border-primary hover:text-primary">
                  Download SVG
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">Brand Colors</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              { name: "Primary Green", hex: "#00a651", text: "text-white" },
              { name: "Dark Green", hex: "#008c44", text: "text-white" },
              { name: "Light Green", hex: "#4ade80", text: "text-black" },
              { name: "Accent", hex: "#26a17b", text: "text-white" },
            ].map((color) => (
              <div key={color.name} className="rounded-2xl border border-border bg-surface-card overflow-hidden">
                <div className={`h-32 flex items-end p-4 ${color.text}`} style={{ backgroundColor: color.hex }}>
                  <span className="text-sm font-mono font-bold">{color.hex}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-text-primary">{color.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">Usage Guidelines</h2>
          <div className="space-y-6">
            {[
              { title: "Do", items: ["Use the official logos provided here", "Maintain clear space around the logo", "Use brand colors as specified", "Link to stableusd.io when possible"] },
              { title: "Don't", items: ["Alter logo colors or proportions", "Use old or unofficial logos", "Place logo on busy backgrounds", "Use brand assets for misleading purposes"] },
            ].map((section) => (
              <div key={section.title} className="rounded-xl border border-border bg-surface-card p-6">
                <h3 className="text-lg font-semibold text-text-primary">{section.title}</h3>
                <ul className="mt-4 space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg className={`mt-0.5 h-4 w-4 shrink-0 ${section.title === "Do" ? "text-success" : "text-danger"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {section.title === "Do" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        )}
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
