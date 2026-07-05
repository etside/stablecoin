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
  const [scrolled, setScrolled] = useState(false);
  const [branding, setBranding] = useState<Branding>({ siteName: "StableUSD", logoText: "S", logoColor: "#00a651" });

  useEffect(() => {
    fetch("/api/cms/public")
      .then((res) => res.json())
      .then((data) => {
        if (data.settings?.branding) setBranding(data.settings.branding);
      })
      .catch(() => {});

    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "border-border/80 bg-secondary/95 shadow-lg shadow-black/20 backdrop-blur-xl" : "border-transparent bg-secondary/60 backdrop-blur-md"
        } border-b`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex shrink-0 items-center gap-2" onClick={() => setMobileOpen(false)}>
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg font-bold text-white"
                style={{ backgroundColor: branding.logoColor }}
              >
                {branding.logoText}
              </div>
              <span className="hidden text-lg font-bold text-text-primary sm:block">
                {branding.siteName}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex h-10 items-center rounded-lg px-3 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-light hover:text-text-primary"
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
            <div className="flex items-center gap-2">
              <Link
                href="/products/susd"
                className="hidden h-10 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 lg:flex"
              >
                Get SUSD
              </Link>

              <Link
                href="/admin"
                className="hidden h-10 items-center rounded-lg border border-border px-3 text-xs font-medium text-text-muted transition-colors hover:border-primary hover:text-primary lg:flex"
              >
                Admin
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-surface-light hover:text-text-primary lg:hidden"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Nav - slide-in drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm transform bg-surface transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          <span className="text-lg font-bold text-text-primary">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary hover:bg-surface-light"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="h-[calc(100vh-4rem)] overflow-y-auto px-4 py-6">
          {navLinks.map((link) => (
            <div key={link.label} className="mb-2">
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex h-12 items-center rounded-xl px-4 text-base font-medium text-text-primary transition-colors hover:bg-surface-light"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-4 mt-1 space-y-1 border-l border-border pl-4">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex h-10 items-center rounded-lg px-3 text-sm text-text-muted transition-colors hover:text-text-secondary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-8 space-y-3">
            <Link
              href="/products/susd"
              onClick={() => setMobileOpen(false)}
              className="flex h-12 items-center justify-center rounded-xl bg-primary text-base font-semibold text-white"
            >
              Get SUSD
            </Link>
            <Link
              href="/admin"
              onClick={() => setMobileOpen(false)}
              className="flex h-12 items-center justify-center rounded-xl border border-border text-base font-medium text-text-secondary"
            >
              Admin Panel
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
