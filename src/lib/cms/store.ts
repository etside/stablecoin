export interface SiteSettings {
  branding: {
    siteName: string;
    siteTagline: string;
    logoText: string;
    logoColor: string;
    primaryColor: string;
    favicon: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    ctaPrimary: string;
    ctaPrimaryLink: string;
    ctaSecondary: string;
    ctaSecondaryLink: string;
  };
  stats: { label: string; value: string }[];
  products: {
    name: string;
    fullName: string;
    description: string;
    color: string;
    marketCap: string;
    href: string;
    chains: string[];
  }[];
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  cta: {
    title: string;
    description: string;
    buttonPrimary: string;
    buttonPrimaryLink: string;
    buttonSecondary: string;
    buttonSecondaryLink: string;
  };
  footer: {
    description: string;
    copyright: string;
  };
  social: {
    twitter: string;
    github: string;
    discord: string;
    telegram: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

const defaultSettings: SiteSettings = {
  branding: {
    siteName: "StableUSD",
    siteTagline: "Digital Money for the Digital Age",
    logoText: "S",
    logoColor: "#00a651",
    primaryColor: "#00a651",
    favicon: "/favicon.ico",
  },
  hero: {
    badge: "Live on 15+ Networks",
    title: "Digital Money for the",
    titleHighlight: "Digital Age",
    description:
      "The world's most trusted stablecoin. Fully reserved, multi-chain, and regulatory compliant. Send, spend, and save with confidence.",
    ctaPrimary: "Get SUSD",
    ctaPrimaryLink: "/products/susd",
    ctaSecondary: "Read the Docs",
    ctaSecondaryLink: "/developers",
  },
  stats: [
    { label: "Market Cap", value: "$140B+" },
    { label: "Blockchain Networks", value: "15+" },
    { label: "Daily Volume", value: "$80B+" },
    { label: "Holders", value: "45M+" },
  ],
  products: [
    {
      name: "SUSD",
      fullName: "StableUSD",
      description: "The world's leading USD-pegged stablecoin. Digital dollars for the internet age.",
      color: "#00a651",
      marketCap: "$140B",
      href: "/products/susd",
      chains: ["Ethereum", "Tron", "Solana", "BNB Chain", "Avalanche", "Polygon"],
    },
    {
      name: "SUSD+",
      fullName: "StableUSD Plus",
      description: "Yield-bearing stablecoin that earns passive income while maintaining stability.",
      color: "#6366f1",
      marketCap: "$2.5B",
      href: "/products/susd-plus",
      chains: ["Ethereum", "Arbitrum", "Base"],
    },
    {
      name: "SUSD Gold",
      fullName: "StableUSD Gold",
      description: "Digital gold backed 1:1 by physical gold reserves. The modern way to own gold.",
      color: "#d4a017",
      marketCap: "$800M",
      href: "/products/susd-gold",
      chains: ["Ethereum", "Tron"],
    },
    {
      name: "SUSD EUR",
      fullName: "StableUSD Euro",
      description: "Euro-pegged stablecoin for seamless cross-border European payments.",
      color: "#003399",
      marketCap: "$500M",
      href: "/products/susd-eur",
      chains: ["Ethereum", "Polygon"],
    },
  ],
  features: [
    { icon: "shield", title: "Fully Reserved", description: "Every SUSD is backed 1:1 by reserves held in cash, cash equivalents, and US Treasury bills." },
    { icon: "globe", title: "Multi-Chain", description: "Available on 15+ blockchain networks. Use SUSD wherever you are, on whatever chain you prefer." },
    { icon: "zap", title: "Instant Transfers", description: "Send money anywhere in the world in seconds, 24/7/365. No banking hours, no delays." },
    { icon: "lock", title: "Regulatory Compliant", description: "Licensed and regulated in multiple jurisdictions. Compliant with global financial standards." },
    { icon: "code", title: "Developer First", description: "Comprehensive APIs, SDKs, and documentation. Build the future of finance with SUSD." },
    { icon: "users", title: "Trusted by Millions", description: "Over 45 million holders worldwide. The most widely used stablecoin in the world." },
  ],
  cta: {
    title: "Ready to Get Started?",
    description: "Join millions of users who trust StableUSD for their digital dollar needs.",
    buttonPrimary: "Buy SUSD Now",
    buttonPrimaryLink: "/products/susd",
    buttonSecondary: "Contact Sales",
    buttonSecondaryLink: "/support",
  },
  footer: {
    description: "The world's most trusted stablecoin. Digital money for the digital age.",
    copyright: `© ${new Date().getFullYear()} StableUSD. All rights reserved.`,
  },
  social: {
    twitter: "https://twitter.com/stableusd",
    github: "https://github.com/stableusd",
    discord: "https://discord.gg/stableusd",
    telegram: "https://t.me/stableusd",
  },
  seo: {
    title: "StableUSD — Digital Money for the Digital Age",
    description: "The world's most trusted stablecoin. Fully reserved, multi-chain, and regulatory compliant.",
    keywords: ["stablecoin", "SUSD", "digital dollar", "cryptocurrency", "blockchain", "DeFi"],
  },
};

// In-memory store (persists during server runtime)
let siteSettings: SiteSettings = { ...defaultSettings };

export function getSettings(): SiteSettings {
  return siteSettings;
}

export function updateSettings(updates: Partial<SiteSettings>): SiteSettings {
  siteSettings = {
    ...siteSettings,
    ...updates,
    branding: { ...siteSettings.branding, ...updates.branding },
    hero: { ...siteSettings.hero, ...updates.hero },
    cta: { ...siteSettings.cta, ...updates.cta },
    footer: { ...siteSettings.footer, ...updates.footer },
    social: { ...siteSettings.social, ...updates.social },
    seo: { ...siteSettings.seo, ...updates.seo },
  };
  return siteSettings;
}

export function resetSettings(): SiteSettings {
  siteSettings = { ...defaultSettings };
  return siteSettings;
}
