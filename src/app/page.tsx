"use client";

import SkillsPassport from "@/components/SkillsPassport";
import StackMatcher from "@/components/StackMatcher";
import { mockEmployee, mockCompany } from "@/data/mockData";

export default function Home() {
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

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Left: Skills Passport */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Employee Profile</h2>
            <SkillsPassport employee={mockEmployee} />
          </div>

          {/* Right: Stack Matcher */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Company Requirements</h2>
            <StackMatcher employee={mockEmployee} company={mockCompany} />
          </div>
        </div>

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