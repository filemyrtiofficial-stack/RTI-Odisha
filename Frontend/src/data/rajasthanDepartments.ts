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

