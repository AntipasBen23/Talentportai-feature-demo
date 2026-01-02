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
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 mb-6">
      <label className="text-white text-sm font-semibold mb-3 block">
        Select Company
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {companies.map((company) => (
          <button
            key={company.id}
            onClick={() => onSelect(company)}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              selectedCompany.id === company.id
                ? "border-[#FF6B35] bg-[#FF6B35]/20"
                : "border-white/10 bg-white/5 hover:border-white/30"
            }`}
          >
            <div>
              <p className="text-white font-semibold truncate">{company.name}</p>
              <p className="text-gray-400 text-xs truncate">{company.industry}</p>
            </div>
            <div className="mt-3">
              <span className="text-xs text-gray-400">
                {company.requiredSkills.length} required skills
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}