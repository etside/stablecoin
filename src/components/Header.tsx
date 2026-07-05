"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navLinks } from "@/lib/data";

interface Branding {
  siteName: string;
  logoText: string;
  logoColor: string;
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [branding, setBranding] = useState<Branding>({ siteName: "StableUSD", logoText: "S", logoColor: "#00a651" });

  useEffect(() => {
    fetch("/api/cms/public")
      .then((res) => res.json())
      .then((data) => {
        if (data.settings?.branding) {
          setBranding(data.settings.branding);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-secondary/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg font-bold text-white"
              style={{ backgroundColor: branding.logoColor }}
            >
              {branding.logoText}
            </div>
            <span className="text-xl font-bold text-text-primary">
              {branding.siteName}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-light hover:text-text-primary"
                >
                  {link.label}
                </Link>

                {link.children && activeDropdown === link.label && (
                  <div className="absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-xl border border-border bg-surface-light p-2 shadow-xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-4 py-2.5 text-sm text-text-secondary transition-colors hover:bg-surface-card hover:text-text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/products/susd"
              className="hidden rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 sm:block"
            >
              Get SUSD
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-surface-light hover:text-text-primary md:hidden"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="border-t border-border py-4 md:hidden">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-light hover:text-text-primary"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 border-l border-border pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-4 py-2 text-sm text-text-muted transition-colors hover:text-text-secondary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 px-4">
              <Link
                href="/products/susd"
                className="block w-full rounded-lg bg-primary py-3 text-center text-sm font-semibold text-white"
              >
                Get SUSD
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
