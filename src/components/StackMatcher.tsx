"use client";

import { useState } from "react";
import { Employee, CompanyStack } from "@/data/mockData";

interface StackMatcherProps {
  employee: Employee;
  company: CompanyStack;
  onMatchCalculated?: (score: number) => void;
}

export default function StackMatcher({ employee, company, onMatchCalculated }: StackMatcherProps) {
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
      
      // Notify parent component
      if (onMatchCalculated) {
        onMatchCalculated(score);
      }
    }, 2000);
  };

  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg max-w-2xl">
      {/* Company Info */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[#1F3C93] mb-2">{company.name}</h3>
        <p className="text-gray-600">{company.industry}</p>
      </div>

      {/* Required Skills */}
      <div className="mb-6">
        <h4 className="text-gray-900 font-semibold mb-3">Required Skills</h4>
        <div className="flex flex-wrap gap-2">
          {company.requiredSkills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#1ABC9C]/10 text-[#1ABC9C] border border-[#1ABC9C]/30 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-8">
        <h4 className="text-gray-900 font-semibold mb-3">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {company.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm border border-gray-200"
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
        className="w-full bg-gradient-to-r from-[#1F3C93] to-[#1ABC9C] text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-all disabled:opacity-50 shadow-md"
      >
        {isAnalyzing ? "Analyzing Match..." : "Calculate Stack Match"}
      </button>

      {/* Match Result */}
      {isAnalyzing && (
        <div className="mt-6 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#1ABC9C] border-t-transparent"></div>
          <p className="text-gray-600 mt-2 text-sm">AI analyzing tech stack compatibility...</p>
        </div>
      )}

      {matchScore !== null && !isAnalyzing && (
        <div className="mt-6 bg-gradient-to-br from-[#1ABC9C]/10 to-[#1F3C93]/10 rounded-xl p-6 border border-[#1ABC9C]/30">
          <div className="text-center mb-4">
            <div className="text-5xl font-bold text-[#1F3C93] mb-2">{matchScore}%</div>
            <p className="text-gray-700">Stack Match Score</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-[#1F3C93] to-[#1ABC9C] h-3 rounded-full transition-all duration-1000"
              style={{ width: `${matchScore}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
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