"use client";

import { Employee } from "@/data/mockData";

interface SkillsPassportProps {
  employee: Employee;
}

export default function SkillsPassport({ employee }: SkillsPassportProps) {
  return (
    <div className="bg-gradient-to-br from-[#1F3C93] to-[#1ABC9C] rounded-2xl p-8 text-white shadow-2xl max-w-2xl">
      {/* Header */}
      <div className="flex items-center gap-6 mb-8">
        <img
          src={employee.avatar}
          alt={employee.name}
          className="w-24 h-24 rounded-full border-4 border-white/30"
        />
        <div>
          <h2 className="text-3xl font-bold">{employee.name}</h2>
          <p className="text-white/80 text-lg">{employee.role}</p>
          <p className="text-white/60">{employee.company}</p>
        </div>
      </div>

      {/* Passport Score */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/80">Passport Score</span>
          <span className="text-3xl font-bold">{employee.passportScore}/100</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-3">
          <div
            className="bg-[#1ABC9C] h-3 rounded-full transition-all duration-1000"
            style={{ width: `${employee.passportScore}%` }}
          />
        </div>
        <p className="text-sm text-white/60 mt-2">
          {employee.totalVerifications} verified skills
        </p>
      </div>

      {/* Skills Grid */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold mb-4">Verified Skills</h3>
        {employee.skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="font-semibold">{skill.name}</span>
                {skill.verified && (
                  <span className="text-[#1ABC9C] text-sm">✓ Verified</span>
                )}
              </div>
              <span className="text-sm text-white/70">{skill.proficiency}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2 mb-2">
              <div
                className="bg-white h-2 rounded-full transition-all duration-500"
                style={{ width: `${skill.proficiency}%` }}
              />
            </div>
            <div className="text-xs text-white/60">
              {skill.category} • Last verified: {skill.lastVerified}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}