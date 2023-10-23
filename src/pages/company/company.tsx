import { useState } from "react";
import { MenuBar } from "../../components/menuBar/menuBar";
import CompanyInfo from "../../components/company/company.info";
import EmployeesShow from "../../components/employees/employees.show";
import CompanyTasks from "../../components/company/company.tasks";
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
    <div className="w-full h-[90%] bg-gradient-to-t from-purpleDark from-1% via-white via-10% to-white to-90% flex flex-col justify-between relative border-none">
      {selected === "home" && (
        <CompanyInfo
          companyFunctions={companyFunctions}
          setCompanyFunctions={setCompanyFunctions}
        />
      )}
      {selected === "people" && (
        <EmployeesShow employees={companyFunctions.employees} />
      )}
      {selected === "tasks" && <CompanyTasks tasks={companyFunctions.tasks} />}
      <MenuBar selected={selected} setSelected={setSelected} />
    </div>
  );
}
