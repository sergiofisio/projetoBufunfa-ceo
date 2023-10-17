import { useState } from "react";
import building from "../../assets/building.svg";
import edit from "../../assets/icons/edit.svg";
import notify from "../../assets/icons/notify.svg";
import changeCompany from "../../assets/icons/update.svg";
import { MenuBar } from "../../components/menuBar/menuBar";
import { getItem } from "../../utils/storage";
export default function CompanyInfo({ company }: { company?: any }) {
  const [selected, setSelected] = useState("home");
  return (
    <div>
      <div className={`w-full h-60 relative bg-purpleDark`}>
        <header className="flex justify-between pt-5 px-2 absolute top-0 left-0 w-full">
          <div className="flex items-center bg-purpleDark min-w-[8rem] max-w-[12rem] h-10 rounded-3xl px-2 gap-2 ">
            <img
              className="rounded-[100%] bg-white border-2 border-solid w-8 h-8"
              src={getItem("photo") || ""}
              alt={`photo ${getItem("name")}`}
            />
            <h2 className="text-gold truncate text-ellipsis">
              {getItem("name")?.split(" ")[0]}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="w-10 h-10 rounded-[100%] p-2 bg-purpleDark"
              src={edit}
              alt="icon Edit"
            />
            <img
              className="w-10 h-10 rounded-[100%] p-2 bg-purpleDark"
              src={notify}
              alt="icon notify"
            />
            <img
              className="w-10 h-10 rounded-[100%] p-2 bg-purpleDark"
              src={changeCompany}
              alt="icon change company"
            />
          </div>
        </header>
        <img
          className="w-full h-full"
          src={company.background || building}
          alt={`background ${company.name}`}
        />
        <img
          className="absolute -bottom-5 left-5 w-32 h-32 bg-white rounded-[100%] border-8 border-purpleDark"
          src={company.logo || building}
          alt={`logo ${company.name}`}
        />
      </div>
      <div className="absolute w-full h-full"></div>
      <MenuBar selected={selected} setSelected={setSelected} />
    </div>
  );
}
