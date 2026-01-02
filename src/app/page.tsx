"use client";

import { useState } from "react";
import SkillsPassport from "@/components/SkillsPassport";
import StackMatcher from "@/components/StackMatcher";
import ContextPackage from "@/components/ContextPackage";
import ActivityFeed from "@/components/ActivityFeed";
import EmployeeSelector from "@/components/EmployeeSelector";
import CompanySelector from "@/components/CompanySelector";
import { mockEmployees, mockCompanies } from "@/data/mockData";

export default function Home() {
  const [selectedEmployee, setSelectedEmployee] = useState(mockEmployees[0]);
  const [selectedCompany, setSelectedCompany] = useState(mockCompanies[0]);
  const [matchScore, setMatchScore] = useState<number | null>(null);

  const handleEmployeeChange = (employee: typeof mockEmployees[0]) => {
    setSelectedEmployee(employee);
    setMatchScore(null); // Reset match score when changing employee
  };

  const handleCompanyChange = (company: typeof mockCompanies[0]) => {
    setSelectedCompany(company);
    setMatchScore(null); // Reset match score when changing company
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            TalentPort Skills Passport™
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time skill verification that proves borrowed talent can contribute on Day 1, not Week 3
          </p>
        </div>

        {/* Selectors */}
        <div className="max-w-7xl mx-auto mb-8">
          <EmployeeSelector
            employees={mockEmployees}
            selectedEmployee={selectedEmployee}
            onSelect={handleEmployeeChange}
          />
          <CompanySelector
            companies={mockCompanies}
            selectedCompany={selectedCompany}
            onSelect={handleCompanyChange}
          />
        </div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-8">
          {/* Left Column: Skills Passport */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">Employee Profile</h2>
            <SkillsPassport employee={selectedEmployee} />
          </div>

          {/* Right Column: Activity Feed */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Platform Activity</h2>
            <ActivityFeed />
          </div>
        </div>

        {/* Stack Matcher Section */}
        <div className="max-w-7xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Company Requirements</h2>
          <StackMatcher 
            employee={selectedEmployee} 
            company={selectedCompany}
            onMatchCalculated={setMatchScore}
          />
        </div>

        {/* Context Package Section */}
        {matchScore !== null && (
          <div className="max-w-7xl mx-auto mb-16">
            <ContextPackage 
              employee={selectedEmployee}
              company={selectedCompany}
              matchScore={matchScore}
            />
          </div>
        )}

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-[#00A8B5] text-3xl mb-3">⚡</div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Instant Verification
            </h3>
            <p className="text-gray-400 text-sm">
              Real-time skill badges connected to actual work activity
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-[#00A8B5] text-3xl mb-3">🎯</div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Smart Matching
            </h3>
            <p className="text-gray-400 text-sm">
              AI-powered tech stack alignment for perfect fit
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-[#00A8B5] text-3xl mb-3">🚀</div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Zero Onboarding Friction
            </h3>
            <p className="text-gray-400 text-sm">
              Auto-generated context packages for immediate productivity
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}