"use client";

import { useState } from "react";
import { Employee, CompanyStack } from "@/data/mockData";

interface StackMatcherProps {
  employee: Employee;
  company: CompanyStack;
}

export default function StackMatcher({ employee, company }: StackMatcherProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [matchScore, setMatchScore] = useState<number | null>(null);

  const calculateMatch = () => {
    setIsAnalyzing(true);
    setMatchScore(null);

    // Simulate AI analysis
    setTimeout(() => {
      const employeeSkillNames = employee.skills.map((s) => s.name);
      const matches = company.requiredSkills.filter((skill) =>
        employeeSkillNames.includes(skill)
      );
      const score = Math.round((matches.length / company.requiredSkills.length) * 100);
      setMatchScore(score);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl">
      {/* Company Info */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{company.name}</h3>
        <p className="text-gray-400">{company.industry}</p>
      </div>

      {/* Required Skills */}
      <div className="mb-6">
        <h4 className="text-white font-semibold mb-3">Required Skills</h4>
        <div className="flex flex-wrap gap-2">
          {company.requiredSkills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#00A8B5]/20 text-[#00A8B5] rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-8">
        <h4 className="text-white font-semibold mb-3">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {company.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/10 text-gray-300 rounded-lg text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Match Button */}
      <button
        onClick={calculateMatch}
        disabled={isAnalyzing}
        className="w-full bg-gradient-to-r from-[#00A8B5] to-[#FF6B35] text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-all disabled:opacity-50"
      >
        {isAnalyzing ? "Analyzing Match..." : "Calculate Stack Match"}
      </button>

      {/* Match Result */}
      {isAnalyzing && (
        <div className="mt-6 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#00A8B5] border-t-transparent"></div>
          <p className="text-gray-400 mt-2 text-sm">AI analyzing tech stack compatibility...</p>
        </div>
      )}

      {matchScore !== null && !isAnalyzing && (
        <div className="mt-6 bg-gradient-to-br from-[#00A8B5]/20 to-[#FF6B35]/20 rounded-xl p-6 border border-[#00A8B5]/30">
          <div className="text-center mb-4">
            <div className="text-5xl font-bold text-white mb-2">{matchScore}%</div>
            <p className="text-gray-300">Stack Match Score</p>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-[#00A8B5] to-[#FF6B35] h-3 rounded-full transition-all duration-1000"
              style={{ width: `${matchScore}%` }}
            />
          </div>
          <p className="text-sm text-gray-400 mt-4 text-center">
            {matchScore >= 80
              ? "✓ Excellent fit - Can contribute immediately"
              : matchScore >= 60
              ? "⚡ Good fit - Minor onboarding needed"
              : "⚠️ Partial fit - Training recommended"}
          </p>
        </div>
      )}
    </div>
  );
}