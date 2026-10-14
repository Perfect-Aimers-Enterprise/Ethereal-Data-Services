// All brand details, networks, bundles and WhatsApp settings live here.
export const BRAND = {
  name: "Ethereal Data Services",
  owner: "Favour Onyinyechi Christopher",
  location: "Port Harcourt, Rivers State, Nigeria",
  whatsappNumber: "2349054572576", // digits only, country code 234, no "+"
  whatsappDisplay: "+234 905 457 2576",
  ownerPhoto: "/images/favour-onyinyechi.jpeg", // replace this file with her real photograph
};

export const NETWORKS = ["MTN", "Airtel", "Glo", "9mobile"] as const;
export type Network = (typeof NETWORKS)[number];

// Edit per network when real availability is known. Prices intentionally omitted.
const DEFAULT_BUNDLES = ["500 MB", "1 GB", "2 GB", "3 GB", "5 GB", "10 GB", "15 GB", "20 GB"];
export const BUNDLES: Record<Network, string[]> = {
  MTN: DEFAULT_BUNDLES,
  Airtel: DEFAULT_BUNDLES,
  Glo: DEFAULT_BUNDLES,
  "9mobile": DEFAULT_BUNDLES,
};

export const waLink = (text?: string) =>
  `https://wa.me/${BRAND.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

/** Accepts 0803..., 803..., 234803..., +234 803... (spaces, dashes, brackets allowed). */
export function isValidNigerianPhone(input: string): boolean {
  const v = input.replace(/[\s\-()]/g, "");
  return /^(?:\+?234|0)[789][01]\d{8}$/.test(v);
}

export function buildMessage(d: {
  name: string;
  phone: string;
  network: string;
  bundle: string;
  note: string;
}) {
  return `Hello ${BRAND.name},

I'd like to request a data bundle.

Full Name: ${d.name.trim()}
Phone Number: ${d.phone.trim()}
Network: ${d.network}
Data Bundle: ${d.bundle}
Additional Note: ${d.note.trim() || "None"}

Please confirm the price and availability. Thank you.`;
}
