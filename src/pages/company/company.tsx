import { useState } from "react";
import { MenuBar } from "../../components/menuBar/menuBar";
import CompanyInfo from "../../components/company/company.info";
import EmployeesShow from "../../components/employees/employees.show";
export default function Company() {
  const [selected, setSelected] = useState("home");
  const [companyFunctions, setCompanyFunctions] = useState({
    ceos: [],
    employees: [],
    tasks: [],
    expenses: [],
    loans: [],
  });
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-between">
      {selected === "home" && (
        <CompanyInfo
          companyFunctions={companyFunctions}
          setCompanyFunctions={setCompanyFunctions}
        />
      )}
      {selected === "people" && (
        <EmployeesShow employees={companyFunctions.employees} />
      )}
      <MenuBar selected={selected} setSelected={setSelected} />
    </div>
  );
}
