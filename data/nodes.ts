export type FlowType = "customers" | "revenue" | "products" | "content" | "ip";

export type EntityStatus = "revenue" | "building" | "issue" | "core";

export interface Flow {
  to: string;
  description: string;
  type: FlowType;
}

export interface EntityNode {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  status: EntityStatus;
  description: string;
  metrics?: Record<string, string>;
  gives: Flow[];
  receives: Flow[];
  diagnostic: string;
}

export const FLOW_COLORS: Record<FlowType, string> = {
  customers: "#2563EB",
  revenue: "#059669",
  products: "#D97706",
  content: "#DB2777",
  ip: "#6D5DD3",
};

export const FLOW_LABELS: Record<FlowType, string> = {
  customers: "Customers / Leads",
  revenue: "Revenue",
  products: "Products / Tools",
  content: "Content / Case Studies",
  ip: "IP / Expertise",
};

export const STATUS_COLORS: Record<EntityStatus, string> = {
  revenue: "#059669",
  building: "#D97706",
  issue: "#DC2626",
  core: "#6D5DD3",
};

export const nodes: Record<string, EntityNode> = {
  center: {
    id: "center",
    name: "The Entrepreneur's Journey\u2122",
    subtitle: "Asset Factory",
    tag: "Core IP",
    status: "core",
    description:
      "The methodology for turning employees into entrepreneurs. Every journey we design \u2014 vending, AI consulting, future verticals \u2014 reuses this core IP. The methodology appreciates with every cohort, every data point, every success story.",
    gives: [
      { to: "vp", description: "The original journey \u2014 vending business coaching", type: "ip" },
      { to: "aoc", description: "The second journey \u2014 AI consulting business", type: "ip" },
      { to: "inc", description: "The template for designing every future journey", type: "ip" },
    ],
    receives: [
      { to: "vp", description: "Proven methodology, success data, refined curriculum", type: "ip" },
      { to: "aw", description: "AI-powered delivery systems", type: "products" },
      { to: "am", description: "Marketing playbooks that scale each new journey", type: "ip" },
      { to: "btc", description: "Sales playbooks that close each new journey", type: "ip" },
      { to: "inc", description: "New journey designs ready for launch", type: "ip" },
    ],
    diagnostic:
      "This is the Disney castle. The methodology for turning employees into entrepreneurs is the reusable IP at the center. Every entity either creates a journey, sells a journey, fulfills a journey, or builds tools for journeys. The 10-year vision ($500M, 100+ vehicles) is about launching more journeys \u2014 not growing any single one.",
  },

  vp: {
    id: "vp",
    name: "VendingPreneurs",
    subtitle: "Business Coaching",
    tag: "$12M ARR",
    status: "revenue",
    description:
      "Teaches people how to launch a vending business \u2014 find locations, buy equipment, stock machines, build routes. 1,800 members. $6\u201312K one-time enrollment.",
    metrics: { members: "1,800", price: "$6\u201312K", arr: "$12M (combined)" },
    gives: [
      { to: "ma", description: "Trained operators who become MA subcontractors", type: "customers" },
      { to: "vh", description: "1,800 members as captive marketplace audience", type: "customers" },
      { to: "btc", description: "Commission revenue from closed coaching deals", type: "revenue" },
      { to: "am", description: "Case studies + content from member success stories", type: "content" },
      { to: "aw", description: "Real-world testing ground for AI products before external sale", type: "ip" },
      { to: "center", description: "Proven journey template that Incubator clones for new offers", type: "ip" },
    ],
    receives: [
      { to: "btc", description: "Closed sales \u2014 new members joining VP", type: "customers" },
      { to: "ma", description: "National location deals that make VP offer more compelling", type: "ip" },
      { to: "vh", description: "Products, equipment, routes that keep members engaged", type: "products" },
      { to: "am", description: "Leads from YouTube, SEO, paid media, organic social", type: "customers" },
      { to: "aw", description: "AI tools built for the community (future VH products)", type: "products" },
    ],
    diagnostic:
      "VP is the primary revenue engine and the proof of concept for every other journey the holdco launches. Every new member simultaneously feeds MA, VH, and BTC.",
  },

  ma: {
    id: "ma",
    name: "Modern Amenities",
    subtitle: "National Deal Machine",
    tag: "Rev Share",
    status: "revenue",
    description:
      "Secures national MSA deals with property groups (hotels, hospitals, offices). Leverages the VP community as subcontractors. Takes a 3% rev share cut on every placed location.",
    metrics: { locations: "1,000+", model: "3% rev share" },
    gives: [
      { to: "vp", description: "National location deals that make VP offer irresistible", type: "ip" },
      { to: "vh", description: "Equipment/product demand from placed locations", type: "customers" },
      { to: "center", description: "MSA relationships as appreciating assets", type: "ip" },
    ],
    receives: [
      { to: "vp", description: "Trained operators who handle fulfillment as subcontractors", type: "customers" },
      { to: "am", description: "Leads from LinkedIn, cold email, outbound, ads", type: "customers" },
    ],
    diagnostic:
      "MA is the moat. National MSA relationships are immortal assets (Rule 7). The VP\u2192MA subcontractor model is the structural template being replicated with AI Operator Collective\u2192AIMS.",
  },

  vh: {
    id: "vh",
    name: "VendHub",
    subtitle: "Marketplace & Software",
    tag: "Growing",
    status: "building",
    description:
      "Where the VP community buys everything they need: products, vending equipment, locations and routes for sale, and marketing/lead gen products from AIMS.",
    metrics: { subscribers: "100 active", price: "$1,200/yr", opportunity: "5.5% \u2192 40%+ target" },
    gives: [
      { to: "vp", description: "Products, equipment, and routes that retain VP members", type: "products" },
      { to: "aw", description: "Distribution channel for AI-built products", type: "customers" },
      { to: "center", description: "Recurring revenue engine + marketplace data", type: "revenue" },
    ],
    receives: [
      { to: "vp", description: "Captive audience of 1,800 vending operators", type: "customers" },
      { to: "aw", description: "AI products and marketing tools to sell", type: "products" },
      { to: "am", description: "Lead gen products built by AIMS-Marketing", type: "products" },
    ],
    diagnostic:
      "\u26A0\uFE0F CRITICAL GAP \u2014 100 out of 1,800 VP members is a 5.5% attach rate. Target is 40\u201350%+. At $1,200/yr, going from 100\u2192900 subscribers is $960K ARR sitting on the table with zero new customer acquisition. This is the single highest-ROI fix in the entire map.",
  },

  btc: {
    id: "btc",
    name: "Breakthrough Closing",
    subtitle: "Sales Engine",
    tag: "Shared Service",
    status: "building",
    description:
      "Sales operations org that closes coaching offers. Routes leads to the right offer. Transitioning from internal cost center to revenue-generating sales engine.",
    metrics: { model: "20% of closed deals", pipeline: "2 new external offers" },
    gives: [
      { to: "vp", description: "Closed deals \u2014 new VP members", type: "customers" },
      { to: "inc", description: "Sales capacity for any new coaching offer", type: "ip" },
      { to: "aoc", description: "Sales capacity for AI Operator enrollment", type: "ip" },
      { to: "center", description: "Revenue from closing other companies' offers (emerging)", type: "revenue" },
    ],
    receives: [
      { to: "vp", description: "Commission revenue from VP deal closes", type: "revenue" },
      { to: "inc", description: "New offers to sell (higher margin, own revenue)", type: "products" },
      { to: "am", description: "Marketing-qualified leads for all offers", type: "customers" },
    ],
    diagnostic:
      "BTC is at an inflection point. Currently a cost center (VP pays commissions). The 2 new external offers this quarter are the pivot \u2014 if BTC starts closing for other coaching communities, it becomes a standalone revenue engine.",
  },

  am: {
    id: "am",
    name: "AIMS Marketing",
    subtitle: "Lead Factory",
    tag: "Pre-revenue",
    status: "building",
    description:
      "Shared marketing service generating leads for VP, MA, and MedPro. The AI marketing systems built here become products sold to external B2B companies.",
    gives: [
      { to: "vp", description: "Leads from YouTube, SEO, paid media, organic social", type: "customers" },
      { to: "ma", description: "Leads from LinkedIn, cold email, outbound, ads", type: "customers" },
      { to: "mp", description: "Marketing services at consulting rates", type: "products" },
      { to: "center", description: "Proven marketing systems that become AIMS products", type: "ip" },
    ],
    receives: [
      { to: "aw", description: "AI marketing systems (content engines, DM agents, automation)", type: "products" },
      { to: "vp", description: "Success stories and raw content material", type: "content" },
    ],
    diagnostic:
      "AM is Rule 6 in action: internal marketing capability \u2192 battle-tested systems \u2192 productized for external B2B sale. The LinkedIn engine, social DM agents, AI content systems, and ads tools all start here.",
  },

  aw: {
    id: "aw",
    name: "AIMS WildDucks",
    subtitle: "AI Innovation & R&D",
    tag: "Pre-revenue",
    status: "building",
    description:
      "AI Innovation R&D company. Builds AI products and services for internal companies as testing ground, then productizes and sells to external YPO-style companies.",
    metrics: { future: "$20K+ engagements, MRR products" },
    gives: [
      { to: "vh", description: "AI products for the VendHub marketplace", type: "products" },
      { to: "am", description: "Marketing automation systems and AI tools", type: "products" },
      { to: "aoc", description: "AI products that operators resell to local businesses", type: "products" },
      { to: "mp", description: "AI solutions at consulting rates", type: "products" },
      { to: "inc", description: "Technical capabilities for new offer designs", type: "ip" },
      { to: "center", description: "Productized IP \u2014 the compound asset", type: "ip" },
    ],
    receives: [
      { to: "vp", description: "Real-world testing ground with 1,800 operators", type: "ip" },
      { to: "mp", description: "Consulting revenue (current primary external income)", type: "revenue" },
      { to: "aoc", description: "Revenue from products operators sell + case studies", type: "revenue" },
    ],
    diagnostic:
      "WildDucks is the capability-to-product engine (Rule 6). Everything built internally becomes a product sold externally. The AI Operator model replicates VP\u2192MA for the AI consulting space.",
  },

  inc: {
    id: "inc",
    name: "AIMS Incubator",
    subtitle: "New Offer Factory",
    tag: "Pre-revenue",
    status: "building",
    description:
      "Leverages the holdco's marketing, coaching, sales, and AI knowledge to design new coaching journeys. When fully functioning, they become standalone P&Ls.",
    gives: [
      { to: "btc", description: "New coaching offers for BTC to close", type: "products" },
      { to: "aoc", description: "Designed the AI Operator Collective offer", type: "ip" },
      { to: "center", description: "New journeys that become standalone P&Ls", type: "ip" },
    ],
    receives: [
      { to: "btc", description: "Market signal \u2014 what leads want that VP doesn't offer", type: "ip" },
      { to: "aw", description: "AI/tech capabilities to embed in new offers", type: "products" },
      { to: "am", description: "Marketing and positioning expertise", type: "ip" },
    ],
    diagnostic:
      "The Incubator is the 10-year vision multiplier. Every successful journey it designs becomes its own P&L, feeding BTC commission revenue and creating new subcontractor pools. Target: 100+ business vehicles by 2035.",
  },

  aoc: {
    id: "aoc",
    name: "AI Operator Collective",
    subtitle: "The Next VP",
    tag: "In Build",
    status: "building",
    description:
      "\"Launch your own AI consulting business\" coaching offer. Graduates become subcontractors for AIMS \u2014 mirroring the VP\u2192MA model exactly.",
    gives: [
      { to: "aw", description: "Revenue from AI products sold + field case studies", type: "revenue" },
      { to: "center", description: "AI consulting subcontractor pool (mirrors VP\u2192MA model)", type: "customers" },
    ],
    receives: [
      { to: "btc", description: "Enrolled members (leads that didn't close on VP)", type: "customers" },
      { to: "aw", description: "AI products and solutions to resell", type: "products" },
      { to: "inc", description: "Offer design, curriculum structure, launch strategy", type: "ip" },
    ],
    diagnostic:
      "AOC is the proof that the VP\u2192MA model is replicable. If graduates become AIMS subcontractors the same way VP members become MA subcontractors, the Entrepreneurial Disneyland thesis is validated \u2014 and the Incubator can stamp out journey after journey.",
  },

  mp: {
    id: "mp",
    name: "MedPro",
    subtitle: "Medical Waste",
    tag: "One-way",
    status: "issue",
    description:
      "Medical waste company owned by a board member. Pulls shared marketing from AIMS-Marketing and AI innovation from AIMS-WildDucks at consulting rates.",
    gives: [
      { to: "aw", description: "Consulting revenue for AIMS", type: "revenue" },
    ],
    receives: [
      { to: "am", description: "Marketing shared services", type: "products" },
      { to: "aw", description: "AI innovation and problem solving", type: "products" },
    ],
    diagnostic:
      "\u26A0\uFE0F MedPro is a one-directional relationship. It pulls AIMS resources and pays consulting rates, but sends nothing back \u2014 no customers, no content, no IP. The Disney test: \"If I remove MedPro, does anything else get weaker?\" Currently no. Evolution path: MedPro becomes a case study factory for AIMS external sales, or its vertical expertise informs a future Incubator journey.",
  },
};

// Helper to get all connections for a given node
export function getConnections(nodeId: string) {
  const node = nodes[nodeId];
  if (!node) return { gives: [], receives: [] };
  return {
    gives: node.gives,
    receives: node.receives,
  };
}

// Helper to get all node IDs connected to a given node
export function getConnectedNodeIds(nodeId: string): Set<string> {
  const node = nodes[nodeId];
  if (!node) return new Set();
  const connected = new Set<string>();
  node.gives.forEach((f) => connected.add(f.to));
  node.receives.forEach((f) => connected.add(f.to));
  return connected;
}
