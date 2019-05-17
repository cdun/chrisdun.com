type EmploymentHistory = Role[];

interface Company {
  name: string;
  url?: string;
}

interface Commendation {
  attribution: {
    name: string;
    title?: string;
  };
  text: string;
}

interface Role {
  title: string;
  employer: Company;
  description: string;
  started: string;
  ended: string;
  projects?: Project[];
}

interface Project {
  title: string;
  client?: Company;
  description: string;
  logo?: string;
  url?: string;
  technologies?: string;
  commendations?: Commendation[]; 
}