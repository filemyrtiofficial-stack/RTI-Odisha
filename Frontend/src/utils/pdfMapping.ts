/**
 * Maps department names to their corresponding PDF file paths
 * Handles variations in PDF file naming conventions
 */

interface PDFMapping {
  [key: string]: string;
}

// Helper function to create PDF path from state, category and department
// Returns the relative path that can be used with import.meta.url or fetch
const createPDFPath = (state: string, category: string, fileName: string): string => {
  // For Vite, we'll use the path relative to src/assets
  return `${state}/${category}/${fileName}`;
};


// Helper function to detect state from department name
const detectState = (departmentName: string): string => {
  // Check for Odisha in department name
  if (departmentName.toLowerCase().includes('odisha')) {
    return 'odisha';
  }
  // Default to current state (Odisha)
  return 'odisha';
};

// Mapping of department display names to PDF file names
const departmentToPDFMap: PDFMapping = {
  // RTI Delhi Police & Security
  'RTI Delhi Police': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Police.pdf'),
  'RTI Delhi Fire Services Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Fire Services Department.pdf'),
  'RTI Delhi Prisons Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Prisoners Department.pdf'),
  'RTI Delhi Home Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Home Department.pdf'),
  'RTI Delhi Judicial Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Judicial Department.pdf'),
  'RTI Delhi Law, Justice & Legislative Affairs Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Law, Justice & Legislative Affairs Department.pdf'),
  'RTI Delhi Disaster Management Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For  Delhi Disaster Management Department.pdf'),

  // RTI Delhi Municipal & Housing
  'RTI Delhi Municipal Corporation (MCD)': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For  Delhi Municipal Corporation (MCD).pdf'),
  'RTI Delhi Urban Development Department': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For Delhi Urban Development Department.pdf'),
  'RTI Delhi Housing & Urban Development Department': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For  Delhi Housing & Urban Development Department.pdf'),
  'RTI Delhi Public Works Department (PWD)': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For Delhi Public Works Department (PWD).pdf'),
  'RTI Delhi Rural Development Department': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For Delhi Rural Development Department.pdf'),

  // RTI Delhi Utilities & Infrastructure
  'RTI Delhi Jal Board (DJB)': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Templare For Delhi Jal Board (DJB).pdf'),
  'RTI Delhi Transco Limited (DTL)': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template For Delhi Transco Limited (DTL).pdf'),
  'RTI Delhi Power Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Delhi Power Department.pdf'),
  'RTI Delhi Water Supply Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template For Delhi Water Supply Department.pdf'),
  'RTI Delhi Ground Water Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template for Delhi Ground Water Department.pdf'),
  'RTI Delhi Irrigation & Flood Control Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template for Delhi Irrigation & Flood Control Department.pdf'),
  'RTI Delhi Renewable Energy Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template for Delhi Renewable Energy Department.pdf'),

  // RTI Delhi Government Services
  'RTI Delhi Revenue Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Revenue Department.pdf'),
  'RTI Delhi Education Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Education Department.pdf'),
  'RTI Delhi Health & Family Welfare Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Health & Family Welfare.pdf'),
  'RTI Delhi Transport Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Transport Department.pdf'),
  'RTI Delhi Finance Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Finance Department.pdf'),
  'RTI Delhi Registration & Stamps Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Registration & Stamps Department.pdf'),
  'RTI Delhi Planning Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Planning Department.pdf'),

  // RTI Delhi Social Welfare
  'RTI Delhi Social Welfare Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Social Welfare Department.pdf'),
  'RTI Delhi Scheduled Castes & Scheduled Tribes Welfare Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Scheduled Castes & Scheduled Tribes Welfare Department.pdf'),
  'RTI Delhi Women & Child Development Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Women & Child Development Department.pdf'),
  'RTI Delhi Backward Classes Welfare Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Backward Classes Welfare Department.pdf'),
  'RTI Delhi Minority Affairs Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Minority Affairs Department.pdf'),
  'RTI Delhi Youth & Sports Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Youth & Sports Department.pdf'),

  // RTI Delhi Commerce & Industry
  'RTI Delhi Labour Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Labour Department.pdf'),
  'RTI Delhi Industries Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Industries Department.pdf'),
  'RTI Delhi Value Added Tax Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Value Added Tax Department.pdf'),
  'RTI Delhi Food, Civil Supplies & Consumer Affairs Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Food, Civil Supplies & Consumer Affairs Department.pdf'),
  'RTI Delhi Consumer Affairs Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Consumer Affairs Department.pdf'),
  'RTI Delhi Cooperation Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Cooperation Department.pdf'),
  'RTI Delhi Agricultural Marketing Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Agricultural Marketing Department.pdf'),

  // RTI Delhi Environment & Resources
  'RTI Delhi Environment Department': createPDFPath('delhi', 'RTI Delhi Environment & Resources', 'RTI Template for Delhi Environment Department.pdf'),
  'RTI Delhi Forest & Wildlife Department': createPDFPath('delhi', 'RTI Delhi Environment & Resources', 'RTI Template for Delhi Forest & Wildlife Department.pdf'),
  'RTI Delhi Mines & Geology Department': createPDFPath('delhi', 'RTI Delhi Environment & Resources', 'RTI Template for Delhi Mines & Geology Department.pdf'),
  'RTI Delhi Science & Technology Department': createPDFPath('delhi', 'RTI Delhi Environment & Resources', 'RTI Template for Delhi Science & Technology Department.pdf'),

  // RTI Delhi Culture & Tourism
  'RTI Delhi Tourism Department': createPDFPath('delhi', 'RTI Delhi Culture & Tourism', 'RTI Template for Delhi Tourism Department.pdf'),
  'RTI Delhi Art, Culture & Languages Department': createPDFPath('delhi', 'RTI Delhi Culture & Tourism', 'RTI Template for Delhi Art, Culture & Languages Department.pdf'),
  'RTI Delhi Archaeology Department': createPDFPath('delhi', 'RTI Delhi Culture & Tourism', 'RTI Template for Delhi Archaeology Department.pdf'),
  'RTI Delhi Handloom & Handicrafts Department': createPDFPath('delhi', 'RTI Delhi Culture & Tourism', 'RTI Template for Delhi Handloom & Handicrafts Department.pdf'),

  // RTI Delhi Information & Technology
  'RTI Delhi Information & Publicity Department': createPDFPath('delhi', 'RTI Delhi Information & Technology', 'RTI Template for Delhi Information & Publicity Department.pdf'),
  'RTI Delhi Information Technology Department': createPDFPath('delhi', 'RTI Delhi Information & Technology', 'RTI Template for Delhi Information Technology Department.pdf'),
  'RTI Delhi Telecommunications Department': createPDFPath('delhi', 'RTI Delhi Information & Technology', 'RTI Template for Delhi Telecommunications Department.pdf'),
  'RTI Delhi Postal Services Department': createPDFPath('delhi', 'RTI Delhi Information & Technology', 'RTI Template for Delhi Postal Services Department.pdf'),

  // RTI Delhi Financial Services
  'RTI Delhi Banking & Financial Services Department': createPDFPath('delhi', 'RTI Delhi Financial Services', 'RTI Template for Delhi Banking & Financial Services Department.pdf'),
  'RTI Delhi Insurance Department': createPDFPath('delhi', 'RTI Delhi Financial Services', 'RTI Template for Delhi Insurance Department.pdf'),
  'RTI Delhi Pension Department': createPDFPath('delhi', 'RTI Delhi Financial Services', 'RTI Template for Delhi Pension Department.pdf'),

  // ========== TELANGANA DEPARTMENTS ==========
  // RTI Telangana Police & Security
  'RTI Telangana Police Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Police Department.pdf'),
  'RTI Telangana Fire Services Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Fire Services Department.pdf'),
  'RTI Telangana Prisons Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Prisons Department.pdf'),
  'RTI Telangana Home Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Home Department.pdf'),
  'RTI Telangana Law Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Law Department.pdf'),
  'RTI Telangana Disaster Management Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Disaster Management Department.pdf'),

  // RTI Telangana Municipal & Housing (Note: folder name has typo "Muncipal")
  'RTI Greater Hyderabad Municipal Corporation (GHMC)': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Greater Hyderabad Municipal Corporation (GHMC).pdf'),
  'RTI Telangana Municipal Administration & Urban Development Department': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Telangana Municipal Administration & Urban Development Department (MA&UD).pdf'),
  'RTI Telangana Housing Department': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Telangana Housing Department.pdf'),
  'RTI Telangana Public Works Department (PWD)': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Telangana Public Works Department (PWD).pdf'),
  'RTI Telangana Panchayat Raj & Rural Development Department': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Telangana Panchayat Raj & Rural Development Department.pdf'),
  'RTI Telangana Urban Development Department': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Telangana Urban Development Department.pdf'),

  // RTI Telangana Utilities & Infrastructure
  'RTI Telangana Energy Department': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana Energy Department.pdf'),
  'RTI Telangana State Transmission Corporation (TSTRANSCO)': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana State Transmission Corporation (TSTRANSCO).pdf'),
  'RTI Telangana State Power Generation Corporation (TSGENCO)': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana State Power Generation Corporation (TSGENCO).pdf'),
  'RTI Telangana State Southern Power Distribution Company (TSSPDCL)': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana State Southern Power Distribution Company (TSSPDCL).pdf'),
  'RTI Telangana State Northern Power Distribution Company (TSNPDCL)': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana State Northern Power Distribution Company (TSNPDCL).pdf'),
  'RTI Telangana Irrigation & CAD Department': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana Irrigation & CAD Department.pdf'),

  // RTI Telangana Government Services
  'RTI Telangana Secretariat': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Secretariat.pdf'),
  'RTI Telangana Revenue Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Revenue Department.pdf'),
  'RTI Telangana Education Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Education Department.pdf'),
  'RTI Telangana Health & Family Welfare Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Health & Family Welfare Department.pdf'),
  'RTI Telangana Transport Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Transport Department.pdf'),
  'RTI Telangana Finance Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Finance Department.pdf'),
  'RTI Telangana Registration & Stamps Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Registration & Stamps Department.pdf'),
  'RTI Telangana Planning Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Planning Department.pdf'),

  // RTI Telangana Social Welfare (Note: folder name has typo "Telanganga")
  'RTI Telangana Social Welfare Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Social Welfare Department.pdf'),
  'RTI Telangana Scheduled Castes Development Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Scheduled Castes Development Department.pdf'),
  'RTI Telangana Scheduled Tribes Welfare Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Scheduled Tribes Welfare Department.pdf'),
  'RTI Telangana Women & Child Development Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Women & Child Development Department.pdf'),
  'RTI Telangana Backward Classes Welfare Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Backward Classes Welfare Department.pdf'),
  'RTI Telangana Minority Welfare Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Minority Welfare Department.pdf'),
  'RTI Telangana Youth & Sports Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Youth & Sports Department.pdf'),

  // RTI Telangana Commerce & Industry
  'RTI Telangana Labour Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA LABOUR DEPARTMENT.pdf'),
  'RTI Telangana Industries & Commerce Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA INDUSTRIES & COMMERCE DEPARTMENT.pdf'),
  'RTI Telangana Commercial Taxes Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA COMMERCIAL TAXES DEPARTMENT.pdf'),
  'RTI Telangana Food & Civil Supplies Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA FOOD & CIVIL SUPPLIES DEPARTMENT.pdf'),
  'RTI Telangana Agriculture & Cooperation Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA AGRICULTURE & COOPERATION DEPARTMENT.pdf'),
  'RTI Telangana Handlooms & Textiles Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA HANDLOOMS & TEXTILES DEPARTMENT.pdf'),

  // RTI Telangana Environment & Resources
  'RTI Telangana Environment Department': createPDFPath('telangana', 'RTI Telangana Environment & Resources', 'RTI TEMPLATE FOR TELANGANA ENVIRONMENT DEPARTMENT.pdf'),
  'RTI Telangana Forest Department': createPDFPath('telangana', 'RTI Telangana Environment & Resources', 'RTI TEMPLATE FOR TELANGANA FOREST DEPARTMENT.pdf'),
  'RTI Telangana Mines & Geology Department': createPDFPath('telangana', 'RTI Telangana Environment & Resources', 'RTI TEMPLATE FOR TELANGANA MINES & GEOLOGY DEPARTMENT.pdf'),
  'RTI Telangana Water Resources Department': createPDFPath('telangana', 'RTI Telangana Environment & Resources', 'RTI TEMPLATE FOR TELANGANA WATER RESOURCES DEPARTMENT.pdf'),

  // RTI Telangana Culture & Tourism
  'RTI Telangana Tourism & Culture Department': createPDFPath('telangana', 'RTI Telangana Culture & Tourism', 'RTI TEMPLATE FOR TELANGANA TOURISM & CULTURE DEPARTMENT.pdf'),
  'RTI Telangana Information & Public Relations Department': createPDFPath('telangana', 'RTI Telangana Culture & Tourism', 'RTI TEMPLATE FOR TELANGANA INFORMATION & PUBLIC RELATIONS DEPARTMENT.pdf'),
  'RTI Telangana Archaeology Department': createPDFPath('telangana', 'RTI Telangana Culture & Tourism', 'RTI TEMPLATE FOR TELANGANA ARCHAEOLOGY DEPARTMENT.pdf'),
  'RTI Telangana Endowments Department': createPDFPath('telangana', 'RTI Telangana Culture & Tourism', 'RTI TEMPLATE FOR TELANGANA ENDOWMENTS DEPARTMENT.pdf'),

  // RTI Telangana Information & Technology
  'RTI Telangana Information Technology Department': createPDFPath('telangana', 'RTI Telangana Information & Technology', 'RTI TEMPLATE FOR TELANGANA INFORMATION TECHNOLOGY DEPARTMENT.pdf'),
  'RTI Telangana State Technology Services (TSTS)': createPDFPath('telangana', 'RTI Telangana Information & Technology', 'RTI TEMPLATE FOR TELANGANA STATE TECHNOLOGY SERVICES (TSTS).pdf'),
  'RTI Telangana State FibreNet Limited': createPDFPath('telangana', 'RTI Telangana Information & Technology', 'RTI TEMPLATE FOR TELANGANA STATE FIBRENET LIMITED.pdf'),
  'RTI Telangana State Innovation Cell': createPDFPath('telangana', 'RTI Telangana Information & Technology', 'RTI TEMPLATE FOR TELANGANA STATE INNOVATION CELL.pdf'),

  // RTI Telangana Education & Health
  'RTI Telangana School Education Department': createPDFPath('telangana', 'RTI Telangana Education & Health', 'RTI TEMPLATE FOR TELANGANA SCHOOL EDUCATION DEPARTMENT.pdf'),
  'RTI Telangana Higher Education Department': createPDFPath('telangana', 'RTI Telangana Education & Health', 'RTI TEMPLATE FOR TELANGANA HIGHER EDUCATION DEPARTMENT.pdf'),
  'RTI Telangana Technical Education Department': createPDFPath('telangana', 'RTI Telangana Education & Health', 'RTI TEMPLATE FOR TELANGANA TECHNICAL EDUCATION DEPARTMENT.pdf'),
  'RTI Telangana Medical & Health Department': createPDFPath('telangana', 'RTI Telangana Education & Health', 'RTI TEMPLATE FOR TELANGANA MEDICAL & HEALTH DEPARTMENT.pdf'),
  'RTI Telangana State Medical Services & Infrastructure Development Corporation (TSMSIDC)': createPDFPath('telangana', 'RTI Telangana Education & Health', 'RTI TEMPLATE FOR TELANGANA STATE MEDICAL SERVICES & INFRASTRUCTURE DEVELOPMENT CORPORATION (TSMSIDC).pdf'),

  // ========== Odisha DEPARTMENTS ==========
  // All Odisha PDFs are in: /assets/PDF/RTI_Jammu_and_Kashmir_FULL_CERTIFIED_FINAL/
  // Organized in subfolders by category
  

  // ========== ODISHA DEPARTMENTS ==========
  // All Odisha PDFs are in: /assets/PDF/
  'RTI Odisha Agriculture & Farmers\' Empowerment Department': 'RTI_Odisha_Agriculture_&_Farmers_Empowerment_Department.pdf',
  'RTI Odisha Commerce & Transport Department': 'RTI_Odisha_Commerce_&_Transport_Department.pdf',
  'RTI Odisha Commercial Tax & Excise Department': 'RTI_Odisha_Commercial_Tax_&_Excise_Department.pdf',
  'RTI Odisha Election Department': 'RTI_Odisha_Election_Department.pdf',
  'RTI Odisha Electronics & Information Technology Department': 'RTI_Odisha_Electronics_&_Information_Technology_Department.pdf',
  'RTI Odisha Energy Department': 'RTI_Odisha_Energy_Department.pdf',
  'RTI Odisha Finance Department': 'RTI_Odisha_Finance_Department.pdf',
  'RTI Odisha Fisheries & Animal Resources Development Department': 'RTI_Odisha_Fisheries_&_Animal_Resources_Development_Department.pdf',
  'RTI Odisha Forest, Environment & Climate Change Department': 'RTI_Odisha_Forest,_Environment_&_Climate_Change_Department.pdf',
  'RTI Odisha General Administration & Public Grievance Department': 'RTI_Odisha_General_Administration_&_Public_Grievance_Department.pdf',
  'RTI Odisha Health & Family Welfare Department': 'RTI_Odisha_Health_&_Family_Welfare_Department.pdf',
  'RTI Odisha Higher Education Department': 'RTI_Odisha_Higher_Education_Department.pdf',
  'RTI Odisha Home Department': 'RTI_Odisha_Home_Department.pdf',
  'RTI Odisha Housing & Urban Development Department': 'RTI_Odisha_Housing_&_Urban_Development_Department.pdf',
  'RTI Odisha Industries Department': 'RTI_Odisha_Industries_Department.pdf',
  'RTI Odisha Information & Public Relations Department': 'RTI_Odisha_Information_&_Public_Relations_Department.pdf',
  'RTI Odisha Labour & Employees\' State Insurance Department': 'RTI_Odisha_Labour_&_Employees_State_Insurance_Department.pdf',
  'RTI Odisha Law Department': 'RTI_Odisha_Law_Department.pdf',
  'RTI Odisha Panchayati Raj & Drinking Water Department': 'RTI_Odisha_Panchayati_Raj_&_Drinking_Water_Department.pdf',
  'RTI Odisha Planning & Convergence Department': 'RTI_Odisha_Planning_&_Convergence_Department.pdf',
  'RTI Odisha Police Department': 'RTI_Odisha_Police_Department.pdf',
  'RTI Odisha Public Works Department': 'RTI_Odisha_Public_Works_Department.pdf',
  'RTI Odisha Registration & Stamps Department': 'RTI_Odisha_Registration_&_Stamps_Department.pdf',
  'RTI Odisha Revenue & Disaster Management Department': 'RTI_Odisha_Revenue_&_Disaster_Management_Department.pdf',
  'RTI Odisha Scheduled Castes & Scheduled Tribes Development Department': 'RTI_Odisha_Scheduled_Castes_&_Scheduled_Tribes_Development_Department.pdf',
  'RTI Odisha School & Mass Education Department': 'RTI_Odisha_School_&_Mass_Education_Department.pdf',
  'RTI Odisha Social Security & Empowerment of Persons with Disabilities Department': 'RTI_Odisha_Social_Security_&_Empowerment_of_Persons_with_Disabilities_Department.pdf',
  'RTI Odisha Sports & Youth Services Department': 'RTI_Odisha_Sports_&_Youth_Services_Department.pdf',
  'RTI Odisha Technical Education & Training Department': 'RTI_Odisha_Technical_Education_&_Training_Department.pdf',
  'RTI Odisha Tourism Department': 'RTI_Odisha_Tourism_Department.pdf',
  'RTI Odisha Water Resources Department': 'RTI_Odisha_Water_Resources_Department.pdf',
  'RTI Odisha Women & Child Development Department': 'RTI_Odisha_Women_&_Child_Development_Department.pdf',
};

/**
 * Get the state from a department name
 * @param departmentName - The display name of the department
 * @returns The state name ('telangana', 'odisha', or 'delhi')
 */
export const getStateFromDepartment = (departmentName: string): string => {
  return detectState(departmentName);

  };

/**
 * Get the PDF path for a given department name
 * @param departmentName - The display name of the department
 * @returns The path to the PDF file, or null if not found
 */
export const getPDFPath = (departmentName: string): string | null => {
  return departmentToPDFMap[departmentName] || null;
};

/**
 * Check if a PDF exists for a given department
 * @param departmentName - The display name of the department
 * @returns True if PDF mapping exists, false otherwise
 */
export const hasPDF = (departmentName: string): boolean => {
  return departmentName in departmentToPDFMap;
};

