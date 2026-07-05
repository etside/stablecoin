"use client";

import { useState, useEffect } from "react";

interface SiteSettings {
  branding: { siteName: string; siteTagline: string; logoText: string; logoColor: string; primaryColor: string };
  hero: { badge: string; title: string; titleHighlight: string; description: string; ctaPrimary: string; ctaPrimaryLink: string; ctaSecondary: string; ctaSecondaryLink: string };
  stats: { label: string; value: string }[];
  cta: { title: string; description: string; buttonPrimary: string; buttonPrimaryLink: string; buttonSecondary: string; buttonSecondaryLink: string };
  footer: { description: string; copyright: string };
  social: { twitter: string; github: string; discord: string; telegram: string };
  seo: { title: string; description: string; keywords: string[] };
}

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [activeTab, setActiveTab] = useState("branding");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("cms_token") : null;
    if (stored) {
      setToken(stored);
      fetchSettings(stored);
    }
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage({ type: "error", text: data.error || "Login failed" });
        return;
      }

      localStorage.setItem("cms_token", data.token);
      setToken(data.token);
      fetchSettings(data.token);
    } catch {
      setMessage({ type: "error", text: "Connection error" });
    } finally {
      setLoading(false);
    }
  }

  async function fetchSettings(authToken: string) {
    try {
      const res = await fetch("/api/cms", {
        headers: { Authorization: `Bearer ${authToken}` },
      });

      if (!res.ok) {
        localStorage.removeItem("cms_token");
        setToken(null);
        return;
      }

      const data = await res.json();
      setSettings(data.settings);
    } catch {
      localStorage.removeItem("cms_token");
      setToken(null);
    }
  }

  async function handleSave() {
    if (!settings || !token) return;
    setSaving(true);
    setMessage(null);

    try {
      const res = await fetch("/api/cms", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(settings),
      });

      if (res.ok) {
        setMessage({ type: "success", text: "Settings saved successfully!" });
      } else {
        setMessage({ type: "error", text: "Failed to save settings" });
      }
    } catch {
      setMessage({ type: "error", text: "Connection error" });
    } finally {
      setSaving(false);
    }
  }

  async function handleReset() {
    if (!token) return;
    if (!confirm("Reset all settings to defaults?")) return;

    try {
      const res = await fetch("/api/cms", {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        const data = await res.json();
        setSettings(data.settings);
        setMessage({ type: "success", text: "Settings reset to defaults" });
      }
    } catch {
      setMessage({ type: "error", text: "Failed to reset settings" });
    }
  }

  function handleLogout() {
    localStorage.removeItem("cms_token");
    setToken(null);
    setSettings(null);
  }

  function update(path: string, value: string) {
    if (!settings) return;
    const keys = path.split(".");
    const newSettings = JSON.parse(JSON.stringify(settings));
    let obj: Record<string, unknown> = newSettings;
    for (let i = 0; i < keys.length - 1; i++) {
      obj = obj[keys[i]] as Record<string, unknown>;
    }
    obj[keys[keys.length - 1]] = value;
    setSettings(newSettings);
  }

  // Login screen
  if (!token || !settings) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-secondary px-4">
        <div className="w-full max-w-md rounded-2xl border border-border bg-surface-card p-8">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-3xl font-bold text-white">
              S
            </div>
            <h1 className="text-2xl font-bold text-text-primary">CMS Admin</h1>
            <p className="mt-2 text-sm text-text-secondary">Sign in to manage your website</p>
          </div>

          {message && (
            <div className="mb-4 rounded-lg bg-danger/10 p-3 text-sm text-danger">{message.text}</div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-text-primary">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-text-primary">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none focus:border-primary"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-primary px-8 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "branding", label: "Branding" },
    { id: "hero", label: "Hero" },
    { id: "stats", label: "Stats" },
    { id: "cta", label: "CTA" },
    { id: "seo", label: "SEO" },
    { id: "social", label: "Social" },
    { id: "footer", label: "Footer" },
  ];

  return (
    <div className="min-h-screen bg-secondary">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-bold text-white">S</div>
            <span className="font-semibold text-text-primary">CMS Admin</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" target="_blank" className="rounded-lg border border-border px-4 py-2 text-sm text-text-secondary hover:text-text-primary">
              View Site
            </a>
            <button onClick={handleLogout} className="rounded-lg px-4 py-2 text-sm text-text-muted hover:text-text-primary">
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-4 sm:py-8">
        {/* Message */}
        {message && (
          <div className={`mb-4 rounded-lg p-3 text-sm sm:mb-6 sm:p-4 ${
            message.type === "success" ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
          }`}>
            {message.text}
          </div>
        )}

        {/* Actions */}
        <div className="mb-4 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-xl font-bold sm:text-2xl">Site Settings</h1>
          <div className="flex gap-2 sm:gap-3">
            <button onClick={handleReset} className="flex-1 rounded-lg border border-border px-3 py-2 text-xs text-text-secondary hover:text-text-primary sm:flex-none sm:px-4 sm:text-sm">
              Reset
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex-1 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 sm:flex-none sm:px-6 sm:text-sm"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-4 -mx-4 overflow-x-auto px-4 sm:mb-6 sm:mx-0 sm:px-0">
          <div className="flex gap-0.5 border-b border-border sm:gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-3 py-2.5 text-xs font-medium transition-colors sm:px-4 sm:py-3 sm:text-sm ${
                  activeTab === tab.id
                    ? "border-b-2 border-primary text-primary"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="rounded-xl border border-border bg-surface-card p-4 sm:rounded-2xl sm:p-6">
          {activeTab === "branding" && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold">Branding Settings</h2>
              <Field label="Site Name" value={settings.branding.siteName} onChange={(v) => update("branding.siteName", v)} />
              <Field label="Site Tagline" value={settings.branding.siteTagline} onChange={(v) => update("branding.siteTagline", v)} />
              <Field label="Logo Text" value={settings.branding.logoText} onChange={(v) => update("branding.logoText", v)} />
              <ColorField label="Logo Color" value={settings.branding.logoColor} onChange={(v) => update("branding.logoColor", v)} />
              <ColorField label="Primary Color" value={settings.branding.primaryColor} onChange={(v) => update("branding.primaryColor", v)} />
            </div>
          )}

          {activeTab === "hero" && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold">Hero Section</h2>
              <Field label="Badge Text" value={settings.hero.badge} onChange={(v) => update("hero.badge", v)} />
              <Field label="Title" value={settings.hero.title} onChange={(v) => update("hero.title", v)} />
              <Field label="Title Highlight" value={settings.hero.titleHighlight} onChange={(v) => update("hero.titleHighlight", v)} />
              <Textarea label="Description" value={settings.hero.description} onChange={(v) => update("hero.description", v)} />
              <Field label="Primary CTA Text" value={settings.hero.ctaPrimary} onChange={(v) => update("hero.ctaPrimary", v)} />
              <Field label="Primary CTA Link" value={settings.hero.ctaPrimaryLink} onChange={(v) => update("hero.ctaPrimaryLink", v)} />
              <Field label="Secondary CTA Text" value={settings.hero.ctaSecondary} onChange={(v) => update("hero.ctaSecondary", v)} />
              <Field label="Secondary CTA Link" value={settings.hero.ctaSecondaryLink} onChange={(v) => update("hero.ctaSecondaryLink", v)} />
            </div>
          )}

          {activeTab === "stats" && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-base font-semibold sm:text-lg">Statistics</h2>
              {settings.stats.map((stat, i) => (
                <div key={i} className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                  <Field label={`Stat ${i + 1} Label`} value={stat.label} onChange={(v) => {
                    const newStats = [...settings.stats];
                    newStats[i] = { ...newStats[i], label: v };
                    setSettings({ ...settings, stats: newStats });
                  }} />
                  <Field label={`Stat ${i + 1} Value`} value={stat.value} onChange={(v) => {
                    const newStats = [...settings.stats];
                    newStats[i] = { ...newStats[i], value: v };
                    setSettings({ ...settings, stats: newStats });
                  }} />
                </div>
              ))}
            </div>
          )}

          {activeTab === "cta" && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold">Call to Action Section</h2>
              <Field label="Title" value={settings.cta.title} onChange={(v) => update("cta.title", v)} />
              <Textarea label="Description" value={settings.cta.description} onChange={(v) => update("cta.description", v)} />
              <Field label="Primary Button Text" value={settings.cta.buttonPrimary} onChange={(v) => update("cta.buttonPrimary", v)} />
              <Field label="Primary Button Link" value={settings.cta.buttonPrimaryLink} onChange={(v) => update("cta.buttonPrimaryLink", v)} />
              <Field label="Secondary Button Text" value={settings.cta.buttonSecondary} onChange={(v) => update("cta.buttonSecondary", v)} />
              <Field label="Secondary Button Link" value={settings.cta.buttonSecondaryLink} onChange={(v) => update("cta.buttonSecondaryLink", v)} />
            </div>
          )}

          {activeTab === "seo" && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold">SEO Settings</h2>
              <Field label="Page Title" value={settings.seo.title} onChange={(v) => update("seo.title", v)} />
              <Textarea label="Meta Description" value={settings.seo.description} onChange={(v) => update("seo.description", v)} />
              <Field label="Keywords (comma-separated)" value={settings.seo.keywords.join(", ")} onChange={(v) => setSettings({ ...settings, seo: { ...settings.seo, keywords: v.split(",").map((k) => k.trim()) } })} />
            </div>
          )}

          {activeTab === "social" && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold">Social Links</h2>
              <Field label="Twitter URL" value={settings.social.twitter} onChange={(v) => update("social.twitter", v)} />
              <Field label="GitHub URL" value={settings.social.github} onChange={(v) => update("social.github", v)} />
              <Field label="Discord URL" value={settings.social.discord} onChange={(v) => update("social.discord", v)} />
              <Field label="Telegram URL" value={settings.social.telegram} onChange={(v) => update("social.telegram", v)} />
            </div>
          )}

          {activeTab === "footer" && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold">Footer Settings</h2>
              <Textarea label="Description" value={settings.footer.description} onChange={(v) => update("footer.description", v)} />
              <Field label="Copyright Text" value={settings.footer.copyright} onChange={(v) => update("footer.copyright", v)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-text-primary">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}

function Textarea({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-text-primary">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}

function ColorField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-text-primary">{label}</label>
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-10 cursor-pointer rounded-lg border border-border"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary outline-none focus:border-primary"
        />
      </div>
    </div>
  );
}
