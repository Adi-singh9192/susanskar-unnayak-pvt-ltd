export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
  highlight: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  iconName: string; // Used to dynamic resolve lucide-react icons
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "Events" | "Campaigns" | "Creators" | "Festivals";
  description: string;
  image: string;
  year: string;
  client: string;
  location?: string;
  stat?: string;
}

export interface CaseStudy {
  id: string;
  project: string;
  category: string;
  client: string;
  image: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl?: string;
  category: "Client" | "Sponsor" | "Media" | "Creator Network" | "Venue";
}

export interface Metric {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface RegionalImpact {
  region: string;
  reach: number; // in thousands
  engagement: number; // percentage
  campaigns: number;
}
