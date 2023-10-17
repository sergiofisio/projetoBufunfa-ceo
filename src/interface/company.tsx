interface Company {
  id: Number;
  name: string;
  slogan?: string;
  description?: string;
  cnpj: string;
  logo?: string;
  background?: string;
  salary?: number;
  ceos: ceo[];
  companyEmployees?: employee[];
  tasks?: task[];
}

interface ceo {
  id: Number;
  name: string;
  email: string;
  cpf: string;
  photo?: string;
  type: string;
}

interface employee {
  id: Number;
  employeeId: Number;
  companyId: Number;
  salary: Number;
  emloyee: {
    id: Number;
    name: string;
    email: string;
    cpf: string;
    photo?: string;
    type: string;
  };
}

interface task {
  id: Number;
  tiitle: string;
  description: string;
  value: Number;
  companyId: Number;
}

export interface CompanyList {
  company: Company;
}
