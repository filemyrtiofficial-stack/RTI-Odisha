import React, { useState, useCallback } from 'react';
import { uttarPradeshDepartments } from '../../data/rajasthanDepartments';
import { AnimatedSection } from '../common/AnimatedSection';
import { PDFDownloadModal } from '../common/PDFDownloadModal';

export const RajasthanEnhancedDepartments: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const displayedCategories = uttarPradeshDepartments.slice(0, 10);

  const handleDepartmentClick = useCallback((departmentName: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Always open the modal - it will handle missing PDFs gracefully
    setSelectedDepartment(departmentName);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedDepartment(null);
  }, []);

  return (
    <>
      <section className="py-8 md:py-10 bg-white">
        <div className="container-responsive max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fadeIn" delay={200}>
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 tracking-wide mb-4">
                RTI Templates for Odisha Departments
              </h2>
              <p className="text-sm md:text-base font-normal text-gray-600 max-w-2xl mx-auto leading-relaxed">
                View RTI templates for Odisha departments. Click any department to open its PDF.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={400}>
            <div className="bg-white rounded-lg border border-gray-200 shadow-lg p-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5">
                {displayedCategories.map((category, index) => (
                  <AnimatedSection key={category.category} animation="slideUp" delay={500 + index * 50}>
                    <div>
                      <h3 className="font-semibold text-xs leading-none mb-1" style={{ color: '#0267AD' }}>
                        {category.category}
                      </h3>
                      <ul className="space-y-0 -space-y-0.5">
                        {category.items.map((dept) => (
                          <li key={dept} className="leading-none m-0 p-0">
                            <button
                              onClick={(e) => handleDepartmentClick(dept, e)}
                              className="text-xs text-gray-600 hover:underline transition-colors cursor-pointer block leading-none py-0 m-0 text-left w-full"
                              style={{ lineHeight: '1.2' }}
                              onMouseEnter={(e) => e.currentTarget.style.color = '#1E88E5'}
                              onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                            >
                              {dept}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PDF Download Modal */}
      {selectedDepartment && (
        <PDFDownloadModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          departmentName={selectedDepartment}
        />
      )}
    </>
  );
};
