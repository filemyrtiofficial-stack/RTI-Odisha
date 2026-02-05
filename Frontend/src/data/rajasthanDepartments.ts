/**
 * Odisha Departments organized by sections
 * Used for RTI department listing page
 * Structure matches Telangana/Delhi format for consistent rendering
 */

export interface JammuAndKashmirDepartmentSection {
  category: string;
  items: string[];
}

// Alias for Rajasthan (using same structure as Odisha)
export type DepartmentSection = JammuAndKashmirDepartmentSection;

export const jammuAndKashmirDepartments: JammuAndKashmirDepartmentSection[] = [
  {
    category: 'RTI Odisha General Administration & Home Affairs',
    items: [
      'RTI Odisha General Administration & Public Grievance Department',
      'RTI Odisha Home Department',
      'RTI Odisha Police Department',
      'RTI Odisha Law Department',
      'RTI Odisha Revenue & Disaster Management Department',
      'RTI Odisha Election Department',
    ]},
  {
    category: 'RTI Odisha Finance Department',
    items: [
      'RTI Odisha Finance Department',
      'RTI Odisha Revenue & Disaster Management Department',
      'RTI Odisha Registration & Stamps Department',
    ]},
  {
    category: 'RTI Odisha Education & Skill Development',
    items: [
      'RTI Odisha School & Mass Education Department',
      'RTI Odisha Higher Education Department',
      'RTI Odisha Technical Education & Training Department',
      'RTI Odisha Sports & Youth Services Department',
    ]},
  {
    category: 'RTI Odisha Health & Medical Services',
    items: [
      'RTI Odisha Health & Family Welfare Department',
    ]},
  {
    category: 'RTI Odisha Infrastructure & Development',
    items: [
      'RTI Odisha Public Works Department',
      'RTI Odisha Housing & Urban Development Department',
      'RTI Odisha Panchayati Raj & Drinking Water Department',
    ]},
  {
    category: 'RTI Odisha Agriculture & Rural Economy',
    items: []
  },
  {
    category: 'RTI Odisha Industries, Commerce & Tourism',
    items: [
      'RTI Odisha Tourism Department',
    ]},
  {
    category: 'RTI Odisha Environment & Forest',
    items: [
      'RTI Odisha Forest, Environment & Climate Change Department',
    ]},
  {
    category: 'RTI Odisha Social Welfare & Employment',
    items: []
  },
  {
    category: 'RTI Odisha Information Technology & Culture',
    items: [
      'RTI Odisha Electronics & Information Technology Department',
      'RTI Odisha Information & Public Relations Department',
    ]}];

// Export for Rajasthan (using Odisha structure for now)
export const rajasthanDepartments: DepartmentSection[] = jammuAndKashmirDepartments;

// Uttar Pradesh Templates section showing Odisha RTI departments (as requested)
export const uttarPradeshDepartments: DepartmentSection[] = [
  {
    category: 'RTI Odisha Finance, Planning & Revenue',
    items: [
      'RTI Odisha Finance Department',
      'RTI Odisha Planning & Convergence Department',
      'RTI Odisha Revenue & Disaster Management Department',
      'RTI Odisha Excise Department',
      'RTI Odisha Registration & Stamps Department',
      'RTI Odisha Commercial Tax Department',
    ],
  },
  {
    category: 'RTI Odisha Education & Skill Development',
    items: [
      'RTI Odisha Higher Education Department',
      'RTI Odisha Technical Education & Training Department',
      'RTI Odisha Skill Development & Technical Education Department',
      'RTI Odisha School & Mass Education Department',
      'RTI Odisha Sports & Youth Services Department',
    ],
  },
  {
    category: 'RTI Odisha Health & Medical Services',
    items: [
      'RTI Odisha Health & Family Welfare Department',
      'RTI Odisha Medical Education & Training Department',
      'RTI Odisha AYUSH Department',
    ],
  },
  {
    category: 'RTI Odisha Infrastructure & Development',
    items: [
      'RTI Odisha Energy Department',
      'RTI Odisha Water Resources Department',
      'RTI Odisha Works Department',
      'RTI Odisha Public Works Department',
      'RTI Odisha Rural Development Department',
      'RTI Odisha Housing & Urban Development Department',
      'RTI Odisha Panchayati Raj & Drinking Water Department',
      'RTI Odisha Commerce & Transport Department',
    ],
  },
  {
    category: 'RTI Odisha Agriculture & Allied Sectors',
    items: [
      'RTI Odisha Agriculture & Farmers\' Empowerment Department',
      'RTI Odisha Fisheries & Animal Resources Development Department',
      'RTI Odisha Cooperation Department',
    ],
  },
  {
    category: 'RTI Odisha Industries, Commerce & Tourism',
    items: [
      'RTI Odisha Industries Department',
      'RTI Odisha MSME Department',
      'RTI Odisha Handlooms, Textiles & Handicrafts Department',
      'RTI Odisha Tourism Department',
    ],
  },
  {
    category: 'RTI Odisha Environment & Forest',
    items: [
      'RTI Odisha Forest, Environment & Climate Change Department',
      'RTI Odisha Wildlife Department',
    ],
  },
  {
    category: 'RTI Odisha Social Welfare & Employment',
    items: [
      'RTI Odisha Labour & Employees\' State Insurance Department',
      'RTI Odisha ST & SC Development, Minorities & Backward Classes Welfare Department',
      'RTI Odisha Scheduled Castes & Scheduled Tribes Development Department',
      'RTI Odisha Women & Child Development Department',
      'RTI Odisha Social Security & Empowerment of Persons with Disabilities Department',
      'RTI Odisha Information & Public Relations Department',
    ],
  },
  {
    category: 'RTI Odisha Information Technology & Culture',
    items: [
      'RTI Odisha Electronics & IT Department',
      'RTI Odisha Electronics & Information Technology Department',
      'RTI Odisha Sports & Youth Services Department',
    ],
  },
  {
    category: 'RTI Odisha Law & Constitutional Authorities',
    items: [
      'RTI Odisha Law Department',
      'RTI Odisha Parliamentary Affairs Department',
      'RTI Odisha Election Department',
      'RTI Odisha General Administration & Public Grievance Department',
      'RTI Odisha Police Department',
      'RTI Odisha Information & Public Relations Department',
    ],
  },
];
