/**
 * ============================================================================
 * STATE DATA CONFIGURATION
 * ============================================================================
 * 
 * Purpose: Central configuration file containing static data for all states.
 *          Provides fallback data when backend API is unavailable.
 * 
 * State Usage: All states (Odisha, Telangana, Delhi, etc.)
 * 
 * Architecture:
 * - Static data ensures zero blocking time
 * - Backend API enhances this data when available
 * - Each state has complete configuration (hero, departments, FAQs, etc.)
 * 
 * Key Data Structures:
 * - StateData: Complete state configuration
 * - StateHero: Hero section content
 * - StateFAQ: Frequently asked questions
 * 
 * Usage:
 * - Imported by useStateData hook
 * - Used as fallback when API fails
 * - Provides immediate data for SSR/SSG
 * 
 * Used by: useStateData hook, all state pages
 * ============================================================================
 */

// ====== TYPE DEFINITIONS ======
export interface StateHero {
  title: string;
  subtitle: string;
  image: string;
  cta: string;
}

export interface StateFAQ {
  q: string;
  a: string;
}

export interface StateData {
  name: string;
  slug: string;
  languages: string[];
  hero: StateHero;
  departments: string[];
  highlights: string[];
  faqs: StateFAQ[];
  description?: string;
  rtiPortalUrl?: string;
  process?: {
    steps: Array<{
      step: number;
      title: string;
      description: string;
    }>;
  };
  commission?: string;
  fee?: string;
  designTheme?: 'telangana' | 'default'; // Design theme for different layouts
}

export const states: Record<string, StateData> = {
  'telangana': {
    name: "Telangana",
    slug: "telangana",
    languages: ["English", "Telugu", "Urdu"],
    designTheme: "telangana",
    hero: {
      title: "File RTI Online in Telangana — Simplest Way to Get Government Information",
      subtitle: "Draft and file RTI applications to Telangana Government departments and offices without visiting in person.",
      image: "/images/telangana-banner.jpg",
      cta: "Start RTI for Telangana",
    },
    departments: [
      "Telangana Secretariat",
      "Telangana Revenue Department",
      "Telangana Police Department",
      "Telangana Education Department",
      "Telangana Health & Family Welfare Department",
      "Telangana Transport Department",
      "Telangana Public Works Department (PWD)",
      "Telangana Irrigation & CAD Department",
      "Telangana Rural Development Department",
      "Telangana Municipal Administration & Urban Development Department",
      "Telangana Registration & Stamps Department",
      "Telangana Commercial Taxes Department",
      "Telangana Labour Department",
      "Telangana Social Welfare Department",
      "Telangana Scheduled Castes Development Department",
      "Telangana Scheduled Tribes Welfare Department",
      "Telangana Women & Child Development Department",
      "Telangana Backward Classes Welfare Department",
      "Telangana Minority Welfare Department",
      "Telangana Youth & Sports Department",
      "Telangana Information & Public Relations Department",
      "Telangana Finance Department",
      "Telangana Planning Department",
      "Telangana Home Department",
      "Telangana Law Department",
      "Telangana Forest Department",
      "Telangana Environment Department",
      "Telangana Mines & Geology Department",
      "Telangana Industries & Commerce Department",
      "Telangana Information Technology Department",
      "Telangana Tourism & Culture Department",
      "Telangana Housing Department",
      "Telangana Water Resources Department",
      "Telangana Energy Department",
      "Telangana Agriculture & Cooperation Department",
      "Telangana Food & Civil Supplies Department",
      "Telangana Panchayat Raj & Rural Development Department",
      "Telangana Urban Development Department",
      "Telangana Medical & Health Department",
      "Telangana School Education Department",
      "Telangana Higher Education Department",
      "Telangana Technical Education Department",
      "Telangana Animal Husbandry Department",
      "Telangana Fisheries Department",
      "Telangana Horticulture Department",
      "Telangana Sericulture Department",
      "Telangana Handlooms & Textiles Department",
      "Telangana Endowments Department",
      "Telangana BC Welfare Department",
    ],
    highlights: [
      "Covered: Telangana Secretariat & State Departments",
      "Expert-drafted RTI questions",
      "Online filing and tracking support",
    ],
    faqs: [
      { q: "Can I file RTI to Telangana Secretariat online?", a: "Yes, you can file RTI applications to Telangana Secretariat and all state departments online through FileMyRTI. We handle drafting, submission, and tracking for you." },
      { q: "How long does RTI reply take in Telangana?", a: "As per RTI Act 2005, government departments in Telangana must respond within 30 days. In case of information concerning life or liberty, the response must be provided within 48 hours." },
      { q: "Can I file RTI for land records and property disputes in Telangana?", a: "Yes, you can file RTI applications for land records, property documents, and related information from Telangana Revenue Department, Registration & Stamps Department, and other relevant authorities." },
      { q: "Can I file RTI without visiting Meeseva or government offices?", a: "Yes, with FileMyRTI, you can file RTI applications completely online without visiting Meeseva centers or government offices. We handle all the paperwork and submission for you." },
    ],
    process: {
      steps: [
        {
          step: 1,
          title: "Share your RTI details for Telangana department or office",
          description: "Tell us what information you need from any Telangana Government department or office.",
        },
        {
          step: 2,
          title: "Our team drafts your RTI as per RTI Act, 2005 and Telangana rules",
          description: "Our experts draft a professional RTI application compliant with RTI Act 2005 and Telangana state rules.",
        },
        {
          step: 3,
          title: "We file, track, and help you with replies or appeals",
          description: "We handle submission, fee payment, tracking, and assist with first/second appeals if needed.",
        },
      ],
    },
    commission: "Telangana State Information Commission (TSIC)",
    fee: "₹10",
  },
  'odisha': {
    name: "Odisha",
    slug: "odisha",
    languages: ["English", "Hindi", "Odia"],
    designTheme: "default",
    hero: {
      title: "File RTI Online for Odisha Government Departments",
      subtitle: "Get expert-drafted RTI applications for Revenue, Police, Education, Transport and more – without visiting offices.",
      image: "/images/hero.webp",
      cta: "File RTI for Odisha",
    },
    departments: [
      "RTI Odisha General Administration & Public Grievance Department",
      "RTI Odisha Home Department",
      "RTI Odisha Police Department",
      "RTI Odisha Finance Department",
      "RTI Odisha Planning & Convergence Department",
      "RTI Odisha Revenue & Disaster Management Department",
      "RTI Odisha Commercial Tax & Excise Department",
      "RTI Odisha Registration & Stamps Department",
      "RTI Odisha School & Mass Education Department",
      "RTI Odisha Higher Education Department",
      "RTI Odisha Technical Education & Training Department",
      "RTI Odisha Health & Family Welfare Department",
      "RTI Odisha Public Works Department",
      "RTI Odisha Panchayati Raj & Drinking Water Department",
      "RTI Odisha Housing & Urban Development Department",
      "RTI Odisha Commerce & Transport Department",
      "RTI Odisha Agriculture & Farmers' Empowerment Department",
      "RTI Odisha Fisheries & Animal Resources Development Department",
      "RTI Odisha Forest, Environment & Climate Change Department",
      "RTI Odisha Industries Department",
      "RTI Odisha Tourism Department",
      "RTI Odisha Social Security & Empowerment of Persons with Disabilities Department",
      "RTI Odisha Labour & Employees' State Insurance Department",
      "RTI Odisha Scheduled Castes & Scheduled Tribes Development Department",
      "RTI Odisha Women & Child Development Department",
      "RTI Odisha Sports & Youth Services Department",
      "RTI Odisha Information & Public Relations Department",
      "RTI Odisha Electronics & Information Technology Department",
      "RTI Odisha Energy Department",
      "RTI Odisha Water Resources Department",
      "RTI Odisha Law Department",
      "RTI Odisha Election Department",
    ],
    highlights: [
      "Covered: Odisha Secretariat & State Departments",
      "Expert-drafted RTI questions",
      "Online filing and tracking support",
      "Service across all districts of Odisha",
    ],
    faqs: [
      { q: "Can I file RTI online in Odisha?", a: "Yes, you can file RTI applications for Odisha state departments online through FileMyRTI without visiting government offices." },
      { q: "Do I need to visit any government office to file RTI?", a: "No. The RTI filing process can be completed fully online with assistance from FileMyRTI." },
      { q: "What is the fee for filing an RTI application?", a: "The RTI application fee in Odisha is ₹10 for state departments. BPL cardholders are exempted from paying fees." },
      { q: "How long does it take to receive a response?", a: "As per the RTI Act, the Public Information Officer must provide information within 30 days from the date of receipt. For matters concerning life and liberty, the response must be given within 48 hours." },
      { q: "Can RTI be filed for state government departments in Odisha?", a: "Yes, RTI can be filed for Odisha state government departments and public authorities." },
      { q: "Is RTI filing available for individual citizens?", a: "Yes, any Indian citizen can file an RTI application." },
    ],
    process: {
      steps: [
        {
          step: 1,
          title: "Share your RTI details for Odisha department or office",
          description: "Tell us what information you need from any Odisha Government department or office.",
        },
        {
          step: 2,
          title: "Our team drafts your RTI as per RTI Act, 2005 and Odisha rules",
          description: "Our experts draft a professional RTI application compliant with RTI Act 2005 and Odisha Information Commission guidelines.",
        },
        {
          step: 3,
          title: "We file, track, and help you with replies or appeals",
          description: "We handle submission, fee payment, tracking, and assist with first/second appeals to Odisha Information Commission if needed.",
        },
      ],
    },
    commission: "Odisha Information Commission",
    fee: "₹10",
  },
};

export const getStateBySlug = (slug: string): StateData | undefined => {
  return states[slug.toLowerCase()];
};

export const getAllStateSlugs = (): string[] => {
  return Object.keys(states);
};
