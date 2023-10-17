import { useEffect, useState } from "react";
import building from "../../assets/building.svg";
import edit from "../../assets/icons/edit.svg";
import notify from "../../assets/icons/notify.svg";
import changeCompany from "../../assets/icons/update.svg";
import iconPeople from "../../assets/icons/peopleGold.svg";
import iconCoin from "../../assets/icons/coin.svg";
import { getItem } from "../../utils/storage";
import axiosPrivate from "../../connection";
import { useNavigate } from "react-router-dom";

export default function CompanyInfo({ companyId }: { companyId?: number }) {
  const navigate = useNavigate();
  const [companyInfo, setCompanyInfo] = useState({
    name: "",
    background: "",
    cnpj: "",
    description: "",
    logo: "",
    slogan: "",
    salary: 0,
  });
  const [ceos, setCeos] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loans, setLoans] = useState([]);

  const getCompanyInfo = async () => {
    const {
      data: { company },
    } = await axiosPrivate.get(`/companyInfo/ceo/${companyId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    setCompanyInfo({
      name: company.name,
      background: company.background,
      cnpj: company.cnpj,
      description: company.description,
      logo: company.logo,
      slogan: company.slogan,
      salary: company.salary,
    });

    setCeos(company.ceos);
    setEmployees(company.companyEmployees);
    setTasks(company.tasks);
    setExpenses(company.expenses);
    setLoans(company.loans);
  };

  useEffect(() => {
    getCompanyInfo();
  }, []);
  return (
    <>
      {companyInfo && (
        <>
          <div className={`w-full h-60 relative bg-purpleDark`}>
            <header className="flex justify-between pt-5 px-2 absolute top-0 left-0 w-full">
              <div className="flex items-center bg-purpleDark min-w-[8rem] max-w-[12rem] h-10 rounded-3xl px-2 gap-2 shadow-2xl shadow-whiteBg">
                <img
                  className="rounded-[100%] bg-white border-2 border-solid border-white w-8 h-8"
                  src={getItem("photo") || ""}
                  alt={`photo ${getItem("name")}`}
                />
                <h2 className="text-gold truncate text-ellipsis">
                  {getItem("name")?.split(" ")[0]}
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="w-10 h-10 rounded-[100%] p-2 bg-purpleDark shadow-2xl shadow-whiteBg"
                  src={edit}
                  alt="icon Edit"
                />
                <img
                  className="w-10 h-10 rounded-[100%] p-2 bg-purpleDark shadow-2xl shadow-whiteBg"
                  src={notify}
                  alt="icon notify"
                />
                <img
                  className="w-10 h-10 rounded-[100%] p-2 bg-purpleDark shadow-2xl shadow-whiteBg"
                  src={changeCompany}
                  alt="icon change company"
                  onClick={() => {
                    navigate("/home");
                  }}
                />
              </div>
            </header>
            <img
              className="w-full h-full"
              src={companyInfo.background || building}
              alt={`background ${companyInfo.name}`}
            />
            <img
              className="absolute -bottom-5 left-5 w-32 h-32 bg-white rounded-[100%] border-8 border-purpleDark"
              src={companyInfo.logo || building}
              alt={`logo ${companyInfo.name}`}
            />
          </div>
          <div className="w-full h-full p-6">
            <div className="bg-purpleDark w-full h-40 rounded-md text-gold text-subTitle py-4 px-2 flex flex-col">
              <div className="flex justify-between items-center w-full">
                <h2 className="text-gold text-subTitle w-10/12">
                  {companyInfo.name}
                </h2>
                <div className="flex items-center gap-2 ">
                  <h2>{ceos.length + employees.length}</h2>
                  <img className="h-full" src={iconPeople} alt="icon people" />
                </div>
              </div>
              <h2 className="text-textBodyLink2">"{companyInfo.slogan}"</h2>
              <p className="text-textBody text-white truncate whitespace-break-spaces h-full">
                {companyInfo.description}
              </p>
            </div>
            <div>
              <img src={iconCoin} alt="coin" />
              <h2>
                {(companyInfo.salary * 100).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h2>
            </div>
          </div>
        </>
      )}
    </>
  );
}
