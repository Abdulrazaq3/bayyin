export type RiskLevel = 'low' | 'medium' | 'high';

export interface AnalysisResult {
  probability: number;
  riskLevel: RiskLevel;
  message: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}