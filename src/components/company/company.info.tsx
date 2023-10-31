import { useEffect, useState } from "react";
import building from "../../assets/building.svg";
import edit from "../../assets/icons/edit.svg";
import notify from "../../assets/icons/notify.svg";
import changeCompany from "../../assets/icons/update.svg";
import iconPeople from "../../assets/icons/peopleGold.svg";
import iconCoin from "../../assets/icons/coin.svg";
import iconEdit from "../../assets/icons/editWhite.svg";
import { getItem } from "../../utils/storage";
import AxiosInstance from "../../connection";
import { useNavigate } from "react-router-dom";
import CompanyPerson from "./company.person";
import ModalEditSalary from "../modal/modal.edit.salary";
import point from "../../assets/icons/point.svg";
import ModalNotify from "../modal/modal.notify";
import { PulseLoader } from "react-spinners";

export default function CompanyInfo({
  companyFunctions,
  setCompanyFunctions,
}: {
  companyFunctions?: any;
  setCompanyFunctions?: any;
}) {
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
  const [photo, setPhoto] = useState<string | null>("");
  const [name, setName] = useState<string | null>("");
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [noReadNotify, setNoReadNotify] = useState(false);
  const [modalNotify, setModalNotify] = useState<any>("");
  const [loading, setLoading] = useState(false);

  const getCompanyInfo = async () => {
    const {
      data: { company },
    } = await AxiosInstance.axiosPrivate.get(
      `/companyInfo/ceo/${await getItem("company")}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    setPhoto(await getItem("photo"));
    setName(await getItem("name"));

    await setCompanyInfo({
      name: company.name,
      background: company.background,
      cnpj: company.cnpj,
      description: company.description,
      logo: company.logo,
      slogan: company.slogan,
      salary: company.salary,
    });

    await setCompanyFunctions({
      ceos: company.ceos,
      employees: company.companyEmployees,
      tasks: company.tasks,
      expenses: company.expenses,
      loans: company.loans,
      notify: company.notify,
    });
  };

  useEffect(() => {
    if (name) {
      companyFunctions.notify.find((n: any) => {
        if (!n.seen) return setNoReadNotify(true);
      });

      setLoading(true);
    }
    getCompanyInfo();
  }, [name, showModalEdit]);
  return (
    <>
      {companyInfo && (
        <div className="w-full h-full flex flex-col items-center justify-center">
          {!loading ? (
            <>
              <PulseLoader color="#240046" />
              <h2>Carregando</h2>
            </>
          ) : (
            <>
              <div
                className={`w-full min-h-[30%] max-h-[30%] bg-purpleDark flex items-center justify-center relative`}
              >
                <header
                  className={`flex justify-between pt-5 px-2 absolute top-0 left-0 w-full z-[1]`}
                >
                  <div className="flex items-center bg-purpleDark min-w-[8rem] max-w-[12rem] h-10 rounded-3xl px-2 gap-2 shadow-2xl shadow-whiteBg">
                    <img
                      className="rounded-[100%] bg-white border-2 border-solid border-white w-8 h-8"
                      src={photo || ""}
                      alt={`photo ${getItem("name")}`}
                    />
                    <h2 className="text-gold truncate text-ellipsis">
                      {name?.split(" ")[0]}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-[100%] p-2 bg-purpleDark shadow-2xl shadow-whiteBg flex items-center justify-center">
                      <img
                        onClick={() => {
                          navigate("/editCompany");
                        }}
                        src={edit}
                        alt="icon Edit"
                      />
                    </div>
                    <div
                      onClick={() => setModalNotify(companyFunctions.notify)}
                      className="w-10 h-10 rounded-[100%] p-2 bg-purpleDark shadow-2xl shadow-whiteBg flex items-center justify-center relative"
                    >
                      <img src={notify} alt="icon notify" />
                      {noReadNotify && (
                        <img
                          className="absolute top-0 -right-1 w-4 h-4"
                          src={point}
                          alt="point"
                        />
                      )}
                    </div>
                    <div className="w-10 h-10 rounded-[100%] p-2 bg-purpleDark shadow-2xl shadow-whiteBg flex items-center justify-center">
                      <img
                        src={changeCompany}
                        alt="icon change company"
                        onClick={() => {
                          navigate("/home");
                        }}
                      />
                    </div>
                  </div>
                </header>
                <img
                  className="absolute top-0 h-full w-full"
                  src={companyInfo.background || building}
                  alt={`background ${companyInfo.name}`}
                />
                <img
                  className="absolute -bottom-5 left-5 h-24 w-24 bg-white rounded-[100%] border-8 border-purpleDark"
                  src={companyInfo.logo || building}
                  alt={`logo ${companyInfo.name}`}
                />
              </div>
              <div className="w-full max-h-[70%] h-full p-6 flex flex-col justify-evenly gap-3 overflow-y-scroll">
                <div className="bg-purpleDark w-full h-40 rounded-md text-gold text-subTitle py-4 px-2 flex flex-col">
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-gold text-subTitle w-10/12">
                      {companyInfo.name}
                    </h2>
                    <div className="flex items-center gap-2 ">
                      <h2>
                        {companyFunctions.ceos.length +
                          companyFunctions.employees.length}
                      </h2>
                      <img
                        className="h-full"
                        src={iconPeople}
                        alt="icon people"
                      />
                    </div>
                  </div>
                  <h2 className="text-textBodyLink2">"{companyInfo.slogan}"</h2>
                  <p className="text-textBody text-white truncate whitespace-break-spaces h-full">
                    {companyInfo.description}
                  </p>
                </div>
                <div className="bg-purpleDark w-full h-16 rounded-md text-white text-title py-4 px-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={iconCoin} alt="coin" />
                    <h2>
                      {(companyInfo.salary / 100).toLocaleString("pt-BR", {
                        style: "decimal",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </h2>
                  </div>
                  <img
                    onClick={() => {
                      setShowModalEdit(true);
                    }}
                    src={iconEdit}
                    alt="icon edit"
                  />
                </div>
                <div className="flex gap-6 max-w-screen overflow-x-scroll scrollbar-thin scrollbar-thumb-purpleDark">
                  {companyFunctions.ceos.length > 0 &&
                    companyFunctions.ceos.map(({ ceo }: { ceo: any }) => {
                      return (
                        <div key={ceo.id}>
                          <CompanyPerson id={ceo.id} person={ceo} type="ceo" />
                        </div>
                      );
                    })}
                  {companyFunctions.employees.length > 0 &&
                    companyFunctions.employees.map(
                      ({ employee }: { employee: any }) => {
                        return (
                          <div key={employee.id}>
                            <CompanyPerson id={employee.id} person={employee} />
                          </div>
                        );
                      }
                    )}
                </div>
              </div>
            </>
          )}
          {showModalEdit && (
            <ModalEditSalary
              setShowModalEdit={setShowModalEdit}
              value={companyInfo.salary}
            />
          )}
        </div>
      )}
      {modalNotify && (
        <ModalNotify
          employees={companyFunctions.employees}
          modalNotify={modalNotify}
          setModalNotify={setModalNotify}
        />
      )}
    </>
  );
}
