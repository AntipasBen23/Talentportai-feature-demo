export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: number; // 0-100
  verified: boolean;
  lastVerified?: string;
  verificationSource?: string;
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  skills: Skill[];
  totalVerifications: number;
  passportScore: number; // 0-100
}

export const mockSkills: Skill[] = [
  {
    id: "1",
    name: "AWS",
    category: "Cloud Infrastructure",
    proficiency: 92,
    verified: true,
    lastVerified: "2024-01-02",
    verificationSource: "CloudTrail Activity",
  },
  {
    id: "2",
    name: "Snowflake",
    category: "Data Warehouse",
    proficiency: 88,
    verified: true,
    lastVerified: "2024-01-01",
    verificationSource: "Query Logs",
  },
  {
    id: "3",
    name: "dbt",
    category: "Data Transformation",
    proficiency: 85,
    verified: true,
    lastVerified: "2023-12-30",
    verificationSource: "GitHub Commits",
  },
  {
    id: "4",
    name: "Python",
    category: "Programming",
    proficiency: 90,
    verified: true,
    lastVerified: "2024-01-02",
    verificationSource: "GitHub Contributions",
  },
  {
    id: "5",
    name: "Terraform",
    category: "Infrastructure as Code",
    proficiency: 78,
    verified: true,
    lastVerified: "2023-12-28",
    verificationSource: "AWS Deployments",
  },
];

export const mockEmployee: Employee = {
  id: "emp_001",
  name: "Sarah Chen",
  role: "Senior Data Engineer",
  company: "TechCorp Solutions",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  skills: mockSkills,
  totalVerifications: 47,
  passportScore: 94,
};

export interface CompanyStack {
  id: string;
  name: string;
  industry: string;
  requiredSkills: string[];
  techStack: string[];
}

export const mockCompany: CompanyStack = {
  id: "comp_001",
  name: "DataFlow Inc",
  industry: "FinTech",
  requiredSkills: ["AWS", "Snowflake", "Python", "dbt"],
  techStack: ["AWS EC2", "Snowflake", "Apache Airflow", "dbt Cloud", "Python 3.11"],
};