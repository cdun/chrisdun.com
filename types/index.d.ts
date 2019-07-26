type EmploymentHistory = Role[];

type RichText = string | string[];

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
  description: RichText;
  started: string;
  ended: string;
  projects?: Project[];
}

interface Project {
  title: string;
  client?: Company;
  description: RichText;
  logo?: string;
  url?: string;
  technologies?: string;
  commendations?: Commendation[]; 
}