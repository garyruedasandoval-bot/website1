export enum Pillar {
  TALENT_ACCELERATION = "Talent Acceleration & AI Program",
  STRATEGIC_ADVISORY = "Strategic Advisory, Transformation & AI",
  CRYPTO_FINANCE = "Blockchain & FinTech Compliance"
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  topic: string; // Used for feedback on what specific concept they missed
  module: string; // Used to map the missing concept to a specific training module
}

export interface QuizData {
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export interface ServiceItem {
  id: string;
  title: string;
  pillar: Pillar;
  category: string;
  subCategory?: string;
  leadMagnet: string;
  description: string;
  quiz?: QuizData;
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