import { useState } from "react";
import { MenuBar } from "../../components/menuBar/menuBar";
import CompanyInfo from "../../components/companyInfo/company.info";
export default function Company({ company }: { company?: any }) {
  const [selected, setSelected] = useState("home");
  return (
    <div>
      {selected === "home" && <CompanyInfo companyId={company.id} />}
      <MenuBar selected={selected} setSelected={setSelected} />
    </div>
  );
}
