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
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
      <h3 className="text-2xl font-bold text-white mb-6">Instant Onboarding Package</h3>

      {!packageGenerated && !isGenerating && (
        <button
          onClick={generatePackage}
          className="w-full bg-gradient-to-r from-[#00A8B5] to-[#0D4F5C] text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-all"
        >
          Generate Context Package
        </button>
      )}

      {isGenerating && (
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-300">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-[#00A8B5] border-t-transparent"></div>
            <span>Analyzing tech stack requirements...</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-[#00A8B5] border-t-transparent"></div>
            <span>Generating access templates...</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-[#00A8B5] border-t-transparent"></div>
            <span>Creating onboarding documentation...</span>
          </div>
        </div>
      )}

      {packageGenerated && (
        <div className="space-y-6">
          {/* Timeline Estimate */}
          <div className="bg-gradient-to-r from-[#00A8B5]/20 to-[#FF6B35]/20 rounded-xl p-6 border border-[#00A8B5]/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Estimated Productivity Timeline</span>
              <span className="text-3xl font-bold text-white">{onboardingTimeline}</span>
            </div>
            <p className="text-sm text-gray-400">
              Based on {matchScore}% stack match and verified skills
            </p>
          </div>

          {/* Package Contents */}
          <div className="space-y-3">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-green-400">✓</span>
                <span className="text-white font-semibold">AWS Access Templates</span>
              </div>
              <p className="text-sm text-gray-400 ml-6">
                Pre-configured IAM roles, S3 bucket permissions, EC2 access
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-green-400">✓</span>
                <span className="text-white font-semibold">Snowflake Onboarding Guide</span>
              </div>
              <p className="text-sm text-gray-400 ml-6">
                Database schemas, role assignments, query examples
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-green-400">✓</span>
                <span className="text-white font-semibold">dbt Project Structure</span>
              </div>
              <p className="text-sm text-gray-400 ml-6">
                Model dependencies, testing framework, deployment process
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-green-400">✓</span>
                <span className="text-white font-semibold">Security Protocols</span>
              </div>
              <p className="text-sm text-gray-400 ml-6">
                VPN setup, MFA configuration, compliance requirements
              </p>
            </div>
          </div>

          {/* Download Button */}
          <button className="w-full bg-[#FF6B35] text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-all">
            Download Complete Package (PDF)
          </button>
        </div>
      )}
    </div>
  );
}