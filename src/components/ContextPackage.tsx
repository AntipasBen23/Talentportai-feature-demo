"use client";

import { useState } from "react";
import { Employee, CompanyStack } from "@/data/mockData";

interface ContextPackageProps {
  employee: Employee;
  company: CompanyStack;
  matchScore: number;
}

export default function ContextPackage({ employee, company, matchScore }: ContextPackageProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [packageGenerated, setPackageGenerated] = useState(false);

  const generatePackage = () => {
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      setPackageGenerated(true);
    }, 3000);
  };

  const onboardingTimeline = matchScore >= 80 ? "4 hours" : matchScore >= 60 ? "1 day" : "3 days";
  
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
      <h3 className="text-2xl font-bold text-[#1F3C93] mb-6">Instant Onboarding Package</h3>

      {!packageGenerated && !isGenerating && (
        <button
          onClick={generatePackage}
          className="w-full bg-gradient-to-r from-[#1F3C93] to-[#1ABC9C] text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-all shadow-md"
        >
          Generate Context Package
        </button>
      )}

      {isGenerating && (
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-700">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-[#1ABC9C] border-t-transparent"></div>
            <span>Analyzing tech stack requirements...</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-[#1ABC9C] border-t-transparent"></div>
            <span>Generating access templates...</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-[#1ABC9C] border-t-transparent"></div>
            <span>Creating onboarding documentation...</span>
          </div>
        </div>
      )}

      {packageGenerated && (
        <div className="space-y-6">
          {/* Timeline Estimate */}
          <div className="bg-gradient-to-r from-[#1ABC9C]/10 to-[#1F3C93]/10 rounded-xl p-6 border border-[#1ABC9C]/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700">Estimated Productivity Timeline</span>
              <span className="text-3xl font-bold text-[#1F3C93]">{onboardingTimeline}</span>
            </div>
            <p className="text-sm text-gray-600">
              Based on {matchScore}% stack match and verified skills
            </p>
          </div>

          {/* Package Contents */}
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#1ABC9C]">✓</span>
                <span className="text-gray-900 font-semibold">AWS Access Templates</span>
              </div>
              <p className="text-sm text-gray-600 ml-6">
                Pre-configured IAM roles, S3 bucket permissions, EC2 access
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#1ABC9C]">✓</span>
                <span className="text-gray-900 font-semibold">Snowflake Onboarding Guide</span>
              </div>
              <p className="text-sm text-gray-600 ml-6">
                Database schemas, role assignments, query examples
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#1ABC9C]">✓</span>
                <span className="text-gray-900 font-semibold">dbt Project Structure</span>
              </div>
              <p className="text-sm text-gray-600 ml-6">
                Model dependencies, testing framework, deployment process
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#1ABC9C]">✓</span>
                <span className="text-gray-900 font-semibold">Security Protocols</span>
              </div>
              <p className="text-sm text-gray-600 ml-6">
                VPN setup, MFA configuration, compliance requirements
              </p>
            </div>
          </div>

          {/* Download Button */}
          <button className="w-full bg-[#1ABC9C] text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-all shadow-md">
            Download Complete Package (PDF)
          </button>
        </div>
      )}
    </div>
  );
}