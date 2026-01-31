export enum Pillar {
  TALENT_ACCELERATION = "Talent Acceleration & AI Program",
  STRATEGIC_ADVISORY = "Strategic Advisory, Transformation & AI",
  CRYPTO_FINANCE = "Blockchain & FinTech Compliance"
}

export interface ServiceItem {
  id: string;
  title: string;
  pillar: Pillar;
  category: string;
  subCategory?: string;
  leadMagnet: string;
  description: string;
}

export interface GenerateSyllabusResponse {
  weeks: {
    title: string;
    topics: string[];
  }[];
}

export interface EnrichedServiceContent {
  whyItMatters: string;
  benefits: string[];
  audience: string;
}