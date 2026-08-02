import { Milestone, Service, PortfolioItem, CaseStudy, Testimonial, Partner, Metric, RegionalImpact } from "./types";
import p1Image from "./assets/images/event1_sanamBand.png";
import p2Image from "./assets/images/event2_KartikLive.png";
import p3Image from "./assets/images/event3_Vishal.png";
import p4Image from "./assets/images/event4_Anshuman.png";
import p5Image from "./assets/images/event5_abhishekh.png";
import p6Image from "./assets/images/event6_Triumph.png";

export const milestones: Milestone[] = [
  {
    id: "m1",
    year: "2021",
    title: "The Genesis",
    description: "Susanskar launches in JAIPUR with a core team of youth culture researchers, media specialists, and event planners.",
    highlight: "Initial Launch"
  },
  {
    id: "m2",
    year: "2022",
    title: "The Creator Ecosystem",
    description: "Built and activated a private, vetted network of over 500 rising gen-z creators spanning lifestyle, tech, esports, and audio.",
    highlight: "+500 Creator Hub"
  },
  {
    id: "m3",
    year: "2024",
    title: "Immersive Festival Tech",
    description: "Pioneered interactive projection-mapped stages at the Electric Horizon Music Festival, drawing over 45k youth attendees in a single weekend.",
    highlight: "Stage Innovation"
  },
  {
    id: "m4",
    year: "2025",
    title: "Global Brand Partnerships",
    description: "Secured enterprise multi-activation contracts with premium luxury and automotive leaders looking to speak to the next generation.",
    highlight: "Fortune 100 Clients"
  },
  {
    id: "m5",
    year: "2026",
    title: "Intergalactic Community",
    description: "Opening fully realized virtual-physical hybrid experience spaces in Tokyo, Berlin, and Paris to scale experiential culture globally.",
    highlight: "Market Hegemony"
  }
];

export const services: Service[] = [
  {
    id: "s1",
    title: "Experiential Events",
    description: "We orchestrate multi-sensory physical environments that leave enduring emotional imprints on attendees.",
    details: ["Interactive Tech Integrations", "Large-Scale Scenic Production", "Spatial Sound Design", "Pop-up Architectures"],
    iconName: "Sparkles"
  },
  {
    id: "s2",
    title: "Brand Activations",
    description: "Turning brand strategies into interactive experiences that drive organic social sharing and authentic engagement.",
    details: ["Pop-Up Retails", "Sensory Pod Showcases", "Gamified Brand Journeys", "Augmented Reality Layers"],
    iconName: "Zap"
  },
  {
    id: "s3",
    title: "Music Festivals",
    description: "Managing full lifecycle music productions, curated for modern sub-cultures and audiophiles alike.",
    details: ["Stage Co-Curations", "Hybrid Stream Broadcasts", "Immersive Crowd Activations", "Sponsor Booth Syncs"],
    iconName: "Music"
  },
  {
    id: "s4",
    title: "Influencer Marketing",
    description: "Tapping into vetted creator collectives to build continuous campaigns rather than disjointed transactional posts.",
    details: ["Creator Co-Ideation Labs", "Impact & Conversion Analytics", "Multi-platform Amplification", "Talent Coordination"],
    iconName: "Users"
  },
  {
    id: "s5",
    title: "Community Building",
    description: "We construct self-sustaining micro-digital and local hubs where youth form actual connections around fields of passion.",
    details: ["Exclusive Discord Integrations", "Underground Club Activations", "Niche Merchandising Lines", "Frictionless Sub-forums"],
    iconName: "Heart"
  },
  {
    id: "s6",
    title: "Digital Campaigns",
    description: "High-octane digital experiences, localized memes, and immersive web solutions that translate physical energy online.",
    details: ["Interactive Live Broadcasts", "Viral Concept Development", "Gamified Landing Portals", "Youth Trend Telemetry"],
    iconName: "Globe"
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "SANAM BAND INDIA TOUR",
    category: "Events",
    description: "Stage production, lighting engineering, and exclusive creator lounge experience built for 45k high-energy attendees.",
    image: p1Image,
    year: "2025-2026",
    client: "",
    location: "Jaipur, Mumbai, Hydrabad, Banglore, lucknow",
    stat: "10,000+ Attendees"
  },
  {
    id: "p2",
    title: "Sound Known for EveryOne",
    category: "Events",
    description: "Break the Stage By Performance",
    image: p2Image,
    year: "2026",
    client: "Karthik",
    location: "Hyderabad",
    stat: "5,000+ Attendees"
  },
  {
    id: "p3",
    title: "The SuperHit Tour By Vishal and Sheykhar",
    category: "Festivals",
    description: "Every Beat, A Breath for Nature.",
    image: p3Image,
    year: "2026",
    client: "Vishal and Sheykhar",
    location: "Jaipur, Hyderabad",
    stat: "10,000+ Attendees"
  },
  {
    id: "p4",
    title: "For Wonderfull Show be Present",
    category: "Creators",
    description: "Some goodbyes don’t really feel like endings… just like a soft pause.",
    image: p4Image,
    year: "2026",
    client: "ANSHUMAN PANDEY",
    location: "LUCKNOW",
    stat: "8,000+ Attendees"
  },
  {
    id: "p5",
    title: "I'M THE BEST TOUR BY ABHIJEET BHATTACHARYA",
    category: "Creators",
    description: "Interactive drop activation complete with RFID scanners, customized merchandise, and live synthesizer background beats.",
    image: p5Image,
    year: "2026",
    client: "ABHIJEET BHATTACHARYA",
    location: "DEHRADUN",
    stat: "9,000+ Signups"
  },
  {
    id: "p6",
    title: "TRIUMPH BIKE PROMOTION",
    category: "Campaigns",
    description: "The wait is finally over⏳ for Bikers🔥.",
    image: p6Image,
    year: "2026",
    client: "Rebel Music",
    location: "JAIPUR",
    stat: "GREAT WORKING EXPERIENCE"
  }
];

// export const caseStudies: CaseStudy[] = [
//   {
//     id: "cs1",
//     project: "Porsche Velocity",
//     category: "Experiential Brand Activation",
//     client: "Porsche, Global Marketing",
//     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200",
//     challenge: "Porsche wanted to connect their new flagship Electric Taycan line with a tech-facing younger demographic who viewed performance car brands as traditional and rigid.",
//     strategy: "Create 'Velocity', an interactive architectural pavilion where prospective customers interact with the car using motion sensors, creating personalized audio-visual soundscapes generated by the car's engine diagnostics.",
//     execution: "Developed a custom 3D web-audio synthesizer mapped directly to telemetry data inside the Taycan on a glowing geometric track, amplified by 15 high-profile automotive tech creators in a 3-day livestreamed launch event.",
//     results: [
//       "12,000+ physical test-drives registered on-site",
//       "34.5M organic social video views under #TaycanVelocity",
//       "42% lift in youth brand perception amongst active car buyers",
//       "Over $9M generated in trackable pipeline orders"
//     ]
//   },
//   {
//     id: "cs2",
//     project: "Electric Horizon",
//     category: "Immersive Festival Experience",
//     client: "Elysian Entertainment Group",
//     image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200",
//     challenge: "In a saturated music festival market, Electric Horizon needed a disruptive visual hallmark that would turn passive music consumption into a highly social, collaborative event.",
//     strategy: "We built 'The Loom', an interactive, user-powered projection-mapped centerpiece dome. Fans could control the visual rhythms and pixel mapping styles wirelessly through mobile web-touchscreens while on-site.",
//     execution: "Constructed a custom low-overhead WebSocket visual pipeline connected to a React-based stage controller, allowing up to 10,000 fans simultaneously to vote and draw interactive neon visuals directly onto the stage.",
//     results: [
//       "94% attendee engagement index",
//       "120,000+ photos shared on Instagram and TikTok using the stage UI",
//       "Awwwards-recognized for Crowd-to-Stage UI innovation",
//       "87% repeat attendance ticket pre-orders for the next festival cycle"
//     ]
//   },
//   {
//     id: "cs3",
//     project: "HDFC Bank Hype-House",
//     category: "Influencer Core Campaign",
//     client: "HDFC Bank Europe",
//     image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200",
//     challenge: "HDFC Bank required a highly local, culturally credible product drop strategy for a premium lifestyle sneaker capsule in Paris with zero traditional media spend.",
//     strategy: "Conceal the drop's physical coordinates inside a gamified web map. Coordinates were unlocked progressively through creator clues and interactive live stream milestones across 4 popular streetwear nodes.",
//     execution: "Engaged 30 underground French style creators to drop real-time treasure hunt clues in highly curated Instagram and Discord channels. Successful users received access to a hidden brutalist loft containing custom RFID sneaker customizers.",
//     results: [
//       "250,000+ interactive web maps played and solved",
//       "100% shoe stock sold out in 3.2 seconds upon coordinates reveal",
//       "Reached #1 trending topic in France on X (Twitter)",
//       "Created highly aesthetic, user-generated lookbooks reused in national retail ads"
//     ]
//   }
// ];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priyanka Kumari",
    role: "Director of Brand Innovation",
    company: "BOTTLEHUK",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    content: "Susanskar delivered an engaging campaign that significantly increased our youth audience reach and brand visibility. Their grasp of experiential technology is unmatched.",
    rating: 5
  },
  {
    id: "t2",
    name: "Suraj Singh",
    role: "VP of Lifestyle Products",
    company: "Luxury",
    avatar: "https://images.unsplash.com/photo-1581579438707-fd89eedd074d?auto=format&fit=crop&q=80&w=150",
    content: "What stood out about Susanskar Unnayak was their blend of extreme creative vision and analytical precision. They don't just throw events, they build massive community engagement loops.",
    rating: 5
  },
  {
    id: "t3",
    name: "Vineet Agrawal",
    role: "Lead Event Curator",
    company: "Media",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    content: "Collaborating with Susanskar Unnayak has redefined our physical stages. The crowd interaction was so seamless that customers became active elements of the performance.",
    rating: 5
  }
];

export const partners: Partner[] = [
  { id: "cs_p1", name: "HDFC Bank", category: "Sponsor" },
  { id: "cs_p2", name: "Campa", category: "Sponsor" },
  { id: "cs_p3", name: "District", category: "Creator Network" },
  { id: "cs_p4", name: "McDowell's Soda", category: "Sponsor" },
  { id: "cs_p5", name: "Trends", category: "Sponsor" },
  { id: "cs_p6", name: "BookMyShow", category: "Creator Network" },
  { id: "cs_p7", name: "Red FM", category: "Media" },
  { id: "cs_p8", name: "JECC Jaipur", category: "Venue" }
];

export const impactStats: Metric[] = [
  {
    id: "stat1",
    value: 50,
    suffix: "+",
    label: "Campaigns Delivered",
    description: "Multi-market activations from concept code to final stadium gates"
  },
  {
    id: "stat2",
    value: 100000,
    suffix: "+",
    label: "Attendees Engaged",
    description: "Secured physical attendance worldwide in immersive premium hubs"
  },
  {
    id: "stat3",
    value: 500,
    suffix: "+",
    label: "Creator Collaborators",
    description: "Vetted digital tastemakers and experiential performance advocates"
  },
  {
    id: "stat4",
    value: 10,
    suffix: "M+",
    label: "Digital Impressions",
    description: "Organic social impressions generated entirely through custom user shares"
  }
];

export const regionalImpact: RegionalImpact[] = [
  { region: "MUMBAI", reach: 750, engagement: 37.4, campaigns: 45 },
  { region: "DELHI", reach: 580, engagement: 34.1, campaigns: 35 },
  { region: "PUNE", reach: 345, engagement: 30.5, campaigns: 29 },
  { region: "BENGALURU", reach: 490, engagement: 35.8, campaigns: 37 }
];

export const processSteps = [
  {
    step: "01",
    title: "Strategy",
    description: "Youth trend analysis, demographic mapping, and concept ideation.",
    details: "We start by analyzing current youth trends, gaming sub-cultures, and visual cues to craft a highly personalized concept strategy."
  },
  {
    step: "02",
    title: "Execution",
    description: "Physical build, spatial design, and immersive interactive software.",
    details: "Our spatial architects and tech engineers develop custom environments, staging, sensor pipelines, and visual software to bring the design to life."
  },
  {
    step: "03",
    title: "Engagement",
    description: "Powering creator activations, live digital loops, and crowd participation.",
    details: "We activate our massive creator network and launch real-time mobile crowd interaction tools that turn attendees from viewers to active players."
  },
  {
    step: "04",
    title: "Results",
    description: "Data-driven diagnostics, pipelines, and trackable engagement metrics.",
    details: "Every touchpoint, code scan, and user-led share is measured securely, providing deep audience diagnostics and trackable business results."
  }
];

export const chooseUsPoints = [
  {
    title: "Youth-Focused Strategy",
    description: "We don't speculate on youth culture; we actively live it. Our researchers decode gaming sub-cultures, streetwear trends, and sonic movements daily."
  },
  {
    title: "End-to-End Execution",
    description: "No disjointed third-parties. We handle concepts, spatial interior design, custom structural staging, WebGL software engineering, and technical logistics under one single banner."
  },
  {
    title: "Authentic Creator Partnerships",
    description: "We bypass standard agency middle-men. Our core roster consists of over 500 hand-picked creative catalysts who actively co-create rather than copy-paste ads."
  },
  {
    title: "Data-Driven Marketing",
    description: "Every visual asset we launch has built-in digital hooks. We track physical actions, micro-scans, and live user clicks to deliver complete transparent diagnostics."
  },
  {
    title: "Scalable Event Management",
    description: "From intimate underground streetwear gatherings in Berlin to stadium-sized projection arenas in Miami, our infrastructure scales with flawless safety protocols."
  }
];
