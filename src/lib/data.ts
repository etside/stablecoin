export const siteConfig = {
  name: "StableUSD",
  ticker: "SUSD",
  description: "The world's most trusted stablecoin. Digital money for the digital age.",
  url: "https://stableusd.io",
};

export const navLinks = [
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "SUSD Stablecoin", href: "/products/susd" },
      { label: "SUSD+", href: "/products/susd-plus" },
      { label: "SUSD Gold", href: "/products/susd-gold" },
      { label: "SUSD Euro", href: "/products/susd-eur" },
    ],
  },
  {
    label: "Transparency",
    href: "/transparency",
    children: [
      { label: "Reserves", href: "/transparency#reserves" },
      { label: "Reports", href: "/transparency#reports" },
      { label: "Attestations", href: "/transparency#attestations" },
    ],
  },
  {
    label: "Developers",
    href: "/developers",
    children: [
      { label: "Documentation", href: "/developers#docs" },
      { label: "API Reference", href: "/developers#api" },
      { label: "SDKs", href: "/developers#sdks" },
      { label: "GitHub", href: "https://github.com/stableusd" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/about/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Press", href: "/about/press" },
    ],
  },
  {
    label: "Support",
    href: "/support",
  },
];

export const heroStats = [
  { label: "Market Cap", value: "$140B+", suffix: "" },
  { label: "Blockchain Networks", value: "15+", suffix: "" },
  { label: "Daily Volume", value: "$80B+", suffix: "" },
  { label: "Holders", value: "45M+", suffix: "" },
];

export const products = [
  {
    name: "SUSD",
    fullName: "StableUSD",
    description: "The world's leading USD-pegged stablecoin. Digital dollars for the internet age.",
    image: "/products/susd.svg",
    href: "/products/susd",
    color: "#00a651",
    marketCap: "$140B",
    chains: ["Ethereum", "Tron", "Solana", "BNB Chain", "Avalanche", "Polygon", "Arbitrum", "Optimism"],
  },
  {
    name: "SUSD+",
    fullName: "StableUSD Plus",
    description: "Yield-bearing stablecoin that earns passive income while maintaining stability.",
    image: "/products/susd-plus.svg",
    href: "/products/susd-plus",
    color: "#6366f1",
    marketCap: "$2.5B",
    chains: ["Ethereum", "Arbitrum", "Base"],
  },
  {
    name: "SUSD Gold",
    fullName: "StableUSD Gold",
    description: "Digital gold backed 1:1 by physical gold reserves. The modern way to own gold.",
    image: "/products/susd-gold.svg",
    href: "/products/susd-gold",
    color: "#d4a017",
    marketCap: "$800M",
    chains: ["Ethereum", "Tron"],
  },
  {
    name: "SUSD EUR",
    fullName: "StableUSD Euro",
    description: "Euro-pegged stablecoin for seamless cross-border European payments.",
    image: "/products/susd-eur.svg",
    href: "/products/susd-eur",
    color: "#003399",
    marketCap: "$500M",
    chains: ["Ethereum", "Polygon"],
  },
];

export const features = [
  {
    icon: "shield",
    title: "Fully Reserved",
    description: "Every SUSD is backed 1:1 by reserves held in cash, cash equivalents, and US Treasury bills.",
  },
  {
    icon: "globe",
    title: "Multi-Chain",
    description: "Available on 15+ blockchain networks. Use SUSD wherever you are, on whatever chain you prefer.",
  },
  {
    icon: "zap",
    title: "Instant Transfers",
    description: "Send money anywhere in the world in seconds, 24/7/365. No banking hours, no delays.",
  },
  {
    icon: "lock",
    title: "Regulatory Compliant",
    description: "Licensed and regulated in multiple jurisdictions. Compliant with global financial standards.",
  },
  {
    icon: "code",
    title: "Developer First",
    description: "Comprehensive APIs, SDKs, and documentation. Build the future of finance with SUSD.",
  },
  {
    icon: "users",
    title: "Trusted by Millions",
    description: "Over 45 million holders worldwide. The most widely used stablecoin in the world.",
  },
];

export const reserveBreakdown = [
  { category: "US Treasury Bills", percentage: 80, amount: "$112B", color: "#00a651" },
  { category: "Overnight Repos", percentage: 10, amount: "$14B", color: "#4ade80" },
  { category: "Money Market Funds", percentage: 7, amount: "$9.8B", color: "#86efac" },
  { category: "Cash & Bank Deposits", percentage: 3, amount: "$4.2B", color: "#bbf7d0" },
];

export const supportedChains = [
  { name: "Ethereum", symbol: "ETH", icon: "/chains/ethereum.svg" },
  { name: "Tron", symbol: "TRX", icon: "/chains/tron.svg" },
  { name: "Solana", symbol: "SOL", icon: "/chains/solana.svg" },
  { name: "BNB Chain", symbol: "BNB", icon: "/chains/bnb.svg" },
  { name: "Avalanche", symbol: "AVAX", icon: "/chains/avalanche.svg" },
  { name: "Polygon", symbol: "MATIC", icon: "/chains/polygon.svg" },
  { name: "Arbitrum", symbol: "ARB", icon: "/chains/arbitrum.svg" },
  { name: "Optimism", symbol: "OP", icon: "/chains/optimism.svg" },
  { name: "Base", symbol: "BASE", icon: "/chains/base.svg" },
  { name: "Cosmos", symbol: "ATOM", icon: "/chains/cosmos.svg" },
  { name: "Near", symbol: "NEAR", icon: "/chains/near.svg" },
  { name: "Celo", symbol: "CELO", icon: "/chains/celo.svg" },
];

export const exchangePartners = [
  { name: "Binance", volume: "$25B+" },
  { name: "Bitget", volume: "$3B+" },
  { name: "OKX", volume: "$8B+" },
  { name: "Bybit", volume: "$5B+" },
  { name: "Coinbase", volume: "$4B+" },
  { name: "Kraken", volume: "$2B+" },
  { name: "KuCoin", volume: "$1.5B+" },
  { name: "Gate.io", volume: "$1B+" },
];

export const blogPosts = [
  {
    title: "SUSD Reaches $140 Billion Market Cap Milestone",
    excerpt: "StableUSD has achieved a new all-time high in market capitalization, reinforcing its position as the world's leading stablecoin.",
    date: "2026-07-01",
    category: "Company News",
    slug: "susd-140b-market-cap",
    readTime: "3 min",
  },
  {
    title: "Expanding to 5 New Blockchain Networks in Q3 2026",
    excerpt: "We're bringing SUSD to more ecosystems than ever before. Here's what's coming next.",
    date: "2026-06-25",
    category: "Product Updates",
    slug: "expanding-5-new-networks",
    readTime: "4 min",
  },
  {
    title: "Q2 2026 Reserve Attestation Report Published",
    excerpt: "Our latest reserve attestation confirms 100% backing of all SUSD tokens in circulation.",
    date: "2026-06-15",
    category: "Transparency",
    slug: "q2-2026-attestation",
    readTime: "5 min",
  },
  {
    title: "Partnership with Major European Banks for SUSD EUR",
    excerpt: "We're working with leading European financial institutions to expand SUSD EUR adoption.",
    date: "2026-06-10",
    category: "Partnerships",
    slug: "european-bank-partnerships",
    readTime: "4 min",
  },
];

export const faqs = [
  {
    question: "What is SUSD?",
    answer: "SUSD (StableUSD) is a USD-pegged stablecoin that maintains a 1:1 value with the US Dollar. Each SUSD token is fully backed by reserves held in cash, cash equivalents, and US Treasury bills.",
  },
  {
    question: "How is SUSD different from other stablecoins?",
    answer: "SUSD is the most widely adopted stablecoin with the largest market cap, supported on 15+ blockchain networks. We publish monthly reserve attestations from independent auditors and maintain full regulatory compliance across multiple jurisdictions.",
  },
  {
    question: "Where can I buy SUSD?",
    answer: "SUSD is available on all major cryptocurrency exchanges including Binance, Coinbase, OKX, Bitget, Bybit, and many more. You can also purchase directly through our website or via decentralized exchanges.",
  },
  {
    question: "Is SUSD safe?",
    answer: "SUSD is backed 1:1 by reserves consisting primarily of US Treasury bills, overnight repos, and money market funds. We publish monthly attestations from independent accounting firms to verify our reserves.",
  },
  {
    question: "Which blockchains support SUSD?",
    answer: "SUSD is available on Ethereum, Tron, Solana, BNB Chain, Avalanche, Polygon, Arbitrum, Optimism, Base, Cosmos, Near, Celo, and more networks being added regularly.",
  },
  {
    question: "How do I redeem SUSD for US Dollars?",
    answer: "Qualified users can redeem SUSD directly for US Dollars through our platform. The process involves KYC verification and typically settles within 1-3 business days.",
  },
];

export const teamMembers = [
  {
    name: "Alexandra Chen",
    role: "Chief Executive Officer",
    bio: "Former VP at Goldman Sachs with 15 years of experience in digital assets and financial technology.",
  },
  {
    name: "Marcus Williams",
    role: "Chief Technology Officer",
    bio: "Blockchain architect who previously led engineering at Coinbase. Expert in distributed systems.",
  },
  {
    name: "Sarah Nakamoto",
    role: "Chief Compliance Officer",
    bio: "Former regulatory counsel at the SEC. Specialist in digital asset regulation and compliance.",
  },
  {
    name: "David Park",
    role: "Chief Financial Officer",
    bio: "20 years in treasury management at JPMorgan. Expert in reserve management and fixed income.",
  },
];

export const footerLinks = {
  Products: [
    { label: "SUSD Stablecoin", href: "/products/susd" },
    { label: "SUSD+", href: "/products/susd-plus" },
    { label: "SUSD Gold", href: "/products/susd-gold" },
    { label: "SUSD Euro", href: "/products/susd-eur" },
  ],
  Resources: [
    { label: "Documentation", href: "/developers" },
    { label: "API Reference", href: "/developers#api" },
    { label: "Brand Kit", href: "/brand" },
    { label: "Blog", href: "/blog" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/about/careers" },
    { label: "Press", href: "/about/press" },
    { label: "Contact", href: "/support" },
  ],
  Legal: [
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Cookie Policy", href: "/legal/cookies" },
    { label: "Compliance", href: "/legal/compliance" },
  ],
};
