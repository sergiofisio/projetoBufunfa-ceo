import { useState } from "react";
import { MenuBar } from "../../components/menuBar/menuBar";
import CompanyInfo from "../../components/company/company.info";
import EmployeesShow from "../../components/employees/employees.show";
import CompanyTasks from "../../components/company/company.tasks";
import ExpenseCompany from "../../components/company/company.expense";
export default function Company() {
  const [selected, setSelected] = useState("home");
  const [companyFunctions, setCompanyFunctions] = useState({
    ceos: [],
    employees: [],
    tasks: [],
    expenses: [],
    loans: [],
    notify: [],
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
      {selected === "money" && (
        <ExpenseCompany type="required" expenses={companyFunctions.expenses} />
      )}
      {selected === "cart" && (
        <ExpenseCompany type="shop" expenses={companyFunctions.expenses} />
      )}
      <MenuBar selected={selected} setSelected={setSelected} />
    </div>
  );
}
