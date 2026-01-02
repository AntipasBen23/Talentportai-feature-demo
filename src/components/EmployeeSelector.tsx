"use client";

import { Employee } from "@/data/mockData";

interface EmployeeSelectorProps {
  employees: Employee[];
  selectedEmployee: Employee;
  onSelect: (employee: Employee) => void;
}

export default function EmployeeSelector({
  employees,
  selectedEmployee,
  onSelect,
}: EmployeeSelectorProps) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-md mb-6">
      <label className="text-[#1F3C93] text-sm font-semibold mb-3 block">
        Select Employee Profile
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {employees.map((employee) => (
          <button
            key={employee.id}
            onClick={() => onSelect(employee)}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              selectedEmployee.id === employee.id
                ? "border-[#1ABC9C] bg-[#1ABC9C]/10"
                : "border-gray-200 bg-gray-50 hover:border-[#1ABC9C]/50"
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src={employee.avatar}
                alt={employee.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <p className="text-gray-900 font-semibold truncate">{employee.name}</p>
                <p className="text-gray-600 text-xs truncate">{employee.role}</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-gray-600">{employee.skills.length} skills</span>
              <span className="text-xs font-semibold text-[#1ABC9C]">
                {employee.passportScore}% score
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}