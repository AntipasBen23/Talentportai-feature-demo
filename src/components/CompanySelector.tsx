"use client";

import { CompanyStack } from "@/data/mockData";

interface CompanySelectorProps {
  companies: CompanyStack[];
  selectedCompany: CompanyStack;
  onSelect: (company: CompanyStack) => void;
}

export default function CompanySelector({
  companies,
  selectedCompany,
  onSelect,
}: CompanySelectorProps) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-md mb-6">
      <label className="text-[#1F3C93] text-sm font-semibold mb-3 block">
        Select Company
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {companies.map((company) => (
          <button
            key={company.id}
            onClick={() => onSelect(company)}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              selectedCompany.id === company.id
                ? "border-[#1F3C93] bg-[#1F3C93]/10"
                : "border-gray-200 bg-gray-50 hover:border-[#1F3C93]/50"
            }`}
          >
            <div>
              <p className="text-gray-900 font-semibold truncate">{company.name}</p>
              <p className="text-gray-600 text-xs truncate">{company.industry}</p>
            </div>
            <div className="mt-3">
              <span className="text-xs text-gray-600">
                {company.requiredSkills.length} required skills
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}