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
  {
    id: "6",
    name: "SQL",
    category: "Database",
    proficiency: 95,
    verified: true,
    lastVerified: "2024-01-02",
    verificationSource: "Query Performance",
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

// Additional employees for variety
export const mockEmployees: Employee[] = [
  mockEmployee,
  {
    id: "emp_002",
    name: "Marcus Johnson",
    role: "Construction Project Manager",
    company: "BuildRight Inc",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    skills: [
      {
        id: "c1",
        name: "AutoCAD",
        category: "Design Software",
        proficiency: 87,
        verified: true,
        lastVerified: "2024-01-01",
        verificationSource: "Project Files",
      },
      {
        id: "c2",
        name: "Project Management",
        category: "Leadership",
        proficiency: 92,
        verified: true,
        lastVerified: "2023-12-29",
        verificationSource: "Completion Records",
      },
      {
        id: "c3",
        name: "Safety Compliance",
        category: "Regulatory",
        proficiency: 96,
        verified: true,
        lastVerified: "2024-01-02",
        verificationSource: "Certifications",
      },
    ],
    totalVerifications: 23,
    passportScore: 89,
  },
  {
    id: "emp_003",
    name: "Elena Rodriguez",
    role: "Registered Nurse",
    company: "MediCare Hospital",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
    skills: [
      {
        id: "n1",
        name: "Critical Care",
        category: "Clinical",
        proficiency: 91,
        verified: true,
        lastVerified: "2024-01-02",
        verificationSource: "Patient Records",
      },
      {
        id: "n2",
        name: "IV Therapy",
        category: "Procedure",
        proficiency: 94,
        verified: true,
        lastVerified: "2024-01-01",
        verificationSource: "Clinical Hours",
      },
      {
        id: "n3",
        name: "EMR Systems",
        category: "Technology",
        proficiency: 88,
        verified: true,
        lastVerified: "2023-12-30",
        verificationSource: "System Logs",
      },
    ],
    totalVerifications: 34,
    passportScore: 92,
  },
];

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

export const mockCompanies: CompanyStack[] = [
  mockCompany,
  {
    id: "comp_002",
    name: "MegaBuild Construction",
    industry: "Construction",
    requiredSkills: ["AutoCAD", "Project Management", "Safety Compliance"],
    techStack: ["AutoCAD 2024", "Procore", "BIM 360", "MS Project"],
  },
  {
    id: "comp_003",
    name: "HealthFirst Network",
    industry: "Healthcare",
    requiredSkills: ["Critical Care", "IV Therapy", "EMR Systems"],
    techStack: ["Epic EMR", "Cerner", "Medical Devices", "HIPAA Protocols"],
  },
];

// TalentPortAi Brand Colors
export const COLORS = {
  primary: "#1F3C93",      // Navy Blue (primary brand color)
  secondary: "#1ABC9C",    // Teal (secondary brand color)
  background: "#F9FAFB",   // Light gray background
  white: "#FFFFFF",
  dark: "#1F2937",
  accent: "#10B981",       // Success green
};