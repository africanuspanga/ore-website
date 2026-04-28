export interface Program {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  challenge: string;
  solution: string;
  howItWorks?: string[];
  activities?: string[];
  impact?: string[];
  whatWeDo?: string;
  whatWeSolve?: string[];
  whyGoats?: string[];
  beneficiaries?: string;
  healthSafety?: string[];
  repaymentSystem?: string[];
  steps?: string[];
  successFactors?: string[];
  roles?: { stakeholder: string; responsibility: string }[];
  bankManagement?: string;
  keyTakeaways?: string[];
  whyItMatters?: string | string[];
  approach?: string;
  approachSteps?: string[];
  features?: string[];
  transformations?: string[];
  toolkit?: { title: string; items: string[] }[];
  genderEquality?: string[];
  keyFacts?: string[];
  focus?: { title: string; items: string[] }[];
  implementation?: { title: string; content: string }[];
  expectedOutcomes?: string[];
  adoptionNumbers?: string[];
  quote?: string;
}

export const programs: Program[] = [
  {
    slug: "mti-wangu-uhai-wangu",
    title: "MTI WANGU UHAI WANGU",
    subtitle: "My Tree, My Life",
    description:
      "A people-powered environmental restoration movement that makes tree planting a symbol of resilience, converging environmental restoration, economic empowerment, and social progress in rural communities.",
    image: "/what-we-do/mti-wangu.jpg",
    badge: "Environment",
    challenge:
      "Deforestation and tree loss, limited community engagement in conservation, and underleveraging tree planting for economic growth.",
    solution:
      "A movement that makes tree planting a symbol of resilience, converging environmental restoration, economic empowerment, and social progress in rural communities.",
    howItWorks: [
      "Engaging Locals: Holding meetings with communities, institutions (churches, schools, hospitals) for goal setting; identifying local champions and consulting farmers and elders on suitable trees.",
      "Linking Benefits: Showing how trees directly enhance individual lives ignites conservation potential and merges self-interest with environmental stewardship.",
      "Leveraging MSHIKAMANO Groups: Tapping into existing group cohesion to champion nursery establishment and tree planting campaigns.",
    ],
    activities: [
      "Community Sensitization: Educating on benefits and importance of tree planting, encouraging active participation and ownership.",
      "Tree Distribution & Planting: Providing seedlings and partnering with local leaders, churches, schools, and hospitals for planting campaigns.",
      "Capacity Building: Enhancing skills and knowledge to effectively plan, implement, and sustain tree planting efforts.",
      "Community Tree Nurseries: Setting up local nurseries managed by communities to produce seedlings.",
      "Monitoring & Support: Tracking tree growth and resolving challenges.",
    ],
    impact: [
      "Restores degraded land",
      "Boosts soil health and water retention",
      "Provides fruits, timber, and bee forage",
      "Creates income streams",
      "Increases forest cover and biodiversity",
      "Improves climate resilience",
    ],
    quote: "Planting a tree, planting futures.",
  },
  {
    slug: "sustainable-beekeeping",
    title: "Sustainable Beekeeping Project",
    subtitle: "Protecting Pollinators, Empowering Communities",
    description:
      "Empowering rural communities to adopt sustainable beekeeping practices that conserve forests, promote reforestation, and support local livelihoods.",
    image: "/what-we-do/bees.jpg",
    badge: "Livelihoods",
    challenge:
      "Deforestation, habitat loss, and declining pollinator populations threaten ecosystem balance, biodiversity, food security, and livelihoods.",
    solution:
      "Empowering rural communities to adopt sustainable beekeeping practices that conserve forests, promote reforestation, and support local livelihoods.",
    whatWeDo:
      "We empower rural communities through training, equipment, and market access — promoting environmental conservation and income generation.",
    whatWeSolve: [
      "Habitat loss and biodiversity decline",
      "Limited access to sustainable livelihoods",
      "Declining pollinator populations",
    ],
    activities: [
      "Training communities in beekeeping and honey production",
      "Establishing community-led beekeeping groups and cooperatives",
      "Promoting reforestation and habitat restoration with bee-friendly plants",
      "Supporting honey production, processing, and marketing",
      "Monitoring bee populations and ecosystems",
    ],
    impact: [
      "Increased forest cover and biodiversity",
      "Improved income for beekeepers",
      "Empowered community-led conservation efforts",
    ],
  },
  {
    slug: "mkombozi-goat-bank",
    title: "MKOMBOZI Goat Bank",
    subtitle: "A Cyclical, Self-Sustaining Livestock Credit System",
    description:
      "A community-based scheme managing a reserve of goats, extending them to members for breeding, and returning offspring to the bank to pass on to another member.",
    image: "/what-we-do/goats.jpg",
    badge: "Livestock",
    challenge:
      "Smallholder farmers' overdependence on crop farming exposes them to climate shocks, price volatility, and income seasonality — with no buffer during planting-to-harvest gaps.",
    solution:
      "A community-based scheme managing a reserve of goats, extending them to members for breeding, and returning offspring to the 'bank' to pass on to another member — building a supportive, sustainable network for vulnerable farmers.",
    whyGoats: [
      "Low Input Requirements: Graze on natural vegetation; less dependent on expensive feeds.",
      "Productivity Efficiency: High reproductive rates — 2-3 kids annually with short gestation (145–150 days).",
      "Adaptability: Well-suited for harsh climates and challenging terrains.",
      "Income Generation: 'Walking bank accounts' — regular income and emergency funds.",
      "Women Empowerment: Manageable entry-point livestock balancing household duties.",
      "Organic Fertilizer: Manure enhances soil fertility and crop yields.",
      "Market Ready: Increasing demand driven by population growth and urbanization.",
      "Cultural Preservation: Deeply rooted in community heritage and social events.",
    ],
    beneficiaries:
      "90% are MSHIKAMANO Group members. Extended priority to women-headed households, people with disabilities, orphans, and elderly individuals.",
    healthSafety: [
      "Veterinary services: regular check-ups and vaccination",
      "Nutrition support: quality feed and grazing guidance",
      "Housing and hygiene: proper shelter and sanitation",
      "Disease prevention: biosecurity measures and health monitoring",
      "Training: goat health, breeding, and management",
    ],
    repaymentSystem: [
      "Pass-on System: Beneficiary keeps the original goat, returns the first female offspring.",
      "Shared Risk: Bank and beneficiary share losses from unprecedented factors.",
      "Community Oversight: Group ensures repayment accountability.",
    ],
    steps: [
      "Needs assessment: Identify group needs and potential beneficiaries",
      "Goal setting: Define objectives (income resilience, investment boost)",
      "Partnerships: Engage grassroots leaders, local organizations, MSHIKAMANO leaders",
      "Goat selection (Creation of Reserve): Choose suitable, healthy goats",
      "Beneficiary selection: Identify initial recipients",
      "Training: Cover goat care, health, market access, management, repayment terms",
      "Goat transfer: Distribute to initial beneficiaries",
      "Monitoring: Regular follow-ups on goat health and beneficiary progress",
      "Repayments and next cycle: Collect offspring for the next cycle",
      "Evaluation: Assess impact, capture lessons, adjust strategies",
    ],
    successFactors: [
      "Strong partnership with local stakeholders",
      "Effective training and support for beneficiaries",
      "Linkage to MSHIKAMANO groups for management, oversight, and accountability",
      "Robust goat health and breeding programs",
      "Market linkages",
      "Regular monitoring and mentorship",
    ],
    roles: [
      { stakeholder: "Beneficiaries", responsibility: "Participate in training, manage goats, contribute to group activities" },
      { stakeholder: "Goat Bank Management Committee", responsibility: "Oversee operations, manage the bank, ensure transparency" },
      { stakeholder: "ORE", responsibility: "Provide technical support, training, and resources" },
      { stakeholder: "Local Government", responsibility: "Offer extension services, support policy framework" },
      { stakeholder: "Veterinary Service Providers", responsibility: "Provide animal health services (vaccination, deworming, castration)" },
      { stakeholder: "Market Actors", responsibility: "Buy goats ensuring market access" },
      { stakeholder: "Community Leaders", responsibility: "Mobilize community and support program implementation" },
    ],
    bankManagement:
      "Governance is decentralized and participatory. The Bank Management Committee (elected by MSHIKAMANO members) oversees daily operations. Group members participate in decision-making. Regular meetings review progress, discuss challenges, and ensure sustainability.",
    keyTakeaways: [
      "Building on existing social structures saves costs and boosts adoption.",
      "Community-led initiatives drive ownership and sustainability.",
      "Rural self-governed groupings can manage and govern resources.",
      "Goat rearing is a viable livelihood option for rural communities.",
      "Training and capacity building are essential for impact, scalability, and sustainability.",
      "Partnership with local government amplifies impact.",
      "Flexibility and adaptability are key in project implementation.",
      "Local solutions to feed and health challenges are most effective.",
    ],
  },
  {
    slug: "mshikamano-groups",
    title: "MSHIKAMANO GROUPS",
    subtitle: "Solidarity in Action",
    description:
      "Self-sustaining financial platforms where community members pool resources, support each other financially and socially, and foster unity and collective empowerment.",
    image: "/what-we-do/community.jpg",
    badge: "Finance",
    challenge:
      "Rural communities face limited access to credit, savings, and insurance due to lack of collateral, limited financial literacy, and distant formal institutions — trapping them in poverty, high-interest loans, and vulnerability to shocks.",
    solution:
      "Self-sustaining financial platforms where community members pool resources, support each other financially and socially, and foster unity and collective empowerment.",
    whyItMatters:
      "MSHIKAMANO Groups put financial power in the hands of the ultra-poor, last-mile communities, and marginalized groups — unchaining rural communities from poverty through economic resilience and solidarity.",
    approach:
      "We facilitate, guide, and connect — building local capacity, fostering community-led solutions, and providing tailored support.",
    approachSteps: [
      "Mobilization: Identifying and engaging communities, forming groups, raising awareness.",
      "Training: Equipping members with skills on savings, loans, governance, and financial management.",
      "Group Formation: Supporting establishment of structures, roles, and operating rules.",
      "Capacity Building: Ongoing training, monitoring, and support for leadership and management.",
      "Linkages: Facilitating connections to formal financial services, markets, and local government schemes.",
      "Monitoring: Tracking progress, offering feedback, and addressing challenges.",
      "Sustainability Planning: Supporting long-term plans for self-reliance, including transition to Cooperatives, Associations, or Federations.",
    ],
    features: [
      "Community-led: Managed and owned by members",
      "Saving-driven: Regular savings building a fund for loans and collective security",
      "Flexible Loans: Collateral-free, reasonable rates, tailored repayment terms",
      "Solidarity & Support: Social cohesion and mutual aid",
      "Financial Literacy: Training empowers effective financial management",
      "Autonomous: Minimal external dependency",
      "Scalable & Adaptable: Fits community needs and can expand",
      "Low Operational Costs: Volunteer leadership and local meetings",
      "Regular Meetings: Accountability, transparency, and social bonding",
      "Share-out Cycles: Periodic distribution of profits or surplus funds",
      "Women & Youth Focus: Enhances financial autonomy and social standing",
      "Graduation Pathways: Transition to larger ventures like Cooperatives or Associations",
    ],
    transformations: [
      "Opportunities: Turning small ideas into viable businesses",
      "Livelihoods: Breaking cycles of poverty",
      "Communities: Sparking local economic growth, resilience, and jobs",
      "Mindsets: Empowering long-term investment and bigger dreams",
      "Social Norms: Women lead groups, manage finances, and make decisions; members build solidarity",
    ],
    toolkit: [
      {
        title: "Group Formation",
        items: [
          "Definition of group goals and objectives",
          "Election of leaders and committees",
          "Establishment of financial terms (savings, loans, others)",
        ],
      },
      {
        title: "Financial Management",
        items: [
          "Savings mobilization",
          "Loan management",
          "Financial planning, recording, and reporting",
        ],
      },
      {
        title: "Leadership & Governance",
        items: [
          "Roles and responsibilities",
          "Meeting management",
          "Transparency and accountability",
        ],
      },
      {
        title: "Conflict & Group Dynamism Management",
        items: [
          "Conflict identification",
          "Conflict resolution procedures",
          "Peace building",
        ],
      },
      {
        title: "Group Growth Management",
        items: [
          "Goal setting",
          "Assessment of capacity and readiness",
          "Phased implementation approaches",
          "Fostering partnerships and linkages",
          "Strengthening governance and systems",
          "Sustaining long-term growth",
        ],
      },
      {
        title: "Change Management",
        items: [
          "Management of change resistance",
          "Building buy-in and ownership",
          "Monitoring and evaluating change",
        ],
      },
    ],
    genderEquality: [
      "Economic Empowerment: Women gain access to savings, credit, and financial decision-making.",
      "Social Capital & Voice: Meetings build networks, confidence, leadership skills, and collective voice.",
      "Financial Autonomy: Control over cash enables investment in income-generating activities.",
      "Decision-making Shift: Joint or women-led activity shifts intra-household dynamics toward equity.",
      "Safety Net: Group savings reduce vulnerability and reliance on harmful coping strategies.",
      "Information & Capacity: Venue for financial literacy, business skills, health, rights, and gender-awareness training.",
      "Norms via Role Modeling: Visible women leaders challenge stereotypes and normalize women's public roles.",
    ],
  },
  {
    slug: "mkulima-imara",
    title: "MKULIMA IMARA",
    subtitle: "The Resilient Farmer",
    description:
      "A game-changing initiative synthesizing climate-smart practices, precision agriculture, market linkage access, and value addition strengthening to boost prosperity while protecting the planet.",
    image: "/what-we-do/mazie-farming.jpg",
    badge: "Agriculture",
    challenge:
      "Smallholder farmers battle resource depletion, high input costs, insufficient value chains, and limited access to modern technology, climate information, extension services, and markets. Climate change exacerbates these issues with unpredictable weather, droughts, floods, and pests.",
    solution:
      "A game-changing initiative synthesizing climate-smart practices, precision agriculture, market linkage access, and value addition strengthening to boost prosperity while protecting the planet.",
    keyFacts: [
      "Agriculture contributes 26–29% to Tanzania's GDP and employs 65–80% of Tanzanians.",
      "Smallholder farmers contribute over 75% of total agricultural output.",
      "39% of smallholder farmers live below the national poverty line (< $2/day).",
      "Farmers produce only 20–30% of their potential yields.",
      "Less than 10% of arable land is irrigated.",
      "Up to 65% of once productive land in Africa is degraded.",
      "30–40% of rural harvest in Tanzania is lost due to inadequate post-harvest infrastructure.",
      "Only about 7% of smallholder farmers have formal contracts with buyers.",
      "Maize accounts for 62.6% of total food crop production.",
    ],
    focus: [
      {
        title: "Boosting Productivity",
        items: [
          "Improved Farming Techniques: Minimum tillage, crop rotation, livestock integration, mulching, kitchen gardens.",
          "Quality Inputs & Mechanization: High-yield & disease-resistant seeds/breeds, fertilizers, affordable tools/machinery.",
          "Efficient Water Use: Drip irrigation, rainwater harvesting, micro-irrigation.",
          "Post-Harvest Management: Better storage, pest control, grain stores, silos, and drying to reduce losses.",
        ],
      },
      {
        title: "Market Access Linkage",
        items: [
          "Establishment and strengthening of Farmer Producer Organizations (FPOs) for aggregation and collective marketing.",
          "High Value Crop Production: Horticultural, spices, herbs, and organic products.",
          "Direct Sales: Linking farmers with buyers, processors, and digital marketplaces.",
        ],
      },
      {
        title: "Value Addition Strengthening",
        items: [
          "Processing: Turning raw products into sellable goods.",
          "Packaging: Branding, labeling, and protecting products for market appeal.",
          "Certification: Organic, Fairtrade, GlobalGAP recognition.",
        ],
      },
      {
        title: "Fostering Climate Resilience",
        items: [
          "Precision Agriculture Tools: Soil sensors (moisture, pH, nutrients) and mobile apps for agronomic info, animal health, and localized weather forecasts.",
          "Local Seed Preservation: Conserving traditional varieties adapted to local conditions.",
          "Adapting Practices: Drought-tolerant crops, intercropping, crop rotation, agroforestry.",
          "Improved Management: Better soil, water, pest, and disease management.",
        ],
      },
    ],
    whyItMatters: [
      "Unlock Food Security: Resilient food systems, consistent availability, improved dietary quality.",
      "Pathway Out of Poverty: Boosting productivity transforms lives and fuels local economies.",
      "Green Gains: Sustainable practices drive climate resilience and preserve ecosystems.",
      "Rural Revival: Profitable farms spark economic engines and create opportunities beyond the farm gate.",
      "Harvest Hope Globally: Stabilizing food systems for a prosperous, food-secure future.",
    ],
    implementation: [
      {
        title: "Progressive Rollout",
        content:
          "Starting with a small-scale pilot to test and refine strategy, gather data, demonstrate viability, and strengthen stakeholder engagement. Subsequent phases expand scope, scale, and geographical reach — building on lessons and mobilizing additional resources.",
      },
      {
        title: "Gender & Youth Inclusion",
        content:
          "Targeted empowerment through MSHIKAMANO groups and individual agri-enterprises: Leverage women's existing skills (produce >80% of rural food). Foster economic growth (women reinvest ~90% of earnings in family and investments). Address gender equality through access to land, credit, technology, and inputs. Harness youth energy, innovation, and tech skills. Address aging farmer issue by engaging next-generation farmers. Increase adoption of modern practices through youth as early adopters.",
      },
      {
        title: "Capacity Building & Extension Support",
        content:
          "Training of lead farmers and resource persons. Farmer Field Schools and Demonstration Plots. Exposure visits to successful productive, climate-smart, and precision farming initiatives.",
      },
      {
        title: "Stakeholder Engagements",
        content:
          "Leveraging strategic positioning to engage local government authorities, NGOs, international organizations, research institutions, financial institutions, policymakers, agro-dealers, and partners.",
      },
    ],
    expectedOutcomes: [
      "Increased crop yields",
      "Boosted farm incomes and food sovereignty",
      "Enhanced resilience to climate shocks and stresses",
      "Adoption of climate-smart and precision agriculture practices",
      "Strengthened agricultural value chains",
      "Empowered women and youth in sustainable agriculture",
    ],
    adoptionNumbers: [
      "76.2% of farmers grow drought-resistant crops.",
      "53.1% diversify crops to spread risk.",
      "Conservation agriculture (minimum tillage, cover cropping, mulching) is increasingly adopted.",
      "Agroforestry is enhancing biodiversity and improving land use.",
    ],
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

export function getFeaturedPrograms(count: number = 3): Program[] {
  return programs.slice(0, count);
}
